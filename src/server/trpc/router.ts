import { helloSchema } from '@/lib/schemas';
import { publicProcedure, router } from '@/server/trpc/init';

export const trpcRouter = router({
	hello: publicProcedure.input(helloSchema).query(() => {
		// return db.query.categories.findMany();
		return 'Hello, world!';
	})
});

export type TrpcRouter = typeof trpcRouter;
