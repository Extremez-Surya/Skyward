// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import clerk from '@clerk/astro';
import sitemap from '@astrojs/sitemap';

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
    plugins: [tailwindcss()]
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

