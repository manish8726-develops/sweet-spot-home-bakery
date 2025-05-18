// app/components/HeroSection.tsx or .js
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[400px] mt-12 flex items-center justify-center overflow-hidden poppin">
      {/* Background Image with next/image */}
      <Image
        src="/hero.png"         // or "/hero.png"
        alt="Delicious cake background"
        fill                    // Enables full coverage of parent
        className="object-cover"
        priority
      />

      {/* Black overlay */}
   {/* <div className="absolute inset-0 z-10 bg-black bg-opacity-40" /> */}

<div className="absolute inset-0 bg-black/50" />
      {/* Text Content */}
      <div className="relative z-20 px-4 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl poppin">
          Customizable cakes
        </h1>
        <p className="mb-6 text-lg md:text-2xl poppin-400">
          your innovative ideas. Our challenge
        </p>
        <a
          href="/menu"
          className="inline-block px-6 py-3 text-lg transition border border-white rounded-full hover:bg-white hover:text-black"
        >
          Explore Our Menu &gt;&gt;
        </a>
      </div>
    </section>
  );
}
