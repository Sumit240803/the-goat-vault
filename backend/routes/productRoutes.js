const express = require("express");
const Products = require("../models/Products");
const { protect, admin } = require("../middlewares/authMiddleware");


const productRouter = express.Router();

// Add a product (Admin only)
productRouter.post("/add", protect, admin, async (req, res) => {
  try {
    const { name, description, price, discount, category, brand, stock, images } = req.body;

    if (!name || !description || !price || !category || !brand || !stock) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const product = new Products({
      name,
      description,
      price,
      discount,
      category,
      brand,
      stock,
      images,
    });

    await product.save();
    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});
productRouter.get("/category/:category", async (req, res) => {
    try {
        const { category } = req.params;
        const page = parseInt(req.query.page) || 1; // Default to page 1
        const limit = parseInt(req.query.limit) || 10; // Default to 10 products per page
        const skip = (page - 1) * limit;
    
        // Fetch products based on category with pagination
        const products = await Products.find({ category }).skip(skip).limit(limit);
        const totalProducts = await Products.countDocuments({ category });
    
        if (products.length === 0) {
          return res.status(404).json({ message: "No products found in this category" });
        }
    
        res.status(200).json({
          page,
          totalPages: Math.ceil(totalProducts / limit),
          totalProducts,
          products
        });
    
      } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
      }
  });
  
module.exports = productRouter;
