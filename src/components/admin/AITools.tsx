import React, { useState } from 'react';
import { Sparkles, Loader2, FileText, Send } from 'lucide-react';

export default function AITools() {
  const [jdRole, setJdRole] = useState('');
  const [jdOutput, setJdOutput] = useState('');
  const [reqText, setReqText] = useState('');
  const [reqAnalysis, setReqAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState<string | null>(null);

  const generateJD = async () => {
    setLoading('jd');
    try {
      const res = await fetch('/api/ai/generate-jd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role_name: jdRole }),
      });
      const data = await res.json();
      setJdOutput(data.jd);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(null);
    }
  };

  const analyzeRequirement = async () => {
    setLoading('req');
    try {
      const res = await fetch('/api/ai/analyze-requirement', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ requirement: reqText }),
      });
      const data = await res.json();
      setReqAnalysis(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* JD Generator */}
      <div className="p-6 bg-surface border border-surface/50 rounded-2xl space-y-4">
        <div className="flex items-center gap-2 text-primary">
          <Sparkles size={20} />
          <h3 className="font-bold">AI JD Generator</h3>
        </div>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Enter role name (e.g. Warehouse Supervisor)"
            className="flex-1 bg-background border border-surface/50 rounded-xl px-4 py-2 text-sm focus:outline-none"
            value={jdRole}
            onChange={(e) => setJdRole(e.target.value)}
          />
          <button 
            onClick={generateJD}
            disabled={!!loading}
            className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-hover disabled:opacity-50"
          >
            {loading === 'jd' ? <Loader2 size={18} className="animate-spin" /> : 'Generate'}
          </button>
        </div>
        {jdOutput && (
          <div className="mt-4 p-4 bg-background border border-surface/50 rounded-xl max-h-60 overflow-y-auto whitespace-pre-wrap text-xs text-text-muted">
            {jdOutput}
          </div>
        )}
      </div>

      {/* Requirement Analyzer */}
      <div className="p-6 bg-surface border border-surface/50 rounded-2xl space-y-4">
        <div className="flex items-center gap-2 text-primary">
          <Sparkles size={20} />
          <h3 className="font-bold">AI Requirement Analyzer</h3>
        </div>
        <textarea 
          placeholder="Paste client requirement text here..."
          className="w-full h-24 bg-background border border-surface/50 rounded-xl px-4 py-3 text-sm focus:outline-none resize-none"
          value={reqText}
          onChange={(e) => setReqText(e.target.value)}
        />
        <button 
          onClick={analyzeRequirement}
          disabled={!!loading}
          className="w-full py-2 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-hover disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading === 'req' ? <Loader2 size={18} className="animate-spin" /> : <><Send size={16} /> Analyze</>}
        </button>
        {reqAnalysis && (
          <div className="mt-4 p-4 bg-background border border-surface/50 rounded-xl text-xs space-y-2">
            <p><strong>Workforce Type:</strong> {reqAnalysis.workforce_type}</p>
            <p><strong>Timeline:</strong> {reqAnalysis.estimated_hiring_timeline}</p>
            <p><strong>Recommendation:</strong> {reqAnalysis.staffing_recommendation}</p>
            <p><strong>Key Skills:</strong> {reqAnalysis.key_skills_needed}</p>
          </div>
        )}
      </div>
    </div>
  );
}
