# SnapInvoice: Stack

| Part | Technology | Why (one sentence) |
|---|---|---|
| **Front end** | **React + TypeScript, built with Vite** | React is the most widely used way to build the accountant's review screen (photo on the left, fields on the right), and Vite starts in under a second with a ready-made starter template. |
| **Back end** | **Node.js + Express + TypeScript** | One language (TypeScript) for the front and back end means Claude and I only work in one language, and Express is the simplest, best-known way to answer HTTP requests like `/health`. |
| **Database** | **SQLite through Prisma** | SQLite is one file with nothing to install, and Prisma turns the data models into tables with real migrations, so the schema is readable for me and for Claude. |

## Versions
- Node.js 20.19 or newer (tested on Node 22)
- React 19, Vite 8, TypeScript
- Express 5
- Prisma 6 (pinned to 6.19.x on purpose: the npm "latest" tag points to a Prisma 8 release candidate)

## How the parts fit
- One repository with **npm workspaces**: `web/` (front end) and `api/` (back end).
- `npm install` at the root installs both and runs the database migrations.
- `npm run dev` at the root starts both:
  - front end: http://localhost:5173
  - back end: http://localhost:3000, health check at http://localhost:3000/health
- The database is the file `api/prisma/snapinvoice.db`. It's created by the migrations and is **never committed** (see `.gitignore`).

## Later (not in this weekend)
- AI reading of invoices: a vision model called from the back end.
- File storage for invoice photos: local folder in development, cloud storage in production.
- SQLite is fine for the first customers. Moving to Postgres later is a one-line change in `schema.prisma` plus a new migration.
