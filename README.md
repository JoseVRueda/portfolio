# Portfolio

Personal site of Jose Vicente Rueda Rueda, a fullstack developer. A single page in English (`/`) and Spanish (`/es`), built with [Astro](https://astro.build) and Tailwind CSS.

## Development

Requires Node.js 22.23.4 or later.

```sh
pnpm install
pnpm dev
```

The local server runs at `http://localhost:4321`.

| Command | What it does |
| :------ | :----------- |
| `pnpm dev` | Starts the development server |
| `pnpm build` | Builds the site into `dist/` |
| `pnpm preview` | Serves the production build locally |

## Content

Profile data (experience, projects, skills, education) lives in `src/data/profile.ts`. Copy for each language is in `src/i18n/ui.ts`.
