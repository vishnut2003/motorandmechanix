"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceItem {
  id: string;
  title: string;
  image: string;
  includes: string[];
  description?: string;
  price?: string; // "Starting @ ..." or just "Rs ... /-"
  categories: string[]; // 'all', 'external-service', 'internal-service', 'periodic-maintenance', 'spare-parts'
}

const servicesData: ServiceItem[] = [
  {
    id: "brake-system",
    title: "Brake System Repair & Safety",
    image: "/wp-content/uploads/2026/01/bsi.png",
    includes: [
      "Detailed evaluation of braking performance and wear",
      "Servicing of pads, rotors, calipers, and related parts",
      "Enhanced stopping efficiency and on-road confidence"
    ],
    description: "A reliable braking system is critical for vehicle safety. At Motor & Mechanix, we ensure precise brake servicing to deliver consistent stopping power, reduced wear, and confident control in all driving conditions.",
    categories: ["all"]
  },
  {
    id: "engine-overhaul",
    title: "Engine Overhaul & Restoration",
    image: "/wp-content/uploads/2026/01/eoi.png",
    includes: [
      "Comprehensive engine inspection and evaluation",
      "Repair or replacement of worn internal components",
      "Improved engine efficiency and operational reliability"
    ],
    description: "An engine overhaul restores performance and extends engine life. At Motor & Mechanix, our technicians follow precise procedures to ensure optimal functioning, reduced mechanical stress, and consistent performance over time.",
    categories: ["all"]
  },
  {
    id: "handling-suspension",
    title: "Handling & Suspension Performance",
    image: "/wp-content/uploads/2026/01/hi.png",
    includes: [
      "Detailed suspension system inspection",
      "Shock absorber and strut repair or replacement",
      "Improved ride comfort and vehicle stability"
    ],
    description: "Your car’s suspension directly impacts safety, comfort, and control. At Motor & Mechanix, we ensure every component works in harmony to deliver stable handling, reduced road impact, and a smoother, more confident driving experience.",
    categories: ["all"]
  },
  {
    id: "car-service",
    title: "Car Service",
    image: "/wp-content/uploads/2023/09/feature-services-icon-3-2.png",
    includes: [
      "Air filter replacement",
      "Oil filter replacement",
      "Engine Oil(Synthetic Technology-Castrol) Replacement",
      "Wheel Servicing",
      "Brakes Servicing",
      "Car Scanning",
      "Brake Fluids & Coolant Top-up",
      "Deep Car Cleaning"
    ],
    categories: ["all", "external-service"]
  },
  {
    id: "denting-painting",
    title: "Denting and Painting Service",
    image: "/wp-content/uploads/2023/09/feature-services-icon-2.png",
    includes: [
      "Computerized color matching",
      "In-Paintbooth services",
      "2 year warranty for paint protenction"
    ],
    description: "Your trusted destination for top-notch car servicing. We understand that your vehicle deserves the best care, and that’s why we offer a range of specialized services to keep your car looking its best. Our state-of-the-art facility is equipped with cutting-edge technology, including computerized color matching, ensuring that your car’s finish is restored to perfection. With our in-paint booth services, we guarantee a pristine paint job every time, and we’re so confident in the quality of our work that we provide a generous 2-year warranty for paint protection. At Motor & Mechanix , we go the extra mile to ensure your car leaves our workshop looking as good as new. Trust us with your vehicle, and experience excellence in denting and painting services.",
    price: "2500/-",
    categories: ["all", "external-service"]
  },
  {
    id: "car-detailing",
    title: "Car Detailing Service",
    image: "/wp-content/uploads/2023/09/feature-services-icon-6.png",
    includes: [
      "Get Paint Protection 3 step Compounding",
      "Improve vehicle body life",
      "Protect from minor scratches",
      "Protect car body Paint and metal surfaces from contamination",
      "Retain vehicle value"
    ],
    description: "We take pride in preserving and enhancing your vehicle’s beauty and longevity. With our 3-step compounding process, we provide expert paint protection, ensuring your vehicle’s body stands the test of time. Our services protect your car from minor scratches and shield its paint and metal surfaces from contamination. Choose us to retain your vehicle’s value and keep it looking its best.",
    price: "5000/-",
    categories: ["all", "external-service"]
  },
  {
    id: "car-ac",
    title: "Car AC Service",
    image: "/wp-content/uploads/2023/09/feature-services-icon-4.png",
    includes: [
      "Gas and AC system thorough check-up",
      "Maintain AC cooling effect in all seasons",
      "Fresh, fatigue-less and comfortable drive",
      "Disinfection of AC system",
      "Proper AC Gas replacement"
    ],
    description: "Where we ensure your driving experience remains exceptional. Our comprehensive services include a thorough check-up of your gas and AC system, maintaining consistent cooling year-round, creating a fresh and fatigue-free atmosphere, disinfecting your AC system, and precise AC gas replacement. Trust us for a refreshing and comfortable drive.",
    price: "2000/-",
    categories: ["all", "internal-service"]
  },
  {
    id: "full-body-paint",
    title: "Full Body Paint",
    image: "/wp-content/uploads/2023/09/feature-services-icon-6.png",
    includes: [
      "Restoration services at Motor&Mechanix is an art.",
      "We make your car shine and glow along with paint restoration.",
      "Making sure your car stands out in that car crowd."
    ],
    description: "Where the art of automotive restoration comes to life. We don’t just paint; we create a masterpiece that makes your car shine and glow, ensuring it stands out in any crowd. Trust us to bring your vehicle’s beauty to its fullest potential with our expert paint restoration services.",
    price: "25000/-",
    categories: ["all", "external-service"]
  },
  {
    id: "insurance-claims",
    title: "Insurance Claims",
    image: "/wp-content/uploads/2023/09/feature-services-icon-3-2.png",
    includes: [],
    description: "Get hassle free repairs if your car is insured . Just pay File charge and rest shall be credited in your account for all the repairs and services .",
    price: "1000/-",
    categories: ["all", "external-service", "internal-service", "spare-parts"]
  },
  {
    id: "periodic-maintenance",
    title: "Periodic Maintenance Service",
    image: "/wp-content/uploads/2023/09/feature-services-icon-1-2.png",
    includes: [
      "Air filter replacement",
      "Oil filter replacement",
      "Engine Oil(Synthetic Technology-Castrol) Replacement",
      "Wheel Servicing",
      "Brakes Servicing",
      "Car Scanning",
      "Brake Fluids & Coolant Top-up",
      "Deep Car Cleaning",
      "Starting @ 3000/-*"
    ],
    description: "Your trusted destination for top-notch car servicing and care. We understand that your vehicle deserves the utmost attention to keep it running smoothly. At Motor & Mechanix , we provide your vehicle with the care it deserves. Our skilled technicians, premium products, and state-of-the-art equipment ensure that your car receives the best periodic maintenance services available. Trust us with your vehicle, and experience the difference in every drive.",
    price: "3000/-",
    categories: ["all", "periodic-maintenance"]
  }
];

const tabs = [
  { id: "all", label: "All" },
  { id: "external-service", label: "External Service" },
  { id: "internal-service", label: "Internal Service" },
  { id: "periodic-maintenance", label: "Periodic Maintenance" },
  { id: "spare-parts", label: "Spare Parts" },
];

export default function ServiceGrid() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredServices = servicesData.filter(service =>
    service.categories.includes(activeTab)
  );

  return (
    <section className="md:py-16 py-10 bg-[#121212] min-h-screen">
      <div className="w-full lg:w-[90%] max-w-[1750px] mx-auto px-4 md:px-0">

        {/* Scrollable Tabs */}
        <div className="pb-10 md:pb-20">
          <div className="overflow-x-auto md:overflow-visible hide-scrollbar touch-pan-x overscroll-x-contain">
            <div className="flex w-max md:w-full md:justify-center gap-2 md:gap-8 p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-[1.6rem] py-[1px] rounded-[30px] text-[16px] md:text-[25px] font-normal transition-all whitespace-nowrap border border-transparent",
                    activeTab === tab.id
                      ? "bg-[#FFCE32] text-black"
                      : "bg-[#181818] text-white "
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-y-[20px] relative" // Increased gap
        >
          <AnimatePresence mode="popLayout">
            {/* Scroll Indicator (Only on first card) */}
            <div className="absolute right-[2px] top-0 bottom-0 hidden xl:flex flex-col items-center w-8 z-20 pointer-events-none">
              <div className="relative h-full flex justify-center w-full">
                {/* Vertical Line */}
                <div className="absolute top-0 bottom-0 w-[1px] bg-white/90"></div>
                {/* Sticky Text */}
                <div className="sticky top-[16vh] h-fit py-1 bg-[#121212]">
                  <div className="transform rotate-90 whitespace-nowrap text-white text-[18px] font-medium">
                    Scroll
                  </div>
                </div>
              </div>
            </div>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row w-full min-h-[220px] shadow-sm hover:shadow-xl transition-shadow duration-300 group relative"
              >

                {/* Detail Box (Yellow) */}
                <div className="bg-[#FFCE32] w-full md:w-[60%] lg:w-[72%] md:p-6 p-4 md:pl-[40px] md:py-[60px] flex flex-col md:flex-row gap-4 items-start relative overflow-hidden service-detail-box rounded-none">
                  {/* Tire Track Divider simulation */}
                  <div className="absolute right-0 top-0 bottom-0 w-[50px] bg-repeat-y md:block hidden  pointer-events-none z-0"
                    style={{
                      backgroundImage: "url('/wp-content/themes/m%26m/img/traced.webp')",
                      backgroundSize: "contain"
                    }}
                  />

                  <div className="md:w-[11%] flex-shrink-0 flex justify-center"> {/* Reduced width slightly */}
                    <div className="relative  flex  justify-center">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="md:w-[78%] flex flex-col z-10 space-y-4"> {/* Increased width */}
                    <h4 className="text-[26px] md:text-[34px] font-semibold leading-tight opacity-80">{service.title}</h4>

                    {service.includes.length > 0 && (
                      <div className="space-y-1">
                        <h5 className="font-semibold text-[20px] md:text-[24px] text-black tracking-wider">Includes</h5>
                        <ul className="md:mb-3">
                          {service.includes.slice(0, 5).map((item, i) => (
                            <li key={i} className="md:text-[18px] text-[16px] text-black font-medium flex items-start leading-snug">
                              <span className="mr-3 mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.description && (
                      <p className="md:text-[16px] text-[14px] leading-[1.6] font-medium "> {/* Optimized font size and width */}
                        {service.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Book Box (Dark) */}
                <div className="bg-[#181818] w-full md:w-[25%] lg:w-[18%] !p-6 flex flex-col justify-center items-center text-center text-white space-y-4 relative z-10 border-l border-none md:border-black/10">
                  {service.price && (
                    <div className="mb-2">
                      <h6 className="text-[#999] text-[10px] uppercase tracking-widest mb-1">Starting @</h6>
                      <h4 className="text-2xl font-bold text-[#FFCE32]">Rs {service.price}</h4>
                    </div>
                  )}

                  <a
                    href="tel:+918383838300"
                    className="bg-[#1A49BA] text-white px-12 py-3 rounded-full font-medium uppercase text-[15px] hover:bg-white hover:text-[#1A49BA] transition-all whitespace-nowrap shadow-lg flex items-center justify-center gap-2"
                  >
                    Call Now
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
