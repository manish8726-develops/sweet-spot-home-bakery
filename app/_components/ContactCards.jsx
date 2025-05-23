"use client";
import Image from "next/image";

const contactData = [
  {
    title: "Cafe & Management Queries",
    email: "manager@cookiedoughcafe.in",
    image: "/contactCardLogos/helpdesk.gif",
  },
  {
    title: "Bakery & Custom Order Queries",
    email: "bakery@cookiedoughcafe.in",
    image: "/contactCardLogos/marketing.png",
  },
  {
    title: "For Events & Marketing",
    email: "marketing@cookiedoughcafe.in",
    image: "/contactCardLogos/mobile-shopping.png",
  },
];

export default function ContactCards() {
  return (
    <div className="w-full px-4 py-10 bg-white">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
        {contactData.map((card, index) => (
          <div
            key={index}
            className="rounded-3xl shadow-md w-[360px] h-[235px] bg-[#e7caa0] text-center px-6 py-8 flex flex-col items-center justify-center"
          >
            <div className="w-24 h-24 rounded-full border-4 border-[#be1250] flex items-center justify-center mb-6">
              <Image draggable={false}
                src={card.image}
                alt={card.title}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg  text-black mb-2 text-center leading-snug poppin">
              {card.title}
            </h3>
            <p className="text-black text-base poppin-400">{card.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
