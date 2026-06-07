import React, { useState } from 'react';
import { Plus, CheckCircle, Send, Sparkles } from 'lucide-react';
import { submitJobRequirement } from '../lib/client';
import { Button } from './ui/Button';
import { Input, Textarea } from './ui/Input';
import { Card } from './ui/Card';

interface Props {
  clientId: string;
}

export default function RequirementForm({ clientId }: Props) {
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<any>(null);
  const [aiText, setAiText] = useState('');
  const [formData, setFormData] = useState({
    role_name: '',
    worker_count: 1,
    shift_type: 'Day',
    location: '',
    salary: '',
    joining_date: ''
  });

  const handleAIAnalyze = async () => {
    if (!aiText) return;
    setAiLoading(true);
    try {
        const res = await fetch('/api/ai/analyze-requirement', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ requirement: aiText }),
        });
        const data = await res.json();
        setAiAnalysis(data);
        
        if (data.role_name) setFormData(prev => ({ ...prev, role_name: data.role_name }));
        if (data.worker_count) setFormData(prev => ({ ...prev, worker_count: data.worker_count }));
        if (data.location) setFormData(prev => ({ ...prev, location: data.location }));
    } catch (err) {
        console.error(err);
    } finally {
        setAiLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitJobRequirement({
        client_id: clientId,
        ...formData
      });
      setSuccess(true);
      setTimeout(() => {
          setSuccess(false);
          setFormData({
            role_name: '',
            worker_count: 1,
            shift_type: 'Day',
            location: '',
            salary: '',
            joining_date: ''
          });
          setAiAnalysis(null);
          setAiText('');
      }, 3000);
    } catch (error) {
      console.error('Error submitting requirement:', error);
      alert('Failed to submit requirement.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card variant="standard" animate={false} className="max-w-4xl mx-auto">
      <div className="flex items-center gap-2 text-primary-600 mb-6">
        <Plus size={20} />
        <h3 className="text-xl font-bold text-text-primary">New Workforce Request</h3>
      </div>

      {success ? (
        <div className="py-12 text-center space-y-4 animate-fade-up">
          <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto">
            <CheckCircle size={32} />
          </div>
          <h4 className="text-lg font-bold text-text-primary">Thank you for your request.</h4>
          <p className="text-sm text-text-secondary">Our team will review your requirements and contact you shortly.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* AI Section */}
          <div className="p-4 bg-primary-600/5 border border-primary-600/10 rounded-md space-y-3">
            <div className="flex items-center gap-2 text-primary-600">
              <Sparkles size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">Smart AI Assistant</span>
            </div>
            <Textarea 
              placeholder="Example: Need 50 Packers in Gurgaon for night shift joining next week."
              className="h-24 bg-background"
              value={aiText}
              onChange={(e) => setAiText(e.target.value)}
            />
            <Button 
              onClick={handleAIAnalyze}
              isLoading={aiLoading}
              disabled={!aiText}
              variant="outline"
              className="w-full text-xs h-10"
              leftIcon={Sparkles}
            >
              Analyze with AI
            </Button>

            {aiAnalysis && (
              <div className="mt-3 p-3 bg-surface border border-primary-600/10 rounded-md text-xs space-y-2 animate-fade-up">
                <p className="text-text-primary"><strong>Recommendation:</strong> {aiAnalysis.staffing_recommendation}</p>
                <p className="text-text-primary"><strong>Timeline:</strong> {aiAnalysis.estimated_hiring_timeline}</p>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input 
              label="Role Required"
              required
              placeholder="e.g. Delivery Executive"
              value={formData.role_name}
              onChange={(e) => setFormData({...formData, role_name: e.target.value})}
              isRequired
            />
            <Input 
              label="Number of Workers"
              type="number" 
              required min="1"
              value={formData.worker_count}
              onChange={(e) => setFormData({...formData, worker_count: parseInt(e.target.value)})}
              isRequired
            />
            <div className="space-y-2">
              <label className="block text-sm font-medium text-text-secondary">Shift Type</label>
              <select 
                className="w-full h-12 px-4 rounded-md border border-border bg-surface text-foreground focus:outline-none focus:ring-4 focus:ring-primary-200 focus:border-primary-600 transition-all"
                value={formData.shift_type}
                onChange={(e) => setFormData({...formData, shift_type: e.target.value})}
              >
                <option>Day</option>
                <option>Night</option>
                <option>Rotational</option>
              </select>
            </div>
            <Input 
              label="Location"
              required
              placeholder="e.g. Okhla Phase III, Delhi"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              isRequired
            />
            <Input 
              label="Expected Salary Range"
              placeholder="e.g. 15,000 - 18,000 per month"
              value={formData.salary}
              onChange={(e) => setFormData({...formData, salary: e.target.value})}
            />
            <Input 
              label="Target Joining Date"
              type="date" 
              required
              value={formData.joining_date}
              onChange={(e) => setFormData({...formData, joining_date: e.target.value})}
              isRequired
            />
            <div className="md:col-span-2 pt-4">
              <Button 
                type="submit"
                isLoading={loading}
                className="w-full"
                rightIcon={Send}
              >
                Submit Requirement
              </Button>
            </div>
          </form>
        </div>
      )}
    </Card>
  );
}
