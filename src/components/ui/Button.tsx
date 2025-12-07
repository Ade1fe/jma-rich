import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const baseStyles = "px-12 py-4 text-sm tracking-wider transition rounded-lg";
  const variantStyles = variant === 'primary' 
    ? "bg-[#3d3428] text-white hover:bg-[#2d2418]"
    : "bg-white text-[#3d3428] border border-[#D1D1D1] hover:bg-gray-50";

  return (
    <button {...props} className={`${baseStyles} ${variantStyles}`}>
      {children}
    </button>
  );
};

export default Button;