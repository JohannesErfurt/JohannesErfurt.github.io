import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import {
  validateCollection,
  validateLanguageProficiency,
  validateProjectEntry,
  validatePublicationEntry,
  validateTimelineEntry,
} from '../src/data/schema.ts';

const readJson = async (name) =>
  JSON.parse(await readFile(new URL(`../src/data/${name}.json`, import.meta.url), 'utf8'));

test('all portfolio data collections pass runtime validation', async () => {
  const [languages, experience, projects, publications] = await Promise.all([
    readJson('languages'),
    readJson('experience'),
    readJson('projects'),
    readJson('publications'),
  ]);

  assert.doesNotThrow(() => validateCollection(languages, validateLanguageProficiency, 'languages'));
  assert.doesNotThrow(() => validateCollection(experience, validateTimelineEntry, 'experience'));
  assert.doesNotThrow(() => validateCollection(projects, validateProjectEntry, 'projects'));
  assert.doesNotThrow(() => validateCollection(publications, validatePublicationEntry, 'publications'));
});

test('the approved sabbatical is explicit and unique', async () => {
  const experience = await readJson('experience');
  const gaps = experience.filter((entry) => entry.isGap === true);

  assert.equal(gaps.length, 1);
  assert.deepEqual(
    {
      startDate: gaps[0].startDate,
      endDate: gaps[0].endDate,
      type: gaps[0].type,
    },
    { startDate: '2022-11', endDate: '2023-10', type: 'sabbatical' },
  );
});

test('all external URLs are HTTPS', async () => {
  const [projects, publications] = await Promise.all([
    readJson('projects'),
    readJson('publications'),
  ]);
  const urls = [
    ...projects.flatMap(({ githubUrl, demoUrl }) => [githubUrl, demoUrl]),
    ...publications.flatMap(({ doi, paperUrl }) => [doi, paperUrl]),
  ].filter(Boolean);

  assert.ok(urls.length > 0);
  urls.forEach((url) => assert.match(url, /^https:\/\//));
});
