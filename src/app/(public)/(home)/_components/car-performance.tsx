"use client";

import { ArrowUpRight } from "lucide-react";
import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// Mask reveal animation for the heading
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

// Staggered container for process cards
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Individual card animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const CarPerformance = () => {
  const processSteps = [
    {
      id: "01",
      title: "Book Your Slot",
      description: "Reserve your service slot for premium car care.",
      image:
        "/assets/home/step-1.webp",
      size: "full",
    },
    {
      id: "02",
      title: "Get Free Home Pickup",
      description: "Complimentary home pickup for hassle-free car care.",
      image:
        "/assets/home/step-2.webp",
      size: "half",
    },
    {
      id: "03",
      title: "Thorough Repair Process",
      description: "Precision and care define our thorough repair process.",
      image:
        "/assets/home/DSC_0700.webp",
      size: "half",
    },
    {
      id: "04",
      title: "50+ Point Inspection",
      description: "Ensuring peak condition, safety, and reliability.",
      image:
        "/assets/home/step-4.webp",
      size: "half",
    },
  ];

  return (
    <div className="w-full py-3 md:py-5 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Box */}
        <div className="max-w-2xl md:mb-16 md:text-start text-center">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm md:text-base md:text-start text-center font-semibold uppercase text-[#FFCE32] md:mb-4"
          >
            Our Process
          </motion.span>
          <div className="overflow-hidden">
            <motion.h2
              variants={maskReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-[56px] md:text-start text-center font-medium underline my-5 "
            >
              Streamlined&nbsp;
              <span className="bg-[#FECE12] text-black">steps</span>
              &nbsp;to your <br className="md:block hidden" /> Car performance.
            </motion.h2>
          </div>
        </div>

        {/* Process List */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 md:mb-16"
        >
          {processSteps.map((step) => (
            <motion.li
              key={step.id}
              variants={cardVariants}
              className={`${step.size === "full" ? "md:col-span-3" : "md:col-span-1"
                } group`}
            >
              <div
                className={`relative overflow-hidden ${step?.id === "03" ? "h-150 md:h-200" : "h-80 md:h-120"}`}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${step.image})`,
                  }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 py-6 px-10 md:py-8 md:px-20 transform transition-transform duration-500 group-hover:-translate-y-2 text-center md:mb-4">
                  <span className="inline-block text-lg md:text-xl font-semibold text-[#FECE12] mb-0.5">
                    {step.id}
                  </span>
                  <h3 className="text-xl md:text-[34px] font-semibold leading-10 text-white mb-1.5">
                    {step.title}
                  </h3>
                  <span className="inline-block text-white font-semibold text-center text-base md:text-md leading-relaxed max-w-xl">
                    {step.description}
                  </span>
                </div>
              </div>

              {step?.id === "04" && (
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="py-8 md:py-18 md:text-start text-center"
                >

                  <p className="text-base md:text-lg font-light leading-relaxed md:mb-6 ">
                    {`Experience a seamless journey to unlocking your vehicle's
                    peak performance. Our efficient process ensures quality
                    care and satisfaction.`}
                  </p>
                  <div className="md:block flex justify-center">
                    <Link
                      href="/contact-us"
                      className="group btn yellow w-fit !flex items-center gap-6
             border border-transparent
             transition-all duration-300
             hover:!bg-white hover:!border-[#FFD700]"
                    >
                      <span className="transition-colors duration-300 group-hover:!text-[#FFD700]">
                        Schedule A Pickup
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

              )}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default CarPerformance;

