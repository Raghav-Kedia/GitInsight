import React from 'react';

const RecentSearches = ({ searches, onSelect, onClear }) => {
    if (!searches.length) return null;
    return (
        <div className="flex items-center gap-2 flex-wrap mb-2">
            <span className="text-xs text-gray-500 dark:text-gray-400 mr-2">Recent:</span>
            {searches.map((username) => (
                <button
                    key={username}
                    onClick={() => onSelect(username)}
                    className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-150 shadow-sm border border-gray-200 dark:border-gray-700"
                >
                    {username}
                </button>
            ))}
            <button
                onClick={onClear}
                className="ml-2 px-2 py-1 rounded bg-red-100 dark:bg-red-900 text-xs text-red-600 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800 transition-colors duration-150"
                title="Clear recent searches"
            >
                Clear
            </button>
        </div>
    );
};

export default RecentSearches; 