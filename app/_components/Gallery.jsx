'use client';

import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import Link from 'next/link';
import Image from 'next/image';

function Gallery({ data }) {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#my-gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
      showHideAnimationType: 'zoom',
      padding: { top: 20, bottom: 40, left: 10, right: 10 },
    });

    lightbox.init();
    return () => lightbox.destroy();
  }, []);

  if (!data || data.length === 0) {
    return <p className="py-10 text-3xl text-center text-gray-400">No images to display.</p>;
  }

  return (
    <div className="px-4 py-8 md:px-16">
      <div id="my-gallery" className="grid gap-4">
        <div className="gap-4 space-y-4 sm:columns-2 md:columns-3">
          {data.map((item, index) => {
            const src = item?.photo?.url;
            const width = item?.photo?.width || 800;
            const height = item?.photo?.height || 600;
            const caption = item?.caption || `Gallery Image ${index + 1}`;
            const alt = caption;

            if (!src) return null;

            return (
              <div key={index} className="block mb-6 break-inside-avoid">
                <Link
                  href={src}
                  data-pswp-width={width}
                  data-pswp-height={height}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <div className="relative w-full mb-2" style={{ aspectRatio: `${width} / ${height}` }}>
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-cover transition-opacity duration-300 rounded-lg shadow-sm hover:opacity-90"
                    />
                  </div>
                </Link>
                <p className="text-sm text-center text-gray-600">{caption}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
