// import Filigrana from '@/components/icons/Filigrana.astro';
// import Filigrana2 from '@/components/icons/Filigrana2.astro';
// import IconInstagram from '@/components/icons/IconInstagram.astro';
// import IconLinkedin from '@/components/icons/IconLinkedin.astro';

import { iconPaths } from '@/components/common/icons/IconPaths';

export const LANGUAGES: Record<string, Languages> = {
  EN: 'en',
  ES: 'es',
};

export type Languages = 'en' | 'es'

export const DEFAULT_LANG = LANGUAGES.EN;

export const locales = [LANGUAGES.EN, LANGUAGES.ES];

export const DeviceSize = {
  mobile: 768,
  tablet: 992,
  laptop: 1324,
  desktop: 2024,
};
export const headerHeight = 100;

export const socialIconLinks: { label: string; href: string; icon: keyof typeof iconPaths }[] = [
	{ label: 'Instagram', href: 'https://www.linkedin.com/in/rauldediegovazquez/', icon: 'instagram-logo' },
	{ label: 'Linkedin', href: 'https://www.linkedin.com/in/rauldediegovazquez/', icon: 'linkedin-logo' },
];

export const about = {
  name: 'Raúl de Diego',
  fullName: 'Raul de Diego Vázquez',
  image: '/assets/Foto1CVsm.png',
  mainMail: 'hello@rauldediego.com',
  contactMail: 'contact@rauldediego.com',
  software: ['Photoshop'],
  skills: [''],
  hobbies: ['Fútbol', 'Ciclismo', 'Cine', 'Música'],
};

export type RouteTranslationsType = {
  HOME: string;
  ABOUT: string;
  CONTACT: string;
  WORK: string;
  PORTFOLIO: string;
  BLOG: string;
  PRIVACY_POLICY: string;
  [key: string]: string;
};

export type RoutesIdsType = Record<string, RouteTranslationsType>;
// export type RoutesIdsType = keyof (typeof ROUTES_IDS)[typeof DEFAULT_LANG]

export const ROUTES_IDS: RoutesIdsType = {
  [LANGUAGES.EN]: {
    HOME: 'Home',
    ABOUT: 'About',
    CONTACT: 'Contact',
    WORK: 'Work',
    PORTFOLIO: 'Portfolio',
    BLOG: 'blog',
    PRIVACY_POLICY: 'privacy-policy',
  },
  [LANGUAGES.ES]: {
    HOME: 'Home',
    ABOUT: 'Sobre',
    CONTACT: 'Contacto',
    WORK: 'Portfolio',
    PORTFOLIO: 'Portfolio',
    BLOG: 'blog',
    PRIVACY_POLICY: 'privacy-policy',
  }
};

export type RouteTranslationKey = keyof (typeof routesTranslations)[typeof DEFAULT_LANG]

export const ROUTE_PREFIX = 'route.';

export const routesTranslations = {
  [LANGUAGES.EN]: Object.keys(ROUTES_IDS[LANGUAGES.EN]).reduce(
    (acc, routeKey) => {
      return {
        ...acc,
        [`${ROUTE_PREFIX}${routeKey.toLowerCase()}`]: ROUTES_IDS[LANGUAGES.EN][routeKey],
      };
    },
    {},
  ),
  [LANGUAGES.ES]: Object.keys(ROUTES_IDS[LANGUAGES.ES]).reduce(
    (acc, routeKey) => {
      return {
        ...acc,
        [`${ROUTE_PREFIX}${routeKey.toLowerCase()}`]: ROUTES_IDS[LANGUAGES.ES][routeKey],
      };
    },
    {},
  ),
};

export type TranslationKey = keyof (typeof translations)[typeof DEFAULT_LANG]

export const translations = {
  [LANGUAGES.EN]: {
    ...routesTranslations[LANGUAGES.EN],
    'about.position': 'Graphic Designer and Illustrator',
    'about.position.description': 'Art Director',
    blog: 'Blog',
    blogDescription: 'Blog page description',
    categories: 'Categories',
    contact: 'Contact',
    contactMe: 'Contact me!',
    email: 'Email',
    en: 'en',
    es: 'es',
    letsTalk: "Let's talk!",
    message: 'Message',
    myServices: 'My services',
    name: 'Name',
    niceToMeetYou: 'Hey! Nice to meet you!',
    send: 'Send',
    work: 'Work',
    'work.title': 'My Work',
    'work.tagline':
      'See my most recent projects below to get an idea of my past experience.',
  },
  [LANGUAGES.ES]: {
    ...routesTranslations[LANGUAGES.ES],
    'about.position': 'Diseñador Gráfico e Ilustrador',
    'about.position.description': 'Artefinalista y Director de Arte',
    blog: 'Blog',
    blogDescription: 'Descripción del blog.',
    categories: 'Categorías',
    contact: 'Contacto',
    contactMe: '¡Contáctame!',
    email: 'Email',
    en: 'en',
    es: 'es',
    letsTalk: '¡Hablamos!',
    message: 'Mensaje',
    myServices: 'Servicios',
    name: 'Nombre',
    niceToMeetYou: '¡Encantado de conocerte!',
    send: 'Enviar',
    work: 'Portfolio',
    'work.title': 'Portfolio',
    'work.tagline': 'Echa un ojo a mis trabajos.',
  },
};
