"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface Service {
  id: string;
  title: string;
  icon: string;
  modalImage: string;
  modalTitle: string;
  modalDescription: string;
  modalPoints: string[];
}

const services: Service[] = [
  {
    id: "feature_popup_0",
    title: "Car Service",
    icon: "/wp-content/uploads/2023/09/feature-services-icon-3-2.png",
    modalImage: "/wp-content/uploads/2023/09/popup-img.webp",
    modalTitle: "Car Service",
    modalDescription: "",
    modalPoints: [
      "Air filter replacement",
      "Oil filter replacement",
      "Engine Oil(Synthetic Technology-Castrol) Replacement",
      "Wheel Servicing",
      "Brakes Servicing",
      "Car Scanning",
      "Brake Fluids & Coolant Top-up",
      "Deep Car Cleaning"
    ]
  },
  {
    id: "feature_popup_1",
    title: "Brake System Repair & Safety",
    icon: "/wp-content/uploads/2026/01/bsi.png",
    modalImage: "/wp-content/uploads/2023/09/popup-img.webp", // Placeholder as per HTML
    modalTitle: "Brake System Repair & Safety",
    modalDescription: "A reliable braking system is critical for vehicle safety. At Motor & Mechanix, we ensure precise brake servicing to deliver consistent stopping power, reduced wear, and confident control in all driving conditions.",
    modalPoints: [
      "Detailed evaluation of braking performance and wear",
      "Servicing of pads, rotors, calipers, and related parts",
      "Enhanced stopping efficiency and on-road confidence"
    ]
  },
  {
    id: "feature_popup_2",
    title: "Car AC Service",
    icon: "/wp-content/uploads/2023/09/feature-services-icon-4.png",
    modalImage: "/wp-content/uploads/2023/09/popup-img.webp",
    modalTitle: "Car AC Service",
    modalDescription: "Where we ensure your driving experience remains exceptional. Our comprehensive services include a thorough check-up of your gas and AC system, maintaining consistent cooling year-round, creating a fresh and fatigue-free atmosphere, disinfecting your AC system, and precise AC gas replacement. Trust us for a refreshing and comfortable drive.",
    modalPoints: [
      "Gas and AC system thorough check-up",
      "Maintain AC cooling effect in all seasons",
      "Fresh, fatigue-less and comfortable drive",
      "Disinfection of AC system",
      "Proper AC Gas replacement"
    ]
  },
  {
    id: "feature_popup_3",
    title: "Insurance Claims",
    icon: "/wp-content/uploads/2023/09/feature-services-icon-3-2.png",
    modalImage: "/wp-content/uploads/2023/09/popup-img.webp",
    modalTitle: "Insurance Claims",
    modalDescription: "Get hassle free repairs if your car is insured . Just pay File charge and rest shall be credited in your account for all the repairs and services .",
    modalPoints: []
  },
  {
    id: "feature_popup_4",
    title: "Engine Overhaul & Restoration",
    icon: "/wp-content/uploads/2026/01/eoi.png",
    modalImage: "/wp-content/uploads/2023/09/popup-img.webp", // Placeholder
    modalTitle: "Engine Overhaul & Restoration",
    modalDescription: "An engine overhaul restores performance and extends engine life. At Motor & Mechanix, our technicians follow precise procedures to ensure optimal functioning, reduced mechanical stress, and consistent performance over time.",
    modalPoints: [
      "Comprehensive engine inspection and evaluation",
      "Repair or replacement of worn internal components",
      "Improved engine efficiency and operational reliability"
    ]
  },
  {
    id: "feature_popup_5",
    title: "Denting and Painting Service",
    icon: "/wp-content/uploads/2023/09/feature-services-icon-2.png",
    modalImage: "/wp-content/uploads/2023/09/popup-img.webp",
    modalTitle: "Denting and Painting Service",
    modalDescription: "Your trusted destination for top-notch car servicing. We understand that your vehicle deserves the best care, and that’s why we offer a range of specialized services to keep your car looking its best. Our state-of-the-art facility is equipped with cutting-edge technology, including computerized color matching, ensuring that your car’s finish is restored to perfection.",
    modalPoints: [
      "Computerized color matching",
      "In-Paintbooth services",
      "2 year warranty for paint protenction"
    ]
  },
  {
    id: "feature_popup_6",
    title: "Car Detailing Service",
    icon: "/wp-content/uploads/2023/09/feature-services-icon-6.png",
    modalImage: "/wp-content/uploads/2023/09/popup-img.webp",
    modalTitle: "Car Detailing Service",
    modalDescription: "We take pride in preserving and enhancing your vehicle’s beauty and longevity. With our 3-step compounding process, we provide expert paint protection, ensuring your vehicle’s body stands the test of time.",
    modalPoints: [
      "Get Paint Protection 3 step Compounding",
      "Improve vehicle body life",
      "Protect from minor scratches",
      "Protect car body Paint and metal surfaces from contamination",
      "Retain vehicle value"
    ]
  },
  {
    id: "feature_popup_7",
    title: "Full Body Paint",
    icon: "/wp-content/uploads/2023/09/feature-services-icon-6.png",
    modalImage: "/wp-content/uploads/2023/09/popup-img.webp",
    modalTitle: "Full Body Paint",
    modalDescription: "Where the art of automotive restoration comes to life. We don’t just paint; we create a masterpiece that makes your car shine and glow, ensuring it stands out in any crowd.",
    modalPoints: [
      "Restoration services at Motor&Mechanix is an art.",
      "We make your car shine and glow along with paint restoration.",
      "Making sure your car stands out in that car crowd."
    ]
  },
  {
    id: "feature_popup_8",
    title: "Handling & Suspension Performance",
    icon: "/wp-content/uploads/2026/01/hi.png",
    modalImage: "/wp-content/uploads/2023/09/popup-img.webp", // Placeholder
    modalTitle: "Handling & Suspension Performance",
    modalDescription: "Your car’s suspension directly impacts safety, comfort, and control. At Motor & Mechanix, we ensure every component works in harmony to deliver stable handling, reduced road impact, and a smoother, more confident driving experience.",
    modalPoints: [
      "Detailed suspension system inspection",
      "Shock absorber and strut repair or replacement",
      "Improved ride comfort and vehicle stability"
    ]
  }
];

export default function FeatureServices() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    if (selectedService) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedService]);


  return (
    <section className="py-24 bg-white">
      <div className="container overflow-hidden">
        <h2 className="text-center text-5xl md:text-7xl font-bold uppercase mb-16 md:mb-24 scale-x-125 origin-center tracking-tighter">
          Our Feature Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">

          {/* Left Column: Heading & Intro */}
          <div className="md:col-span-5 flex flex-col items-start text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Best Car Service (Open 10AM - 7PM)
            </h2>
            <div className="text-lg text-gray-700 mb-8 space-y-4">
              <p>Discover car care that’s uniquely tailored to your needs at Motor & Mechanix. Our friendly experts are here to ensure your vehicle receives the attention it deserves.</p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-[#FFCE32] text-black text-lg font-bold px-10 py-4 rounded-full hover:bg-black hover:text-[#FFCE32] transition-colors uppercase gap-2 self-center md:self-start group"
            >
              View All Services
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Right Column: Service Grid */}
          <div className="md:col-span-7">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
              {services.map((service, idx) => (
                <motion.li
                  key={service.id}
                  className="flex flex-col items-center text-center cursor-pointer group"
                  onClick={() => setSelectedService(service)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="w-24 h-24 mb-6 relative transition-transform duration-300 group-hover:-translate-y-2">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold leading-tight group-hover:text-[#FFCE32] transition-colors">
                    {service.title}
                  </h3>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex justify-center items-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              className="relative w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl z-[101] max-h-[90vh] flex flex-col md:flex-row"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-8 h-8 text-black" />
              </button>

              <div className="hidden md:block md:w-[40%] bg-gray-100 relative min-h-[400px]">
                <Image
                  src={selectedService.modalImage}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="w-full md:w-[60%] p-8 md:p-12 overflow-y-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">{selectedService.modalTitle}</h2>

                {selectedService.modalPoints.length > 0 && (
                  <ul className="mb-6 space-y-2">
                    {selectedService.modalPoints.map((point, i) => (
                      <li key={i} className="flex items-start text-lg font-medium">
                        <span className="mr-3 mt-2 w-2 h-2 bg-black rounded-full flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {selectedService.modalDescription}
                </p>

                <div className="bg-[#181818] text-white p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                  <a
                    href="tel:08383838300"
                    className="bg-[#1A49BA] text-white px-8 py-3 rounded-full font-bold uppercase hover:bg-white hover:text-[#1A49BA] transition-colors border border-[#1A49BA]"
                  >
                    Call Now
                  </a>
                  <div className="text-center md:text-right">
                    <p className="text-sm text-gray-400 mb-2 max-w-[300px] ml-auto">
                      Plot no A110, Khasra 120, Near Kajaria Tiles Showroom, Next to 14th Avenue Gaur City-2, Noida Extension.
                    </p>
                    <a href="tel:08383838300" className="flex items-center justify-center md:justify-end gap-2 text-xl font-semibold hover:text-[#FFCE32] transition-colors">
                      <Image
                        src="/wp-content/themes/m%26m/img/mobile-icon-2.png"
                        alt="Phone"
                        width={24}
                        height={24}
                      />
                      083838 38300
                    </a>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
