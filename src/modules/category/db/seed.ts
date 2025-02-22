import { faker } from '@faker-js/faker';

import { CATEGORY_SLUGS } from '@/modules/category/constants';
import { type Category, type NewCategory, categories } from '@/server/db/schemas';
import type { DBTransaction } from '@/server/db/types';

export const seedCategories = async (tx: DBTransaction): Promise<Category[]> => {
  const categoriesData: NewCategory[] = Object.entries(CATEGORY_SLUGS).map(([name, slug]) => ({
    name,
    slug,
    description: faker.commerce.productDescription(),
  }));

  const categoriesInserted = await tx.insert(categories).values(categoriesData).returning();

  console.log(`🌱 Seeded ${categoriesData.length} categories`);

  return categoriesInserted;
};
