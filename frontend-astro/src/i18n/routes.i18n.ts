import { DEFAULT_LANG, LANGUAGES } from './config.i18n';

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

export type RoutesIdsType = Record<string, RouteTranslationsType>;
// export type RoutesIdsType = keyof (typeof ROUTES_IDS)[typeof DEFAULT_LANG]

export const ROUTES_IDS: RoutesIdsType = {
  [LANGUAGES.EN]: {
    HOME: {
      path: 'home',
      name: 'Home',
    },
    ABOUT: {
      path: 'about',
      name: 'About',
    },
    CONTACT: {
      path: 'contact',
      name: 'Contact',
    },
    WORK: {
      path: 'work',
      name: 'Work',
    },
    PORTFOLIO: {
      path: 'portfolio',
      name: 'Portfolio',
    },
    BLOG: {
      path: 'blog',
      name: 'blog',
    },
    PRIVACY_POLICY: {
      path: 'privacy-policy',
      name: 'privacy-policy',
    },
  },
  [LANGUAGES.ES]: {
    HOME: {
      path: 'home',
      name: 'Home',
    },
    ABOUT: {
      path: 'sobre',
      name: 'Sobre',
    },
    CONTACT: {
      path: 'contacto',
      name: 'Contacto',
    },
    WORK: {
      path: 'portfolio',
      name: 'Portfolio',
    },
    PORTFOLIO: {
      path: 'portfolio',
      name: 'Portfolio',
    },
    BLOG: {
      path: 'blog',
      name: 'blog',
    },
    PRIVACY_POLICY: {
      path: 'privacy-policy',
      name: 'privacy-policy',
    },
  },
  [LANGUAGES.IT]: {
    HOME: {
      path: 'home',
      name: 'Home',
    },
    ABOUT: {
      path: 'chi-siamo',
      name: 'Chi Siamo',
    },
    CONTACT: {
      path: 'contatto',
      name: 'Contatto',
    },
    WORK: {
      path: 'portfolio',
      name: 'Portfolio',
    },
    PORTFOLIO: {
      path: 'portfolio',
      name: 'Portfolio',
    },
    BLOG: {
      path: 'blog',
      name: 'Blog',
    },
    PRIVACY_POLICY: {
      path: 'privacy-policy',
      name: 'privacy-policy',
    },
  },
  [LANGUAGES.FR]: {
    HOME: {
      path: 'accueil',
      name: 'Accueil',
    },
    ABOUT: {
      path: 'a-propos',
      name: 'À Propos',
    },
    CONTACT: {
      path: 'contact',
      name: 'Contact',
    },
    WORK: {
      path: 'portfolio',
      name: 'Portfolio',
    },
    PORTFOLIO: {
      path: 'portfolio',
      name: 'Portfolio',
    },
    BLOG: {
      path: 'blog',
      name: 'Blog',
    },
    PRIVACY_POLICY: {
      path: 'politique-de-confidentialité',
      name: 'politique-de-confidentialité',
    },
  },
};

export type RouteTranslationKey =
  keyof (typeof routesTranslations)[typeof DEFAULT_LANG];

export const ROUTE_PREFIX = 'route.';

const getRouteTranslations = (lang: any) => {
  const routeIdByLang = ROUTES_IDS[lang];
  const translations = Object.keys(routeIdByLang).reduce((acc, routeKey) => {
    return {
      ...acc,
      [`${ROUTE_PREFIX}${routeKey.toLowerCase()}`]: routeIdByLang[routeKey],
    };
  }, {});

  return translations;
};

export const routesTranslations = {
  [LANGUAGES.EN]: getRouteTranslations(LANGUAGES.EN),
  [LANGUAGES.ES]: getRouteTranslations(LANGUAGES.ES),
  [LANGUAGES.IT]: getRouteTranslations(LANGUAGES.IT),
  [LANGUAGES.FR]: getRouteTranslations(LANGUAGES.FR),
};
