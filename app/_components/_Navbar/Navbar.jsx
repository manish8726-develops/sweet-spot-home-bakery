"use client";
import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import Clerk from "../Clerk";
import { LucideMenu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CartPopup from "../_bakery/_cake/_components/_cart/CartPopup";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  return (
    <header className="sticky top-0 z-50 w-full text-white">
      <nav className="flex items-center justify-between px-6 py-2 bg-[#009688] ">
        <NavbarLogo />

        {/* Desktop Nav */}
        <ul className="items-center hidden gap-6 font-semibold tracking-wide uppercase md:flex">
          {navItems.map((item, index) => (
            <li key={index} className="relative group poppin">
  {item.dropdown ? (
    <>
      <span className="flex items-center gap-1 text-white transition-colors duration-300 cursor-pointer group-hover:text-cyan-400">
        {item.name}
        <span className="transition-transform duration-300 transform group-hover:rotate-180">▼</span>
      </span>

      <ul className="absolute left-0 top-full mt-2 opacity-0 scale-y-95 group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible invisible transform origin-top transition-all duration-300 bg-white text-black rounded-lg shadow-xl z-30 min-w-[160px] overflow-hidden border border-gray-200">
        {item.items.map((subItem, idx) => (
          <li key={idx}>
            <Link
              href={subItem.href}
              className="block px-5 py-3 transition-colors duration-200 hover:bg-gray-100 hover:text-cyan-600 whitespace-nowrap poppin"
            >
              {subItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  ) : (
    <Link href={item.href} className="relative group">
      <span
        className={`transition-colors duration-300 ${
          pathname === item.href ? "text-cyan-400" : "text-white"
        }`}
      >
        {item.name}
      </span>
      <span
        className={`absolute left-0 -bottom-1 h-0.5 bg-cyan-400 transition-all duration-300 ${
          pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></span>
    </Link>
  )}
</li>
          ))}
        </ul>

        {/* Icons and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <CartPopup/>
          <Clerk />
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? <X size={28} /> : <LucideMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-black/95 backdrop-blur-sm px-6 ${
          isMobileMenuOpen
            ? "max-h-[1000px] opacity-100 py-4"
            : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ul className="flex flex-col gap-4 text-white transition-opacity duration-300">
          {navItems.map((item, index) => (
            <li key={index}>
              {item.dropdown ? (
                <details className="group">
                  <summary className="cursor-pointer">{item.name}</summary>
                  <ul className="mt-2 ml-4 space-y-1">
                    {item.items.map((subItem, idx) => (
                      <li key={idx}>
                        <Link
                          onClick={() => {
                            setMobileMenuOpen(false);
                          }}
                          href={subItem.href}
                          className="block hover:underline"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                  href={item.href}
                  className="block hover:underline"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
