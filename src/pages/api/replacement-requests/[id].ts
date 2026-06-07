import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
import { apiSuccess, apiError } from '../../../lib/api-responses';

export const PATCH: APIRoute = async ({ params, request }) => {
  const { id } = params;
  try {
    const body = await request.json();
    const { data, error } = await supabase
      .from('replacement_requests')
      .update(body)
      .eq('id', id)
      .select()
      .single();
    
    if (error) return apiError(error.message, [], 500);
    return apiSuccess(data, 'Replacement request updated successfully');
  } catch (err) {
    return apiError('Invalid request body', [], 400);
  }
};
