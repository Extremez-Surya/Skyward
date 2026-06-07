import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

export const GET: APIRoute = async ({ params }) => {
  const { id } = params;
  const { data, error } = await supabase.from('clients').select('*').eq('id', id).single();
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 404 });
  return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
};

export const PUT: APIRoute = async ({ params, request }) => {
  const { id } = params;
  const body = await request.json();
  const { data, error } = await supabase.from('clients').update(body).eq('id', id).select().single();
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
};

export const DELETE: APIRoute = async ({ params }) => {
  const { id } = params;
  const { error } = await supabase.from('clients').delete().eq('id', id);
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(null, { status: 204 });
};
