import React from 'react';
import NextImage from "next/image";

export default function WhyChooseSection() {
  const features = [
    {
      icon: "/wp-content/uploads/2026/01/im1.png",
      text: "Exclusive Bridgestone tyre specialization"
    },
    {
      icon: "/wp-content/uploads/2026/01/im2.png",
      text: "Precision wheel alignment balancing systems"
    },
    {
      icon: "/wp-content/uploads/2026/01/im3.png",
      text: "Certified service technicians following standards"
    },
    {
      icon: "/wp-content/uploads/2026/01/im4.png",
      text: "Transparent professional guidance and handling"
    },
    {
      icon: "/wp-content/uploads/2026/01/im5.png",
      text: "Comprehensive tyre and wheel care services",
      bold: true
    }
  ];

  return (
    <section className="py-16 px-4" style={{
      background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)"
    }}>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl md:text-[42px] font-bold underline md:mb-6 mb-2 text-[#FFD700] text-center">
          Why Choose Motor & Mechanix
        </h1>
        <hr className="md:w-24 w-12 mx-auto border-0 border-t-[4px] border-[#FFD700]" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-center justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`why-choose-item flex flex-col items-center justify-center text-center mx-auto space-y-4 rounded-xl
               bg-[#ffffff0d] border-2 border-[#FFD70033] p-[36px]  ${index === features.length - 1 ? "md:col-span-2 md:max-w-sm" : ""}`}
              style={{
                transition: "all 0.3s ease"
              }}
            >
              <NextImage
                src={feature.icon}
                alt="icon"
                width={100}
                height={100}
                className="w-26 h-26 object-contain"
              />
              <p className={`text-white text-[18px] font-semibold ${feature.bold ? 'font-bold' : ''}`}>
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}