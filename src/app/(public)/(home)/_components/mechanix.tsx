"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const Mechanix = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="py-12 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[18x] sm:text-[20px] font-semibold text-[#FFCE32] mb-3 sm:mb-6 md:text-start text-center">
            Brand We Trust
          </p>
          <h2 className="text-3xl sm:text-[56px] font-medium underline sm:mb-12 mb-5 md:text-start text-center">
            At&nbsp;
            <span className="bg-[#FECE12] text-black"> Motor & Mechanix </span>
            &nbsp;we <br /> believe in installing genuine <br /> spare parts.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="group cursor-pointer p-4 rounded-lg duration-300"
          >
            <div className="img-box overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/assets/home/brand-icon-1.webp"
                  alt="Motor & Mechanix"
                  width={144}
                  height={48}
                  className="w-36 h-12 transition-all duration-300"
                />
              </motion.div>
            </div>
            <p className="font-semibold text-[20px] sm:mb-2 group-hover:text-[#FECE12] transition-colors duration-300">
              Hyundai Mobis
            </p>
            <p className="sm:text-[17px] text-[15px] text-[#121212] font-light leading-[1.6rem]">
              Hyundai Mobis provides authentic spare parts known for their
              precision engineering, ensuring your Hyundai runs at peak
              performance.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="group cursor-pointer p-4 rounded-lg"
          >
            <div className="img-box overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/assets/home/3.png"
                  alt="Motor & Mechanix"
                  width={128}
                  height={56}
                  className="w-32 h-14 transition-all duration-300"
                />
              </motion.div>
            </div>
            <p className="font-semibold text-[20px] sm:mb-2 group-hover:text-[#FECE12] transition-colors duration-300">
              Maruti Suzuki Genuine Parts
            </p>
            <p className="sm:text-[17px] text-[15px] text-[#121212] font-light leading-[1.6rem]">
              Maruti Suzuki genuine parts offer unmatched reliability, perfectly
              complementing your Maruti vehicle's longevity.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="group cursor-pointer p-4 rounded-lg"
          >
            <div className="img-box overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/assets/home/2.png"
                  alt="Motor & Mechanix"
                  width={144}
                  height={32}
                  className="w-36 h-8 transition-all duration-300"
                />
              </motion.div>
            </div>
            <p className="font-semibold text-[20px] sm:mb-2 group-hover:text-[#FECE12] transition-colors duration-300">
              Bosch
            </p>
            <p className="sm:text-[17px] text-[15px] text-[#121212] font-light leading-[1.6rem]">
              Bosch parts represent cutting-edge technology and quality,
              enhancing your vehicle's efficiency and safety.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="group cursor-pointer p-4 rounded-lg"
          >
            <div className="img-box overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/assets/home/Group.png"
                  alt="Motor & Mechanix"
                  width={104}
                  height={64}
                  className="w-26 h-16 transition-all duration-300"
                />
              </motion.div>
            </div>
            <p className="font-semibold text-[20px] sm:mb-2 group-hover:text-[#FECE12] transition-colors duration-300">
              Honda
            </p>
            <p className="sm:text-[17px] text-[15px] text-[#121212] font-light leading-[1.6rem]">
              Honda genuine parts exemplify the brand's commitment to
              excellence, guaranteeing the reliability and performance of your
              Honda vehicle.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mechanix;
