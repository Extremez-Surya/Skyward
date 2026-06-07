import React, { useState, useEffect } from 'react';
import { Search, Plus, Edit2, Trash2 } from 'lucide-react';

interface Candidate {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  status: string;
  experience: string;
  created_at: string;
}

export default function CandidateTable() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredCandidates = candidates.filter(c => 
    c.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
          <input 
            type="text" 
            placeholder="Search candidates..."
            className="w-full pl-10 pr-4 py-2.5 bg-surface border border-surface/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-hover transition-all flex items-center gap-2">
          <Plus size={18} />
          Add Candidate
        </button>
      </div>

      <div className="bg-surface border border-surface/50 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-text-muted">Loading candidates...</div>
        ) : filteredCandidates.length === 0 ? (
          <div className="p-12 text-center text-text-muted">No candidates found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-surface/50 bg-surface/50">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Candidate</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Experience</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Status</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Joined</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface/50">
                {filteredCandidates.map((candidate) => (
                  <tr key={candidate.id} className="hover:bg-primary/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-semibold text-text-main">{candidate.full_name}</span>
                        <span className="text-xs text-text-muted">{candidate.email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-muted">{candidate.experience || 'N/A'}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        candidate.status === 'active' ? 'bg-green-500/10 text-green-500' :
                        candidate.status === 'screening' ? 'bg-blue-500/10 text-blue-500' :
                        'bg-gray-500/10 text-gray-500'
                      }`}>
                        {candidate.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-muted">
                      {new Date(candidate.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-surface-hover rounded-lg text-text-muted hover:text-primary transition-colors">
                          <Edit2 size={16} />
                        </button>
                        <button className="p-2 hover:bg-surface-hover rounded-lg text-text-muted hover:text-red-500 transition-colors">
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
      </div>
    </div>
  );
}
