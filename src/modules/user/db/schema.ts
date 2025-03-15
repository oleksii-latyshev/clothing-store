import { getTableColumns } from 'drizzle-orm';
import { boolean, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

import { id, lifecycleDates } from '@/server/db/utils/schemas';

export const users = pgTable('users', {
  id,
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').notNull(),
  image: text('image'),
  role: text('role'),
  banned: boolean('banned'),
  banReason: text('ban_reason'),
  banExpires: timestamp('ban_expires'),
  ...lifecycleDates,
});

export type User = typeof users.$inferSelect;

export type NewUser = typeof users.$inferInsert;

export const userSchemaColumns = getTableColumns(users);
