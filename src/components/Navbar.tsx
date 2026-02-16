"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

import { navbarLinks } from "@/utils/pages-info.utils";

const navLinks = navbarLinks.map(link => ({ name: link.label, href: link.path }));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const previousOverflow = useRef<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); // Changed to > 0 to match Header behavior
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      if (previousOverflow.current === null) {
        previousOverflow.current = document.body.style.overflow;
      }
      document.body.style.overflow = "hidden";
      return;
    }

    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 shadow-md transition-all duration-300",
          scrolled ? "bg-[#000000b3]" : "bg-black" // Reverted to previous state
        )}
      >
        <div className="px-4 py-4 flex items-center">
          {/* Logo */}
          <Link href="/" className="flex items-start mr-auto relative z-[60]">
            <Image
              src="/assets/navbar/mlogo.png"
              alt="Motor & Mechanix"
              width={160}
              height={40}
              className="sm:w-[10rem] w-[8rem] h-[1.6rem] sm:h-[2rem] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-end mr-30 space-x-10 text-[14px] font-medium text-white">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative pb-1
                 after:absolute after:left-0 after:bottom-0
                 after:h-[1px] after:w-full after:bg-[#FFCE32]
                 after:scale-x-0 after:origin-left
                 after:transition-transform after:duration-300 after:ease-out
                 hover:after:scale-x-100"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:08383838300">
              <Image
                src="/assets/navbar/phn-icon.webp"
                alt="Phone"
                width={56}
                height={56}
                className="w-14 h-14"
              />
            </a>
            <a href="https://api.whatsapp.com/send?phone=+918383838300&text=Hi+there+👋%2C+Can+I+have+a+quote%2C+please">
              <Image
                src="/assets/navbar/whatsapp-icon.webp"
                alt="WhatsApp"
                width={56}
                height={56}
                className="w-14 h-14"
              />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="md:hidden ml-auto text-[#FECE12] relative z-[60]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <span aria-hidden className="flex flex-col items-end gap-1.5">
                <span className="block h-0.5 w-5 bg-current rounded-full" />
                <span className="block h-0.5 w-7 bg-current rounded-full" />
                <span className="block h-0.5 w-5 bg-current rounded-full" />
                <span className="text-sm text-[#FFCE32]">Menu</span>
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-[#FFCE32] z-[70] flex flex-col"
          >
            {/* Overlay Header */}
            <div className="px-4 py-4 flex items-center justify-between">
              {/* <Link href="/" onClick={() => setIsOpen(false)} className="flex items-start">
                <Image
                  src="/assets/navbar/mlogo.png"
                  alt="Motor & Mechanix"
                  width={160}
                  height={40}
                  className="w-[8rem] h-[1.6rem] object-contain"
                />
              </Link> */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-black hover:bg-black/10 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col items-center justify-center space-y-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-3xl font-bold text-black uppercase hover:text-white transition-colors block text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <div className="flex gap-6 mt-8 justify-center">
                <a href="tel:08383838300" className="w-20 h-20 rounded-full flex items-center justify-center text-white">
                  <Image
                    src="/assets/navbar/phn-icon.webp"
                    alt="Phone"
                    width={48}
                    height={48}
                  // className="invert"
                  />
                </a>
                <a href="https://api.whatsapp.com/send?phone=+918383838300&text=Hi+there+👋%2C+Can+I+have+a+quote%2C+please" className=" rounded-full flex items-center justify-center text-white">
                  <Image
                    src="/assets/navbar/whatsapp-icon.webp"
                    alt="WhatsApp"
                    width={48}
                    height={48}
                  // className="invert"
                  />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
