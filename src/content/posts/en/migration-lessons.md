---
title: "Five lessons from cloud migrations that quietly fail"
description: "The migrations that fail rarely fail loudly at the cutover. They fail quietly, weeks before anyone notices. Here are the five failure modes I watch for."
pubDate: 2025-06-04
tags: [migration, architecture]
featured: false
---

Nobody announces a failed migration. The failed ones don't break at the cutover — they degrade quietly in the weeks that follow, and by then everyone is too busy to call it what it is. After enough of these, I have a short list of failure modes I watch for from day one.

## 1. Sizing from list prices, not usage

Architectures that look right on paper but miss the budget are almost always designed against catalogue pricing and "assumptions" instead of real telemetry. **Lesson:** build the target from actual usage data — how much CPU, memory, IOPS and network each workload really consumes — before a single diagram is drawn.

## 2. The undocumented diagonal dependency

The application map says the system is three tiers. The organisation chart says otherwise: a batch job on a server "that nobody really knows" wrote into the same database, and a cron from sales syncs out of it too. Miss one of these and your cutover blows up at 2 a.m., two calls deep into the dependency tree. **Lesson:** spend the boring weeks tracing *actual* traffic and data flows, including the ugly ones. Ask the operator with eighteen years of tenure.

## 3. Copy-paste cloud

Lifting a design from a cloud provider's reference architecture "because it's best practice" — without questioning which parts of the old system exist for reasons that no longer apply. **Lesson:** treat reference architectures as starting points, not verdicts. The strongest migrations reduce complexity on the way across.

## 4. Migration without rollback

A plan whose only answer to "what if it goes wrong?" is a confident look. **Lesson:** if there is no reversible step, the migration is not finished — it is a bet. Parallel runs, logical replication and DNS-weight shifting that cost a few days of design save weeks of regret.

## 5. The team learns about it in a memo

The platform team that inherits the system finds out at the handover — and treats the new environment with the suspicion it deserves. **Lesson:** bring operations into design, not just delivery. The migration succeeds when the people who will run it believe it, and that happens in workshops, not release notes.

## The through-line

Every quiet failure is a **communication failure dressed up as a technical one** — between engineering and finance, between architecture and operations, between the map and the territory. Migrations are risk management with a cloud on top.
