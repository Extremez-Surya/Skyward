import React from 'react';
import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    isLoading, 
    leftIcon: LeftIcon, 
    rightIcon: RightIcon, 
    children, 
    className = '',
    ...props 
  }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95";
    
    const variants = {
      primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-sm",
      secondary: "bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-50 shadow-sm",
      outline: "bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50",
      ghost: "bg-transparent text-primary-600 hover:bg-primary-50",
    };

    const sizes = {
      sm: "h-9 px-4 rounded-sm text-sm",
      md: "h-12 px-8 rounded-md text-base",
      lg: "h-14 px-10 rounded-lg text-lg",
      icon: "h-12 w-12 rounded-md",
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={combinedClasses}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        ) : LeftIcon && (
          <LeftIcon size={size === 'sm' ? 16 : 20} className="mr-2" />
        )}
        {children}
        {!isLoading && RightIcon && (
          <RightIcon size={size === 'sm' ? 16 : 20} className="ml-2" />
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
