import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import * as schema from './schemas';

if (!import.meta.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set');
}

const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

const connection = globalForDb.conn ?? postgres(import.meta.env.DATABASE_URL);

if (import.meta.env.NODE_ENV !== 'production') {
  globalForDb.conn = connection;
}

export const db = drizzle(connection, {
  schema,
});

export type DB = typeof db;
