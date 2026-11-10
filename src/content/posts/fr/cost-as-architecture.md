---
title: "Le coût est une décision d'architecture"
description: "Le FinOps n'est pas un rituel mensuel exercé par une équipe financière. Quand la facture arrive, l'architecture a déjà pris la plupart des décisions. Voici comment faire du coût une entrée de conception."
pubDate: 2025-03-10
tags: [finops, architecture]
featured: false
---

Il y a une scène récurrente dans les organisations cloud : la facture arrive, quelqu'un grimace, et une réunion FinOps est convoquée. La réunion produit des tags, des budgets et des promesses. Le mois suivant, la même scène se répète — parce que **la facture est une sortie, et c'est l'architecture qui l'a écrite.**

## Les décisions de coût se prennent au moment de la conception

Qu'un workload coûte 50 € ou 5000 € par mois se décide surtout quand il est conçu : familles d'instances, niveaux de stockage, schémas de transfert de données, existence ou non d'un scaling vers zéro. Une réunion de revue ne peut re-décider efficacement rien de tout cela. Elle ne peut que supprimer ce dont personne n'avait besoin de toute façon.

C'est pourquoi je traite le coût comme une **entrée de conception**, au même niveau que la disponibilité et la sécurité. Trois questions avant de finaliser un diagramme :

1. **Que se passe-t-il quand la demande est nulle ?** Si la réponse n'est pas « on ne paie rien », il y a de l'argent au repos dans la conception.
2. **Combien coûtent un utilisateur ou une transaction ?** Si les coûts unitaires sont inconnus, ils sont impossibles à corriger plus tard. Chaque ligne de l'architecture doit avoir un inducteur de coût traçable.
3. **Le composant le moins cher et *suffisant* est-il assez bien ici ?** La bonne réponse n'est jamais « le plus capable » — c'est celui dont la courbe de coût correspond à la valeur du workload. Un cron job n'a pas besoin d'un quelconque multi-AZ.

## Les patterns qui redressent la courbe

Les patterns FinOps à fort effet de levier sont architecturaux, pas administratifs :

- **Le right-sizing comme discipline, pas comme événement** — un dimensionnement piloté par la télémétrie, en boucle continue, parce que les workloads dérivent.
- **Le scale-to-zero par défaut** — serverless ou start/stop planifié pour tout ce qui n'exige pas du 24/7.
- **La visibilité du coût dans le périmètre d'impact de chaque ressource** — une ressource créée sans tag de coût ni propriétaire devrait être considérée comme un incident.
- **La conscience de la gravité des données** — déplacer des données coûte deux fois : l'egress et le temps d'ingénierie pour reconstruire les flux. Rester en région et utiliser le stockage objet du même fournisseur est souvent le choix financièrement responsable.

## Les architectures devraient publier leur coût

Un bon document d'architecture comporte une **section TCO avec ses hypothèses** — prix unitaires, profils d'usage, courbes de croissance — pour que le chiffre soit revu et réutilisable. Si les chiffres sont absents, la conception n'est pas finie ; on ne lui a juste pas demandé. Ma règle : le coût n'est pas un en-cas de slide. C'est un chapitre de la conception, signé par l'architecte.

Le FinOps qui commence quand la facture arrive, c'est de l'archéologie. Le FinOps qui commence au tableau blanc, c'est de l'architecture.
