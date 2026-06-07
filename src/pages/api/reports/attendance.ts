import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
import { apiSuccess, apiError } from '../../../lib/api-responses';

export const GET: APIRoute = async () => {
  const { data, error } = await supabase
    .from('attendance')
    .select('status, attendance_date');

  if (error) return apiError(error.message, [], 500);

  const stats = {
    total: data.length,
    present: data.filter(r => r.status === 'present').length,
    absent: data.filter(r => r.status === 'absent').length,
  };

  return apiSuccess(stats);
};
