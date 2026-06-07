import { s as supabase } from "./supabase_CCoL1XUf.mjs";
import { b as apiError, a as apiSuccess } from "./api-responses_DDA2u443.mjs";
const GET = async () => {
  const { data, error } = await supabase.from("invoices").select("total_amount, status");
  if (error) return apiError(error.message, [], 500);
  const stats = {
    total_revenue: data.reduce((acc, inv) => acc + Number(inv.total_amount), 0),
    paid: data.filter((inv) => inv.status === "paid").reduce((acc, inv) => acc + Number(inv.total_amount), 0),
    unpaid: data.filter((inv) => inv.status === "unpaid").reduce((acc, inv) => acc + Number(inv.total_amount), 0)
  };
  return apiSuccess(stats);
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
