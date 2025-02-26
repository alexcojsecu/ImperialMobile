"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const textSections = [
    "My name is Alexandru Cojescu, the creator behind Imperial Mobile Detailing's mobile detailing business. I'm currently 17 years old and attend Palisades Charter High School.",
    "My appreciation for all unique and nice-looking vehicles, both classic and modern, led me to start this business back when I was 14. At the time, I was eager to make my own money but realized no one would hire me at that age. That's when I got the idea to launch my own mobile detailing venture - nothing would stop me from turning my creative vision into reality since I'd be working for myself!",
    "With encouragement from my friends and family, I began offering mobile detailing services, quickly realizing there was high demand to keep cars looking sharp. What began as a summer job washing neighbor's cars has steadily grown into a continuous mobile business operation.",
    "Now a Senior in high school, I balance my classes and activities with managing this student-run enterprise. I take great pride in the quality of service I provide clients throughout the area. My goal is to deliver convenience, reliability, and affordability to busy vehicle owners.",
    "Contact me today to learn more about my customized detailing packages and car care products. I look forward to serving you through my youth entrepreneurship!",
    "*7:00AM - 3:00PM, I may be in a lecture and not be able to respond to calls. Shoot me a text and I'll be sure to get back to you as soon as possible! (424-378-9749)"
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
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 1, ease: "easeOut" }}
                className="leading-relaxed reveal-text"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default About;