import React from 'react';
import Link from 'next/link';

const ForgotPasswordPage = () => {
  return (
    <main className="min-h-screen bg-[#0E0E12] text-white">
      <div className="container mx-auto px-4 py-16 max-w-xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Forgot Password</h1>
          <p className="text-gray-300">We’ll send a reset link to your email.</p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm text-gray-300">Email</label>
            <input
              type="email"
              className="w-full rounded-lg border border-white/10 bg-[#111525] px-3 py-3 text-white placeholder:text-gray-500 focus:border-amber-300 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg border border-[#c18c35] bg-[#0f1320] px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f6f0dd] shadow-[0_10px_28px_rgba(0,0,0,0.32)] transition duration-150 hover:border-amber-300 cursor-pointer"
          >
            Send Reset Link
          </button>
        </form>
        <p className="text-sm text-gray-300">
          Remembered your password?{' '}
          <Link href="/login" className="hover:text-amber-300">
            Back to login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default ForgotPasswordPage;
