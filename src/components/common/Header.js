"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import SearchIcon from '../icons/SearchIcon';
import MoonIcon from '../icons/MoonIcon';
import SunIcon from '../icons/SunIcon';
import LanguageIcon from '../icons/LanguageIcon';
import UserLoginSection from './UserLoginSection';

const SearchOverlay = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const dummyData = ['Learn', 'Use', 'Build', 'Participate', 'Research', 'About', 'Contact'];

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const filteredResults = dummyData.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  }, [query]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 backdrop-blur-sm pt-20"
      onClick={onClose}
    >
      <div 
        className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-4 pr-12 bg-transparent focus:outline-none text-lg text-blesschain-primary"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button onClick={onClose} className="absolute top-1/2 right-4 -translate-y-1/2 text-blesschain-primary cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {results.length > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-700">
            <ul className="py-2">
              {results.map((result, index) => (
                <li
                  key={index}
                  className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [userName, setUserName] = useState('');
  const { theme, setTheme } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const readUser = () => {
      if (typeof window === 'undefined') return;
      const stored = window.localStorage.getItem('bc_user');
      setUserName(stored || '');
    };
    readUser();

    const handleAuthChange = () => readUser();
    window.addEventListener('storage', handleAuthChange);
    window.addEventListener('bc-auth-change', handleAuthChange);
    return () => {
      window.removeEventListener('storage', handleAuthChange);
      window.removeEventListener('bc-auth-change', handleAuthChange);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#0E0E12] border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left section */}
            <div className="flex-1 flex justify-start">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Blesschain logo"
                  width={140}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Center section */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/about" className="text-blesschain-primary hover:opacity-75">About</Link>
              <Link href="/blessai" className="text-blesschain-primary hover:opacity-75">BlessAI System</Link>
              <Link href="/blessai/order" className="text-blesschain-primary hover:opacity-75">BlessOrder</Link>
            </nav>

            {/* Right section */}
            <div className="flex-1 flex justify-end">
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  aria-label="Open search"
                  onClick={() => setIsSearchOpen(true)}
                  className="flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 p-2 text-blesschain-primary hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                >
                  <SearchIcon className="w-5 h-5" />
                </button>
                <UserLoginSection userName={userName} />
              </div>
            </div>
          </div>
        </div>
      </header>
      {isSearchOpen && <SearchOverlay onClose={() => setIsSearchOpen(false)} />}
    </>
  );
};

export default Header;
