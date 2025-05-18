'use client'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

export default function FoodCarousel() {
  const foodImages = [
    "/foodImage/chocolava.webp",
    "/foodImage/cookie.webp",
    "/foodImage/namak.webp",
    "/foodImage/redjuice.webp",
    "/foodImage/sandwich.webp",
    "/foodImage/saucer.webp",
  ];

  const [cardNo, setCardNo] = useState(3); // Default value

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardNo(1);
      } else if (window.innerWidth < 1024) {
        setCardNo(2);
      } else {
        setCardNo(3);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full px-4 py-8 ">
      <Swiper
        key={cardNo} // 👈 Force re-render when cardNo changes
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={cardNo}
        navigation
        loop={true}
        autoplay={{ delay: 1500 }}
        className="rounded-lg"
      >
        {foodImages.map((imgSrc, i) => (
          <SwiperSlide key={i}>
            <img
              src={imgSrc}
              alt={`food-${i}`}
              className="w-full min-h-[240px] object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
