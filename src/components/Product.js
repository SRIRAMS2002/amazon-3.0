"use client"

import Image from 'next/legacy/image';
import React, { useState } from 'react';
// import { Tilt } from 'react-tilt';
import { StarIcon } from '@heroicons/react/24/solid';
import { CurrencyRupeeIcon } from '@heroicons/react/24/outline';
// import Currency from "react-currency-formatter";


// Constant
const MAX_RATING = 5
const MIN_RATING = 1

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING -MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);
  
  return (
    <div key={id} className="flex relative flex-col m-5 bg-white z-30 p-10">
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
      <Image src={image} height={200} width={200} objectFit='contain'/>
      <h4 className='my-3'>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" key={i} />
          ))}
      </div>
      <p className='my-2 text-xs line-clamp-2'>{description}</p>
      <div className='mb-5 flex items-center space-x-2'>
        {/* <Currency quantity={price} currency="GBP" /> */}
        <CurrencyRupeeIcon className='h-5'/>
        <p className=''>{price}</p>
      </div>

      {hasPrime && (
        <div className='flex items-center gap-2 -mt-5'>
          <img
            src="https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png"
            alt=""
            className='w-12'
          />
          <p className='text-xs text-gray-500'>Free Delivery on purchase</p>
        </div>
      )}

      {/* BUTTON */}
      <button className='mt-auto button'>Add to cart</button>
    </div>
  );
}

export default Product