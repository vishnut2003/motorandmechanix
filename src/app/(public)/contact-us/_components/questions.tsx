"use client";

import { useState } from "react";
import React from "react";

const faqs = [
    {
        question: "Where is your workshop located?",
        answer:
            "Our workshop is conveniently located at Plot no 1, Khasra 120, Next to Kajaria Tiles Showroom, Near 14th Avenue, Gaur City-2. You can find detailed directions on our “Location” section.",
    },
    {
        question: "What are your operating hours?",
        answer:
            "We are open from 9:00am to 7:00pm. We are open every day of the week, including weekends.",
    },
    {
        question: "Can I drop off my car outside of your regular business hours?",
        answer:
            "Unfortunately, we cannot accept drop-offs outside of our regular business hours. However, you can arrange for early drop-offs or late pickups by contacting us in advance.",
    },
    {
        question:
            "How do I get in touch with your team for inquiries or to schedule an appointment?",
        answer:
            "You can reach us by phone at 8383838300 or by using the contact form on our “Contact Us” page. We’ll get back to you as soon as possible.",
    },
    {
        question:
            "Do you offer warranties on your car repair and maintenance services?",
        answer:
            "We guarantee to put parts that are promised to you, which most of the time are OEM and OES.",
    },
    {
        question:
            "Is there an additional cost for the pick-up and drop-off service?",
        answer:
            "We may offer complimentary pick-up and drop-off services within a 10km radius of our workshop. However, there may be a nominal fee for more extended distances.",
    },
    {
        question:
            "How far does your pick-up and drop-off service extend from your workshop?",
        answer:
            "Our pick-up and drop-off service typically covers a radius of 10km from our workshop.",
    },
    {
        question:
            "How long does it typically take to complete a standard car repair or maintenance service?",
        answer:
            "The duration of service can vary depending on the type of repair or maintenance required but for standard service it takes 3–4 hours.",
    },
    {
        question:
            "Is there a minimum service requirement to qualify for pick-up and drop-off services?",
        answer:
            "We offer pick-up and drop-off services for all service types. There is no minimum service requirement.",
    },
];


const QuestionSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="md:py-20 py-10 md:px-20 px-5 bg-[#121212]">
            <div>
                <p className="text-white md:text-[17px] text-[16px] md:text-start text-center">
                    Welcome to our Frequently Asked Questions (FAQ) section, designed to provide you with
                    quick and informative answers to common queries. We understand that you may have questions
                    about our products, services, or policies, and we're here to address them. Our FAQ section
                    is carefully curated to cover a wide range of topics, including order processing, shipping
                    and delivery, returns and exchanges, product specifications.
                </p>
            </div>
            <div className="md:flex gap-5 mt-14">
                <div>
                    <p className="bg-[#ffce32] text-black px-8 py-1 my-3.5 text-[20px] text-center md:text-[22px] rounded-full font-medium">Frequently Asked Questions</p>
                </div>
                <div className="max-w-4xl ml-auto md:px-4">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = activeIndex === index;

                            return (
                                <div
                                    key={index}
                                    className="border-b border-[#d9d9d9] overflow-hidden mb-0"
                                >
                                    {/* Question */}
                                    <button
                                        onClick={() =>
                                            setActiveIndex(isOpen ? null : index)
                                        }
                                        className="w-full flex items-center md:gap-0 gap-4 justify-between pr-2 py-3.5 text-left text-white  transition"
                                    >
                                        <h6 className="md:text-[20px] text-[16px] hover:text-[#ffce32] font-semibold">
                                            {faq.question}
                                        </h6>

                                        {/* Icon */}
                                        <span
                                            className={`md:w-3 w-2 md:h-3 h-2 border-r-2 border-b-2  border-white transform transition-transform ${isOpen ? "rotate-225" : "rotate-45"}`}
                                        />
                                    </button>

                                    {/* Answer */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 py-2" : "max-h-0"
                                            }`}
                                    >
                                        <p className="text-white text-[15px] md:text-[17px] leading-tight mb-5">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>

                </div>
            </div>
        </section>
    );
};

export default QuestionSection;
