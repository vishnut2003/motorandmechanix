"use client";

import React from 'react';
import { ChevronDown, Star } from 'lucide-react';
import { Manufacturer, Model } from '../data';

interface LeadFormProps {
    selectedBrand: Manufacturer | null;
    selectedModel: Model | null;
    selectedFuel: string | null;
    phone: string;
    errors?: {
        car?: string;
        phone?: string;
    };
    onOpenBrands: () => void;
    onPhoneChange: (value: string) => void;
    onCheckPrices: () => void;
}

const LeadForm = ({
    selectedBrand,
    selectedModel,
    selectedFuel,
    phone,
    errors,
    onOpenBrands,
    onPhoneChange,
    onCheckPrices,
}: LeadFormProps) => {
    const carError = Boolean(errors?.car);
    const phoneError = Boolean(errors?.phone);

    return (
        <div className="bg-white p-4 md:p-8 w-full font-sans relative overflow-hidden min-h-[550px] flex flex-col">
            <h2 className="text-[1.5rem] md:text-[2rem] font-semibold text-[#282828] leading-[1.1] my-5 tracking-wide">
                Experience The Best Car Services In Noida
            </h2>
            <p className="text-black text-[0.875rem] md:text-[0.9375rem] mb-3 font-normal tracking-wider">
                {"Get instant quotes for your car service"}
            </p>

            <div className="space-y-3 mb-4 relative">
                {/* Location Dropdown */}
                <div className="relative">
                    <button className="w-full border border-[#9b9b9b] rounded p-3.5 bg-white text-left font-bold text-[#4a4a4a] transition-colors uppercase text-sm">
                        <span>NOIDA</span>
                    </button>
                </div>

                {/* Car Model Dropdown */}
                <div className="relative">
                    <button
                        onClick={onOpenBrands}
                        className={`w-full flex items-center justify-between border rounded p-3.5 bg-white text-left text-[#4a4a4a] hover:border-gray-600 transition-all duration-300 uppercase text-sm hover:scale-[1.01] hover:shadow-sm cursor-pointer ${
                            carError ? 'border-red-500' : 'border-[#9b9b9b]'
                        }`}
                        aria-invalid={carError}
                    >
                        <span className={selectedModel ? 'font-bold text-[#4a4a4a]' : 'font-semibold text-gray-400'}>
                            {selectedModel ? `${selectedBrand?.name} ${selectedModel?.name}, ${selectedFuel}` : 'SELECT YOUR CAR'}
                        </span>
                        <ChevronDown className="w-5 h-5" />
                    </button>
                    {carError && (
                        <p className="mt-1 text-xs font-semibold text-red-600 uppercase tracking-wide">
                            {errors?.car}
                        </p>
                    )}
                </div>

                {/* Mobile Number Input */}
                {/* <div>
                    <input
                        type="tel"
                        placeholder="ENTER MOBILE NUMBER"
                        value={phone}
                        onChange={(e) => onPhoneChange(e.target.value)}
                        className={`w-full border rounded p-3.5 text-[#4a4a4a] placeholder:font-semibold placeholder:text-gray-400 font-bold uppercase text-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-sm focus:scale-[1.02] focus:shadow-md outline-none ${
                            phoneError ? 'border-red-500' : 'border-[#9b9b9b]'
                        }`}
                        aria-invalid={phoneError}
                    />
                    {phoneError && (
                        <p className="mt-1 text-xs font-semibold text-red-600 uppercase tracking-wide">
                            {errors?.phone}
                        </p>
                    )}
                </div> */}

                {/* CTA Button */}
                <button
                    type="button"
                    onClick={onCheckPrices}
                    className="w-full bg-[#e02020] hover:bg-[#d6352c] text-white font-bold py-3 rounded uppercase tracking-wider transition-all duration-300 shadow-md text-sm mt-2 hover:scale-[1.01] hover:shadow-lg"
                >
                    CHECK PRICES FOR FREE
                </button>
                <div>
                 <a href="tel:08383838300"
                      className="flex items-center justify-center gap-2 mx-auto bg-[#00711F] font-bold uppercase py-3 text-center rounded text-white w-full shadow-md text-sm">
                    CALL US NOW
                </a>
                </div>
            </div>

            {/* Footer Stats */}
            <div className="pt-4 flex items-center justify-center">
                <div className="flex flex-col items-center flex-1">
                    <div className="flex items-center gap-1 font-bold text-[#008000]">
                        <Star className="w-[2rem] h-[2rem] fill-current" />
                        <div className="flex items-center gap-0.5">
                            <span className='text-xl'>{"4.5"}</span>
                            <span className='text-xl'>{"/"}</span>
                            <span className='text-base'>{"5"}</span>
                        </div>
                    </div>
                    <span className="text-[10px] text-gray-600 text-center font-semibold uppercase tracking-wider">Based on</span>
                    <span className="text-[10px] text-gray-600 text-center font-semibold uppercase tracking-wider">Reviews</span>
                </div>

                <div className="h-10 w-px bg-gray-600 mx-4"></div>

                <div className="flex flex-col items-center flex-1">
                    <span className="font-bold text-xl text-[#282828] leading-none mb-1">{"10,000+"}</span>
                    <span className="text-[10px] text-gray-600 text-center font-semibold uppercase tracking-tighter">Happy</span>
                    <span className="text-[10px] text-gray-600 text-center font-semibold uppercase tracking-tighter">Customers</span>
                </div>
            </div>
        </div>
    );
};

export default LeadForm;
