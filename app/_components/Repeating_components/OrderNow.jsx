import Image from "next/image";
import React from "react";

const OrderNow = () => {
  return (
    <div className="text-[#4a3c32] px-4 py-10 bg-white">
      <h1 className="mb-10 text-4xl font-bold text-center md:text-5xl">ORDER NOW</h1>
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
        {/* Bell Image */}
        <Image
          src="/bell.webp"
          height={205}
          width={178}
          alt="bell"
          draggable={false}
          className="flex-shrink-0"
        />

        {/* Order Form */}
        <form className="flex flex-col w-full max-w-2xl gap-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              type="text"
              placeholder="Full Name"
              className="flex-1 px-4 py-3 text-sm border rounded-full outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="flex-1 px-4 py-3 text-sm border rounded-full outline-none"
            />
          </div>
          <textarea
            placeholder="Your Order"
            rows={4}
            className="px-4 py-3 text-sm border outline-none resize-none rounded-3xl"
          ></textarea>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-8 hover:bg-[#4a3c32] hover:text-white py-2 border rounded-full font-semibold cursor-pointer transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderNow;
