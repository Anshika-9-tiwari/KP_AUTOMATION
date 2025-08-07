'use client';

import Link from 'next/link';
import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function HeaderTop() {
  return (
    <div className="w-full bg-gradient-to-r from-black via-red-700 to-gray-800 text-white text-sm px-8 py-4 flex flex-col md:flex-row justify-between items-center ">
        {/* Left: Email and Phone */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-primary" />
            <a href="mailto:info@kpautomation.co.in" className="hover:underline">info@kpautomation.co.in</a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-primary" />
            <a href="tel:+6397206850" className="hover:underline">+91 74648 71880 / 63972 06850</a>
          </div>
        </div>

        {/* right Links */}
        <div className="flex items-center gap-4 mt-2 md:mt-0 transition duration-300 animate-pulse">
          <Link href="https://www.linkedin.com/in/nikki-rajput-49b709286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-primary">
            <FaLinkedin size={18} />
          </Link>
          <Link href="https://wa.me/916397206850" className="hover:text-primary">
            <FaWhatsapp size={18} />
          </Link>
          <Link href="https://www.instagram.com/kp_automation" className="hover:text-primary">
            <FaInstagram size={18} />
          </Link>
        </div>
      </div>
  );
}
