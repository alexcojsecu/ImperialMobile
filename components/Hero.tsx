"use client"; // Ensure this is a Client Component

import React from 'react';
import Image from 'next/image';
import NumberTicker from './ui/NumberTicker';
import { SparklesText } from './magicui/sparkles-text'; // Import the SparklesText component

const Hero = () => {
  // BunnyCDN base URL
  const BUNNY_CDN_BASE_URL = "https://ImperialMobileGallery.b-cdn.net";

  // Background image URL
  const heroImage = `${BUNNY_CDN_BASE_URL}/HeroPageFR.jpg`;

  return (
    <section className="relative h-screen w-full">
      {/* Preload the background image */}
      <link rel="preload" href={heroImage} as="image" />

      {/* Background Image with reduced opacity */}
      <div className="absolute inset-0 bg-black">
        <Image
          src={heroImage}
          alt="Hero Background"
          fill
          priority // Preload and prioritize this image
          className="object-cover opacity-80 transition-opacity duration-500"
          sizes="100vw"
          quality={75} // Reduce quality for faster loading
        />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      {/* Content Container */}
      <div className="relative h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full">
          {/* Sparkles Text */}
          <div className="absolute top-[30%] left-0 transform -translate-y-1/2 text-center md:text-left w-full md:w-auto">
            <SparklesText
              text="Imperial Mobile Detailing"
              className="text-white text-6xl sm:text-7xl lg:text-8xl font-bold" // Larger text size for all screens
            />
          </div>

          {/* Number Ticker and Label - Positioned together */}
          <div className="absolute top-[45%] sm:top-[40%] left-0 transform -translate-y-1/2 text-white flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left w-full md:w-auto">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-bold"> {/* Larger text size for all screens */}
              <NumberTicker end={100} duration={6} className="inline-block" />+
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-medium"> {/* Larger text size for all screens */}
              Recurring Customers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;