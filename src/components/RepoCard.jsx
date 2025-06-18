import React from 'react';
import {
    formatSizeKB,
    formatRelativeTime,
    formatLicense,
} from '../utils/formatRepoMeta';

const icon = {
    size: (
        <svg className="w-4 h-4 inline-block mr-1 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7h18" /></svg>
    ),
    issues: (
        <svg className="w-4 h-4 inline-block mr-1 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" /></svg>
    ),
    updated: (
        <svg className="w-4 h-4 inline-block mr-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
    ),
    topic: (
        <svg className="w-3 h-3 inline-block mr-1 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /></svg>
    ),
    visibility: (
        <svg className="w-4 h-4 inline-block mr-1 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M1.5 12s4-7 10.5-7 10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z" /><circle cx="12" cy="12" r="3" /></svg>
    ),
    license: (
        <svg className="w-4 h-4 inline-block mr-1 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="7" y="4" width="10" height="16" rx="2" /><path d="M7 8h10" /></svg>
    ),
    archived: (
        <svg className="w-4 h-4 inline-block mr-1 text-yellow-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
    ),
    disabled: (
        <svg className="w-4 h-4 inline-block mr-1 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="4" y1="4" x2="20" y2="20" /><rect x="3" y="7" width="18" height="13" rx="2" /></svg>
    ),
};

const RepoCard = ({ repo }) => {
    return (
        <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full group block bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 border border-transparent hover:border-blue-400 dark:hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 truncate">
                        {repo.name}
                    </h2>
                    {repo.archived && (
                        <span className="ml-2 px-2 py-0.5 rounded bg-yellow-100 dark:bg-yellow-900 text-xs text-yellow-800 dark:text-yellow-200 flex items-center gap-1">
                            {icon.archived} Archived
                        </span>
                    )}
                    {repo.disabled && (
                        <span className="ml-2 px-2 py-0.5 rounded bg-red-100 dark:bg-red-900 text-xs text-red-700 dark:text-red-300 flex items-center gap-1">
                            {icon.disabled} Disabled
                        </span>
                    )}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 line-clamp-2 min-h-[2.5em]">
                    {repo.description || <span className="italic text-gray-300">No description</span>}
                </p>
                {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-1">
                        {repo.topics.map((topic) => (
                            <span key={topic} className="inline-flex items-center px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900 text-xs text-purple-700 dark:text-purple-200 font-medium">
                                {icon.topic} {topic}
                            </span>
                        ))}
                    </div>
                )}
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-600 dark:text-gray-300 mt-2">
                    {repo.language && (
                        <span className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-blue-500 inline-block mr-1" />
                            {repo.language}
                        </span>
                    )}
                    {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                            {repo.stargazers_count}
                        </span>
                    )}
                    {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm10 2v.217l-5 3.125-5-3.125V5a1 1 0 011-1h8a1 1 0 011 1zm-1.197 3.382L10 11.118l-3.803-2.736A1 1 0 016 8h8a1 1 0 01-.197.382z" /></svg>
                            {repo.forks_count}
                        </span>
                    )}
                    {repo.size > 0 && (
                        <span className="flex items-center gap-1">{icon.size} {formatSizeKB(repo.size)}</span>
                    )}
                    {repo.open_issues_count > 0 && (
                        <span className="flex items-center gap-1">{icon.issues} {repo.open_issues_count} open issues</span>
                    )}
                    {repo.updated_at && (
                        <span className="flex items-center gap-1 col-span-2 md:col-span-1">{icon.updated} Updated {formatRelativeTime(repo.updated_at)}</span>
                    )}
                    {repo.visibility && (
                        <span className="flex items-center gap-1">{icon.visibility} {repo.visibility.charAt(0).toUpperCase() + repo.visibility.slice(1)}</span>
                    )}
                    {repo.license && (
                        <span className="flex items-center gap-1">{icon.license} {formatLicense(repo.license)}</span>
                    )}
                </div>
            </div>
        </a>
    );
};

export default RepoCard; 