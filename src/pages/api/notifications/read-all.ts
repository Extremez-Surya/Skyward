import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
import { apiSuccess, apiError } from '../../../lib/api-responses';

export const PATCH: APIRoute = async ({ request }) => {
  try {
    const { user_id } = await request.json();
    const { data, error } = await supabase
      .from('notifications')
      .update({ is_read: true })
      .eq('user_id', user_id)
      .select();
      
    if (error) return apiError(error.message, [], 500);
    return apiSuccess(data, 'All notifications marked as read');
  } catch (err) {
    return apiError('Invalid request body', [], 400);
  }
};
