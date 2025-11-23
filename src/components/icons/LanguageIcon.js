import React from 'react';

const LanguageIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className || 'w-6 h-6'}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21v-4.5m0 0V5.25M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3c-2.484 0-4.5 4.03-4.5 9s2.016 9 4.5 9zM12 3c.354 0 .695.023 1.027.068M12 3c-.354 0-.695.023-1.027.068M12 3v4.5m0 0V21m0-4.5c-2.484 0-4.5-4.03-4.5-9s2.016-9 4.5-9c2.485 0 4.5 4.03 4.5 9s-2.015 9-4.5 9z"
      />
    </svg>
  );
};

export default LanguageIcon;
