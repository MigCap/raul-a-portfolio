import type { iconPaths } from '@/components/common/icons/IconPaths';
import type {
  DEFAULT_LANG,
  LANGUAGES,
  ROUTES_TRANSLATIONS,
  TRANSLATIONS,
} from './config.i18n';

export type Languages = (typeof LANGUAGES)[keyof typeof LANGUAGES];

export type TranslationKey = keyof (typeof TRANSLATIONS)[typeof DEFAULT_LANG];

export type RouteTranslationsType = {
  HOME: {
    path: string;
    name: string;
  };
  ABOUT: {
    path: string;
    name: string;
  };
  CONTACT: {
    path: string;
    name: string;
  };
  WORK: {
    path: string;
    name: string;
  };
  PORTFOLIO: {
    path: string;
    name: string;
  };
  BLOG: {
    path: string;
    name: string;
  };
  PRIVACY_POLICY: {
    path: string;
    name: string;
  };
  [key: string]: {
    path: string;
    name: string;
  };
};

export type RoutesIdsType = Record<Languages, RouteTranslationsType>;
// export type RoutesIdsType = keyof (typeof ROUTES_IDS)[typeof DEFAULT_LANG]

export type RouteTranslationKey =
  keyof (typeof ROUTES_TRANSLATIONS)[typeof DEFAULT_LANG];

export interface SocialIconLink {
  label: string;
  href: string;
  icon: keyof typeof iconPaths;
}
