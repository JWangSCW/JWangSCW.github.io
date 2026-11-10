---
title: "Modernisation de la plateforme data : stack open source, coût divisé par deux"
client: "SaaS / entreprise tech (anonymisé)"
sector: "SaaS · Data"
duration: "3 mois"
role: "Architecte de solutions cloud"
year: "2024"
summary: "Ré-architecture d'un entrepôt de données legacy vers une stack open source moderne : analytics plus rapides, accès self-service et une plateforme data nettement moins chère à opérer."
impact: "-42% de dépenses data · ETL 3× plus rapide · BI self-service pour 5 équipes"
tags: [data, finops, migration, analytics]
stack: [AWS, Terraform, dbt, Airflow, ClickHouse, S3]
featured: true
order: 20
template: true
---

> ⚠️ **Étude de cas modèle** — ce document est un modèle structurel. Remplacez les éléments précis par un de vos engagements réels avant mise en ligne, puis passez `template: false` dans le frontmatter.

## Contexte

Une société SaaS en forte croissance payait un prix élevé pour un entrepôt de données legacy. L'équipe analytics était le goulot d'étranglement de chaque question business : le chargement prenait des heures, le coût augmentait avec la base d'utilisateurs sans créer de valeur, et deux personnes seulement pouvaient réellement exécuter des requêtes. Le mandat était clair — **faire de la donnée un actif self-service, et faire fléchir la courbe de coût de la plateforme**.

## Découverte & dimensionnement

La première étape n'était pas de choisir des outils mais de répondre à trois questions : quelles données sont réellement consommées, combien coûte la production de chaque dataset, et qui attend qui.

Une analyse coût-par-dataset a fait apparaître les suspects habituels : rechargements complets à chaque planification, absence de partitionnement sur les plus grosses tables, et une longue traîne de pipelines alimentant des dashboards que personne n'ouvrait. **Environ deux tiers des dépenses servaient une poignée de tables** — c'est le genre de chiffre qui concentre l'attention.

## Architecture cible

La conception a séparé la plateforme en deux couches délibérées :

1. **Stockage & calcul** — un lake S3 comme source de vérité, avec un moteur columnar open source (ClickHouse) pour l'analytique. Aucun format propriétaire au repos.
2. **Orchestration & transformation** — Airflow pour la planification et dbt pour les transformations, afin que chaque modèle de données soit du **code revu**, avec une logique testée, et non un cron job à l'auteur inconnu.

### Décisions clés

| Décision | Options envisagées | Choix & pourquoi |
| --- | --- | --- |
| Stockage | Warehouse legacy vs lake S3 | Lake S3 — peu cher, ouvert, le reste de la stack le lit directement |
| Moteur de requêtes | Propriétaire vs ClickHouse | ClickHouse — performance columnar, open source, adapté à la charge |
| Transformations | Procédures stockées vs dbt | dbt — tests, docs, diffs dans Git ; les analytics engineers passent en revue du code |
| Planification | Cron brut vs Airflow | Airflow — retries, lineage, observabilité sur chaque pipeline |

## Livraison

Trois disciplines ont fait de la migration une routine plutôt qu'un événement :

- **Incrémental partout.** Seules les données modifiées bougeaient ; les pipelines qui prenaient des heures prennent désormais des minutes.
- **Double exécution jusqu'à confiance.** Nouvelle plateforme et warehouse legacy ont tourné côte à côte ; les parties prenantes ont comparé les chiffres sur les mêmes dashboards jusqu'à concordance.
- **IaC dès le premier jour.** Terraform décrivait la plateforme ; destruction et reconstruction en recette étaient un exercice planifié, pas une intervention héroïque.

## Résultats

- **Coût :** dépenses data en baisse d'environ 42 %, avec une courbe de coût qui croît désormais avec les requêtes *créatrices de valeur* plutôt qu'avec le nombre d'utilisateurs.
- **Performance :** les charges analytiques les plus lourdes passent d'heures à minutes.
- **Culture :** cinq équipes font de l'analytique self-service ; la file « demander à l'analyste » a disparu pour les questions standards.
- **Portabilité :** avec des formats et moteurs ouverts, aucune conversation de renouvellement sous pression pour la plateforme.

## Leçons

- **Le right-sizing est un sport d'équipe.** Les économies viennent de la connaissance de l'usage réel des données, pas du choix d'un moteur moins cher.
- **Le code plutôt que la configuration.** dbt et Terraform ont fait de la data engineering une vraie ingénierie : revue, test, versionnage.
- **La confiance avant la bascule.** Faire tourner l'ancien et le nouveau en parallèle est l'assurance la moins chère d'une migration data.
