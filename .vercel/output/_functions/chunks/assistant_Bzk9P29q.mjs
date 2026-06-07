import { o as openai } from "./openai_BsL5wWRb.mjs";
const SKYWARD_INFO = `
Skyward HR Service is an enterprise workforce management platform.
Services: Manpower supply, workforce deployment, attendance management, candidate onboarding, client HR operations.
Core features: Real-time attendance, digital document verification, automated invoicing, AI-driven requirement analysis.
Target audience: Manufacturing units, logistics companies, retail chains, and security firms.
`;
const POST = async ({ request }) => {
  const { messages } = await request.json();
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are the Skyward HR AI Assistant. Use the following information to answer queries about our company and services: ${SKYWARD_INFO}. Be professional, helpful, and concise.`
        },
        ...messages
      ]
    });
    const reply = response.choices[0].message;
    return new Response(JSON.stringify({ reply }), {
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
