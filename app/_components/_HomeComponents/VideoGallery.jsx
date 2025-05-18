import { Play } from "lucide-react";
import { useState } from "react";

export default function VideoGallery() {
  const videos = [
    {
      videoSrc: "/video1.mp4",
      thumbnail: "/hero.jpg",
    },
  ];

  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="px-6 py-12 text-[#66553f] bg-[#ead3b0]">
      <h2 className="mb-10 text-4xl font-bold text-center md:text-5xl poppin">OUR VIDEO</h2>

      {/* Video Grid */}
      <div className="grid gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {videos.map(({ videoSrc, thumbnail }, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-gray-800 rounded-lg shadow-lg cursor-pointer"
            onClick={() => setActiveVideo(videoSrc)}
          >
            <img
              src={thumbnail}
              alt={`Video Thumbnail ${index + 1}`}
              className="object-cover w-full h-48 sm:h-56 md:h-48 lg:h-56"
            />
          <button
  className="absolute inset-0 flex items-center justify-center text-white opacity-100 cursor-pointer bg-opacity-10 "
  aria-label={`Play video ${index + 1}`}
>
  <div className="p-4 bg-black rounded-full bg-opacity-70">
    <Play className="w-8 h-8" />
  </div>
</button>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
          onClick={() => setActiveVideo(null)}
        >
          <video
            src={activeVideo}
            controls
            autoPlay
            className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // prevent modal close when clicking video
          />
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute text-4xl font-bold text-white transition top-4 right-4 hover:text-red-500"
            aria-label="Close video"
          >
            &times;
          </button>
        </div>
      )}

      {/* CTA Button */}
      <div className="mt-12 text-center">
        <a
          href="/gallery"
          className="inline-block px-6 py-3 text-lg font-semibold transition border-[#66553f] border-2 rounded-full hover:bg-[#504536] hover:text-white"
        >
          View Our Gallery {'>>'}
        </a>
      </div>
    </section>
  );
}
