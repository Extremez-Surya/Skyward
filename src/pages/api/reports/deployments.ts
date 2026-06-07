import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
import { apiSuccess, apiError } from '../../../lib/api-responses';

export const GET: APIRoute = async () => {
  const { data, error } = await supabase
    .from('deployments')
    .select('status');

  if (error) return apiError(error.message, [], 500);

  const stats = {
    total: data.length,
    active: data.filter(d => d.status === 'active').length,
    completed: data.filter(d => d.status === 'completed').length,
  };

  return apiSuccess(stats);
};
