import { getManyBySlugQuery } from '@/modules/products/trpc/queries/get-many-by-slug';
import { router } from '@/server/trpc/init';

export const productsTrpcRouter = router({
	getManyBySlug: getManyBySlugQuery
});
