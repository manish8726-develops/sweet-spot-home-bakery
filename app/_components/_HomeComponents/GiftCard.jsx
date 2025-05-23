import Image from "next/image";
import Link from "next/link";
import React from "react";

const GiftCard = () => {
  return (
    <div>
      <section className="bg-[#4a3c2a] w-[90%] my-20 mx-auto text-white rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Text and Icons */}
        <div className="flex-1 space-y-4 text-center lg:text-left">
          <h2 className="text-2xl leading-tight sm:text-3xl lg:text-4xl poppin">
            Gift your loved ones, <br />
            <span className="block mt-1">show some gratitude...</span>
          </h2>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row lg:items-end lg:justify-between">
            {/* Emojis */}
            <div className="flex items-center justify-center gap-6 text-4xl lg:justify-start">
              <span role="img" aria-label="Gift">
                <Image
                  src={"/giftCard/gift-box-1.webp"}
                  alt="gift-box"
                  width={100}
                  height={100}
                  draggable={false}
                />
              </span>
              <span role="img" aria-label="Love Letter">
                <Image
                  src={"/giftCard/love-1.webp"}
                  alt="love"
                  width={70}
                  height={70}
                  draggable={false}
                />
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col flex-wrap justify-center gap-3 sm:flex-row lg:gap-4">
              <Link
                href="/contact"
                className="px-5 py-2 text-sm sm:text-base text-white border-2 border-white rounded-full hover:bg-white hover:text-[#4a3c2a] transition"
              >
                Order Custom Cake
              </Link>
              <Link
                href="/shop/cakes"
                className="px-5 py-2 text-sm sm:text-base text-white border-2 border-white rounded-full hover:bg-white hover:text-[#4a3c2a] transition"
              >
                Explore Menu
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 mt-6 lg:mt-0">
  <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-[6px] sm:border-[8px] border-pink-600 overflow-hidden shadow-lg mx-auto relative">
    <Image
      src="/giftCard/cookie12.webp"
      alt="Cookies"
      fill
      className="object-cover rounded-full"
      draggable={false}
    />
  </div>
</div>
      </section>
    </div>
  );
};

export default GiftCard;
