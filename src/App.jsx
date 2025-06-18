import { useState, useEffect } from 'react'
import UserInput from './components/UserInput'
import RepoList from './components/RepoList'
import Charts from './components/Charts'
import ProfileCard from './components/ProfileCard'
import DarkModeToggle from './components/DarkModeToggle'
import RecentSearches from './components/RecentSearches'
import { fetchUserRepos, fetchUserProfile } from './services/githubApi'

const RECENT_KEY = 'recent_github_searches'

function App() {
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)
  const [repos, setRepos] = useState([])
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [recent, setRecent] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem(RECENT_KEY)
    if (stored) setRecent(JSON.parse(stored))
  }, [])

  const saveRecent = (name) => {
    let updated = [name, ...recent.filter(u => u !== name)]
    if (updated.length > 5) updated = updated.slice(0, 5)
    setRecent(updated)
    localStorage.setItem(RECENT_KEY, JSON.stringify(updated))
  }

  const handleInputChange = (e) => setUsername(e.target.value)
  const handleSubmit = async (e, searchName) => {
    if (e) e.preventDefault()
    const search = searchName || username
    setUsername(search)
    setLoading(true)
    setError(null)
    setRepos([])
    setUser(null)
    try {
      const [profile, data] = await Promise.all([
        fetchUserProfile(search),
        fetchUserRepos(search)
      ])
      setUser(profile)
      setRepos(data)
      saveRecent(search)
    } catch (err) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const handleRecentSelect = (name) => handleSubmit(null, name)
  const handleRecentClear = () => {
    setRecent([])
    localStorage.removeItem(RECENT_KEY)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <DarkModeToggle />
      <header className="py-8 px-4 md:px-12 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2 text-center">
          GitInsight
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-300 max-w-xl text-center">
          Enter a GitHub username to explore and visualize their public repositories with beautiful charts and insights.
        </p>
      </header>
      <main className="w-full px-4 flex flex-col gap-8">
        <RecentSearches searches={recent} onSelect={handleRecentSelect} onClear={handleRecentClear} />
        <UserInput
          value={username}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
          loading={loading}
        />
        {loading && <div className="text-center text-blue-600 font-medium">Loading...</div>}
        {error && <div className="text-center text-red-500 font-medium">{error}</div>}
        {user && <ProfileCard user={user} />}
        {repos.length > 0 && (
          <>
            <RepoList repos={repos} loading={loading} />
            <Charts repos={repos} />
          </>
        )}
      </main>
      <footer className="mt-16 py-6 text-center text-xs text-gray-400 dark:text-gray-600">
        &copy; {new Date().getFullYear()} GitInsight. Built with React, Vite, Tailwind CSS, and Recharts.
      </footer>
    </div>
  )
}

export default App
