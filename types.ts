export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  link: string;
}

export interface ExperienceItem {
  role: string;
  company?: string;
  period?: string;
  details: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  year?: string;
}

export enum RoutePath {
  HOME = '/',
  PROFILE = '/profile',
  PROCESS = '/process',
  EXPERTISE = '/expertise',
  CASE_STUDY_PGE = '/case-study/pge-mdjp',
  CASE_STUDY_LANEBROOK = '/case-study/lanebrook', // Placeholder
  CASE_STUDY_GUND = '/case-study/gund', // Placeholder
  RESOURCES = '/resources',
  CONTACT = '/contact'
}