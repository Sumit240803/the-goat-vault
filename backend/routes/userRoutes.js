const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const Cart = require("../models/Cart");
const userRouter = express.Router();


userRouter.get("/mycart" , protect , async(req,res)=>{
    try {
        const cart = await Cart.findOne({user : req.user.id}).populate("items.prodcut");
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
          }
      
          res.json(cart);
    } catch (error) {
        console.error("Error fetching cart:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
})

module.exports = userRouter;