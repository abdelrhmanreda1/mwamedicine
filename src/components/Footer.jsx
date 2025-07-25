"use client";

import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#f7fbfd] text-gray-700 border-t border-gray-200">
      <div className="w-[90%] mx-auto py-8 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-10 px-7 md:px-0">
        {/* About Section */}
        <div className="flex flex-col gap-4 mt-[-10px]  md:px-9">
          {/* Logo */}
          <div className="relative w-28 h-16">
            <Image
              src="/logo-black.png"
              alt="logo for company"
              fill
              className="object-cover"
            />
          </div>

          {/* Description */}
          <p className=" text-gray-600 leading-relaxed w-[52%]">
            Providing trusted medical services and innovative solutions to
            improve healthcare and enhance patients’ lives.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-[#013E5D]">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-[#035182] transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-conditions"
                className="hover:text-[#035182] transition"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/cookies-policy"
                className="hover:text-[#035182] transition"
              >
                Cookies Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-[#013E5D] mb-4">
            Follow Us
          </h4>
          <div className="flex items-center gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#1877F2] transition" // Facebook Blue
            >
              <FiFacebook size={22} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#1DA1F2] transition" // Twitter Blue
            >
              <FiTwitter size={22} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#E4405F] transition" // Instagram Pinkish
            >
              <FiInstagram size={22} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#0A66C2] transition" // LinkedIn Blue
            >
              <FiLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#013E5D] text-white text-center py-2 text-sm ">
        © {new Date().getFullYear()} MWA Medicine. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
