import type { PageServerLoad } from './$types';

export const load = (async (event) => {
  const {
    params: { productId },
    locals: { trpc },
  } = event;

  const product = await trpc.products.getOneById.ssr(
    {
      id: productId,
    },
    event,
  );

  if (!product) {
    return {
      status: 404,
      error: new Error('Product not found'),
    };
  }

  return {
    product,
  };
}) satisfies PageServerLoad;
