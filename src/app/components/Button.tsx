import React from 'react';

interface ButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, className = '' }) => {
    return (
        <button
        type={!onClick ? "submit" : "button"}
        onClick={onClick ? onClick : undefined}
        className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
      >
        {title}
        </button>
    )
}

export default Button