---
title: "Migration d'un workload régulé vers un cloud souverain européen"
client: "Industrie régulée (anonymisé)"
sector: "Régulé / services publics"
duration: "6 mois"
role: "Architecte de solutions cloud · de l'avant-vente à la livraison"
year: "2025"
summary: "Conception et livraison d'une migration depuis un hyperscaler américain vers un cloud souverain européen, sous contraintes strictes de résidence des données et de sécurité — bascule sans interruption."
impact: "-38% de TCO · résidence 100% UE · bascule zéro interruption"
tags: [migration, souveraineté, régulé, kubernetes]
stack: [AWS, Scaleway, Kubernetes, Terraform, PostgreSQL, Kafka]
featured: true
order: 30
template: true
---

> ⚠️ **Étude de cas modèle** — ce document est un modèle structurel montrant le format que j'utilise pour chaque engagement. Remplacez les éléments précis (secteur client, chiffres, stack) par un de vos engagements réels avant mise en ligne, puis passez `template: false` dans le frontmatter.

## Contexte

Un client d'un secteur régulé exploitait une application critique sur un hyperscaler américain. Un changement de politique de groupe — motivé par des préoccupations de souveraineté européenne et des obligations sectorielles — imposait que **toutes les données soient traitées et stockées au sein de l'Union européenne**, avec une réponse claire sur l'exposition au droit extraterritorial. L'arrêt de service n'était pas envisageable : la plateforme soutenait des opérations de production qui ne pouvaient être interrompues que quelques minutes.

## Contraintes

Le projet a commencé par une liste ferme de contraintes plutôt que par une « solution en quête de problème » :

- **Résidence des données** — chaque octet (backups, logs, monitoring compris) devait rester dans l'UE.
- **Exposition extraterritoriale** — le groupe voulait minimiser sa dépendance aux fournisseurs soumis au Cloud Act américain.
- **Zéro interruption** — la bascule devait être réversible et non disruptive.
- **Enveloppe budgétaire** — la migration devait s'autofinancer : pas de chèque en blanc pour la souveraineté.
- **Compétences** — l'équipe d'exploitation avait des habitudes AWS profondes ; la cible devait rester opérationnellement familière.

## Découverte & dimensionnement

Avant de toucher à une architecture, j'ai consacré les premières semaines à la découverte : topologie applicative, flux de données, graphe de dépendances, consommation réelle face à la capacité contractée, et un **coût de référence** établi à partir des usages réels plutôt que des prix catalogue. Quelques surprises en sont ressorties — surtout des bases surdimensionnées et des chemins réseau orphelins — ce qui a donné le ton à la dimension FinOps par la suite.

## Architecture cible

La conception a délibérément suivi trois principes :

1. **Portabilité d'abord.** Les applications ont été conteneurisées sur Kubernetes : la frontière de migration est devenue la plateforme, pas l'application. Cela a éliminé l'essentiel du lock-in fournisseur dès le premier jour.
2. **Managé là où ça compte.** PostgreSQL managé et stockage objet pour les services qu'on ne veut pas opérer ; self-managé uniquement là où l'avantage est clair.
3. **Tout en code.** Terraform pour l'infrastructure, GitOps pour les applications, et un runbook documenté pour la bascule.

### Décisions clés

| Décision | Options envisagées | Choix & pourquoi |
| --- | --- | --- |
| Plateforme de calcul | VMs vs Kubernetes | Kubernetes — portable, compétences existantes, agnostique fournisseur |
| Base de données | Managée vs self-hosted | PostgreSQL managé — capacité d'exploitation et garanties de backup |
| Transfert de données | Réplication live vs batch | Réplication logique avec phase de parallélisation — sûr, réversible |
| Observabilité | SaaS vs self-hosted | Stack self-hosted à l'intérieur de la frontière UE — résidence des télémetries aussi |
| Déploiement | Big-bang vs strangler | Strangler — une migration aussi critique ne se fait pas en un week-end |

## Plan de migration

Les systèmes ont fonctionné **en parallèle** pendant plusieurs semaines : la nouvelle plateforme en production dans l'UE, l'ancienne toujours de référence. Le trafic a été basculé progressivement via le poids DNS et, pour les flux les plus sensibles, une cohorte de canary. Cela a permis :

- une vraie comparaison de performance avant la bascule,
- un **chemin de rollback** propre pendant toute la durée,
- et des données de confiance quand le CFO demande « on est sûrs ? ».

La bascule elle-même était une opération répétée et bornée dans le temps : exécutée une fois en recette avec les mêmes scripts, puis réalisée comme une formalité.

## Livraison & IaC

Toute l'infrastructure, les pipelines et le runbook vivaient dans Git. Les revues étaient des revues de code. L'environnement était reproductible d'un compte vide à un état de production complet — la question « c'est prêt ? » devenait un statut de pipeline.

## Résultats

- **Coût :** TCO réduit d'environ 38 % par rapport à l'existant, grâce au right-sizing et à un modèle tarifaire mieux adapté au profil de charge.
- **Conformité :** 100 % des données, télémetries et backups compris, traitées et stockées dans l'UE, avec engagements contractuels documentés.
- **Exploitation :** bascule zéro interruption et chemin de rollback jamais nécessaire — mais toujours disponible.
- **Compétences :** pas de reconversion de l'équipe d'exploitation ; Kubernetes et Terraform se transfèrent directement.

## Leçons

- Une migration, c'est 20 % de technologie et 80 % de **gestion du risque** : parallélisation, répétitions et étapes réversibles sont ce qui rend une échéance confortable.
- Le travail de souveraineté est un **sport d'équipe** : juridique, sécurité, achats et ingénierie doivent être dans la pièce dès la découverte, sinon l'architecture se re-liturge tardivement.
- Le cas FinOps est le **bon de commande** de la migration : personne ne signe un projet de souveraineté sans comprendre la dimension coût.
