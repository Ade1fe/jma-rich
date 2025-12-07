

import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  required?: boolean;
  options: SelectOption[];
}

const Select: React.FC<SelectProps> = ({ label, required, options, ...props }) => {
  return (
    <div className="relative">
      <label className="block text-[#3d3428] text-sm mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative">
        <select
          {...props}
          className="w-full pl-4 pr-12 py-3 bg-[#FFFBF3] border border-[#D1D1D1] rounded-md text-sm focus:outline-none focus:border-[#8b7355] text-gray-500 appearance-none"
        >
          <option value="">Select</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Custom arrow icon */}
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none">
        <IoIosArrowDown />
        </span>
      </div>
    </div>
  );
};

export default Select;
