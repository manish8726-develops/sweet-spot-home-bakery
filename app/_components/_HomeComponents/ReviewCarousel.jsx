import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';
import { FaGoogle, FaStar } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import Link from 'next/link';

// Optional: Custom Swiper navigation styles
const swiperStyles = `
  .swiper-button-next,
  .swiper-button-prev {
    color: #ccc;
    font-size: 18px;
    width: 28px;
    height: 28px;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 18px;
  }
`;

export default function ReviewCarousel() {
  const reviews = [
    {
      name: 'Priyanka Mahes...',
      date: '15. May, 2025',
      rating: 4,
      verified: true,
      avatar: '/avatars/1.png',
      review: 'Chetan was very helpful. My child got hurt while playing. He really helped.',
    },
    {
      name: 'hiya patel',
      date: '15. May, 2025',
      rating: 5,
      verified: true,
      avatar: '/avatars/2.png',
      review: 'Our server, Chetan, provided good service.',
    },
    {
      name: 'Gaurav Pal',
      date: '15. May, 2025',
      rating: 5,
      verified: true,
      avatar: '/avatars/3.png',
      review: 'Cookie dough cafe is absolutely awesome... After doing activities we get delicious variety of food. Als...',
    },
    {
      name: 'Gaurav Pal',
      date: '15. May, 2025',
      rating: 5,
      verified: true,
      avatar: '/avatars/4.png',
      review: 'Cookie dough cafe is absolutely awesome... After doing activities we get delicious variety of food. Als...',
    },
    {
      name: 'Gaurav Pal',
      date: '15. May, 2025',
      rating: 5,
      verified: true,
      avatar: '/avatars/5.png',
      review: 'Cookie dough cafe is absolutely awesome... After doing activities we get delicious variety of food. Als...',
    },
    {
      name: 'Gaurav Pal',
      date: '15. May, 2025',
      rating: 5,
      verified: true,
      avatar: '/avatars/6.png',
      review: 'Cookie dough cafe is absolutely awesome... After doing activities we get delicious variety of food. Als...',
    },
    {
      name: 'Gaurav Pal',
      date: '15. May, 2025',
      rating: 5,
      verified: true,
      avatar: '/avatars/7.png',
      review: 'Cookie dough cafe is absolutely awesome... After doing activities we get delicious variety of food. Als...',
    },
  ];

  return (
    <div className="bg-[#e7c79c] py-12 px-4 md:px-16">
      {/* Custom styles for Swiper navigation */}
      <style>{swiperStyles}</style>

      <h2 className="text-center text-4xl font-bold mb-10 text-[#4a3c32]">REVIEWS</h2>

      <div className="flex flex-col items-start gap-8 lg:flex-row">
        {/* Left Section */}
        <div className="flex flex-col items-center w-full p-6 text-center bg-white rounded-lg shadow-md lg:w-1/4">
          <Image src="/sweet-spot-logo.webp" alt="logo" width={60} height={60} />
          <h3 className="mt-4 text-lg font-semibold">The Cookie Dough Cafe</h3>
          <div className="flex items-center justify-center mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
          </div>
          <p className="mt-1 text-sm text-gray-700">760 Google reviews</p>
          <Link href={'https://forms.gle/iEW3oUrh4xch7GCg6'} className="px-4 py-2 mt-4 font-medium text-white bg-blue-600 rounded-lg">
            Write a review
          </Link>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full lg:w-3/4">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            navigation
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="h-full p-5 bg-white rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <Image src={review.avatar} alt={review.name} width={40} height={40} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <h4 className="text-sm font-semibold">{review.name}</h4>
                        <FaGoogle className="text-[18px] text-[#4a3c2a]" />
                        
                      </div>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                        } text-sm`}
                      />
                    ))}
                    {review.verified && <MdVerified className="ml-1 text-blue-500" />}
                  </div>

                  <p className="text-sm text-gray-800">{review.review}</p>
                  {review.review.includes('...') && (
                    <button className="mt-1 text-sm text-blue-600">Read more</button>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
