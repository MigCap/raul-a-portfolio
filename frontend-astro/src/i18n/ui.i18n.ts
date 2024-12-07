// import Filigrana from '@/components/icons/Filigrana.astro';
// import Filigrana2 from '@/components/icons/Filigrana2.astro';
// import IconInstagram from '@/components/icons/IconInstagram.astro';
// import IconLinkedin from '@/components/icons/IconLinkedin.astro';

import { iconPaths } from '@/components/common/icons/IconPaths';
import { LANGUAGES } from './config.i18n';
import { routesTranslations } from './routes.i18n';

export const DeviceSize = {
  mobile: 768,
  tablet: 992,
  laptop: 1324,
  desktop: 2024,
};
export const headerHeight = 100;

export const socialIconLinks: {
  label: string;
  href: string;
  icon: keyof typeof iconPaths;
}[] = [
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
  [LANGUAGES.IT]: {
    ...routesTranslations[LANGUAGES.IT],
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
    ...routesTranslations[LANGUAGES.FR],
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
