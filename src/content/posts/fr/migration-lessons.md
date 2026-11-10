---
title: "Cinq leçons des migrations cloud qui échouent en silence"
description: "Les migrations qui échouent le font rarement bruyamment, à la bascule. Elles échouent en silence, des semaines avant que quiconque ne le remarque. Voici les cinq modes de défaillance que je surveille."
pubDate: 2025-06-04
tags: [migration, architecture]
featured: false
---

Personne n'annonce une migration ratée. Celles qui échouent ne cassent pas à la bascule — elles se dégradent en silence dans les semaines qui suivent, et à ce moment-là tout le monde est trop occupé pour appeler les choses par leur nom. Après en avoir vu suffisamment, j'ai une courte liste de modes de défaillance que je surveille dès le premier jour.

## 1. Dimensionner sur les prix catalogue, pas sur l'usage

Les architectures qui semblent bonnes sur le papier mais ratent le budget sont presque toujours conçues contre des prix catalogue et des « hypothèses » au lieu de la télémétrie réelle. **Leçon :** construire la cible à partir des usages réels — combien de CPU, mémoire, IOPS et réseau chaque workload consomme vraiment — avant de dessiner le moindre diagramme.

## 2. La dépendance diagonale non documentée

La cartographie applicative dit que le système a trois couches. L'organigramme dit autre chose : un job batch sur un serveur « que personne ne connaît vraiment » écrit dans la même base, et un cron des ventes s'y synchronise aussi. Ratez-en un et votre bascule explose à 2 h du matin, à deux appels dans l'arbre des dépendances. **Leçon :** passez les semaines ennuyeuses à tracer le trafic et les flux *réels*, y compris les moins propres. Interrogez l'opérateur avec dix-huit ans d'ancienneté.

## 3. Cloud par copier-coller

Reprendre un design de l'architecture de référence d'un fournisseur « parce que c'est la best practice » — sans se demander quelles parties de l'ancien système existent pour des raisons qui ne s'appliquent plus. **Leçon :** traitez les architectures de référence comme des points de départ, pas des verdicts. Les meilleures migrations réduisent la complexité en chemin.

## 4. Migration sans rollback

Un plan dont la seule réponse à « et si ça tourne mal ? » est un regard confiant. **Leçon :** s'il n'y a pas d'étape réversible, la migration n'est pas finie — c'est un pari. Les exécutions en parallèle, la réplication logique et la bascule par poids DNS, qui coûtent quelques jours de conception, épargnent des semaines de regrets.

## 5. L'équipe en apprend l'existence par une note

L'équipe plateforme qui hérite du système l'apprend à la passation — et traite le nouvel environnement avec la suspicion qu'il mérite. **Leçon :** faites entrer les équipes d'exploitation dans la conception, pas seulement dans la livraison. Une migration réussit quand ceux qui vont l'opérer y croient — et ça se joue dans les ateliers, pas dans les release notes.

## Le fil conducteur

Chaque échec silencieux est une **faute de communication déguisée en problème technique** — entre l'ingénierie et la finance, entre l'architecture et l'exploitation, entre la carte et le territoire. Les migrations sont de la gestion du risque avec un cloud par-dessus.
