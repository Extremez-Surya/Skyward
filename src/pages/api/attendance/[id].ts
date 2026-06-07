import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

export const PUT: APIRoute = async ({ params, request }) => {
  const { id } = params;
  const body = await request.json();
  const { data, error } = await supabase.from('attendance').update(body).eq('id', id).select().single();
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
};
