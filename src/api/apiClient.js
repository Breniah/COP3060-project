import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// Safely attach interceptor (so Jest doesn't blow up if interceptors is undefined)
if (apiClient.interceptors && apiClient.interceptors.request) {
    apiClient.interceptors.request.use((config) => {
        // In browser/JSDOM this is fine; in Node without window it will skip
        const token =
            typeof window !== "undefined"
                ? window.localStorage.getItem("token")
                : null;

        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    });
}

export default apiClient;
