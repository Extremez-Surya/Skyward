import { o as openai } from "./openai_BsL5wWRb.mjs";
const POST = async ({ request }) => {
  const { requirement } = await request.json();
  if (!requirement) {
    return new Response(JSON.stringify({ error: "Requirement text is required" }), { status: 400 });
  }
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are an HR Strategy Expert. Analyze the following client requirement and output a structured staffing recommendation in JSON format. Fields: workforce_type, estimated_hiring_timeline, staffing_recommendation, key_skills_needed."
        },
        {
          role: "user",
          content: requirement
        }
      ],
      response_format: { type: "json_object" }
    });
    const analysis = JSON.parse(response.choices[0].message.content || "{}");
    return new Response(JSON.stringify(analysis), {
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
