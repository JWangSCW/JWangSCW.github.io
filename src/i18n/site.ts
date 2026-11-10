/**
 * Central, easy-to-edit profile info used across the site.
 * Update this file (and the content collections) to personalize the site.
 */

export const SITE = {
  name: 'Jiaqi Wang',
  role: 'Cloud Solutions Architect',
  location: 'Paris · Île-de-France, France',
  email: 'you@example.com', // ⚠️ TODO(you): replace
  linkedin: 'https://www.linkedin.com/in/jiaqi-wang-cloud',
  github: 'https://github.com/jiaqi-wang-cloud', // ⚠️ TODO(you): replace with real handle
  resumeUrl: '/resume.pdf', // ⚠️ TODO(you): drop your resume PDF in public/
  available: true, // false while not on the market
  providers: ['AWS', 'Scaleway', 'Huawei Cloud', 'Kubernetes', 'Terraform', 'Python'],
} as const;
