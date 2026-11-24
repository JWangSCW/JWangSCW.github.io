---
title: "Migrating a 20 TB data lake to AWS: 25% less cost, 40% faster delivery"
client: "Large enterprise (anonymised)"
sector: "Enterprise · Data platform"
duration: "12+ months"
role: "Lead Cloud Migration Engineer"
year: "2024"
summary: "Led the migration of a 20 TB enterprise data lake to AWS with zero operational interruption: 15+ critical applications integrated, cloud costs down 25%, deployments 40% faster through standardised automation."
impact: "20 TB migrated · -25% cloud cost · 15+ apps integrated · -40% deployment time"
tags: [aws, data-lake, migration, finops, terraform]
stack: [AWS, DMS, S3, Snowflake, Terraform, Glue, Athena, Transit Gateway]
featured: true
order: 40
template: false
---

## Context

An enterprise data lake was growing on an ageing platform: costs climbed with every dataset, new ingestion flows took weeks to deliver, and the business could not accept a stop-the-world cutover. The mandate was clear: move the entire data platform to AWS without interrupting operations, and bend the cost curve at the same time.

## Constraints

- **Zero downtime:** production streams could not stop; the cutover had to be incremental and reversible.
- **Connectivity:** offices, source systems and the new AWS environment had to stay securely interconnected.
- **Compliance:** data flows and infrastructure had to respect the client's security and regional standards.
- **Velocity:** the programme spanned many projects; we could not hand-deliver a migration to every team individually.

## Approach

The migration was built as a continuity problem first, a technology problem second:

1. **Network backbone:** a Site-to-Site VPN anchored on a Transit Gateway gave us a scalable, secure mesh between on-premises systems and AWS; AWS Transfer Family handled file-based ingestion onto S3.
2. **Continuous data movement:** AWS DMS replicated the data continuously instead of a one-shot copy, so the target was never more than a few minutes behind.
3. **Integration at the edge:** 15+ critical applications were progressively connected to the AWS data lake, each validated in its own window.
4. **Snowflake on top:** data landed in S3 and was consumed through Snowflake External Stage, keeping storage open and portable.

## The automation that changed the programme

When the platform team asked how long it would take to onboard the next dataset, the answer had to be a small number, not a project plan. So I standardised a Terraform module for AWS DMS replication and promoted it across the programme. 90% of projects reused it, and deployment time dropped by 40%.

## Post-migration

Migration does not end at cutover. I orchestrated data synchronisation with AWS Glue and Athena, producing assessment reports within 24 hours, so freshness and completeness were verified continuously rather than on trust.

## Outcomes

- **Cost:** 25% reduction in cloud costs on the migrated platform.
- **Continuity:** 15+ applications integrated with zero operational interruption.
- **Velocity:** 40% faster deployments thanks to the standardised Terraform module.
- **Trust:** automated reconciliation reports after every migration step.

## Lessons

- **Standardise the repetitive part.** The Terraform module was worth more than any single migration: it made the second migration cheap, which is the point of a programme.
- **Replication beats copy.** Continuous replication made the cutover a routine step instead of a risk event.
- **Cost is engineered, not negotiated.** The 25% came from architecture decisions (storage, transfer patterns, automation), not from a discount conversation.
