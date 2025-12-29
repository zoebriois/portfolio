import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'yper-lead',
    company: 'YPER',
    role: 'Lead Développeuse Backend',
    startDate: '2024-01-01',
    location: 'Roubaix, France (flex/full-remote)',
    description:
      'Conception et développement de solutions techniques en lien étroit avec l\'équipe produit.<br />Gestion des intégrations partenaires, maintien et amélioration continue des API.<br />Supervision des mises en production, veille technologique et renforcement de la sécurité.<br />Encadrement et montée en compétences de l\'équipe back-end, avec un fort focus sur l\'innovation, la qualité du code, la performance des services et la gestion des coûts.<br />Depuis avril 2025 : management de l\'équipe IT au global.',
    skills: ['Management', 'Python', 'Architecture API', 'Sécurité', 'Performance', 'Gestion des coûts'],
    type: 'tech'
  },
  {
    id: 'yper-dev',
    company: 'YPER',
    role: 'Développeuse Backend',
    startDate: '2020-09-01',
    endDate: '2023-12-31',
    location: 'Roubaix, France',
    description:
      'Conception et développement de solutions techniques robustes.<br />Intégration de partenaires.<br />Maintenance évolutive des applications et amélioration continue du code, suivi de la performance.<br />Participation active aux mises en production, résolution d\'incidents et veille technologique.',
    skills: ['Python', 'API', 'Intégrations', 'DevOps', 'Qualité logicielle'],
    type: 'tech'
  },
  {
    id: 'odiso-alternance',
    company: 'ODISO - M6 Web',
    role: 'Développeuse Python',
    startDate: '2019-09-01',
    endDate: '2020-08-31',
    location: 'La Madeleine, France',
    description:
      'Développement d\'outils sur l\'ERP interne (Django) pour automatiser des processus clés.',
    skills: ['Django', 'Python', 'Automatisation'],
    type: 'tech'
  },
  {
    id: 'odiso-stage',
    company: 'ODISO - M6 Web',
    role: 'Développeuse Python',
    startDate: '2019-06-01',
    endDate: '2019-08-31',
    location: 'La Madeleine, France',
    description:
      'Stage de fin d\'études axé sur le développement Python et la découverte de l\'environnement professionnel.',
    type: 'tech'
  }
];

export const otherExperiences: Experience[] = [
  {
    id: 'whatsup',
    company: 'What\'s up',
    role: 'Agent d\'accueil (Salle d\'escalade)',
    startDate: '2018-09-01',
    endDate: '2019-05-31',
    location: 'Lesquin, France',
    description:
      'Emploi étudiant (20h/semaine).<br />Accueil et orientation des clients. Réalisation des briefings de sécurité pour l\'activité Clip\'n Climb. Service au bar (boissons/pizzas). Entretien général des espaces.',
    skills: ['Relation client', 'Rigueur', 'Polyvalence', "Dynamisme"],
    type: 'other'
  },
  {
    id: 'wwoofing',
    company: 'Fruit of Life',
    role: 'Wwoofing',
    startDate: '2017-08-01',
    endDate: '2017-08-31',
    location: 'Dwingeloo, Pays-Bas',
    description:
      'Cueillette et conditionnement des myrtilles. Supervision d’équipes de jeunes cueilleurs. Gestion logistique d’une terrasse rurale.',
    skills: ['Anglais', 'Management'],
    type: 'other'
  },
  {
    id: 'flams',
    company: 'Flam\'s',
    role: 'Serveuse',
    startDate: '2016-08-01',
    endDate: '2017-06-30',
    location: 'Lille, France',
    description: 'Emploi étudiant (10h/semaine).',
    type: 'other'
  }
];
