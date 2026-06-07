import { m as model } from "./gemini_D6dz71Ts.mjs";
import { b as apiError, a as apiSuccess } from "./api-responses_DDA2u443.mjs";
const POST = async ({ request }) => {
  try {
    const { requirement } = await request.json();
    if (!requirement) {
      return apiError("Requirement text is required", [], 400);
    }
    const prompt = `Analyze this staffing requirement and return JSON:
    - workforce_type
    - recommended_count
    - timeline
    - analysis (brief)
    
    Requirement: ${requirement}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().replace(/```json|```/g, "").trim();
    return apiSuccess(JSON.parse(text || "{}"));
  } catch (error) {
    return apiError(error.message, [], 500);
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
