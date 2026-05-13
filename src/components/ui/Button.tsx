import React from 'react';
import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'motion/react';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'emergency';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-brand-teal text-white hover:bg-brand-teal-light focus:ring-brand-teal",
      secondary: "bg-brand-sand text-brand-teal-dark hover:bg-gray-200 focus:ring-gray-200",
      outline: "border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white focus:ring-brand-teal",
      ghost: "text-brand-teal hover:bg-brand-teal/10 focus:ring-brand-teal",
      emergency: "bg-brand-orange text-white hover:bg-brand-orange-hover focus:ring-brand-orange animate-pulse hover:animate-none shadow-lg shadow-brand-orange/30",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
