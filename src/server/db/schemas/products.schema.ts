import { relations } from 'drizzle-orm';
import { pgTable, index, numeric } from 'drizzle-orm/pg-core';
import { commonForeignKey, commonText, id, lifecycleDates, maxVarchar } from '../utils/schemas';
import { categories } from '@/modules/category/db/schema';

export const products = pgTable(
	'products',
	{
		id,
		categoryId: commonForeignKey('category_id').references(() => categories.id, {
			onDelete: 'restrict',
			onUpdate: 'cascade'
		}),
		name: maxVarchar('name').notNull(),
		description: commonText('description'),
		price: numeric('price', {
			precision: 10,
			scale: 2
		}).notNull(),
		discountPrice: numeric('discount_price', {
			precision: 10,
			scale: 2
		}),
		image: commonText('image'),
		...lifecycleDates
	},
	(table) => [index('products_name_idx').on(table.name)]
);

export const productsRelations = relations(products, ({ one }) => ({
	category: one(categories, {
		fields: [products.categoryId],
		references: [categories.id]
	})
}));

export type Product = typeof products.$inferSelect;

export type NewProduct = typeof products.$inferInsert;
