// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import clerk from '@clerk/astro';
import sitemap from '@astrojs/sitemap';

// Some pages import Clerk components directly, which causes Vite/Rollup to
// load Clerk's virtual modules during build.
// When CLERK_PUBLISHABLE_KEY is missing (e.g., local/CI builds), we alias the
// virtual module to an empty stub to prevent build-time failures.
const clerkVirtualConfigId = 'virtual:@clerk/astro/config';


// Manually load .env for integrations that rely on process.env
const envPath = path.resolve(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, 'utf-8');
  envFile.split('\n').forEach(line => {
    const [key, ...value] = line.split('=');
    if (key && value.length > 0) {
      process.env[key.trim()] = value.join('=').trim();
    }
  });
}

const clerkPublishableKey = process.env.CLERK_PUBLISHABLE_KEY;

if (!clerkPublishableKey) {
  console.warn(
    '[Clerk] CLERK_PUBLISHABLE_KEY is not set. Skipping @clerk/astro integration to prevent runtime crashes.'
  );
}

// https://astro.build/config
export default defineConfig({
  site: 'https://skywardhr.com',
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: clerkPublishableKey
        ? {}
        : {
            [clerkVirtualConfigId]: path.resolve(
              process.cwd(),
              'src/clerk-virtual-stubs/empty-clerk-astro-config.ts'
            )
          }
    }
  },


  integrations: [
    react(),
    sitemap(),
    ...(clerkPublishableKey
      ? [
          clerk({
            appearance: {
              elements: {
                socialButtonsBlockButton: 'hidden',
                socialButtonsSeparator: 'hidden',
              }
            }
          })
        ]
      : [])
  ]
});

