import { s as supabase } from "./supabase_CCoL1XUf.mjs";
import { b as apiError, a as apiSuccess } from "./api-responses_DDA2u443.mjs";
const PATCH = async ({ params, request }) => {
  const { id } = params;
  try {
    const body = await request.json();
    const { data, error } = await supabase.from("replacement_requests").update(body).eq("id", id).select().single();
    if (error) return apiError(error.message, [], 500);
    return apiSuccess(data, "Replacement request updated successfully");
  } catch (err) {
    return apiError("Invalid request body", [], 400);
  }
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PATCH
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
