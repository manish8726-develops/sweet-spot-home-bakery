import React from "react";
import { ShoppingBag } from "lucide-react";

export default function CartIcon({count}) {
  return (
    <div className="relative">
      <span className="text-lg font-semibold cursor-pointer">
        <ShoppingBag />
      </span>
      <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
        {count}
      </span>
    </div>
  );
}
