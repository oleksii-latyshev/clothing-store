import type { TrpcRouter } from '@/server/trpc/router';
import { createTRPCSvelte, httpBatchLink } from 'trpc-svelte-query';

export const trpc = createTRPCSvelte<TrpcRouter>({
	links: [
		httpBatchLink({
			url: '/api/trpc'
		})
	]
});
