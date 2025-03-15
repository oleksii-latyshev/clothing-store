import { getTableColumns } from 'drizzle-orm';
import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';

import { users } from '@/modules/user/db/schema';
import { id, lifecycleDates } from '@/server/db/utils/schemas';

export const accounts = pgTable('accounts', {
  id,
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  idToken: text('id_token'),
  accessTokenExpiresAt: timestamp('access_token_expires_at'),
  refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
  scope: text('scope'),
  password: text('password'),
  ...lifecycleDates,
});

export type Account = typeof accounts.$inferSelect;

export type NewAccount = typeof accounts.$inferInsert;

export const accountSchemaColumns = getTableColumns(accounts);
