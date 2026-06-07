import { s as supabase } from "./supabase_CCoL1XUf.mjs";
import { b as apiError, a as apiSuccess } from "./api-responses_DDA2u443.mjs";
const GET = async () => {
  const { data, error } = await supabase.from("deployments").select("status");
  if (error) return apiError(error.message, [], 500);
  const stats = {
    total: data.length,
    active: data.filter((d) => d.status === "active").length,
    completed: data.filter((d) => d.status === "completed").length
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
