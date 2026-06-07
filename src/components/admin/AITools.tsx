import React, { useState } from 'react';
import { Sparkles, Loader2, FileText, Send } from 'lucide-react';
import { Button } from '../ui/Button';

interface AIToolsProps {
  role: 'admin' | 'manager' | 'client' | 'candidate';
}

export default function AITools({ role }: AIToolsProps) {
  const [jdRole, setJdRole] = useState('');
  const [jdOutput, setJdOutput] = useState('');
  const [reqText, setReqText] = useState('');
  const [reqAnalysis, setReqAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState<string | null>(null);

  const showJD = role === 'admin' || role === 'manager';
  const showAnalyzer = role === 'admin' || role === 'manager' || role === 'client';

  if (!showJD && !showAnalyzer) return null;

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
    <div className={`grid grid-cols-1 ${showJD && showAnalyzer ? 'lg:grid-cols-2' : ''} gap-8`}>
      {/* JD Generator */}
      {showJD && (
        <div className="p-8 bg-card border border-border rounded-[32px] shadow-premium space-y-6">
          <div className="flex items-center gap-3 text-primary-600">
            <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
              <Sparkles size={20} />
            </div>
            <h3 className="text-xl font-bold text-text-primary tracking-tight">AI Job Description</h3>
          </div>
          <div className="flex gap-3">
            <input 
              type="text" 
              placeholder="e.g. Warehouse Supervisor"
              className="flex-1 bg-surface border border-border rounded-xl px-5 py-3 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-primary-600/10 transition-all"
              value={jdRole}
              onChange={(e) => setJdRole(e.target.value)}
            />
            <Button 
              onClick={generateJD}
              isLoading={loading === 'jd'}
              size="md"
              className="px-6 rounded-xl"
            >
              Generate
            </Button>
          </div>
          {jdOutput && (
            <div className="mt-6 p-6 bg-surface border border-border rounded-2xl max-h-80 overflow-y-auto whitespace-pre-wrap text-sm text-text-secondary leading-relaxed font-medium">
              {jdOutput}
            </div>
          )}
        </div>
      )}

      {/* Requirement Analyzer */}
      {showAnalyzer && (
        <div className="p-8 bg-card border border-border rounded-[32px] shadow-premium space-y-6">
          <div className="flex items-center gap-3 text-primary-600">
            <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
              <Sparkles size={20} />
            </div>
            <h3 className="text-xl font-bold text-text-primary tracking-tight">Requirement Analyzer</h3>
          </div>
          <textarea 
            placeholder="Paste raw client requirement text here..."
            className="w-full h-32 bg-surface border border-border rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-primary-600/10 transition-all resize-none"
            value={reqText}
            onChange={(e) => setReqText(e.target.value)}
          />
          <Button 
            onClick={analyzeRequirement}
            isLoading={loading === 'req'}
            className="w-full rounded-xl"
            rightIcon={Send}
          >
            Analyze Requirement
          </Button>
          {reqAnalysis && (
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 bg-surface border border-border rounded-xl">
                <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">Workforce Type</div>
                <div className="text-sm font-bold text-text-primary">{reqAnalysis.workforce_type}</div>
              </div>
              <div className="p-4 bg-surface border border-border rounded-xl">
                <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">Timeline</div>
                <div className="text-sm font-bold text-text-primary">{reqAnalysis.estimated_hiring_timeline}</div>
              </div>
              <div className="p-4 bg-surface border border-border rounded-xl col-span-2">
                <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">Recommendation</div>
                <div className="text-sm font-medium text-text-secondary leading-relaxed">{reqAnalysis.staffing_recommendation}</div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
