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
          <label className="block text-sm font-medium text-text-secondary">
            {label}
            {isRequired && <span className="text-danger ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full h-12 px-4 rounded-md border bg-surface text-foreground
            placeholder:text-text-muted focus:outline-none focus:ring-4 focus:ring-primary-200 focus:border-primary-600
            transition-all duration-200
            ${error ? 'border-danger ring-danger/20' : 'border-border'}
            ${className}
          `}
          {...props}
        />
        {error && <p className="text-sm text-danger">{error}</p>}
        {!error && helperText && <p className="text-sm text-text-muted">{helperText}</p>}
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
          <label className="block text-sm font-medium text-text-secondary">
            {label}
            {isRequired && <span className="text-danger ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          className={`
            w-full min-h-[120px] p-4 rounded-md border bg-surface text-foreground
            placeholder:text-text-muted focus:outline-none focus:ring-4 focus:ring-primary-200 focus:border-primary-600
            transition-all duration-200
            ${error ? 'border-danger ring-danger/20' : 'border-border'}
            ${className}
          `}
          {...props}
        />
        {error && <p className="text-sm text-danger">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
