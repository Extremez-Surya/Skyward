# DEPLOYMENT-GUIDE.md

# Skyward HR Service

## Production Deployment Guide

Version: 1.0

---

# OVERVIEW

This guide describes the recommended production deployment architecture for Skyward HR.

Deployment Goals:

* High availability
* Scalability
* Security
* Performance
* Easy maintenance
* Low operational overhead

---

# RECOMMENDED TECH STACK

## Frontend

```text
Astro 6.4
TypeScript
Tailwind CSS v4
React 19 (Components)
Framer Motion
```

Deployment:

```text
Vercel
```

---

## Backend

```text
Astro API Routes (Serverless)
```

Deployment:

```text
Vercel (Edge/Serverless Functions)
```

---

## Database

```text
PostgreSQL
```

Provider:

```text
Supabase
```

---

## Authentication

```text
Clerk (Astro Integration)
```

Features:

* Email Login
* OTP Login
* Social Login
* RBAC Integration

---

## Storage

```text
Supabase Storage
```

Stores:

* Candidate Documents
* Invoices
* Profile Photos
* Reports

---

## Email

```text
Resend
```

Use Cases:

* Login Emails
* Notifications
* Invoice Delivery
* Contact Forms

---

## Analytics

```text
Google Analytics 4
Microsoft Clarity
```

---

## Monitoring

```text
Sentry
```

Tracks:

* Errors
* Performance Issues
* API Failures

---

# PRODUCTION ARCHITECTURE

```text
                    Users
                       │
                       ▼
                 Cloudflare CDN
                       │
                       ▼
                     Vercel
               (Astro Frontend)
                       │
          ┌────────────┼────────────┐
          │            │            │
          ▼            ▼            ▼

       Clerk       Supabase      Resend
        Auth       Database      Email
```

---

# ENVIRONMENT SETUP

## Development

```env
NODE_ENV=development
```

---

## Staging

```env
NODE_ENV=staging
```

---

## Production

```env
NODE_ENV=production
```

---

# REQUIRED ENV VARIABLES

## Application

```env
PUBLIC_APP_URL=https://skywardhr.com
```

---

## Database

```env
DATABASE_URL=
```

Example

```env
DATABASE_URL=postgresql://username:password@host:5432/db
```

---

## Supabase

```env
PUBLIC_SUPABASE_URL=
PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

---

## Clerk

```env
PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

---

## Resend

```env
RESEND_API_KEY=
```

---

## Analytics

```env
PUBLIC_GA_ID=
```

---

## AI Features

```env
GEMINI_API_KEY=
```

---

## Sentry

```env
SENTRY_DSN=
```

---

# DOMAIN CONFIGURATION

## Production

```text
skywardhr.com
```

---

## WWW Redirect

```text
www.skywardhr.com
```

Redirect To

```text
https://skywardhr.com
```

---

# VERCEL DEPLOYMENT

## Step 1

Push Code To GitHub

Repository

```text
skyward
```

---

## Step 2

Connect GitHub To Vercel

Import Project

Select Repository

---

## Step 3

Configure Build Settings

```text
Framework: Astro
```

Build Command

```bash
npm run build
```

Output Directory

```text
dist
```

---

## Step 4

Add Environment Variables

Vercel Dashboard

```text
Settings → Environment Variables
```

---

## Step 5

Deploy

```bash
git push origin main
```

Automatic deployment starts.

---

# SUPABASE DEPLOYMENT

## Create Project

Project Name

```text
skyward-production
```

---

## Database Region

Choose nearest region.

Example

```text
Mumbai
Singapore
```

---

## Enable

* PostgreSQL
* Storage
* Authentication (Optional, if using Clerk for auth)
* Realtime

---

# STORAGE BUCKETS

## Candidate Documents

```text
candidate-documents
```

---

## Profile Photos

```text
profile-photos
```

---

## Invoices

```text
invoices
```

---

## Reports

```text
reports
```

---

# DATABASE MIGRATION

## Using SQL

Execute the schema in Supabase SQL Editor:

```sql
-- Use supabase_schema.sql provided in the project
```

---

# INITIAL SYSTEM DATA

## Create Super Admin

```text
Role:
SUPER_ADMIN
```

---

## Create Settings

```text
Company Name
Email Templates
Notification Settings
```

---

## Upload Assets

```text
Logo
Favicons
Brand Images
```

---

# SSL CONFIGURATION

Requirement

```text
HTTPS ONLY
```

---

Certificate

```text
Automatic via Vercel
```

---

# SECURITY CHECKLIST

## Authentication

✓ Clerk Enabled

✓ JWT Validation

✓ Session Security

---

## Database

✓ Row Level Security

✓ Encrypted Connections

✓ Backups Enabled

---

## API

✓ Rate Limiting

✓ Input Validation

✓ RBAC Checks

✓ Audit Logging

---

## Frontend

✓ CSP Headers

✓ Secure Cookies

✓ HTTPS

---

# BACKUP STRATEGY

## Database

Frequency

```text
Daily
```

Retention

```text
30 Days
```

---

## Storage

Frequency

```text
Weekly
```

Retention

```text
90 Days
```

---

# CI/CD PIPELINE

```text
Developer Push
        │
        ▼
GitHub Repository
        │
        ▼
GitHub Actions
        │
        ▼
Run Tests
        │
        ▼
Run Lint
        │
        ▼
Build Project
        │
        ▼
Deploy To Vercel
```

---

# GITHUB ACTIONS

## Workflow

```yaml
name: Production Deploy

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'npm'

      - run: npm install

      - run: npm run build
```

---

# MONITORING

## Application Monitoring

Tool

```text
Sentry
```

Track

* Errors
* Exceptions
* Failed Requests

---

## Infrastructure Monitoring

Track

* Vercel Analytics
* Supabase Health
* API Latency
* DB Queries

---

# PERFORMANCE TARGETS

## Lighthouse

Performance

```text
95+
```

---

Accessibility

```text
95+
```

---

Best Practices

```text
95+
```

---

SEO

```text
100
```

---

# DISASTER RECOVERY

## Scenario

Database Failure

Action

```text
Restore Latest Backup
```

Recovery Target

```text
< 1 Hour
```

---

## Scenario

Server Failure

Action

```text
Redeploy Latest Build
```

Recovery Target

```text
< 15 Minutes
```

---

# GO-LIVE CHECKLIST

## Infrastructure

* Domain Connected
* SSL Enabled
* Environment Variables Added
* Database Connected

---

## Security

* RBAC Tested
* RLS Enabled
* API Validation Enabled
* Rate Limiting Enabled

---

## Functionality

* Authentication Tested
* Candidate Module Tested
* Client Module Tested
* Deployment Module Tested
* Attendance Module Tested
* Invoice Module Tested

---

## SEO

* Sitemap.xml
* Robots.txt
* Metadata
* Open Graph
* Structured Data

---

## Analytics

* Google Analytics
* Search Console
* Microsoft Clarity

---

# POST-LAUNCH CHECKLIST

Day 1

* Verify Logs
* Verify Email Delivery
* Verify Authentication

---

Week 1

* Monitor Errors
* Monitor Performance
* Review User Feedback

---

Month 1

* Security Audit
* Performance Optimization
* SEO Review

---

# RECOMMENDED SCALE PLAN

Phase 1

```text
0 – 10 Clients
```

Infrastructure

```text
Vercel + Supabase
```

---

Phase 2

```text
10 – 100 Clients
```

Infrastructure

```text
Vercel + Supabase (Pro Plan)
```

---

Phase 3

```text
100+ Clients
```

Infrastructure

```text
Vercel + Supabase (Enterprise/Dedicated)
```

---

END OF DEPLOYMENT GUIDE
