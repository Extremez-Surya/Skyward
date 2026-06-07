import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
import { apiSuccess, apiError } from '../../../lib/api-responses';

export const GET: APIRoute = async () => {
  const { data, error } = await supabase
    .from('invoices')
    .select('total_amount, status');

  if (error) return apiError(error.message, [], 500);

  const stats = {
    total_revenue: data.reduce((acc, inv) => acc + Number(inv.total_amount), 0),
    paid: data.filter(inv => inv.status === 'paid').reduce((acc, inv) => acc + Number(inv.total_amount), 0),
    unpaid: data.filter(inv => inv.status === 'unpaid').reduce((acc, inv) => acc + Number(inv.total_amount), 0),
  };

  return apiSuccess(stats);
};
