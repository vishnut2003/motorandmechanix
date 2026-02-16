"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Mask reveal animation for the main heading
const maskReveal: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
  },
};

// Fade up animation for description
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Staggered container for cards
const cardContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Individual card animation
const cardItem: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const MotionLink = motion(Link);

export default function DeliveringExcellence() {
  return (
    <section className="bg-white md:py-16 py-12 md:px-0 px-3 md:border-0 border-b border-b-gray-300">
      <motion.div
        variants={cardContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      >
        {/* --- ROW 1 --- */}

        {/* 1. Title Block (Spans 2 columns) */}
        <div className="lg:col-span-2 bg-white px-8 md:px-18 flex items-center order-1 md:order-none overflow-hidden">
          <motion.h2
            variants={maskReveal}
            className="text-2xl sm:text-[56px] md:text-start leading-tight text-center font-medium underline sm:mb-8 mb-4"
          >
            Delivering excellence in Car Service across Noida Ext.
          </motion.h2>
        </div>

        {/* 2. Inventory (Black) */}
        <motion.div
          variants={cardItem}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
          className="bg-[#181818] md:block w-full p-4 md:pt-[50px] md:pb-[50px] md:pl-[50px] md:pr-[50px] flex gap-4 items-center group cursor-pointer relative overflow-hidden order-3 md:order-none"
        >
          {/* Subtle glow on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-radial from-[#FECE12]/10 to-transparent pointer-events-none" />
          <motion.div
            className="md:mb-8 relative"
            whileHover={{ y: -8, rotate: 5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image
              src="/assets/home/delivering-icon-1.png"
              alt="Inventory"
              width={64}
              height={64}
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
          </motion.div>
          <h3 className="text-white text-[20px] md:text-[28px] leading-tight group-hover:text-[#FECE12] transition-colors duration-300">
            Inventory of 25000+ Parts at Store
          </h3>
        </motion.div>

        {/* 3. Turn-around Time (White) */}
        <motion.div
          variants={cardItem}
          whileHover={{
            scale: 1.02,
            backgroundColor: "#f9fafb",
            transition: { duration: 0.3 },
          }}
          className="bg-white md:block w-full p-4 md:pt-[50px] md:pb-[50px] md:pl-[50px] md:pr-[50px] flex gap-4 items-center group cursor-pointer relative overflow-hidden order-4 md:order-none"
        >
          <motion.div
            className="md:mb-8 relative"
            whileHover={{ y: -8, rotate: 5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image
              src="/assets/home/delivering-icon-3.png"
              alt="Turn-around Time"
              width={64}
              height={64}
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
          </motion.div>
          <h3 className="text-[#28303d] text-[20px] md:text-[28px] leading-tight group-hover:text-[#FECE12] transition-colors duration-300">
            Best Turn-around Time. No Waiting
          </h3>
        </motion.div>

        {/* --- ROW 2 --- */}

        {/* 4. Description & Button (Spans 1 column) */}
        <motion.div
          variants={fadeUp}
          className="bg-white pl-10 md:pl-16 pr-8 md:mb-0 mb-8 flex flex-col order-2 md:order-none"
        >
          <p className="text-[#121212] md:leading-7 leading-6 font-normal text-center text-[16px] md:text-[17px]">
            Get professional <strong> best car repair service in Noida </strong>{" "}
            with expert mechanics. Find a trusted{" "}
            <strong> car repair near me </strong> for quick and reliable auto
            solutions. Skilled auto <strong> mechanics near me </strong> ensure
            top-quality service. Book your repair today!
          </p>

          <div className="md:block flex justify-center">
            <MotionLink
              href="/contact-us"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group btn yellow w-fit !flex items-center gap-6 border border-transparent transition-all duration-300 hover:!bg-white hover:!border-[#FFD700]"
            >
              <span className="transition-colors duration-300 group-hover:!text-[#FFD700]">
                Contact us
              </span>

              <motion.div
                whileHover={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight
                  strokeWidth={1.5}
                  className="w-5 h-5 flex-shrink-0 transition-all duration-300 group-hover:!text-[#FFD700]"
                />
              </motion.div>
            </MotionLink>
          </div>
        </motion.div>

        {/* 5. Equipment (Black) */}
        <motion.div
          variants={cardItem}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
          className="bg-[#181818] p-4 w-full md:block md:pt-[50px] md:pb-[50px] md:pl-[50px] md:pr-[50px] flex gap-4 items-center group cursor-pointer relative overflow-hidden order-5 md:order-none"
        >
          <motion.div
            className="md:mb-8 relative"
            whileHover={{ y: -8, rotate: 5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image
              src="/assets/home/delivering-icon-2.png"
              alt="Equipment"
              width={64}
              height={64}
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
          </motion.div>
          <h3 className="text-white text-[20px] md:text-[28px] leading-tight group-hover:text-[#FECE12] transition-colors duration-300">
            All Dealership Equipments
          </h3>
        </motion.div>

        {/* 6. Value Added (White) */}
        <motion.div
          variants={cardItem}
          whileHover={{
            scale: 1.02,
            backgroundColor: "#f9fafb",
            transition: { duration: 0.3 },
          }}
          className="bg-white p-4 w-full md:block md:pt-[50px] md:pb-[50px] md:pl-[50px] md:pr-[50px] flex gap-4 items-center group cursor-pointer relative overflow-hidden order-6 md:order-none"
        >
          <motion.div
            className="md:mb-8 relative"
            whileHover={{ y: -8, rotate: 5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image
              src="/assets/home/delivering-icon-5.png"
              alt="Value Added"
              width={64}
              height={64}
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
          </motion.div>
          <h3 className="text-[#28303d] text-[20px] md:text-[28px] leading-tight group-hover:text-[#FECE12] transition-colors duration-300">
            Value Added Services for Loyal Customers
          </h3>
        </motion.div>

        {/* 7. Trustable (Black) */}
        <motion.div
          variants={cardItem}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
          className="bg-[#181818] p-4 md:pt-[50px] md:pb-[50px] md:pl-[50px] md:pr-[50px] flex gap-4 items-center group cursor-pointer relative overflow-hidden order-7 md:order-none"
        >
          <motion.div
            className="md:mb-8 relative"
            whileHover={{ y: -8, rotate: 5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image
              src="/assets/home/delivering-icon-4.png"
              alt="Trustable"
              width={64}
              height={64}
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
          </motion.div>
          <h3 className="text-white text-[20px] md:text-[28px] leading-tight group-hover:text-[#FECE12] transition-colors duration-300">
            Trustable & Service Friendly
          </h3>
        </motion.div>
      </motion.div>
    </section>
  );
}

