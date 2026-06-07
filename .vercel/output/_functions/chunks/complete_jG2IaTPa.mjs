import { s as supabase } from "./supabase_CCoL1XUf.mjs";
import { b as apiError, a as apiSuccess } from "./api-responses_DDA2u443.mjs";
const PATCH = async ({ params }) => {
  const { id } = params;
  const { data, error } = await supabase.from("deployments").update({ status: "completed" }).eq("id", id).select().single();
  if (error) return apiError(error.message, [], 500);
  return apiSuccess(data, "Deployment completed successfully");
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PATCH
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
