import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';
import { apiSuccess, apiError } from '../../lib/api-responses';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { data, error } = await supabase
      .from('leads')
      .insert([body])
      .select()
      .single();

    if (error) return apiError(error.message, [], 500);

    return apiSuccess(data, 'Lead submitted successfully', 201);
  } catch (error: any) {
    console.error('Lead submission error:', error);
    return apiError('Invalid request body', [], 400);
  }
};
