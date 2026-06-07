import { s as supabase } from "./supabase_BQIL2gf4.mjs";
import { b as apiError, c as apiPaginated, a as apiSuccess } from "./api-responses_DDA2u443.mjs";
const GET = async ({ url }) => {
  const page2 = parseInt(url.searchParams.get("page") || "1");
  const limit = parseInt(url.searchParams.get("limit") || "20");
  const from = (page2 - 1) * limit;
  const to = from + limit - 1;
  const { data, error, count } = await supabase.from("payments").select("*, invoices(invoice_number, clients(company_name))", { count: "exact" }).order("created_at", { ascending: false }).range(from, to);
  if (error) return apiError(error.message, [], 500);
  return apiPaginated(data || [], page2, limit, count || 0);
};
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { data, error } = await supabase.from("payments").insert([body]).select().single();
    if (error) return apiError(error.message, [], 500);
    return apiSuccess(data, "Payment recorded successfully", 201);
  } catch (err) {
    return apiError("Invalid request body", [], 400);
  }
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
