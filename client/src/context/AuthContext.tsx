import { createContext, useContext, useEffect, useState } from "react";
import { login, logout, register } from "../api/auth";

interface AuthContextType {
    user: { id: string; email: string; role: string } | null;
    login: ( email: string, password: string ) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<AuthContextType['user']>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogin = async (email: string, password: string) => {
        const response = await login({ email, password });
        localStorage.setItem('user', JSON.stringify(response.user));
        setUser(response.user);
    };

    const handleRegister = async ( email: string, password: string) => {
        const response = await register({ email, password });
        localStorage.setItem('user', JSON.stringify(response.user));
        setUser(response.user);
    };

    const handleLogout = async () =>{
        await logout();
        localStorage.removeItem('user');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login: handleLogin, register: handleRegister, logout: handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context;
}