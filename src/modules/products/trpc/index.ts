import { getManyByCategorySlugQuery } from '@/modules/products/trpc/queries/get-many-by-category-slug';
import { getOneByIdQuery } from '@/modules/products/trpc/queries/get-one-by-id';
import { router } from '@/server/trpc/init';

export const productsTrpcRouter = router({
  getOneById: getOneByIdQuery,
  getManyByCategorySlug: getManyByCategorySlugQuery,
});
