import React from "react";

/* Simple Image wrapper */
const Image = ({ src, alt, className }: any) => (
  <img src={src} alt={alt} className={className} loading="lazy" />
);

const FasterHassle = () => {
  return (
    <section className="bg-[#121212] md:py-20 py-10 md:px-20 px-4 overflow-hidden">
      <div className="text-center">
        <p className="font-bold text-4xl md:text-6xl text-[#fece12] mb-3">02</p>
        <h1 className="text-[28px] md:text-5xl leading-8 md:leading-12 font-medium max-w-xl mx-auto text-white md:mb-8 mb-5">
          Faster & Hassle Free Turn Around Time.
        </h1>
          <p className="text-white text-center text-[16px] md:text-[17px] md:mb-12 mb-6 mx-auto max-w-xl">
            Experience the difference with our rapid and streamlined turnaround
            times. Our commitment to efficiency ensures your car is back on the
            road faster, with minimal hassle Hassle Free Pickup Seamless and
            stress-free vehicle pickup.
          </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-start justify-between w-full md:mt-[-7.6rem]">
        <div className="flex md:flex-col flex-row md:gap-0 gap-4 items-center md:justify-center md:ml-[-10rem]">
          <div className="md:bg-[#181818] md:h-[21rem] md:w-[18rem] md:p-4 p-2 md:mb-5 flex items-center justify-center">
            <Image
              src="/wp-content/uploads/2023/09/faster-hassle-img-1.png"
              alt="Motor & Mechanix"
              className="object-contain md:w-50 w-[4rem] md:h-50 h-[4rem]"
            />
          </div>
          <div>
          <p className="md:text-[34px] text-[24px] font-medium text-white md:mb-2 text-start md:text-center">
            Hassle Free Pickup
          </p>
          <p className="md:text-[18px] text-[15px] text-start md:text-center text-white  max-w-[16rem] mx-auto">
            Seamless and stress-free vehicle pickup.
          </p>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-0 gap-4 items-center md:justify-center md:mt-[7.6rem]">
        
          <div className="md:bg-[#181818] md:h-[21rem] md:w-[18rem] md:p-4 p-2 md:mb-5 flex items-center justify-center">
            <Image
              src="/wp-content/uploads/2023/09/faster-hassle-img-2.png"
              alt="Motor & Mechanix"
              className="object-contain md:w-50 w-[4rem] md:h-50 h-[4rem]"
            />
          </div>
          <div>
          <p className="md:text-[34px] text-[24px] font-medium text-white md:mb-2 text-start md:text-center">
           Faster Work Strategy
          </p>
          <p className="md:text-[18px] text-[15px] text-start md:text-center text-white  max-w-[16rem] mx-auto">
           Swift and efficient work approach.
          </p>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-0 gap-4 items-center md:justify-center md:mr-[-10rem]">
          <div className="md:bg-[#181818] md:h-[21rem] md:w-[18rem] md:p-4 p-2 md:mb-5 flex items-center justify-center">
            <Image
              src="/wp-content/uploads/2023/09/faster-hassle-img-3.png"
              alt="Motor & Mechanix"
              className="object-contain md:w-50 w-[4rem] md:h-50 h-[4rem]"
            />
          </div>
          <div>
          <p className="md:text-[34px] text-[24px] font-medium text-white md:mb-2 text-start md:text-center">
           Free Drop Off
          </p>
          <p className="md:text-[18px] text-[15px] text-start md:text-center text-white max-w-[16rem] mx-auto">
            Complimentary vehicle drop-off service
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FasterHassle;
