import React from 'react';

const UserInput = ({ value, onChange, onSubmit, loading }) => {
    return (
        <form
            className="flex flex-col sm:flex-row items-center gap-4 w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 transition-colors duration-300"
            onSubmit={onSubmit}
        >
            <input
                type="text"
                placeholder="Enter GitHub username..."
                value={value}
                onChange={onChange}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500"
                autoFocus
                disabled={loading}
                required
            />
            <button
                type="submit"
                className="relative overflow-hidden px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 focus:bg-blue-800 transition-colors duration-200 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={loading}
            >
                <span className="z-10 relative">{loading ? 'Loading...' : 'Search'}</span>
                {/* Ripple effect */}
                <span className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
            </button>
        </form>
    );
};

export default UserInput; 