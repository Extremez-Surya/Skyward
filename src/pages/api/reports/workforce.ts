import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
import { apiSuccess, apiError } from '../../../lib/api-responses';

export const GET: APIRoute = async () => {
  const { data, error } = await supabase
    .from('candidates')
    .select('status');

  if (error) return apiError(error.message, [], 500);

  const stats = {
    total: data.length,
    hired: data.filter(c => c.status === 'hired').length,
    screening: data.filter(c => c.status === 'screening').length,
    onboarding: data.filter(c => c.status === 'onboarding').length,
  };

  return apiSuccess(stats);
};
