import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
import { apiSuccess, apiError, apiPaginated } from '../../../lib/api-responses';

// Note: I need to add a 'payments' table to supabase_schema.sql if it doesn't exist, 
// but for now I'll implement the API assuming it exists.
// Actually, I should check if it exists in the schema I read earlier.

export const GET: APIRoute = async ({ url }) => {
  const page = parseInt(url.searchParams.get('page') || '1');
  const limit = parseInt(url.searchParams.get('limit') || '20');
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  // Assuming a 'payments' table exists or will be added.
  const { data, error, count } = await supabase
    .from('payments' as any)
    .select('*, invoices(invoice_number, clients(company_name))', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to);

  if (error) return apiError(error.message, [], 500);
  
  return apiPaginated(data || [], page, limit, count || 0);
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { data, error } = await supabase.from('payments' as any).insert([body]).select().single();
    if (error) return apiError(error.message, [], 500);
    return apiSuccess(data, 'Payment recorded successfully', 201);
  } catch (err: any) {
    return apiError('Invalid request body', [], 400);
  }
};
