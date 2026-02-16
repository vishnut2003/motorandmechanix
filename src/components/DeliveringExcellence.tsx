"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function DeliveringExcellence() {
    return (
        <section className="bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                {/* --- ROW 1 --- */}

                {/* 1. Title Block (Spans 2 columns) */}
                <div className="lg:col-span-2 bg-white p-12 md:p-[50px] flex items-center">
                    <h2 className="text-4xl md:text-[58px] font-bold leading-[1.1] text-[#121212] tracking-tight">
                        Delivering excellence in <br className="hidden lg:block" />
                        <span className="decoration-4 underline decoration-[#FFCE32] underline-offset-8">Car Service</span> across Noida Ext.
                    </h2>
                </div>

                {/* 2. Inventory (Black) */}
                <div className="bg-[#181818] p-10 md:pt-[50px] md:pb-[50px] md:pl-[54px] md:pr-[23px] flex flex-col justify-center items-start group hover:bg-black transition-all duration-300">
                    <div className="w-16 h-16 mb-8 relative transition-transform duration-300 group-hover:-translate-y-2">
                        <Image
                            src="/wp-content/themes/m%26m/img/icon-1.png"
                            alt="Inventory"
                            width={64}
                            height={64}
                            className="object-contain brightness-0 invert"
                        />
                    </div>
                    <h3 className="text-white text-[28px] font-bold leading-tight">Inventory of 25000+ Parts at Store</h3>
                </div>

                {/* 3. Turn-around Time (White) */}
                <div className="bg-white p-10 md:pt-[50px] md:pb-[50px] md:pl-[54px] md:pr-[23px] flex flex-col justify-center items-start group hover:bg-gray-50 transition-all duration-300">
                    <div className="w-16 h-16 mb-8 relative transition-transform duration-300 group-hover:-translate-y-2">
                        <Image
                            src="/wp-content/themes/m%26m/img/icon-2.png"
                            alt="Turn-around Time"
                            width={64}
                            height={64}
                            className="object-contain"
                        />
                    </div>
                    <h3 className="text-[#28303d] text-[28px] font-bold leading-tight">Best Turn-around Time. No Waiting</h3>
                </div>


                {/* --- ROW 2 --- */}

                {/* 4. Description & Button (Spans 1 column) */}
                <div className="bg-white p-10 md:pt-[50px] md:pb-[50px] md:pl-[50px] md:pr-[40px] flex flex-col justify-start items-start border-t border-gray-100 lg:border-none">
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                        Get professional best car repair service in Noida with expert mechanics. Find a trusted car repair near me for quick and reliable auto solutions. Skilled auto mechanics near me ensure top-quality service. Book your repair today!
                    </p>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-3 bg-[#1A49BA] text-white px-8 py-4 rounded-full font-bold uppercase hover:bg-[#153a96] transition-colors group"
                    >
                Contact us
                        <span className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                            <ArrowRight className="w-4 h-4" />
                        </span>
                    </Link>
                </div>

                {/* 5. Equipment (Black) */}
                <div className="bg-[#181818] p-10 md:pt-[50px] md:pb-[50px] md:pl-[54px] md:pr-[23px] flex flex-col justify-center items-start group hover:bg-black transition-all duration-300">
                    <div className="w-16 h-16 mb-8 relative transition-transform duration-300 group-hover:-translate-y-2">
                        <Image
                            src="/wp-content/themes/m%26m/img/icon-3.png"
                            alt="Equipment"
                            width={64}
                            height={64}
                            className="object-contain brightness-0 invert"
                        />
                    </div>
                    <h3 className="text-white text-[28px] font-bold leading-tight">All Dealership Equipments</h3>
                </div>

                {/* 6. Value Added (White) */}
                <div className="bg-white p-10 md:pt-[50px] md:pb-[50px] md:pl-[54px] md:pr-[23px] flex flex-col justify-center items-start group hover:bg-gray-50 transition-all duration-300">
                    <div className="w-16 h-16 mb-8 relative transition-transform duration-300 group-hover:-translate-y-2">
                        <Image
                            src="/wp-content/themes/m%26m/img/icon-4.png"
                            alt="Value Added"
                            width={64}
                            height={64}
                            className="object-contain"
                        />
                    </div>
                    <h3 className="text-[#28303d] text-[28px] font-bold leading-tight">Value Added Services for Loyal Customers</h3>
                </div>

                {/* 7. Trustable (Black) */}
                <div className="bg-[#181818] p-10 md:pt-[50px] md:pb-[50px] md:pl-[54px] md:pr-[23px] flex flex-col justify-center items-start group hover:bg-black transition-all duration-300">
                    <div className="w-16 h-16 mb-8 relative transition-transform duration-300 group-hover:-translate-y-2">
                        <Image
                            src="/wp-content/themes/m%26m/img/icon-5.png"
                            alt="Trustable"
                            width={64}
                            height={64}
                            className="object-contain brightness-0 invert"
                        />
                    </div>
                    <h3 className="text-white text-[28px] font-bold leading-tight">Trustable & Service Friendly</h3>
                </div>

            </div>
        </section>
    );
}
