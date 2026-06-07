import { s as supabase } from "./supabase__9NutBMz.mjs";
const GET = async () => {
  const { data, error } = await supabase.from("deployments").select("*, candidates(full_name), clients(company_name)").order("created_at", { ascending: false });
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify(data), { status: 200, headers: { "Content-Type": "application/json" } });
};
const POST = async ({ request }) => {
  const body = await request.json();
  const { data, error } = await supabase.from("deployments").insert([body]).select().single();
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify(data), { status: 201, headers: { "Content-Type": "application/json" } });
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
