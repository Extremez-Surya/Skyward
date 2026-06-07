import { s as supabase } from "./supabase_BQIL2gf4.mjs";
import { b as apiError, a as apiSuccess } from "./api-responses_DDA2u443.mjs";
const GET = async ({ url }) => {
  const from = url.searchParams.get("from");
  const to = url.searchParams.get("to");
  const clientId = url.searchParams.get("client_id");
  let query = supabase.from("attendance").select("*, deployments!inner(client_id, candidates(full_name))");
  if (from) query = query.gte("attendance_date", from);
  if (to) query = query.lte("attendance_date", to);
  if (clientId) query = query.eq("deployments.client_id", clientId);
  const { data, error } = await query.order("attendance_date", { ascending: false });
  if (error) return apiError(error.message, [], 500);
  const stats = {
    total_records: data.length,
    present: data.filter((r) => r.status === "present").length,
    absent: data.filter((r) => r.status === "absent").length,
    late: data.filter((r) => r.status === "late").length,
    leave: data.filter((r) => r.status === "leave").length
  };
  return apiSuccess({ stats, records: data });
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
