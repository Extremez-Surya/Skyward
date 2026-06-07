import type { APIRoute } from 'astro';
import { apiSuccess, apiError } from '../../../lib/api-responses';

export const GET: APIRoute = async ({ locals }) => {
  const auth = locals.auth();
  
  if (!auth.userId) {
    return apiError('Unauthorized', [], 401);
  }

  // Locals.auth() usually contains user info if configured, 
  // or we can fetch from Clerk API.
  // For now, return basic info from session.
  return apiSuccess({
    id: auth.userId,
    sessionClaims: auth.sessionClaims,
  });
};
