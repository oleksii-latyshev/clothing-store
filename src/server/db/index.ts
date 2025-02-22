import { env } from '$env/dynamic/private';
import type { ExtractTablesWithRelations } from 'drizzle-orm';
import type { PgTransaction } from 'drizzle-orm/pg-core';
import { type PostgresJsQueryResultHKT, drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import * as schema from './schemas';

if (!env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set');
}

const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

const connection = globalForDb.conn ?? postgres(env.DATABASE_URL);

if (env.NODE_ENV !== 'production') {
  globalForDb.conn = connection;
}

export const db = drizzle(connection, {
  schema,
});

// To avoid circular dependency, we will have to leave the types here ¯\_(ツ)_/¯
export type DB = typeof db;

export type DBTransaction = PgTransaction<
  PostgresJsQueryResultHKT,
  typeof schema,
  ExtractTablesWithRelations<typeof schema>
>;
