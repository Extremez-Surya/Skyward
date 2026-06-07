import { s as supabase } from "./supabase__9NutBMz.mjs";
const PUT = async ({ params, request }) => {
  const { id } = params;
  const body = await request.json();
  const { data, error } = await supabase.from("attendance").update(body).eq("id", id).select().single();
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify(data), { status: 200, headers: { "Content-Type": "application/json" } });
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PUT
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
