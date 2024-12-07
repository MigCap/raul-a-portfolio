import { translations } from '@/i18n/ui.i18n';
import {
  type Languages,
  type TranslationKey,
  DEFAULT_LANG,
  LANGUAGES,
} from './config.i18n';
import { ROUTE_PREFIX, ROUTES_IDS } from './routes.i18n';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Languages;
  return DEFAULT_LANG;
}

export function useTranslations(lang: Languages) {
  return function t(key: TranslationKey) {
    return translations[lang][key] || translations[DEFAULT_LANG][key];
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
  lang: any,
  newLang: string,
) {
  const routeIdsEntries = Object.entries(ROUTES_IDS[lang]);
  const routeSection: any = routeIdsEntries.find(
    ([_, value]: any) => value.path === section,
  );
  const newLangToLower = newLang.toLowerCase();

  return ROUTES_IDS[newLangToLower][routeSection?.[0]] || '';
}

export function getRedirect(newLang: string, url: URL) {
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

export function getWorksPatch(url: URL) {
  const lang = getLangFromUrl(url);
  const worksPathToLower =
    lang === LANGUAGES.EN
      ? ROUTES_IDS[LANGUAGES.EN].WORK.path
      : ROUTES_IDS[LANGUAGES.ES].WORK.path;

  return `/${lang}/${worksPathToLower}/`;
}
