import { s as supabase } from "./supabase__9NutBMz.mjs";
const GET = async ({ params }) => {
  const { id } = params;
  const { data, error } = await supabase.from("deployments").select("*, candidates(full_name), clients(company_name)").eq("id", id).single();
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 404 });
  return new Response(JSON.stringify(data), { status: 200, headers: { "Content-Type": "application/json" } });
};
const PUT = async ({ params, request }) => {
  const { id } = params;
  const body = await request.json();
  const { data, error } = await supabase.from("deployments").update(body).eq("id", id).select().single();
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify(data), { status: 200, headers: { "Content-Type": "application/json" } });
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GET,
  PUT
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
