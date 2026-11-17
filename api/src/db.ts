import { PrismaClient } from "@prisma/client";

// One shared database client for the whole back end.
export const prisma = new PrismaClient();
