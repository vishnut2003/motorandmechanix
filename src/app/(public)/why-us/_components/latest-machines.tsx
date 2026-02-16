import React from "react";

/* Simple Image wrapper */
const Image = ({ src, alt, className }: any) => (
  <img src={src} alt={alt} className={className} loading="lazy" />
);

const LatestMachines = () => {
  return (
    <section className="bg-[#121212] md:py-20 py-10 md:px-20 px-5 overflow-hidden">
      <div className="text-center">
        <p className="font-bold text-4xl md:text-6xl text-[#fece12] md:mb-3 mb-2">04</p>
        <h1 className="text-2xl md:text-5xl font-medium max-w-xl mx-auto text-white md:mb-8 mb-5">
          Latest Machines and Infrastructure
        </h1>
        <p className="text-white text-center md:text-[20px] text-[16px] mb-16 mx-auto max-w-2xl">
          Our state-of-the-art machines and cutting-edge infrastructure ensure precision and
          reliability in every service, keeping your vehicle in prime condition
        </p>
      </div>
    <div className="w-full overflow-x-auto">
  <div className="flex gap-8 md:grid md:grid-cols-4">
    
    <div className="min-w-[220px] md:min-w-0">
      <Image
        src="/wp-content/uploads/2023/09/whyus-5.webp"
        alt="Motor & Mechanix"
        className="object-contain w-full"
        width={200}
        height={120}
      />
    </div>

    <div className="min-w-[220px] md:min-w-0">
      <Image
        src="/wp-content/uploads/2023/09/whyus-4.webp"
        alt="Motor & Mechanix"
        className="object-contain w-full"
        width={200}
        height={120}
      />
    </div>

    <div className="min-w-[220px] md:min-w-0">
      <Image
        src="/wp-content/uploads/2023/09/whyus-3.webp"
        alt="Motor & Mechanix"
        className="object-contain w-full"
        width={200}
        height={120}
      />
    </div>

    <div className="min-w-[220px] md:min-w-0">
      <Image
        src="/wp-content/uploads/2023/09/whyus-2.webp"
        alt="Motor & Mechanix"
        className="object-contain w-full"
        width={200}
        height={120}
      />
    </div>

  </div>
</div>

    </section>
  );
};

export default LatestMachines;
