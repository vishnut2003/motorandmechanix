import React from "react";

export default function BrandsBanner() {
  return (
    <div
      className="relative bg-cover bg-[position:36%_center] md:bg-center bg-no-repeat py-20 px-4 h-[550px] md:h-[100vh]"
      style={{
        backgroundImage: "url('/assets/multi-brand/brand-banner.jpg')",
      }}
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="w-full py-28">
          <h1
            className="text-4xl font-extrabold mb-8 mt-10 md:mt-0 text-white uppercase md:text-[8rem] tracking-[-0.02em] sm:tracking-[-0.05em] md:tracking-[-0.12em]"
            style={{ fontFamily: "Trim Poster TRIAL" }}
          >
            <strong
              className="font-bold block leading-[0.9] sm:leading-[0.8] md:leading-[0.7] text-outline text-transparent"
              style={{
                fontFamily: "Trim Poster TRIAL",
              }}
            >
              Our
            </strong>{" "}
            <span className="text-shadow-strong">Automotive&nbsp;&nbsp; Allies</span>
          </h1>
          <div className="text-white">
            <p className="text-[18px] text-shadow-soft">
              Discover the excellence of{" "}
              <strong>multi-brand car service</strong> with our trusted
              partnerships.
            </p>
            <p className="text-[18px] text-shadow-soft">
              Explore our network of top-tier brands committed to delivering
              reliable car repairs and maintenance, ensuring superior service
              for every vehicle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
