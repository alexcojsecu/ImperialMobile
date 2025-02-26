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
          {/* Heading */}
          <h2 className="text-6xl font-bold text-gray-900 mb-10">
            Imperial Mobile'History
          </h2>

          {/* Subheading */}
          <p className="text-3xl font-medium text-gray-700 mb-10">
            Los Angeles' Premier Mobile Auto Detailing Service
          </p>

          {/* Main content */}
          <p className="text-2xl text-gray-600 leading-relaxed mb-10">
            At Auto Detail Los Angeles, we bring the professional detailing
            studio to your doorstep. Our team of experienced detailers is
            committed to providing <Highlight>exceptional service</Highlight>{" "}
            and outstanding results. We use only the finest products and latest
            techniques to ensure your vehicle receives the care it deserves.
            From <Highlight>basic maintenance</Highlight> to complete paint
            correction and <Highlight>ceramic coating</Highlight>, we offer
            comprehensive solutions tailored to your needs.
          </p>

          {/* Learn More Button - Pulsating Effect (Centered) */}
          <div className="mt-6 flex justify-center">
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
