'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaWhatsapp, FaLinkedin, FaFacebookF, FaXTwitter } from 'react-icons/fa6'

const ProductDetail = ({id}) => {
  const dummyProduct = {
    name: 'Chocolate Brownie',
    price: 254,
    description:
      'TCD Fudgy Chocolate Brownie with Nutella Flavor (100g) | Snack for Kids Lunchbox | Rich & Decadent Dessert | Instant Energy Bites | Fresh and Crunchy | Tea-Time Snack | Perfect for Gifting.',
    images: [
      'https://ap-south-1.graphassets.com/cmas2cgyi0bdf07plfo345s33/cmat01j6i188207pshegmktzh',
      '/cake-shop-bg.webp',
      'https://ap-south-1.graphassets.com/cmas2cgyi0bdf07plfo345s33/cmat01j6i188207pshegmktzh',
    ],
  }

  const [selectedImage, setSelectedImage] = useState(dummyProduct.images[0])
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="flex flex-col max-w-6xl gap-8 p-4 mx-auto lg:flex-row">
      {/* Left: Image Gallery */}
      <div className="w-full lg:w-1/2">
        <div className="relative bg-gray-100 rounded aspect-square">
          <Image
            src={selectedImage}
            alt="Brownie Image"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 mt-4 overflow-x-auto">
          {dummyProduct.images.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              width={80}
              height={80}
              className={`rounded cursor-pointer border ${
                selectedImage === img ? 'border-black' : 'border-transparent'
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Right: Product Info */}
      <div className="flex flex-col w-full gap-4 lg:w-1/2">
        <h1 className="text-2xl font-bold poppin">{dummyProduct.name}</h1>
        <p className="text-xl font-semibold text-gray-800 poppin">₹{dummyProduct.price}</p>
        <p className="leading-relaxed text-gray-700 poppin-400">{dummyProduct.description}</p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4 mt-2">
          <input
            type="number"
            value={quantity}
            min={1}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-16 px-2 py-1 border border-gray-300 rounded"
          />
          <button className="bg-[#4A3F35] text-white px-4 py-2 rounded hover:bg-[#3a2f29] transition poppin cursor-pointer">
            Add to Cart
          </button>
        </div>

        {/* Info */}
        <div className="mt-6 space-y-2 text-sm text-gray-600">
          <p className="font-medium poppin">Guaranteed Safe Checkout</p>
          <div className="flex items-center gap-3 text-lg poppin-400">
            <span>🅿️</span> <span>GPay</span> <span>PhonePe</span> <span>UPI</span>
          </div>
          <p className='poppin-400'>🚚 Shipping available all across India</p>
          <p className='poppin-400'>📅 Delivers in: 3–7 Working Days</p>
          <p className="text-red-500 underline cursor-pointer poppin-400">T&C Apply</p>
        </div>

        {/* Share Icons */}
        <div className="flex items-center gap-4 mt-4 text-lg poppin">
          <span className="font-semibold">Share:</span>
          <FaFacebookF className="cursor-pointer hover:text-blue-600" />
          <FaXTwitter className="cursor-pointer hover:text-black" />
          <FaLinkedin className="cursor-pointer hover:text-blue-800" />
          <FaWhatsapp className="cursor-pointer hover:text-green-600" />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
