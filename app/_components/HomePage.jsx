"use client";
import React from "react";
import Navbar from "./_Navbar/Navbar";
import FoodCarousel from "./FoodCarousel";
import WhyChooseUs from "./_HomeComponents/WhyChooseUs";
import Divider from "./Divider";
import FounderNotes from "./_HomeComponents/FounderNotes";
import VideoSection from "./_HomeComponents/VideoSection";
import HeroSection from "./_HomeComponents/HeroSection";
import VideoGallery from "./_HomeComponents/VideoGallery";
import GiftCard from "./_HomeComponents/GiftCard";
import ReviewCarousel from "./_HomeComponents/ReviewCarousel";
import OrderNow from "./Repeating_components/OrderNow";

const HomePage = () => {
  return (
    <>
      <div className="relative">
        <img
          src="https://cookiedoughcafe.in/wp-content/uploads/2024/10/TCD-banner-scaled.jpg"
          alt="bg"
          className="w-full h-[700px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-[72px] ale-f text-center">COOKIE DOUGH CAFE</h1>
          <h2 className="alg-f text-[38px] text-center mt-2">
            We Create Delicious Memories
          </h2>
        </div>
      </div>
      <FoodCarousel />
     <WhyChooseUs/>
      <Divider/>
      <FounderNotes/>
      <VideoSection/>
      <HeroSection/>
      <VideoGallery/>
      <GiftCard/>
      <ReviewCarousel/>
     
    </>
  );
};

export default HomePage;
