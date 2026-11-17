<img src="docs/brand/logo-icon.svg" width="64" alt="SnapInvoice logo">

# SnapInvoice

**SnapInvoice lets small businesses photograph their invoices with a phone, and AI turns them into ready-to-import data for their accountant, so accountants stop typing invoices by hand.**

For accounting offices and their small-business clients in Kosovo and North Macedonia.

## Start the project (3 commands)

You need [Node.js](https://nodejs.org) 20.19 or newer.

```bash
git clone https://github.com/arjetadauti/snapinvoice.git && cd snapinvoice
npm install
npm run dev
```

- Landing page: http://localhost:5173
- Back end health check: http://localhost:3000/health (answers `{"status":"ok","database":"ok"}`)
- Database tables: `npm install` creates `api/prisma/snapinvoice.db` with all tables. To look at them, run `npm run db:studio`.

## What's inside
- `web/`: front end (React + TypeScript + Vite), currently just the landing page
- `api/`: back end (Express + TypeScript), Prisma data models and migrations, SQLite database
- `docs/`: the business behind the code (start here)

## Docs
- [Business: problem, big picture, market, model](docs/business.md)
- [Brand book](docs/brand-book.md)
- [Business rules and flows](docs/rules-and-flows.md)
- [Stack](docs/stack.md)
- [Data model](docs/data-model.md)

_Weekend 1: the business. Weekend 2: the frame (landing page, back end with /health, data models, first migration)._
