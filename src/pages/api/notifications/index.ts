import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
import { apiSuccess, apiError, apiPaginated } from '../../../lib/api-responses';

export const GET: APIRoute = async ({ url }) => {
  const page = parseInt(url.searchParams.get('page') || '1');
  const limit = parseInt(url.searchParams.get('limit') || '20');
  const userId = url.searchParams.get('user_id');
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from('notifications')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to);

  if (userId) query = query.eq('user_id', userId);

  const { data, error, count } = await query;

  if (error) return apiError(error.message, [], 500);
  
  return apiPaginated(data || [], page, limit, count || 0);
};
