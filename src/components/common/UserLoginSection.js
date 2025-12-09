import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const UserLoginSection = ({ userName }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('bc_user');
      window.dispatchEvent(new Event('bc-auth-change'));
    }
    setOpen(false);
  };

  if (userName) {
    return (
      <div className="relative" ref={wrapperRef}>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-3 rounded-full border border-amber-400/60 bg-[#0f1320] px-4 py-2 text-sm font-semibold text-[#f6f0dd] shadow-[0_10px_28px_rgba(0,0,0,0.32)] cursor-pointer"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
          {userName}
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-40 rounded-lg border border-white/10 bg-[#0f1320] p-2 shadow-[0_12px_28px_rgba(0,0,0,0.35)]">
            <Link
              href="/dashboard"
              className="block rounded-md px-3 py-2 text-sm text-[#f6f0dd] hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              Dashboard
            </Link>
            <button
              type="button"
              className="mt-1 block w-full rounded-md px-3 py-2 text-left text-sm text-[#f6f0dd] hover:bg-white/5"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-3">
      <Link
        href="/login"
        className="inline-flex items-center justify-center rounded-full border border-amber-400/60 bg-[#0f1320] px-4 py-2 text-sm font-semibold text-[#f6f0dd] shadow-[0_10px_28px_rgba(0,0,0,0.32)] transition duration-150 hover:border-amber-300 cursor-pointer"
      >
        Login
      </Link>
    </div>
  );
};

export default UserLoginSection;
