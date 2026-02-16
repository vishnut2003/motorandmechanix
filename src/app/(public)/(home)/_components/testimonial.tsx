"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Mask reveal animation for the heading
const maskReveal: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
  },
};

// Fade in from left for image section
const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

// Slide in from right for content
const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const testimonials = [
    {
      id: 1,
      name: "Rajesh K.",
      text: "I've been a loyal customer of Motor & Mechanix for years, and they never cease to amaze me. Their expertise and commitment to excellence are unmatched. They've become more than just my go-to repair shop; they're my automotive partners.",
      image: "/assets/testimonials/new1-1.webp",
    },
    {
      id: 2,
      name: "Asha M",
      text: "Exceptional service and genuine parts – that's what I appreciate about Motor & Mechanix. Their team goes the extra mile to ensure my car runs smoothly. I wouldn't trust anyone else with my vehicle.",
      image: "/assets/testimonials/new1-3.webp",
    },
    {
      id: 3,
      name: "Amit J.",
      text: "I recently had my car repaired at Motor & Mechanix, and the experience was outstanding. Quick turnaround, fair pricing, and a courteous staff – they've won my trust, and I highly recommend them to others.",
      image: "/assets/testimonials/new1-2.webp",
    },
    {
      id: 4,
      name: "Neha S.",
      text: "Finding a trustworthy mechanic is not easy, but Motor & Mechanix has made it possible. Their 24/7 CCTV surveillance gave me peace of mind, and their repairs were impeccable. I'm glad I found them.",
      image: "/assets/testimonials/new1-5.webp",
    },
    {
      id: 5,
      name: "Kiran D",
      text: "I can't thank Motor & Mechanix enough for their efficient work strategy. They saved me both time and money by fixing my car promptly without compromising on quality. Their commitment to excellence shines through in everything they do.",
      image: "/assets/testimonials/new1-4.webp",
    },
  ];

  const handlePrevious = () => {
    setDirection("prev");
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection("next");
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleImageClick = (index: number) => {
    setDirection(index > activeIndex ? "next" : "prev");
    setActiveIndex(index);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("next");
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div
      className="w-full overflow-hidden bg-[#FAC517] py-5 md:py-10 lg:py-20 bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: "url('/assets/testimonials/testimonials-bg-img.png')",
      }}
    >
      <div className="lg:ml-40">
        {/* Heading */}
        <div className="overflow-hidden">
          <motion.h2
            variants={maskReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-[58px] font-medium text-white underline mb-8 md:mx-0 mx-4"
          >
            Testimonial
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:mt-[-2rem]">
          {/* Left Side - Single Sliding Image (Desktop Only) */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden lg:block lg:col-span-4 relative"
          >
            <div className="h-[500px] overflow-hidden rounded-2xl">
              <div className="!flex items-center">
                <div className="flex gap-4 mt-85 relative z-20 rotate-90">
                  <button
                    onClick={handlePrevious}
                    className="flex items-center justify-center  w-15 h-15 md:w-18 md:h-18 bg-white/50 hover:!bg-white text-black  rounded-full "
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft className="w-5 md:w-10 h-5 md:h-10" strokeWidth={1} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex items-center justify-center w-15 h-15 md:w-18 md:h-18 bg-white/50 hover:!bg-white  text-black  rounded-full "
                    aria-label="Next testimonial"
                  >
                    <ArrowRight className="w-5 md:w-10 h-5 md:h-10" strokeWidth={1} />
                  </button>
                </div>
                <div>
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out cursor-pointer ${index === activeIndex
                        ? "translate-x-0 opacity-100 z-10"
                        : direction === "next"
                          ? index < activeIndex
                            ? "-translate-x-full opacity-0 z-0"
                            : "translate-x-full opacity-0 z-0"
                          : index > activeIndex
                            ? "translate-x-full opacity-0 z-0"
                            : "-translate-x-full opacity-0 z-0"
                        }`}
                      onClick={() => handleImageClick(index)}
                    >
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={400}
                        height={520}
                        className="h-130 w-100 object-cover absolute left-40 top-25"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Sliding Review Content */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="bg-[#1A49BA] rounded-tl-[20%] rounded-tr-[20%] md:!rounded-tr-none md:rounded-bl-[20%] p-8 md:p-12 lg:p-24 relative overflow-hidden min-h-[500px] md:min-h-[650px]">
              {/* Quote Icon */}
              <div className="mb-6 md:mb-8 relative z-10 lg:pl-30">
                <Image
                  src="/assets/testimonials/quote-icon.png"
                  alt="Quote"
                  width={100}
                  height={80}
                  className="w-16 h-12 md:w-20 md:h-16 lg:w-25 lg:h-20 md:mx-0 mx-auto"
                />
              </div>

              {/* Sliding Content Container */}
              <div className="relative h-auto lg:pl-30">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`transition-all duration-700 ease-in-out ${index === activeIndex
                      ? "relative translate-x-0 opacity-100 z-10"
                      : direction === "next"
                        ? index < activeIndex
                          ? "absolute inset-0 -translate-x-full opacity-0 z-0"
                          : "absolute inset-0 translate-x-full opacity-0 z-0"
                        : index > activeIndex
                          ? "absolute inset-0 translate-x-full opacity-0 z-0"
                          : "absolute inset-0 -translate-x-full opacity-0 z-0"
                      }`}
                  >
                    {/* Review Text */}
                    <p className="text-white text-base md:text-lg lg:text-2xl leading-relaxed mb-6 md:mb-8 lg:w-120 md:text-start text-center">
                      "{testimonial.text}"
                    </p>

                    {/* Name */}
                    <p className="text-base md:text-lg lg:text-xl font-bold text-white mb-4 md:mb-8 md:text-start text-center">
                      {testimonial.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile/Tablet Image Section - Below Testimonial */}
            <div className="lg:hidden mt-[-12rem]">
              <div className="relative h-80 md:h-96 overflow-hidden">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={`mobile-${testimonial.id}`}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === activeIndex
                      ? "translate-x-0 opacity-100 z-10"
                      : direction === "next"
                        ? index < activeIndex
                          ? "-translate-x-full opacity-0 z-0"
                          : "translate-x-full opacity-0 z-0"
                        : index > activeIndex
                          ? "translate-x-full opacity-0 z-0"
                          : "-translate-x-full opacity-0 z-0"
                      }`}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="w-full h-full object-contain md:mx-0 mx-auto"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows for Mobile/Tablet - Below Image */}
              <div className="flex gap-4 justify-center mt-6">
                <button
                  onClick={handlePrevious}
                  className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/50 hover:bg-white text-black rounded-full transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/50 hover:bg-white text-black rounded-full transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS for smooth animations */}
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOutToLeft {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        @keyframes slideOutToRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;
