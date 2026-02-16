"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const Workshop = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="md:my-20 my-10 sm:px-0 px-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-12 items-stretch">
        {/* Video Box - Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-3 md:gap-12 w-full lg:w-2/4 order-2 md:order-1"
        >
          {/* Video Container */}
          <div className="relative w-full overflow-hidden group">
            <video
              id="video"
              preload="metadata"
              playsInline
              muted
              loop
              autoPlay
              poster="/assets/home/gallery1-480.webp"
              className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
            >
              <source src="/assets/home/workshop-gallery.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Picture Element */}
          <div className="relative overflow-hidden group">
            <Image
              src="/assets/home/Commitment-to-You-1.jpg"
              alt="Commitment to You"
              width={600}
              height={400}
              className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Heading Box - Right Column */}
        <div className="flex flex-col gap-8 w-full lg:w-2/3 lg:mr-10 order-1 md:order-2">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <span className="inline-block text-sm md:text-base font-semibold tracking-wider uppercase text-[#FFCE32] mb-3">
              Our Gallery
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-[56px] font-medium underline text-slate-900 leading-tight mb-6">
              Revamped Rides: Our workshop In Action
            </h2>
            <Image
              src="/assets/home/btn-icon.png"
              alt="Motor & Mechanix"
              width={120}
              height={120}
              className="w-30 h-30 slow-spin-hover md:block hidden"
            />
          </motion.div>

          {/* Slider Box */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 md:gap-8 mt-[-2rem]"
          >
            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden group cursor-pointer"
            >
              <Image
                src="/assets/home/gallery-img-1-1.webp"
                alt="Workshop Gallery Image 1"
                width={400}
                height={300}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden group cursor-pointer"
            >
              <Image
                src="/assets/home/DSC_0743-1.webp"
                alt="Workshop Gallery Image 2"
                width={400}
                height={300}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </motion.div>

          {/* Text Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col  p-2 md:p-8"
          >
            <p className="text-slate-700 text-base md:text-lg md:text-start text-center leading-6 md:w-100">
              A visual journey of our workshop, where precision meets passion.
              Experience top-tier car repairs and reselling services tailored to
              exceed your expectations.
            </p>
            <div className="md:block flex justify-center">
              <Link
                href="/services"
                className="group btn yellow w-fit !flex items-center gap-6
                                        border border-transparent
                                        transition-all duration-300
                                        hover:!bg-white hover:!border-[#FFD700]"
              >
                <span className="transition-colors duration-300 group-hover:!text-[#FFD700]">
                  Our Gallery
                </span>

                <ArrowUpRight
                  strokeWidth={1.5}
                  className="w-5 h-5 flex-shrink-0
                                          transition-all duration-300
                                          group-hover:!text-[#FFD700]
                                          group-hover:-translate-y-3
                                          group-hover:opacity-0"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Workshop;
