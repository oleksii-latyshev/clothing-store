import { createContext } from '@/server/trpc/init';
import { trpcRouter } from '@/server/trpc/router';
import { createTRPCSvelteServer } from 'trpc-svelte-query/server';

export const trpcServer = createTRPCSvelteServer({
	endpoint: '/api/trpc',
	router: trpcRouter,
	createContext
});

export type TrpcServer = typeof trpcServer;
