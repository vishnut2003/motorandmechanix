'use client';

import React, { useState } from 'react';

import { X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

const CarServices = dynamic(() => import('./car-services'), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center h-full w-full min-h-[400px]">
            <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    )
});

const FloatingActionButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        key="fab"
                        onClick={() => setIsOpen(true)}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="fixed bottom-16 right-6 z-50 flex items-center justify-center transition-shadow bg-transparent cursor-pointer"
                    >
                        {/* <span className="font-bold text-xs absolute -top-1 -right-1 flex h-4 w-4 z-10">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-yellow-500"></span>
                        </span> */}
                        <div className='bg-[#00711F] rounded-full px-5 py-1'>
                       <h5 className='text-white text-lg font-semibold'>Book Now</h5>
                       </div>
                    </motion.button>
                )}

                {isOpen && (
                    <motion.div
                        key="card"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed left-4 right-4 md:left-auto md:right-6 bottom-6 z-[70] md:w-[420px] bg-white rounded shadow-2xl flex flex-col max-h-[85vh] overflow-y-auto overflow-x-hidden scrollbar-hide"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 bg-gray-50 text-gray-500 rounded-full p-2 shadow-sm hover:bg-gray-100 hover:text-gray-800 z-50 transition-all border border-gray-100 group cursor-pointer"
                        >
                            <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                        </button>

                        <CarServices />
                    </motion.div>
                )}
            </AnimatePresence>
            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </>
    );
};

export default FloatingActionButton;
