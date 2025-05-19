"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaWhatsapp,
  FaLinkedin,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount ,addToCart,updateQuantity} from "../../../../_redux/cart/cartslice";
const ProductDetail = ({ title, price, desc, img, weight, sale,id }) => {

  
  const [selectedImage, setSelectedImage] = useState(img[0].url);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const items = useSelector((state) => state.counter.items);
  return (
    <div className="flex flex-col max-w-6xl gap-8 p-4 mx-auto lg:flex-row">
      {/* Left: Image Gallery */}
      <div className="w-full lg:w-1/2">
        <div className="relative bg-gray-100 rounded aspect-square">
          <Image
            src={selectedImage}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 mt-4 overflow-x-auto">
          {img
            .map((item) => item.url)
            .map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                width={80}
                height={80}
                className={`rounded cursor-pointer border ${
                  selectedImage === img ? "border-black" : "border-transparent"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
        </div>
      </div>

      {/* Right: Product Info */}
      <div className="flex flex-col w-full gap-4 lg:w-1/2">
  
        <h1 className="text-2xl font-bold poppin">{title}</h1>
        <p className="text-xl font-semibold text-gray-800 poppin">
          ₹{price[0]}-₹{price[1]}
        </p>
        <p className="leading-relaxed text-gray-700 poppin-400">{desc}</p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4 mt-4">
  {/* <select
    value={quantity}
    onChange={(e) => {
      const newQty = Number(e.target.value);
      setQuantity(newQty);
      dispatch(incrementByAmount({ id, quantity: newQty }));
    }}
    className="w-24 px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-600"
  >
    {[...Array(10)].map((_, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    ))}
  </select> */}

  <button
    onClick={() =>
      dispatch(
        addToCart({
          id,
          name: title,
          price: price[0],
          quantity,
          image: selectedImage,
          weight,
          sale,
        })
      )
    }
    className={`px-5 py-2 rounded-md text-white transition poppin ${
      items.some((item) => item.id === id)
        ? 'bg-orange-500 hover:bg-orange-600'
        : 'bg-[#4A3F35] hover:bg-[#3a2f29]'
    }`}
  >
    {items.some((item) => item.id === id) ? 'Added to Cart' : 'Add to Cart'}
  </button>
</div>


        {/* Info */}
        <div className="mt-6 space-y-2 text-sm text-gray-600">
          <p className="font-medium poppin">Guaranteed Safe Checkout</p>
          <div className="flex items-center gap-3 text-lg poppin-400">
            <span>🅿️</span> <span>GPay</span> <span>PhonePe</span>{" "}
            <span>UPI</span>
          </div>
          <p className="poppin-400">🚚 Shipping available all across India</p>
          <p className="poppin-400">📅 Delivers in: 3–7 Working Days</p>
          <p className="text-red-500 underline cursor-pointer poppin-400">
            T&C Apply
          </p>
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
  );
};

export default ProductDetail;
