import { getTableColumns } from 'drizzle-orm';
import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';

import { id, lifecycleDates } from '@/server/db/utils/schemas';

export const verifications = pgTable('verifications', {
  id,
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  ...lifecycleDates,
});

export type Verification = typeof verifications.$inferSelect;

export type NewVerification = typeof verifications.$inferInsert;

export const verificationSchemaColumns = getTableColumns(verifications);
