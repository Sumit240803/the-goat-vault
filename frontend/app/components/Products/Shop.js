import Image from 'next/image'
import React from 'react'

const ShopCard = () => {
  return (
    <div className="p-4 bg-white text-black rounded-lg shadow-lg shadow-gray-600 w-64 flex flex-col items-center hover:scale-105 transition-transform duration-300">
      {/* Product Image */}
      <Image 
        className="rounded-md" 
        src="/products/3.jpg" 
        width={200} 
        height={200} 
        alt="Product Image"
      />

      {/* Product Name */}
      <div className="mt-3 text-xl font-semibold">Product 1</div>

      {/* Price */}
      <div className="text-lg text-gray-00 mt-1">$100</div>

      {/* Add to Cart Button */}
      <button className="mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300">
        Add to Cart
      </button>
    </div>
  )
}

export default ShopCard
