import React from "react";
import NextImage from "next/image";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Bridgestone Tyres",
      image:
        "/wp-content/uploads/2026/01/tyer_br.jpeg",
      description:
        "We offer Bridgestone tyres for cars and SUVs, selected for comfort, durability, and dependable grip.",
      additionalInfo:
        "Each tyre is recommended based on vehicle specifications and driving requirements to support consistent performance and long-term reliability.",
    },
    {
      id: 2,
      title: "Wheel Balancing",
      image:
        "/wp-content/uploads/2026/01/tyer_b2.jpg",
      description:
        "Wheel balancing is performed using precision equipment to distribute weight evenly across all wheels.",
      additionalInfo:
        "This reduces vibrations, improves ride comfort, enhances steering response, and helps prevent uneven tyre wear over time.",
    },
    {
      id: 3,
      title: "Wheel Alignment",
      image:
        "/wp-content/uploads/2026/01/tyer_wa2.jpg",
      description:
        "Wheel alignment is carried out using advanced alignment systems to maintain correct wheel geometry.",
      additionalInfo:
        "Proper alignment improves vehicle stability, supports accurate steering control, and reduces unnecessary tyre wear while aiding better fuel efficiency.",
    },
    {
      id: 4,
      title: "Drive with Confidence",
      image:
        "/wp-content/uploads/2026/01/tyer_c2.jpg",
      description:
        "From tyre replacement to wheel balancing and alignment, Motor & Mechanix provides dependable tyre care services using precise equipment and skilled technicians.",
      additionalInfo:
        "Our approach ensures safe handling, consistent performance, and comfortable driving while supporting long-term vehicle reliability and overall road confidence.",
    },
  ];

  return (
    <section className="py-5 px-4 md:py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl md:text-[42px] font-bold underline md:mb-6 mb-2 text-center">
          Our Premium Services
        </h1>
        <hr className="md:w-24 w-12 mx-auto border-0 border-t-[4px] border-[#FFD700]" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 md:mt-12 mt-5">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#1a1a1a] p-5 rounded-2xl shadow-lg
                         hover:shadow-[0_20px_40px_rgba(255,215,0,0.2)]
                         hover:-translate-y-2
                         transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative w-full h-48 md:h-80 overflow-hidden rounded-lg">
                <NextImage
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-lg transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="py-8 px-4 text-center">
                <h3 className="text-xl md:text-[30px] mt-3 font-semibold mb-4 text-[#FFD700]">
                  {service.title}
                </h3>
                <p className="text-[#cccccc] mb-3 text-sm md:text-base">
                  {service.description}
                </p>
                <p className="text-[#cccccc] text-sm md:text-base">
                  {service.additionalInfo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
