import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to home if already logged in
        if (user) {
            navigate('/home');
        }
    }, [user, navigate]);

    const login = (username, password) => {
        // Simulate authentication
        if (username === 'Kuku' && password === 'bata') {
            setUser({ username: 'Kuku' });
        } else {
            alert('Invalid credentials');
        }
    };

    const logout = () => {
        setUser(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
