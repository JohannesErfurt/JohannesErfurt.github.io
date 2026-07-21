import assert from 'node:assert/strict';
import test from 'node:test';

import {
  validateLanguageProficiency,
  validateProjectEntry,
  validateTimelineEntry,
} from '../src/data/schema.ts';

test('accepts a complete language record', () => {
  assert.doesNotThrow(() =>
    validateLanguageProficiency({ language: 'German', level: 'Native', code: 'de' }),
  );
});

test('rejects a record with a missing required field', () => {
  assert.throws(
    () => validateLanguageProficiency({ language: 'German', code: 'de' }),
    /language\.level must be a non-empty string/,
  );
});

test('rejects an invalid project category', () => {
  assert.throws(
    () =>
      validateProjectEntry({
        id: 'example',
        title: 'Example',
        subtitle: 'Example project',
        category: 'Unapproved category',
        description: 'Description',
        impact: 'Impact',
        techStack: [],
        featured: false,
      }),
    /project\.category must be one of/,
  );
});

test('rejects an invalid timeline entry type', () => {
  assert.throws(
    () =>
      validateTimelineEntry({
        id: 'example',
        period: '2026',
        startDate: '2026-01',
        endDate: '2026-12',
        role: 'Example',
        organization: 'Example',
        type: 'unknown',
        summary: 'Summary',
        keyHighlights: [],
      }),
    /timelineEntry\.type must be one of/,
  );
});
