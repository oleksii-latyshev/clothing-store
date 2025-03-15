import type { Handle } from '@sveltejs/kit';

import { trpcServer } from '@/server/trpc/server';

export const injectTrpcMiddleware: Handle = async ({ event, resolve }) => {
  event.locals.trpc = trpcServer;

  return resolve(event);
};
