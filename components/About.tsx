"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Highlight } from "@/components/ui/hero-highlight";

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const textSections = [
    <p key={0}>
      Imperial Mobile Detailing is owned and operated by <Highlight>Alexandru Cojescu</Highlight>, the dedicated owner of this premium mobile detailing service. As a dedicated entrepreneur and senior at Palisades Charter High School, I have built this business <Highlight>from the ground up</Highlight>, fueled by my passion for automotive aesthetics.
    </p>,
    <p key={1}>
      My appreciation for both classic and modern vehicles inspired me to launch this venture at the age of 14. At the time, I was eager to earn my own income but quickly realized that traditional job opportunities were limited for someone my age. Determined to turn my vision into reality, I established my own mobile detailing service - one that prioritizes <Highlight>quality, convenience, and customer satisfaction</Highlight>.
    </p>,
    <p key={2}>
      With the support of friends and family, what started as a small summer job washing cars for neighbors has grown into a <Highlight>thriving business serving a loyal clientele</Highlight>. I take immense pride in delivering meticulous detailing services that help vehicle owners maintain their cars’ pristine appearance.
    </p>,
    <p key={3}>
      As a <Highlight>student entrepreneur</Highlight>, I balance my academic responsibilities with running this business, ensuring that every customer receives top-tier service. My commitment is to provide <Highlight>convenience, reliability, and affordability</Highlight> to busy vehicle owners who value high-quality car care.
    </p>,
    <p key={4}>
      Get in touch today to explore my customized detailing packages and premium car care products. I look forward to exceeding your expectations!
    </p>
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen bg-[#D3D3D3] text-black flex flex-col items-center justify-center px-6 pt-[15rem] pb-[30rem] overflow-hidden" // Added pt-[30rem] and pb-[30rem]
    >
      {inView && (
        <>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl font-bold mb-12 text-center reveal-text"
          >
            Imperial Mobile Detailing
          </motion.h1>

          <div className="max-w-4xl text-2xl text-center space-y-8">
            {textSections.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 1, ease: "easeOut" }}
                className="leading-relaxed reveal-text"
              >
                {text}
              </motion.div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default About;