import type { PgVarcharConfig } from 'drizzle-orm/pg-core';

export type CustomVarcharConfig = PgVarcharConfig<
  readonly [string, ...string[]] | [string, ...string[]]
>;
