"use client";

import React from "react";

const Hero3 = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-100"
        src="https://ImperialMobileGallery.b-cdn.net/Hero4.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />

      {/* Darker Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 300 100"
          xmlns="http://www.w3.org/2000/svg"
          className="select-none"
        >
          <defs>
            <linearGradient
              id="textGradient"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="white" /> 
              <stop offset="25%" stopColor="white" />
              <stop offset="50%" stopColor="white" /> 
              <stop offset="75%" stopColor="white" /> 
              <stop offset="100%" stopColor="white" /> 
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            strokeWidth="1"
            stroke="#3b82f6" // Using blue as the base stroke color
            className="font-[helvetica] font-bold fill-transparent text-5xl"
          >
            SERVICES
          </text>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            stroke="url(#textGradient)"
            strokeWidth="1"
            className="font-[helvetica] font-bold fill-transparent text-5xl"
          >
            SERVICES
          </text>
        </svg>
      </div>
    </section>
  );
};

export default Hero3;