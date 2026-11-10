---
title: "Cost is an architecture decision"
description: "FinOps is not a monthly ritual performed by a finance team. By the time a bill lands, the architecture has already made most of the decisions. Here is how to make cost a design input."
pubDate: 2025-03-10
tags: [finops, architecture]
featured: false
---

There is a recurring scene in cloud organisations: the bill arrives, someone gasps, and a FinOps meeting is called. The meeting produces tags, budgets and promises. Next month the same scene repeats — because **the bill is an output, and the architecture wrote it.**

## Cost decisions happen at design time

Whether a workload costs €50 or €5000 a month is mostly decided when it is designed: instance families, storage tiers, data transfer patterns, whether anything scales to zero. A review meeting cannot re-decide any of that efficiently. It can only slash things people didn't need anyway.

This is why I treat cost as a **design input**, on par with availability and security. Three questions before any diagram gets final:

1. **What happens when demand is zero?** If the answer is not "we pay nothing", there is idle money in the design.
2. **What does one user or one transaction cost?** If the unit economics are unknown, they are unfixable later. Every line in the architecture should have a traceable cost driver.
3. **Is the cheapest *sufficient* component good enough here?** The right answer is never "the most capable thing" — it is the thing whose cost curve matches the value of the workload. A cron job does not need multi-AZ anything.

## The patterns that fix the curve

The high-leverage FinOps patterns are architectural, not administrative:

- **Right-sizing as a discipline, not an event** — telemetry-driven sizing on an ongoing loop, because workloads drift.
- **Scale-to-zero as a default** — serverless or scheduled start/stop for anything without a 24/7 requirement.
- **Cost visibility in the blast radius of every resource** — if a resource is created without a cost tag and an owner, it should be considered an incident.
- **Data gravity awareness** — moving data costs money twice: egress and the engineering time to rebuild flows. Staying in-region and using the same provider's object storage is often the financially responsible choice.

## Architectures should publish their cost

A good architecture document has a **TCO section with assumptions** — unit prices, usage profiles, growth curves — so that the number is reviewable and reusable. If the numbers are absent, the design is not finished; it just hasn't been asked. My rule: cost is not an afterthought on the slide deck. It is a chapter of the design, signed by the architect.

FinOps that starts when the bill arrives is archaeology. FinOps that starts at the whiteboard is architecture.
