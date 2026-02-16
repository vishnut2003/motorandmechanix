"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const MotionImage = motion(Image);

// Slide in from left animation for the image
const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
  },
};

// Mask reveal animation for the heading
const maskReveal: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 },
  },
};

// Fade up animation for paragraph
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
  },
};

// Container animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const Competitors = () => {
  return (
    <section className="sm:py-20 py-10 bg-[#121212] px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-col-reverse sm:flex-row gap-10 items-center">
          <motion.div
            variants={slideInLeft}
            className="sm:w-160 w-full max-w-[400px] sm:max-w-none sm:h-110 h-55 flex-shrink-0 overflow-hidden"
          >
            <MotionImage
              src="/assets/home/Group-4111.webp"
              alt="Motor & Mechanix"
              width={640}
              height={440}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="sm:w-160 w-full sm:h-110 h-55 object-contain"
            />
          </motion.div>
          <div className="text-white sm:ml-16">
            <div className="overflow-hidden">
              <motion.h3
                variants={maskReveal}
                className="sm:mb-8 mb-5 text-3xl font-medium sm:text-start text-center sm:text-[46px]"
              >
                Motor & Mechanix Vs Competitors
              </motion.h3>
            </div>
            <motion.p
              variants={fadeUp}
              className="text-[15px] sm:text-[17px] sm:text-start text-center"
            >
              Motor & Mechanix outshines competitors with superior expertise,
              cutting-edge technology, and a customer-first approach, making us
              the clear choice for all your automotive needs.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Competitors;
