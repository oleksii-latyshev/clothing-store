import { relations } from 'drizzle-orm';
import { index, pgTable } from 'drizzle-orm/pg-core';

import { products } from '@/server/db/schemas';
import { commonText, id, lifecycleDates, maxVarchar } from '@/server/db/utils/schemas';

export const categories = pgTable(
  'categories',
  {
    id,
    name: maxVarchar('name').notNull(),
    description: commonText('description'),
    slug: maxVarchar('slug').notNull(),
    ...lifecycleDates,
  },
  (table) => [index('categories_name_idx').on(table.name)],
);

export const categoriesRelations = relations(categories, ({ many }) => ({
  products: many(products),
}));

export type Category = typeof categories.$inferSelect;

export type NewCategory = typeof categories.$inferInsert;
