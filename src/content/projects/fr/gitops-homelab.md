---
title: "Lab Kubernetes GitOps"
description: "Un petit cluster Kubernetes (k3s) géré entièrement via Git : applications, configuration et infrastructure en tant que code. Le lab personnel où je valide les idées avant de les recommander aux clients."
status: "lab"
year: "2025"
tags: [kubernetes, gitops, self-hosting]
stack: [k3s, Kubernetes, ArgoCD, Terraform, GitHub Actions, Cloudflare Tunnel]
github: "https://github.com/jiaqi-wang-cloud"
featured: false
order: 20
---

## Quoi et pourquoi

Un cluster Kubernetes maison basé sur k3s, où chaque application et chaque morceau de configuration est **déclaré dans Git**. Rien n'est installé à la main ; rien n'est configuré en cliquant. Si un nœud brûle, le cluster est reconstruit depuis le dépôt, pas depuis la mémoire.

L'intérêt d'un lab n'est pas le jouet : c'est d'avoir un endroit sûr pour valider des affirmations d'architecture avant de les prononcer devant un client.

## Le modèle GitOps

- **Applications** — chaque workload est un Helm chart ou un manifeste simple dans le dépôt.
- **Synchronisation** — ArgoCD surveille le dépôt et fait converger le cluster vers l'état déclaré.
- **Infrastructure** — la machine elle-même est provisionnée avec Terraform.
- **Accès** — les services sont exposés via un Cloudflare Tunnel : aucun port ouvert sur la connexion domestique.

## Déployer un changement

1. Ouvrir une pull request sur le dépôt `cluster`.
2. CI exécute lint et un smoke test des manifestes.
3. À la fusion, ArgoCD applique le changement automatiquement.
4. L'état applicatif du cluster n'est que l'état du dépôt, plus le temps.

## Ce que j'ai validé ici

- Mise à niveau multi-applications sans interruption (readiness gates, rolling updates).
- Gestion des secrets de bout en bout (schéma external-secrets / sealed-controller).
- Observabilité à faible empreinte (Prometheus + Grafana sur ressources contraintes).
- Plan de reprise : détruire et reconstruire le cluster depuis le dépôt, chronométré.

La leçon la plus transférable, même pour des petits setups : **ce qui n'est pas déclaré dans Git n'existe pas.**
