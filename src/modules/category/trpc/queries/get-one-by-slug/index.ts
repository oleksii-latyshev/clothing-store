import { eq } from 'drizzle-orm';

import { getBySlugSchema } from '@/lib/schemas';
import { type Category, categories } from '@/server/db/schemas';
import { publicProcedure } from '@/server/trpc/init';

export const getOneBySlugQuery = publicProcedure
  .input(getBySlugSchema)
  .query(async ({ input: { slug }, ctx: { db } }): Promise<Category | undefined> => {
    const [result] = await db.select().from(categories).where(eq(categories.slug, slug));

    return result;
  });
