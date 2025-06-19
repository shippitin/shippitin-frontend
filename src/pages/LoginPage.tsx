import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login to Shippitin</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Login
          </button>

          <p className="text-sm text-center text-gray-600 mt-4">
            Don’t have an account? <a href="/signup" className="text-purple-600 hover:underline">Sign Up</a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;