import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
import { apiSuccess, apiError } from '../../../lib/api-responses';

export const GET: APIRoute = async ({ params }) => {
  const { id } = params;
  const { data, error } = await supabase.from('candidates').select('*').eq('id', id).single();

  if (error) return apiError('Candidate not found', [], 404);
  return apiSuccess(data);
};

export const PUT: APIRoute = async ({ params, request }) => {
  const { id } = params;
  try {
    const body = await request.json();
    const { data, error } = await supabase.from('candidates').update(body).eq('id', id).select().single();

    if (error) return apiError(error.message, [], 500);
    return apiSuccess(data, 'Candidate updated successfully');
  } catch (err) {
    return apiError('Invalid request body', [], 400);
  }
};

export const DELETE: APIRoute = async ({ params }) => {
  const { id } = params;
  const { error } = await supabase.from('candidates').delete().eq('id', id);

  if (error) return apiError(error.message, [], 500);
  return apiSuccess({}, 'Candidate deleted successfully', 200);
};

