import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { Input, Textarea } from './ui/Input';
import { Card } from './ui/Card';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    company_name: '',
    email: '',
    phone: '',
    requirement: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Failed to submit request');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Card variant="standard" className="text-center space-y-4 animate-fade-up">
        <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto">
          <CheckCircle size={32} />
        </div>
        <h2 className="text-2xl font-bold text-text-primary">Thank you for your request!</h2>
        <p className="text-text-secondary">
          Our team will review your requirements and contact you shortly.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-primary-600 text-sm font-semibold hover:underline"
        >
          Send another message
        </button>
      </Card>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input 
        label="Full Name"
        type="text" 
        required
        placeholder="John Doe"
        value={formData.full_name}
        onChange={(e) => setFormData({...formData, full_name: e.target.value})}
        isRequired
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input 
          label="Company Name"
          type="text" 
          placeholder="Acme Corp"
          value={formData.company_name}
          onChange={(e) => setFormData({...formData, company_name: e.target.value})}
        />
        <Input 
          label="Email"
          type="email" 
          required
          placeholder="john@example.com"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          isRequired
        />
      </div>
      <Input 
        label="Phone Number"
        type="tel" 
        required
        placeholder="+91 98765 43210"
        value={formData.phone}
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
        isRequired
      />
      <Textarea 
        label="Requirement"
        required
        placeholder="Tell us about your workforce needs..."
        className="h-32"
        value={formData.requirement}
        onChange={(e) => setFormData({...formData, requirement: e.target.value})}
        isRequired
      />
      <Button 
        type="submit"
        isLoading={loading}
        className="w-full"
        rightIcon={Send}
      >
        Submit Request
      </Button>
    </form>
  );
}
