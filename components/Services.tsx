"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PulsatingButton } from './magicui/pulsating-button';

const CDN_BASE_URL = "https://ImperialMobileGallery.b-cdn.net";

const headerVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  hover: { scale: 1.1, transition: { duration: 0.3, ease: "easeInOut" } },
};

const services = [
  {
    title: "Exterior Detailing",
    description: "Full exterior wash, wax, and polish to keep your car shining.",
    image: `${CDN_BASE_URL}/Service1.jpg`, // Use CDN_BASE_URL here
  },
  {
    title: "Interior Cleaning",
    description: "Deep clean of seats, carpets, and interior surfaces.",
    image: `${CDN_BASE_URL}/Interior5.jpg`, // Use CDN_BASE_URL here
  },
  {
    title: "Full Detailing",
    description: "Complete detailing inside and out for a like-new finish.",
    image: `${CDN_BASE_URL}/Service3.jpg`, // Use CDN_BASE_URL here
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stops observing after the element becomes visible
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-16 white transition-opacity duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/servicespage">
          <motion.h2
            variants={headerVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="text-6xl font-bold text-gray-900 relative cursor-pointer text-center mb-12"
          >
            Our Services
            {/* Animated Underline (smaller) */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="absolute bottom-[-14px] left-1/3 w-1/3 h-[3px] bg-gray-900 origin-left"
            />
          </motion.h2>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden group transition-transform duration-300">
                <Image
                  src={service.image} // Use the CDN-based image URL
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:blur-md"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <p className="text-gray-200">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <PulsatingButton onClick={() => router.push("/contactpage")}>
            Get a Quote Now
          </PulsatingButton>
        </div>
      </div>
    </section>
  );
};

export default Services;