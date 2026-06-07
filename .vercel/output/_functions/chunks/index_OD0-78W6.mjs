import { s as supabase } from "./supabase_CCoL1XUf.mjs";
import { b as apiError, c as apiPaginated } from "./api-responses_DDA2u443.mjs";
const GET = async ({ url }) => {
  const page2 = parseInt(url.searchParams.get("page") || "1");
  const limit = parseInt(url.searchParams.get("limit") || "20");
  const userId = url.searchParams.get("user_id");
  const from = (page2 - 1) * limit;
  const to = from + limit - 1;
  let query = supabase.from("notifications").select("*", { count: "exact" }).order("created_at", { ascending: false }).range(from, to);
  if (userId) query = query.eq("user_id", userId);
  const { data, error, count } = await query;
  if (error) return apiError(error.message, [], 500);
  return apiPaginated(data || [], page2, limit, count || 0);
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
