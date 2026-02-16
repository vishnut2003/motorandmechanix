import React from 'react'

const CareSection = () => {
  return (
    <section className='py-20' style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)"
    }}>
<div className='max-w-6xl mx-auto'>
<h1 className="text-3xl sm:text-5xl font-bold text-[#FFD700] uppercase sm:mb-8 mb-4 text-center md:mx-0 mx-12">
        Tyres & Wheel Care for Four Wheelers
        </h1>
        <p className='text-white md:mx-0 mx-5 text-[16px] md:text-[18px] text-center mb-4'>Motor & Mechanix offers professional tyre and wheel care services for four-wheelers,
             with a dedicated focus on Bridgestone tyres. Our tyre solutions include correct tyre selection,
              precise fitment, wheel balancing, and wheel alignment to ensure safety, stable handling, and consistent on-road performance.</p>
             
               <p className='text-white md:mx-0 mx-5 text-[16px] md:text-[18px] text-center'>Supported by modern equipment and trained technicians, every tyre service is carried out with attention to accuracy and durability. This helps reduce uneven wear,
                 improve driving comfort, and extend overall tyre life.</p>
              </div>
    </section>
  )
}

export default CareSection