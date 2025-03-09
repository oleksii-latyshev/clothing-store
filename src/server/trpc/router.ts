import { categoriesTrpcRouter } from '@/modules/category/trpc';
import { productsTrpcRouter } from '@/modules/product/trpc';
import { router } from '@/server/trpc/init';

export const trpcRouter = router({
  products: productsTrpcRouter,
  categories: categoriesTrpcRouter,
});

export type TrpcRouter = typeof trpcRouter;
