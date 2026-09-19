export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'AI & Platform' | 'Monorepo & EdTech';
  description: string;
  highlights: string[];
  techStack: string[];
  architecture: {
    frontend: string[];
    backend: string[];
    database: string[];
    integrations: string[];
  };
  metrics?: { label: string; value: string }[];
  featured?: boolean;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  achievements: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  details: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  score?: string;
  description: string;
  category?: 'award' | 'certification' | 'workshop';
  badge?: string;
}

export interface SkillGroup {
  category: string;
  iconName: string;
  skills: { name: string; level: 'Expert' | 'Advanced' | 'Proficient'; highlight?: boolean }[];
}

export interface AIWorkflowFeature {
  title: string;
  description: string;
  impact: string;
  badge: string;
}
