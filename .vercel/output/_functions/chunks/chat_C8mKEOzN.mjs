import { m as model } from "./gemini_Cgxm0ocP.mjs";
import { a as apiSuccess, b as apiError } from "./api-responses_DDA2u443.mjs";
const SKYWARD_INFO = `
Skyward HR Service Private Limited is a premier manpower supply and HR services company.
Industries & Services: Logistics, Warehouse, Retail, Office Support, Housekeeping, Field Operations, Supervisory.
Platform Features: Lead Generation, Digital Onboarding, Attendance Monitoring, Automated Invoicing, AI Tools.
Tone: Professional, expert, and efficient.
`;
const POST = async ({ request }) => {
  try {
    const { message, history = [] } = await request.json();
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: `System Instruction: You are the Skyward HR AI Assistant. Info: ${SKYWARD_INFO}. Be professional and concise.` }]
        },
        {
          role: "model",
          parts: [{ text: "Understood. I am the Skyward HR AI Assistant. How can I help you today?" }]
        },
        ...history.map((m) => ({
          role: m.role === "user" ? "user" : "model",
          parts: [{ text: m.content }]
        }))
      ]
    });
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();
    return apiSuccess({ response: text });
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
