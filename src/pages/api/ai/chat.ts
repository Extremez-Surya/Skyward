import type { APIRoute } from 'astro';
import { model } from '../../../lib/gemini';
import { apiSuccess, apiError } from '../../../lib/api-responses';

const SKYWARD_INFO = `
Skyward HR Service Private Limited is a premier manpower supply and HR services company.
Industries & Services: Logistics, Warehouse, Retail, Office Support, Housekeeping, Field Operations, Supervisory.
Platform Features: Lead Generation, Digital Onboarding, Attendance Monitoring, Automated Invoicing, AI Tools.
Tone: Professional, expert, and efficient.
`;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { message, history = [] } = await request.json();

    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: `System Instruction: You are the Skyward HR AI Assistant. Info: ${SKYWARD_INFO}. Be professional and concise.` }],
        },
        {
          role: 'model',
          parts: [{ text: 'Understood. I am the Skyward HR AI Assistant. How can I help you today?' }],
        },
        ...history.map((m: any) => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }],
        }))
      ],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return apiSuccess({ response: text });
  } catch (error: any) {
    return apiError(error.message, [], 500);
  }
};
