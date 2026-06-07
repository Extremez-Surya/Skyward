import type { APIRoute } from 'astro';
import { supabase } from '../../../../lib/supabase';
import { apiSuccess, apiError } from '../../../../lib/api-responses';

export const PATCH: APIRoute = async ({ params }) => {
  const { id } = params;
  const { data, error } = await supabase
    .from('job_requirements')
    .update({ status: 'closed' })
    .eq('id', id)
    .select()
    .single();
    
  if (error) return apiError(error.message, [], 500);
  return apiSuccess(data, 'Requirement closed successfully');
};
