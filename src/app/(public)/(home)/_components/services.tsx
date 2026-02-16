"use client";

import React, { useState, useEffect } from "react";
import { X, Phone, ArrowUpRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const featureServices = [
  {
    id: 0,
    title: "Car Service",
    icon: "/assets/home/feature-services-icon-3-2.png",
    items: [
      "Air filter replacement",
      "Oil filter replacement",
      "Engine Oil(Synthetic Technology-Castrol) Replacement",
      "Wheel Servicing",
      "Brakes Servicing",
      "Car Scanning",
      "Brake Fluids & Coolant Top-up",
      "Deep Car Cleaning",
    ],
    // description: "Discover car care that’s uniquely tailored to your needs at Motor & Mechanix. Our friendly experts are here to ensure your vehicle receives the attention it deserves."
  },
  {
    id: 1,
    title: "Brake System Repair & Safety",
    icon: "/assets/home/bsi.png",
    items: [
      "Detailed evaluation of braking performance and wear",
      "Servicing of pads, rotors, calipers, and related parts",
      "Enhanced stopping efficiency and on-road confidence",
    ],
    description: "A reliable braking system is critical for vehicle safety. At Motor & Mechanix, we ensure precise brake servicing to deliver consistent stopping power, reduced wear, and confident control in all driving conditions."
  },
  {
    id: 2,
    title: "Car AC Service",
    icon: "/assets/home/feature-services-icon-4.png",
    items: [
      "Gas and AC system thorough check-up",
      "Maintain AC cooling effect in all seasons",
      "Fresh, fatigue-less and comfortable drive",
      "Disinfection of AC system",
      "Proper AC Gas replacement",
    ],
    description: "Where we ensure your driving experience remains exceptional. Our comprehensive services include a thorough check-up of your gas and AC system, maintaining consistent cooling year-round, creating a fresh and fatigue-free atmosphere, disinfecting your AC system, and precise AC gas replacement. Trust us for a refreshing and comfortable drive."
  },
  {
    id: 3,
    title: "Insurance Claims",
    icon: "/assets/home/feature-services-icon-3-2.png",
    items: [],
    description: "Get hassle free repairs if your car is insured . Just pay File charge and rest shall be credited in your account for all the repairs and services ."
  },
  {
    id: 4,
    title: "Engine Overhaul & Restoration",
    icon: "/assets/home/eoi.png",
    items: [
      "Comprehensive engine inspection and evaluation",
      "Repair or replacement of worn internal components",
      "Improved engine efficiency and operational reliability",
    ],
    description: "An engine overhaul restores performance and extends engine life. At Motor & Mechanix, our technicians follow precise procedures to ensure optimal functioning, reduced mechanical stress, and consistent performance over time."
  },
  {
    id: 5,
    title: "Denting and Painting Service",
    icon: "/assets/home/feature-services-icon-2.png",
    items: [
      "Computerized color matching",
      "In-Paintbooth services",
      "2 year warranty for paint protenction",
    ],
    description: "Your trusted destination for top-notch car servicing. We understand that your vehicle deserves the best care, and that’s why we offer a range of specialized services to keep your car looking its best. Our state-of-the-art facility is equipped with cutting-edge technology, including computerized color matching, ensuring that your car’s finish is restored to perfection. With our in-paint booth services, we guarantee a pristine paint job every time, and we’re so confident in the quality of our work that we provide a generous 2-year warranty for paint protection. At Motor & Mechanix , we go the extra mile to ensure your car leaves our workshop looking as good as new. Trust us with your vehicle, and experience excellence in denting and painting services."
  },
  {
    id: 6,
    title: "Car Detailing Service",
    icon: "/assets/home/feature-services-icon-6.png",
    items: [
      "Get Paint Protection 3 step Compounding",
      "Improve vehicle body life",
      "Protect from minor scratches",
      "Protect car body Paint and metal surfaces from contamination",
      "Retain vehicle value",
    ],
    description: "We take pride in preserving and enhancing your vehicle’s beauty and longevity. With our 3-step compounding process, we provide expert paint protection, ensuring your vehicle’s body stands the test of time. Our services protect your car from minor scratches and shield its paint and metal surfaces from contamination. Choose us to retain your vehicle’s value and keep it looking its best."
  },
  {
    id: 7,
    title: "Full Body Paint",
    icon: "/assets/home/feature-services-icon-6.png",
    items: [
      "Restoration services at Motor&Mechanix is an art.",
      "We make your car shine and glow along with paint restoration.",
      "Making sure your car stands out in that car crowd.",
    ],
    description: "Where the art of automotive restoration comes to life. We don’t just paint; we create a masterpiece that makes your car shine and glow, ensuring it stands out in any crowd. Trust us to bring your vehicle’s beauty to its fullest potential with our expert paint restoration services."
  },
  {
    id: 8,
    title: "Handling & Suspension Performance",
    icon: "/assets/home/hi.png",
    items: [
      "Detailed suspension system inspection",
      "Shock absorber and strut repair or replacement",
      "Improved ride comfort and vehicle stability",
    ],
    description: "Your car’s suspension directly impacts safety, comfort, and control. At Motor & Mechanix, we ensure every component works in harmony to deliver stable handling, reduced road impact, and a smoother, more confident driving experience."
  },
];

const maskReveal: any = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
  }
};

const blurStaggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const blurStaggerItem: any = {
  hidden: { opacity: 0, filter: "blur(10px)", scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const MotionLink = motion(Link);

const Services = () => {
  const [activeService, setActiveService] = useState<typeof featureServices[0] | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavButtons, setShowNavButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setShowNavButtons(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="sm:py-16 py-10 bg-black px-6">
      <div className="max-w-7xl mx-auto sm:px-4">
        <div className="overflow-hidden mb-5 sm:mb-12">
          <motion.h2
            variants={maskReveal as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[1.5rem] sm:text-[3.5rem] !font-medium text-white text-center underline font-display"
          >
            Our Feature Services
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 sm:gap-20 gap-10 mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden mb-5 md:mb-8">
              <motion.h2
                variants={maskReveal as any}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-[1.5rem] sm:text-[3.2rem] sm:text-start text-center font-medium leading-8 sm:leading-16 text-white underline font-display"
              >
                Best Car Service
                <br className="sm:block hidden" /> (Open 10AM - 7PM)
              </motion.h2>
            </div>
            <p className="text-white text-[15px] md:text-[16px] !font-extralight sm:text-start text-center !leading-6 ">
              Discover car care that’s uniquely tailored to your needs at
              Motor & <br className="sm:block hidden" /> Mechanix. Our friendly experts are here to ensure your
              vehicle <br className="sm:block hidden" /> receives the attention it deserves.
            </p>
            <div className="sm:block flex justify-center">
              <MotionLink
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group btn yellow w-fit !flex items-center gap-4
                             border border-transparent
                             transition-all duration-300
                             hover:!bg-black hover:!border-[#1A49BA]"
              >
                <span className="transition-colors duration-300 group-hover:!text-[#1A49BA]">
                  View All
                </span>

                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowUpRight
                    strokeWidth={1.5}
                    className="w-5 h-5 flex-shrink-0
                                 transition-all duration-300
                                 group-hover:!text-[#1A49BA]"
                  />
                </motion.div>
              </MotionLink>
            </div>
          </motion.div>

          <motion.div
            variants={blurStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ul className="feature-services-list">
              {featureServices.map((service) => (
                <motion.li
                  key={service.id}
                  variants={blurStaggerItem}
                  whileHover={{
                    paddingLeft: "0.5rem",
                    transition: { duration: 0.2 }
                  }}
                  className="feature_target cursor-pointer flex items-center justify-between border-t h-[6rem] md:h-[7.8rem] border-[#B39123]"
                  onClick={() => setActiveService(service)}
                >
                  <div className="flex items-center sm:gap-6 gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={64}
                        height={64}
                        className="sm:h-16 h-12 object-contain w-auto"
                      />
                    </motion.div>
                    <p className="md:text-[2.1rem] text-[1.2rem] hover:text-yellow-500 text-white md:leading-9 leading-6 transition-colors duration-300 font-display">{service.title}</p>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight strokeWidth={1}
                      className="md:w-10 w-8 md:h-10 h-8 text-[#1A49BA]" />
                  </motion.div>
                </motion.li>
              ))}
            </ul>

            <AnimatePresence>
              {activeService && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                  onClick={() => setActiveService(null)}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="bg-[#FFCE32] text-black max-w-3xl w-full rounded-none p-6 md:p-10 relative max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setActiveService(null)}
                      className="absolute top-4 right-4 text-[#121212] text-opacity-50 hover:text-opacity-100 transition-opacity"
                      aria-label="Close"
                    >
                      <X className="w-12 h-12" />
                    </button>

                    <h2 className="text-3xl md:text-4xl font-medium text-[#121212] underline underline-offset-4 mb-5 font-display">
                      {activeService.title}
                    </h2>

                    <ul className="list-disc pl-5 space-y-1 text-[15px] md:text-[16px] font-medium">
                      {activeService.items?.map((item: string, i: number) => (
                        <motion.li
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          key={i}

                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>

                    {activeService.description && (
                      <p className="text-black/80 mt-2 text-[12px]">
                        {activeService.description}
                      </p>
                    )}

                    <div className="mt-5 py-3 border border-[#6f6f6f] rounded-2xl px-5 text-center">
                      {/* <motion.a
                        href="tel:08383838300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-[#1A49BA] px-6 py-2.5 rounded-full text-white font-semibold"
                      >
                        Call Now
                      </motion.a> */}
                      <div className="flex justify-center">
                        <motion.a
                          href="tel:08383838300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="group yellow text-base text-white text-left py-[0.5rem] px-[1.4rem] inline-block bg-[#1A49BA] rounded-full border border-[#1A49BA] transition-all duration-300 ease-in-out relative w-fit !flex items-center gap-6
                                                              border border-transparent
                                                              transition-all duration-300
                                                               hover:!bg-[#ffce32] hover:!border-[#1A49BA]"
                        >
                          <span className="transition-colors duration-300 group-hover:!text-[#1A49BA]">
                            Call Now
                          </span>

                          <ArrowUpRight
                            strokeWidth={1.5}
                            className="w-5 h-5 flex-shrink-0
                                                                transition-all duration-300
                                                                group-hover:!text-[#1A49BA]
                                                                group-hover:-translate-y-3
                                                                group-hover:opacity-0"
                          />
                        </motion.a>
                      </div>

                      <p className="text-[14px] md:text-[20px] mt-5 text-black/80 leading-relaxed">
                        Plot no A110, Khasra 120, Near Kajaria Tiles Showroom, Next
                        to 14th Avenue Gaur City-2, Noida Extension.
                      </p>

                      <div className="mt-4 inline-flex items-center gap-2 text-[16px] font-semibold">
                        <Phone className="w-4 h-4 text-black" />
                        <span className="text-black">
                          083838 38300
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
