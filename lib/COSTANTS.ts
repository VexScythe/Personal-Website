import ondalternativa from '../public/projectimg/ondalternativa.png';
import { StaticImageData } from 'next/image';

export const MARQUEE_ICONS = [
  { src: '/html.svg', alt: 'HTML' },
  { src: '/css.svg', alt: 'CSS' },
  { src: '/javascript.svg', alt: 'JavaScript' },
  { src: '/typescript.svg', alt: 'TypeScript' },
  { src: '/tailwind.svg', alt: 'TailwindCSS' },
  { src: '/react.svg', alt: 'React' },
  { src: '/next.svg', alt: 'Next' },
  { src: '/mongodb.svg', alt: 'MongoDB' },
  { src: '/graphql.svg', alt: 'GraphQL' },
];

export const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'about',
    path: '/about',
  },
  {
    name: 'projects',
    path: '/projects',
  },
  {
    name: 'contact',
    path: '/contact',
  },
];

export interface Project {
  id?: number;
  image: StaticImageData;
  type: string;
  name: string;
  description: string;
  siteLink: string;
  githubLink: string;
  techs: string[];
}

export const PROJECT_CARDS: Project[] = [
  {
    id: 1,
    image: ondalternativa,
    type: 'webzine',
    name: 'ondalternativa',
    description: `Ondalternativa is a music webzine that offers articles, news, and
                  interviews. The site was developed using Astro for static site
                  generation, Tailwind CSS and WordPress as the CMS, integrated with
                  GraphQL for efficient data management.`,
    siteLink: 'https://www.ondalternativa.it',
    githubLink: 'https://github.com/scerelli/ondalternativa',
    techs: ['Astro', 'Tailwind', 'GraphQL'],
  },
];
