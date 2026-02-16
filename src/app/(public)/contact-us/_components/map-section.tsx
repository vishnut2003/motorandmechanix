import React from 'react'

const MapSection = () => {
  return (
   <section className='md:h-[30rem] h-[25rem] w-full'>
 <iframe
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.240912962786!2d77.41362637617078!3d28.622540884533038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8f222177f1%3A0x9f5f10c500a974fa!2sMotor%20and%20Mechanix%20-%20Car%20Service%20%26%20Repair!5e0!3m2!1sen!2sin!4v1696492604437!5m2!1sen!2sin"
                       className="inset-0 w-full h-full"
                       style={{ border: 0 }}
                       loading="lazy"
                       referrerPolicy="no-referrer-when-downgrade"
                       title="Motor & Mechanix Location"
                     ></iframe>
   </section>
  )
}

export default MapSection