import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Manufacturer, Model } from './data';
import LeadForm from './components/LeadForm';
import BrandSelection from './components/BrandSelection';
import ModelSelection from './components/ModelSelection';
import FuelSelection from './components/FuelSelection';

import { localsConst, safeSetItem } from '@/utils/storage.utils';

import brandsData from './car-brands.json';

const CarServices = () => {
    const [step, setStep] = useState<'initial' | 'brands' | 'models' | 'fuels'>('initial');
    const [brands, setBrands] = useState<Manufacturer[]>([]);
    const [models, setModels] = useState<Model[]>([]);
    const [selectedBrand, setSelectedBrand] = useState<Manufacturer | null>(null);
    const [selectedModel, setSelectedModel] = useState<Model | null>(null);
    const [selectedFuel, setSelectedFuel] = useState<string | null>(null);
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState<{ car?: string; phone?: string }>({});
    const [searchTerm, setSearchTerm] = useState('');
    const [syncing, setSyncing] = useState(false);

    useEffect(() => {
        const initBrands = async () => {
            try {
                const localBrands = localStorage.getItem(localsConst.cached_brands.key);
                if (localBrands) {
                    setBrands(JSON.parse(localBrands));
                } else {
                    setBrands(brandsData as Manufacturer[]);
                    safeSetItem(localsConst.cached_brands.key, brandsData);
                }
            } catch (error) {
                console.error("Failed to load brands:", error);
            }
        };
        initBrands();
    }, []);

    const handleBrandSelect = async (brand: Manufacturer) => {
        setSelectedBrand(brand);
        setStep('models');
        setSearchTerm('');
        setModels([]);
        setErrors((prev) => ({ ...prev, car: undefined }));

        if (brand.id) {
            const cacheKey = `${localsConst.cached_models.key}${brand.id}`;
            const localModels = localStorage.getItem(cacheKey);

            if (localModels) {
                setModels(JSON.parse(localModels));
            } else {
                setSyncing(true);
                try {
                    const res = await fetch(`/api/sync-geomechanic-vehicles?action=models&brandId=${brand.id}`);
                    const result = await res.json();
                    if (result.success) {
                        setModels(result.data);
                        safeSetItem(cacheKey, result.data);
                    }
                } catch (error) {
                    console.error(`Failed to sync models for brand ${brand.name}:`, error);
                } finally {
                    setSyncing(false);
                }
            }
        }
    };

    const handleModelSelect = (model: Model) => {
        setSelectedModel(model);
        setStep('fuels');
        setSearchTerm('');
        setErrors((prev) => ({ ...prev, car: undefined }));
    };

    const handleFuelSelect = (fuel: string) => {
        setSelectedFuel(fuel);
        setSearchTerm('');
        setStep('initial');
        setErrors((prev) => ({ ...prev, car: undefined }));
    };

    const handlePhoneChange = (value: string) => {
        setPhone(value);
        if (errors.phone) {
            setErrors((prev) => ({ ...prev, phone: undefined }));
        }
    };

    const handleCheckPrices = () => {
        const validationErrors: { car?: string; phone?: string } = {};
        if (!selectedBrand || !selectedModel || !selectedFuel) {
            validationErrors.car = "Please select your car brand, model, and fuel type.";
        }

        // const normalizedPhone = phone.replace(/\D/g, "");
        // const isPhoneValid =
        //     normalizedPhone.length === 10 ||
        //     (normalizedPhone.length === 12 && normalizedPhone.startsWith("91"));

        // if (!normalizedPhone) {
        //     validationErrors.phone = "Please enter your mobile number.";
        // } else if (!isPhoneValid) {
        //     validationErrors.phone = "Please enter a valid 10-digit mobile number.";
        // }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            // if (validationErrors.car) {
            //     if (!selectedBrand) {
            //         setStep('brands');
            //     } else if (!selectedModel) {
            //         setStep('models');
            //     } else if (!selectedFuel) {
            //         setStep('fuels');
            //     }
            // }
            return;
        }

        setErrors({});

        const lines = ["Hi Motor & Mechanix, I want a quote."];
        if (selectedBrand?.name) {
            lines.push(`Brand: ${selectedBrand.name}`);
        }
        if (selectedModel?.name) {
            lines.push(`Model: ${selectedModel.name}`);
        }
        if (selectedFuel) {
            lines.push(`Fuel: ${selectedFuel}`);
        }
        // const phoneValue = phone.replace(/\D/g, "");
        // if (phoneValue) {
        //     lines.push(`Phone: ${phoneValue}`);
        // }
        lines.push("Location: Noida");

        const message = lines.join("\n");

        const whatsappNumber = "918383838300";
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const filteredBrands = useMemo(() => {
        return brands.filter(m =>
            m.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [brands, searchTerm]);

    const filteredModels = useMemo(() => {
        return models.filter(m =>
            m.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [models, searchTerm]);

    return (
        <div className="bg-white w-full h-full font-sans relative overflow-hidden flex flex-col">
            <LeadForm
                selectedBrand={selectedBrand}
                selectedModel={selectedModel}
                selectedFuel={selectedFuel}
                phone={phone}
                errors={errors}
                onOpenBrands={() => setStep('brands')}
                onPhoneChange={handlePhoneChange}
                onCheckPrices={handleCheckPrices}
            />

            <AnimatePresence>
                {step !== 'initial' && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="absolute inset-0 bg-white z-20"
                    >
                        {step === 'brands' && (
                            <BrandSelection
                                brands={filteredBrands}
                                searchTerm={searchTerm}
                                onSearchChange={setSearchTerm}
                                onBrandSelect={handleBrandSelect}
                                onBack={() => setStep('initial')}
                            />
                        )}
                        {step === 'models' && (
                            <ModelSelection
                                models={filteredModels}
                                searchTerm={searchTerm}
                                syncing={syncing}
                                onSearchChange={setSearchTerm}
                                onModelSelect={handleModelSelect}
                                onBack={() => setStep('brands')}
                            />
                        )}
                        {step === 'fuels' && (
                            <FuelSelection
                                fuelList={(selectedModel as any)?.fuel || []}
                                searchTerm={searchTerm}
                                onSearchChange={setSearchTerm}
                                onFuelSelect={handleFuelSelect}
                                onBack={() => setStep('models')}
                            />
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #eee;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #ddd;
                }
            `}</style>
        </div>
    );
};

export default CarServices;
