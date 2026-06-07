import { s as supabase } from "./supabase_BQIL2gf4.mjs";
import { b as apiError, a as apiSuccess } from "./api-responses_DDA2u443.mjs";
const PATCH = async ({ params }) => {
  const { id } = params;
  const { data, error } = await supabase.from("job_requirements").update({ status: "closed" }).eq("id", id).select().single();
  if (error) return apiError(error.message, [], 500);
  return apiSuccess(data, "Requirement closed successfully");
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PATCH
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
