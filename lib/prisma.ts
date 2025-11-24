import { PrismaClient } from '@prisma/client';
import path from 'path';

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient | undefined;
}

// Point to your SQLite file inside /prisma folder
// e.g. prisma/local.db OR prisma/dev.db, up to you
const filePath = path.join(process.cwd(), 'prisma', 'dev.db');

// Prisma config with absolute file path
const config = {
  datasources: {
    db: {
      url: `file:${filePath}`,
    },
  },
};

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  // no caching in production
  prisma = new PrismaClient(config);
} else {
  // cache Prisma client in dev to prevent hot-reload leaks
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient(config);
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;
// also export as `prisma` for files that import that name
export { prisma };
