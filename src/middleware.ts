import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server';
import { getUserProfile } from './lib/user';

const isAdminRoute = createRouteMatcher(['/admin(.*)']);
const isHRRoute = createRouteMatcher(['/hr(.*)']);
const isClientRoute = createRouteMatcher(['/client(.*)']);
const isCandidateRoute = createRouteMatcher(['/candidate(.*)']);
const isApiRoute = createRouteMatcher(['/api(.*)']);
const hasClerkConfig = Boolean(import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY && import.meta.env.CLERK_SECRET_KEY);

const noopMiddleware = async (_auth: unknown, _context: unknown, next: () => Promise<Response>) => next();

export const onRequest = hasClerkConfig
    ? clerkMiddleware(async (auth, context, next) => {
  const { userId, redirectToSignIn } = auth();

  // Protect all dashboard routes
  if (!userId && (isAdminRoute(context.request) || isHRRoute(context.request) || isClientRoute(context.request) || isCandidateRoute(context.request))) {
    return redirectToSignIn();
  }

  // Protect API routes if no user
  if (!userId && isApiRoute(context.request)) {
      // Allow some public APIs if any (e.g. leads)
      if (context.url.pathname.startsWith('/api/leads') || context.url.pathname.startsWith('/api/webhooks')) {
          return next();
      }
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  if (userId) {
    const profile = await getUserProfile(userId);
    
    // If no profile found, redirect to home (or a setup page)
    if (!profile && (isAdminRoute(context.request) || isHRRoute(context.request) || isClientRoute(context.request) || isCandidateRoute(context.request))) {
        return context.redirect('/');
    }

    if (profile) {
        const role = profile.role;
        const path = context.url.pathname;

        // --- Frontend Route Protection ---
        // Admin Routes: SUPER_ADMIN only
        if (isAdminRoute(context.request) && role !== 'admin') {
            return context.redirect('/dashboard');
        }

        // HR Routes: SUPER_ADMIN, HR_MANAGER
        if (isHRRoute(context.request) && role !== 'admin' && role !== 'manager') {
            return context.redirect('/dashboard');
        }

        // Client Routes: SUPER_ADMIN, HR_MANAGER, CLIENT
        if (isClientRoute(context.request) && role !== 'admin' && role !== 'manager' && role !== 'client') {
            return context.redirect('/dashboard');
        }

        // --- API Route Protection ---
        if (isApiRoute(context.request)) {
            // Super Admin can access everything
            if (role === 'admin') return next();

            // Special cases for public/shared APIs
            if (path.startsWith('/api/leads') || path.startsWith('/api/webhooks') || path.startsWith('/api/auth')) {
                return next();
            }

            // Define allowed prefixes per role
            const allowedApiPrefixes: Record<string, string[]> = {
                manager: [
                    '/api/candidates',
                    '/api/deployments',
                    '/api/attendance',
                    '/api/replacement-requests',
                    '/api/reports',
                    '/api/notifications',
                    '/api/ai',
                    '/api/requirements',
                    '/api/invoices',
                    '/api/payments'
                ],
                client: [
                    '/api/clients',
                    '/api/requirements',
                    '/api/attendance',
                    '/api/invoices',
                    '/api/replacement-requests',
                    '/api/notifications'
                ],
                candidate: [
                    '/api/candidates',
                    '/api/documents',
                    '/api/attendance',
                    '/api/notifications'
                ]
            };

            const allowed = allowedApiPrefixes[role as string]?.some(prefix => path.startsWith(prefix));

            if (!allowed) {
                return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
            }
        }
    }
  }

  return next();
})
    : noopMiddleware;
