// import Filigrana from '@/components/icons/Filigrana.astro';
// import Filigrana2 from '@/components/icons/Filigrana2.astro';
// import IconInstagram from '@/components/icons/IconInstagram.astro';
// import IconLinkedin from '@/components/icons/IconLinkedin.astro';

import { iconPaths } from '@/components/icons/IconPaths';

export const LANGUAGES: Record<string, TLanguages> = {
  EN: 'en',
  ES: 'es',
};

export type TLanguages = 'en' | 'es'

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

// export const socialLinks: any = {
//   linkedin: {
//     name: 'Linkedin',
//     url: 'https://www.linkedin.com/in/rauldediegovazquez/',
//     // icon: "pi pi-linkedin",
//     Icon: IconLinkedin,
//     show: true,
//   },
//   github: {
//     name: 'Github',
//     url: '',
//     icon: 'pi pi-github',
//     show: false,
//   },
//   twitter: {
//     name: 'Twitter',
//     url: '',
//     icon: 'pi pi-twitter',
//     show: false,
//   },
//   instagram: {
//     name: 'Instagram',
//     url: 'https://www.linkedin.com/in/rauldediegovazquez/',
//     // icon: "pi pi-instagram",
//     Icon: IconInstagram,
//     show: true,
//   },
// };

// export const socialMedia = [
//   socialLinks.linkedin,
//   socialLinks.instagram,
//   {
//     name: 'Mail',
//     url: '/contact',
//     icon: 'pi pi-envelope',
//   },
// ];

export const about = {
  name: 'Raúl de Diego',
  fullName: 'Raul de Diego Vázquez',
  image: '/assets/Foto1CVsm.png',
  mainMail: 'hello@rauldediego.com',
  contactMail: 'contact@rauldediego.com',
  experience: [],
  education: [],
  software: ['Photoshop'],
  skills: [''],
  hobbies: ['Fútbol', 'Ciclismo', 'Cine', 'Música'],
};

// export const categoriesConfig: any = [
//   //
//   // GRAPHIC DESIGN
//   //
//   {
//     id: 56,
//     name: {
//       [LANGUAGES.EN]: 'Graphic Design',
//       [LANGUAGES.ES]: 'Diseño Grafico',
//     },
//     Icon: Filigrana,
//     main: true,
//   },
//   {
//     id: 62,
//     name: {
//       [LANGUAGES.EN]: 'Branding',
//       [LANGUAGES.ES]: 'Branding',
//     },
//   },
//   {
//     id: 65,
//     name: {
//       [LANGUAGES.EN]: 'Communication',
//       [LANGUAGES.ES]: 'Comunicación',
//     },
//   },
//   {
//     id: 58,
//     name: {
//       [LANGUAGES.EN]: 'Editorial Design',
//       [LANGUAGES.ES]: 'Diseñó Editorial',
//     },
//   },
//   {
//     id: 71,
//     name: {
//       [LANGUAGES.EN]: 'Events',
//       [LANGUAGES.ES]: 'Eventos',
//     },
//   },
//   {
//     id: 63,
//     name: {
//       [LANGUAGES.EN]: 'Final Atwork',
//       [LANGUAGES.ES]: 'Arte Final',
//     },
//   },
//   {
//     id: 70,
//     name: {
//       [LANGUAGES.EN]: 'Gigantrophy',
//       [LANGUAGES.ES]: 'Gigantrophy',
//     },
//   },
//   {
//     id: 67,
//     name: {
//       [LANGUAGES.EN]: 'Layout',
//       [LANGUAGES.ES]: 'Layout',
//     },
//   },
//   {
//     id: 66,
//     name: {
//       [LANGUAGES.EN]: 'Marketing',
//       [LANGUAGES.ES]: 'Marketing',
//     },
//   },
//   {
//     id: 61,
//     name: {
//       [LANGUAGES.EN]: 'Packaging',
//       [LANGUAGES.ES]: 'Packaging',
//     },
//   },

//   //
//   // ILLUSTRATION
//   //
//   {
//     id: 57,
//     name: { [LANGUAGES.EN]: 'Illustration', [LANGUAGES.ES]: 'Ilustración' },
//     Icon: Filigrana2,
//     main: true,
//   },
//   {
//     id: 69,
//     name: {
//       [LANGUAGES.EN]: 'Digital Art',
//       [LANGUAGES.ES]: 'Arte Digital',
//     },
//   },
//   {
//     id: 60,
//     name: {
//       [LANGUAGES.EN]: 'Editorial Illustration',
//       [LANGUAGES.ES]: 'Ilustración Editorial',
//     },
//   },
//   {
//     id: 68,
//     name: {
//       [LANGUAGES.EN]: 'Fantasy Art',
//       [LANGUAGES.ES]: 'Fantasy Art',
//     },
//   },
//   {
//     id: 59,
//     name: { [LANGUAGES.EN]: 'Matte Painting', [LANGUAGES.ES]: 'Pintura mate' },
//   },
// ];

// export const mainCategoriesIds = categoriesConfig
//   .filter((category: any) => category?.main)
//   ?.map((category: any) => category?.id);

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

export const ROUTES_IDS: RoutesIdsType = {
  [LANGUAGES.EN]: {
    HOME: 'Home',
    ABOUT: 'About',
    CONTACT: 'Contact',
    WORK: 'Work',
    PORTFOLIO: 'portfolio_categories',
    BLOG: 'blog',
    PRIVACY_POLICY: 'privacy-policy',
  },
  [LANGUAGES.ES]: {
    HOME: 'Home',
    ABOUT: 'Sobre',
    CONTACT: 'Contacto',
    WORK: 'Portfolio',
    PORTFOLIO: 'portfolio_categories',
    BLOG: 'blog',
    PRIVACY_POLICY: 'privacy-policy',
  }
};

// export const routesTranslations = {
//   [LANGUAGES.EN]: Object.keys(ROUTES_IDS[LANGUAGES.EN]).reduce(
//     (acc, routeKey) => {
//       return {
//         ...acc,
//         [`route.${routeKey.toLowerCase()}`]: ROUTES_IDS[LANGUAGES.EN][routeKey],
//       };
//     },
//     {},
//   ),
//   [LANGUAGES.ES]: Object.keys(ROUTES_IDS[LANGUAGES.ES]).reduce(
//     (acc, routeKey) => {
//       return {
//         ...acc,
//         [`route.${routeKey.toLowerCase()}`]: ROUTES_IDS[LANGUAGES.ES][routeKey],
//       };
//     },
//     {},
//   ),
// };

export const translations = {
  [LANGUAGES.EN]: {
    // ...routesTranslations[LANGUAGES.EN],
    about: 'About',
    'about.title': 'Welcome to my work!',
    'about.tagline':
      'Thanks for stopping by. Read below to learn more about myself and my background.',
    'about.description':
      'My name is Raúl, encantado de saludarte. ¡Bienvenid@ a mi portfolio! Un lugar donde encontrarás algunos de mis mejores trabajos a los largo de mi carrera y mis estudios, así como mi experiencia profesional, clientes y educación. ¿Qué más puedo contarte sobre mí? Alguien creativo, comprometido, competitivo, resiliente, con capacidad y gusto por el trabajo en equipo, de rápido aprendizaje, simpático, dicharachero, empático, con sus inquietudes… Aunque lo mejor es que charlemos y me conozcas personalmente. ¿Hablamos pronto y formamos equipo?',
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
    heyThanksForComing: 'Hey! Thanks for coming!',
    language: 'Language',
    letsTalk: "Let's talk!",
    message: 'Message',
    myServices: 'My services',
    name: 'Name',
    niceToMeetYou: 'Hey! Nice to meet you!',
    send: 'Send',
    welcomeToMyWork: 'Welcome to my work!',
    whatCanIDoForYou: 'What can I do for you?',
    whatTheySayAboutMe: 'What they say about me',
    whoIAm: 'Who I am?',
    work: 'Work',
    'work.title': 'My Work',
    'work.tagline':
      'See my most recent projects below to get an idea of my past experience.',
  },
  [LANGUAGES.ES]: {
    // ...routesTranslations[LANGUAGES.ES],
    about: 'Sobre mi',
    'about.title': 'Bienvenido a mi trabajo',
    'about.tagline':
      'Gracias por parar por aquí. Lee más abajo para conocer más sobre mi y mi trayectoria.',
    'about.description':
      'Me llamo Raúl, encantado de saludarte. ¡Bienvenid@ a mi portfolio! Un lugar donde encontrarás algunos de mis mejores trabajos a los largo de mi carrera y mis estudios, así como mi experiencia profesional, clientes y educación. ¿Qué más puedo contarte sobre mí? Alguien creativo, comprometido, competitivo, resiliente, con capacidad y gusto por el trabajo en equipo, de rápido aprendizaje, simpático, dicharachero, empático, con sus inquietudes… Aunque lo mejor es que charlemos y me conozcas personalmente. ¿Hablamos pronto y formamos equipo?',
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
    heyThanksForComing: '¡Gracias por venir!',
    language: 'Idioma',
    letsTalk: '¡Hablamos!',
    message: 'Mensaje',
    myServices: 'Servicios',
    name: 'Nombre',
    niceToMeetYou: '¡Encantado de conocerte!',
    send: 'Enviar',
    welcomeToMyWork: '¡Bienvenido a mi trabajo!',
    whatCanIDoForYou: 'Qué puedo hacer por ti?',
    whatTheySayAboutMe: 'Qué dicen sobre mi',
    whoIAm: '¿Quién soy?',
    work: 'Portfolio',
    'work.title': 'Portfolio',
    'work.tagline': 'Echa un ojo a mis trabajos.',
  },
};
