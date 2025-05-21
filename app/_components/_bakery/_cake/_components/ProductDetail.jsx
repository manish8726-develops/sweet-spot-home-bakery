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
import {
  addToCart,
} from "../../../../_redux/cart/cartslice";
import FakeViewerCounter from "../FakeViewerCounter";
import Link from "next/link";

const ProductDetail = ({ title, price, desc, img, weight, sale, id }) => {
  const [selectedImage, setSelectedImage] = useState(img[0].url);
  const [quantity] = useState(1);
  const [showGoToCart, setShowGoToCart] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.counter.items);

  const isInCart = items.some((item) => item.id === id);

  const handleAddToCart = () => {
    if (!isInCart) {
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
      );
    }
    setShowGoToCart(true);
  };

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
          {img.map((item, idx) => (
            <Image
              key={idx}
              src={item.url}
              alt={`thumb-${idx}`}
              width={80}
              height={80}
              className={`rounded-md cursor-pointer border transition-all duration-200 ${
                selectedImage === item.url
                  ? "border-black shadow-md"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
              onClick={() => setSelectedImage(item.url)}
            />
          ))}
        </div>
      </div>

      {/* Right: Product Info */}
      <div className="flex flex-col w-full gap-4 lg:w-1/2">
        <h1 className="text-2xl font-bold poppin">{title}</h1>
        <p className="text-xl font-semibold text-gray-800 poppin">
          ₹{price[0]} - ₹{price[1]}
        </p>
        <p className="leading-relaxed text-gray-700 poppin-400">{desc}</p>

        {/* Add to Cart / Go to Cart */}
        <div className="flex flex-col gap-3 mt-4 sm:flex-row sm:items-center">
          <button
            onClick={handleAddToCart}
            className={`px-5 py-2 rounded-md text-white transition poppin w-full sm:w-auto ${
              isInCart
                ? "bg-orange-500 hover:bg-orange-600"
                : "bg-[#4A3F35] hover:bg-[#3a2f29]"
            }`}
          >
            {isInCart ? "Added to Cart" : "Add to Cart"}
          </button>

          {showGoToCart && (
            <Link
              href="/cart"
              className="px-5 py-2 text-center border-2 border-[#4A3F35] text-[#4A3F35] rounded-md hover:bg-[#4A3F35] hover:text-white transition poppin w-full sm:w-auto"
            >
              Go to Cart
            </Link>
          )}
        </div>

        {/* Payment Info */}
        <div className="mt-6 space-y-2 text-sm text-gray-600">
          <p className="font-medium poppin">✅ Guaranteed Safe Checkout</p>
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

        {/* Viewer Count */}
        <FakeViewerCounter />
      </div>
    </div>
  );
};

export default ProductDetail;
  