import { o as openai } from "./openai_BsL5wWRb.mjs";
const POST = async ({ request }) => {
  const { role_name } = await request.json();
  if (!role_name) {
    return new Response(JSON.stringify({ error: "Role name is required" }), { status: 400 });
  }
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are an expert HR manager. Generate a professional and detailed job description based on the provided role name. Include responsibilities, requirements, and key skills."
        },
        {
          role: "user",
          content: `Role: ${role_name}`
        }
      ]
    });
    const jd = response.choices[0].message.content;
    return new Response(JSON.stringify({ jd }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
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
