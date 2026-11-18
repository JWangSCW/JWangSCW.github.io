---
title: "Architecture d'avant-vente pour la modernisation d'un système de supply chain"
client: "Opérateur télécom européen (anonymisé)"
sector: "Télécom · Supply chain"
duration: "Phase d'avant-vente"
role: "Cloud Architect · avant-vente"
year: "2022"
summary: "Conçu l'architecture cible de modernisation du système de gestion de commandes (OMS) d'un client sur GCP : micro-services sur GKE Autopilot, gestion d'API et services de données managés, avec une couche d'observabilité et de DevOps complète."
impact: "Conception cible complète · FR & NFR documentés · options d'hébergement évaluées"
tags: [gcp, avant-vente, kubernetes, microservices, devops]
stack: [GCP, GKE Autopilot, Apigee, CloudSQL, MongoDB, Kafka, ELK, Grafana, Prometheus, GitLab]
featured: true
order: 30
template: false
---

## Contexte

Un grand opérateur télécom européen souhaitait moderniser son système de **gestion de commandes (OMS)** de supply chain — un système legacy, difficile à faire évoluer, devenu un goulot d'étranglement. En tant qu'architecte cloud en avant-vente, mon rôle n'était pas de construire le système mais de rendre le client confiant sur **quoi** construire, **sur quoi**, et **pourquoi**.

## La discipline de l'avant-vente

Une bonne avant-vente, c'est du travail d'exigences déguisé en architecture. Avant toute proposition, la plateforme cible devait répondre à trois questions :

1. **Exigences fonctionnelles et non fonctionnelles (FR & NFR)** — disponibilité, latence, RPO/RTO, sécurité et conformité devaient être explicites et validées, pas supposées.
2. **Options d'hébergement avec des arbitrages honnêtes** — les micro-services sur GKE Autopilot ; les API derrière une passerelle Apigee ; les données entre CloudSQL et MongoDB ; les événements sur Kafka. Chaque option avec son coût et sa conséquence opérationnelle.
3. **Une couche DevOps réellement opérable** — l'observabilité (ELK, Grafana, Prometheus) et la livraison (GitLab SaaS) étaient des citoyens de première classe du design, pas des ajouts après coup.

## Choix de conception

| Décision | Options envisagées | Choix & pourquoi |
| --- | --- | --- |
| Calcul | VMs vs GKE Autopilot | GKE Autopilot — plan de contrôle managé, nœuds dimensionnés, focus sur l'application |
| Couche API | Sur-mesure vs Apigee | Passerelle Apigee — gouvernance, quotas et sécurité des API exposées |
| Données | CloudSQL vs MongoDB | Les deux, délibérément — relationnel pour les données transactionnelles de commande, document store là où les schémas évoluent |
| Événements | Cloud Pub/Sub vs Kafka | Kafka — cohérent avec la sémantique événementielle d'un OMS et les équipes du client |
| Observabilité | Cloud-natif seul vs ELK/Grafana/Prometheus | ELK + Grafana + Prometheus — cohérent avec le modèle d'exploitation du client |

## Livrables

- **HLD et LLD** de la plateforme cible, avec le runbook DevOps documenté en parallèle.
- Une **analyse de coûts et d'options** comparant les modèles d'hébergement — pour une décision sur des chiffres, pas sur des impressions.
- **Partage des bonnes pratiques** avec les équipes cybersécurité du client et la communauté d'architectes Capgemini, pour que le design survive à la revue dans toutes les directions.

## Résultats

- Le client a quitté la phase d'avant-vente avec une **architecture tranchée et défendable** et une vision claire des arbitrages choisis.
- Les FR et NFR étaient documentés et validés — l'inévitable source de douleur des projets tardifs, traitée en amont.
- La livraison suivante s'est positionnée sur des fondations déjà passées en revue.

## Leçons

- En avant-vente, **la table de décision est le produit** : les clients doivent voir les options et les arbitrages, puis choisir en conscience.
- Les services managés gagnent par **honnêteté opérationnelle** : GKE Autopilot, c'est le client qui opère l'application, pas les nœuds.
- **Les NFR décident l'architecture.** Disponibilité, latence et objectifs de reprise ne sont pas des slides — c'est la spécification que chaque choix de conception doit satisfaire.
