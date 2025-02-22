import { faker } from '@faker-js/faker';

import type { DBTransaction } from '@/server/db';
import { type Category, type NewProduct, type Product, products } from '@/server/db/schemas';

const PRODUCTS_PER_CATEGORY = 50;

export const seedProducts = async (
  db: DBTransaction,
  categories: Category[],
): Promise<Product[]> => {
  const productsData = categories.flatMap((category) =>
    Array.from(
      { length: PRODUCTS_PER_CATEGORY },
      (): NewProduct => ({
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        image: faker.image.urlLoremFlickr({ category: category.name }),
        categoryId: category.id,
      }),
    ),
  );

  const productsInserted = await db.insert(products).values(productsData).returning();

  console.log(`🌱 Seeded ${productsData.length} products`);

  return productsInserted;
};
