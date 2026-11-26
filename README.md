# Data Scraping Intelligence (DSI)

A local-first data collection workspace built with React, TypeScript and Vite. Phase 1 provides a responsive dashboard, CSV/JSON import, IndexedDB persistence, dataset management, CSV export, theme preference, and GitHub Pages deployment workflow.

## Requirements
- Node.js 20+
- npm 10+
- A modern browser with IndexedDB support

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages
1. Create a GitHub repository named `data-scraping-intelligence` (or change `base` in `vite.config.ts` to `/<your-repository-name>/`).
2. Push this project to the `main` branch.
3. In repository Settings → Pages, select **GitHub Actions** as the build and deployment source.
4. The included `.github/workflows/deploy.yml` builds and deploys the app on every push to `main`.

The Vite base path is configured as `/data-scraping-intelligence/` in GitHub Actions and `/` for local development.

## Phase 1 features
- Dashboard metrics based on locally stored datasets.
- Import CSV and JSON files.
- IndexedDB dataset persistence (no server upload).
- Search and manage datasets.
- Export a dataset as CSV.
- Light/dark theme preference in LocalStorage.
- Responsive sidebar and dashboard layout.

## Important limitations
This phase does not yet perform live website scraping. Browser-side requests are restricted by CORS, authentication, anti-bot controls, and website terms. Phase 2 will add a fetch/HTML parsing workflow for sources that explicitly permit browser access, plus local HTML file import. Do not use this app to bypass access controls, CAPTCHAs, paywalls, or rate limits.

## Storage and privacy
Imported datasets are stored in the browser's IndexedDB on the current device and browser profile. Clearing browser site data can permanently remove them. Export backups regularly. No DSI backend or cloud sync is configured.
