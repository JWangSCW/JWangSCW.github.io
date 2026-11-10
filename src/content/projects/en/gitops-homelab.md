---
title: "GitOps Kubernetes lab"
description: "A small Kubernetes cluster (k3s) managed entirely through Git: applications, configuration and infrastructure as code. The personal lab where I validate ideas before recommending them to customers."
status: "lab"
year: "2025"
tags: [kubernetes, gitops, self-hosting]
stack: [k3s, Kubernetes, ArgoCD, Terraform, GitHub Actions, Cloudflare Tunnel]
github: "https://github.com/jiaqi-wang-cloud"
featured: false
order: 20
---

## What and why

A home-lab Kubernetes cluster built on k3s, where every application and every piece of configuration is **declared in Git**. Nothing is installed by hand; nothing is configured by clicking. If a node burns, the cluster is rebuilt from the repository, not from memory.

The point of a lab is not the toys — it is having a safe place to validate architecture claims before making them in front of a customer.

## The GitOps model

- **Applications** — every workload is a Helm chart or plain manifest in the repo.
- **Synchronisation** — ArgoCD watches the repository and converges the cluster to the declared state.
- **Infrastructure** — the machine itself is provisioned with Terraform.
- **Access** — services are exposed through a Cloudflare Tunnel: no open ports on the home connection.

## Rolling out a change

1. Open a pull request against the `cluster` repository.
2. CI runs linting and a smoke test of the manifests.
3. On merge, ArgoCD applies the change automatically.
4. The application state in the cluster is just the repository state, plus time.

## What I validated here

- Multi-application upgrade without downtime (readiness gates, rolling updates).
- Secrets handling end to end (external secrets à la sealed-controller pattern).
- Observability for a small footprint (Prometheus + Grafana on constrained resources).
- Disaster recovery: destroy and rebuild the cluster from the repo, timed.

The single most transferable lesson, even for tiny setups: **if it is not declared in Git, it does not exist.**
