"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Mask reveal animation for the heading
const maskReveal: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
  },
};

// Slide in from left for image
const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Staggered container for list items
const listContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

// Individual list item animation
const listItem: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const commitmentItems = [
  "Sourcing Authentic Spare Parts for Over Three Decades",
  "Faster & Hassle Free Turn Around Time.",
  "Highly skilled labor delivering efficiency at 50% lower costs",
  "Latest Machines and Infrastructure",
  "An Experience To Remember",
  "Motor & Mechanix Vs Competitors",
  "Ensuring Your Vehicle's Safety: Our Vigilant CCTV Surveillance",
];

const Commitment = () => {
  return (
    <section className="bg-[#efefef] py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="overflow-hidden">
          <motion.h2
            variants={maskReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-[57px] md:text-start text-center font-medium underline my-5"
          >
            Driven by Excellence: Our&nbsp;
            <span className="bg-[#FECE12] text-black">Commitment to You</span>
          </motion.h2>
        </div>
        <div className="md:flex items-center gap-12 md:py-6">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="overflow-hidden"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src="/assets/home/commitment.jpg"
                alt="Motor & Mechanix"
                width={880}
                height={600}
                className="object-contain w-[55rem] h-full"
              />
            </motion.div>
          </motion.div>
          <motion.div
            variants={listContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {commitmentItems.map((item, index) => (
              <motion.div
                key={index}
                variants={listItem}
                whileHover={{ x: 8, }}
                transition={{ duration: 0.3 }}
                className="border-t border-[#B39123] md:pl-6 md:h-18 h-15 flex items-center justify-between cursor-pointer group"
              >
                <div>
                  <p className="text-[15px] md:text-[24px] md:leading-6.5 leading-4 font-medium group-hover:text-[#FAC517] transition-colors duration-300">
                    {item}
                  </p>
                </div>
                <div>
                  <ArrowRight
                    className="w-6 h-6 md:w-10 md:h-10 transform transition-transform duration-300 group-hover:translate-x-2"
                    color="#0000FF"
                    strokeWidth={0.5}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
