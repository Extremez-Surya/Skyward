import { s as supabase } from "./supabase_CCoL1XUf.mjs";
import { b as apiError, a as apiSuccess } from "./api-responses_DDA2u443.mjs";
const PATCH = async ({ request }) => {
  try {
    const { user_id } = await request.json();
    const { data, error } = await supabase.from("notifications").update({ is_read: true }).eq("user_id", user_id).select();
    if (error) return apiError(error.message, [], 500);
    return apiSuccess(data, "All notifications marked as read");
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
