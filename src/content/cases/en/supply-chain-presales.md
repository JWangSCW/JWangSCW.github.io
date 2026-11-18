---
title: "Pre-sales architecture for a supply-chain platform modernisation"
client: "European telecom operator (anonymised)"
sector: "Telecom · Supply chain"
duration: "Pre-sales phase"
role: "Cloud Architect · pre-sales"
year: "2022"
summary: "Designed the target architecture for modernising a client's order-management supply-chain system on GCP: micro-services on GKE Autopilot, API management and managed data services, with a complete observability and DevOps layer."
impact: "Full target design · FRs & NFRs documented · deployment options evaluated"
tags: [gcp, pre-sales, kubernetes, microservices, devops]
stack: [GCP, GKE Autopilot, Apigee, CloudSQL, MongoDB, Kafka, ELK, Grafana, Prometheus, GitLab]
featured: true
order: 30
template: false
---

## Context

A major European telecom operator wanted to modernise its supply-chain **order-management system (OMS)** — legacy, hard to change, and a growing bottleneck. As the cloud architect in pre-sales, my job was not to build the system but to make the client confident in **what** to build, **on what**, and **why**.

## The pre-sales discipline

Good pre-sales is requirements work disguised as architecture. Before proposing anything, the target platform had to answer three questions:

1. **Functional and non-functional requirements (FRs & NFRs)** — availability, latency, RPO/RTO, security and compliance had to be explicit and agreed, not assumed.
2. **Hosting options with honest trade-offs** — the micro-services could sit on GKE Autopilot; APIs behind an Apigee gateway; data between CloudSQL and MongoDB; events on Kafka. Each option came with a cost and an operational consequence.
3. **A DevOps layer that the teams can actually run** — observability (ELK, Grafana, Prometheus) and delivery (GitLab SaaS) were first-class citizens of the design, not afterthoughts.

## Design choices

| Decision | Options considered | Chosen & why |
| --- | --- | --- |
| Compute | VMs vs GKE Autopilot | GKE Autopilot — managed control plane, right-sized nodes, focus on the app |
| API layer | Self-built vs Apigee | Apigee gateway — governance, quotas and security for exposed APIs |
| Data | CloudSQL vs MongoDB | Both, deliberately — relational for transactional order data, document store where schemas evolve |
| Events | Cloud Pub/Sub vs Kafka | Kafka — fits the existing eventing semantics of an OMS and the client's teams |
| Observability | Cloud-native only vs ELK/Grafana/Prometheus | ELK + Grafana + Prometheus — consistent with the client's operating model |

## Deliverables

- **HLD and LLD** for the target platform, with the DevOps runbook documented alongside.
- A **cost and option analysis** comparing hosting models — so the decision was made on numbers, not impressions.
- **Best-practice sharing** with the client's cybersecurity teams and Capgemini's architecture community, so the design survived review from every direction.

## Outcomes

- The client left the pre-sales phase with a **decisive, defensible architecture** and a clear picture of the trade-offs they were choosing.
- FRs and NFRs were documented and agreed — the usual source of late-project pain removed up front.
- The follow-on delivery was positioned on a foundation that had already survived architecture review.

## Lessons

- In pre-sales, the **decision table is the product**: clients need to see the options and the trade-offs, then choose consciously.
- Managed services win on **operational honesty**: GKE Autopilot means the client operates the application, not the nodes.
- **NFRs decide architecture.** Availability, latency and recovery targets are not slides — they are the specification every design choice must satisfy.
