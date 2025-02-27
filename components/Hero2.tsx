"use client"; // Ensure this is a Client Component

import React from "react";
import Image from "next/image";
import { SparklesText } from './magicui/sparkles-text'; // Import the SparklesText component

const Hero2 = () => {
  // BunnyCDN base URL
  const BUNNY_CDN_BASE_URL = "https://ImperialMobileGallery.b-cdn.net";

  // Specify the exact images you want for each category
  const sedanImage = `${BUNNY_CDN_BASE_URL}/Sedan5.jpg`; 
  const interiorImage = `${BUNNY_CDN_BASE_URL}/Interior8.jpg`; 
  const suvImage = `${BUNNY_CDN_BASE_URL}/Suv12.jpg`; 

  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden">
      {/* Preload critical images */}
      <link rel="preload" href={sedanImage} as="image" />
      <link rel="preload" href={interiorImage} as="image" />
      <link rel="preload" href={suvImage} as="image" />

      {/* Three-column background images with hover enlarge & overlap effect */}
      <div className="w-full md:w-1/3 h-1/3 md:h-full relative group overflow-hidden transition-transform duration-500 hover:scale-110 hover:z-10">
        <div className="absolute inset-0 bg-black">
          <Image
            src={sedanImage}
            alt="Sedan"
            fill
            priority // Preload and prioritize this image
            className="object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={75} // Optimize for faster loading
          />
        </div>
      </div>

      <div className="w-full md:w-1/3 h-1/3 md:h-full relative group overflow-hidden transition-transform duration-500 hover:scale-110 hover:z-10">
        <div className="absolute inset-0 bg-black">
          <Image
            src={interiorImage}
            alt="Interior"
            fill
            priority // Preload and prioritize this image
            className="object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={75} // Optimize for faster loading
          />
        </div>
      </div>

      <div className="w-full md:w-1/3 h-1/3 md:h-full relative group overflow-hidden transition-transform duration-500 hover:scale-110 hover:z-10">
        <div className="absolute inset-0 bg-black">
          <Image
            src={suvImage}
            alt="SUV"
            fill
            priority // Preload and prioritize this image
            className="object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={75} // Optimize for faster loading
          />
        </div>
      </div>

      {/* White Shadow/Fade at the Bottom - Always Stays on Top */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>

      {/* Imperial Mobile Detailing Title */}
      <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full text-center">
        <SparklesText
          text="Imperial Mobile Gallery"
          className="text-white text-9xl font-bold font-sans [text-shadow:_0_0_10px_black,_0_0_20px_black] drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]"
        />
      </div>
    </section>
  );
};

export default Hero2;