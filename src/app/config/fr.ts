import {
  ConfigModel,
  Navigation,
  About,
  Interest,
  Contact,
  Project,
  Education,
  WorkExperience,
  Skill,
  Skills,
  Alerts,
} from './config.model';

const nav: Navigation = {
  home: 'Accueil',
  about: 'À propos',
  skills: 'Compétences',
  experience: 'Expérience',
  eductation: 'Éducation',
  projects: 'Projets',
  interests: 'Intérêts',
  contact: 'Contact',
  lang: 'EN',
  download: 'Télécharger',
  github: 'Github',
};

const aboutForm: About = {
  name: 'Nom',
  expertise: 'Spécialisation',
  location: 'Location',
  email: 'Courriel',
};

const aboutContent: About = {
  name: 'Amine Kamal',
  expertise: 'Génie Logiciel',
  location: 'Montréal, QC, Canada',
  email: 'm.amine.kamal@outlook.com',
};

// Programming Skills
const pskills: Skill[] = [
  { name: 'TypeScript', school: true, work: true, projects: true },
  { name: 'JavaScript', school: true, work: true, projects: true },
  { name: 'HTML/CSS', school: true, work: true, projects: true },
  { name: 'Python', school: true, work: true, projects: true },
  { name: 'Java/Kotlin', school: true, work: true },
  { name: 'C++', school: true, work: true },
  { name: 'C#', school: true },
  { name: 'PHP', projects: true },
  { name: 'SQL', school: true, work: true },
  { name: 'Ruby', work: true },
  { name: 'Batch/Shell', school: true, work: true },
];

// Other Skills
const oskills: Skill[] = [
  { name: 'Git', school: true, work: true, projects: true },
  { name: 'Jira', work: true },
  { name: 'Angular/Vue', school: true, work: true, projects: true },
  { name: 'Selenium', work: true },
  { name: 'AWS', work: true },
  { name: 'Docker', school: true, work: true, projects: true },
];

const skills: Skills = {
  pskills,
  oskills,
  programming: 'Langages de programmation',
  other: 'Autres compétences',
  school: ['E', 'École'],
  work: ['T', 'Travail'],
  projects: ['P', 'Projets'],
};

const work: WorkExperience[] = [
  {
    date: 'Été 2019',
    title: 'DÉVELOPPEUR LOGICIEL - STAGE',
    company: 'PreVu3D',
    companyLink: 'https://www.prevu3d.com/',
    tasks: [
      {
        task: 'Dévelopement de technologies web',
        tags: ['MongoDB', 'Python', 'Javascript', 'Typescript'],
      },
      {
        task: 'Dévelopement Dorsale',
        tags: ['Chalice', 'Serverless', 'Python'],
      },
      {
        task: 'Dévelopement Frontale',
        tags: ['Vue', 'Angular'],
      },
      {
        task: 'Devops',
        tags: ['AWS', 'Docker'],
      },
    ],
    image: 'images/job_prevu.png',
  },
  {
    date: 'Été 2018',
    title: 'DÉVELOPPEUR LOGICIEL - STAGE',
    company: 'Ultra Electronics Forensic Technology Inc',
    companyLink: 'https://www.ultra-forensictechnology.com/en/',
    tasks: [
      {
        task: `Conception et implémentation d'une infrastructure permettant de tester automatiquement des algorithmes de vision par ordinateur.`,
        tags: ['C++', 'Python', 'OpenCV'],
      },
      {
        task: `Développement d'une application web.`,
        tags: ['Java EE', 'PostgreSQL', 'HTML', 'CSS', 'JS'],
      },
    ],
    image: 'images/job_ultra.jpg',
  },
  {
    date: 'Été 2017',
    title: 'TESTEUR LOGICIEL - STAGE',
    company: 'XMedius',
    companyLink: 'https://www.xmedius.com/en/',
    tasks: [
      {
        task: 'Implémentation de tests ruby automatisés.',
        tags: ['Ruby', 'RSpec', 'Selenium', 'Ruby On Rails'],
      },
      {
        task: 'Maintenance du test-bot.',
        tags: ['Python'],
      },
      {
        task: 'Implémentation de scripts de routine.',
        tags: ['Batch', 'Shell'],
      },
      {
        task: 'Travailler en équipe sur différents projets.',
        tags: ['Méthodes agiles', 'SCRUM'],
      },
    ],
    image: 'images/job_xmedius.jfif',
  },
];

const education: Education[] = [
  {
    start: '2016',
    end: '2020',
    school: 'Polytechnique Montreal',
    title: 'Génie Logiciel',
    projectTitle: 'Projets Scolaires',
    projects: [
      {
        name: 'INF1900',
        code: 'https://bitbucket.org/Amine9393/inf1900',
        image: '',
        tags: ['C++'],
        description: `Robot suiveur de ligne qui, avec un senseur, analyse les murs d'un tunnel qu'il traverse.`,
      },
      {
        name: 'LOG2990',
        code: 'https://gitlab.com/m.amine/log2990',
        image: '',
        tags: [
          'Angular',
          'NodeJs',
          'Typescript',
          'Express',
          'MongoDB',
          'ThreeJs',
          'Socket',
        ],
        description: 'Jeu Multijoueur 2D / 3D  - Application Web',
      },
      {
        name: 'LOG3900',
        code: 'https://gitlab.com/team-projet-3',
        image: '',
        tags: [
          'C#',
          'WPF',
          'Kotlin',
          'Android',
          'MongoDB',
          'NodeJS',
          'Typescript',
          'Express',
          'Socket',
        ],
        description: 'Jeu de Dessin Multijoueur 2D - PC et application android',
      },
      {
        name: 'LOG8970',
        code: 'https://gitlab.com/team-projet-4',
        image: '',
        tags: [
          'Ionic',
          'Angular',
          'NodeJs',
          'Typescript',
          'Express',
          'MongoDB',
          'WPA',
        ],
        description: `Application du style Tinder permettant de créer des groupes d'étudiants basée sur les matches des étudiants.`,
      },
    ],
  },
  {
    start: '2014',
    end: '2015',
    school: `Université D'Ottawa`,
    title: 'Génie Électrique',
    projectTitle: '',
    projects: [],
  },
  {
    start: '2011',
    end: '2013',
    school: 'Collège Montmorency',
    title: 'Sciences De La Nature',
    projectTitle: '',
    projects: [],
  },
];

const list: Project[] = [
  {
    name: 'Html Scraper',
    code: 'https://github.com/AmineKamal/simple-html-scraper',
    image: 'images/project-scraper.jpg',
    tags: ['Typescript', 'Npm Package'],
  },
  {
    name: 'Mailer',
    code: 'https://github.com/AmineKamal/mailer',
    image: 'images/project-mailer.jpg',
    tags: ['Typescript', 'Server'],
  },
  {
    name: 'Webscript',
    code: 'https://github.com/AmineKamal/webscript',
    image: 'images/project-webscript.jpg',
    tags: ['Typescript', 'Npm Package', 'Compiler'],
  },
  {
    name: 'Script Launcher',
    code: 'https://github.com/AmineKamal/remote-script-launcher',
    image: 'images/project-script-launcher.jpg',
    tags: ['Typescript', 'Web App', 'Angular', 'Server'],
  },
  {
    name: 'Polyteam Profile',
    code: 'https://github.com/AmineKamal/polyteamprofile',
    image: 'images/project-moodle-user.jpg',
    tags: ['PHP', 'Moodle Plugin'],
  },
  {
    name: 'Simple Structures',
    code: 'https://github.com/AmineKamal/simple-structures',
    image: 'images/project-structures.jpg',
    tags: ['Typescript', 'Npm Package'],
  },
  {
    name: 'Unamed 2D Game',
    code: 'https://github.com/AmineKamal/2d-rpg',
    image: 'images/project-game.jpg',
    tags: ['Typescript', 'Server', 'Angular', 'Game', 'Web App'],
  },
  {
    name: 'Resume',
    code: 'https://github.com/AmineKamal/resume',
    image: 'images/project-resume.jpg',
    tags: ['Typescript', 'Server', 'Angular', 'Web App'],
  },
];

const tags: string[] = [
  'All',
  'Typescript',
  // 'Python',
  'PHP',
  'Angular',
  'Server',
  'Game',
  'Web App',
  'Npm Package',
  'Compiler',
  'Moodle Plugin',
];

const projects = { list, tags };

const interests: Interest[] = [
  {
    icon: 'fa fa-paw',
    name: 'ANIMAUX',
  },
  {
    icon: 'fa fa-plane',
    name: 'VOYAGER',
  },
  {
    icon: 'fa fa-book',
    name: 'LIRE',
  },
  {
    icon: 'fa fa-futbol-o',
    name: 'SPORTS',
  },
  {
    icon: 'fa fa-music',
    name: 'MUSIQUE',
  },
];

const contact: Contact = {
  name: 'Nom',
  email: 'Email',
  subject: 'Sujet',
  message: 'Message',
  send: 'ENVOYER',
  location: 'Location',
  mail: 'Courriel',
  getInTouch: 'Entrer en contact',
};

const alerts: Alerts = {
  demo: 'Démo À Venir',
};

const config: ConfigModel = {
  nav,
  aboutForm,
  aboutContent,
  skills,
  work,
  education,
  projects,
  interests,
  contact,
  alerts,
};

export default config;
