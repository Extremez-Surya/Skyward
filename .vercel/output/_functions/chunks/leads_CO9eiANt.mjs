import { s as supabase } from "./supabase_BQIL2gf4.mjs";
import { b as apiError, a as apiSuccess } from "./api-responses_DDA2u443.mjs";
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { data, error } = await supabase.from("leads").insert([body]).select().single();
    if (error) return apiError(error.message, [], 500);
    return apiSuccess(data, "Lead submitted successfully", 201);
  } catch (error) {
    console.error("Lead submission error:", error);
    return apiError("Invalid request body", [], 400);
  }
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
