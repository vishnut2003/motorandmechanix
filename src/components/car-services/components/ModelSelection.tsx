"use client";

import React from 'react';

import { ArrowLeft, Search } from 'lucide-react';
import Image from 'next/image';

import { Model } from '../data';

interface ModelSelectionProps {
    models: Model[];
    searchTerm: string;
    syncing: boolean;
    onSearchChange: (value: string) => void;
    onModelSelect: (model: Model) => void;
    onBack: () => void;
}

const ModelSelection = ({ models, searchTerm, syncing, onSearchChange, onModelSelect, onBack }: ModelSelectionProps) => {
    return (
        <div className="absolute inset-0 bg-white z-20 flex flex-col p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-6">
                <button onClick={onBack} className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                    <ArrowLeft className="w-5 h-5 text-gray-800" />
                </button>
                <h3 className="font-bold text-xl text-gray-800">Select Model</h3>
            </div>
            <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4.5 h-4.5" />
                <input
                    type="text"
                    placeholder="Search Models"
                    className="w-full pl-10 pr-4 py-3 bg-white border border-[#9b9b9b] rounded text-[13px] placeholder:text-gray-400 font-medium shadow-sm transition-all"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>
            <div className="grid grid-cols-3 gap-y-8 gap-x-2 overflow-y-auto overflow-x-hidden flex-grow pb-8 custom-scrollbar px-1">
                {models.map((model) => (
                    <button
                        key={model.id}
                        onClick={() => onModelSelect(model)}
                        className="flex flex-col items-center gap-3 group transition-all"
                    >
                        <div className="w-full aspect-[4/3] relative">
                            {model.thumbnail ? (
                                <Image
                                    src={model.thumbnail}
                                    alt={model.name}
                                    fill
                                    sizes="(max-width: 768px) 33vw, 25vw"
                                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-50 rounded-lg border border-dashed border-gray-200 flex items-center justify-center">
                                    <span className="text-gray-300 text-[10px] font-bold uppercase">{model.name[0]}</span>
                                </div>
                            )}
                        </div>
                        <span className="text-[12px] font-bold text-gray-800 text-center leading-tight px-1 transition-all duration-500 group-hover:text-red-600 group-hover:scale-110 origin-top">
                            {model.name}
                        </span>
                    </button>
                ))}
            </div>
            {syncing && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur px-4 py-2 rounded-full shadow-lg border border-red-50 flex items-center gap-3 z-30 scale-90 md:scale-100">
                    <div className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-[11px] font-bold text-gray-600 uppercase tracking-widest whitespace-nowrap">Fetching models...</span>
                </div>
            )}
        </div>
    );
};

export default ModelSelection;
