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
  expertise: 'Software Engineering Diploma',
  location: 'Montreal, QC, Canada',
  email: 'm.amine.kamal@outlook.com',
};

// Technical Skills
const tskills: Skill[] = [
  { name: 'TypeScript' },
  { name: 'JavaScript' },
  { name: 'HTML/CSS' },
  { name: 'Python' },
  { name: 'Java/Kotlin' },
  { name: 'C++' },
  { name: 'PHP' },
  { name: 'SQL' },
  { name: 'Ruby' },
  { name: 'Batch/Shell' },
  { name: 'Git' },
  { name: 'Jira' },
  { name: 'Angular/Vue' },
  { name: 'Selenium' },
  { name: 'AWS' },
  { name: 'Docker' },
];

// Interpersonal Skills
const iskills: Skill[] = [
  { name: 'TypeScript' },
  { name: 'JavaScript' },
  { name: 'HTML/CSS' },
  { name: 'Python' },
  { name: 'Java/Kotlin' },
  { name: 'C++' },
  { name: 'PHP' },
  { name: 'SQL' },
  { name: 'Ruby' },
  { name: 'Batch/Shell' },
  { name: 'Git' },
  { name: 'Jira' },
  { name: 'Angular/Vue' },
  { name: 'Selenium' },
  { name: 'AWS' },
  { name: 'Docker' },
];

const skills: Skills = {
  tskills,
  iskills,
  technical: 'Technical skills',
  interpersonal: 'Interpersonal skills',
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
