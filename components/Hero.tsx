"use client"; // Ensure this is a Client Component

import React from 'react';
import Image from 'next/image';
import NumberTicker from './ui/NumberTicker';
import { SparklesText } from './magicui/sparkles-text'; // Import the SparklesText component

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image with reduced opacity */}
      <div className="absolute inset-0 bg-black">
        <Image
          src="/HeroPageFR.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover opacity-80 transition-opacity duration-500"
          sizes="100vw"
          quality={100}
        />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      {/* Content Container */}
      <div className="relative h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full">
          {/* Sparkles Text */}
          <div className="absolute top-[30%] left-0 transform -translate-y-1/2">
            <SparklesText
              text="Imperial Mobile Detailing"
              className="text-white text-7xl font-bold"
            />
          </div>

          {/* Number Ticker and Label - Positioned together */}
          <div className="absolute top-[40%] left-0 transform -translate-y-1/2 text-white flex items-center space-x-2">
            <div className="text-6xl font-bold">
              <NumberTicker end={125} duration={6} className="inline-block" />+
            </div>
            <div className="text-2xl font-medium">Recurring Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
