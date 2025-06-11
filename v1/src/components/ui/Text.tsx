import React from 'react';

interface TextProps {
    children: React.ReactNode;
    className?: string;
    size?: 'sm' | 'base' | 'lg';
    color?: 'blue' | 'gray' | 'red';
}

export const Text: React.FC<TextProps> = ({
    children,
    className = '',
    size = 'base',
    color = 'blue'
}) => {
    const sizeClasses = {
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg'
    };

    const colorClasses = {
        blue: 'text-blue-400 dark:text-blue-900',
        gray: 'text-gray-500 dark:text-gray-400',
        red: 'text-red-500 dark:text-red-900'
    };

    return (
        <span className={`font-medium ${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
            {children}
        </span>
    );
};
