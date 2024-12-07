import type { translations } from './ui.i18n';

export const LANGUAGES = {
  EN: 'en',
  ES: 'es',
  FR: 'fr',
  IT: 'it',
} as const;

export type Languages = (typeof LANGUAGES)[keyof typeof LANGUAGES];

export const DEFAULT_LANG = LANGUAGES.EN;

export type TranslationKey = keyof (typeof translations)[typeof DEFAULT_LANG];
