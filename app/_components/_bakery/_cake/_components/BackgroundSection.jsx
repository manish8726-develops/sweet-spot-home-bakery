'use client'
import Image from 'next/image'
import React from 'react'

const BackgroundSection = () => {

  return (
    <div className='relative w-full h-[2000px]'>
            {/* Background Image */}
            <Image src={'/cake-shop-bg.webp' }  alt="Background"  fill  className="z-0 object-cover"
        priority/>
        {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50" />
    </div>
  )
}

export default BackgroundSection
