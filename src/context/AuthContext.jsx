import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Load user from localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error('Error parsing stored user:', error);
                localStorage.removeItem('user');
            }
        }
        setIsLoading(false);
    }, []);

    const login = (email, password) => {
        // Extract username from email (part before @)
        const username = email.split('@')[0];

        const userData = {
            email,
            username,
            loginTime: new Date().toISOString()
        };

        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return userData;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const signup = (fullName, email, password) => {
        // Get existing users from localStorage
        const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

        // Check if email already exists
        const emailExists = existingUsers.some(u => u.email.toLowerCase() === email.toLowerCase());
        if (emailExists) {
            return { success: false, error: 'Email already registered. Please sign in instead.' };
        }

        // Create new user
        const newUser = {
            fullName,
            email,
            password, // In production, NEVER store passwords client-side!
            registeredAt: new Date().toISOString()
        };

        // Add to registered users
        existingUsers.push(newUser);
        localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));

        // Auto-login the user
        const username = email.split('@')[0];
        const userData = {
            email,
            username,
            fullName,
            loginTime: new Date().toISOString()
        };

        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));

        return { success: true, user: userData };
    };

    const value = {
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
        signup
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
