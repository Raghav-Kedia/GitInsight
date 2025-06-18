# GitInsight

A modern, visually elegant, and highly interactive dashboard to visualize GitHub repositories, built with React, Vite, Tailwind CSS v3, and Recharts.

---

## 🚀 Overview
**GitInsight** is a premium, SaaS-style web app for exploring and visualizing GitHub repositories. Enter any GitHub username to instantly see:
- A beautiful profile card
- A sortable, filterable, and richly detailed repo list
- Interactive charts for language usage and top-starred repos
- Recent search history, dark mode, and more

---

## ✨ Features
- **User Search:** Enter a GitHub username to fetch and visualize their public repositories
- **Profile Card:** Avatar, name, bio, followers, and following
- **Repository List:**
  - Name, description, language, stars, forks
  - Size, open issues, last updated (relative), topics, visibility, license, archived/disabled flags
  - Sort and filter by stars, name, or language
  - Responsive grid layout with modern card UI
- **Charts:**
  - Pie chart: Language usage
  - Bar chart: Top 5 repos by stars
  - Animated, responsive, and elegant
- **Recent Searches:** Quick access to up to 5 recent usernames
- **Dark Mode:** Toggle with smooth transitions and persistent preference
- **Error & Edge Case Handling:** Graceful feedback for 404, rate limits, and empty states
- **Mobile-First:** Fully responsive and touch-friendly

---

## 🛠️ Tech Stack
- [React](https://react.dev/) (Vite)
- [Tailwind CSS v3](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/) (for deployment)

---

## ⚙️ Setup & Installation

1. **Clone the repo:**
   ```bash
   git clone https://github.com/your-username/gitinsight.git
   cd gitinsight
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Create a `.env` file** (optional, for higher GitHub API rate limits):
   ```env
   VITE_GITHUB_TOKEN=ghp_xxx...yourtoken
   ```
   > Get a token at https://github.com/settings/tokens (no scopes needed for public data)
4. **Start the dev server:**
   ```bash
   npm run dev
   ```
5. **Open in your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

---

## 🌐 Deployment
Deploy easily to Vercel, Netlify, or any static host:
- **Build:**
  ```bash
  npm run build
  ```
- **Preview:**
  ```bash
  npm run preview
  ```
- Upload the `dist/` folder to your host

---

## 🔑 Environment Variables
- `VITE_GITHUB_TOKEN` (optional): Increases GitHub API rate limit for authenticated requests. Never commit your token.

---

## 🧑‍💻 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

> Made with ❤️ by Raghav-Kedia and the open source community. 