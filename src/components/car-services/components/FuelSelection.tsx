"use client";

import React from 'react';

import { ArrowLeft, Search } from 'lucide-react';
import Image from 'next/image';

interface FuelSelectionProps {
    fuelList: any[];
    searchTerm: string;
    onSearchChange: (value: string) => void;
    onFuelSelect: (fuel: string) => void;
    onBack: () => void;
}

const FuelSelection = ({ fuelList, searchTerm, onSearchChange, onFuelSelect, onBack }: FuelSelectionProps) => {
    const searchList = fuelList.filter((f: any) => f.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="absolute inset-0 bg-white z-20 flex flex-col p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-6">
                <button onClick={onBack} className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                    <ArrowLeft className="w-5 h-5 text-gray-800" />
                </button>
                <h3 className="font-bold text-xl text-gray-800">Select Fuel Type</h3>
            </div>
            <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4.5 h-4.5" />
                <input
                    type="text"
                    placeholder="Search Fuel Type"
                    className="w-full pl-10 pr-4 py-3 bg-white border border-[#9b9b9b] rounded text-[13px] placeholder:text-gray-400 font-medium shadow-sm transition-all"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-3 gap-y-10 gap-x-4 overflow-y-auto overflow-x-hidden flex-grow pb-8 custom-scrollbar px-2">
                {searchList.map((fuel: any) => {
                    const isPetrol = fuel.name.toLowerCase().includes('petrol');
                    const isCNG = fuel.name.toLowerCase().includes('cng');
                    const isDiesel = fuel.name.toLowerCase().includes('diesel');

                    return (
                        <button
                            key={fuel.name}
                            onClick={() => onFuelSelect(fuel.name)}
                            className="flex flex-col items-center gap-4 group transition-all"
                        >
                            <div className="relative w-16 h-16 flex items-center justify-center">
                                {isPetrol && (
                                    <div className="w-full h-full relative">
                                        <Image
                                            src="/images/fuel_type/PETROL.svg"
                                            alt="Petrol"
                                            fill
                                            sizes="(max-width: 768px) 33vw, 20vw"
                                            className="object-contain transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                )}
                                {isCNG && (
                                    <div className="w-full h-full relative">
                                        <Image
                                            src="/images/fuel_type/CNG.svg"
                                            alt="CNG"
                                            fill
                                            sizes="(max-width: 768px) 33vw, 20vw"
                                            className="object-contain transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                )}
                                {isDiesel && (
                                    <div className="w-full h-full relative">
                                        <Image
                                            src="/images/fuel_type/DIESEL.svg"
                                            alt="Diesel"
                                            fill
                                            sizes="(max-width: 768px) 33vw, 20vw"
                                            className="object-contain transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                )}
                                {(!isPetrol && !isCNG && !isDiesel) && (
                                    <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                                        <Search className="text-gray-400 w-6 h-6" />
                                    </div>
                                )}
                                {/* Sparkles as seen in image */}
                                {(isPetrol || isDiesel || isCNG) && (
                                    <div className="absolute top-0 right-0 w-4 h-4 text-yellow-400 animate-pulse pointer-events-none">
                                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.2h7.6l-6.15 4.47 2.35 7.33-6.2-4.5-6.2 4.5 2.35-7.33-6.15-4.47h7.6z" /></svg>
                                    </div>
                                )}
                            </div>
                            <span className="text-[13px] font-bold text-gray-800 text-center transition-all duration-500 group-hover:text-red-500 group-hover:scale-110 origin-top">
                                {fuel.name}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default FuelSelection;
