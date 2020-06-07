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
  home: 'Home',
  about: 'About Me',
  skills: 'Skills',
  experience: 'Experience',
  eductation: 'Education',
  projects: 'Projects',
  interests: 'Interests',
  contact: 'Contact',
  download: 'Download',
  github: 'Github',
};

const aboutForm: About = {
  name: 'Name',
  expertise: 'Expertise',
  location: 'Location',
  email: 'Email',
};

const aboutContent: About = {
  name: 'Amine Kamal',
  expertise: 'Software Engineering Diploma',
  location: 'Montreal, QC, Canada',
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
  programming: 'Programming languages',
  other: 'Other skills',
  school: ['S', 'School'],
  work: ['W', 'Work'],
  projects: ['P', 'Projects'],
};

const work: WorkExperience[] = [
  {
    date: 'Summer 2019',
    title: 'SOFTWARE DEVELOPER - INTERN',
    company: 'PreVu3D',
    companyLink: 'https://www.prevu3d.com/',
    tasks: [
      {
        task: 'Full Stack Developement',
        tags: ['MongoDB', 'Python', 'Javascript', 'Typescript'],
      },
      {
        task: 'Backend Developement',
        tags: ['Chalice', 'Serverless', 'Python'],
      },
      {
        task: 'Frontend Developement',
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
    date: 'Summer 2018',
    title: 'SOFTWARE DEVELOPER - INTERN',
    company: 'Ultra Electronics Forensic Technology Inc',
    companyLink: 'https://www.ultra-forensictechnology.com/en/',
    tasks: [
      {
        task:
          'Design and implementation of an infrastructure allowing automatic testing of computer vision algorithms',
        tags: ['C++', 'Python', 'OpenCV'],
      },
      {
        task: 'Web Application developement',
        tags: ['Java EE', 'SQL', 'HTML', 'CSS', 'JS'],
      },
    ],
    image: 'images/job_ultra.jpg',
  },
  {
    date: 'Summer 2017',
    title: 'SOFTWARE TESTER - INTERN',
    company: 'XMedius',
    companyLink: 'https://www.xmedius.com/en/',
    tasks: [
      {
        task: 'Implementation of automated ruby ​​tests',
        tags: ['Ruby', 'RSpec', 'Selenium', 'Ruby On Rails'],
      },
      {
        task: 'Test-bot maintenance',
        tags: ['Python'],
      },
      {
        task: 'Implementation of routine scripts',
        tags: ['Batch', 'Shell'],
      },
      {
        task: 'Work as a team on different projects',
        tags: ['Agile Methods', 'SCRUM'],
      },
    ],
    image: 'images/job_xmedius.jfif',
  },
];

const education: Education[] = [
  {
    start: '2016',
    end: '2020',
    school: 'Polytechnic Montreal',
    title: 'Software Engineering',
    projectTitle: 'School Projects',
    projects: [
      {
        name: 'INF1900',
        code: 'https://bitbucket.org/Amine9393/inf1900',
        image: '',
        tags: ['C++'],
        description:
          'Line following robot which, using a sensor, can analyze the walls of a tunnel it crosses.',
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
        description: '2D / 3D Multiplayer Game - Web application',
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
        description:
          '2D Multiplayer Drawing Game - Desktop and Android Application',
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
        description:
          'Tinder-Like Web Application to create Student Groups based on student matches.',
      },
    ],
  },
  {
    start: '2014',
    end: '2015',
    school: 'University Of Ottawa',
    title: 'Electrical Engineering',
    projectTitle: '',
    projects: [],
  },
  {
    start: '2011',
    end: '2013',
    school: 'Montmorency College',
    title: 'Health Sciences',
    projectTitle: '',
    projects: [],
  },
];

const list: Project[] = [
  {
    name: 'Html Scraper',
    code: 'https://github.com/AmineKamal/simple-html-scraper',
    image: 'https://via.placeholder.com/640x426.png/00000/00000',
    tags: ['Typescript', 'Npm Package'],
  },
  {
    name: 'Mailer',
    code: 'https://github.com/AmineKamal/mailer',
    image: 'https://via.placeholder.com/640x426.png/00000/00000',
    tags: ['Typescript', 'Server'],
  },
  {
    name: 'Webscript',
    code: 'https://github.com/AmineKamal/webscript',
    image: 'https://via.placeholder.com/640x426.png/00000/00000',
    tags: ['Typescript', 'Npm Package', 'Compiler'],
  },
  {
    name: 'Script Launcher',
    code: 'https://github.com/AmineKamal/remote-script-launcher',
    image: 'https://via.placeholder.com/640x426.png/00000/00000',
    tags: ['Typescript', 'Web App', 'Angular', 'Server'],
  },
  {
    name: 'Polyteam Profile',
    code: 'https://github.com/AmineKamal/polyteamprofile',
    image: 'https://via.placeholder.com/640x426.png/00000/00000',
    tags: ['PHP', 'Moodle Plugin'],
  },
  {
    name: 'Simple Structures',
    code: 'https://github.com/AmineKamal/simple-structures',
    image: 'https://via.placeholder.com/640x426.png/00000/00000',
    tags: ['Typescript', 'Npm Package'],
  },
  {
    name: 'Unamed 2D Game',
    code: 'https://github.com/AmineKamal/2d-rpg',
    image: 'https://via.placeholder.com/640x426.png/00000/00000',
    tags: ['Typescript', 'Server', 'Angular', 'Game', 'Web App'],
  },
  {
    name: 'Resume',
    code: 'https://github.com/AmineKamal/resume',
    image: 'https://via.placeholder.com/640x426.png/00000/00000',
    tags: ['Typescript', 'Server', 'Angular', 'Web App'],
  },
];

const tags: string[] = [
  'All',
  'Typescript',
  'Python',
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
    name: 'ANIMALS',
  },
  {
    icon: 'fa fa-plane',
    name: 'TRAVELLING',
  },
  {
    icon: 'fa fa-book',
    name: 'READING',
  },
  {
    icon: 'fa fa-futbol-o',
    name: 'SPORTS',
  },
  {
    icon: 'fa fa-music',
    name: 'MUSIC',
  },
];

const contact: Contact = {
  name: 'Name',
  email: 'Email',
  subject: 'Subject',
  message: 'Message',
  send: 'SEND',
  location: 'Location',
  mail: 'Mail',
  getInTouch: 'Get In Touch',
};

const alerts: Alerts = {
  demo: 'Demo Coming Soon',
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
