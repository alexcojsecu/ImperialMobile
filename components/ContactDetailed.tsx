"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Import Chevron Icon for dropdown

// Car and Service Options
const carOptions = ["Sedan", "SUV", "Truck", "Coupe", "Convertible", "Van"];
const serviceOptions = ["Basic Detail", "Extended Detail", "Full Detail"];

const ContactDetailed = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
    cars: {} as Record<string, number>,
    serviceType: "",
  });

  const [isSubmitting] = useState(false); // Remove this line
  const [selectedCar] = useState(""); // Remove this line
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);

  // Pricing structure based on car type
  const pricing = {
    Sedan: { "Basic Detail": 35, "Extended Detail": 60, "Full Detail": 125 },
    Coupe: { "Basic Detail": 35, "Extended Detail": 60, "Full Detail": 125 },
    Convertible: { "Basic Detail": 35, "Extended Detail": 60, "Full Detail": 125 },
    SUV: { "Basic Detail": 50, "Extended Detail": 80, "Full Detail": 150 },
    Truck: { "Basic Detail": 50, "Extended Detail": 80, "Full Detail": 150 },
    Van: { "Basic Detail": 50, "Extended Detail": 80, "Full Detail": 150 },
  };

  // Calculate total price and generate itemized breakdown
  const calculatePrice = () => {
    let totalPrice = 0;
    const breakdown: { carType: string; quantity: number; price: number }[] = [];

    Object.entries(formData.cars).forEach(([carType, quantity]) => {
      if (formData.serviceType && pricing[carType as keyof typeof pricing]) {
        const serviceKey = formData.serviceType as keyof (typeof pricing)[keyof typeof pricing];
        const pricePerCar = pricing[carType as keyof typeof pricing][serviceKey] * quantity;
        totalPrice += pricePerCar;
        breakdown.push({ carType, quantity, price: pricePerCar });
      }
    });

    return { totalPrice, breakdown };
  };

  const handleCarSelection = (carType: string) => {
    setFormData((prevData) => ({
      ...prevData,
      cars: { ...prevData.cars, [carType]: (prevData.cars[carType] || 0) + 1 },
    }));
    setDropdownOpen(false);
  };

  const handleServiceSelection = (service: string) => {
    setFormData({ ...formData, serviceType: service });
    setServiceDropdownOpen(false);
  };

  const { totalPrice, breakdown } = calculatePrice();

  return (
    <section className="flex justify-center items-center min-h-screen bg-[#D3D3D3] py-12 px-6 pt-24 sm:pt-12">
      {/* Added pt-24 for small screens and sm:pt-12 for larger screens */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
        {/* Left: Contact Form */}
        <div className="w-full md:w-3/5 bg-white shadow-xl rounded-lg p-10">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
            Contact Us
          </h2>

          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-lg font-medium text-gray-800 mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-gray-100 border border-gray-300 rounded-lg text-lg py-3 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            {/* Subject Input */}
            <div>
              <label className="block text-lg font-medium text-gray-800 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full bg-gray-100 border border-gray-300 rounded-lg text-lg py-3 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-lg font-medium text-gray-800 mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="w-full bg-gray-100 border border-gray-300 rounded-lg text-lg py-3 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800 resize-none h-32"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 text-lg font-semibold bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right: Service & Car Selection + Pricing Box */}
        <div className="w-full md:w-2/5 bg-white shadow-xl rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Service & Pricing</h3>

          {/* Service Type Dropdown */}
          <div className="relative mb-6">
            <p className="text-gray-500 text-lg mb-1">Choose a service type</p>
            <button
              className="w-full bg-gray-100 border border-gray-300 rounded-lg text-lg py-3 px-4 flex items-center justify-between shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
              onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
            >
              {formData.serviceType || "Select a Service Type"}
              <FaChevronDown className={`transition-transform ${serviceDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {serviceDropdownOpen && (
              <ul className="absolute w-full bg-white border border-gray-300 rounded-lg mt-2 shadow-md z-10">
                {serviceOptions.map((service) => (
                  <li
                    key={service}
                    className="px-4 py-2 text-lg text-gray-800 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleServiceSelection(service)}
                  >
                    {service}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Car Selection Dropdown */}
          <div className="relative mb-6">
            <p className="text-gray-500 text-lg mb-1">Choose a car type</p>
            <button
              className="w-full bg-gray-100 border border-gray-300 rounded-lg text-lg py-3 px-4 flex items-center justify-between shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {selectedCar ? selectedCar : "Select a Car Type"}
              <FaChevronDown className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <ul className="absolute w-full bg-white border border-gray-300 rounded-lg mt-2 shadow-md z-10">
                {carOptions.map((car) => (
                  <li
                    key={car}
                    className="px-4 py-2 text-lg text-gray-800 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleCarSelection(car)}
                  >
                    {car}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Larger Box: Displays Selected Cars and Prices */}
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 mt-6">
            <p className="text-gray-500 text-lg mb-2">Selected Cars & Prices</p>
            {breakdown.length > 0 ? (
              breakdown.map(({ carType, quantity, price }) => (
                <div key={carType} className="flex justify-between text-lg text-gray-800">
                  <span>{quantity} x {carType}</span>
                  <span className="font-semibold text-green-600">${price}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No cars selected.</p>
            )}
          </div>

          {/* Smaller Box: Displays Total Price */}
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mt-4 text-xl font-bold text-green-600">
            <p className="text-gray-500 text-lg mb-1">Total Price</p>
            ${totalPrice}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetailed;