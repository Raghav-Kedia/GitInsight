import React from 'react';

const ProfileCard = ({ user }) => {
    if (!user) return null;
    return (
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center gap-3 transition-colors duration-300 w-full">
            <img
                src={user.avatar_url}
                alt={user.name || user.login}
                className="w-24 h-24 rounded-full border-4 border-blue-200 dark:border-blue-800 shadow mb-2 object-cover"
            />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center">{user.name || user.login}</h2>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-mono">@{user.login}</span>
            {user.bio && <p className="text-gray-500 dark:text-gray-300 text-center text-sm mt-1">{user.bio}</p>}
            <div className="flex gap-4 mt-2">
                <span className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20"><path d="M13 7a3 3 0 11-6 0 3 3 0 016 0z" /><path fillRule="evenodd" d="M2 13.5A4.5 4.5 0 016.5 9h7a4.5 4.5 0 014.5 4.5v.75A2.75 2.75 0 0115.25 17h-10.5A2.75 2.75 0 012 14.25v-.75z" clipRule="evenodd" /></svg>
                    {user.followers} followers
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20"><path d="M8 9a3 3 0 016 0v1a3 3 0 01-6 0V9z" /><path fillRule="evenodd" d="M2 13.5A4.5 4.5 0 016.5 9h7a4.5 4.5 0 014.5 4.5v.75A2.75 2.75 0 0115.25 17h-10.5A2.75 2.75 0 012 14.25v-.75z" clipRule="evenodd" /></svg>
                    {user.following} following
                </span>
            </div>
        </div>
    );
};

export default ProfileCard; 