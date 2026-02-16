import Link from "next/link";
import Image from "next/image";

export default function WhyChooseUsService() {
  return (
    <section className="py-24 relative overflow-hidden text-white bg-black">
         {/* Background with overlay to match live site dark grey/black look */}
         <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-black/80 z-10" />
             <Image 
                 src="/wp-content/uploads/2023/09/hp-banner-1.webp"
                 alt="Background"
                 fill
                 className="object-cover opacity-50"
             />
         </div>

      <div className="w-full lg:w-[90%] max-w-[1750px] mx-auto px-4 md:px-0 relative z-20 flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16  uppercase italic tracking-tighter leading-tight relative z-20">
          Why <span className="text-[#FFCE32]">Motor And Mechanix</span> Is The Right Choice?
        </h2>
        
        <p className="text-white/90 text-lg md:text-[17px] leading-relaxed mb-10 max-w-3xl font-medium text-center relative z-20">
          At Motor and Mechanix, we stand out through our unmatched expertise, a customer-focused philosophy, 
          and access to cutting-edge technology. Our dedication to your satisfaction and the longevity of 
          your vehicle sets us apart. Get to know us better and experience our commitment to your automotive needs.
        </p>
        
        <Link 
          href="/why-us" 
          className="relative inline-flex items-center bg-[#1A49BA] text-white px-[23px] py-[15px] pr-[60px] rounded-[50px] font-bold uppercase text-sm tracking-wider hover:bg-[#153a96] transition-all transform hover:-translate-y-1 shadow-lg group z-20"
        >
          Why Us
          <span className="absolute right-[15px] top-1/2 -translate-y-1/2 w-6 h-6 bg-[url('/wp-content/themes/m%26m/img/white-arrow.png')] bg-contain bg-no-repeat bg-center" />
        </Link>
      </div>
    </section>
  );
}
