import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
import { apiSuccess, apiError } from '../../../lib/api-responses';

export const GET: APIRoute = async ({ url }) => {
  const from = url.searchParams.get('from');
  const to = url.searchParams.get('to');
  const clientId = url.searchParams.get('client_id');

  let query = supabase
    .from('attendance')
    .select('*, deployments!inner(client_id, candidates(full_name))');

  if (from) query = query.gte('attendance_date', from);
  if (to) query = query.lte('attendance_date', to);
  if (clientId) query = query.eq('deployments.client_id', clientId);

  const { data, error } = await query.order('attendance_date', { ascending: false });

  if (error) return apiError(error.message, [], 500);
  
  // Aggregate statistics for the report
  const stats = {
    total_records: data.length,
    present: data.filter(r => r.status === 'present').length,
    absent: data.filter(r => r.status === 'absent').length,
    late: data.filter(r => r.status === 'late').length,
    leave: data.filter(r => r.status === 'leave').length,
  };

  return apiSuccess({ stats, records: data });
};
