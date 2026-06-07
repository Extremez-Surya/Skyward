import type { APIRoute } from 'astro';
import { model } from '../../../lib/gemini';
import { apiSuccess, apiError } from '../../../lib/api-responses';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { role } = await request.json();

    if (!role) {
      return apiError('Role name is required', [], 400);
    }

    const prompt = `Generate a professional job description for the role: ${role}. Include responsibilities and requirements.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return apiSuccess({ job_description: text });
  } catch (error: any) {
    return apiError(error.message, [], 500);
  }
};
