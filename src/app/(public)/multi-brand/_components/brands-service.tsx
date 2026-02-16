"use client";

import React from "react";
import Image from "next/image";

export default function BrandsService() {
  const brands = [
    {
      image: "/assets/multi-brand/brands/brand-list-icon-12.png",
      webp: "/assets/multi-brand/brands/brand-list-icon-12.png.webp",
      hasWebp: true,
    },
    {
      image: "/assets/multi-brand/brands/brand-list-icon-11.png",
      webp: "/assets/multi-brand/brands/brand-list-icon-11.png.webp",
      hasWebp: true,
    },
    {
      image: "/assets/multi-brand/brands/brand-list-icon-10.png",
      webp: "/assets/multi-brand/brands/brand-list-icon-10.png.webp",
      hasWebp: true,
    },
    {
      image: "/assets/multi-brand/brands/brand-list-icon-9.png",
      hasWebp: false,
    },
    {
      image: "/assets/multi-brand/brands/brand-list-icon-8.png",
      hasWebp: false,
    },
    {
      image: "/assets/multi-brand/brands/brand-list-icon-7.png",
      hasWebp: false,
    },
    {
      image: "/assets/multi-brand/brands/brand-list-icon-6.png",
      webp: "/assets/multi-brand/brands/brand-list-icon-6.png.webp",
      hasWebp: true,
    },
    {
      image: "/assets/multi-brand/brands/brand-list-icon-5.png",
      webp: "/assets/multi-brand/brands/brand-list-icon-5.png.webp",
      hasWebp: true,
    },
    {
      image: "/assets/multi-brand/brands/brand-list-icon-4.png",
      webp: "/assets/multi-brand/brands/brand-list-icon-4.png.webp",
      hasWebp: true,
    },
    {
      image: "/assets/multi-brand/brands/brand-list-icon-3.png",
      hasWebp: false,
    },
    {
      image: "/assets/multi-brand/brands/brand-list-icon-2.png",
      hasWebp: false,
    },
    {
      image: "/assets/multi-brand/brands/brand-list-icon-1.png",
      hasWebp: false,
    },
  ];

  return (
    <section className="bg-[#121212] md:py-20 py-10">
      <div className="max-w-[1500px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center md:mb-16 mb-8">
          <h3 className="text-white text-[28px] md:leading-12 leading-8 md:text-[45px] font-medium mb-5">
            Brands in <span className="whitespace-nowrap">Our Service</span>{" "}
            Repertoire
          </h3>
          <p className="text-white max-w-4xl mx-auto text-[16px] md:text-[18px]">
            We take pride in our collaborations with a diverse array of top-tier
            automotive manufacturers. These partnerships reflect our dedication
            to delivering high-quality service and expertise to our customers.
          </p>
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 md:space-y-4 space-y-2 md:gap-4 gap-2">
          {brands.map((brand, index) => (
            <li key={index}>
              <div className="group relative md:h-[330px] h-[160px] bg-[#181818] flex items-center justify-center overflow-hidden transition-shadow duration-500 ease-out sm:hover:shadow-2xl">

                {/* Brand Image */}
                <div
                  className="
      transition-all
      duration-700
      cubic-bezier(0.22,1,0.36,1)
      transform
      sm:group-hover:-translate-y-10
      will-change-transform
    "
                >
                  {brand.hasWebp ? (
                    <picture>
                      <source srcSet={brand.webp} type="image/webp" />
                      <img
                        src={brand.image}
                        alt=""
                        className="md:max-w-[260px] max-w-[210px] mx-auto object-contain"
                      />
                    </picture>
                  ) : (
                    <img
                      src={brand.image}
                      alt=""
                      className="md:max-w-[260px] max-w-[210px] mx-auto object-contain"
                    />
                  )}
                </div>

                {/* Hover Button (Desktop Only) */}
                <a
                  href="/contact-us/"
                  className="
      absolute
      top-[60%]
      text-[16px]
      -translate-y-1/2
      opacity-0
      translate-y-6
      scale-95
      sm:group-hover:opacity-100
      sm:group-hover:translate-y-0
      sm:group-hover:scale-100
      transition-all
      duration-700
      ease-[cubic-bezier(0.22,1,0.36,1)]
      bg-[#fece12]
      text-black
      px-6
      py-2.5
      rounded-full
      hidden
      sm:inline-flex
      items-center
      gap-4
      font-medium
    "
                >
                  <Image
                    src="/wp-content/themes/m%26m/img/phone-icon.png"
                    alt=""
                    width={36}
                    height={36}
                  />
                  Schedule Pickup
                </a>
              </div>

            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-6 sm:hidden">
          <a
            href="/contact-us/"
            className="bg-[#fece12] text-black px-8 py-3 rounded-full inline-flex items-center gap-4 font-medium"
          >
            <Image
              src="/wp-content/themes/m%26m/img/phone-icon.png"
              alt=""
              width={28}
              height={28}
            />
            Schedule Pickup
          </a>
        </div>
      </div>
    </section>
  );
}


// brand service

