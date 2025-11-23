import React from 'react';

const MoonIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className || 'w-6 h-6'}
    >
      <path
        fillRule="evenodd"
        d="M9.528 1.718a.75.75 0 01.148.732 8.53 8.53 0 00-3.878 7.215 8.53 8.53 0 007.215 3.878.75.75 0 01.732.148A10.49 10.49 0 0119.5 12a10.49 10.49 0 01-10.007 9.918.75.75 0 01-.732-.148A8.53 8.53 0 004.46 14.472a8.53 8.53 0 00-3.878-7.215.75.75 0 01.148-.732A10.49 10.49 0 0112 2.5c2.123 0 4.134.536 5.885 1.485a.75.75 0 01.148.732z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default MoonIcon;
