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
    <Card variant="standard" animate={false} className="bg-white border-border shadow-premium p-8">
      <div className="flex items-center gap-3 text-primary-600 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
          <Plus size={20} />
        </div>
        <h3 className="text-xl font-bold text-text-primary tracking-tight">New Workforce Request</h3>
      </div>

      {success ? (
        <div className="py-12 text-center space-y-4 animate-fade-up">
          <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle size={32} />
          </div>
          <h4 className="text-xl font-bold text-text-primary tracking-tight">Request Received</h4>
          <p className="text-text-secondary font-medium">Our team will review your requirements and contact you shortly.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* AI Section */}
          <div className="p-6 bg-surface border border-border rounded-2xl space-y-4 relative overflow-hidden group transition-all">
            <div className="flex items-center gap-2 text-primary-600 relative z-10">
              <Sparkles size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Smart AI Assistant</span>
            </div>
            <Textarea 
              placeholder="e.g. Need 50 Packers in Gurgaon for night shift joining next week."
              className="bg-white border-border"
              value={aiText}
              onChange={(e) => setAiText(e.target.value)}
            />
            <Button 
              onClick={handleAIAnalyze}
              isLoading={aiLoading}
              disabled={!aiText}
              variant="secondary"
              className="w-full text-xs h-12 rounded-xl"
              leftIcon={Sparkles}
            >
              Analyze with AI
            </Button>

            {aiAnalysis && (
              <div className="mt-4 p-4 bg-white border border-border rounded-xl text-[11px] font-medium space-y-2 animate-fade-up relative z-10">
                <p className="text-text-primary"><strong className="text-primary-600 uppercase tracking-tighter mr-1">Recommendation:</strong> {aiAnalysis.staffing_recommendation}</p>
                <p className="text-text-primary"><strong className="text-primary-600 uppercase tracking-tighter mr-1">Timeline:</strong> {aiAnalysis.estimated_hiring_timeline}</p>
              </div>
            )}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary-600/5 blur-[40px] rounded-full pointer-events-none" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-text-primary tracking-tight">Shift Type</label>
                <select 
                  className="w-full h-[52px] px-5 rounded-xl border border-border bg-white text-text-primary font-medium focus:outline-none focus:ring-4 focus:ring-primary-600/10 focus:border-primary-600 transition-all shadow-sm"
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                label="Salary Range (Monthly)"
                placeholder="e.g. 15,000 - 18,000"
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
            </div>

            <div className="pt-4">
              <Button 
                type="submit"
                isLoading={loading}
                className="w-full rounded-xl"
                rightIcon={Send}
              >
                Submit Workforce Request
              </Button>
            </div>
          </form>
        </div>
      )}
    </Card>
  );
}
