import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
import { apiSuccess, apiError, apiPaginated } from '../../../lib/api-responses';

export const GET: APIRoute = async ({ url }) => {
  const page = parseInt(url.searchParams.get('page') || '1');
  const limit = parseInt(url.searchParams.get('limit') || '20');
  const status = url.searchParams.get('status');
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from('candidates')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to);

  if (status) {
    query = query.eq('status', status);
  }

  const { data, error, count } = await query;

  if (error) return apiError(error.message, [], 500);
  
  return apiPaginated(data || [], page, limit, count || 0);
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { data, error } = await supabase.from('candidates').insert([body]).select().single();
    if (error) return apiError(error.message, [], 500);
    return apiSuccess(data, 'Candidate created successfully', 201);
  } catch (err: any) {
    return apiError('Invalid request body', [], 400);
  }
};
