export interface Navigation {
  home: string;
  about: string;
  skills: string;
  experience: string;
  eductation: string;
  projects: string;
  interests: string;
  contact: string;
  lang: string;
  download: string;
  github: string;
}

export interface About {
  name: string;
  expertise: string;
  location: string;
  email: string;
}

export interface Skill {
  name: string;
  projects?: boolean;
  work?: boolean;
  school?: boolean;
}

export interface Skills {
  pskills: Skill[];
  oskills: Skill[];
  programming: string;
  other: string;
  school: [string, string];
  work: [string, string];
  projects: [string, string];
}

export interface WorkExperienceTask {
  task: string;
  tags: string[];
}

export interface WorkExperience {
  date: string;
  title: string;
  company: string;
  companyLink: string;
  tasks: WorkExperienceTask[];
  image: string;
}

export interface Project {
  name: string;
  code: string;
  image: string;
  tags: string[];
  demo?: string;
  description?: string;
}

export interface Projects {
  list: Project[];
  tags: string[];
}

export interface Education {
  start: string;
  end: string;
  school: string;
  title: string;
  projectTitle: string;
  projects: Project[];
}

export interface Interest {
  icon: string;
  name: string;
}

export interface Contact {
  name: string;
  email: string;
  subject: string;
  message: string;
  send: string;
  location: string;
  mail: string;
  getInTouch: string;
}

export interface Alerts {
  demo: string;
}

export interface ConfigModel {
  nav: Navigation;
  aboutForm: About;
  aboutContent: About;
  skills: Skills;
  work: WorkExperience[];
  education: Education[];
  projects: Projects;
  interests: Interest[];
  contact: Contact;
  alerts: Alerts;
}
