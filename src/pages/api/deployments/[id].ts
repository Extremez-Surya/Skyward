import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
import { apiSuccess, apiError } from '../../../lib/api-responses';

export const GET: APIRoute = async ({ params }) => {
  const { id } = params;
  const { data, error } = await supabase
    .from('deployments')
    .select('*, candidates(*), clients(*)')
    .eq('id', id)
    .single();

  if (error) return apiError('Deployment not found', [], 404);
  return apiSuccess(data);
};

export const PUT: APIRoute = async ({ params, request }) => {
  const { id } = params;
  try {
    const body = await request.json();
    const { data, error } = await supabase.from('deployments').update(body).eq('id', id).select().single();

    if (error) return apiError(error.message, [], 500);
    return apiSuccess(data, 'Deployment updated successfully');
  } catch (err) {
    return apiError('Invalid request body', [], 400);
  }
};

