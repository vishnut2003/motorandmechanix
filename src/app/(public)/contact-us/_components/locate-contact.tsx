"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextImage from "next/image";
import { ArrowUpRight } from "lucide-react";

const LocateContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    car: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const fieldMap: { [key: string]: string } = {
      'name-field': 'name',
      'email-field': 'email',
      'phone-field': 'phone',
      'car-field': 'car',
      'message-field': 'message'
    };
    setFormData(prev => ({ ...prev, [fieldMap[id]]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = ["Hi Motor & Mechanix, I have an enquiry."];
    if (formData.name) lines.push(`Name: ${formData.name}`);
    if (formData.email) lines.push(`Email: ${formData.email}`);
    if (formData.phone) lines.push(`Phone: ${formData.phone}`);
    if (formData.car) lines.push(`Car: ${formData.car}`);
    if (formData.message) lines.push(`Message: ${formData.message}`);
    lines.push("Location: Noida");

    const messageContent = lines.join("\n");
    const whatsappNumber = "918383838300";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageContent)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const contactLinks = [
    {
      icon: '/images/footer/mobile-icon.png',
      href: 'tel:083838 38300',
      text: '083838 38300',
      type: 'phone'
    },
    {
      icon: '/images/footer/whatsapp-icon-alt.png',
      href: 'https://api.whatsapp.com/send?phone=+9189765 76589&text=Hi+there+%F0%9F%91%8B%2C+Can+I+have+a+quote%2C+please',
      text: '089765 76589',
      type: 'whatsapp'
    }
  ];

  return (
    <section className="bg-[#ffce32] overflow-hidden min-h-screen">
      {/* Marquee wrapper */}
      <div className="relative w-full pt-10 md:pt-2 pb-10">
        {/* Marquee track */}
        <div className="flex w-max animate-marquee gap-20">
          {/* Duplicate content for seamless loop */}
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex gap-10 md:gap-20">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center md:gap-5 gap-3">
                  <Image
                    src="/wp-content/themes/m&m/img/marquee-icon.png"
                    alt="locate"
                    width={100}
                    height={100}
                    className="object-contain w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                  />
                  <h4 className='font-bold text-4xl md:text-8xl font-["Trim_Poster_TRIAL"] whitespace-nowrap'>
                    LOCATE US
                  </h4>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="md:px-20 px-5 md:mt-10">
        <div className="max-w-[1230px] md:ml-auto">
          <div className="md:flex ">

            {/* Left Section - Address & Contact */}
            <div className="w-240">

              {/* Address Header */}
              <div className="flex items-start gap-4 md:mb-4 mb-2">
                <div className="flex-shrink-0 flex items-center justify-center">
                  <NextImage
                    src="/images/footer/location-icon.png"
                    alt="Location"
                    width={32}
                    height={40}
                    className="md:w-8 w-6 md:h-10 h-8"
                  />
                </div>
                <div>
                  <h2 className="text-xl md:text-3xl font-bold md:mb-5 mb-3">
                    Motor & Mechanix
                  </h2>
                  <p className="md:text-[23px] text-[18px] font-normal md:leading-8 leading-6">
                    Plot No 1 , Khasra 120 , Next to Kajaria<br />
                    Tiles Showroom , Near 14th Avenue<br />
                    Gaur City-2 , Noida
                  </p>
                </div>
              </div>

              {/* Contact Links */}
              <div className="md:space-y-4 space-y-0">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.type === 'whatsapp' ? '_blank' : undefined}
                    rel={link.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                    className="w-fit flex items-center gap-4 p-3  group"
                  >
                    <div className="flex items-center justify-center transition-colors duration-300">
                      <NextImage
                        src={link.icon}
                        alt={link.type}
                        width={32}
                        height={32}
                        className="md:w-8 w-6 md:h-8 h-6"
                      />
                    </div>
                    <span className="text-xl md:text-2xl font-semibold transition-colors duration-300">
                      {link.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Section - Map */}
            <div className="relative lg:h-auto bg-white w-full">
              {/* <iframe
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.240912962786!2d77.41362637617078!3d28.622540884533038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8f222177f1%3A0x9f5f10c500a974fa!2sMotor%20and%20Mechanix%20-%20Car%20Service%20%26%20Repair!5e0!3m2!1sen!2sin!4v1696492604437!5m2!1sen!2sin"
                       className="absolute inset-0 w-full h-full"
                       style={{ border: 0 }}
                       loading="lazy"
                       referrerPolicy="no-referrer-when-downgrade"
                       title="Motor & Mechanix Location"
                     ></iframe> */}
              <form className="w-full md:p-8 p-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <input
                    id="name-field"
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border-3 border-[#28303d] px-4 py-2 outline-none focus:border-black transition text-black"
                  />

                  {/* Email */}
                  <input
                    id="email-field"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border-3 border-[#28303d] px-4 py-2 outline-none focus:border-black transition text-black"
                  />

                  {/* Phone */}
                  <input
                    id="phone-field"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full border-3 border-[#28303d] px-4 py-2 outline-none focus:border-black transition text-black"
                  />

                  {/* Car Brand */}
                  <input
                    id="car-field"
                    type="text"
                    placeholder="Your Car Brand & Model"
                    value={formData.car}
                    onChange={handleInputChange}
                    required
                    className="w-full border-3 border-[#28303d] px-4 py-2 outline-none focus:border-black transition text-black"
                  />
                </div>

                {/* Message */}
                <textarea
                  id="message-field"
                  rows={2}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border-3 border-[#28303d] px-4 py-2 mt-6 outline-none focus:border-black transition resize-none text-black"
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-6 md:mb-4 bg-[#28303d] text-white hover:text-black px-10 py-3 font-semibold hover:bg-white hover:border-2 hover:border-[#28303d] transition cursor-pointer w-fit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row md:gap-12 gap-4 md:my-20 my-10">

            {/* MAP */}
            <div className="relative w-full lg:w-[30%] h-[350px] lg:h-[480px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.240912962786!2d77.41362637617078!3d28.622540884533038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8f222177f1%3A0x9f5f10c500a974fa!2sMotor%20and%20Mechanix%20-%20Car%20Service%20%26%20Repair!5e0!3m2!1sen!2sin!4v1696492604437!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                title="Location"
              />
            </div>

            {/* IMAGE */}
            <div className="lg:w-[70%] ">
              <div className="w-full h-[350px] lg:h-[480px]">
                <Image
                  src="/wp-content/uploads/2023/09/shop-img-3.webp"
                  alt="locate"
                  width={2800}
                  height={1000}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex items-center justify-center md:justify-start md:ml-10">
                <a
                  href="/services"
                  className="group btn yellow w-fit !flex items-center gap-6
                                        border border-transparent
                                        transition-all duration-300
                                         hover:!bg-[#ffce32] hover:!border-[#1A49BA]"
                >
                  <span className="transition-colors duration-300 group-hover:!text-[#1A49BA]">
                    Contact Us
                  </span>

                  <ArrowUpRight
                    strokeWidth={1.5}
                    className="w-5 h-5 flex-shrink-0
                                          transition-all duration-300
                                          group-hover:!text-[#1A49BA]
                                          group-hover:-translate-y-3
                                          group-hover:opacity-0"
                  />
                </a>
              </div>
            </div>

          </div>



        </div>
      </div>
    </section>
  );
};

export default LocateContact;
