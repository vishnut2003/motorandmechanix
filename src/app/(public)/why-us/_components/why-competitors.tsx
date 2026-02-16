import Image from "next/image";

const WhyCompetitors = () => {
  return (
    <section className="md:py-20 py-10 bg-[#121212] md:px-20 px-5">
    
        <div className="flex flex-col-reverse sm:flex-row gap-10 items-center">
          <Image
            src="/wp-content/uploads/2023/09/Group-4111.webp"
            alt="Motor & Mechanix"
            width={640}
            height={440}
            className="sm:w-190 w-100 sm:h-135 h-55 object-contain"
          />
          <div className="text-white sm:ml-16">
            <p className="font-bold text-4xl md:text-6xl md:text-start text-center text-[#fece12] md:mb-3 mb-2">06</p>
            <h3 className="sm:mb-8 mb-5 text-3xl sm:text-start text-center sm:text-5xl">Motor & Mechanix Vs Competitors</h3>
            <p className="text-[15px] sm:text-[17px] sm:text-start text-center">
              Motor & Mechanix outshines competitors with superior expertise,
              cutting-edge technology, and a customer-first approach, making us
              the clear choice for all your automotive needs.
            </p>
          </div>
        </div>
     
    </section>
  );
};

export default WhyCompetitors;
