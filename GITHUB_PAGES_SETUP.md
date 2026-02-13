# GitHub Pages deployment (Vite + React)

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

## Steps
1. Create a GitHub repo (example: `landing-pages`).
2. Upload/push this entire folder to the repo (branch: `main`).
3. In GitHub: **Settings → Pages → Source: GitHub Actions**.
4. Push to `main`. The workflow will build and publish the site.

## Notes
- `vite.config.ts` uses `base: './'` so it works regardless of the repo name.
- `postbuild` copies `dist/index.html` to `dist/404.html` so refresh works even if you add routes later.
