import type {
  Languages,
  RoutesIdsType,
  SocialIconLink,
} from './interfaces.i18n';

export const LANGUAGES = {
  EN: 'en',
  ES: 'es',
  FR: 'fr',
  IT: 'it',
} as const;

export const DEFAULT_LANG = LANGUAGES.EN;

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

export const ROUTE_PREFIX = 'route.';

function getRouteTranslations(lang: Languages) {
  const routeIdByLang = ROUTES_IDS[lang];
  const translations = Object.keys(routeIdByLang).reduce((acc, routeKey) => {
    return {
      ...acc,
      [`${ROUTE_PREFIX}${routeKey.toLowerCase()}`]: routeIdByLang[routeKey],
    };
  }, {});

  return translations;
}

export const ROUTES_TRANSLATIONS = {
  [LANGUAGES.EN]: getRouteTranslations(LANGUAGES.EN),
  [LANGUAGES.ES]: getRouteTranslations(LANGUAGES.ES),
  [LANGUAGES.IT]: getRouteTranslations(LANGUAGES.IT),
  [LANGUAGES.FR]: getRouteTranslations(LANGUAGES.FR),
};

export const SOCIAL_ICON_LINKS: SocialIconLink[] = [
  {
    label: 'Instagram',
    href: 'https://www.linkedin.com/in/rauldediegovazquez/',
    icon: 'instagram-logo',
  },
  {
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/rauldediegovazquez/',
    icon: 'linkedin-logo',
  },
];

export const ABOUT_USER = {
  name: 'Raúl de Diego',
  fullName: 'Raúl de Diego Vázquez',
  image: '/assets/Foto1CVsm.png',
  mainMail: 'hello@rauldediego.com',
  contactMail: 'contact@rauldediego.com',
};

export const TRANSLATIONS = {
  [LANGUAGES.EN]: {
    ...ROUTES_TRANSLATIONS[LANGUAGES.EN],
    ...ABOUT_USER,
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
    ...ROUTES_TRANSLATIONS[LANGUAGES.ES],
    ...ABOUT_USER,
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
  [LANGUAGES.IT]: {
    ...ROUTES_TRANSLATIONS[LANGUAGES.IT],
    ...ABOUT_USER,
    'about.position': 'Graphic Designer e Illustratore',
    'about.position.description': 'Artefinalista e Direttore Artistico',
    blog: 'Blog',
    blogDescription: 'Descrizione del blog.',
    categories: 'Categorie',
    contact: 'Contatto',
    contactMe: 'Contattami!',
    email: 'Email',
    en: 'en',
    es: 'es',
    letsTalk: 'Parliamone!',
    message: 'Messaggio',
    myServices: 'Servizi',
    name: 'Nome',
    niceToMeetYou: 'Piacere di conoscerti!',
    send: 'Invia',
    work: 'Portfolio',
    'work.title': 'Portfolio',
    'work.tagline': "Dai un'occhiata ai miei lavori.",
  },
  [LANGUAGES.FR]: {
    ...ROUTES_TRANSLATIONS[LANGUAGES.FR],
    ...ABOUT_USER,
    'about.position': 'Graphiste et Illustrateur',
    'about.position.description':
      'Finaliseur artistique et Directeur artistique',
    blog: 'Blog',
    blogDescription: 'Description du blog.',
    categories: 'Catégories',
    contact: 'Contact',
    contactMe: 'Contactez-moi !',
    email: 'Email',
    en: 'en',
    es: 'es',
    letsTalk: 'Discutons-en !',
    message: 'Message',
    myServices: 'Services',
    name: 'Nom',
    niceToMeetYou: 'Enchanté de faire votre connaissance !',
    send: 'Envoyer',
    work: 'Portfolio',
    'work.title': 'Portfolio',
    'work.tagline': 'Jetez un œil à mes travaux.',
  },
};
