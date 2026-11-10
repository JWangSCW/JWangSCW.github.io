---
title: "Cloud cost analyzer CLI"
description: "A Python CLI that pulls AWS Cost Explorer data, flags anomalies early and drafts savings-plan recommendations — built to make cloud costs a programming problem instead of a spreadsheet problem."
status: "wip"
year: "2025"
tags: [finops, aws, python]
stack: [Python, boto3, AWS Cost Explorer, pandas]
github: "https://github.com/jiaqi-wang-cloud"
featured: false
order: 10
---

## The problem it solves

Cloud cost data lives in many places: billing exports, Cost Explorer, entitlement tables, tag taxonomies that nobody enforces. Most FinOps conversations start with somebody downloading a CSV. This tool turns the recurring question *"where did the money go this month?"* into a one-command answer.

## What it does

- Pulls monthly and daily spend from the **AWS Cost Explorer API** (or a Cost & Usage Report export).
- Flags anomalies — a service or tag whose cost jumped versus the trailing average.
- Drafts **Savings Plans / Reserved Instance candidates** from actual usage profiles.
- Outputs a Markdown report you can drop straight into a PR or a review deck.

## Design choices

- **Read-only by design** — the CLI never mutates anything; recommendations are suggestions with the data behind them.
- **Deterministic output** — the report is generated from fixed inputs, so it can live in CI and be diffed.
- **Small footprint** — standard library + boto3 + pandas only.

## Roadmap

- [ ] Cost-and-usage-report parquet ingestion (faster than the API for large accounts).
- [ ] Tag-compliance report (which resources violate the tagging policy).
- [ ] Multi-account aggregation via an assumed role.

The bigger lesson on my desk: **most cost anomalies are architecture anomalies**, and the CLI is just the fastest way to find them.
