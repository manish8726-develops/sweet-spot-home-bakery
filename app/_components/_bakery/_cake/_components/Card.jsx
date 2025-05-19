'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({name,price,img,sale,id}) => {
    
    
  return (
      <Link href={`/shop/cakes/${id}`}>
    <div className="flex flex-col items-center w-[315px] max-w-sm overflow-hidden bg-white border shadow-md rounded-xl">
      <div className="relative w-full h-56">
        <Image
          src={img[0].url}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          draggable={false}
        />
      </div>
      <div className="w-full p-4 text-center">

        <h2 className="text-lg font-bold text-black poppin">{name}</h2>
        <p className="mt-1 font-semibold text-pink-600 text-md poppin-400">₹{price[0]} – ₹{price[1]}</p>
        <button className="mt-4 poppin bg-[#3d2b1f] text-white px-5 py-2 rounded-md hover:bg-[#2c1e16] transition">
          Select options
        </button>
      </div>
    </div>
      </Link>
  );
};

export default Card;
