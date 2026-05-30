# Seapage

## Workspace

- The Next.js app lives in `next/` — all commands run from that directory.
- Root `AGENTS.md` (this file) applies globally; Next.js-specific rules are inlined below.

## Next.js 16 (breaking changes)

Read `next/node_modules/next/dist/docs/` before writing any code. This version has API, convention, and file-structure differences from what LLM training data knows.

## Toolchain

| Command | What |
|---|---|
| `npm run dev` | Next.js dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint (Next.js-specific rules) |
| `npm run check` | Biome — format + lint + organize imports |
| `npm run format` | Biome — format only |

**Run order**: `npm run check && npm run lint`

## Biome (formatter + linter)

Config at `next/biome.json`. Key settings:
- Tab indentation, double quotes
- Tailwind CSS directives enabled (needed for `@theme`, `@import "tailwindcss"`)
- VCS integration — respects `.gitignore`
- Import organization enabled via `assist.actions.source.organizeImports`

No Prettier config — Biome is the sole formatter.

## Tailwind CSS v4

Uses `@tailwindcss/postcss` (Tailwind v4 PostCSS plugin). Config at `next/postcss.config.mjs`. Globals in `next/app/globals.css` use the new `@import "tailwindcss"` + `@theme` syntax (not `@tailwind base/components/utilities`).

## Tests

None configured yet.

## OpenCode / OpenSpec

- Skills in `.opencode/skills/`: `explore`, `propose`, `apply-change`, `archive-change`
- Spec-driven workflow via `openspec/`
- Commands in `.opencode/commands/` for each phase
