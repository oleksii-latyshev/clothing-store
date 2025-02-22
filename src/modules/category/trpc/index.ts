import { getOneBySlugQuery } from '@/modules/category/trpc/queries/get-one-by-slug';
import { router } from '@/server/trpc/init';

export const categoriesTrpcRouter = router({
	getOneBySlug: getOneBySlugQuery
});
