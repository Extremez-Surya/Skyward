import { s as supabase } from "./supabase_BQIL2gf4.mjs";
import { b as apiError, a as apiSuccess } from "./api-responses_DDA2u443.mjs";
const POST = async ({ request }) => {
  try {
    const records = await request.json();
    if (!Array.isArray(records)) {
      return apiError("Expected an array of attendance records", [], 400);
    }
    const { data, error } = await supabase.from("attendance").insert(records).select();
    if (error) return apiError(error.message, [], 500);
    return apiSuccess(data, `${data.length} attendance records uploaded successfully`, 201);
  } catch (err) {
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
