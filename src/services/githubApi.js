export async function fetchUserRepos(username) {
  const url = `https://api.github.com/users/${username}/repos?per_page=100`;
  const headers = {
    Accept: 'application/vnd.github.mercy-preview+json',
  };
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  if (token) headers.Authorization = `token ${token}`;
  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw {
        status: response.status,
        message: error.message || response.statusText,
      };
    }
    return await response.json();
  } catch (err) {
    throw {
      status: err.status || 500,
      message: err.message || 'Failed to fetch repositories',
    };
  }
}

export async function fetchUserProfile(username) {
  const url = `https://api.github.com/users/${username}`;
  const headers = {};
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  if (token) headers.Authorization = `token ${token}`;
  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw {
        status: response.status,
        message: error.message || response.statusText,
      };
    }
    return await response.json();
  } catch (err) {
    throw {
      status: err.status || 500,
      message: err.message || 'Failed to fetch user profile',
    };
  }
} 