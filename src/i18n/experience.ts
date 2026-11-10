import type { Locale } from '../lib/content';

export interface ExperienceItem {
  id: string;
  when: string;
  org: string;
  role: string;
  current: boolean;
  bullets: string[];
}

/**
 * ⚠️ TODO(you): verify dates, orgs and bullets. The details below are educated
 * placeholders built from your public LinkedIn profile — correct them freely.
 */
export const experience: Record<Locale, ExperienceItem[]> = {
  en: [
    {
      id: 'scaleway',
      when: '2024 — present',
      org: 'Scaleway — European sovereign cloud (Paris)',
      role: 'Cloud Solutions Architect',
      current: true,
      bullets: [
        'Design cloud solutions in pre-sales: technical discovery, architecture, TCO and proposal documentation for customers across regulated and digital sectors.',
        'Architect migrations from US hyperscalers (AWS) to European sovereign infrastructure, addressing data residency, Cloud Act exposure and operating-cost trade-offs.',
        'Run technical workshops, PoCs and demos; support our delivery teams and capture reference architectures.',
      ],
    },
    {
      id: 'huawei',
      when: '2021 — 2024', // ⚠️ verify
      org: 'Huawei Cloud (CloudBU)',
      role: 'Cloud Solutions Architect',
      current: false,
      bullets: [
        'Pre-sales solution design and enablement on public cloud, with a focus on serverless offerings (FunctionGraph).',
        'Recognised with the «FE Engine Public Cloud MKT support outstanding individual» award (Jul 2021).',
        'Built reference architectures and PoCs; supported marketing-to-sales technical motions and partner enablement.',
      ],
    },
    {
      id: 'energy',
      when: '2016 — 2019', // ⚠️ verify
      org: 'Applied economics · energy & climate data (Grenoble, France)',
      role: 'Research & analysis',
      current: false,
      bullets: [
        'Conducted quantitative studies: municipal carbon footprints, renewable-energy network coordination and energy-renovation subsidy leverage (Excel, Stata).',
        'Co-authored a peer-reviewed mechanism-design paper on power-market tacit collusion (2018).',
        'Built the analytical mindset that later translated into cost modelling and cloud TCO work.',
      ],
    },
  ],

  fr: [
    {
      id: 'scaleway',
      when: '2024 — aujourd’hui',
      org: 'Scaleway — cloud souverain européen (Paris)',
      role: 'Architecte de solutions cloud',
      current: true,
      bullets: [
        'Conception de solutions cloud en avant-vente : découverte technique, architecture, TCO et documentation de propositions pour des clients de secteurs régulés et digitaux.',
        'Conception de migrations depuis les hyperscalers US (AWS) vers une infrastructure souveraine européenne, en traitant résidence des données, exposition au Cloud Act et arbitrages de coûts.',
        'Animation de workshops techniques, PoC et démos ; appui aux équipes de delivery et capitalisation sur les architectures de référence.',
      ],
    },
    {
      id: 'huawei',
      when: '2021 — 2024', // ⚠️ à vérifier
      org: 'Huawei Cloud (CloudBU)',
      role: 'Architecte de solutions cloud',
      current: false,
      bullets: [
        'Conception de solutions et enablement en avant-vente cloud public, avec un focus sur les offres serverless (FunctionGraph).',
        'Distingué par le prix « FE Engine Public Cloud MKT support outstanding individual » (juil. 2021).',
        'Réalisation d’architectures de référence et de PoC ; appui technique des campagnes marketing-to-sales et enablement des partenaires.',
      ],
    },
    {
      id: 'energy',
      when: '2016 — 2019', // ⚠️ à vérifier
      org: 'Économie appliquée · énergie & données climat (Grenoble)',
      role: 'Recherche & analyse',
      current: false,
      bullets: [
        'Études quantitatives : bilans carbone communaux, coordination des investissements réseaux pour les énergies renouvelables, effet de levier des subventions de rénovation (Excel, Stata).',
        'Co-auteur d’un article de conception de mécanismes sur la collusion tacite dans les marchés de l’électricité (2018).',
        'Un socle analytique réinvesti depuis dans la modélisation des coûts et le TCO cloud.',
      ],
    },
  ],
};
