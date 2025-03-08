import ShopCard from '@/app/components/Products/Shop'
import React from 'react'

const Shop = () => {
  return (
    <div className="m-auto w-11/12 p-10 text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center place-items-center pt-20">
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
    </div>
  )
}

export default Shop
