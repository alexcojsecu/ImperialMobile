"use client"; // Mark this component as a Client Component

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PulsatingButton } from "@/components/magicui/pulsating-button";
import { Highlight } from "@/components/ui/hero-highlight";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-section");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        if (sectionTop < window.innerHeight && sectionBottom > 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about-section" className="w-full bg-#D3D3D3 py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
        <div
          className={`text-center transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-6xl font-bold text-gray-900 mb-10">
            Imperial Mobile&rsquo;History
          </h2>

          <p className="text-3xl font-medium text-gray-700 mb-10">
            Los Angeles&rsquo; Premier Mobile Auto Detailing Service
          </p>

          {/* Main content */}
          <p className="text-2xl text-gray-600 leading-relaxed mb-10">
          Owned and operated by Alexandru Cojescu, Imperial Mobile Detailing is a premium mobile car care service that has been delivering <Highlight>exceptional results since 2021</Highlight>. Specializing in meticulous exterior and interior detailing, we bring convenience and professionalism <Highlight>directly to your doorstep</Highlight>.

Our commitment to quality, reliability, and customer satisfaction ensures that every vehicle receives the care it deserves. Whether you’re looking to restore your car’s shine or maintain its pristine condition, our customized detailing packages are designed to meet your needs.

Get in touch today to experience the difference of a service that prioritizes your vehicle’s appearance and your peace of mind.
          </p>

          {/* Learn More Button - Pulsating Effect (Centered) */}
          <div className="mt-12 flex justify-center">
            <PulsatingButton onClick={() => router.push("/aboutpage")}>
              Learn More
            </PulsatingButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;