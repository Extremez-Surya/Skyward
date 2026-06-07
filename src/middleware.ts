import { clerkMiddleware } from '@clerk/astro/server';

console.log('CLERK_SECRET_KEY in middleware:', !!import.meta.env.CLERK_SECRET_KEY);

export const onRequest = clerkMiddleware();
