import React from "react";

/* Simple Image wrapper */
const Image = ({ src, alt, className }: any) => (
  <img src={src} alt={alt} className={className} loading="lazy" />
);

const WhyBanner = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center bg-no-repeat py-20 px-4 h-[550px] md:h-[100vh] md:block hidden"
        style={{
          backgroundImage:
            "url(/wp-content/uploads/2023/09/Group-4112-1.webp)",
        }}
      >
         {/* overlay */}
  <div className="absolute inset-0 bg-black/20"></div>
        <div className="mx-auto max-w-[1400px] flex flex-col items-center">
          <div className="w-full py-40">
            <h1
              className="text-4xl font-extrabold inline-block mb-10 text-[#d7d7d7] uppercase md:text-[8rem]"
              style={{ fontFamily: '"Trim Poster", sans-serif' }}
            >
              <strong
                className="font-bold inline-block"
                style={{
                  WebkitTextFillColor: "transparent",
                  WebkitTextStroke: "2px rgb(255, 255, 255)",
                  lineHeight: ".7",
                  fontFamily: "Trim Poster TRIAL",
                }}
              >
                WHY
              </strong>{" "}
              US ?
            </h1>
            <div className="text-[#d7d7d7]">
              <p className="max-w-xl text-[17px] font-medium">
                Discover why we’re your ideal automotive partner. Explore our commitment to
              excellence, customer-centric approach, and a legacy of trusted and best Car repair
              service that sets us apart in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    {/* Mobile Version */}
      <div className="block md:hidden bg-black pt-30 pb-5">
        <div className="w-full px-5">
          <h1 
            className="text-5xl md:text-[8rem] font-extrabold inline-block mb-6 text-[#d7d7d7] uppercase"
            style={{ fontFamily: '"Trim Poster", sans-serif' }}
          >
            <strong 
              className="font-bold inline-block text-[#d7d7d7]"
              style={{
                WebkitTextFillColor: 'transparent',
                WebkitTextStroke: '2px rgb(215,215,215)',
                lineHeight: '.7',
                fontFamily: 'Trim Poster TRIAL'
              }}
            >
              WHY
            </strong>
            {' '}US ?
          </h1>
          <div className="text-[#d7d7d7]">
            <p className="mb-4 text-[16px]">
              Discover why we're your ideal automotive partner. Explore our commitment 
              to excellence, customer-centric approach, and a legacy of trusted and best 
              Car repair service that sets us apart in the industry.
            </p>
          </div>
        </div>
        
        {/* Mobile Image */}
        <div className="mt-5">
          <img 
            src="/wp-content/uploads/2023/08/inner-banner.webp" 
            alt="Motor & Mechanix" 
            className="object-contain w-[65%] h-[65%] ml-auto" 
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default WhyBanner;
