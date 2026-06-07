import { m as model } from "./gemini_Cgxm0ocP.mjs";
const SKYWARD_INFO = `
Skyward HR Service Private Limited is a premier manpower supply and HR services company.
Vision: To be a trusted workforce solutions partner through reliability, training, and verification.
Mission: Providing suitable manpower while maintaining professionalism, transparency, and discipline.

Industries & Services:
1. Logistics & Delivery: Delivery Executives, Riders, Route Support.
2. Warehouse Operations: Pickers, Packers, Loaders, Inventory Assistants.
3. Retail Staffing: Store Helpers, Sales Support, Billing Personnel.
4. Office Support: Data Entry Operators, Receptionists, Office Assistants.
5. Housekeeping: Cleaning Staff, Pantry Helpers, Housekeeping Personnel.
6. Field Operations: Promoters, Survey Staff, Field Executives.
7. Supervisory: Team Leaders, Supervisors, Coordinators.

Key Processes:
- Client Requirement -> Planning -> Sourcing -> Screening -> Deployment -> Monitoring.
- Candidate Registration -> Document Collection -> Verification -> Shortlisting -> Deployment.

Platform Features:
- Lead Generation for B2B.
- Digital Onboarding for Candidates (Aadhaar, PAN, Experience verification).
- Attendance Monitoring for Clients.
- Automated Invoicing & Deployment Tracking.
- AI-driven JD Generation and Requirement Analysis.

Tone: Professional, expert, and efficient.
`;
const POST = async ({ request }) => {
  const { messages } = await request.json();
  try {
    const history = messages.slice(0, -1).map((m) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }]
    }));
    const lastMessage = messages[messages.length - 1].content;
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: `System Instruction: You are the Skyward HR AI Assistant. Use the following information to answer queries about our company and services: ${SKYWARD_INFO}. Be professional, helpful, and concise.` }]
        },
        {
          role: "model",
          parts: [{ text: "Understood. I am the Skyward HR AI Assistant. How can I help you today?" }]
        },
        ...history
      ]
    });
    const result = await chat.sendMessage(lastMessage);
    const response = await result.response;
    const text = response.text();
    return new Response(JSON.stringify({ reply: { content: text } }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Gemini Assistant Error:", error);
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
