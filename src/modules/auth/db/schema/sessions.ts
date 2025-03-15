import { getTableColumns } from 'drizzle-orm';
import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';

import { users } from '@/modules/user/db/schema';
import { id, lifecycleDates } from '@/server/db/utils/schemas';

export const sessions = pgTable('sessions', {
  id,
  expiresAt: timestamp('expires_at').notNull(),
  token: text('token').notNull().unique(),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  impersonatedBy: text('impersonated_by'),
  ...lifecycleDates,
});

export type Session = typeof sessions.$inferSelect;

export type NewSession = typeof sessions.$inferInsert;

export const sessionSchemaColumns = getTableColumns(sessions);
