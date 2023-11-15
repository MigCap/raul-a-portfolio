import {
  translations,
  DEFAULT_LANG,
  ROUTES_IDS,
  LANGUAGES,
  type TLanguages,
} from '@/i18n/ui';
import { urlForImage } from '@/sanity/utils';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as TLanguages;
  return DEFAULT_LANG;
}

export function useTranslations(lang: keyof typeof translations) {
  return function t(key: keyof (typeof translations)[typeof DEFAULT_LANG]) {
    return translations[lang][key] || translations[DEFAULT_LANG][key];
  };
}

export function getTranslatedRouteSection(
  section: string,
  lang: any,
  newLang: string,
) {
  const routeEntry: any = Object.entries(ROUTES_IDS[lang]).find(
    ([_, value]: any) => value.toLowerCase() === section,
  );
  return ROUTES_IDS[newLang.toLowerCase()][routeEntry?.[0]] || '';
}

export function getRedirect(newLang: string, lang: any, currentPath: any) {
  const [_, __, section, ...rest] = currentPath.split('/');
  const newLangToLower = newLang.toLowerCase();
  const nextSectionToLower = getTranslatedRouteSection(
    section,
    lang,
    newLang,
  ).toLowerCase();
  const restPath = rest;
  const newRoute = `/${newLangToLower}${nextSectionToLower && `/${nextSectionToLower}`}${restPath && `/${restPath}/`}`;

  return newRoute || `/${lang}/`;
}

export function isActiveRoute(href: string, url: any, lang: any) {
  return (
    url.pathname === href ||
    (href !== `/${lang}/` && url.pathname.startsWith(href))
  );
}

export function getWorksPatch(currentLang: string) {
  const worksPath = (
    currentLang === LANGUAGES.EN
      ? ROUTES_IDS[LANGUAGES.EN].WORK
      : ROUTES_IDS[LANGUAGES.ES].WORK
  ).toLowerCase();

  return `/${currentLang}/${worksPath}/`;
}


