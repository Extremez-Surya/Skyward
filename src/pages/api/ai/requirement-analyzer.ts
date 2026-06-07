import type { APIRoute } from 'astro';
import { model } from '../../../lib/gemini';
import { apiSuccess, apiError } from '../../../lib/api-responses';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { requirement } = await request.json();

    if (!requirement) {
      return apiError('Requirement text is required', [], 400);
    }

    const prompt = `Analyze this staffing requirement and return JSON:
    - workforce_type
    - recommended_count
    - timeline
    - analysis (brief)
    
    Requirement: ${requirement}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().replace(/```json|```/g, '').trim();
    
    return apiSuccess(JSON.parse(text || '{}'));
  } catch (error: any) {
    return apiError(error.message, [], 500);
  }
};
