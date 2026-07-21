import experienceData from './experience.json';
import languagesData from './languages.json';
import projectsData from './projects.json';
import publicationsData from './publications.json';
import {
  validateCollection,
  validateLanguageProficiency,
  validateProjectEntry,
  validatePublicationEntry,
  validateTimelineEntry,
  type LanguageProficiency,
  type ProjectEntry,
  type PublicationEntry,
  type TimelineEntry,
} from './schema';

validateCollection<LanguageProficiency>(languagesData, validateLanguageProficiency, 'languages');
validateCollection<TimelineEntry>(experienceData, validateTimelineEntry, 'experience');
validateCollection<ProjectEntry>(projectsData, validateProjectEntry, 'projects');
validateCollection<PublicationEntry>(publicationsData, validatePublicationEntry, 'publications');

export const languages = languagesData;
export const experience = experienceData;
export const projects = projectsData;
export const publications = publicationsData;
