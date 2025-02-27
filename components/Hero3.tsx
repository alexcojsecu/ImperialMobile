"use client";

import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

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
        preload="metadata" // Optimize video loading
      />

      {/* Darker Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <TextHoverEffect text="SERVICES" />
      </div>
    </section>
  );
};

export default Hero3;