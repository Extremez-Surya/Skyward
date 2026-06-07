import { s as supabase } from "./supabase_BQIL2gf4.mjs";
import { b as apiError, a as apiSuccess } from "./api-responses_DDA2u443.mjs";
const GET = async ({ params }) => {
  const { id } = params;
  const { data, error } = await supabase.from("job_requirements").select("*, clients(company_name)").eq("id", id).single();
  if (error) return apiError("Requirement not found", [], 404);
  return apiSuccess(data);
};
const PUT = async ({ params, request }) => {
  const { id } = params;
  try {
    const body = await request.json();
    const { data, error } = await supabase.from("job_requirements").update(body).eq("id", id).select().single();
    if (error) return apiError(error.message, [], 500);
    return apiSuccess(data, "Requirement updated successfully");
  } catch (err) {
    return apiError("Invalid request body", [], 400);
  }
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GET,
  PUT
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
