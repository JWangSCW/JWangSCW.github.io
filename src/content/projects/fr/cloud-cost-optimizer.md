---
title: "Analyseur de coûts cloud (CLI)"
description: "Un CLI Python qui interroge AWS Cost Explorer, détecte les anomalies tôt et rédige des recommandations de Savings Plans — pour faire de la dépense cloud un problème de programmation plutôt qu'un problème de tableur."
status: "wip"
year: "2025"
tags: [finops, aws, python]
stack: [Python, boto3, AWS Cost Explorer, pandas]
github: "https://github.com/jiaqi-wang-cloud"
featured: false
order: 10
---

## Le problème qu'il résout

Les données de coût cloud vivent à plusieurs endroits : exports de facturation, Cost Explorer, tables d'entitlement, taxonomies de tags que personne n'applique. La plupart des conversations FinOps commencent par quelqu'un qui télécharge un CSV. Cet outil transforme la question récurrente *« où est passé l'argent ce mois-ci ? »* en une réponse en une commande.

## Ce qu'il fait

- Récupère les dépenses mensuelles et quotidiennes via l'**API AWS Cost Explorer** (ou un export Cost & Usage Report).
- Signale les anomalies — un service ou un tag dont le coût a bondi par rapport à la moyenne glissante.
- Rédige des **candidats Savings Plans / Reserved Instances** à partir des profils d'usage réels.
- Produit un rapport Markdown directement exploitable dans une PR ou une revue de gestion.

## Choix de conception

- **Lecture seule par conception** — le CLI ne mute jamais rien ; les recommandations sont des suggestions avec les données derrière.
- **Sortie déterministe** — le rapport est généré depuis des entrées fixes, donc intégrable dans du CI et diffable.
- **Faible empreinte** — bibliothèque standard + boto3 + pandas uniquement.

## Roadmap

- [ ] Ingestion parquet Cost-and-Usage-Report (plus rapide que l'API pour les gros comptes).
- [ ] Rapport de conformité des tags (quelles ressources violent la politique de tagging).
- [ ] Agrégation multi-comptes via un rôle assumé.

La leçon la plus importante sur mon bureau : **la plupart des anomalies de coût sont des anomalies d'architecture** — et le CLI n'est que le moyen le plus rapide de les trouver.
