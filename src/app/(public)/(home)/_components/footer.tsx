import React from 'react';
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";


const Footer = () => {
  const menuItems = [
    { id: 498, label: 'Our Workshop', href: 'https://motorandmechanix.co.in/workshop/' },
    { id: 497, label: 'Our Services', href: 'https://motorandmechanix.co.in/services/' },
    { id: 495, label: 'Brands', href: 'https://motorandmechanix.co.in/brands-we-work/' },
    { id: 496, label: 'Why Choose Us for Car Repairs', href: 'https://motorandmechanix.co.in/why-us/' },
    { id: 895, label: 'Blogs', href: 'https://motorandmechanix.co.in/blogs/' },
    { id: 494, label: 'Contact Us | Expert Car Repair Solutions in Noida', href: 'https://motorandmechanix.co.in/contact-us/' },
    { id: 1020, label: 'Tyres & Wheel Care', href: 'https://motorandmechanix.co.in/tyres-wheel-care-for-four-wheelers/' }
  ];

  const contactInfo = [
    {
      icon: '/images/footer/address-icon.png',
      href: 'https://maps.app.goo.gl/YBoWXsXybNfkgeGf9',
      text: 'Plot No 1 , Khasra 120 , Next to Kajaria Tiles Showroom , Near 14th Avenue Gaur City-2 , Noida',
      type: 'address',
      alt: 'Address'
    },
    {
      icon: '/images/footer/phone-icon.png',
      href: 'tel:083838 38300',
      text: '083838 38300',
      type: 'phone',
      alt: 'Phone'
    },
    {
      icon: '/images/footer/whatsapp-icon.png',
      href: 'https://api.whatsapp.com/send?phone=8383838300&text=Hi+there+%F0%9F%91%8B%2C+Can+I+have+a+quote%2C+please',
      text: '083838 38300',
      type: 'whatsapp',
      alt: 'WhatsApp'
    },
    {
      icon: '/images/footer/email-icon.png',
      href: 'mailto:contact@motorandmechanix.com',
      text: 'contact@motorandmechanix.com',
      type: 'email',
      alt: 'Email'
    }
  ];

  const socialLinks = [
    {
      icon: '/images/footer/instagram-icon.png',
      href: 'https://instagram.com/motorandmechanix?igshid=OGQ5ZDc2ODk2ZA==',
      label: 'Instagram'
    },
    {
      icon: '/images/footer/facebook-icon.png',
      href: 'https://www.facebook.com/motorandmechanix?mibextid=ZbWKwL',
      label: 'Facebook'
    }
  ];

  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 pt-12 pb-5 md:pt-20 md:pb-10">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 md:mb-12 mb-4">

          {/* Left Column - CTA & Social */}
          <div className="space-y-6 ">
            <h2 className="text-[28px] md:text-[38px] font-medium text-white sm:leading-10 leading-8">
              Best Car Service & Repair Shop Near You.
            </h2>
            <div className='flex md:block justify-between items-center'>
              <a
                href="https://motorandmechanix.co.in/services/"
                className="group btn yellow w-fit !flex items-center sm:gap-6 gap-4 !mt-0
                        border border-transparent
                        transition-all duration-300
                        hover:!bg-white hover:!border-[#FFD700]"
              >
                <span className="transition-colors duration-300 group-hover:!text-[#FFD700]">
                  Schedule A Pickup
                </span>

                <ArrowUpRight
                  strokeWidth={1.5}
                  className="w-5 h-5 flex-shrink-0
                          transition-all duration-300
                          group-hover:!text-[#FFD700]
                          group-hover:-translate-y-3
                          group-hover:opacity-0"
                />
              </a>

              {/* Social Links */}
              <div className="flex sm:gap-3 gap-2 md:mt-6 mt-0">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                    aria-label={social.label}
                  >
                    <Image
                      src={social.icon}
                      alt={social.label}
                      width={32}
                      height={32}
                      className="sm:w-8 w-6 sm:h-8 h-6"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column - Navigation Menu */}
          <div className='md:mb-5 md:pb-0 pb-12 md:border-l md:border-0 border-b border-white  md:border-r md:border-slate-600  md:order-1 order-2'>
            <nav>
              <ul className='space-y-4 md:w-75 pr-2 md:ml-auto'>
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="text-white hover:text-[#FFCE32] leading-7 text-[21px] sm:text-[29px] font-medium transition-colors duration-300 inline-block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right Column - Contact Information */}
          <div className="pr-16 md:py-0 py-8 md:order-2 order-1 md:border-t-0 border-t md:border-b-0 border-b border-white">
            <h3 className="md:text-xl text-md  font-semibold text-white md:mb-6 mb-3">
              Contact us
            </h3>
            <div className="space-y-5">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.type === 'address' ? '_blank' : undefined}
                  rel={contact.type === 'address' ? 'noopener noreferrer' : undefined}
                  className="flex gap-3 items-center text-white group"
                >
                  <Image
                    src={contact.icon}
                    alt={contact.alt}
                    width={20}
                    height={20}
                    className="sm:w-5 w-4 sm:h-5 h-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="sm:text-[17px] text-[14px] leading-5">
                    {contact.text}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-5">
          <div className="flex justify-between items-center text-white sm:text-[16px] text-[12px]">
            <p>Motor & Mechanix © 2026</p>
            <p>
              Design Credits:  Art Attack{' '}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;