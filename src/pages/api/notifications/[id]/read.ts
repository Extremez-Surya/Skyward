import type { APIRoute } from 'astro';
import { supabase } from '../../../../lib/supabase';
import { apiSuccess, apiError } from '../../../../lib/api-responses';

export const PATCH: APIRoute = async ({ params }) => {
  const { id } = params;
  const { data, error } = await supabase
    .from('notifications')
    .update({ is_read: true })
    .eq('id', id)
    .select()
    .single();
    
  if (error) return apiError(error.message, [], 500);
  return apiSuccess(data, 'Notification marked as read');
};
