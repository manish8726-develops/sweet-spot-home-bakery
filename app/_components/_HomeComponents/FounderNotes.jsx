import { Facebook, Instagram, LinkedinIcon } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FounderNotes = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 px-4 py-10 md:justify-between md:items-end lg:flex-row lg:px-10 ">
      
      {/* Left Section */}
      <div className="max-w-2xl">
        <h2 className="text-2xl poppin text-[34px]  font-bold text-[#504536] mb-4">FOUNDER NOTES</h2>

        {/* Name and Title */}
        <div className="flex items-center mb-6">
          <div className="bg-[#504536] w-[30px] h-20 mr-3"></div>
          <div>
            <h3 className="poppin text-[32px] font-bold text-[#504536]">Chef Shubhi Singh</h3>
            <p className="text-sm poppin text-[18px] font-semibold text-[#504536]">Founder</p>
          </div>
        </div>

        {/* Text Card */}
        <div className="bg-[#504536] text-white p-6 rounded-[0_2.5rem_2.5rem_0] shadow-lg">
          <p className="text-[18px] leading-relaxed text-justify mb-6 font-[400]">
            Shubhi Singh, the founder and chef at The Cookie Dough, has created a unique space that emphasizes homemade and handpicked ingredients, ensuring both healthiness and exceptional taste. Her culinary journey, which started in Patna and progressed through London, has culminated in Mumbai where she has developed a cafe known for its quality and innovation. The Cookie Dough Cake Cafe offers a variety of dishes that blend local and international cuisines, providing a cozy and welcoming environment for its patrons.
          </p>

          {/* Social Icons + Button */}
          <div className="flex items-center justify-between">
            <div className="flex gap-4 text-[#e8cda1]">
              <Instagram className="w-6 h-6" />
              <Facebook className="w-6 h-6" />
              <LinkedinIcon className="w-6 h-6" />
            </div>
            <Link href={'/about-us'} className="bg-[#faebd7] text-[#504536] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#f0dbb8] transition">   Read more &gt;&gt;</Link>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full max-w-[440px] mt-4 lg:mt-0 rounded-[2rem]  overflow-hidden">
        <Image
          src="/founder.webp" // ✅ replace with actual image path
          alt="Chef Shubhi Singh"
          width={800}
          height={800}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default FounderNotes;
