"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const brands = [
  "/wp-content/uploads/2023/08/brands-icon-1.webp",
  "/wp-content/uploads/2023/08/brands-icon-7.webp",
  "/wp-content/uploads/2023/08/brands-icon-5.webp",
  "/wp-content/uploads/2023/08/brands-icon-4.webp",
  "/wp-content/uploads/2023/08/brands-icon-9.webp",
  "/wp-content/uploads/2023/08/brands-icon-8.webp",
  "/wp-content/uploads/2023/08/brands-icon-11.webp",
  "/wp-content/uploads/2023/08/brands-icon-10.webp",
  "/wp-content/uploads/2023/08/brands-icon-6.webp",
  "/wp-content/uploads/2023/08/brands-icon-3.webp",
  "/wp-content/uploads/2023/08/brands-icon-2.webp",
];

export default function BrandsWeServe() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#FFCE32] text-xl font-medium uppercase tracking-wider block mb-2">
              Our Brands
            </span>
            <h2 className="text-4xl md:text-6xl font-bold uppercase">
              <span className="text-[#FFCE32]">Brands</span> We Serve
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            We proudly serve an array of reputable automotive brands, ensuring quality and precision in every service. Your vehicle is in trusted hands at Motor & Mechanix.
          </p>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {brands.map((src, idx) => (
            <li 
              key={idx} 
              className="flex items-center justify-center p-6 border border-gray-100 rounded-2xl hover:shadow-xl hover:border-[#FFCE32] transition-all bg-white aspect-[3/2] group"
            >
              <div className="relative w-full h-full">
                 <Image
                    src={src}
                    alt="Brand Logo"
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
              </div>
            </li>
          ))}
          <li className="flex items-center justify-center p-6">
            <Link 
              href="/multi-brand" 
              className="flex items-center gap-2 text-xl font-bold uppercase hover:text-[#FFCE32] transition-colors group"
            >
              View More 
              {/* Using a lucide icon instead of the image for cleaner implementation */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="group-hover:translate-x-1 transition-transform"
              >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
