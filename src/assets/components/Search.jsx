import React from "react";
import { useState, useEffect } from "react";

export default function Search() {

    const [isDark, setDark] = useState(true);
    
    useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains('dark');
        setDark(isDarkMode);
    });

    function toggleTheme() {
        const root = document.documentElement;
        if (root.classList.contains('dark')) {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setDark(false);
        } else {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setDark(true);
        }
    }
    
    return (
    <>
        <div className="py-3 px-4 rounded-2xl relative bg-white dark:bg-white/20">
            <div className="flex flex-row gap-2 justify-between items-center">
                <img src="/img/logo.svg" className="h-10 w-auto" alt="Logo" />
                <a href="#" onClick={() => toggleTheme()} className="p-3 rounded-2xl group duration-300 bg-gray-700/20 dark:bg-white/40 dark:hover:bg-white/50">
                    <img src={`/img/icon-${isDark ? 'sun' : 'moon'}.svg`} className="h-6 opacity-80 group-hover:opacity-100 duration-300" alt={`Modo ${isDark ? 'oscuro' : 'claro'}`} />
                </a>
            </div>
        </div>
    </>
);
}