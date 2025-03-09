import { getManyByCategorySlugQuery } from '@/modules/product/trpc/queries/get-many-by-category-slug';
import { getOneByIdQuery } from '@/modules/product/trpc/queries/get-one-by-id';
import { router } from '@/server/trpc/init';

export const productsTrpcRouter = router({
  getOneById: getOneByIdQuery,
  getManyByCategorySlug: getManyByCategorySlugQuery,
});
