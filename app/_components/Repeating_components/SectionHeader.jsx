import Image from "next/image";

const SectionHeader = ({
  title,
  bgImage,
  className = "",
}) => {
  return (
    <div
      className={`relative h-[60vh] md:h-[80vh] lg:h-[100vh] flex items-end pb-10 sm:pb-12 md:pb-16 px-4 sm:px-10 lg:px-20 ${className}`}
    >
      {/* Background image */}
      <Image
        src={bgImage}
        alt="Background"
        fill
        className="z-0 object-cover"
        quality={80}
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-screen-xl">
        {/* White underline bar */}
        <div className="w-[40%] sm:w-[250px] md:w-[400px] lg:w-[500px] h-[10px] sm:h-[16px] md:h-[22px] lg:h-[28px] bg-white rounded-r-full mb-4 lg:mb-6" />

        {/* Title */}
        <h2
          className="text-white poppin font-bold leading-tight whitespace-pre-line
                     text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px]
                     max-w-[90%] sm:max-w-[600px] lg:max-w-[800px]"
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SectionHeader;
