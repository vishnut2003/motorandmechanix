"use client";

import React from "react";
import { motion } from "framer-motion";

const CustomerTestimonial = () => {
  return (
    <section className="md:pt-18 md:pb-0 pt-10 pb-10 bg-[#efefef] px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-[56px] font-medium underline md:mb-12 mb-6"
        >
          {"Customer's Testimonial - "}
          <span className="bg-[#FECE12] text-black px-1">Video</span>
        </motion.h2>

        {/* Responsive Video Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full overflow-hidden aspect-video bg-black"
        >
          <video
            className="absolute top-0 left-0 w-full h-full object-contain"
            controls
            controlsList="nodownload"
            preload="metadata"
          >
            <source
              src="/customer-testimonial.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerTestimonial;
