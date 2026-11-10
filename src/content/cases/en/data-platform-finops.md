---
title: "Data platform modernisation: open-source stack, half the cost"
client: "SaaS / tech company (anonymised)"
sector: "SaaS · Data"
duration: "3 months"
role: "Cloud Solutions Architect"
year: "2024"
summary: "Re-architecting a legacy data warehouse into a modern open-source stack: faster analytics, self-service access and a data platform that costs markedly less to run."
impact: "-42% data-platform spend · 3× faster ETL · self-service BI for 5 teams"
tags: [data, finops, migration, analytics]
stack: [AWS, Terraform, dbt, Airflow, ClickHouse, S3]
featured: true
order: 20
template: true
---

> ⚠️ **Template case study** — this document is a structural template. Replace the specifics with one of your real engagements before going live, and set `template: false` in the frontmatter.

## Context

A fast-growing SaaS company was paying a heavy price for a legacy data warehouse. The analytics team was the bottleneck for every business question: loading data took hours, cost grew with the user base without adding value, and only two people could actually run queries. The mandate was clear — **make data a self-service asset, and make the platform's cost curve bend**.

## Discovery & sizing

The first step was not picking tools but answering three questions: which data is actually consumed, how expensive is each dataset to produce, and who is waiting on whom.

A cost-per-dataset analysis exposed the usual suspects: full reloads on every schedule, no partitioning on the largest tables, and a long tail of pipelines feeding dashboards nobody opened. **Roughly two-thirds of the spend served a handful of tables** — that is the kind of number that focuses a conversation.

## Target architecture

The design split the platform into two deliberate layers:

1. **Storage & compute** — an S3-based lake as the source of truth, with an open-source columnar engine (ClickHouse) for analytics. No proprietary formats at rest.
2. **Orchestration & transformation** — Airflow for scheduling and dbt for transformations, so every data model was **reviewable code** with tested logic, not a cron job with an unknown author.

### Key decisions

| Decision | Options considered | Chosen & why |
| --- | --- | --- |
| Storage | Legacy warehouse vs S3 lake | S3 lake — cheap, open, the rest of the stack reads it directly |
| Query engine | Proprietary vs ClickHouse | ClickHouse — columnar performance, open source, fits the workload |
| Transformations | Stored procs vs dbt | dbt — tests, docs, diffs in Git; analytics engineers review code |
| Scheduling | Bare cron vs Airflow | Airflow — retries, lineage, observability on every pipeline |

## Delivery

Three disciplines made the migration routine rather than an event:

- **Incremental everywhere.** Only changed data moved; the pipelines that once ran hours now run minutes.
- **Dual-run until trust.** New platform and legacy warehouse ran side by side; stakeholders compared numbers on the same dashboards until they matched.
- **IaC from day one.** Terraform described the platform; destruction and rebuild in staging was a scheduled exercise, not a heroic intervention.

## Outcomes

- **Cost:** data-platform spend down ~42%, with a cost curve that now grows with *value-creating* queries rather than with user count.
- **Performance:** the heaviest analytical loads dropped from hours to minutes.
- **Culture:** five teams run self-service analytics; the "ask the analyst" queue disappeared for standard questions.
- **Portability:** with open formats and open engines, the platform has no hostage-taking renewal conversation ahead of it.

## Lessons

- **Right-sizing is a team sport.** Cost savings came from knowing what data was actually used, not from picking a cheaper engine.
- **Code over configuration.** dbt and Terraform turned data engineering into engineering: reviewed, tested, versioned.
- **Trust before switchover.** Running old and new in parallel is the cheapest insurance policy in a data migration.
