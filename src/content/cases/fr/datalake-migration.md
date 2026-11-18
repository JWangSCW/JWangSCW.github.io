---
title: "Migration d'un datalake de 20 To vers AWS — -25 % de coûts, livraison 40 % plus rapide"
client: "Grande entreprise (anonymisée)"
sector: "Entreprise · Plateforme data"
duration: "12+ mois"
role: "Lead Cloud Migration Engineer"
year: "2024"
summary: "Conduit la migration d'un datalake d'entreprise de 20 To vers AWS sans interruption opérationnelle — 15+ applications critiques intégrées, coûts cloud en baisse de 25 % et déploiements 40 % plus rapides grâce à une automatisation standardisée."
impact: "20 To migrés · -25 % de coûts cloud · 15+ applications intégrées · -40 % de délais de déploiement"
tags: [aws, datalake, migration, finops, terraform]
stack: [AWS, DMS, S3, Snowflake, Terraform, Glue, Athena, Transit Gateway]
featured: true
order: 40
template: false
---

## Contexte

Une entreprise exploitait un datalake en pleine croissance sur une plateforme vieillissante : les coûts grimpaient à chaque nouveau dataset, la mise en place de nouveaux flux d'ingestion prenait des semaines, et le métier ne pouvait pas se permettre une bascule « tout arrêté ». Le mandat était clair : **migrer toute la plateforme data vers AWS sans interrompre les opérations** — et faire fléchir la courbe de coûts au passage.

## Contraintes

- **Zéro interruption** — les flux de production ne pouvaient pas s'arrêter ; la bascule devait être incrémentale et réversible.
- **Connectivité** — bureaux, systèmes source et nouvel environnement AWS devaient être interconnectés de façon sécurisée.
- **Conformité** — les flux de données et l'infrastructure devaient rester dans les standards de sécurité et régionaux du client.
- **Rythme** — le programme couvrait de nombreux projets ; impossible de livrer chaque migration à la main, équipe par équipe.

## Approche

La migration a été conçue comme **un problème de continuité d'abord, un problème de technologie ensuite** :

1. **Backbone réseau** — un Site-to-Site VPN ancré sur un Transit Gateway pour un maillage sécurisé et scalable entre les systèmes sur site et AWS ; AWS Transfer Family pour l'ingestion de fichiers vers S3.
2. **Mouvement continu des données** — AWS DMS a répliqué les données en continu plutôt qu'en copie unique : la cible n'était jamais « en retard » de plus de quelques minutes.
3. **Intégration progressive** — 15+ applications critiques ont été connectées au datalake AWS, chacune validée dans sa propre fenêtre.
4. **Snowflake au-dessus** — les données s'accumulent dans S3 et sont consommées via Snowflake External Stage, gardant le stockage ouvert et portable.

## L'automatisation qui a changé le programme

Plutôt que de piloter chaque migration individuellement, j'ai **standardisé un module Terraform pour les réplications AWS DMS** et l'ai promu à l'échelle du programme. Résultat : 90 % des projets ont réutilisé le module, et le temps de déploiement a chuté de 40 %. Quand la plateforme demande « combien de temps pour intégrer le prochain dataset ? », la réponse doit être un petit nombre — pas un plan de projet.

## Post-migration

La migration ne s'arrête pas à la bascule. J'ai orchestré la **synchronisation des données avec AWS Glue et Athena**, produisant des rapports d'évaluation sous 24 heures — pour vérifier fraîcheur et complétude en continu, pas sur la confiance.

## Résultats

- **Coût :** 25 % de réduction des coûts cloud sur la plateforme migrée.
- **Continuité :** 15+ applications intégrées sans interruption opérationnelle.
- **Rythme :** déploiements 40 % plus rapides grâce au module Terraform standardisé.
- **Confiance :** rapports de réconciliation automatisés après chaque étape de migration.

## Leçons

- **Standardiser la partie ennuyeuse.** Le module Terraform a plus de valeur que n'importe quelle migration isolée — il rend la *deuxième* migration bon marché, ce qui est tout l'intérêt d'un programme.
- **La réplication vaut mieux qu'une copie.** La réplication continue a transformé la bascule d'un événement à risque en une étape de routine.
- **Le coût s'ingénierise, il ne se négocie pas.** Les 25 % viennent de choix d'architecture (stockage, schémas de transfert, automatisation), pas d'une conversation de remise.
