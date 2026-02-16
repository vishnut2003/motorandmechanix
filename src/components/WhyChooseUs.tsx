"use client";

import { cn } from "@/lib/utils";

const reasons = [
  {
    title: "Expert Mechanics",
    description: "Our team consists of certified and experienced mechanics who know cars inside out.",
    colSpan: "md:col-span-2",
  },
  {
    title: "Genuine Parts",
    description: "We use only 100% genuine spare parts to ensure the longevity and performance of your vehicle.",
    colSpan: "md:col-span-2",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden charges. We provide upfront estimates and billing for complete peace of mind.",
    colSpan: "md:col-span-2",
  },
  {
    title: "Advanced Technology",
    description: "Equipped with the latest diagnostic tools and equipment to handle modern vehicles with precision.",
    colSpan: "md:col-span-2",
  },
  {
    title: "Customer First",
    description: "We prioritize your satisfaction with timely service and personalized care for your car.",
    colSpan: "md:col-span-2 md:col-start-2",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
             <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                     backgroundImage: "url('/wp-content/uploads/2023/09/hp-banner-2.webp')", // Assuming this is the banner
                }}
             />
             <div className="absolute inset-0 bg-black/80" /> {/* Dark overlay */}
        </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#FFCE32] text-xl font-bold uppercase tracking-widest block mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why <span className="text-[#FFCE32]">Motor & Mechanix</span>?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg/relaxed">
            At Motor and Mechanix, we stand out through our unmatched expertise, a customer-focused philosophy, and access to cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div 
              key={idx}
              className={cn(
                "bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-[#FFCE32] group transition-all duration-300 hover:-translate-y-2",
                reason.colSpan && idx === 4 ? "md:col-span-2 lg:col-span-1" : "" // Adjust layout logic if needed
              )}
            >
              <h3 className="text-2xl font-bold text-[#FFCE32] mb-4 group-hover:text-black transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-300 text-lg group-hover:text-black/80 transition-colors">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
