import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
import { apiSuccess, apiError } from '../../../lib/api-responses';

export const GET: APIRoute = async ({ params }) => {
  const { id } = params;
  const { data, error } = await supabase.from('clients').select('*').eq('id', id).single();
  
  if (error) return apiError('Client not found', [], 404);
  return apiSuccess(data);
};

export const PUT: APIRoute = async ({ params, request }) => {
  const { id } = params;
  try {
    const body = await request.json();
    const { data, error } = await supabase.from('clients').update(body).eq('id', id).select().single();
    
    if (error) return apiError(error.message, [], 500);
    return apiSuccess(data, 'Client updated successfully');
  } catch (err) {
    return apiError('Invalid request body', [], 400);
  }
};

export const DELETE: APIRoute = async ({ params }) => {
  const { id } = params;
  const { error } = await supabase.from('clients').delete().eq('id', id);
  
  if (error) return apiError(error.message, [], 500);
  return apiSuccess({}, 'Client deleted successfully', 200);
};
