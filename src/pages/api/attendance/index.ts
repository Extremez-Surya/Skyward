import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const date = url.searchParams.get('date') || new URLSearchParams(url.search).get('date');
  const deployment_id = url.searchParams.get('deployment_id');

  let query = supabase.from('attendance').select('*, deployments(candidates(full_name))');
  if (date) query = query.eq('attendance_date', date);
  if (deployment_id) query = query.eq('deployment_id', deployment_id);

  const { data, error } = await query.order('created_at', { ascending: false });

  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
};

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { data, error } = await supabase.from('attendance').insert([body]).select().single();
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify(data), { status: 201, headers: { 'Content-Type': 'application/json' } });
};
