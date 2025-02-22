import { seedCategories } from '@/modules/category/db/seed';
import { seedProducts } from '@/modules/products/db/seed';
import { db } from '@/server/db';

const dbSeeding = async () => {
  await db.transaction(async (tx) => {
    const categories = await seedCategories(tx);

    await seedProducts(tx, categories);
  });

  process.exit(0);
};

dbSeeding().catch((error) => {
  console.error('❌ Error seeding database:', error);
  process.exit(1);
});
