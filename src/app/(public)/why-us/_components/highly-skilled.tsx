import React from "react";

/* Simple Image wrapper */
const Image = ({ src, alt, className }: any) => (
  <img src={src} alt={alt} className={className} loading="lazy" />
);

const HighlySkilled = () => {
  return (
    <section className="bg-[#1b1b1b] md:py-20 py-10 md:px-20 px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-30 gap-10">
        <div>
          <p className="font-bold text-4xl md:text-6xl md:text-start text-center text-[#fece12] mb-3">03</p>
          <h1 className="text-2xl md:text-5xl font-medium md:text-start text-center  text-white md:mb-8 mb-5">
            Highly skilled labor delivering efficiency at 50% lower costs
          </h1>
          <p className="text-white text-[16px] md:text-[19px] md:text-start text-center md:mb-12 mb-8">
            Benefit from our proficient and experienced workforce, providing
            top-notch service without breaking the bank. Our cost-effective
            approach ensures quality repairs and maintenance at a fraction of
            the usual expense.
          </p>
          <div className="border-t border-[#C1C1C133] flex items-center gap-5 py-2">
            <Image
            src="/wp-content/themes/m&m/css/../img/tick-icon.png"
            alt="Motor & Mechanix"
            className="object-contain md:w-9 w-7 md:h-9 h-7"
          />
          <p className="md:text-[35px] text-[26px] font-medium text-white">Affordable Services</p>
          </div>
           <div className="border-t border-[#C1C1C133] flex items-center gap-5 py-2">
            <Image
            src="/wp-content/themes/m&m/css/../img/tick-icon.png"
            alt="Motor & Mechanix"
            className="object-contain md:w-9 w-7 md:h-9 h-7"
          />
          <p className="md:text-[35px] text-[26px] font-medium text-white">Skilled Workforce</p>
          </div>
           <div className="border-t border-[#C1C1C133] flex items-center gap-5 py-2">
            <Image
            src="/wp-content/themes/m&m/css/../img/tick-icon.png"
            alt="Motor & Mechanix"
            className="object-contain md:w-9 w-7 md:h-9 h-7"
          />
          <p className="md:text-[35px] text-[26px] font-medium text-white">Cost-Efficient Repairs</p>
          </div>
        </div>
        <div>
          <Image
            src="/wp-content/uploads/2023/09/whyus-1.webp"
            alt="Motor & Mechanix"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HighlySkilled;
