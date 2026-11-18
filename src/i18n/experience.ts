import type { Locale } from '../lib/content';

export interface ExperienceItem {
  id: string;
  when: string;
  org: string;
  role: string;
  current: boolean;
  bullets: string[];
}

export interface EducationItem {
  id: string;
  when: string;
  school: string; // institution name
  degree: string; // degree title
  details: string; // one or two sentences
}

/**
 * Career timeline — real data transcribed from your CV (Sep 2024) and your
 * current LinkedIn profile (Scaleway).
 *
 * ⚠️ TODO(you): verify a few transitions:
 *  - when you started at Scaleway (currently shown as "2025 — present")
 *  - the exact boundaries between the three Capgemini roles
 *  - the education entries below are still placeholders.
 */
export const experience: Record<Locale, ExperienceItem[]> = {
  en: [
    {
      id: 'scaleway',
      when: 'Mar 2025 — present',
      org: 'Scaleway — European sovereign cloud (Paris)',
      role: 'Partner Solutions Architect',
      current: true,
      bullets: [
        'Co-created the Scaleway Solutions Architect certification (curriculum + exam bank) and filled the presales-training gap with a 2-month in-person programme — weekly sessions for partners’ Account Managers and IT directors (DSI).',
        'Drove the Scaleway Landing Zone framework (whitepaper + toolkit); the Landing Zone POC contributed to winning the Airbus account.',
        'Led enterprise and public-sector bids: a 3-hour technical defence for the EDF 2028–2035 framework covering 12 cloud-architecture use cases, plus contributions to a European Commission–Atos multi-region hub-and-spoke Rancher datahub bid and the RATP architecture response — bid modules reused on Mediawan and others.',
        'Ran channel deep-dives (Immersion Days, hackathons) with partners such as Deloitte NL/FR, Play (Poland) and Reply (Italy); delivered a 40-minute on-stage pitch at Rockstar Valley 2025 (70+ attendees) and a 2026 session on hyperscaler multi-cloud patterns.',
        'Advised partners day-to-day: architecture reviews (HLD), RFI/RFP authoring, pricing support and technical expert attendance in partner–customer meetings.',
        'ISV technical pre-sales: Build-or-Buy studies; landed Mulesoft’s Data Plane on Rancher + Kapsule; exposed Scaleway Cockpit metrics/logs to Dynatrace SaaS via OpenTelemetry and direct agents.',
      ],
    },
    {
      id: 'capgemini-migration',
      when: 'Feb 2024 — 2025',
      org: 'Capgemini',
      role: 'Lead Cloud Migration Engineer',
      current: false,
      bullets: [
        'Led the migration of a 20 TB enterprise data lake to AWS (Site-to-Site VPN, Transit Gateway, AWS DMS, Transfer Family), cutting cloud costs by 25%.',
        'Integrated 15+ critical applications with the AWS data lake with zero operational interruption.',
        'Supervised data flows into S3 and Snowflake External Stage; standardised a Terraform module for AWS DMS reused by 90% of the programme’s projects, cutting deployment time by 40%.',
        'Orchestrated post-migration sync with AWS Glue and Athena, delivering assessment reports within 24 hours.',
      ],
    },
    {
      id: 'capgemini-ops',
      when: 'Jun 2022 — Feb 2024',
      org: 'Capgemini',
      role: 'Lead Cloud Ops',
      current: false,
      bullets: [
        'Drove a multi-country migration for an international client spanning 9 countries and 30+ environments, managing regional configurations.',
        'Deployed a multi-environment CI/CD pipeline (GitHub + TeamCity), reducing deployment cycles by 40%.',
        'Maintained cloud architectures compliant with cybersecurity standards — a clean audit record throughout.',
        'Designed resilient, scalable architectures sustaining a 99.99% SLA while supporting a 50% traffic increase.',
      ],
    },
    {
      id: 'capgemini-architect',
      when: 'Feb 2022 — Jun 2022',
      org: 'Capgemini',
      role: 'Cloud Architect — associate architect community',
      current: false,
      bullets: [
        'Supported the AWS Landing Zone build for TotalEnergies across multiple regions, embedding AWS best practices, cost planning and technical procurement.',
        'Worked pre-sales on a supply-chain OMS modernisation on GCP: micro-services hosting (GKE Autopilot, Apigee gateway, CloudSQL, MongoDB, Kafka Confluent) and a DevOps layer (ELK, Grafana, Prometheus, GitLab SaaS), balancing FRs and NFRs.',
        'Authored HLD, LLD and DevOps documentation; shared best practices with cybersecurity and architecture communities.',
      ],
    },
    {
      id: 'manning',
      when: 'Sep 2019 — Jan 2022',
      org: 'Manning Global — Huawei Flexible Engine platform',
      role: 'Cloud Infrastructure Engineer',
      current: false,
      bullets: [
        'Collaborated with technical teams to identify and resolve 500+ incidents on the Flexible Engine cloud platform.',
        'Implemented compute and storage server virtualisation, raising processing capacity by 30% and deploying new availability zones for Huawei CBG in Europe.',
        'Shipped new platform features — including AI acceleration and Bare Metal Server — reducing compute times by 20%.',
      ],
    },
  ],

  fr: [
    {
      id: 'scaleway',
      when: 'Mars 2025 — aujourd’hui',
      org: 'Scaleway — cloud souverain européen (Paris)',
      role: 'Partner Solutions Architect',
      current: true,
      bullets: [
        'Co-créé la certification Scaleway Solutions Architect (contenu + base de questions d’examen) et comblé le manque de formation presales avec un programme de 2 mois en présentiel — sessions hebdomadaires pour les Account Managers et DSI des partenaires.',
        'Porté le cadre Landing Zone de Scaleway (livre blanc + toolkit) ; le POC Landing Zone a contribué à remporter le compte Airbus.',
        'Piloté des appels d’offres grands comptes et publics : soutenance technique de 3 h pour l’accord-cadre EDF 2028–2035 couvrant 12 cas d’usage d’architecture cloud, participation à la réponse Commission européenne – Atos (hub-and-spoke multi-régions, Rancher, Datahub) et à la réponse RATP — modules d’offre réutilisés sur Mediawan et d’autres projets.',
        'Animé des sessions d’immersion et hackathons avec Deloitte NL/FR, Play (Pologne) et Reply (Italie) ; pitch de 40 minutes sur scène à Rockstar Valley 2025 (70+ participants) et intervention en 2026 sur les patterns multi-cloud avec les hyperscalers.',
        'Accompagnement quotidien des partenaires : revues d’architecture (HLD), rédaction de RFI/RFP, support au chiffrage et participation en tant qu’expert technique aux réunions partenaires–clients.',
        'Avant-vente technique ISV : études Build-or-Buy ; déploiement du Data Plane Mulesoft sur Rancher + Kapsule ; exposition des métriques/logs de Scaleway Cockpit vers Dynatrace SaaS (OpenTelemetry, agents directs).',
      ],
    },
    {
      id: 'capgemini-migration',
      when: 'Févr. 2024 — 2025',
      org: 'Capgemini',
      role: 'Lead Cloud Migration Engineer',
      current: false,
      bullets: [
        'Conduit la migration d’un datalake de 20 To vers AWS (Site-to-Site VPN, Transit Gateway, AWS DMS, Transfer Family), réduisant les coûts cloud de 25 %.',
        'Intégré plus de 15 applications critiques au datalake AWS avec une continuité opérationnelle sans interruption.',
        'Supervisé les flux de données vers S3 et Snowflake External Stage ; standardisé un module Terraform pour AWS DMS réutilisé par 90 % des projets du programme, réduisant le temps de déploiement de 40 %.',
        'Orchestré la synchronisation post-migration avec AWS Glue et Athena, avec des rapports d’évaluation livrés sous 24 heures.',
      ],
    },
    {
      id: 'capgemini-ops',
      when: 'Juin 2022 — Févr. 2024',
      org: 'Capgemini',
      role: 'Lead Cloud Ops',
      current: false,
      bullets: [
        'Piloté une migration multi-pays pour un client international couvrant 9 pays et 30+ environnements, en gérant les configurations régionales.',
        'Déployé un pipeline CI/CD multi-environnements (GitHub + TeamCity), réduisant les cycles de déploiement de 40 %.',
        'Maintenu la conformité des architectures cloud aux standards de cybersécurité — historique sans incident.',
        'Conçu des architectures résilientes et scalables maintenant un SLA de 99,99 % tout en soutenant une hausse du trafic de 50 %.',
      ],
    },
    {
      id: 'capgemini-architect',
      when: 'Févr. 2022 — Juin 2022',
      org: 'Capgemini',
      role: 'Cloud Architect — communauté d’architectes',
      current: false,
      bullets: [
        'Soutien à la création de la Landing Zone AWS de TotalEnergies sur plusieurs régions, en intégrant les bonnes pratiques AWS, la planification des coûts et l’approvisionnement technique.',
        'Avant-vente de la modernisation d’un système de supply chain (OMS) sur GCP : hébergement de micro-services (GKE Autopilot, passerelle Apigee, CloudSQL, MongoDB, Kafka Confluent) et couche DevOps (ELK, Grafana, Prometheus, GitLab SaaS), en considérant les FR et NFR.',
        'Rédaction du HLD, du LLD et de la documentation DevOps ; partage des bonnes pratiques avec les équipes cybersécurité et les communautés d’architectes.',
      ],
    },
    {
      id: 'manning',
      when: 'Sept. 2019 — Janv. 2022',
      org: 'Manning Global — plateforme Huawei Flexible Engine',
      role: 'Ingénieur d’infrastructure cloud',
      current: false,
      bullets: [
        'Collaboré avec les équipes techniques pour identifier et résoudre plus de 500 incidents sur la plateforme Flexible Engine.',
        'Implémenté la virtualisation des serveurs de calcul et de stockage, augmentant la capacité de traitement de 30 %, et déployé de nouvelles zones de disponibilité pour Huawei CBG en Europe.',
        'Livré de nouvelles fonctionnalités de plateforme — dont l’accélération IA et le Bare Metal Server — réduisant les temps de calcul de 20 %.',
      ],
    },
  ],
};

/**
 * Education — ⚠️ still a placeholder. Your CV (Sep 2024) does not list degrees;
 * this entry is inferred from your LinkedIn activity in Grenoble (2016–2019) and
 * the IFP School course (2019). Send me your exact degrees and I’ll fill this in.
 */
export const education: Record<Locale, EducationItem[]> = {
  en: [
    {
      id: 'master',
      when: '20XX — 20XX', // ⚠️ e.g. "2016 — 2019"
      school: 'University / Grande école — Grenoble, France', // ⚠️ replace
      degree: "Master's degree — energy & applied economics", // ⚠️ replace
      details:
        'Research and analysis on energy economics: municipal carbon footprints, energy-renovation subsidy leverage, coordination of grid investments for renewables. Co-authored peer-reviewed research on power-market design (2018).',
    },
  ],
  fr: [
    {
      id: 'master',
      when: '20XX — 20XX', // ⚠️ ex. "2016 — 2019"
      school: 'Université / Grande école — Grenoble, France', // ⚠️ à remplacer
      degree: 'Master — économie de l’énergie & économie appliquée', // ⚠️ à remplacer
      details:
        'Recherche et analyse en économie de l’énergie : bilans carbone communaux, effet de levier des subventions de rénovation, coordination des investissements réseaux pour les énergies renouvelables. Co-auteur d’une recherche sur la conception de mécanismes des marchés de l’électricité (2018).',
    },
  ],
};
