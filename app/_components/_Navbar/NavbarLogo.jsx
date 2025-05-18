import React from "react";
import Image from "next/image";

export default function NavbarLogo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/sweet-spot-logo.webp"
        alt="logo"
        width={130}
        height={60}
        draggable={false}
      />
    </div>
  );
}
