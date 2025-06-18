import React, { useState, useMemo } from 'react';
import RepoCard from './RepoCard';

const sortOptions = [
    { value: 'stars', label: 'Stars' },
    { value: 'name', label: 'Name' },
];

const RepoList = ({ repos = [], loading, onSort, onFilter }) => {
    const [sortBy, setSortBy] = useState('stars');
    const [language, setLanguage] = useState('all');

    // Extract unique languages
    const languages = useMemo(() => {
        const langs = new Set();
        repos.forEach((repo) => repo.language && langs.add(repo.language));
        return ['all', ...Array.from(langs).sort()];
    }, [repos]);

    // Filter and sort repos
    const filteredRepos = useMemo(() => {
        let filtered = language === 'all' ? repos : repos.filter(r => r.language === language);
        if (sortBy === 'stars') {
            filtered = [...filtered].sort((a, b) => b.stargazers_count - a.stargazers_count);
        } else if (sortBy === 'name') {
            filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        }
        return filtered;
    }, [repos, sortBy, language]);

    return (
        <section className="w-full">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div className="flex gap-2 items-center">
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-300">Sort by:</label>
                    <select
                        className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        value={sortBy}
                        onChange={e => setSortBy(e.target.value)}
                    >
                        {sortOptions.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>
                <div className="flex gap-2 items-center">
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-300">Language:</label>
                    <select
                        className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        value={language}
                        onChange={e => setLanguage(e.target.value)}
                    >
                        {languages.map(lang => (
                            <option key={lang} value={lang}>{lang === 'all' ? 'All' : lang}</option>
                        ))}
                    </select>
                </div>
            </div>
            {filteredRepos.length === 0 && !loading && (
                <div className="flex flex-col items-center justify-center py-16 text-gray-400 dark:text-gray-500">
                    <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="1.5" d="M12 20v-6m0 0V4m0 10c-4.418 0-8 1.343-8 3v3h16v-3c0-1.657-3.582-3-8-3Z" /></svg>
                    <span className="mt-2 text-lg">No repositories found.</span>
                </div>
            )}
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRepos.map((repo, idx) => (
                    <div key={repo.id} className={idx !== filteredRepos.length - 1 ? 'border-b border-gray-100 dark:border-gray-800 pb-4' : ''}>
                        <RepoCard repo={repo} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RepoList; 