import axios from 'axios';

// Basic search for a single username
export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Advanced search for multiple users with filters
export const searchUsers = async (username, location, minRepos) => {
  let query = '';

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const searchUrl = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;
  const response = await axios.get(searchUrl);
  const users = response.data.items;

  // Get full details for each user
  const detailedUsers = await Promise.all(
    users.map(async (user) => {
      const details = await axios.get(user.url);
      return { ...user, ...details.data };
    })
  );

  return detailedUsers;
};
