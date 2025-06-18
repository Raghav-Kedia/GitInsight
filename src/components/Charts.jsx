import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { aggregateLanguageData } from '../utils/aggregateLanguageData';

const COLORS = [
    '#2563eb', '#10b981', '#f59e42', '#f43f5e', '#a78bfa', '#fbbf24', '#38bdf8', '#6366f1', '#eab308', '#14b8a6', '#f472b6', '#818cf8', '#f87171', '#34d399', '#facc15', '#60a5fa', '#c026d3', '#fcd34d', '#4ade80', '#fca5a5',
];

const Charts = ({ repos = [] }) => {
    // Pie chart data: language usage
    const languageData = useMemo(() => aggregateLanguageData(repos), [repos]);

    // Bar chart data: top 5 repos by stars
    const topRepos = useMemo(() => {
        return [...repos]
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 5)
            .map(repo => ({
                name: repo.name,
                stars: repo.stargazers_count,
            }));
    }, [repos]);

    if (!repos.length) return null;

    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Language Usage Pie Chart */}
            <div className="w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Language Usage</h3>
                {languageData.length === 0 ? (
                    <div className="text-gray-400 dark:text-gray-500 text-center py-8">No language data available.</div>
                ) : (
                    <ResponsiveContainer width="100%" height={260}>
                        <PieChart>
                            <Pie
                                data={languageData}
                                dataKey="value"
                                nameKey="language"
                                cx="50%"
                                cy="50%"
                                outerRadius={90}
                                innerRadius={50}
                                paddingAngle={3}
                                isAnimationActive
                            >
                                {languageData.map((entry, idx) => (
                                    <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip formatter={(value, name) => [`${value}`, 'Repos']} />
                            <Legend verticalAlign="bottom" height={36} iconType="circle" />
                        </PieChart>
                    </ResponsiveContainer>
                )}
            </div>
            {/* Top 5 Repos by Stars Bar Chart */}
            <div className="w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Top 5 Repos by Stars</h3>
                {topRepos.length === 0 ? (
                    <div className="text-gray-400 dark:text-gray-500 text-center py-8">No starred repos found.</div>
                ) : (
                    <ResponsiveContainer width="100%" height={260}>
                        <BarChart data={topRepos} layout="vertical" margin={{ left: 16, right: 16, top: 8, bottom: 8 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" stroke="#94a3b8" fontSize={12} />
                            <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={12} width={100} />
                            <Tooltip />
                            <Bar dataKey="stars" fill="#2563eb" radius={[6, 6, 0, 0]} isAnimationActive />
                        </BarChart>
                    </ResponsiveContainer>
                )}
            </div>
        </section>
    );
};

export default Charts; 