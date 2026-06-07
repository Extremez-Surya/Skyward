import React, { useState, useEffect } from 'react';
import { UserMinus, Loader2, CheckCircle, Send } from 'lucide-react';
import { getClientWorkforce, submitReplacementRequest } from '../lib/client';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

interface Props {
  clientId: string;
}

export default function ReplacementRequestForm({ clientId }: Props) {
  const [loading, setLoading] = useState(false);
  const [fetchingWorkforce, setFetchingWorkforce] = useState(true);
  const [success, setSuccess] = useState(false);
  const [workforce, setWorkforce] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    deployment_id: '',
    reason: '',
    priority: 'Normal'
  });

  useEffect(() => {
    async function loadWorkforce() {
      try {
        const data = await getClientWorkforce(clientId);
        setWorkforce(data);
      } catch (err) {
        console.error(err);
      } finally {
        setFetchingWorkforce(false);
      }
    }
    loadWorkforce();
  }, [clientId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.deployment_id) return;
    
    setLoading(true);
    try {
      await submitReplacementRequest({
        client_id: clientId,
        ...formData
      });
      setSuccess(true);
      setTimeout(() => {
          setSuccess(false);
          setFormData({
            deployment_id: '',
            reason: '',
            priority: 'Normal'
          });
      }, 3000);
    } catch (error) {
      console.error('Error submitting replacement request:', error);
      alert('Failed to submit replacement request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card variant="standard" animate={false} className="bg-white border-border shadow-premium p-8">
      <div className="flex items-center gap-3 text-danger mb-8">
        <div className="w-10 h-10 rounded-xl bg-danger/10 flex items-center justify-center">
          <UserMinus size={20} />
        </div>
        <h3 className="text-xl font-bold text-text-primary tracking-tight">Replacement Request</h3>
      </div>

      {success ? (
        <div className="py-12 text-center space-y-4 animate-fade-up">
          <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle size={32} />
          </div>
          <h4 className="text-xl font-bold text-text-primary tracking-tight">Request Submitted</h4>
          <p className="text-sm text-text-secondary font-medium">We will find a suitable replacement and notify you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-text-primary tracking-tight">Select Worker</label>
            {fetchingWorkforce ? (
                <div className="flex items-center gap-2 text-text-muted text-sm px-5 py-3 bg-surface border border-border rounded-xl">
                    <Loader2 size={16} className="animate-spin text-primary-600" /> 
                    <span className="font-medium">Loading workforce data...</span>
                </div>
            ) : (
                <select 
                    required
                    className="w-full h-[52px] px-5 rounded-xl border border-border bg-white text-text-primary font-medium focus:outline-none focus:ring-4 focus:ring-primary-600/10 focus:border-primary-600 transition-all shadow-sm"
                    value={formData.deployment_id}
                    onChange={(e) => setFormData({...formData, deployment_id: e.target.value})}
                >
                    <option value="">Choose a worker to replace</option>
                    {workforce.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.candidates.full_name} — {item.role}
                        </option>
                    ))}
                </select>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-text-primary tracking-tight">Reason for Replacement</label>
            <textarea 
              required
              className="w-full min-h-[120px] px-5 py-4 rounded-xl border border-border bg-white text-text-primary font-medium placeholder:text-text-muted focus:outline-none focus:ring-4 focus:ring-primary-600/10 focus:border-primary-600 transition-all shadow-sm resize-none"
              placeholder="Explain the requirement (e.g. performance issues, frequent absence)"
              value={formData.reason}
              onChange={(e) => setFormData({...formData, reason: e.target.value})}
            />
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-bold text-text-primary tracking-tight">Priority Level</label>
            <div className="flex gap-4">
                {['Normal', 'Urgent'].map((p) => (
                    <label key={p} className="flex-1 cursor-pointer group">
                        <input 
                            type="radio" 
                            name="priority" 
                            className="hidden peer"
                            checked={formData.priority === p}
                            onChange={() => setFormData({...formData, priority: p})}
                        />
                        <div className={`text-center py-3 rounded-xl border text-sm font-bold transition-all shadow-sm ${
                            formData.priority === p 
                                ? 'bg-primary-600 border-primary-600 text-white shadow-lifted' 
                                : 'bg-white border-border text-text-secondary hover:border-primary-100 hover:bg-primary-50'
                        }`}>
                            {p}
                        </div>
                    </label>
                ))}
            </div>
          </div>

          <div className="pt-4">
            <Button 
              type="submit"
              isLoading={loading}
              disabled={!formData.deployment_id}
              className="w-full rounded-xl"
              rightIcon={Send}
            >
              Submit Replacement Request
            </Button>
          </div>
        </form>
      )}
    </Card>
  );
}
