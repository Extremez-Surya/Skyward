import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
import { apiSuccess, apiError, apiPaginated } from '../../../lib/api-responses';

export const GET: APIRoute = async ({ url }) => {
  const page = parseInt(url.searchParams.get('page') || '1');
  const limit = parseInt(url.searchParams.get('limit') || '20');
  const clientId = url.searchParams.get('client_id');
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from('replacement_requests')
    .select('*, clients(company_name), deployments(role, candidates(full_name))', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to);

  if (clientId) query = query.eq('client_id', clientId);

  const { data, error, count } = await query;

  if (error) return apiError(error.message, [], 500);
  
  return apiPaginated(data || [], page, limit, count || 0);
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { data, error } = await supabase.from('replacement_requests').insert([body]).select().single();
    if (error) return apiError(error.message, [], 500);
    return apiSuccess(data, 'Replacement request created successfully', 201);
  } catch (err: any) {
    return apiError('Invalid request body', [], 400);
  }
};
