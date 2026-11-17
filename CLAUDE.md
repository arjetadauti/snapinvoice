# CLAUDE.md

SnapInvoice: small businesses photograph invoices, AI reads them, and accountants in Kosovo and North Macedonia check and export them instead of typing.

## Rule number one
**Read `docs/` before you change anything.** The business, brand, rules and data model there are the source of truth. If code and docs disagree, ask. Don't guess.
- `docs/business.md`: problem, customers, market, price
- `docs/brand-book.md`: name, colours, fonts, tone of voice
- `docs/rules-and-flows.md`: roles, flows, business rules, what v1 will NOT do
- `docs/stack.md`: technologies and why
- `docs/data-model.md`: the models and the diagram

## Stack
- Front end: React 19 + TypeScript + Vite (`web/`)
- Back end: Node.js + Express 5 + TypeScript (`api/`)
- Database: SQLite through Prisma 6 (pinned to 6.x, don't upgrade to the Prisma 8 RC)
- npm workspaces at the root

## Folder layout
```
snapinvoice/
├── CLAUDE.md
├── package.json          root: workspaces + dev/build scripts
├── docs/                 business docs, brand, rules, stack, data model
│   └── brand/            logo files (SVG)
├── api/                  back end
│   ├── src/index.ts      Express app, routes (/health)
│   ├── src/db.ts         shared Prisma client
│   └── prisma/
│       ├── schema.prisma data models
│       ├── migrations/   committed migrations
│       └── snapinvoice.db  SQLite file (git-ignored)
└── web/                  front end
    ├── index.html        fonts, title, favicon
    ├── public/           static files (logo icon)
    └── src/              App.tsx (landing page), Logo.tsx, index.css (brand tokens)
```

## Commands (run from the repo root)
```bash
npm install          # installs both projects and runs DB migrations
npm run dev          # api on :3000 and web on :5173
npm run build        # builds api and web
npm run typecheck    # type checks both
npm run db:studio    # browse the SQLite tables
```
New migration after editing the schema: `npm run db:migrate:new -w @snapinvoice/api -- --name what_changed`

## Conventions
- TypeScript everywhere, strict mode.
- Use the brand tokens in `web/src/index.css` (`--green`, `--navy`, `--paper`), never new colours. Fonts: Space Grotesk (headings), Inter (text and numbers).
- Money is `Decimal`, never float.
- Every schema change = a new Prisma migration and an update to `docs/data-model.md`.
- Never commit `*.db` files or `.env`.
- Tone in any UI copy: clear, precise, calm. Never promise "100% automatic".
- Keep to the current weekend's scope: don't add endpoints or screens that weren't asked for.
