import {
  translations,
  DEFAULT_LANG,
  ROUTES_IDS,
  LANGUAGES,
  type TLanguages,
  type TranslationKey,
} from '@/i18n/ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as TLanguages;
  return DEFAULT_LANG;
}


export function useTranslations(lang: keyof typeof translations) {
  return function t(key: TranslationKey) {
    return translations[lang][key] || translations[DEFAULT_LANG][key];
  };
}

export function getCurrentTranslatedSectionFromUrl(url: URL) {
  const lang = getLangFromUrl(url);
  const section = url.pathname.split('/')[2] as TranslationKey;
  const t = useTranslations(lang);

  return t(section);
}

export function getTranslatedRouteSection(
  section: string,
  lang: any,
  newLang: string,
) {
  const routeIdsEntries = Object.entries(ROUTES_IDS[lang]);
  const routeSection: any = routeIdsEntries.find(([_, value]: any) => value.toLowerCase() === section);
  const newLangToLower = newLang.toLowerCase();

  return ROUTES_IDS[newLangToLower][routeSection?.[0]] || '';
}

export function getRedirect(newLang: string, url: URL) {
  const { pathname } = url;

  const lang = getLangFromUrl(url);

  const [_, __, section, ...rest] = pathname.split('/');

  const newLangToLower = newLang.toLowerCase();
  const nextSectionToLower = getTranslatedRouteSection(section, lang, newLang).toLowerCase();
  const restPath = rest.length <= 0 ? '' : rest[0];

  const nl = newLangToLower ? '/' + newLangToLower : '';
  const ns = nextSectionToLower ? '/' + nextSectionToLower : '';
  const rp = restPath ? '/' + restPath : '';
  
  const newRoute = `${nl}${ns}${rp}`;

  return newRoute ? newRoute + '/' : '' || `/${lang}/`;
}

export function getNavMenuLinksTranslated(url: URL) {
    const lang = getLangFromUrl(url);

  const home = ROUTES_IDS[lang].HOME;
  const work = ROUTES_IDS[lang].WORK;
  const about = ROUTES_IDS[lang].ABOUT;

  const links: { label: string; href: string }[] = [
    { label: home, href: `/${lang}/` },
    { label: work, href: `/${lang}/${work.toLowerCase()}/` },
    { label: about, href: `/${lang}/${about.toLowerCase()}/` },
  ];

  return links;
}

export function isActiveRoute(href: string, url: URL) {
  const lang = getLangFromUrl(url);
  return url.pathname === href || (href !== `/${lang}/` && url.pathname.startsWith(href));
}

export function getWorksPatch(url: URL) {
  const lang = getLangFromUrl(url);
  const worksPathToLower = (
    lang === LANGUAGES.EN
      ? ROUTES_IDS[LANGUAGES.EN].WORK
      : ROUTES_IDS[LANGUAGES.ES].WORK
  ).toLowerCase();

  return `/${lang}/${worksPathToLower}/`;
}
