import { initTRPC } from '@trpc/server';

import type { TrpcContext } from '@/server/trpc/context';

const t = initTRPC.context<TrpcContext>().create();

export const router = t.router;

export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(({ next }) => {
  // TODO: add protected logic
  return next();
});
