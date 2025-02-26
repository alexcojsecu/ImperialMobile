"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  // If the pathname contains 'about' or 'contact', use black text; otherwise white
  const navTextColorClass =
    pathname.includes("about") || pathname.includes("contact")
      ? "text-black"
      : "text-white";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-30">
      <div className="max-container padding-container">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/LogoImage.png"
              alt="Logo"
              width={300} // Logo size increased to 300
              height={300}
              className="object-contain"
            />
          </Link>

          {/* Center-aligned navigation container */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            {/* Navigation Links (Desktop) */}
            <ul className="flex gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className={`text-4xl ${navTextColorClass} flexCenter cursor-pointer pb-1.5 transition-all duration-300 hover:text-primary hover:scale-105 relative group font-sans`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Icon */}
          <Image
            src="/menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
            onClick={toggleMenu}
          />
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black bg-opacity-80 backdrop-blur-sm">
            <ul className="flex flex-col gap-4 p-6">
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className={`text-5xl ${navTextColorClass} cursor-pointer pb-1.5 transition-all duration-300 hover:text-primary hover:translate-x-2 font-sans`}
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#"
                className={`text-5xl ${navTextColorClass} cursor-pointer pb-1.5 transition-all duration-300 hover:text-primary hover:translate-x-2 font-sans`}
                onClick={toggleMenu}
              >
          
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
