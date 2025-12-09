import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === 'admin' && password === 'admin') {
      window.localStorage.setItem('bc_user', 'Admin');
      window.dispatchEvent(new Event('bc-auth-change'));
      router.push('/');
    } else {
      setError('Invalid credentials. Use admin / admin.');
    }
  };

  return (
    <main className="min-h-screen bg-[#0E0E12] text-white">
      <div className="container mx-auto px-4 py-16 max-w-xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Login</h1>
          <p className="text-gray-300">Access your BlessChain account.</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="block text-sm text-gray-300">Email / Username</label>
            <input
              type="text"
              className="w-full rounded-lg border border-white/10 bg-[#111525] px-3 py-3 text-white placeholder:text-gray-500 focus:border-amber-300 focus:outline-none"
              placeholder="admin"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm text-gray-300">Password</label>
            <input
              type="password"
              className="w-full rounded-lg border border-white/10 bg-[#111525] px-3 py-3 text-white placeholder:text-gray-500 focus:border-amber-300 focus:outline-none"
              placeholder="admin"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            className="w-full rounded-lg border border-[#c18c35] bg-[#0f1320] px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f6f0dd] shadow-[0_10px_28px_rgba(0,0,0,0.32)] transition duration-150 hover:border-amber-300 cursor-pointer"
          >
            Login
          </button>
        </form>
        <div className="flex flex-row justify-between items-center gap-2 text-sm text-gray-300">
          <Link href="/forgot-password" className="hover:text-amber-300">
            Forgot password?
          </Link>
          <Link href="/signup" className="hover:text-amber-300">
            Create an account
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
