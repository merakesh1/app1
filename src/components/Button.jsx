import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseStyles =
    'px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none';
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary:
      'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700',
    outline:
      'bg-transparent border border-white text-white hover:bg-white hover:text-black',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
