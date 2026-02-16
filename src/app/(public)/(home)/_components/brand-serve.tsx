"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { company } from "../data";

// Mask reveal animation for headings
const maskReveal: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
  },
};

// Fade up animation for text
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Staggered container for brand grid
const gridContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

// Individual brand item animation
const brandItem: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// View More button animation
const viewMoreVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.8 },
  },
};

const BrandServe = () => {
  return (
    <section className="md:py-16 py-10 bg-[#121212] px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:gap-8 gap-4 grid-cols-1 items-center md:mb-16 mb-10">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:text-lg text-sm md:text-start text-center font-semibold text-white sm:mb-8 mb-4"
            >
              OUR BRANDS
            </motion.p>
            <div className="overflow-hidden">
              <motion.h3
                variants={maskReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-white text-3xl md:text-[56px] underline md:text-start text-center"
              >
                <span className="bg-[#FECE12] text-black">Brands</span> we serve
              </motion.h3>
            </div>
          </div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-white md:text-[18px] text-[16px] md:text-start text-center">
              We proudly serve an array of reputable automotive brands, ensuring
              quality and precision in every service. Your vehicle is in trusted
              hands at Motor & Mechanix.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0"
        >
          {company.map((brand, index) =>
            brand.name === "View More" ? (
              <motion.div
                key={index}
                variants={viewMoreVariants}
                className="group border border-[#ffffff66] bg-[#FECE12] flex items-center justify-center w-full md:p-14 p-8 hover:bg-[#121212] transition-all duration-[400ms] ease-out cursor-pointer col-span-1 md:col-span-1 lg:col-span-1"
              >
                <div className="flex items-center gap-8 text-black whitespace-nowrap">
                  <span className="sm:text-lg font-semibold group-hover:text-[#FECE12] transition-colors duration-[400ms] ease-out w-full">
                    View More
                  </span>
                  {/* ArrowUpRight (default) - fades out smoothly */}
                  <ArrowUpRight className="w-8 h-8 block group-hover:hidden transition-all duration-[400ms] ease-out" />
                  {/* ArrowRight (on hover) - fades in smoothly */}
                  <ArrowRight className="w-8 h-8 hidden group-hover:block text-white transition-all duration-[400ms] ease-out" />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={index}
                variants={brandItem}
                whileHover={{
                  backgroundColor: "#FECE12",
                  transition: { duration: 0.3 },
                }}
                className="group border border-[#ffffff66] flex items-center justify-center md:p-14 p-8 relative overflow-hidden cursor-pointer"
              >
                {/* Subtle glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#FECE12]/0 to-[#FECE12]/0 pointer-events-none"
                  whileHover={{
                    background: "radial-gradient(circle at center, rgba(254, 206, 18, 0.15) 0%, transparent 70%)",
                  }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  className="text-white text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {brand.name === "Maruti Suzuki" && (
                    <div className="flex flex-col items-center">
                      <Image
                        src="/assets/brand-serve/brands-icon-1.webp"
                        alt="Maruti Suzuki Service"
                        width={224}
                        height={24}
                        className="w-[14rem] h-[1.5rem] transition-all duration-300 object-contain filter group-hover:brightness-0"
                      />
                    </div>
                  )}
                  {brand.name === "Renault" && (
                    <div className="flex flex-col items-center">
                      <Image
                        src="/assets/brand-serve/brands-icon-7.webp"
                        alt="Renault Service"
                        width={320}
                        height={56}
                        className="w-[20rem] h-[3.5rem] transition-all duration-300 object-contain filter group-hover:brightness-0"
                      />
                    </div>
                  )}
                  {brand.name === "Toyota" && (
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/brand-serve/brands-icon-5.webp"
                        alt="Toyota Service"
                        width={320}
                        height={56}
                        className="w-[20rem] h-[3.5rem] transition-all duration-300 object-contain filter group-hover:brightness-0"
                      />
                    </div>
                  )}
                  {brand.name === "Ford" && (
                    <div className="flex items-center gap-2 hover:invert!">
                      <Image
                        src="/assets/brand-serve/brands-icon-4.webp"
                        alt="Ford Service"
                        width={320}
                        height={56}
                        className="w-[20rem] h-[3.5rem] transition-all duration-300 object-contain "
                      />
                    </div>
                  )}
                  {brand.name === "Volkswagen" && (
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/brand-serve/brands-icon-9.webp"
                        alt="Volkswagen Service"
                        width={320}
                        height={56}
                        className="w-[20rem] h-[3.5rem] transition-all duration-300 object-contain filter group-hover:brightness-0"
                      />
                    </div>
                  )}
                  {brand.name === "Isuzu" && (
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/brand-serve/brands-icon-8.webp"
                        alt="Isuzu Service"
                        width={320}
                        height={56}
                        className="w-[20rem] h-[3.5rem] transition-all duration-300 object-contain filter group-hover:brightness-0"
                      />
                    </div>
                  )}
                  {brand.name === "Mahindra" && (
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/brand-serve/brands-icon-11.webp"
                        alt="Mahindra Service"
                        width={320}
                        height={56}
                        className="w-[20rem] h-[3.5rem] transition-all duration-300 object-contain filter group-hover:brightness-0"
                      />
                    </div>
                  )}
                  {brand.name === "Kia" && (
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/brand-serve/brands-icon-10.webp"
                        alt="Kia Service"
                        width={320}
                        height={56}
                        className="w-[20rem] h-[3.5rem] transition-all duration-300 object-contain filter group-hover:brightness-0"
                      />
                    </div>
                  )}
                  {brand.name === "Honda" && (
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/brand-serve/brands-icon-6.webp"
                        alt="Honda Service"
                        width={320}
                        height={56}
                        className="w-[20rem] h-[3.5rem] transition-all duration-300 object-contain filter group-hover:brightness-0"
                      />
                    </div>
                  )}
                  {brand.name === "Hyundai" && (
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/brand-serve/brands-icon-3.webp"
                        alt="Hyundai Service"
                        width={320}
                        height={56}
                        className="w-[20rem] h-[3.5rem] transition-all duration-300 object-contain filter group-hover:brightness-0"
                      />
                    </div>
                  )}
                  {brand.name === "Tata" && (
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/brand-serve/brands-icon-2.webp"
                        alt="Tata Service"
                        width={320}
                        height={56}
                        className="w-[20rem] h-[3.5rem] transition-all duration-300 object-contain filter group-hover:brightness-0"
                      />
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandServe;
