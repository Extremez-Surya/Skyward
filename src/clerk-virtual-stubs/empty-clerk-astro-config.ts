// Empty stub for Clerk's virtual module during builds where
// CLERK_PUBLISHABLE_KEY is not provided.
//
// Some pages/components import from `virtual:@clerk/astro/config`.
// During CI/Vercel builds without Clerk keys, Vite/Rollup fails to resolve
// the virtual module. Aliasing this file prevents the build from crashing.

export const isStaticOutput = false;


