import type { ExtractTablesWithRelations } from 'drizzle-orm';
import type { PgVarcharConfig } from 'drizzle-orm/pg-core';
import type { PgTransaction } from 'drizzle-orm/pg-core';
import { type PostgresJsQueryResultHKT } from 'drizzle-orm/postgres-js';

import * as schema from '@/server/db/schemas';

export type CustomVarcharConfig = PgVarcharConfig<
  readonly [string, ...string[]] | [string, ...string[]]
>;

export type DBTransaction = PgTransaction<
  PostgresJsQueryResultHKT,
  typeof schema,
  ExtractTablesWithRelations<typeof schema>
>;
