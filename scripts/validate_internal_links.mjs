import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative, resolve, sep } from 'node:path';

const outputRoot = resolve('dist');

function collectHtmlFiles(directory) {
  return readdirSync(directory)
    .flatMap((name) => {
      const absolutePath = join(directory, name);
      return statSync(absolutePath).isDirectory()
        ? collectHtmlFiles(absolutePath)
        : extname(name) === '.html'
          ? [absolutePath]
          : [];
    });
}

function publicPathForHtml(filePath) {
  const relativePath = relative(outputRoot, filePath).split(sep).join('/');
  if (relativePath === 'index.html') return '/';
  if (relativePath.endsWith('/index.html')) return `/${relativePath.slice(0, -'index.html'.length)}`;
  return `/${relativePath}`;
}

function outputCandidates(pathname) {
  const cleanPath = decodeURIComponent(pathname).replace(/^\/+/, '');
  if (pathname.endsWith('/')) return [join(outputRoot, cleanPath, 'index.html')];
  if (extname(cleanPath)) return [join(outputRoot, cleanPath)];
  return [
    join(outputRoot, cleanPath),
    join(outputRoot, `${cleanPath}.html`),
    join(outputRoot, cleanPath, 'index.html'),
  ];
}

const htmlFiles = collectHtmlFiles(outputRoot);
const htmlByPublicPath = new Map(
  htmlFiles.map((filePath) => [publicPathForHtml(filePath), readFileSync(filePath, 'utf8')]),
);
const failures = [];

for (const [sourcePath, html] of htmlByPublicPath) {
  const links = [...html.matchAll(/\b(?:href|src)="([^"]+)"/g)].map((match) => match[1]);

  for (const rawLink of links) {
    if (/^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(rawLink)) continue;

    const targetUrl = new URL(rawLink, `https://portfolio.invalid${sourcePath}`);
    const candidates = outputCandidates(targetUrl.pathname);
    const targetFile = candidates.find((candidate) => existsSync(candidate));

    if (!targetFile) {
      failures.push(`${sourcePath}: missing target ${rawLink}`);
      continue;
    }

    if (targetUrl.hash && extname(targetFile) === '.html') {
      const targetHtml = readFileSync(targetFile, 'utf8');
      const id = decodeURIComponent(targetUrl.hash.slice(1));
      const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (!new RegExp(`\\sid="${escapedId}"`).test(targetHtml)) {
        failures.push(`${sourcePath}: missing fragment ${rawLink}`);
      }
    }
  }
}

if (failures.length > 0) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Validated internal links in ${htmlFiles.length} generated HTML files.`);
}
