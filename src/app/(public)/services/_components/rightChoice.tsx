import { ArrowUpRight } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function RightChoice() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat bg-fixed md:h-[100vh] h-[70vh] md:py-[13rem] py-10 px-4"
      style={{
        backgroundImage:
          "url(/wp-content/uploads/2023/09/11hp-banner.jpg)",
      }}
    >
      <div className="mx-auto max-w-8xl">
        <div className="text-center mx-auto w-full lg:w-8/12 xl:w-7/12">
          <h2 className="text-3xl md:text-4xl underline lg:text-[57px] font-medium mb-8 text-white">
            Why Motor And Mechanix Is <br className="md:block hidden"/> The Right Choice?
          </h2>
          <p className="text-white text-base md:text-lg md:mx-20">
            At Motor and Mechanix, we stand out through our unmatched expertise, a customer-focused
            philosophy, and access to cutting-edge technology. Our dedication to your satisfaction
            and the longevity of your vehicle sets us apart.Get to know us better and experience our
            commitment to your automotive needs.
          </p>
          <div className="flex justify-center">
            <Link
              href="/services"
              className="group btn yellow w-fit !flex items-center gap-6
                                        border border-transparent
                                        transition-all duration-300
                                        hover:!bg-white hover:!border-[#FFD700]"
            >
              <span className="transition-colors duration-300 group-hover:!text-[#FFD700]">
                Why Us
              </span>

              <ArrowUpRight
                strokeWidth={1.5}
                className="w-5 h-5 flex-shrink-0
                                          transition-all duration-300
                                          group-hover:!text-[#FFD700]
                                          group-hover:-translate-y-3
                                          group-hover:opacity-0"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
