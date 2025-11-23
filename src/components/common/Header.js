"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SearchIcon from '../icons/SearchIcon';
import MoonIcon from '../icons/MoonIcon';
import LanguageIcon from '../icons/LanguageIcon';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex-shrink-0">
              <Image src="/logo.png" alt="Logo" width={100} height={30} priority />
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/learn" className="text-gray-500 hover:text-gray-900">Learn</Link>
              <Link href="/use" className="text-gray-500 hover:text-gray-900">Use</Link>
              <Link href="/build" className="text-gray-500 hover:text-gray-900">Build</Link>
              <Link href="/participate" className="text-gray-500 hover:text-gray-900">Participate</Link>
              <Link href="/research" className="text-gray-500 hover:text-gray-900">Research</Link>
            </nav>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 p-2 rounded-md border border-gray-300 text-sm text-gray-500 hover:bg-gray-100">
              <SearchIcon className="w-4 h-4" />
              <span>Search</span>
              <kbd className="ml-4 px-2 py-1 text-xs font-sans rounded-md border bg-gray-100">⌘K</kbd>
            </button>

            <button className="p-2 rounded-md text-gray-500 hover:bg-gray-100">
              <MoonIcon className="w-6 h-6" />
            </button>

            <button className="flex items-center space-x-1 p-2 rounded-md text-gray-500 hover:bg-gray-100">
              <LanguageIcon className="w-6 h-6" />
              <span>EN</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


