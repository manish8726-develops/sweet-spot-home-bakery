"use client";
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Quality Food",
      description:
        "The café’s good quality food features freshly sourced ingredients, expertly crafted dishes, and a diverse menu that caters to all tastes.",
      icon: "/whyChooseUs/cloche-1.webp",
    },
    {
      title: "Fastest Delivery",
      description:
        "The restaurant’s fast delivery ensures your hot, delicious meals arrive promptly, allowing you to enjoy fresh food without long waits.",
      icon: "/whyChooseUs/cloche-2.webp",
    },
    {
      title: "Fresh Food",
      description:
        "The bakery’s fresh food selection includes warm, flaky pastries, crusty bread, and delectable cakes, all made from scratch daily.",
      icon: "/whyChooseUs/cloche-3.webp",
    },
    {
      title: "Easy to Order",
      description:
        "The Cookie Dough makes it easy to order your favorite dishes with just a few taps, streamlining the entire process effortlessly.",
      icon: "/whyChooseUs/cloche-4.webp",
    },
  ];

  return (
    <div>
      <h1 className="poppin text-[50px] text-center">
        Why <span className="text-[#b81f6a]">Choose</span> us
      </h1>
      <div className="flex flex-wrap justify-center gap-4 my-6 mb-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="shadow-2xl h-[344px] w-[268px] flex flex-col items-center justify-center border bg-[#EAD3B0] rounded-3xl"
          >
            <Image
              draggable={false}
              src={item.icon}
              height={110}
              width={126}
              alt={item.title}
            />
            <h3 className=" text-[24px] font-bold  pb-2 poppin">
              {item.title}
            </h3>
            <div className="inline-block w-[147px] mx-auto border-b-3 border-black"></div>

            <p className="text-justify w-[85%] pt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
