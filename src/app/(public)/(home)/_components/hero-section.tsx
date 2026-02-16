"use client";

import Image from "next/image";

const HeroSection = () => {
    return (
        <section
            className="md:mt-16 h-[550px] md:h-[115vh] relative"
        >
            <h1 className="sr-only">Motor & Mechanix - Best Car Service Center in Noida & Gaur City</h1>
            <Image
                src="/assets/home/car-service.jpeg"
                alt="Motor & Mechanix Hero - Car Repair Service"
                fill
                priority
                fetchPriority="high"
                sizes="100vw"
                className="object-contain object-right md:block hidden "
            />
            <Image
                src="/assets/home/mp5.jpg"
                alt="Motor & Mechanix Hero - Car Repair Service"
                fill
                priority
                fetchPriority="high"
                sizes="100vw"
                className="object-cover md:hidden block"
            />
        </section>
    );
};

export default HeroSection;
