import { getBySlugSchema, paginationSchema } from '@/lib/schemas';
import { categories, products, productSchemaColumns, type Product } from '@/server/db/schemas';
import { withPagination } from '@/server/db/utils/queries';
import { publicProcedure } from '@/server/trpc/init';
import { count, desc, eq } from 'drizzle-orm';
import { type PaginationResponse } from '@/lib/types';
import { PRODUCTS_LIMIT_PER_SEARCH_PAGE } from '@/modules/products/constants';

export const getManyBySlugQuery = publicProcedure
	.input(paginationSchema.merge(getBySlugSchema))
	.query(
		async ({
			input: { slug, page, limit = PRODUCTS_LIMIT_PER_SEARCH_PAGE },
			ctx: { db }
		}): Promise<PaginationResponse<Product[]>> => {
			const query = db
				.select(productSchemaColumns)
				.from(products)
				.innerJoin(categories, eq(categories.id, products.categoryId))
				.where(eq(categories.slug, slug));

			const data = await withPagination(query.$dynamic(), desc(products.createdAt), page, limit);

			const [{ count: totalCount }] = await db
				.select({
					count: count()
				})
				.from(products)
				.innerJoin(categories, eq(categories.id, products.categoryId))
				.where(eq(categories.slug, slug));

			const totalPages = Math.ceil(totalCount / limit);

			return {
				currentPage: page,
				totalPages,
				data
			};
		}
	);
