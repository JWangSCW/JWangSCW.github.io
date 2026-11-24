import type { Locale } from '../lib/content';

export interface ExperienceItem {
  id: string;
  when: string;
  org: string;
  role: string;
  current: boolean;
  bullets: string[];
  links?: { label: string; url: string }[];
}

export interface EducationItem {
  id: string;
  when: string;
  school: string; // institution name
  degree: string; // degree title
  details: string; // one or two sentences
}

/**
 * Career timeline: real data transcribed from your CV (Sep 2024) and your
 * current LinkedIn profile (Scaleway).
 *
 * ⚠️ TODO(you): verify a few transitions:
 *  - when you started at Scaleway (currently shown as "2025 → present")
 *  - the exact boundaries between the three Capgemini roles
 *  - the education entries below are still placeholders.
 */
export const experience: Record<Locale, ExperienceItem[]> = {
  en: [
    {
      id: 'scaleway',
      when: 'Mar 2025 → present',
      org: 'Scaleway · European sovereign cloud (Paris)',
      role: 'Partner Solutions Architect',
      current: true,
      links: [
        { label: 'Scaleway Landing Zone framework (whitepaper)', url: 'https://www.scaleway.com/en/scaleway-landing-zone/' },
        { label: 'Scaleway Landing Zone toolkit (GitHub)', url: 'https://github.com/scaleway/LandingZone' },
        { label: 'AWS ↔ Scaleway Site-to-Site VPN guide (Scaleway docs)', url: 'https://www.scaleway.com/en/docs/site-to-site-vpn/reference-content/configure-site-to-site-vpn-aws-scw/' },
      ],
      bullets: [
        'Co-created the Scaleway Solutions Architect certification: e-learning course and exam bank, plus a 2-month in-person presales-training programme (weekly sessions for partners’ Account Managers and IT directors / DSI).',
        'Authored the Scaleway Landing Zone framework as a reusable standard for partners: public whitepaper and open-source toolkit (linked above); the Landing Zone POC contributed to winning a leading aerospace account.',
        'Led enterprise and public-sector bids: a 3-hour technical defence for a major energy utility’s 2028–2035 framework covering 12 cloud-architecture use cases, contributions to a European institution’s multi-region hub-and-spoke Rancher datahub bid with a system integrator, and a public-transport operator’s architecture response, with reusable modules later applied to media clients.',
        'Published technical content on Scaleway’s public docs, including the AWS ↔ Scaleway Site-to-Site VPN configuration guide, to help partners and customers connect hybrid and multi-cloud environments.',
        'Hosted 3 one-week partner Immersion Days, owning the arc from planning and content design to daily QA sessions and the closing soutenance, each edition gathering 50+ partner consultants (with Deloitte NL/FR, Play Poland and Reply Italy among others); also ran hackathons, delivered a 40-minute on-stage pitch at Rockstar Valley 2025 (70+ attendees) and a 2026 session on hyperscaler multi-cloud patterns.',
        'Represented Scaleway at VivaTech 2025, demoing on the booth two live scenarios: a ChatGPT-style app built on serverless architecture, and a Hugging Face open-source model hosted through the Scaleway Generative API with live inference. At AI Pulse, Scaleway’s invite-only AI event, welcomed partners invited by Scaleway and their customers and provided hands-on technical support.',
        'Advised partners day-to-day: architecture reviews (HLD), RFI/RFP authoring, pricing support and technical expert attendance in partner–customer meetings.',
        'ISV technical pre-sales: engaged and tested 20+ partners (ServiceNow, Dynatrace, Palo Alto Networks, Fortinet and more) across Build-or-Buy studies and platform integrations (Mulesoft Data Plane on Rancher, Dynatrace via OpenTelemetry).',
        'When no managed solution exists, I bridge partner needs to the platform: check the roadmap, qualify open-source alternatives, design a managed offer with pricing and a migration path to the native feature, and feed Product & Engineering with partner demand along the way.',
      ],
    },
    {
      id: 'capgemini-migration',
      when: 'Feb 2024 → 2025',
      org: 'Capgemini',
      role: 'Lead Cloud Migration Engineer',
      current: false,
      bullets: [
        'Led the migration of a 20 TB enterprise data lake to AWS (Site-to-Site VPN, Transit Gateway, AWS DMS, Transfer Family), cutting cloud costs by 25%.',
        'Integrated 15+ critical applications with the AWS data lake with zero operational interruption.',
        'Standardised the platform integration pattern for the whole programme, reused by 90% of projects and cutting delivery time by 40%.',
        'Orchestrated post-migration sync with AWS Glue and Athena, delivering assessment reports within 24 hours.',
      ],
    },
    {
      id: 'capgemini-ops',
      when: 'Jun 2022 → Feb 2024',
      org: 'Capgemini',
      role: 'Lead Cloud Ops',
      current: false,
      bullets: [
        'Drove a multi-country migration for an international client spanning 9 countries and 30+ environments, managing regional configurations.',
        'Deployed a multi-environment CI/CD pipeline (GitHub + TeamCity), reducing deployment cycles by 40%.',
        'Maintained cloud architectures compliant with cybersecurity standards, with a clean audit record throughout.',
        'Designed resilient, scalable architectures sustaining a 99.99% SLA while supporting a 50% traffic increase.',
      ],
    },
    {
      id: 'capgemini-architect',
      when: 'Feb 2022 → Jun 2022',
      org: 'Capgemini',
      role: 'Cloud Architect · associate architect community',
      current: false,
      bullets: [
        'Supported the AWS Landing Zone build for a major energy company across multiple regions, embedding AWS best practices, cost planning and technical procurement.',
        'Worked pre-sales on a supply-chain OMS modernisation on GCP: micro-services hosting (GKE Autopilot, Apigee gateway, CloudSQL, MongoDB, Kafka Confluent) and a DevOps layer (ELK, Grafana, Prometheus, GitLab SaaS), balancing FRs and NFRs.',
        'Authored HLD, LLD and DevOps documentation; shared best practices with cybersecurity and architecture communities.',
      ],
    },
    {
      id: 'manning',
      when: 'Sep 2019 → Jan 2022',
      org: 'Manning Global · cloud consultant for a major European telecom operator (Flexible Engine)',
      role: 'Cloud Infrastructure Engineer',
      current: false,
      bullets: [
        'Collaborated with technical teams to identify and resolve 500+ incidents on the Flexible Engine cloud platform, as site then deployment engineer for the operator.',
        'Implemented compute and storage server virtualisation, raising processing capacity by 30% and rolling out new availability zones in Europe.',
        'Shipped new platform features, including AI acceleration and Bare Metal Server, cutting compute times by 20%.',
      ],
    },
  ],

  fr: [
    {
      id: 'scaleway',
      when: 'Mars 2025 → aujourd’hui',
      org: 'Scaleway · cloud souverain européen (Paris)',
      role: 'Partner Solutions Architect',
      current: true,
      links: [
        { label: 'Cadre Scaleway Landing Zone (livre blanc)', url: 'https://www.scaleway.com/en/scaleway-landing-zone/' },
        { label: 'Kit Scaleway Landing Zone (GitHub)', url: 'https://github.com/scaleway/LandingZone' },
        { label: 'Guide VPN Site-to-Site AWS ↔ Scaleway (docs Scaleway)', url: 'https://www.scaleway.com/en/docs/site-to-site-vpn/reference-content/configure-site-to-site-vpn-aws-scw/' },
      ],
      bullets: [
        'Co-créé la certification Scaleway Solutions Architect : le cours e-learning et la base de questions d’examen, puis comblé le manque de formation presales avec un programme de 2 mois en présentiel (sessions hebdomadaires pour les Account Managers et DSI des partenaires).',
        'Auteur du cadre Scaleway Landing Zone comme standard réutilisable pour les partenaires : livre blanc public et toolkit open source (liens ci-dessus) ; le POC Landing Zone a contribué à remporter un compte majeur de l’aéronautique.',
        'Piloté des appels d’offres grands comptes et publics : soutenance technique de 3 h pour l’accord-cadre 2028–2035 d’un grand énergéticien couvrant 12 cas d’usage d’architecture cloud, participation à la réponse d’une institution européenne (hub-and-spoke multi-régions, Rancher, Datahub) avec un intégrateur, et à la réponse d’un opérateur de transport public, avec des modules d’offre réutilisés sur des projets médias.',
        'Publié du contenu technique sur la documentation publique Scaleway, dont le guide de configuration VPN Site-to-Site AWS ↔ Scaleway, pour aider partenaires et clients à connecter leurs environnements hybrides et multi-cloud.',
        'Organisé 3 Immersion Days d’une semaine pour les partenaires, en assumant toute la chaîne, de la planification et la conception du contenu aux QA quotidiens jusqu’à la soutenance finale, chacun réunissant 50+ consultants partenaires (avec Deloitte NL/FR, Play Pologne et Reply Italie entre autres) ; animé aussi des hackathons, un pitch de 40 minutes sur scène à Rockstar Valley 2025 (70+ participants) et une intervention 2026 sur les patterns multi-cloud avec les hyperscalers.',
        'Représenté Scaleway à VivaTech 2025 sur le stand, avec deux démos en direct : une application type ChatGPT sur architecture serverless, et un modèle open source Hugging Face hébergé via l’API Generative Scaleway avec inférence en direct. Lors d’AI Pulse, l’événement AI sur invitation de Scaleway, reçu les partenaires invités par Scaleway et leurs clients et assuré un support technique en direct.',
        'Accompagnement quotidien des partenaires : revues d’architecture (HLD), rédaction de RFI/RFP, support au chiffrage et participation en tant qu’expert technique aux réunions partenaires–clients.',
        'Avant-vente technique ISV : accompagné et testé plus de 20 partenaires (ServiceNow, Dynatrace, Palo Alto Networks, Fortinet, etc.), études Build-or-Buy et intégrations de plateforme (Data Plane Mulesoft sur Rancher, Dynatrace via OpenTelemetry).',
        'Quand aucune solution managée n’existe, je crée des ponts entre les besoins des partenaires et la plateforme : vérification de la roadmap, qualification d’alternatives open source, conception d’une offre managée avec chiffrage et d’un chemin de migration vers la fonctionnalité native, tout en nourrissant Product & Engineering avec la demande des partenaires.',
      ],
    },
    {
      id: 'capgemini-migration',
      when: 'Févr. 2024 → 2025',
      org: 'Capgemini',
      role: 'Lead Cloud Migration Engineer',
      current: false,
      bullets: [
        'Conduit la migration d’un datalake de 20 To vers AWS (Site-to-Site VPN, Transit Gateway, AWS DMS, Transfer Family), réduisant les coûts cloud de 25 %.',
        'Intégré plus de 15 applications critiques au datalake AWS avec une continuité opérationnelle sans interruption.',
        'Standardisé le pattern d’intégration de la plateforme pour tout le programme, réutilisé par 90 % des projets et réduisant les délais de livraison de 40 %.',
        'Orchestré la synchronisation post-migration avec AWS Glue et Athena, avec des rapports d’évaluation livrés sous 24 heures.',
      ],
    },
    {
      id: 'capgemini-ops',
      when: 'Juin 2022 → Févr. 2024',
      org: 'Capgemini',
      role: 'Lead Cloud Ops',
      current: false,
      bullets: [
        'Piloté une migration multi-pays pour un client international couvrant 9 pays et 30+ environnements, en gérant les configurations régionales.',
        'Déployé un pipeline CI/CD multi-environnements (GitHub + TeamCity), réduisant les cycles de déploiement de 40 %.',
        'Maintenu la conformité des architectures cloud aux standards de cybersécurité, avec un historique sans incident.',
        'Conçu des architectures résilientes et scalables maintenant un SLA de 99,99 % tout en soutenant une hausse du trafic de 50 %.',
      ],
    },
    {
      id: 'capgemini-architect',
      when: 'Févr. 2022 → Juin 2022',
      org: 'Capgemini',
      role: 'Cloud Architect · communauté d’architectes',
      current: false,
      bullets: [
        'Soutien à la création de la Landing Zone AWS d’un grand groupe énergétique sur plusieurs régions, en intégrant les bonnes pratiques AWS, la planification des coûts et l’approvisionnement technique.',
        'Avant-vente de la modernisation d’un système de supply chain (OMS) sur GCP : hébergement de micro-services (GKE Autopilot, passerelle Apigee, CloudSQL, MongoDB, Kafka Confluent) et couche DevOps (ELK, Grafana, Prometheus, GitLab SaaS), en considérant les FR et NFR.',
        'Rédaction du HLD, du LLD et de la documentation DevOps ; partage des bonnes pratiques avec les équipes cybersécurité et les communautés d’architectes.',
      ],
    },
    {
      id: 'manning',
      when: 'Sept. 2019 → Janv. 2022',
      org: 'Manning Global · consultant cloud pour un grand opérateur télécom européen (Flexible Engine)',
      role: 'Ingénieur d’infrastructure cloud',
      current: false,
      bullets: [
        'Collaboré avec les équipes techniques pour identifier et résoudre plus de 500 incidents sur la plateforme Flexible Engine, en tant qu’ingénieur site puis déploiement pour cet opérateur.',
        'Implémenté la virtualisation des serveurs de calcul et de stockage, augmentant la capacité de traitement de 30 % et déployant de nouvelles zones de disponibilité en Europe.',
        'Livré de nouvelles fonctionnalités de plateforme, dont l’accélération IA et le Bare Metal Server, réduisant les temps de calcul de 20 %.',
      ],
    },
  ],
};

/**
 * Education: real data (Master in Energy Economics, Université Grenoble Alpes, 2016 → 2018).
 */
export const education: Record<Locale, EducationItem[]> = {
  en: [
    {
      id: 'master',
      when: '2016 → 2018',
      school: 'Université Grenoble Alpes · Grenoble, France',
      degree: "Master's degree in energy economics & applied economics",
      details:
        'Research and analysis on energy economics: municipal carbon footprints, energy-renovation subsidy leverage, coordination of grid investments for renewables. Co-authored peer-reviewed research on power-market design (2018).',
    },
  ],
  fr: [
    {
      id: 'master',
      when: '2016 → 2018',
      school: 'Université Grenoble Alpes · Grenoble, France',
      degree: 'Master en économie de l’énergie & économie appliquée',
      details:
        'Recherche et analyse en économie de l’énergie : bilans carbone communaux, effet de levier des subventions de rénovation, coordination des investissements réseaux pour les énergies renouvelables. Co-auteur d’une recherche sur la conception de mécanismes des marchés de l’électricité (2018).',
    },
  ],
};
