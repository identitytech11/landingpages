import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

// GitHub Pages: if you ever use client-side routing, refreshing a deep link can 404.
// Copy index.html to 404.html so Pages serves the SPA entry point.
const dist = resolve('dist');
const index = resolve(dist, 'index.html');
const notFound = resolve(dist, '404.html');

if (existsSync(index)) {
  copyFileSync(index, notFound);
  console.log('postbuild: created dist/404.html');
} else {
  console.warn('postbuild: dist/index.html not found; skipping 404.html');
}
