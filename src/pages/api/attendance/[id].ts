import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
import { apiSuccess, apiError } from '../../../lib/api-responses';

export const PUT: APIRoute = async ({ params, request }) => {
  const { id } = params;
  try {
    const body = await request.json();
    const { data, error } = await supabase.from('attendance').update(body).eq('id', id).select().single();
    if (error) return apiError(error.message, [], 500);
    return apiSuccess(data, 'Attendance updated successfully');
  } catch (err) {
    return apiError('Invalid request body', [], 400);
  }
};
