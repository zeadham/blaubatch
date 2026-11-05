// Open roles shown on /careers. Applications go through Odoo (blaubatch.odoo.com/jobs),
// so when a job is published or closed in Odoo, add or remove it here too.
// Every English string here needs an Arabic entry in lib/ar/careers.js.

export const ODOO_JOBS_URL = 'https://blaubatch.odoo.com/jobs'

export const JOBS = [
  {
    id: 'production-engineer',
    title: 'Production Engineer – Filler Masterbatch',
    department: 'Production',
    location: '6th of October, Egypt',
    type: 'Full-time',
    experience: '2–4 years',
    summary: 'Run our filler masterbatch extrusion lines day to day: process settings, quality, troubleshooting and production records in Odoo.',
    requirements: [
      'Degree in Production, Mechanical, Chemical or Polymer Engineering',
      'Hands-on filler masterbatch production experience',
      'Twin-screw extrusion and compounding',
      'CaCO₃ fillers, PE/PP carrier resins and additives',
      'ERP skills; Odoo Manufacturing (MRP) is a strong plus',
    ],
    applyUrl: 'https://blaubatch.odoo.com/jobs/production-engineer-filler-masterbatch-2',
  },
  {
    id: 'senior-sales-engineer',
    title: 'Senior Sales Engineer – Masterbatch',
    department: 'Sales',
    location: 'Sheikh Zayed City, Egypt',
    type: 'Full-time',
    experience: '6+ years',
    summary: 'Grow our sales across Egypt: win new industrial customers, manage key accounts and sell the full masterbatch range.',
    requirements: [
      'Degree in Chemical, Polymer or Materials Engineering, or a related field',
      'B2B technical sales experience',
      'White, black, colour, filler and additive masterbatch',
      'Extrusion, injection, blow moulding, film, pipe and raffia processes',
      'Good English, MS Office and CRM; driving licence and travel across Egypt',
    ],
    applyUrl: 'https://blaubatch.odoo.com/jobs/senior-sales-engineer-masterbatch-8',
  },
  {
    id: 'sales-specialist',
    title: 'Sales Specialist – Masterbatch',
    department: 'Sales',
    location: 'Sheikh Zayed City, Egypt',
    type: 'Full-time',
    experience: '2–3 years',
    summary: 'Find new customers through factory visits and technical presentations, and build long-term relationships with plastics manufacturers.',
    requirements: [
      'Degree in Chemical, Polymer or Materials Engineering, or a related field',
      'B2B sales in masterbatch, polymers, plastic raw materials or additives',
      'Understanding of polymers and plastics manufacturing',
      'Strong communication, negotiation and presentation skills',
      'Good English, MS Office and CRM; driving licence and travel across Egypt',
    ],
    applyUrl: 'https://blaubatch.odoo.com/jobs/sales-specialist-masterbatch-4',
  },
]
