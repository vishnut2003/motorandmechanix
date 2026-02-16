"use client";

import React, { useState, useEffect } from "react";
import { X, Phone } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const featureServices = [
  {
    id: 0,
    title: "Hassle-Free Pickup & Drop",
    icon: "/wp-content/uploads/2023/09/feature-services-icon-8.png",
    items: [
      "Air filter replacement",
      "Oil filter replacement",
      "Engine Oil (Castrol) Replacement",
      "Wheel Servicing",
      "Brakes Servicing",
      "Car Scanning",
      "Brake Fluids & Coolant Top-up",
      "Deep Car Cleaning",
    ],
  },
  {
    id: 1,
    title: "Exclusively Genuine Parts",
    icon: "/wp-content/uploads/2023/09/feature-services-icon-3-2.png",
    items: [
      "Detailed braking performance check",
      "Pads, rotors & calipers servicing",
      "Enhanced stopping efficiency",
    ],
    description:
      "A reliable braking system is critical for vehicle safety. We ensure precise brake servicing for confident control.",
  },
  {
    id: 2,
    title: "CCTV Surveillance",
    icon: "/wp-content/uploads/2023/09/feature-services-icon-7.png",
    items: [
      "AC system check-up",
      "Cooling performance maintenance",
      "AC gas replacement",
      "AC disinfection",
    ],
  },
  {
    id: 3,
    title: "Faster Work Strategy",
    icon: "/wp-content/uploads/2023/09/feature-services-icon-1.png",
    items: [
      "AC system check-up",
      "Cooling performance maintenance",
      "AC gas replacement",
      "AC disinfection",
    ],
  },
 
];

const SeamlessVehicle = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<any>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showNavButtons, setShowNavButtons] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeService, setActiveService] = useState<(typeof featureServices)[0] | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setShowNavButtons(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="sm:py-16 py-10 bg-[#181818] px-6">
      <div className="max-w-7xl mx-auto sm:px-4">
        <div className="grid md:grid-cols-2 sm:gap-20 gap-10 mx-auto">
          {/* {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-900 rounded-2xl p-5 cursor-pointer"
                onClick={() => setActiveModal(service)}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[280px] object-cover rounded-lg"
                />
                <h3 className="text-yellow-500 text-2xl font-bold mt-4">
                  {service.title}
                </h3>
              </div>
            ))} */}
          <div>
            <h2 className="text-[1.5rem] sm:text-[3.2rem] sm:text-start text-center font-medium leading-8 sm:leading-16 text-white underline md:mb-8 mb-5">
              Seamless Vehicle&nbsp;
              <span className="bg-[#fece12] text-black">
                {" "}
                Pickup
                <br className="sm:block hidden" /> and <span className="whitespace-nowrap">Drop-off</span>
              </span>
            </h2>
            <p className="text-white text-[15px] md:text-[16px] !font-extralight sm:text-start text-center !leading-6 ">
              {`Experience ultimate convenience with our hassle-free pickup and drop-off service. We<br className="sm:block hidden" />
              understand your busy schedule, and that's why we've made it easy for you to get your<br className="sm:block hidden" />
              vehicle serviced without disruption. Simply let us know when and where, and we'll take<br className="sm:block hidden" />
              care of the rest, ensuring your automotive needs are met on your terms.`} 
            </p>
            
          </div>
          <div>
            <ul className="feature-services-list">
              {featureServices.map((service) => (
                <li
                  key={service.id}
                  className="feature_target cursor-pointer flex items-center justify-between  border-t h-[6rem]  md:h-[7.8rem] border-[#B39123]"
                  onClick={() => setActiveService(service)}
                >
                  <div className="flex items-center sm:gap-6 gap-3">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={64}
                      height={64}
                      className="sm:h-16 h-12 object-contain w-auto"
                    />
                    <p className="md:text-[2.1rem] text-[1.2rem] hover:text-[#1a49ba] text-white md:leading-9 leading-6">
                      {service.title}
                    </p>
                  </div>
                 
                </li>
              ))}
            </ul>

            {/* MODAL */}
            {activeService && (
              <div
                className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
                onClick={() => setActiveService(null)}
              >
                <div
                  className="bg-white max-w-2xl w-full rounded-xl p-6 relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close */}
                  <button onClick={() => setActiveService(null)} className="absolute top-4 right-4">
                    <X />
                  </button>

                  <h2 className="text-2xl font-bold mb-4">{activeService.title}</h2>

                  <ul className="space-y-2 mb-4">
                    {activeService.items?.map((item: string, i: number) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-yellow-500">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {activeService.description && (
                    <p className="text-gray-600 mb-4">{activeService.description}</p>
                  )}

                  <div className="bg-gray-100 p-4 rounded-lg">
                    <a
                      href="tel:08383838300"
                      className="inline-flex items-center gap-2 bg-yellow-500 px-5 py-2 rounded text-white"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>

                    <p className="text-sm mt-3 text-gray-600">
                      Plot no A110, Khasra 120, Near Kajaria Tiles Showroom, Gaur City-2, Noida
                      Extension.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeamlessVehicle;
