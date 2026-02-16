import React from 'react'
import NextImage from "next/image"

const TyresTop = () => {
  return (
    <section className="md:mt-16 h-[550px] md:h-[92vh] relative">
      <NextImage
        src="/wp-content/uploads/2026/01/tyer_banner2.jpg"
        alt="Hero"
        fill
        priority
        className="object-cover  md:block hidden"
      />
     
      {/* <Image
          src="/wp-content/uploads/2026/01/mp5.jpg"
          alt="Hero"
          className="w-full h-full object-cover md:hidden block"
        /> */}
         <NextImage
        src="/wp-content/uploads/2026/01/tm.jpg"
        alt="Hero"
        fill
        priority
        className="object-cover md:hidden block mt-10"
        style={{
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5))"
        }}
      />
    </section>

  )
}

export default TyresTop