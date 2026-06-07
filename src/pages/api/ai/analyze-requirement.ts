import type { APIRoute } from 'astro';
import { model } from '../../../lib/gemini';

export const POST: APIRoute = async ({ request }) => {
  const { requirement } = await request.json();

  if (!requirement) {
    return new Response(JSON.stringify({ error: 'Requirement text is required' }), { status: 400 });
  }

  try {
    const prompt = `You are an HR Strategy Expert. Analyze the following client requirement and output a structured staffing recommendation in JSON format.
    
    Fields to extract:
    - role_name: (string) The job title or role
    - worker_count: (number) How many people are needed (default 1)
    - location: (string) The city or area
    - workforce_type: (string) e.g. Skilled, Unskilled, Semi-skilled
    - estimated_hiring_timeline: (string) e.g. 2-3 days, 1 week
    - staffing_recommendation: (string) Brief strategic advice
    - key_skills_needed: (string) Comma separated skills
    
    Requirement: ${requirement}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Clean JSON if model returns markdown blocks
    const jsonStr = text.replace(/```json|```/g, '').trim();
    const analysis = JSON.parse(jsonStr || '{}');

    return new Response(JSON.stringify(analysis), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Gemini Error:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
