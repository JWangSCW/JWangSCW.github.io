---
title: "Migrating a regulated workload to a European sovereign cloud"
client: "Regulated industry (anonymised)"
sector: "Regulated / public services"
duration: "6 months"
role: "Cloud Solutions Architect · pre-sales to delivery"
year: "2025"
summary: "Design and delivery of a migration from a US hyperscaler to a European sovereign cloud, under strict data-residency and security constraints — with zero-downtime cutover."
impact: "-38% TCO · 100% EU data residency · zero-downtime cutover"
tags: [migration, sovereignty, regulated, kubernetes]
stack: [AWS, Scaleway, Kubernetes, Terraform, PostgreSQL, Kafka]
featured: true
order: 30
template: true
---

> ⚠️ **Template case study** — this document is a structural template that shows the format I use for every engagement. Replace the specifics (client sector, numbers, stack) with one of your real engagements before going live, and set `template: false` in the frontmatter.

## Context

A regulated-industry client ran a business-critical application on a US hyperscaler. A change in group policy — driven by EU sovereignty concerns and sector-specific obligations — required **all data to be processed and stored inside the European Union**, with a clear answer on exposure to extraterritorial law. Downtime was not an option: the platform supported production operations that could not be interrupted for more than a few minutes.

## Constraints

The project started with a hard list of constraints rather than a "solution in search of a problem":

- **Data residency** — every byte (including backups, logs and monitoring) had to remain in the EU.
- **Extraterritorial exposure** — the group wanted to minimise reliance on providers subject to the US Cloud Act.
- **No downtime** — the cutover had to be reversible and non-disruptive.
- **Budget envelope** — the migration had to pay for itself: no blank cheque for sovereignty.
- **Skills** — the operating team had deep AWS habits; the target had to stay operationally familiar.

## Discovery & sizing

Before touching an architecture, I spent the first weeks on discovery: application topology, data flows, dependency graph, actual consumption versus contracted capacity, and a **cost baseline** built from real usage data rather than list prices. A few surprises came out of this phase — mostly over-provisioned databases and orphaned network paths — which set the tone for the FinOps angle later.

## Target architecture

The design deliberately followed three principles:

1. **Portability first.** Applications were containerised on Kubernetes, so the migration boundary was the platform, not the application. This removed most provider lock-in from day one.
2. **Managed where it matters.** Managed PostgreSQL and object storage for the services we did not want to operate, self-managed only where it gave clear advantage.
3. **Everything as code.** Terraform for infrastructure, GitOps for applications, and a documented runbook for the cutover.

### Key decisions

| Decision | Options considered | Chosen & why |
| --- | --- | --- |
| Compute platform | VMs vs Kubernetes | Kubernetes — portable, existing skills, provider-agnostic |
| Database | Managed vs self-hosted | Managed PostgreSQL — operations capacity and backup guarantees |
| Data transfer | Live replication vs batch | Logical replication with a parallel-run phase — safe, reversible |
| Observability | SaaS vs self-hosted | Self-hosted stack inside EU boundary — residency for telemetry too |
| Deployment | Big-bang vs strangler | Strangler — a migration this critical is not done in one weekend |

## Migration plan

We ran the systems **in parallel** for several weeks: the new platform live inside the EU, the old one still authoritative. Traffic was progressively shifted using DNS weight and, for the trickiest flows, a canary cohort. This gave us:

- a real performance comparison before switching over,
- a clean **rollback path** for the entire duration,
- and confidence data when the CFO asked "are we sure?".

The switchover itself was a rehearsed, time-boxed operation — run once in staging with the same scripts, then executed as a formality.

## Delivery & IaC

All infrastructure, pipelines and the runbook lived in Git. Reviews were code reviews. The environment was reproducible from an empty account to full production state, which turned the "is it ready?" question into a pipeline status.

## Outcomes

- **Cost:** ~38% lower TCO versus the previous setup, driven by right-sizing and a pricing model better suited to the workload profile.
- **Compliance:** 100% of data, including telemetry and backups, processed and stored within the EU, with contractual commitments documented.
- **Operations:** zero-downtime cutover and a rollback path that was never needed — but always available.
- **Skills:** the operating team did not need retraining on a new paradigm; Kubernetes and Terraform transferred directly.

## Lessons

- Migration is 20% technology and 80% **risk management**: parallel runs, rehearsals and reversible steps are what make a deadline comfortable.
- Sovereignty work is a **team sport**: legal, security, procurement and engineering must be in the room from discovery, or the architecture gets re-litigated late.
- The FinOps case is the **purchase order** for the migration: nobody signs a sovereignty project without understanding the cost story.
