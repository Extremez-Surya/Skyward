import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  variant?: 'standard' | 'feature' | 'metric';
  className?: string;
  animate?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  variant = 'standard', 
  className = '',
  animate = true
}) => {
  const baseStyles = "bg-card border border-border overflow-hidden";
  
  const variants = {
    standard: "rounded-lg p-6 shadow-md",
    feature: "rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
    metric: "rounded-lg p-6 bg-gradient-to-br from-card to-surface shadow-sm"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (!animate) {
    return (
      <div className={combinedClasses}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={combinedClasses}
    >
      {children}
    </motion.div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

export const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <h3 className={`text-xl font-semibold text-foreground ${className}`}>{children}</h3>
);

export const CardDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`text-text-secondary text-sm ${className}`}>{children}</p>
);

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={className}>{children}</div>
);
