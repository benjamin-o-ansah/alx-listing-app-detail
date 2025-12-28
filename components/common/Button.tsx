import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
