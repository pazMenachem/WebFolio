# WebFolio

The source for [pazmenachem.github.io/WebFolio](https://pazmenachem.github.io/WebFolio/) — Paz Menachem's
portfolio site. A single-page React app with four routes: an introduction, a project list, a timeline of work
and study, and a skills grid.

Built with Vite, React 19, TypeScript and Tailwind CSS v4. It deploys to GitHub Pages straight out of the
repository, which is where most of the non-obvious parts come from — see [Deployment](#deployment).

## Content lives in `src/consts/`

The components hold layout and behaviour, never copy. Everything a reader sees comes from one of these files,
so changing the site means editing data rather than JSX:

| File | Drives |
| --- | --- |
| `HomeConsts.tsx` | The introduction — role line, name, lead sentence and body paragraphs |
| `ProjectsConsts.tsx` | Project cards: title, description, tech stack, optional repository link and image |
| `ProfessionalConsts.tsx` | The vertical timeline of roles, courses and education |
| `SkillsConsts.tsx` | The skills honeycomb, grouped by category |
| `RecommendationConsts.tsx` | Quotes, contact details and the CV link |
| `NavConsts.tsx` | Navigation links and the navbar height token |

Two conventions worth knowing before editing them:

- **A project needs neither a link nor an image.** `ProjectsConsts` marks both optional. The platforms built at
  Copyleaks are internal, so they have no public repository and no shareable screenshot; the card falls back to
  a typographic block rather than borrowing a stock image.
- **Descriptions are capped** at `MAX_DESCRIPTION_LENGTH`. Past it a card truncates mid-sentence, so raise the
  cap rather than letting a description be cut.

## Running it

```bash
npm install
npm run dev      # dev server
npm run build    # type-check, then build into docs/
npm run preview  # serve the built docs/ the way Pages will
npm run lint
```

`npm run preview` is worth using before any commit that touches routing or asset paths: it serves the real build
under the real base path, which `npm run dev` does not.

## Deployment

GitHub Pages serves this repository's `main:/docs`. There is no CI publish step and no `gh-pages` branch —
**deploying is pushing a fresh build to `main`**.

Three consequences that will otherwise catch you out.

### `docs/` is committed output, not a build artefact

`vite.config.ts` sets `outDir: 'docs'`, so `npm run build` writes into a tracked directory. It is deliberately
absent from `.gitignore`. A commit that changes anything under `src/` or `public/` without including a rebuilt
`docs/` will merge cleanly and change nothing on the live site.

### Paths must be base-relative

`vite.config.ts` sets `base: '/WebFolio/'`, because the site is published under a sub-path rather than at the
domain root. A root-absolute path such as `/Paz-Menachem-CV-Developer.pdf` resolves against
`pazmenachem.github.io`, misses the `/WebFolio/` prefix entirely, and 404s in production while working fine in
dev. That is exactly how the CV download link broke.

Resolve anything in `public/` against the base instead:

```ts
const RESUME_LINK = `${import.meta.env.BASE_URL}Paz-Menachem-CV-Developer.pdf`;
```

### Deep links rely on `public/404.html`

The app uses `BrowserRouter`, and GitHub Pages has no server-side route for `/WebFolio/projects`. A direct hit
on any route other than `/` **returns HTTP 404 by design** — Pages then serves `404.html`, which rewrites the
path into a query string and redirects to the app root, where a snippet in `index.html` turns it back into a
route before React Router mounts.

So the deep link works and the status code is still 404. The two files are a pair: change the redirect in one
and the decoder in the other has to match.

## License

[MIT](LICENSE).
