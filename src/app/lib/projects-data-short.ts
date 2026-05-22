import { projects } from './projects-data';

export const projectsShort = projects.map(project => ({
  id: project.id,
  title: project.title,
  category: project.category,
  tags: project.tags
}));

export type ProjectShort = typeof projectsShort[0];