export const localsConst = {
    cached_brands: {
        key: "cached_brands"
    },
    cached_models: {
        key: "cachedModels_"
    },
    cached_fuels: {
        key: "cached_fuels"
    },
}

export const safeSetItem = (key: string, value: any) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error: any) {
            if (error.name === 'QuotaExceededError' || error.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                console.warn("LocalStorage quota exceeded. Clearing old model cache...");
                Object.keys(localStorage).forEach(k => {
                    if (k.startsWith(localsConst.cached_models.key)) {
                        localStorage.removeItem(k);
                    }
                });
                try {
                    localStorage.setItem(key, JSON.stringify(value));
                } catch (retryError) {
                    console.error("Failed to cache data even after cleanup:", retryError);
                }
            }
        }
    };