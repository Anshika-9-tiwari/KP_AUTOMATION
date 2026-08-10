'use client';

import Link from 'next/link';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function HeaderTop() {
  return (
    <div className="w-full bg-gradient-to-r from-[#FF3131] to-[#E12727] text-white text-sm px-10 py-2.5 md:py-4 flex  justify-between items-center ">
        {/* Left: Email and Phone */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-neutral-content text-sm md:text-lg" />
            <a href="mailto:info@kpautomation.co.in" className="text-md md:text-lg">info@kpautomation.co.in</a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-neutral-content text-sm md:text-lg" />
            <a href="tel:+6397206850" className=" text-md md:text-lg">+9163972 06850</a>
          </div>
        </div>

        {/* right Links */}
        <div className="hidden md:flex items-center gap-6 mt-2 md:mt-0 transition duration-300 animate-pulse">
          <a href="https://www.linkedin.com/in/nikkirajput/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={25} />
          </a>
          <a href="https://wa.me/916397206850" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={25} />
          </a>
          <a href="https://www.instagram.com/kp_automation" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={25} />
          </a>
        </div>
      </div>
  );
}
