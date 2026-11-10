import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * All collections are bilingual. Entries live in per-locale folders:
 *   src/content/<collection>/en/<slug>.md
 *   src/content/<collection>/fr/<slug>.md
 * The entry id therefore starts with the locale ("en/<slug>") and the
 * generated slug is `<slug>` in a predictable, editable location.
 */

const cases = defineCollection({
  loader: glob({ base: './src/content/cases', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    client: z.string(), // anonymized sector/industry label
    sector: z.string(),
    duration: z.string(),
    role: z.string(),
    year: z.string(),
    summary: z.string(),
    impact: z.string(), // headline metric / outcome
    tags: z.array(z.string()),
    stack: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    template: z.boolean().default(false), // true = filler to be replaced
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['live', 'lab', 'wip']),
    year: z.string(),
    tags: z.array(z.string()),
    stack: z.array(z.string()),
    github: z.string().optional(),
    demo: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const certs = defineCollection({
  loader: glob({ base: './src/content/certs', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    issued: z.string(), // e.g. "Mar 2020"
    credentialId: z.string().optional(),
    credentialUrl: z.string().optional(),
    group: z.enum(['cloud', 'strategy', 'data', 'other']).default('other'),
    draft: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { cases, projects, posts, certs };
