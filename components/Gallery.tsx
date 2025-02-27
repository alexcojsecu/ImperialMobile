"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// BunnyCDN base URL
const BUNNY_CDN_BASE_URL = "https://ImperialMobileGallery.b-cdn.net";

// Generate image URLs for BunnyCDN
const generateImageArray = (prefix: string, count: number) => {
  return Array.from({ length: count }, (_, i) => `${BUNNY_CDN_BASE_URL}/${prefix}${i + 1}.jpg`);
};

// Generate image arrays for each category
const suvImages = generateImageArray("Suv", 19);
const sedanImages = generateImageArray("Sedan", 42);
const interiorImages = generateImageArray("Interior", 16);

// Combine all images into a single array
const allImages = [...suvImages, ...sedanImages, ...interiorImages];
const IMAGES_PER_PAGE = 15;

interface GalleryProps {
  selectedCategory?: string;
}

const Gallery: React.FC<GalleryProps> = ({ selectedCategory = "All" }) => {
  const [filter, setFilter] = useState<string>(selectedCategory);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Track the selected image
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); // Track the index of the selected image

  const filteredImages =
    filter === "All"
      ? allImages
      : allImages.filter((img) => img.toLowerCase().includes(filter.toLowerCase()));

  const totalPages = Math.ceil(filteredImages.length / IMAGES_PER_PAGE);
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const paginatedImages = filteredImages.slice(startIndex, startIndex + IMAGES_PER_PAGE);

  // Handle image click
  const handleImageClick = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentImageIndex(startIndex + index); // Set the index of the selected image
  };

  // Handle close overlay
  const handleCloseOverlay = () => {
    setSelectedImage(null);
  };

  // Handle previous image
  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
      setSelectedImage(allImages[currentImageIndex - 1]);
    }
  };

  // Handle next image
  const handleNextImage = () => {
    if (currentImageIndex < allImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
      setSelectedImage(allImages[currentImageIndex + 1]);
    }
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
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="p-4 border rounded-md shadow-sm flex items-center space-x-2 bg-white text-2xl"
          >
            <span>{filter}</span>
            <FaChevronDown className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
          </button>
          {dropdownOpen && (
            <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              {["All", "Suv", "Sedan", "Interior"].map((option) => (
                <li
                  key={option}
                  className="px-4 py-2 text-xl text-gray-800 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setFilter(option);
                    setCurrentPage(1);
                    setDropdownOpen(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {paginatedImages.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-2xl shadow-md cursor-pointer"
            onClick={() => handleImageClick(src, index)}
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={500} // Set appropriate width
              height={300} // Set appropriate height
              className="w-full h-full object-cover transition-transform duration-300"
              quality={75} // Optimize for faster loading
              loading="lazy" // Lazy load non-critical images
              placeholder="blur" // Add blurry placeholder
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1h8JAAAAABJRU5ErkJggg==" // Placeholder image
            />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-6 py-3 border rounded-md shadow-sm disabled:opacity-50 text-2xl"
        >
          Previous
        </button>
        <span className="px-6 py-3 text-2xl">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-6 py-3 border rounded-md shadow-sm disabled:opacity-50 text-2xl"
        >
          Next
        </button>
      </div>

      {/* Overlay for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={handleCloseOverlay} // Close overlay when clicking outside the image
        >
          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent overlay close
              handlePreviousImage();
            }}
            className="absolute left-4 bg-white bg-opacity-75 p-4 rounded-full shadow-lg hover:bg-opacity-100 transition-opacity"
          >
            <FaChevronLeft className="text-3xl text-gray-900" />
          </button>

          {/* Enlarged image */}
          <div
            className="relative w-[80vw] h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent overlay close when clicking the image
          >
            <Image
              src={selectedImage}
              alt="Enlarged gallery image"
              width={1200} // Set appropriate width
              height={800} // Set appropriate height
              className="max-w-full max-h-full object-contain rounded-lg"
              quality={75} // Optimize for faster loading
            />
          </div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent overlay close
              handleNextImage();
            }}
            className="absolute right-4 bg-white bg-opacity-75 p-4 rounded-full shadow-lg hover:bg-opacity-100 transition-opacity"
          >
            <FaChevronRight className="text-3xl text-gray-900" />
          </button>

          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent overlay close
              handleCloseOverlay();
            }}
            className="absolute top-4 right-4 bg-white bg-opacity-75 p-4 rounded-full shadow-lg hover:bg-opacity-100 transition-opacity"
          >
            <span className="text-3xl text-gray-900">×</span>
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Gallery;