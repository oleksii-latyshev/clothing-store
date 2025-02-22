import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const load = (async (event) => {
  const {
    params: { slug: categorySlug },
    locals: { trpc },
    url,
  } = event;

  const category = await trpc.categories.getOneBySlug.ssr(
    {
      slug: categorySlug,
    },
    event,
  );

  if (!category) {
    error(404, {
      message: 'Category not found',
    });
  }

  // TODO: maybe in the future I will remove it because I wont to implement pagination by dynamic scroll or how to call it
  const page = Number(url.searchParams.get('page')) || 1;

  const data = await trpc.products.getManyBySlug.ssr(
    {
      slug: categorySlug,
      page,
    },
    event,
  );

  return {
    category,
    ...data,
  };
}) satisfies PageServerLoad;
