import {
  DEFAULT_LANG,
  TRANSLATIONS,
  ROUTE_PREFIX,
  ROUTES_IDS,
  ROUTES_TRANSLATIONS,
} from './config.i18n';
import type { Languages, TranslationKey } from './interfaces.i18n';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ROUTES_TRANSLATIONS) return lang as Languages;
  return DEFAULT_LANG;
}

export function useTranslations(lang: Languages) {
  return function t(key: TranslationKey) {
    return TRANSLATIONS[lang][key] || TRANSLATIONS[DEFAULT_LANG][key];
  };
}

export function getCurrentTranslatedSectionFromUrl(url: URL) {
  const lang = getLangFromUrl(url);
  const section = url.pathname.split('/')[2] as TranslationKey;
  const t = useTranslations(lang);

  return t(`${ROUTE_PREFIX}${section}` as TranslationKey);
}

export function getTranslatedRouteSection(
  section: string,
  lang: Languages,
  newLang: Languages,
) {
  const routeIdsEntries = Object.entries(ROUTES_IDS[lang]);
  const routeSection: any = routeIdsEntries.find(
    ([_, value]: any) => value.path === section,
  );
  const newLangToLower = newLang.toLowerCase() as Languages;

  return ROUTES_IDS[newLangToLower][routeSection?.[0]] || '';
}

export function getRedirect(newLang: Languages, url: URL) {
  const { pathname } = url;

  const lang = getLangFromUrl(url);

  const [_, __, section, ...rest] = pathname.split('/');

  const newLangToLower = newLang.toLowerCase();
  const nextSection = getTranslatedRouteSection(section, lang, newLang);
  const nextSectionToLower = nextSection.path;
  const restPath = rest.length <= 0 ? '' : rest[0];

  const nl = newLangToLower ? '/' + newLangToLower : '';
  const ns = nextSectionToLower ? '/' + nextSectionToLower : '';
  const rp = restPath ? '/' + restPath : '';

  const newRoute = `${nl}${ns}${rp}`;

  return newRoute ? newRoute + '/' : `/${lang}/`;
}

export function getNavMenuLinksTranslated(url: URL) {
  const lang = getLangFromUrl(url);

  const home = ROUTES_IDS[lang].HOME;
  const work = ROUTES_IDS[lang].WORK;
  const about = ROUTES_IDS[lang].ABOUT;

  const links: { label: string; href: string }[] = [
    { label: home.name, href: `/${lang}/` },
    { label: work.name, href: `/${lang}/${work.path}/` },
    { label: about.name, href: `/${lang}/${about.path}/` },
  ];

  return links;
}

export function isActiveRoute(href: string, url: URL) {
  const lang = getLangFromUrl(url);
  return (
    url.pathname === href ||
    (href !== `/${lang}/` && url.pathname.startsWith(href))
  );
}

export function getHomePatch(url: URL) {
  const lang = getLangFromUrl(url);

  return `/${lang}/`;
}

export function getWorksPatch(url: URL) {
  const lang = getLangFromUrl(url);
  const worksPathToLower = ROUTES_IDS[lang].WORK.path;

  return `/${lang}/${worksPathToLower}/`;
}
