import type { Locale } from '../lib/content';

/** All UI strings for the site, keyed by locale. Content collections hold long-form text. */
const ui = {
  en: {
    // nav
    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.cases': 'Case studies',
    'nav.projects': 'Projects',
    'nav.writing': 'Writing',
    'nav.certs': 'Certifications',
    'nav.architecture': 'Architecture',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'lang.switchTo': 'FR',
    'lang.label': 'Switch language',

    // hero
    'hero.kicker': '// Cloud Solutions Architect — Paris · EU market',
    'hero.title1': 'Cloud solutions that',
    'hero.title2': 'engineers can run',
    'hero.title3': 'and CFOs can approve.',
    'hero.lead':
      "I help organisations design, migrate and operate cloud platforms — from pre-sales architecture to hands-on delivery. Sensitive workloads, cost control and European sovereignty are my home turf.",
    'hero.cta.cases': 'See case studies',
    'hero.cta.resume': 'Download résumé',
    'hero.status': 'Open to Cloud SA opportunities',
    'hero.terminal.title': 'whoami.sh',
    'hero.providers': 'working across cloud ecosystems',

    // terminal lines (typed by the hero)
    'term.1.cmd': 'whoami',
    'term.1.out': 'Jiaqi Wang — Cloud Solutions Architect',
    'term.2.cmd': 'cat providers.txt',
    'term.2.out': 'aws · scaleway · huawei-cloud',
    'term.3.cmd': 'test sovereignty --region eu',
    'term.3.out': 'PASS — data stays in the EU',
    'term.4.cmd': 'open ./contact',
    'term.4.out': "Let's talk →",

    // metrics
    'metric.years.v': '8+',
    'metric.years.l': 'years building cloud & digital solutions',
    'metric.impact.v': '€M',
    'metric.impact.l': 'of client cloud spend influenced',
    'metric.sovereignty.v': 'EU',
    'metric.sovereignty.l': 'sovereign-cloud migration experience',
    'metric.langs.v': '3',
    'metric.langs.l': 'working languages: EN·FR·中文',

    // home sections
    'home.cases.kicker': '// Selected work',
    'home.cases.title': 'Case studies',
    'home.cases.sub':
      'Real engagements are the clearest signal of how an SA thinks. Here is how I approach problems and make decisions.',
    'home.cases.all': 'All case studies',
    'home.writing.kicker': '// From the field',
    'home.writing.title': 'Latest writing',
    'home.writing.sub': 'Short notes on architecture decisions, migration and cloud economics.',
    'home.writing.all': 'All writing',
    'home.certs.kicker': '// Proof of knowledge',
    'home.certs.title': 'Certifications & credentials',
    'home.certs.sub': 'Continuous learning, verifiable.',
    'home.certs.all': 'All certifications',
    'home.cta.title': 'Looking for an SA who can hold their own in front of a board and a whiteboard?',
    'home.cta.sub': 'I am available for Cloud Solutions Architect and pre-sales roles in Paris or remote across Europe.',
    'home.cta.btn': 'Let’s talk',

    // cases
    'cases.kicker': '// Case studies',
    'cases.title': 'How I architect and deliver',
    'cases.sub':
      'Each case follows the same discipline I apply in front of customers: context → constraints → design decisions → outcome.',
    'cases.meta.sector': 'Sector',
    'cases.meta.duration': 'Duration',
    'cases.meta.role': 'My role',
    'cases.meta.year': 'Year',
    'cases.meta.stack': 'Stack',
    'cases.meta.tags': 'Topics',
    'cases.meta.client': 'Client',
    'cases.impact': 'Outcome',
    'cases.back': 'All case studies',
    'cases.next': 'Next case study',
    'cases.template': 'Template — replace with a real engagement',
    'cases.templateHint':
      'This is a structural template showing the format to follow. Replace it with one of your real engagements before publishing.',

    // projects
    'projects.kicker': '// Hands-on',
    'projects.title': 'Projects & proof of work',
    'projects.sub':
      'An SA is credible when they can actually do the thing. These are my hands-on experiments, tools and platforms.',
    'projects.status.live': 'Live',
    'projects.status.lab': 'Lab',
    'projects.status.wip': 'Building',
    'projects.code': 'Source',
    'projects.demo': 'Live demo',
    'projects.featured': 'Featured',
    'projects.back': 'All projects',

    // writing
    'writing.kicker': '// Writing',
    'writing.title': 'Notes from the field',
    'writing.sub': 'Architecture opinions, migration stories and cloud economics.',
    'writing.read': 'Read',
    'writing.min': 'min read',
    'writing.back': 'Back to writing',
    'writing.draft': 'Draft',

    // certs
    'certs.kicker': '// Credentials',
    'certs.title': 'Certifications',
    'certs.sub': 'A snapshot of continuous learning. Everything here is verifiable via the attached credential links.',
    'certs.issued': 'Issued',
    'certs.verify': 'Verify',
    'certs.cloud': 'Cloud',
    'certs.strategy': 'Strategy & management',
    'certs.data': 'Data & programming',
    'certs.other': 'Other',
    'certs.draftNote': 'Draft entry — add the real detail before publishing.',

    // experience
    'exp.kicker': '// Career',
    'exp.title': 'Experience',
    'exp.sub': 'A summary of roles and the problems I have worked on, roughly in reverse-chronological order.',
    'exp.now': 'Now',
    'exp.present': 'present',
    'exp.timelineTitle': 'Timeline',
    'edu.kicker': '// Education',
    'edu.title': 'Education',
    'edu.sub': 'Degrees and formal training.',

    // architecture
    'arch.kicker': '// Meta',
    'arch.title': 'How this website is built',
    'arch.sub':
      'This site is not a static one-off: it is architected, deployed and operated like the platforms I sell to customers. Dogfooding, because an SA should be able to defend every layer of a design.',
    'arch.table.name': 'Layer',
    'arch.table.tech': 'Technology',
    'arch.table.why': 'Why this choice',
    'arch.stack': 'Stack',

    // contact
    'contact.kicker': '// Contact',
    'contact.title': 'Let’s build the next platform together',
    'contact.sub':
      'Whether you are hiring, want an architecture opinion, or want to discuss a migration — my inbox is open.',
    'contact.email': 'Email me',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.resume': 'Download résumé (PDF)',
    'contact.location': 'Location',
    'contact.availability': 'Availability',
    'contact.available': 'Open to opportunities',

    // footer
    'footer.tagline': 'Cloud Solutions Architect — designing for trust, cost and speed.',
    'footer.built': 'Built with Astro · deployed as code',
    'footer.rights': 'All rights reserved.',
    'footer.links': 'Sitemap',

    // 404
    '404.title': '404 — resource not found',
    '404.sub': 'This route does not exist in any cloud region.',
    '404.home': 'Back to home',
  },

  fr: {
    'nav.home': 'Accueil',
    'nav.experience': 'Expérience',
    'nav.cases': 'Études de cas',
    'nav.projects': 'Projets',
    'nav.writing': 'Articles',
    'nav.certs': 'Certifications',
    'nav.architecture': 'Architecture',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Fermer',
    'lang.switchTo': 'EN',
    'lang.label': 'Changer de langue',

    'hero.kicker': '// Architecte de solutions cloud — Paris · marché européen',
    'hero.title1': 'Des solutions cloud que les',
    'hero.title2': 'équipes peuvent opérer',
    'hero.title3': 'et que les CFO peuvent valider.',
    'hero.lead':
      "J'accompagne les organisations dans la conception, la migration et l'exploitation de plateformes cloud — de l'avant-vente à la mise en œuvre. Workloads sensibles, maîtrise des coûts et souveraineté européenne : mon terrain de prédilection.",
    'hero.cta.cases': 'Voir les études de cas',
    'hero.cta.resume': 'Télécharger le CV',
    'hero.status': 'Ouvert aux opportunités Cloud SA',
    'hero.terminal.title': 'whoami.sh',
    'hero.providers': 'à travers les écosystèmes cloud',

    'term.1.cmd': 'whoami',
    'term.1.out': 'Jiaqi Wang — Architecte de solutions cloud',
    'term.2.cmd': 'cat providers.txt',
    'term.2.out': 'aws · scaleway · huawei-cloud',
    'term.3.cmd': 'test sovereignty --region eu',
    'term.3.out': 'PASS — données résidentes dans l’UE',
    'term.4.cmd': 'open ./contact',
    'term.4.out': 'Parlons-en →',

    'metric.years.v': '8+',
    'metric.years.l': 'années à bâtir des solutions cloud & digitales',
    'metric.impact.v': 'M€',
    'metric.impact.l': 'de budgets cloud clients accompagnés',
    'metric.sovereignty.v': 'UE',
    'metric.sovereignty.l': 'expérience de migration vers le cloud souverain',
    'metric.langs.v': '3',
    'metric.langs.l': 'langues de travail : EN·FR·中文',

    'home.cases.kicker': '// Travaux choisis',
    'home.cases.title': 'Études de cas',
    'home.cases.sub':
      'Les engagements réels sont le meilleur signal de la façon de penser d’un SA. Voici comment j’aborde les problèmes et prends des décisions.',
    'home.cases.all': 'Toutes les études de cas',
    'home.writing.kicker': '// Depuis le terrain',
    'home.writing.title': 'Derniers articles',
    'home.writing.sub': 'Notes courtes sur les décisions d’architecture, la migration et l’économie du cloud.',
    'home.writing.all': 'Tous les articles',
    'home.certs.kicker': '// Preuve de compétences',
    'home.certs.title': 'Certifications & diplômes',
    'home.certs.sub': 'Apprentissage continu, vérifiable.',
    'home.certs.all': 'Toutes les certifications',
    'home.cta.title': 'Vous cherchez un SA à l’aise devant un comité de direction comme devant un tableau blanc ?',
    'home.cta.sub':
      'Disponible pour des postes d’architecte de solutions cloud et d’avant-vente à Paris ou en remote en Europe.',
    'home.cta.btn': 'Parlons-en',

    'cases.kicker': '// Études de cas',
    'cases.title': 'Comment je conçois et je livre',
    'cases.sub':
      'Chaque cas suit la même discipline qu’en clientèle : contexte → contraintes → décisions d’architecture → résultat.',
    'cases.meta.sector': 'Secteur',
    'cases.meta.duration': 'Durée',
    'cases.meta.role': 'Mon rôle',
    'cases.meta.year': 'Année',
    'cases.meta.stack': 'Technologies',
    'cases.meta.tags': 'Sujets',
    'cases.meta.client': 'Client',
    'cases.impact': 'Résultat',
    'cases.back': 'Toutes les études de cas',
    'cases.next': 'Étude de cas suivante',
    'cases.template': 'Modèle — à remplacer par un engagement réel',
    'cases.templateHint':
      'Ceci est un modèle structurel montrant le format à suivre. Remplacez-le par l’un de vos engagements réels avant publication.',

    'projects.kicker': '// Concret',
    'projects.title': 'Projets & preuves de travail',
    'projects.sub':
      'Un SA est crédible quand il sait réellement faire. Voici mes expérimentations, outils et plateformes.',
    'projects.status.live': 'En ligne',
    'projects.status.lab': 'Lab',
    'projects.status.wip': 'En construction',
    'projects.code': 'Code source',
    'projects.demo': 'Démo',
    'projects.featured': 'À la une',
    'projects.back': 'Tous les projets',

    'writing.kicker': '// Articles',
    'writing.title': 'Notes depuis le terrain',
    'writing.sub': 'Opinions d’architecture, récits de migration et économie du cloud.',
    'writing.read': 'Lire',
    'writing.min': 'min de lecture',
    'writing.back': 'Retour aux articles',
    'writing.draft': 'Brouillon',

    'certs.kicker': '// Diplômes',
    'certs.title': 'Certifications',
    'certs.sub': 'Un aperçu de l’apprentissage continu. Tout est vérifiable via les liens de credentials.',
    'certs.issued': 'Délivrée',
    'certs.verify': 'Vérifier',
    'certs.cloud': 'Cloud',
    'certs.strategy': 'Stratégie & management',
    'certs.data': 'Données & programmation',
    'certs.other': 'Autre',
    'certs.draftNote': 'Entrée brouillon — complétez les informations réelles avant publication.',

    'exp.kicker': '// Parcours',
    'exp.title': 'Expérience',
    'exp.sub': 'Résumé des postes et des problèmes traités, en ordre antéchronologique.',
    'exp.now': 'Actuel',
    'exp.present': 'aujourd’hui',
    'exp.timelineTitle': 'Chronologie',
    'edu.kicker': '// Formation',
    'edu.title': 'Diplômes & formation',
    'edu.sub': 'Diplômes et formations initiales.',

    'arch.kicker': '// Méta',
    'arch.title': 'Comment ce site est construit',
    'arch.sub':
      'Ce site n’est pas un one-off statique : il est architecturé, déployé et opéré comme les plateformes que je vends aux clients. Dogfooding, parce qu’un SA doit pouvoir défendre chaque couche d’une conception.',
    'arch.table.name': 'Couche',
    'arch.table.tech': 'Technologie',
    'arch.table.why': 'Pourquoi ce choix',
    'arch.stack': 'Stack',

    'contact.kicker': '// Contact',
    'contact.title': 'Construisons la prochaine plateforme ensemble',
    'contact.sub':
      'Que vous recrutiez, cherchiez un avis d’architecture ou vouliez discuter d’une migration — ma boîte mail est ouverte.',
    'contact.email': 'M’écrire',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.resume': 'Télécharger le CV (PDF)',
    'contact.location': 'Localisation',
    'contact.availability': 'Disponibilité',
    'contact.available': 'Ouvert aux opportunités',

    'footer.tagline': 'Architecte de solutions cloud — concevoir pour la confiance, le coût et la vitesse.',
    'footer.built': 'Conçu avec Astro · déployé en tant que code',
    'footer.rights': 'Tous droits réservés.',
    'footer.links': 'Plan du site',

    '404.title': '404 — ressource introuvable',
    '404.sub': 'Cette route n’existe dans aucune région cloud.',
    '404.home': 'Retour à l’accueil',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function t(locale: Locale, key: string): string {
  const table = ui[locale] as Record<string, string>;
  return table[key] ?? ui.en[key as UIKey] ?? key;
}
