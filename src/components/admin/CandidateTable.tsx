import React, { useState, useEffect } from 'react';
import { Search, Plus, Edit2, Trash2, FileText, X, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';

interface Candidate {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  status: string;
  experience: string;
  created_at: string;
  documents?: { id: string, document_type: string, document_url: string }[];
}

export default function CandidateTable() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      const response = await fetch('/api/candidates');
      const data = await response.json();
      setCandidates(data);
    } catch (error) {
      console.error('Error fetching candidates:', error);
    } finally {
      setLoading(false);
    }
  };

  const viewDocuments = async (id: string) => {
    try {
      const response = await fetch(`/api/candidates/${id}`);
      const data = await response.json();
      setSelectedCandidate(data);
    } catch (error) {
      console.error('Error fetching candidate documents:', error);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/candidates/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      fetchCandidates();
      setSelectedCandidate(null);
    } catch (error) {
      console.error('Error updating candidate status:', error);
    }
  };

  const filteredCandidates = candidates.filter(c => 
    c.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted z-10" size={18} />
          <Input 
            placeholder="Search candidates..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button leftIcon={Plus}>
          Add Candidate
        </Button>
      </div>

      <Card variant="standard" animate={false} className="p-0 overflow-hidden border-border">
        {loading ? (
          <div className="p-12 text-center text-text-secondary">Loading candidates...</div>
        ) : filteredCandidates.length === 0 ? (
          <div className="p-12 text-center text-text-secondary">No candidates found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="px-6 h-[56px] text-xs font-semibold uppercase tracking-wider text-text-muted">Candidate</th>
                  <th className="px-6 h-[56px] text-xs font-semibold uppercase tracking-wider text-text-muted">Experience</th>
                  <th className="px-6 h-[56px] text-xs font-semibold uppercase tracking-wider text-text-muted">Status</th>
                  <th className="px-6 h-[56px] text-xs font-semibold uppercase tracking-wider text-text-muted">Joined</th>
                  <th className="px-6 h-[56px] text-xs font-semibold uppercase tracking-wider text-text-muted text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredCandidates.map((candidate) => (
                  <tr key={candidate.id} className="hover:bg-primary-600/5 transition-colors group">
                    <td className="px-6 h-[56px]">
                      <div className="flex flex-col">
                        <span className="font-semibold text-text-primary group-hover:text-primary-600 transition-colors">{candidate.full_name}</span>
                        <span className="text-xs text-text-muted">{candidate.email}</span>
                      </div>
                    </td>
                    <td className="px-6 h-[56px] text-sm text-text-secondary">{candidate.experience || 'N/A'}</td>
                    <td className="px-6 h-[56px]">
                      <Badge variant={
                        candidate.status === 'active' ? 'success' :
                        candidate.status === 'screening' ? 'primary' :
                        'info'
                      }>
                        {candidate.status}
                      </Badge>
                    </td>
                    <td className="px-6 h-[56px] text-sm text-text-secondary">
                      {new Date(candidate.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 h-[56px] text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => viewDocuments(candidate.id)}
                          className="p-2 hover:bg-surface rounded-lg text-text-muted hover:text-primary-600 transition-colors"
                          title="View Documents"
                        >
                          <FileText size={16} />
                        </button>
                        <button className="p-2 hover:bg-surface rounded-lg text-text-muted hover:text-primary-600 transition-colors">
                          <Edit2 size={16} />
                        </button>
                        <button className="p-2 hover:bg-surface rounded-lg text-text-muted hover:text-danger transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {/* Document Modal */}
      {selectedCandidate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-up">
          <Card variant="standard" animate={false} className="w-full max-w-lg p-0 shadow-2xl overflow-hidden border-border bg-card">
            <div className="p-6 border-b border-border flex justify-between items-center bg-surface/50">
              <h3 className="font-bold text-lg text-text-primary">Documents: {selectedCandidate.full_name}</h3>
              <button onClick={() => setSelectedCandidate(null)} className="p-2 hover:bg-surface rounded-lg text-text-muted transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              {selectedCandidate.documents && selectedCandidate.documents.length > 0 ? (
                selectedCandidate.documents.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-4 bg-background border border-border rounded-md group hover:border-primary-600/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText className="text-primary-600" size={20} />
                      <span className="text-sm font-medium text-text-primary">{doc.document_type}</span>
                    </div>
                    <a 
                      href={doc.document_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-semibold text-primary-600 hover:underline"
                    >
                      View <ExternalLink size={14} />
                    </a>
                  </div>
                ))
              ) : (
                <div className="py-8 text-center text-text-muted italic">No documents uploaded yet.</div>
              )}
            </div>
            <div className="p-6 bg-surface/50 border-t border-border flex justify-between items-center">
              <div className="flex gap-2">
                <Button 
                  size="sm"
                  variant="primary"
                  className="bg-success hover:bg-success/90 border-none"
                  onClick={() => updateStatus(selectedCandidate.id, 'approved')}
                >
                  Approve
                </Button>
                <Button 
                  size="sm"
                  variant="primary"
                  className="bg-danger hover:bg-danger/90 border-none"
                  onClick={() => updateStatus(selectedCandidate.id, 'rejected')}
                >
                  Reject
                </Button>
              </div>
              <Button 
                size="sm"
                variant="outline"
                onClick={() => setSelectedCandidate(null)}
              >
                Close
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
