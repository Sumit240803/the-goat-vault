"use client";
import React from "react";
import { motion } from "framer-motion";

const Card = ({ product }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl hover:shadow-white shadow-sm overflow-hidden w-80 hover:shadow-md transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
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
          <span className="text-lg font-bold text-green-600">${product.price}</span>
          <motion.button
            className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-900 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
