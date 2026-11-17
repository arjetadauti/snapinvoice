import express from "express";
import { prisma } from "./db.js";

const app = express();
const PORT = Number(process.env.PORT ?? 3000);

app.use(express.json());

// Allow the landing page (Vite dev server) to call the API in development.
app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  next();
});

// Health check: the server is up and the SQLite database answers.
app.get("/health", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: "ok", database: "ok", time: new Date().toISOString() });
  } catch {
    res.status(503).json({ status: "error", database: "unreachable" });
  }
});

app.listen(PORT, () => {
  console.log(`SnapInvoice API on http://localhost:${PORT}  (health: /health)`);
});
