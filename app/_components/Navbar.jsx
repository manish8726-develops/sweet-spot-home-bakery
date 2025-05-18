"use client";
import React, { useState } from "react";
import Clerk from "./Clerk";
import Image from "next/image";
import { LucideMenu, ShoppingBag } from "lucide-react";
import Link from "next/link";
import FoodCarousel from "./FoodCarousel";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Menu",
      dropdown: true,
      items: [
        { name: "Desserts", href: "/menu/desserts" },
        { name: "Drinks", href: "/menu/drinks" },
        { name: "Burgers", href: "/menu/burgers" },
      ],
    },
    {
      name: "Shop",
      dropdown: true,
      items: [
        { name: "Cakes", href: "/shop/cakes" },
        { name: "Cookies", href: "/shop/cookies" },
        { name: "Gifting", href: "/shop/gifting" },
      ],
    },
    { name: "Our Gallery", href: "/gallery" },
    { name: "Offers", href: "/offers" },
    { name: "Contact Us", href: "/contact" },
    { name: "Baking Classes", href: "/baking-classes" },
  ];
  const [selected, setSelected] = useState("");
  return (
    <>
      {/* Background image wrapper */}
      <div className="relative ">
        {/* Background image or video */}
        <img
          src="https://cookiedoughcafe.in/wp-content/uploads/2024/10/TCD-banner-scaled.jpg"
          alt="bg"
          className="w-full h-[700px] object-cover"
        />
        {/* <!-- Overlay --> */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-[72px] ale-f text-center">COOKIE DOUGH CAFE</h1>
          <h2
            className="alg-f text-[38px] text-center mt-2"
          >
            We Create Delicious Memories
          </h2>
        </div>
        {/* Navbar */}
        <nav className="absolute top-0 left-0 z-10 flex items-center justify-between w-full px-8 py-4 text-white bg-black/12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src={"/sweet-spot-logo.webp"}
              draggable={false}
              height={60}
              width={130}
              alt="logo"
            />
          </div>
          {/* Nav links */}
            {/* Desktop view */}
          <ul className="md:flex gap-6  text-[17px] alg-sc hidden ">
            {/* text-[#00fded] border-b-4 pb-2 border-[#00fded] */}
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    onClick={() => {
                      setSelected(index);
                    }}
                    href={!item.dropdown ? item.href : "/"}
                    className={`${
                      selected === index
                        ? "text-[#00fded] border-b-4 pb-2 border-[#00fded] "
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile View */}
          {/* Cart */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <span className="text-lg font-semibold cursor-pointer">
                <ShoppingBag />
              </span>
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                2
              </span>
            </div>
            <Clerk />
         <LucideMenu className="cursor-pointer md:hidden"/>
          </div>
        </nav>
      </div>
        
    </>
  );
};

export default Navbar;
