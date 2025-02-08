import axios from "axios";
import { refreshToken } from "./auth";
import { clearTokens, getTokens, setTokens } from "../utils/auth-util";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
});

api.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
},
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use((response) => response, async (error) => {
    const originalRequest = error.config;
    if (!error.response) {
        return Promise.reject({ message: 'Network error, please try again later.'});

    }

    const status = error.response.status;

    switch(status) {
        case 400:
            return Promise.reject({ message: error.response.data});
        case 401:
            if (!originalRequest.url.includes('/auth/refresh-token')) {
                return Promise.reject(error.response.data)
            }
            if (!originalRequest._retry) {
                originalRequest._retry = true;
                try {
                    const tokens = getTokens();
                    if (tokens.refreshToken) {
                        const  {access_token, refresh_token } = await refreshToken(tokens.refreshToken);
                        setTokens(access_token, refresh_token);

                        originalRequest.headers.Authorization = `Bearer ${access_token}`;
                        return api(originalRequest);
                    }
                } catch (refreshError) {
                    clearTokens();
                    window.location.href='/login';
                    return Promise.reject(refreshError);
                }
            }
            break;
        case 403:
            return Promise.reject({ message: 'access denied'})

        case 404:
            return Promise.reject({ message: 'resource not found.'})
        
        case 409:
            return Promise.reject({ message: error.response.data.message })
        
        case 500:
            return Promise.reject({ message: 'Server error, please try again later'})

        default:
            return Promise.reject({ message: 'An unknown error occurred'});
        }
    }
);

export default api;