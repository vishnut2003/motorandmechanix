"use client";

import React from "react";
import NextImage from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const LocateUsSection = () => {
  const contactLinks = [
    {
      icon: "/assets/home/mobile-icon.png",
      href: "tel:083838 38300",
      text: "083838 38300",
      type: "phone",
    },
    {
      icon: "/assets/home/whatap-icon.png",
      href: "https://api.whatsapp.com/send?phone=+918383838300&text=Hi+there+%F0%9F%91%8B%2C+Can+I+have+a+quote%2C+please",
      text: "083838 38300",
      type: "whatsapp",
    },
  ];

  return (
    <div className="w-full bg-[#FDD835] py-8 md:py-18 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl underline font-bold text-center mb-5 md:mb-10"
        >
          Locate Us
        </motion.h2>

        {/* Main Content Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl shadow-xl overflow-hidden mb-8 md:mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Section - Address & Contact */}
            <div className="p-5 md:p-12 lg:p-16">
              {/* Address Header */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start gap-4 mb-8"
              >
                <div className="flex-shrink-0 flex items-center justify-center">
                  <NextImage
                    src="/assets/home/location-icon.png"
                    alt="Location"
                    width={32}
                    height={40}
                    className="md:w-8 w-6 md:h-10 h-8"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-3xl font-bold md:mb-5 mb-3">
                    Motor & Mechanix
                  </h3>
                  <p className="text-slate-800 text-[18px] font-light leading-relaxed">
                    Plot No 1 , Khasra 120 , Next to Kajaria
                    <br />
                    Tiles Showroom , Near 14th Avenue
                    <br />
                    Gaur City-2 , Noida
                  </p>
                </div>
              </motion.div>

              {/* Contact Links */}
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target={link.type === "whatsapp" ? "_blank" : undefined}
                    rel={
                      link.type === "whatsapp"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 p-3 bg-[#f8f8f8] hover:bg-[#FDD835] hover:ml-3 rounded-lg transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="flex items-center justify-center transition-colors duration-300">
                      <NextImage
                        src={link.icon}
                        alt={link.type}
                        width={32}
                        height={32}
                        className="md:w-8 w-6 md:h-8 h-6"
                      />
                    </div>
                    <span className="text-xl md:text-2xl font-semibold transition-colors duration-300">
                      {link.text}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right Section - Map */}
            <div className="relative h-96 lg:h-auto min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.240912962786!2d77.41362637617078!3d28.622540884533038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8f222177f1%3A0x9f5f10c500a974fa!2sMotor%20and%20Mechanix%20-%20Car%20Service%20%26%20Repair!5e0!3m2!1sen!2sin!4v1696492604437!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Motor & Mechanix Location"
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-14 py-2 bg-black hover:bg-slate-900 text-[#FDD835] font-bold text-[20px] md:text-[26px] rounded-md transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-1"
          >
            CONTACT US
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default LocateUsSection;