import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Imperial Mobile Detailing</h3>
            <p className="text-gray-400">
              Premium car detailing services delivered at your doorstep.
            </p>
            <div className="mt-4">
              <p className="flex items-center text-gray-400">
                <FaPhone className="mr-2" /> (123) 456-7890
              </p>
              <p className="flex items-center text-gray-400">
                <FaEnvelope className="mr-2" /> contact@imperialdetailing.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/servicespage" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/aboutpage" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/contactpage" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Imperial Mobile Detailing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
