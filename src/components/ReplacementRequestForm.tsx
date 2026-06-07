import React, { useState, useEffect } from 'react';
import { UserMinus, Loader2, CheckCircle, Send } from 'lucide-react';
import { getClientWorkforce, submitReplacementRequest } from '../lib/client';

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
    <div className="p-8 bg-surface border border-surface/50 rounded-2xl">
      <div className="flex items-center gap-2 text-primary mb-6">
        <UserMinus size={20} />
        <h3 className="text-xl font-bold text-text-main">Replacement Request</h3>
      </div>

      {success ? (
        <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
          <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle size={32} />
          </div>
          <h4 className="text-lg font-bold">Request Submitted!</h4>
          <p className="text-sm text-text-muted">We will find a suitable replacement and notify you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-text-muted">Select Worker</label>
            {fetchingWorkforce ? (
                <div className="flex items-center gap-2 text-text-muted text-sm px-4 py-3 bg-background border border-surface/50 rounded-xl">
                    <Loader2 size={16} className="animate-spin" /> Loading workforce...
                </div>
            ) : (
                <select 
                    required
                    className="w-full bg-background border border-surface/50 rounded-xl px-4 py-3 text-sm focus:outline-none"
                    value={formData.deployment_id}
                    onChange={(e) => setFormData({...formData, deployment_id: e.target.value})}
                >
                    <option value="">Choose a worker to replace</option>
                    {workforce.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.candidates.full_name} ({item.role})
                        </option>
                    ))}
                </select>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-text-muted">Reason for Replacement</label>
            <textarea 
              required
              className="w-full bg-background border border-surface/50 rounded-xl px-4 py-3 text-sm focus:outline-none min-h-[100px]"
              placeholder="Please explain why a replacement is needed (e.g. poor performance, frequent absence, etc.)"
              value={formData.reason}
              onChange={(e) => setFormData({...formData, reason: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-text-muted">Priority</label>
            <div className="flex gap-4">
                {['Normal', 'Urgent'].map((p) => (
                    <label key={p} className="flex-1 cursor-pointer">
                        <input 
                            type="radio" 
                            name="priority" 
                            className="hidden peer"
                            checked={formData.priority === p}
                            onChange={() => setFormData({...formData, priority: p})}
                        />
                        <div className={`text-center py-3 rounded-xl border text-sm font-semibold transition-all ${
                            formData.priority === p 
                                ? 'bg-primary/10 border-primary text-primary' 
                                : 'bg-background border-surface/50 text-text-muted hover:border-surface-hover'
                        }`}>
                            {p}
                        </div>
                    </label>
                ))}
            </div>
          </div>

          <div className="pt-4">
            <button 
              type="submit"
              disabled={loading || !formData.deployment_id}
              className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-hover transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-primary/20"
            >
              {loading ? <Loader2 size={20} className="animate-spin" /> : <><Send size={18} /> Submit Request</>}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
