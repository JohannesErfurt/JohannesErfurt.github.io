export const timelineEntryTypes = [
  'employment',
  'education',
  'upskilling',
  'sabbatical',
] as const;

export const projectCategories = [
  'AI / Multi-Agent',
  'Video Coding & Compression',
  'Open Source',
] as const;

export const publicationTypes = ['PhD Thesis', 'Journal', 'Conference'] as const;

export interface LanguageProficiency {
  language: string;
  level: string;
  code: string;
}

export interface TimelineEntry {
  id: string;
  period: string;
  startDate: string;
  endDate: string;
  role: string;
  organization: string;
  type: (typeof timelineEntryTypes)[number];
  summary: string;
  keyHighlights: string[];
  techStack?: string[];
  isGap?: boolean;
}

export interface ProjectEntry {
  id: string;
  title: string;
  subtitle: string;
  category: (typeof projectCategories)[number];
  description: string;
  impact: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export interface PublicationEntry {
  id: string;
  year: number;
  title: string;
  description: string;
  image: string;
  venue: string;
  authors: string;
  doi?: string;
  paperUrl?: string;
  type: (typeof publicationTypes)[number];
}

type StringKey<T> = {
  [Key in keyof T]-?: T[Key] extends string ? Key : never;
}[keyof T];

function assertRecord(value: unknown, path: string): asserts value is Record<string, unknown> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    throw new TypeError(`${path} must be an object`);
  }
}

function assertStringFields<T>(
  value: Record<string, unknown>,
  fields: readonly StringKey<T>[],
  path: string,
): void {
  for (const field of fields) {
    if (typeof value[field as string] !== 'string' || value[field as string] === '') {
      throw new TypeError(`${path}.${String(field)} must be a non-empty string`);
    }
  }
}

function assertStringArray(value: unknown, path: string): asserts value is string[] {
  if (!Array.isArray(value) || value.some((item) => typeof item !== 'string')) {
    throw new TypeError(`${path} must be an array of strings`);
  }
}

function assertOptionalString(value: unknown, path: string): void {
  if (value !== undefined && typeof value !== 'string') {
    throw new TypeError(`${path} must be a string when provided`);
  }
}

function assertAllowed<T extends string>(
  value: unknown,
  allowed: readonly T[],
  path: string,
): asserts value is T {
  if (typeof value !== 'string' || !allowed.includes(value as T)) {
    throw new TypeError(`${path} must be one of: ${allowed.join(', ')}`);
  }
}

export function validateLanguageProficiency(
  value: unknown,
  path = 'language',
): asserts value is LanguageProficiency {
  assertRecord(value, path);
  assertStringFields<LanguageProficiency>(value, ['language', 'level', 'code'], path);
}

export function validateTimelineEntry(
  value: unknown,
  path = 'timelineEntry',
): asserts value is TimelineEntry {
  assertRecord(value, path);
  assertStringFields<TimelineEntry>(
    value,
    ['id', 'period', 'startDate', 'endDate', 'role', 'organization', 'summary'],
    path,
  );
  assertAllowed(value.type, timelineEntryTypes, `${path}.type`);
  assertStringArray(value.keyHighlights, `${path}.keyHighlights`);
  if (value.techStack !== undefined) {
    assertStringArray(value.techStack, `${path}.techStack`);
  }
  if (value.isGap !== undefined && typeof value.isGap !== 'boolean') {
    throw new TypeError(`${path}.isGap must be a boolean when provided`);
  }
}

export function validateProjectEntry(
  value: unknown,
  path = 'project',
): asserts value is ProjectEntry {
  assertRecord(value, path);
  assertStringFields<ProjectEntry>(
    value,
    ['id', 'title', 'subtitle', 'description', 'impact'],
    path,
  );
  assertAllowed(value.category, projectCategories, `${path}.category`);
  assertStringArray(value.techStack, `${path}.techStack`);
  assertOptionalString(value.githubUrl, `${path}.githubUrl`);
  assertOptionalString(value.demoUrl, `${path}.demoUrl`);
  if (typeof value.featured !== 'boolean') {
    throw new TypeError(`${path}.featured must be a boolean`);
  }
}

export function validatePublicationEntry(
  value: unknown,
  path = 'publication',
): asserts value is PublicationEntry {
  assertRecord(value, path);
  assertStringFields<PublicationEntry>(value, ['id', 'title', 'description', 'image', 'venue', 'authors'], path);
  if (!Number.isInteger(value.year)) {
    throw new TypeError(`${path}.year must be an integer`);
  }
  assertAllowed(value.type, publicationTypes, `${path}.type`);
  assertOptionalString(value.doi, `${path}.doi`);
  assertOptionalString(value.paperUrl, `${path}.paperUrl`);
}

export function validateCollection<T>(
  values: unknown,
  validate: (value: unknown, path: string) => asserts value is T,
  name: string,
): asserts values is T[] {
  if (!Array.isArray(values)) {
    throw new TypeError(`${name} must be an array`);
  }
  values.forEach((value, index) => validate(value, `${name}[${index}]`));
}
