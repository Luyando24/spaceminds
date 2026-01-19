import React from 'react';
import Link from 'next/link';

// Standard template literals used for class composition

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'large';
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
}

export default function Button({ 
  variant = 'primary', 
  size = 'default', 
  children, 
  className = '',
  href,
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:pointer-events-none rounded-none";
  
  const variants = {
    primary: "bg-black text-white hover:bg-[var(--accent)] hover:text-black border border-black",
    secondary: "bg-gray-100 text-black hover:bg-[var(--accent)] hover:text-black border border-transparent",
    outline: "bg-transparent text-black border border-black hover:bg-[var(--accent)] hover:border-[var(--accent)]"
  };

  const sizes = {
    default: "h-12 px-6 text-base",
    large: "h-16 px-10 text-lg", // "Generously padded"
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link 
        href={href} 
        className={classes}
        {...(props as any)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}
