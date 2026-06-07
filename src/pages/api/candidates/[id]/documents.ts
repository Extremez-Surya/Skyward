import type { APIRoute } from 'astro';
import { supabase } from '../../../../lib/supabase';
import { apiSuccess, apiError } from '../../../../lib/api-responses';

export const POST: APIRoute = async ({ params, request }) => {
  const { id } = params;
  try {
    const body = await request.json();
    const documentData = {
      ...body,
      candidate_id: id,
    };
    
    const { data, error } = await supabase
      .from('documents')
      .insert([documentData])
      .select()
      .single();
      
    if (error) return apiError(error.message, [], 500);
    return apiSuccess(data, 'Document uploaded successfully', 201);
  } catch (err) {
    return apiError('Invalid request body', [], 400);
  }
};
