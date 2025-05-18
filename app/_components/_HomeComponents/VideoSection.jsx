import React from 'react';

const VideoSection = () => {
  return (
    <div className="px-4 md:px-12 lg:px-24">
      <h1 className="poppin text-2xl md:text-3xl lg:text-[35px] text-[#604e37] text-left">
        Customized Corporate Gift
      </h1>

      <div className="flex justify-center mt-10">
        <div className=" w-[110vw] h-[100vh]  ">
          <iframe
            className="w-full h-full rounded-3xl"
            src="https://www.youtube-nocookie.com/embed/C4TfnjrdIcY?si=QRQsn6l92JrAnyF5"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
