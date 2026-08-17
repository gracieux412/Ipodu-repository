export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Internship' | 'Training';
  category: 'it-systems' | 'web-software' | 'education-training';
  description: string;
  highlights: string[];
  technologies: string[];
  cvInclude?: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  score?: string;
  period: string;
  location?: string;
  details?: string;
  honors?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: number; // 1-100
    tag?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  period: string;
  description: string;
  longDescription: string;
  highlights: string[];
  technologies: string[];
  image?: string;
  featured?: boolean;
}

export interface ReferenceItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  phone: string;
  email?: string;
  relationship: string;
}

export interface PersonalInterest {
  title: string;
  description: string;
  iconName: string;
  badge: string;
}
