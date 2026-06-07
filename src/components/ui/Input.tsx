import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  isRequired?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, isRequired, className = '', ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="block text-sm font-bold text-text-primary tracking-tight">
            {label}
            {isRequired && <span className="text-danger ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full h-[52px] px-5 rounded-xl border bg-background text-text-primary
            placeholder:text-text-muted focus:outline-none focus:ring-4 focus:ring-primary-600/10 focus:border-primary-600
            transition-all duration-300 shadow-sm
            ${error ? 'border-danger ring-danger/10' : 'border-border'}
            ${className}
          `}
          {...props}
        />
        {error && <p className="text-sm font-bold text-danger">{error}</p>}
        {!error && helperText && <p className="text-sm font-medium text-text-muted">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string; error?: string; isRequired?: boolean }>(
  ({ label, error, isRequired, className = '', ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="block text-sm font-bold text-text-primary tracking-tight">
            {label}
            {isRequired && <span className="text-danger ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          className={`
            w-full min-h-[140px] p-5 rounded-xl border bg-background text-text-primary
            placeholder:text-text-muted focus:outline-none focus:ring-4 focus:ring-primary-600/10 focus:border-primary-600
            transition-all duration-300 shadow-sm
            ${error ? 'border-danger ring-danger/10' : 'border-border'}
            ${className}
          `}
          {...props}
        />
        {error && <p className="text-sm font-bold text-danger">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
