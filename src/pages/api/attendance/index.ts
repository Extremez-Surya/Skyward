import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
import { apiSuccess, apiError, apiPaginated } from '../../../lib/api-responses';

export const GET: APIRoute = async ({ url }) => {
  const page = parseInt(url.searchParams.get('page') || '1');
  const limit = parseInt(url.searchParams.get('limit') || '20');
  const date = url.searchParams.get('date');
  const deployment_id = url.searchParams.get('deployment_id');
  const clientId = url.searchParams.get('client_id');
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from('attendance')
    .select('*, deployments!inner(client_id, candidates(full_name))', { count: 'exact' });

  if (date) query = query.eq('attendance_date', date);
  if (deployment_id) query = query.eq('deployment_id', deployment_id);
  if (clientId) query = query.eq('deployments.client_id', clientId);

  const { data, error, count } = await query
    .order('attendance_date', { ascending: false })
    .range(from, to);

  if (error) return apiError(error.message, [], 500);
  
  return apiPaginated(data || [], page, limit, count || 0);
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { data, error } = await supabase.from('attendance').insert([body]).select().single();
    if (error) return apiError(error.message, [], 500);
    return apiSuccess(data, 'Attendance marked successfully', 201);
  } catch (err: any) {
    return apiError('Invalid request body', [], 400);
  }
};
