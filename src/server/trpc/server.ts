import { createTRPCSvelteServer } from 'trpc-svelte-query/server';

import { createContext } from '@/server/trpc/context';
import { trpcRouter } from '@/server/trpc/router';

export const trpcServer = createTRPCSvelteServer({
  endpoint: '/api/trpc',
  router: trpcRouter,
  createContext,
});

export type TrpcServer = typeof trpcServer;
