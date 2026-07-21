import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const browserCandidates = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean);

const browserPath = browserCandidates.find((candidate) => existsSync(candidate));
if (!browserPath) {
  console.error('No Chromium-based browser found. Set CHROME_PATH before running Lighthouse CI.');
  process.exit(1);
}

const lhci = resolve('node_modules', '.bin', process.platform === 'win32' ? 'lhci.cmd' : 'lhci');
const result = spawnSync(lhci, ['autorun', '--config=./lighthouserc.cjs'], {
  cwd: process.cwd(),
  env: { ...process.env, CHROME_PATH: browserPath },
  shell: process.platform === 'win32',
  stdio: 'inherit',
});

if (result.error) throw result.error;
process.exit(result.status ?? 1);
