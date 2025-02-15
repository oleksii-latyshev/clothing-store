import { db } from '@/server/db';
import type { RequestEvent } from '@sveltejs/kit';
import { initTRPC, type inferAsyncReturnType } from '@trpc/server';

export async function createContext(event: RequestEvent) {
	return {
		event,
		db
	};
}

type TrpcContext = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<TrpcContext>().create();

export const router = t.router;

export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(({ next }) => {
	// TODO: add protected logic
	return next();
});
