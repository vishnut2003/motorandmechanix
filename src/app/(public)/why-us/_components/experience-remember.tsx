import React from "react";

/* Simple Image wrapper */
const Image = ({ src, alt, className }: any) => (
  <img src={src} alt={alt} className={className} loading="lazy" />
);

const ExperienceRemember = () => {
  return (
    <section className="bg-[#1b1b1b] md:py-20 py-10 md:px-20 px-5 overflow-hidden">
      <div className="text-center">
        <p className="font-bold text-4xl md:text-6xl text-[#fece12] md:mb-3 mb-2">05</p>
        <h1 className="text-2xl md:text-5xl font-medium text-white md:mb-8 mb-5">
          An Experience To Remember
        </h1>
        <p className="text-white text-center md:text-[18px] text-[16px] mb-12 mx-auto max-w-2xl">
          Creating unforgettable automotive experiences with exceptional service and expertise.
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 md:gap-0 w-full mt-8">
        <div className="md:pr-10">
          <Image
            src="/wp-content/themes/m%26m/img/quote-icon-2.png"
            alt="Motor & Mechanix"
            className="object-contain md:w-7 w-5 md:h-7 h-5 md:mb-4 mb-2"
          />
          <p className="text-white border-l border-[#fece12] text-[16px] md:text-[22px] pl-2">
            "I've been entrusting my car to them for years, and every visit is truly an experience
            to remember. Their attention to detail and commitment to quality are unmatched." .
          </p>
        </div>
        <div className="md:border-x border-[#C1C1C133] md:px-10">
          <Image
            src="/wp-content/uploads/2023/09/whyus-6.webp"
            alt="Motor & Mechanix"
            className="object-contain md:mb-12 mb-4"
          />
          <Image
            src="/wp-content/themes/m%26m/img/quote-icon-2.png"
            alt="Motor & Mechanix"
            className="object-contain md:w-7 w-5 md:h-7 h-5 md:mb-4 mb-2"
          />
          <p className="text-white border-l border-[#fece12] text-[16px] md:text-[22px] pl-2">
            "From their modern facility to their skilled technicians, Motor and Mechanix offers a
            level of service that leaves a lasting impression. They've earned my trust as my go-to
            automotive partner."
          </p>
        </div>
        <div className="md:pl-10">
          <Image
            src="/wp-content/themes/m%26m/img/quote-icon-2.png"
            alt="Motor & Mechanix"
            className="object-contain md:w-7 w-5 md:h-7 h-5 md:mb-4 mb-2"
          />
          <p className="text-white border-l border-[#fece12] text-[16px] md:text-[22px] pl-2">
            "Motor and Mechanix transformed a routine maintenance visit into an extraordinary
            experience. Their professionalism and customer-focused approach make them stand out in
            the industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceRemember;
