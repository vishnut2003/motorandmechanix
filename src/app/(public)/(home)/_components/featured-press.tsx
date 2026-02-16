"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const FeaturedPress = () => {
  const newsCards = [
    {
      id: 1,
      title: "The Print",
      description:
        "Motor & Mechanix revolutionising car care with a one-stop solution for all your automotive needs.",
      image: "/assets/home/print3.jpeg",
      link: "https://theprint.in/ani-press-releases/motor-mechanix-revolutionising-car-care-with-a-one-stop-solution/2437738/",
    },
    {
      id: 2,
      title: "ANI News",
      description:
        "Discover how Motor & Mechanix is transforming the car care industry with innovative solutions.",
      image: "/assets/home/ani3.jpeg",
      link: "https://www.aninews.in/news/business/motor-amp-mechanix-revolutionising-car-care-with-a-one-stop-solution20250109111011/",
    },
    {
      id: 3,
      title: "Business Standard",
      description:
        "Read about Motor & Mechanix's comprehensive approach to revolutionising automotive care services.",
      image: "/assets/home/bs3.jpeg",
      link: "https://www.business-standard.com/content/press-releases-ani/motor-mechanix-revolutionising-car-care-with-a-one-stop-solution-125010900445_1.html",
    },
  ];

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
    <section className="bg-black md:py-14 py-8 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-[45px] font-semibold underline md:mb-4 mb-2 text-center text-white">
            Featured In Press
          </h2>
          <hr className="md:w-24 w-12 mx-auto border-0 border-t-[4px] border-[#FFD700]" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:py-14 py-8"
        >
          {newsCards.map((card) => (
            <motion.a
              key={card.id}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="card group bg-white rounded-2xl hover:border-[#FFD700] p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Card Icon/Image */}
              <div className="relative overflow-hidden flex items-center justify-center mb-5">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={200}
                  height={120}
                  className="w-50 h-30 object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="text-center">
                <h3 className="text-xl md:text-[28px] font-semibold md:mb-3 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-[#555] text-[14px] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* CSS Animation Keyframes */}
      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default FeaturedPress;
