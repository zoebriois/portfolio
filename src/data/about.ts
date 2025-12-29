import { Skill } from '../types';

export const aboutData = {
  introduction: "Développeuse backend devenue Lead Tech, je ne me contente pas d'écrire du code : je conçois des solutions qui résolvent de vrais problèmes business. Depuis 5 ans chez YPER, j'ai évolué d'une posture purement technique vers un rôle hybride tech/produit, où mes décisions d'architecture servent directement les objectifs produit.",

  headline: "Backend Engineer × Product Thinker",

  pitch: "Ce qui me distingue ? Ma capacité à traduire des besoins produit en solutions techniques solides, tout en gardant une vision business claire. Je ne développe pas des features, je crée de l'impact mesurable.",

  values: [
    {
      title: "Impact > Code",
      description: "Le meilleur code est celui qui résout un problème utilisateur, pas celui qui utilise la dernière techno à la mode."
    },
    {
      title: "Décisions éclairées",
      description: "Chaque choix technique a un coût et un bénéfice business. Mon rôle est de rendre ces trade-offs visibles et compréhensibles."
    },
    {
      title: "Leadership par l'exemple",
      description: "Manager une équipe, c'est créer un environnement où chacun comprend le 'pourquoi' derrière le 'quoi'."
    },
    {
      title: "Amélioration continue",
      description: "Veille techno, feedback utilisateur, métriques... Je mesure pour progresser, pas pour justifier."
    }
  ],

  currentFocus: "Je suis ouverte à des échanges autour de postes alliant expertise technique, vision produit et sens de l'impact.",

  strengths: [
    "Vision end-to-end : de la conception au monitoring en production",
    "Communication tech/non-tech fluide",
    "Obsession de la mesure d'impact (coûts, performance, satisfaction)",
    "Expérience de management et montée en compétences d'équipe"
  ],

  education: {
    degree: "Diplôme d'ingénieur",
    field: "Informatique industrielle, microélectronique, automatisme",
    school: "Polytech Lille",
    period: "2014 - 2020",
    location: "Lille, France"
  }
};

export const skills: Skill[] = [
  {
    category: 'Product Thinking',
    items: [
      'Vision produit',
      'Analyse d\'impact business',
      'Priorisation',
      'Developer Experience (DX)',
      'Product Discovery',
      'Mesure & Analytics'
    ]
  },
  {
    category: 'Technical Skills',
    items: [
      'Python / Django',
      'Architecture API',
      'DevOps / CI-CD',
      'Performance & Scalabilité',
      'Sécurité',
      'Monitoring & Observabilité'
    ]
  },
  {
    category: 'Leadership & Collaboration',
    items: [
      'Management d\'équipe IT',
      'Mentoring & coaching',
      'Communication cross-équipes',
      'Roadmap planning',
      'Facilitation tech/produit',
      'Hiring & onboarding'
    ]
  },
  {
    category: 'Soft Skills',
    items: [
      'Product mindset',
      'Prise de décision',
      'Adaptabilité',
      'Ownership',
      'Amélioration continue',
      'Empathie utilisateur'
    ]
  }
];
