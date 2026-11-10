---
title: "This website — deployed as code"
description: "The very site you are reading: a bilingual, markdown-driven portfolio built with Astro and deployed through infrastructure-as-code and CI/CD. My own dogfooding project."
status: "live"
year: "2026"
tags: [portfolio, dogfooding, i18n]
stack: [Astro, Markdown, Terraform, GitHub Actions, Cloudflare Pages]
github: "https://github.com/jiaqi-wang-cloud"
featured: true
order: 30
---

## Why build a portfolio as a platform?

As a Cloud Solutions Architect, my credibility depends on being able to **defend every layer of a design**. This website is the smallest possible demonstration of that: instead of a one-off static page, it is a platform with the same disciplines I sell to customers — content as code, infrastructure as code, automated delivery, observability.

## Stack

| Layer | Choice | Why |
| --- | --- | --- |
| Static generation | Astro | Fast, secure, close to zero operating cost; excellent bilingual (i18n) routing support |
| Content | Markdown collections | Case studies, projects, posts and certifications live as plain Markdown with a validated schema |
| CI/CD | GitHub Actions | Every commit builds, validates and deploys — no manual steps |
| Infrastructure | Terraform / OpenTofu | Domain, DNS and hosting are described as code and reproducible from scratch |
| Hosting | Cloudflare Pages | Global CDN, managed HTTPS and caching at negligible cost |
| Observability | Edge analytics + uptime monitor | Traffic and availability tracked; a site without monitoring is not a platform |

## Content workflow

All content is written in Markdown in this repository, **bilingual by design** (English and French versions live side by side). Updating the site is just a pull request: edit a `.md` file, open a PR, and the pipeline takes care of the rest. This is the same "content as code" workflow I recommend to documentation-heavy teams.

## Deployment loop

1. Content or code is merged in Git.
2. GitHub Actions builds the static site and validates content schemas.
3. Terraform guarantees that domain, DNS and hosting match the declared state.
4. The result is published to the CDN in seconds — HTTPS, cached, measured.

See the [full architecture page](/architecture/) for the diagram and reasoning.

## For an SA, this is the point

Recruiters and hiring managers increasingly click the link on a CV. When one does, they land on a site that shows *how its owner thinks about platforms* — not just a list of past jobs. That is the whole intent of this project: **make the portfolio itself a proof of work.**
