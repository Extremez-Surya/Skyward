import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
import { apiSuccess, apiError } from '../../../lib/api-responses';

export const POST: APIRoute = async ({ request }) => {
  try {
    const records = await request.json();
    if (!Array.isArray(records)) {
      return apiError('Expected an array of attendance records', [], 400);
    }

    const { data, error } = await supabase.from('attendance').insert(records).select();
    
    if (error) return apiError(error.message, [], 500);
    return apiSuccess(data, `${data.length} attendance records uploaded successfully`, 201);
  } catch (err: any) {
    return apiError('Invalid request body', [], 400);
  }
};
