import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, required, ...props }) => {
  return (
    <div>
      <label className="block text-[#3d3428] text-sm mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        {...props}
        className="w-full px-4 py-3 bg-[#FFFBF3] border border-[#D1D1D1] rounded-md text-sm focus:outline-none focus:border-[#8b7355]"
      />
    </div>
  );
};

export default Input;