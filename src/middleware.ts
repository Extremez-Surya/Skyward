import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server';
import { getUserProfile } from './lib/user';

const isAdminRoute = createRouteMatcher(['/admin(.*)']);
const isHRRoute = createRouteMatcher(['/hr(.*)']);
const isClientRoute = createRouteMatcher(['/client(.*)']);
const isCandidateRoute = createRouteMatcher(['/candidate(.*)']);
const isApiRoute = createRouteMatcher(['/api(.*)']);

export const onRequest = clerkMiddleware(async (auth, context) => {
  const { userId, redirectToSignIn } = auth();

  // Protect all dashboard routes
  if (!userId && (isAdminRoute(context.request) || isHRRoute(context.request) || isClientRoute(context.request) || isCandidateRoute(context.request))) {
    return redirectToSignIn();
  }

  // Protect API routes if no user
  if (!userId && isApiRoute(context.request)) {
      // Allow some public APIs if any (e.g. leads)
      if (context.url.pathname.startsWith('/api/leads') || context.url.pathname.startsWith('/api/webhooks')) {
          return;
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

        // Candidate Routes: CANDIDATE only
        if (isCandidateRoute(context.request) && role !== 'candidate' && role !== 'admin' && role !== 'manager') {
            return context.redirect('/dashboard');
        }

        // --- API Route Protection ---
        if (isApiRoute(context.request)) {
            // Super Admin can access everything
            if (role === 'admin') return;

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
                    '/api/invoices', // View/Download only (handled in logic or RLS)
                    '/api/payments'
                ],
                client: [
                    '/api/clients', // Restricted by RLS usually
                    '/api/requirements',
                    '/api/attendance',
                    '/api/invoices',
                    '/api/replacement-requests',
                    '/api/notifications'
                ],
                candidate: [
                    '/api/candidates', // Own profile
                    '/api/documents',
                    '/api/attendance',
                    '/api/notifications'
                ]
            };

            const allowed = allowedApiPrefixes[role as string]?.some(prefix => path.startsWith(prefix));
            
            // Special cases for public/shared APIs
            if (path.startsWith('/api/leads') || path.startsWith('/api/webhooks') || path.startsWith('/api/auth')) {
                return;
            }

            if (!allowed) {
                return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
            }
        }
    }
  }
});
