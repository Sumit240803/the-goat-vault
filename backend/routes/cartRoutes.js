const express = require("express");
const Products = require("../models/Products");
const Cart = require("../models/Cart");
const cartRouter = express.Router();

cartRouter.post("/add", async (req, res) => {
    try {
      const { userId, productId, quantity } = req.body;
  
      if (!userId || !productId || quantity <= 0) {
        return res.status(400).json({ message: "Invalid input" });
      }
  
      // Find the product
      const product = await Products.findById(productId);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      // Check stock availability
      if (product.stock < quantity) {
        return res.status(400).json({ message: "Insufficient stock" });
      }
  
      // Find the user's cart or create one
      let cart = await Cart.findOne({ user: userId });
  
      if (!cart) {
        cart = new Cart({ user: userId, items: [], totalPrice: 0 });
      }
  
      // Check if the product is already in the cart
      const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId);
  
      if (itemIndex > -1) {
        // If product exists, update quantity
        cart.items[itemIndex].quantity += quantity;
      } else {
        // Else, add new product
        cart.items.push({ product: productId, quantity });
      }
  
      // Recalculate total price using discounted price
      cart.totalPrice = await calculateTotalPrice(cart.items);
  
      await cart.save();
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.post("/remove", async (req, res) => {
    try {
      const { userId, productId } = req.body;
  
      if (!userId || !productId) {
        return res.status(400).json({ message: "Invalid input" });
      }
  
      // Find the user's cart
      let cart = await Cart.findOne({ user: userId });
  
      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }
  
      // Find the product in the cart
      const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId);
  
      if (itemIndex === -1) {
        return res.status(404).json({ message: "Product not in cart" });
      }
  
      // Remove or decrease quantity
      if (cart.items[itemIndex].quantity > 1) {
        cart.items[itemIndex].quantity -= 1;
      } else {
        cart.items.splice(itemIndex, 1);
      }
  
      // Recalculate total price
      cart.totalPrice = await calculateTotalPrice(cart.items);
  
      // Save cart
      await cart.save();
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Helper function to calculate total price using discounted price
  const calculateTotalPrice = async (items) => {
    let total = 0;
    for (const item of items) {
      const product = await Products.findById(item.product);
      total += product.discountedPrice * item.quantity;
    }
    return total;
  };

module.exports = cartRouter