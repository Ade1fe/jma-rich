import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  required?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({ label, required, ...props }) => {
  return (
    <div>
      <label className="block text-[#3d3428] text-sm mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        {...props}
        className="w-full px-4 py-3 bg-[#FFFBF3] border border-[#D1D1D1] rounded-md text-sm focus:outline-none focus:border-[#8b7355] resize-none"
      />
    </div>
  );
};

export default TextArea;