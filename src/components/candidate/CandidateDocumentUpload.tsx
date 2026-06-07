import React, { useState } from 'react';
import { Upload, File, CheckCircle, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface Props {
  candidateId: string;
}

export default function CandidateDocumentUpload({ candidateId }: Props) {
  const [uploading, setUploading] = useState(false);
  const [documents, setDocuments] = useState<{type: string, status: string}[]>([
    { type: 'Aadhaar Card', status: 'pending' },
    { type: 'PAN Card', status: 'pending' },
    { type: 'Resume', status: 'pending' },
    { type: 'Photograph', status: 'pending' }
  ]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>, docType: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${candidateId}/${docType.replace(/\s+/g, '_').toLowerCase()}_${Date.now()}.${fileExt}`;
      const filePath = `documents/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('documents')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('documents')
        .getPublicUrl(filePath);

      // Save record in documents table
      const response = await fetch('/api/documents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          candidate_id: candidateId,
          document_type: docType,
          document_url: publicUrl,
        }),
      });

      if (!response.ok) throw new Error('Failed to save document record');

      setDocuments(docs => docs.map(d => d.type === docType ? { ...d, status: 'uploaded' } : d));
    } catch (error) {
      console.error('Error uploading document:', error);
      alert('Failed to upload document. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      {documents.map((doc) => (
        <div key={doc.type} className="flex items-center justify-between p-4 bg-surface border border-surface/50 rounded-xl">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              doc.status === 'uploaded' ? 'bg-green-500/10 text-green-500' : 'bg-primary/10 text-primary'
            }`}>
              <File size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-text-main">{doc.type}</p>
              <p className="text-xs text-text-muted">{doc.status === 'uploaded' ? 'Verified' : 'Required'}</p>
            </div>
          </div>
          
          {doc.status === 'uploaded' ? (
            <div className="flex items-center gap-2 text-green-500">
              <CheckCircle size={18} />
              <span className="text-xs font-medium">Uploaded</span>
            </div>
          ) : (
            <label className="cursor-pointer px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2">
              {uploading ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
              Upload
              <input 
                type="file" 
                className="hidden" 
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => handleUpload(e, doc.type)}
                disabled={uploading}
              />
            </label>
          )}
        </div>
      ))}
    </div>
  );
}
