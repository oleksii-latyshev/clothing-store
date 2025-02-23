import { eq } from 'drizzle-orm';

import { getByIdSchema } from '@/lib/schemas';
import { type Product, products } from '@/server/db/schemas';
import { publicProcedure } from '@/server/trpc/init';

export const getOneByIdQuery = publicProcedure
  .input(getByIdSchema)
  .query(async ({ input: { id }, ctx: { db } }): Promise<Product | undefined> => {
    const [product] = await db.select().from(products).where(eq(products.id, id));

    return product;
  });
