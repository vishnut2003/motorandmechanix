import React from "react";

/* Simple Image wrapper */
const Image = ({ src, alt, className }: any) => (
  <img src={src} alt={alt} className={className} loading="lazy" />
);

const Ensuring = () => {
  return (
    <section className="bg-[#1b1b1b] md:py-20 py-10 md:px-20 px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-28 gap-5">
        <div>
          <p className="font-bold text-4xl md:text-6xl md:text-start text-center text-[#fece12] mb-3">07</p>
          <h1 className="text-2xl md:text-5xl font-medium md:text-start text-center  text-white md:mb-8 mb-5">
            Ensuring Your Vehicle's Safety: Our Vigilant CCTV Surveillance
          </h1>
          <p className="text-white md:text-[17px] text-[15px] md:mb-12 mb-2 md:text-start text-center">
            We take the security of your cherished vehicles seriously, and that’s why our premises
            are equipped with state-of-the-art CCTV surveillance systems. Your cars are under
            constant watch, ensuring their safety and protection round the clock. Our commitment to
            security extends beyond just servicing; it encompasses every moment your vehicle is
            entrusted to our care.
          </p>
        </div>
        <div>
          <Image
            src="/wp-content/uploads/2023/09/whyus-7.webp"
            alt="Motor & Mechanix"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Ensuring;
