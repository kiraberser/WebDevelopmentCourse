'use client'

import { ThemeContext } from "./ThemeContext";
import { useCallback, useState, useEffect } from "react";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    weight: '400',
    subsets: ['cyrillic']
});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = useCallback(() => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    }, []);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) setTheme(savedTheme);
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark:bg-gray-900', theme === 'dark');
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`transition-colors duration-300 ${montserrat.className} ${theme === 'dark' ? 'text-white' : "text-black"}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
