"use client";
import { useState, useEffect } from "react";

interface GitHubData {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  created_at: string;
  location: string;
  company: string;
  blog: string;
}

interface GitHubProfileProps {
  username: string;
}

export function GitHubProfile({ username }: GitHubProfileProps) {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Try our API route first
        let response = await fetch(`/api/github-profile?username=${username}`);
        
        // If our API route fails, try CORS proxy as fallback
        if (!response.ok) {
          console.log('API route failed, trying CORS proxy...');
          response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.github.com/users/${username}`)}`);
        }
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
          throw new Error(errorData.error || 'Failed to fetch GitHub data');
        }
        
        const userData = await response.json();
        setData(userData);
      } catch (err) {
        console.error('GitHub fetch error:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-sm">Loading GitHub profile...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6 overflow-y-auto">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* GitHub Icon */}
          <div className="w-20 h-20 rounded-full border-4 border-white/20 flex items-center justify-center bg-gray-700">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
          
          {/* Username */}
          <div>
            <h3 className="text-xl font-bold">@{username}</h3>
            <p className="text-gray-300 text-sm">GitHub Profile</p>
          </div>

          {/* Fallback message */}
          <p className="text-sm text-gray-300 max-w-xs text-center leading-relaxed">
            Live profile data temporarily unavailable. Click below to view on GitHub.
          </p>

          {/* GitHub Link */}
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    );
  }

  const joinDate = new Date(data.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });

  return (
    <div className="h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6 overflow-y-auto">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Avatar */}
        <img
          src={data.avatar_url}
          alt={`${data.name || data.login}'s avatar`}
          className="w-20 h-20 rounded-full border-4 border-white/20"
        />
        
        {/* Name and Username */}
        <div>
          <h3 className="text-xl font-bold">{data.name || data.login}</h3>
          <p className="text-gray-300 text-sm">@{data.login}</p>
        </div>

        {/* Bio */}
        {data.bio && (
          <p className="text-sm text-gray-300 max-w-xs text-center leading-relaxed">
            {data.bio}
          </p>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
          <div className="text-center">
            <div className="text-lg font-bold text-blue-400">{data.public_repos}</div>
            <div className="text-xs text-gray-400">Repositories</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-green-400">{data.followers}</div>
            <div className="text-xs text-gray-400">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-purple-400">{data.following}</div>
            <div className="text-xs text-gray-400">Following</div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="space-y-2 text-xs text-gray-400">
          {data.location && (
            <div className="flex items-center justify-center space-x-1">
              <span>📍</span>
              <span>{data.location}</span>
            </div>
          )}
          {data.company && (
            <div className="flex items-center justify-center space-x-1">
              <span>🏢</span>
              <span>{data.company}</span>
            </div>
          )}
          <div className="flex items-center justify-center space-x-1">
            <span>📅</span>
            <span>Joined {joinDate}</span>
          </div>
        </div>

        {/* GitHub Link */}
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}
