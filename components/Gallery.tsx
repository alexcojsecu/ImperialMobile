"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image"; // Import the Image component from next/image

const CDN_BASE_URL = "https://ImperialMobileGallery.b-cdn.net";

const imageNames = [
  "Interior1.jpg", "Interior2.jpg", "Interior3.jpg",
  "Interior4.jpg", "Interior5.jpg", "Interior6.jpg", "Interior7.jpg", "Interior8.jpg", "Interior9.jpg",
  "Interior10.jpg", "Interior11.JPG", "Interior12.jpg", "Interior13.jpg", "Interior14.jpg", "Interior15.jpg",
  "Interior16.jpg", "Interior17.jpg", "Sedan1.jpg", "Sedan2.jpg", "Sedan3.jpg", "Sedan4.jpg", "Sedan5.jpg",
  "Sedan6.jpg", "Sedan7.jpg", "Sedan8.JPG", "Sedan9.jpg", "Sedan10.jpg", "Sedan11.jpg", "Sedan12.jpg",
  "Sedan13.jpg", "Sedan14.jpg", "Sedan15.jpg", "Sedan16.jpg", "Sedan17.jpg", "Sedan18.jpg", "Sedan19.jpg",
  "Sedan20.jpg", "Sedan21.jpg", "Sedan22.jpg", "Sedan23.jpg", "Sedan24.jpg", "Sedan25.JPG", "Sedan26.jpg",
  "Sedan27.JPG", "Sedan28.JPG", "Sedan29.jpg", "Sedan30.JPG", "Sedan31.jpg", "Sedan32.jpg", "Sedan33.jpg",
  "Sedan34.jpg", "Sedan35.jpg", "Sedan36.jpg", "Sedan37.jpg", "Sedan38.jpg", "Sedan39.jpg", "Sedan40.jpg",
  "Sedan41.jpg", "Sedan42.jpg", "Suv1.jpg", "Suv2.jpg", "Suv3.jpg", "Suv4.jpg", "Suv5.jpg", "Suv6.jpg",
  "Suv7.jpg", "Suv8.jpg", "Suv9.jpg", "Suv10.jpg", "Suv11.jpg", "Suv12.jpg", "Suv13.jpg", "Suv14.jpg",
  "Suv15.jpg", "Suv16.jpg", "Suv17.jpg", "Suv18.jpg", "Suv19.jpg", "Suv20.jpg", "Suv21.jpg", "Suv22.jpg",
  "Suv23.jpg", "Suv24.jpg", "Suv25.jpg"
];

const INITIAL_IMAGES_COUNT = 15;

const Gallery: React.FC = () => {
  const [visibleImages, setVisibleImages] = useState<number>(INITIAL_IMAGES_COUNT);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const allImages = useMemo(() => {
    let filteredImages = imageNames;
    if (filterCategory !== "All") {
      filteredImages = imageNames.filter(name => name.includes(filterCategory));
    }
    return filteredImages.map(name => `${CDN_BASE_URL}/${name}`);
  }, [filterCategory]);

  const displayedImages = useMemo(() => allImages.slice(0, visibleImages), [visibleImages, allImages]);

  const handleShowMore = () => {
    setVisibleImages(prevCount => Math.min(prevCount + INITIAL_IMAGES_COUNT, allImages.length));
  };

  const handleImageClick = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentImageIndex(index);
  };

  const handleCloseOverlay = () => {
    setSelectedImage(null);
  };

  const handleCategoryChange = (value: string) => {
    setFilterCategory(value);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleNextImage = () => {
    const newIndex = (currentImageIndex + 1) % allImages.length;
    setSelectedImage(allImages[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  const handlePrevImage = () => {
    const newIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
    setSelectedImage(allImages[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-4 pt-16 pb-12"
    >
      <div className="flex items-center mb-8 space-x-4">
        <h2 className="text-5xl font-semibold">Gallery</h2>
        <div className="relative">
          <button onClick={toggleDropdown} className="px-6 py-3 border rounded-md shadow-sm text-2xl flex items-center justify-between">
            {filterCategory} <FaChevronDown className="ml-2" />
          </button>
          {showDropdown && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-md mt-2 rounded-md z-10">
              <div className="text-xl cursor-pointer p-2 hover:bg-gray-200" onClick={() => handleCategoryChange('All')}>All Categories</div>
              <div className="text-xl cursor-pointer p-2 hover:bg-gray-200" onClick={() => handleCategoryChange('Suv')}>SUV</div>
              <div className="text-xl cursor-pointer p-2 hover:bg-gray-200" onClick={() => handleCategoryChange('Sedan')}>Sedan</div>
              <div className="text-xl cursor-pointer p-2 hover:bg-gray-200" onClick={() => handleCategoryChange('Interior')}>Interior</div>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {displayedImages.map((src, index) => (
          <motion.div
            key={src}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-2xl shadow-md cursor-pointer"
            onClick={() => handleImageClick(src, index)}
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              loading="lazy"
              width={300} // Set appropriate width
              height={200} // Set appropriate height
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
      {visibleImages < allImages.length && (
        <div className="text-center mt-6">
          <button 
            onClick={handleShowMore} 
            className="px-6 py-3 border rounded-md shadow-sm text-2xl"
          >
            Show More
          </button>
        </div>
      )}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button onClick={handleCloseOverlay} className="absolute top-4 right-4 bg-white p-4 rounded-full shadow-lg">
            <span className="text-3xl text-gray-900">×</span>
          </button>
          <button onClick={handlePrevImage} className="absolute left-4 text-white text-3xl">
            <FaChevronLeft />
          </button>
          <button onClick={handleNextImage} className="absolute right-4 text-white text-3xl">
            <FaChevronRight />
          </button>
          <Image
            src={selectedImage}
            alt="Enlarged gallery image"
            width={800} // Set appropriate width
            height={600} // Set appropriate height
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </motion.div>
  );
};

export default Gallery;