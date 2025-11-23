import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-lg bg-white text-[#002D72] border border-gray-300 hover:bg-gray-100 transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
