import React, { useState } from 'react';
import { fetchUserData, searchUsers } from '../services/githubService';

function Search() {
  // Basic search
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  // Advanced search
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);

  // Common states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleBasicSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData(null);
    setResults([]);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData(null);
    setResults([]);

    try {
      const users = await searchUsers(username, location, minRepos);
      setResults(users);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Basic Search Form */}
      <form onSubmit={handleBasicSearch} className="mb-6 p-4 border rounded space-y-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Basic Search
        </button>
      </form>

      {/* Advanced Search Form */}
      <form onSubmit={handleAdvancedSearch} className="p-4 border rounded space-y-4">
        <input
          type="text"
          placeholder="Username (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
          Advanced Search
        </button>
      </form>

      {/* Conditional rendering */}
      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">Looks like we cant find the user.</p>}

      {/* Basic Search Result */}
      {userData && (
        <div style={{ marginTop: '20px' }}>
          <img src={userData.avatar_url} alt="avatar" width="100" />
          <h2>{userData.name || userData.login}</h2>
          <p>Location: {userData.location || 'N/A'}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}

      {/* Advanced Search Results */}
      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div key={user.id} className="p-4 border rounded flex justify-between items-center">
            <div>
              <img src={user.avatar_url} alt="avatar" width="50" className="rounded-full mb-2" />
              <h3 className="font-bold">{user.login}</h3>
              <p>Location: {user.location || 'N/A'}</p>
              <p>Repos: {user.public_repos ?? 'N/A'}</p>
            </div>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
