import { m as model } from "./gemini_Cgxm0ocP.mjs";
const POST = async ({ request }) => {
  const { role_name } = await request.json();
  if (!role_name) {
    return new Response(JSON.stringify({ error: "Role name is required" }), { status: 400 });
  }
  try {
    const prompt = `You are an expert HR manager. Generate a professional and detailed job description based on the provided role name. Include responsibilities, requirements, and key skills.
    
    Role: ${role_name}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return new Response(JSON.stringify({ jd: text }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Gemini JD Generation Error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
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
