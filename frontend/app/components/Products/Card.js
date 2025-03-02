"use client";
import React from "react";
import { easeIn, motion } from "framer-motion";
import { easeInOut, easeOut } from "motion";

const ProdCard = ({ product }) => {
  return (
   <div className="border border-opacity-15 border-black">

      {/* Product Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover"
          />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-xl text-black font-semibold">{product.name}</h3>
        <p className="text-gray-500 text-sm">{product.description}</p>

        {/* Price & CTA */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-black">${product.price}</span>
          <motion.button
            className="bg-black text-white px-4 py-2  font-semibold hover:bg-gray-900 transition duration-300"
           
        
            >
            Add to Cart
          </motion.button>
        </div>
      </div>
            </div>
   
  );
};

export default ProdCard;
