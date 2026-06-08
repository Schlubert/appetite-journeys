import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { getImagePath } from '../../utils/paths';

const AgentLogin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError('Invalid email or password. Please try again.');
      setLoading(false);
    } else {
      navigate('/agent-portal/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md">

        <div className="text-center mb-8">
          <img
            src={getImagePath('appetite_tours_logo.png')}
            alt="Appetite Journeys"
            className="h-16 w-auto mx-auto mb-4"
          />
          <h1 className="text-3xl font-serif font-bold text-alpine-green">
            Agent Portal
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Sign in to access webinars and agent resources
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-alpine-green"
              placeholder="you@agency.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-alpine-green"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-alpine-green text-white font-semibold py-3 rounded-lg hover:bg-opacity-90 transition disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-8">
          Access is by invitation only. Contact{' '}
          <a href="mailto:info@appetitejourneys.com" className="underline">
            info@appetitejourneys.com
          </a>{' '}
          to request access.
        </p>
      </div>
    </div>
  );
};

export default AgentLogin;