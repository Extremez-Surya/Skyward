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
  const baseStyles = "bg-card border border-border overflow-hidden transition-all duration-300";
  
  const variants = {
    standard: "rounded-2xl p-6 shadow-premium hover:shadow-lifted",
    feature: "rounded-2xl p-8 shadow-premium hover:shadow-lifted hover:-translate-y-1",
    metric: "rounded-2xl p-6 bg-gradient-to-br from-card to-surface shadow-premium"
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
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={combinedClasses}
    >
      {children}
    </motion.div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`mb-6 ${className}`}>{children}</div>
);

export const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <h3 className={`text-2xl font-semibold text-text-primary tracking-tight ${className}`}>{children}</h3>
);

export const CardDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`text-text-secondary text-base leading-relaxed ${className}`}>{children}</p>
);

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={className}>{children}</div>
);
