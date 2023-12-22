// src/composables/useEnv.js
export default function useEnv() {
    const apiUrl = import.meta.env.VITE_API_URL;
    return { apiUrl };
};
