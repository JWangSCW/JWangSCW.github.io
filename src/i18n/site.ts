/**
 * Central, easy-to-edit profile info used across the site.
 * Update this file (and the content collections) to personalize the site.
 */

export const SITE = {
  name: 'Jiaqi Wang',
  role: 'Cloud Solutions Architect',
  location: 'Paris · Île-de-France, France',
  email: 'xavier.wangjiaqi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jiaqi-wang-cloud',
  github: 'https://github.com/JWangSCW', // ⚠️ TODO(you): point to the GitHub account you want visible
  available: true, // false while not on the market
  providers: ['AWS', 'GCP', 'Azure', 'Scaleway', 'Terraform', 'FinOps'],
} as const;
