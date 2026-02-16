import React from "react";

/* Simple Image wrapper */
const Image = ({ src, alt, className }: any) => (
  <img src={src} alt={alt} className={className} loading="lazy" />
);

const OurPromise = () => {
  return (
    <section className="md:py-14 py-8 md:px-20 px-5 bg-[#fece12]">
      <div>
        <p className="text-center font-semibold md:text-[16px] text-[15px] uppercase md:mb-5 mb-3">Our Promise</p>
        <h1 className="underline text-[#1a49ba] font-medium text-center text-3xl md:text-6xl max-w-4xl mx-auto leading-[1.2]">
          Driven by Excellence: Our{" "}
          <span className="bg-[#1a49ba] text-white "> Commitment to You</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center mt-10">
        <div className="max-w-xl">
          <p className="font-bold text-4xl md:text-6xl text-[#1a49ba] mb-4 text-center md:text-start">01</p>
          <p className="font-medium text-[26px] md:leading-tight leading-8 md:text-[2.8rem] mb-6 text-center md:text-start text-black">
            Sourcing Authentic Spare Parts for Over Three Decades
          </p>
          <p className="md:text-[18px] text-[16px] md:text-start text-center md:mb-0 mb-5">
            For more than three decades, we’ve been the trusted source for
            authentic spare parts in the automotive industry. Our unwavering
            commitment to quality and reliability has made us the go-to choice
            for car enthusiasts and repair professionals alike. With an
            extensive network of suppliers and a keen eye for authenticity, we
            ensure that every spare part we procure is genuine, guaranteeing the
            longevity and performance of your vehicle.
          </p>
        </div>
        <div className="flex md:gap-6 gap-4 md:justify-end justify-center">
          <div className="space-y-4 md:space-y-6 mt-16">
            <div className="bg-[#181818] md:p-6 p-2 md:h-[18rem] h-[10rem] md:w-[17rem] w-[10rem] flex flex-col justify-center">
              <Image
                src="/wp-content/uploads/2023/09/1.png"
                alt="Motor & Mechanix"
                className="object-contain md:w-15 w-12 md:h-15 h-12 md:mx-0 mx-auto"
              />
              <p className="text-white text-[18px] md:text-[30px] md:text-start text-center leading-tight font-medium md:mt-10 mt-5">
                Skilled, Trained <br /> Technicians
              </p>
            </div>
            <div className="bg-[#181818] md:p-6 p-2 md:h-[18rem] h-[10rem] md:w-[17rem] w-[10rem] flex flex-col justify-center">
              <Image
                src="/wp-content/uploads/2023/09/3.png"
                alt="Motor & Mechanix"
                className="object-contain md:w-15 w-12 md:h-15 h-12 md:mx-0 mx-auto"
              />
              <p className="text-white text-[18px] md:text-[30px] md:text-start text-center  leading-tight font-medium md:mt-10 mt-5">
                Comprehensive  <br /> Solutions
              </p>
            </div>
          </div>
           <div className="space-y-4 md:space-y-6">
            <div className="bg-[#181818] md:p-6 p-2 md:h-[18rem] h-[10rem] md:w-[17rem] w-[10rem] flex flex-col justify-center">
              <Image
                src="/wp-content/uploads/2023/09/2.png"
                alt="Motor & Mechanix"
                className="object-contain md:w-15 w-12 md:h-15 h-12 md:mx-0 mx-auto"
              />
              <p className="text-white text-[18px] md:text-[30px] md:text-start text-center  leading-tight font-medium md:mt-10 mt-5">
                Additional<br />  Quality Checks 
              </p>
            </div>
            <div className="bg-[#181818] md:p-6 p-2 md:h-[18rem] h-[10rem] md:w-[17rem] w-[10rem] flex flex-col justify-center">
              <Image
                src="/wp-content/uploads/2023/09/4.png"
                alt="Motor & Mechanix"
                className="object-contain md:w-15 w-12 md:h-15 h-12 md:mx-0 mx-auto"
              />
              <p className="text-white text-[18px] md:text-[30px] md:text-start text-center  leading-tight font-medium md:mt-10 mt-5">
                Easy Servicing  <br /> Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPromise;
