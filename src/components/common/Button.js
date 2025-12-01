import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-800 text-white border-none hover:from-purple-700 hover:to-indigo-900 transition duration-300 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
