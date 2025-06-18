import React, { useEffect, useState } from 'react';

const getInitialMode = () => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
};

const DarkModeToggle = () => {
    const [mode, setMode] = useState(getInitialMode());

    useEffect(() => {
        const root = window.document.documentElement;
        if (mode === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', mode);
    }, [mode]);

    const toggleMode = () => setMode(mode === 'dark' ? 'light' : 'dark');

    return (
        <button
            onClick={toggleMode}
            aria-label="Toggle dark mode"
            className="fixed top-4 right-4 z-50 bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 rounded-full p-2 shadow-lg hover:scale-110 transition-transform duration-200 focus:outline-none"
        >
            {mode === 'dark' ? (
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            ) : (
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" stroke="#2563eb" strokeWidth="2" /><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.41-1.41M6.46 6.46L5.05 5.05m12.02 0l-1.41 1.41M6.46 17.54l-1.41 1.41" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" /></svg>
            )}
        </button>
    );
};

export default DarkModeToggle; 