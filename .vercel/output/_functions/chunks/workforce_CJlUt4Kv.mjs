import { s as supabase } from "./supabase_BQIL2gf4.mjs";
import { b as apiError, a as apiSuccess } from "./api-responses_DDA2u443.mjs";
const GET = async () => {
  const { data, error } = await supabase.from("candidates").select("status");
  if (error) return apiError(error.message, [], 500);
  const stats = {
    total: data.length,
    hired: data.filter((c) => c.status === "hired").length,
    screening: data.filter((c) => c.status === "screening").length,
    onboarding: data.filter((c) => c.status === "onboarding").length
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
