export function aggregateLanguageData(repos) {
  const langMap = {};
  repos.forEach(repo => {
    if (repo.language) {
      langMap[repo.language] = (langMap[repo.language] || 0) + 1;
    }
  });
  return Object.entries(langMap).map(([language, value]) => ({ language, value }));
} 