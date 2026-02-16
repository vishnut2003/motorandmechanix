"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Testimonials() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container">

                {/* Video Testimonial */}
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 uppercase">
                        Customer&apos;s Testimonial - <span className="text-[#FFCE32]">Video</span>
                    </h2>
                    <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                        <div className="relative w-full aspect-video">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/LbLuUtneEKk"
                                title="Customer Testimonial"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Text Testimonials (Placeholder logic based on common patterns if exact text isn't in main HTML, 
            or using the 'Delivering Excellence' section which acts as a trust builder) 
        */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                                Delivering <span className="text-[#FFCE32]">excellence</span> in Car Service across Noida Ext.
                            </h2>
                            <div className="space-y-4 text-lg text-gray-600">
                                <p>Get professional <strong>best car repair service</strong> in Noida with expert mechanics.</p>
                                <p>Find a trusted <strong>car repair near me</strong> for quick and reliable auto solutions.</p>
                                <p>Skilled <strong>auto mechanics near me</strong> ensure top-quality service. Book your repair today!</p>
                            </div>
                            <a href="tel:08383838300" className="inline-block mt-8 bg-black text-[#FFCE32] px-8 py-3 rounded-full font-bold uppercase hover:bg-gray-800 transition-colors">
                                Contact Us
                            </a>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: "/assets/home/delivering-icon-1.png", title: "Inventory of 25000+ Parts at Store" },
                                { icon: "/assets/home/delivering-icon-3.png", title: "Best Turn-around Time. No Waiting" },
                                { icon: "/assets/home/delivering-icon-2.png", title: "All Dealership Equipments" },
                                { icon: "/assets/home/delivering-icon-5.png", title: "Value Added Services for Loyal Customers" },
                                { icon: "/assets/home/delivering-icon-4.png", title: "Trustable & Service Friendly", fullWidth: true },
                            ].map((item, idx) => (
                                <div key={idx} className={cn("bg-gray-50 p-6 rounded-xl text-center flex flex-col items-center hover:bg-[#FFCE32]/10 transition-colors", item.fullWidth && "sm:col-span-2")}>
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={64}
                                        height={64}
                                        className="w-16 h-16 mb-4 object-contain"
                                    />
                                    <h4 className="font-bold text-lg leading-tight">{item.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
