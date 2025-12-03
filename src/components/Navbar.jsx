"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [showNavbar, setShowNavbar] = useState(true);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Products", href: "/Products" },
    // Contact removed (now separate button)
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.innerWidth >= 768) return;

      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (pathname !== "/") {
        if (pathname.toLowerCase().startsWith("/products")) {
          setActive("Products");
        } else {
          setActive("");
        }
      } else {
        if (hash === "#about") {
          setActive("About Us");
        } else {
          setActive("Home");
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname]);

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 w-full z-50 shadow-md transition-transform duration-300 bg-gradient-to-r from-[#012d46] via-[#035182] to-[#0389d2] animate-gradientMove",
          !showNavbar && "translate-y-[-100%]"
        )}
      >
        <div className="w-[90%] mx-auto flex justify-between items-center px-1 md:px-6 py-1 md:py-3">
          <Link href="/">
            <Image
              src="/logowhite.png"
              alt="Company Logo"
              width={120}
              height={70}
              className="max-h-18 object-cover w-[80px] md:w-[120px]"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-semibold text-base">
            {navLinks.map((link) => (
              <li key={link.name} className="group">
                <Link
                  href={link.href}
                  onClick={() => setActive(link.name)}
                  className={clsx(
                    "uppercase tracking-wide transition-all duration-300 pb-1",
                    active === link.name
                      ? "text-[#5ecbff]"
                      : "text-white hover:text-[#5ecbff]"
                  )}
                >
                  {link.name}
                  <span
                    className={clsx(
                      "block h-[2px] rounded-full transition-all duration-500",
                      active === link.name
                        ? "w-full bg-gradient-to-r from-[#5ecbff] to-[#0389d2]"
                        : "w-0 group-hover:w-full bg-[#5ecbff]"
                    )}
                  ></span>
                </Link>
              </li>
            ))}

            {/* Contact Button */}
            <li>
              <Link
                href="/#contact"
                className="
                  bg-white 
                  text-[#013550]
                  font-semibold 
                  px-5 
                  py-2 
                  rounded-full 
                  shadow-sm
                  transition-all
                  duration-300
                  hover:bg-[#e6faff]
                  hover:shadow-md
                "
              >
                CONTACT US
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-3xl cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <ul className="md:hidden flex flex-col gap-4 text-white font-medium text-base px-6 pt-4 pb-5 bg-[#012d46]/95 animate-slideDown">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => {
                    setActive(link.name);
                    setIsOpen(false);
                  }}
                  className={clsx(
                    "block py-2 px-3 rounded transition",
                    active === link.name
                      ? "bg-[#5ecbff] text-[#012d46] font-semibold"
                      : "hover:bg-white/10"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Contact Button - Mobile */}
            <li>
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="
                  block 
                  text-center 
                  bg-white 
                  text-[#013550] 
                  font-semibold 
                  py-2 
                  rounded-full 
                  shadow-sm 
                  hover:bg-[#e6faff]
                  transition
                "
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        )}
      </nav>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/905352522282"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ boxShadow: "0 0 0px rgba(37, 211, 102, 0.7)" }}
        animate={{
          boxShadow: [
            "0 0 10px rgba(37, 211, 102, 0.7)",
            "0 0 20px rgba(37, 211, 102, 1)",
            "0 0 10px rgba(37, 211, 102, 0.7)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="fixed bottom-6 z-50 right-6 w-14 h-14 rounded-full bg-green-700 flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,1)] transition-transform"
      >
        <Image
          src="/WhatsApp.svg"
          alt="WhatsApp"
          width={60}
          height={60}
          className="w-14 h-14"
        />
      </motion.a>
    </>
  );
};

export default Navbar;
