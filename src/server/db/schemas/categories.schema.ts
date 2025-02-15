import { products } from '@/server/db/schemas/products.schema';
import { commonText, id, lifecycleDates, maxVarchar } from '@/server/db/utils/schemas';
import { relations } from 'drizzle-orm';
import { pgTable, index } from 'drizzle-orm/pg-core';

export const categories = pgTable(
	'categories',
	{
		id,
		name: maxVarchar('name').notNull(),
		description: commonText('description'),
		...lifecycleDates
	},
	(table) => [index('categories_name_idx').on(table.name)]
);

export const categoriesRelations = relations(categories, ({ many }) => ({
	products: many(products)
}));

export type Category = typeof categories.$inferSelect;

export type NewCategory = typeof categories.$inferInsert;
