"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Basic Detail",
    description: "Complete interior and exterior detailing",
    details: [
      "Full Interior Vacuum",
      "Full Interior Wipedown/Sanitize",
      "Leather Cleaner + Conditioner",
      "Pet Hair Removal",
      "Exterior Hand Wash",
      "Rim Cleaning",
      "Tire Shine",
      "Door Jam Cleaning",
      "Hand Dry w/Microfiber",
    ],
    price: "$99",
  },
  {
    title: "Extended Detail",
    description:
      "A full exterior wash, wax, and polish to restore shine and protection",
    details: [
      "Exterior Wax Sealant",
      "Interior Stain Removal",
      "Full Interior Vacuum",
      "Full Interior Wipedown/Sanitize",
      "Plastic Trim Gloss",
      "Pet Hair Removal",
      "Exterior Hand Wash",
      "Wheel and Tire Detail",
      "Tire Shine",
      "Door Jam Cleaning",
      "Hand Dry w/Microfiber",
    ],
    price: "$149",
  },
  {
    title: "Full Detail",
    description: "Luxury Detailing, Impeccable Results",
    details: [
      "Exterior Clay Bar",
      "Exterior Paint Correction",
      "Exterior Wax Sealant",
      "Interior Stain Removal",
      "Full Interior Vacuum",
      "Full Interior Wipedown/Sanitize",
      "Plastic Trim Gloss",
      "Pet Hair Removal",
      "Exterior Hand Wash",
      "Wheel and Tire Detail",
      "Tire Shine",
      "Door Jam Cleaning",
      "Hand Dry w/Microfiber",
    ],
    price: "$199",
  },
];

const ServicesDetailed = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="py-16 pt-24 bg-white text-primary overflow-hidden"
    >
      {inView && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 text-center"
        >
          <div className="relative inline-block">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-6xl font-bold mb-12 text-gray-900 relative"
            >
              Car Detailing Services
              {/* Animated Underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.5,
                }}
                className="absolute bottom-[-14px] left-0 w-[calc(100%+20px)] h-[3px] bg-gray-900 origin-left"
                style={{
                  left: "-10px",
                  width: "calc(100% + 20px)",
                }}
              />
            </motion.h2>
          </div>

          <div className="bg-white pt-20 pb-20 px-14 rounded-2xl shadow-2xl shadow-gray-900 border border-gray-800 flex flex-col items-center">
            <div className="grid md:grid-cols-3 w-full gap-8 text-center">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 1,
                    ease: "easeOut",
                  }}
                  className="p-8 border-r last:border-r-0 flex flex-col items-center"
                >
                  <h3 className="text-5xl font-semibold mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-3xl text-gray-800 mb-4">
                    {service.description}
                  </p>
                  <ul className="pt-4 text-2xl text-gray-800 font-medium list-disc pl-6 text-left w-full">
                    {service.details.map((detail, i) => (
                      <li key={i} className="mb-2">
                        {detail}
                      </li>
                    ))}
                  </ul>
                  {/* Spacer to push price to the bottom */}
                  <div className="flex-grow"></div>
                  {/* Price with increased top padding */}
                  <div className="pt-12 w-full">
                    <p className="text-3xl text-gray-900">
                      Price: {service.price}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Single centered text below all service cards */}
            <p className="mt-8 text-2xl text-gray-800 text-center">
              Additional Services
            </p>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default ServicesDetailed;
