import React from 'react';

interface StyledLabelProps {
  children: React.ReactNode;
  className?: string;
}

const StyledLabel: React.FC<StyledLabelProps> = ({ children, className = '' }) => {
  return (
    <span className={`block font-medium text-gray-800 dark:text-white/90 text-lg ${className}`}>
      {children}
    </span>
  );
};

export default StyledLabel;
