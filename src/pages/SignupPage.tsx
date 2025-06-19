// src/pages/SignUpPage.tsx
import React from 'react';

const SignUpPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-6 md:p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Your Shippitin Account</h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Email Address</label>
            <input
              type="email"
              className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
            <input
              type="tel"
              className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="+91 9876543210"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account? <a href="/login" className="text-purple-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;