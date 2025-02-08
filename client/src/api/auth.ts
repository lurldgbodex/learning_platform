import api from "./axios";

interface LoginData {
    email: string;
    password: string;
}

interface RegisterData {
    email: string;
    password: string;
}

export const login = async (data: LoginData) => {
    try {
        const response = await api.post(`/auth/login`, data);
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export const register = async (data: RegisterData) => {
    try{
        const response = await api.post(`/auth/register`, data);
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export const refreshToken = async (refreshToken: string) => {
    try {
        const response = await api.post('/auth/refresh-token', { refreshToken });
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export const logout = async () => {
    const response = await api.post('/auth/logout');
    return response.data;
}