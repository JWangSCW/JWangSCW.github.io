---
title: "Ce site web — déployé en tant que code"
description: "Le site que vous êtes en train de lire : un portfolio bilingue piloté par Markdown, construit avec Astro et déployé via de l'infrastructure-as-code et du CI/CD. Mon propre projet dogfooding."
status: "live"
year: "2026"
tags: [portfolio, dogfooding, i18n]
stack: [Astro, Markdown, Terraform, GitHub Actions, Cloudflare Pages]
github: "https://github.com/jiaqi-wang-cloud"
featured: true
order: 30
---

## Pourquoi construire un portfolio comme une plateforme ?

En tant qu'architecte de solutions cloud, ma crédibilité repose sur ma capacité à **défendre chaque couche d'une conception**. Ce site est la plus petite démonstration possible : plutôt qu'une page statique jetable, c'est une plateforme appliquant les disciplines que je vends aux clients — contenu en tant que code, infrastructure en tant que code, livraison automatisée, observabilité.

## Stack

| Couche | Choix | Pourquoi |
| --- | --- | --- |
| Génération statique | Astro | Rapide, sécurisé, coût d'exploitation quasi nul ; excellent support du routing bilingue (i18n) |
| Contenu | Collections Markdown | Études de cas, projets, articles et certifications vivent en Markdown avec un schéma validé |
| CI/CD | GitHub Actions | Chaque commit build, valide et déploie — aucune étape manuelle |
| Infrastructure | Terraform / OpenTofu | Domaine, DNS et hébergement décrits en code, reproductibles de zéro |
| Hébergement | Cloudflare Pages | CDN mondial, HTTPS et cache managés à coût négligeable |
| Observabilité | Analytics edge + uptime monitor | Trafic et disponibilité suivis ; un site sans monitoring n'est pas une plateforme |

## Workflow de contenu

Tout le contenu est écrit en Markdown dans ce dépôt, **bilingue par conception** (versions anglaise et française côte à côte). Mettre à jour le site est une simple pull request : on édite un fichier `.md`, on ouvre une PR, et le pipeline fait le reste. C'est le même workflow « contenu en tant que code » que je recommande aux équipes à forte documentation.

## Boucle de déploiement

1. Contenu ou code fusionné dans Git.
2. GitHub Actions build le site statique et valide les schémas de contenu.
3. Terraform garantit que le domaine, le DNS et l'hébergement correspondent à l'état déclaré.
4. Le résultat est publié sur le CDN en quelques secondes — HTTPS, caché, mesuré.

Voir la [page architecture complète](/fr/architecture/) pour le schéma et le raisonnement.

## Pour un SA, c'est tout l'enjeu

Recruteurs et hiring managers cliquent de plus en plus sur le lien d'un CV. Quand ils le font, ils arrivent sur un site qui montre *comment son propriétaire pense les plateformes* — pas seulement une liste d'expériences passées. C'est l'intention exacte de ce projet : **faire du portfolio lui-même une preuve de travail.**
