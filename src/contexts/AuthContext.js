import { createContext, useContext, useState } from "react";
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const signIn = async (username, email, password) => {
        setLoading(true);

        try {
            const response = await axios.post(`https://truex-backend.vercel.app/api/admin/login`, { username, email, password });

            console.log(response);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
    
    const values = {
        signIn,
        error,
        setError,
        loading,
        logout
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);