"use client";

import React from 'react';

import { ArrowLeft, Search } from 'lucide-react';
import Image from 'next/image';

import { Manufacturer } from '../data';

interface BrandSelectionProps {
    brands: Manufacturer[];
    searchTerm: string;
    onSearchChange: (value: string) => void;
    onBrandSelect: (brand: Manufacturer) => void;
    onBack: () => void;
}

const BrandSelection = ({ brands, searchTerm, onSearchChange, onBrandSelect, onBack }: BrandSelectionProps) => {
    return (
        <div className="absolute inset-0 bg-white z-20 flex flex-col p-4 rounded-lg">
            <div className="flex items-center gap-1.5 mb-4">
                <button onClick={onBack} className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                    <ArrowLeft className="w-5 h-5 text-black" />
                </button>
                <p className="font-semibold text-base text-black">Select Manufacturer</p>
            </div>
            <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4.5 h-4.5" />
                <input
                    type="text"
                    placeholder="Search Brands"
                    className="w-full pl-10 pr-4 py-3 bg-white border border-[#9b9b9b] rounded text-[13px] placeholder:text-gray-400 font-medium shadow-sm transition-all"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>
            <div className="grid grid-cols-3 gap-y-8 gap-x-2 overflow-y-auto overflow-x-hidden flex-grow pb-8 custom-scrollbar px-1">
                {brands.map((brand) => (
                    <button
                        key={brand.id}
                        onClick={() => onBrandSelect(brand)}
                        className="flex flex-col items-center gap-1.5 group transition-all cursor-pointer"
                    >
                        <div className="relative w-16 h-12">
                            {brand.icon ? (
                                <Image
                                    src={brand.icon}
                                    alt={brand.name}
                                    fill
                                    sizes="(max-width: 768px) 33vw, 20vw"
                                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-50 rounded-lg border border-dashed border-gray-200 flex items-center justify-center">
                                    <span className="text-gray-300 text-[10px] font-bold uppercase">{brand.name[0]}</span>
                                </div>
                            )}
                        </div>
                        <span className="text-[10px] font-bold text-gray-700 text-center uppercase tracking-tight leading-tight group-hover:text-red-500 transition-transform duration-500 group-hover:scale-110 origin-top">
                            {brand.name}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BrandSelection;
