import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
import { apiSuccess, apiError } from '../../../lib/api-responses';

export const GET: APIRoute = async ({ params }) => {
  const { id } = params;
  const { data, error } = await supabase
    .from('invoices')
    .select('*, clients(*)')
    .eq('id', id)
    .single();
  
  if (error) return apiError('Invoice not found', [], 404);
  return apiSuccess(data);
};

export const PATCH: APIRoute = async ({ params, request }) => {
  const { id } = params;
  try {
    const body = await request.json();
    const { data, error } = await supabase
      .from('invoices')
      .update(body)
      .eq('id', id)
      .select()
      .single();
    
    if (error) return apiError(error.message, [], 500);
    return apiSuccess(data, 'Invoice updated successfully');
  } catch (err) {
    return apiError('Invalid request body', [], 400);
  }
};
