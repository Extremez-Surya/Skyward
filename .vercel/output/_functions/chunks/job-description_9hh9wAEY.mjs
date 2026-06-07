import { m as model } from "./gemini_D6dz71Ts.mjs";
import { b as apiError, a as apiSuccess } from "./api-responses_DDA2u443.mjs";
const POST = async ({ request }) => {
  try {
    const { role } = await request.json();
    if (!role) {
      return apiError("Role name is required", [], 400);
    }
    const prompt = `Generate a professional job description for the role: ${role}. Include responsibilities and requirements.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return apiSuccess({ job_description: text });
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
