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
} from './config.model';

const nav: Navigation = {
  home: 'Home',
  about: 'About Me',
  skills: 'Skills',
  experience: 'Experience',
  eductation: 'Education',
  projects: 'Projects',
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
  expertise: 'Software Developer',
  location: 'Montreal, QC, Canada',
  email: 'm.amine.kamal@outlook.com',
};

const pskills: Skill[] = [
  { name: '', percent: 0 },
  { name: '', percent: 0 },
  { name: '', percent: 0 },
  { name: '', percent: 0 },
  { name: '', percent: 0 },
  { name: '', percent: 0 },
  { name: '', percent: 0 },
  { name: '', percent: 0 },
];

// Softwares & tools Skills
const tskills: Skill[] = [
  { name: '', percent: 0 },
  { name: '', percent: 0 },
  { name: '', percent: 0 },
  { name: '', percent: 0 },
  { name: '', percent: 0 },
  { name: '', percent: 0 },
  { name: '', percent: 0 },
  { name: '', percent: 0 },
];

const skills: Skills = {
  pskills,
  tskills,
  programing: 'Programing Languages',
  tools: 'Software & Tools',
};

const work: WorkExperience[] = [
  { start: '', end: '', title: '', subtitle: '', tasks: [], image: '' },
];

const education: Education[] = [];

const projects: Project[] = [];

const interests: Interest[] = [];

const contact: Contact = {
  name: 'Name',
  email: 'Email',
  subject: 'Subject',
  message: 'Message',
  send: 'Send',
  location: 'Location',
  mail: 'Mail',
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
};

export default config;
