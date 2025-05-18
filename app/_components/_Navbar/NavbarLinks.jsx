"use client";
import React, { useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
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

export default function NavbarLinks() {
  const [selected, setSelected] = useState(null);

  return (
    <ul className="md:flex gap-6 text-[17px] alg-sc hidden">
      {navItems.map((item, index) => (
        <li key={index}>
          <Link
            href={!item.dropdown ? item.href : "/"}
            onClick={() => setSelected(index)}
            className={`${
              selected === index
                ? "text-[#00fded] border-b-4 pb-2 border-[#00fded]"
                : ""
            }`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
