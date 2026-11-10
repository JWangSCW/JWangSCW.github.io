# Personal website — Jiaqi Wang, Cloud Solutions Architect

A bilingual (EN/FR) portfolio built with [Astro](https://astro.build). Content-first and
content-as-code: every case study, project, article and certification is a Markdown file.
The site itself is architected and deployed like a real platform — see
`/architecture` (or `/fr/architecture`) for the reasoning.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve the build locally
```

## ✍️ Personalize — the checklist

The site ships with **clearly-marked placeholder content** so you can see the design live.
Before publishing, work through this list:

1. **`src/i18n/site.ts`** — your email, GitHub URL, resume PDF link (`public/resume.pdf`), availability flag.
2. **`astro.config.mjs`** — replace `site` with your real domain.
3. **Case studies** (`src/content/cases/{en,fr}/*.md`) — the two seeded ones are **templates**
   (they show an amber "template" ribbon). Replace them with your real engagements, then set
   `template: false` (or delete the line). Keep the same filename in `en/` and `fr/`.
4. **Projects** (`src/content/projects/{en,fr}/*.md`) — adjust stack, descriptions, GitHub links.
5. **Writing** (`src/content/posts/{en,fr}/*.md`) — personalize or add posts; keep the filename in both languages.
6. **Certifications** (`src/content/certs/{en,fr}/*.md`) — the AWS / Scaleway / Huawei entries are
   **drafts** (visible in dev, hidden in production). Fill in the real details and set `draft: false`.
   Real credentials from your profile are already included and verifiable.
7. **Experience & education** (`src/i18n/experience.ts`) — verify dates and bullets; the education entry at the bottom of the file is a placeholder (the site does not guess your real degrees).
8. **Stats** (`src/i18n/ui.ts`) — the hero metrics ("8+ years", "€M influenced") are placeholders; adjust to your real numbers.
9. **Hero terminal** (`src/i18n/ui.ts`, `term.*` keys) — tune the typed lines.
10. **Favicon / og image** — `public/favicon.svg` and `public/og.png` (referenced in the base layout).

## Adding content (no code required)

Every piece of content is a Markdown file with a small schema (see `src/content.config.ts`).

### Where each piece of content lives

| Content | File(s) to create/edit | Notes |
| --- | --- | --- |
| Case studies | `src/content/cases/en/<slug>.md` + `src/content/cases/fr/<slug>.md` | Same filename in both languages. Copy an existing case as your template; set `template: false` when it's a real engagement. |
| Projects | `src/content/projects/en/<slug>.md` + `src/content/projects/fr/<slug>.md` | Set `status: live \| lab \| wip` and optional `github` / `demo` links. |
| Articles / writing | `src/content/posts/en/<slug>.md` + `src/content/posts/fr/<slug>.md` | Set `draft: true` to preview locally without publishing. |
| Certifications | `src/content/certs/en/<slug>.md` + `src/content/certs/fr/<slug>.md` | Real ones are already there (verifiable). Add missing ones; set `draft: false`. |
| Career experience | `src/i18n/experience.ts` → the `experience` array | Structured data, per language (EN + FR). |
| Education | `src/i18n/experience.ts` → the `education` array | Same file, below the experience array. |
| Profile info (email, GitHub, resume) | `src/i18n/site.ts` | Single source of truth used site-wide. |
| UI labels / hero text / stats | `src/i18n/ui.ts` | All visible strings, EN and FR. |

A case study needs these frontmatter fields (see existing files for examples):
`title, client, sector, duration, role, year, summary, impact, tags, stack, featured, order, template`.
Keep `en/` and `fr/` files in sync — the slug (filename) must be identical in both folders.

With `trailingSlash: "always"`, URLs look like `/cases/<slug>/` (EN) and `/fr/cases/<slug>/` (FR).

## Architecture

- **Runtime/build:** Astro static generation (no server). Fast, secure, free-tier hosting.
- **i18n:** `en` is the default at the root; `fr` lives under `/fr/`. Configuration in `astro.config.mjs`.
- **Content:** content collections with validated frontmatter (`src/content.config.ts`).
- **Design:** single design system in `src/styles/global.css` (dark, blueprint-flavored, violet/cyan).
- **Deploy:** design docs and suggestions are on the `/architecture` page.

## Deploying

Any static host works. Suggested path (matching the `/architecture` page):

1. Push to GitHub.
2. Cloudflare Pages (or GitHub Pages) builds on push — `npm ci && npm run build`, output `dist/`.
3. Point your domain at the host, then update `site` in `astro.config.mjs` and rebuild.
4. Add `public/resume.pdf` and an `og.png` for social sharing.

## Project structure

```
src/
  content/               # all editable content (markdown)
    cases/{en,fr}/       # case studies
    projects/{en,fr}/    # hands-on projects
    posts/{en,fr}/       # articles / writing
    certs/{en,fr}/       # certifications
  content.config.ts      # content schemas
  i18n/
    site.ts              # profile info (email, links…)
    ui.ts                # all UI strings (EN/FR)
    experience.ts        # career timeline
  lib/content.ts         # content helpers
  layouts/Base.astro     # shell: head, nav, footer, locale switcher
  components/            # reusable UI (terminal, cards, …)
  sections/              # one component per page
  pages/                 # routes (EN) + pages/fr/ (FR)
  styles/global.css      # design system
```
