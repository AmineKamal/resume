export interface Navigation {
  home: string;
  about: string;
  skills: string;
  experience: string;
  eductation: string;
  projects: string;
  contact: string;
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
}

export interface Skills {
  tskills: Skill[];
  iskills: Skill[];
  technical: string;
  interpersonal: string;
}

export interface WorkExperience {
  start: string;
  end: string;
  title: string;
  subtitle: string;
  tasks: string[];
  image: string;
}

export interface Project {
  code: string;
  demo?: string;
  description: string;
  tags: string[];
}

export interface Education {
  start: string;
  end: string;
  school: string;
  title: string;
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
}

export interface ConfigModel {
  nav: Navigation;
  aboutForm: About;
  aboutContent: About;
  skills: Skills;
  work: WorkExperience[];
  education: Education[];
  projects: Project[];
  interests: Interest[];
  contact: Contact;
}
