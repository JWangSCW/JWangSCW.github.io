import { getCollection } from 'astro:content';

export type Locale = 'en' | 'fr';

/** All entries of a collection for a given locale (entries are stored as <locale>/<slug>.md). */
export async function getEntries<T extends 'cases' | 'projects' | 'posts' | 'certs'>(
  collection: T,
  locale: Locale,
) {
  const all = await getCollection(collection);
  return all
    .filter((e) => e.id.startsWith(locale + '/'))
    // remove the "en/" / "fr/" prefix to get the clean slug
    .map((e) => ({ ...e, slug: e.id.slice(locale.length + 1) })) as Array<
    Parameters<typeof all>[0] & { slug: string }
  >;
}

/** Build the alternate-locale URL for a current pathname. Always returns a trailing slash. */
export function altLocalePath(pathname: string, from: Locale, to: Locale): string {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  let out: string;
  if (to === 'en') {
    if (clean === '/fr') {
      out = '/';
    } else {
      out = clean.startsWith('/fr/') ? clean.slice(3) : clean || '/';
    }
  } else {
    out = clean === '/' || clean.startsWith('/fr') ? '/fr' : `/fr${clean}`;
  }
  return out.endsWith('/') ? out : `${out}/`;
}
