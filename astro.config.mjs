// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import clerk from '@clerk/astro';

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

console.log('CLERK_SECRET_KEY in config (manual load):', !!process.env.CLERK_SECRET_KEY);

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), clerk()]
});