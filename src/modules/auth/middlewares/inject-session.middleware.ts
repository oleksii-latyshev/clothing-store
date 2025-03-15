import type { Handle } from '@sveltejs/kit';

import { auth } from '@/lib/auth';

export const injectSessionMiddleware: Handle = async ({ event, resolve }) => {
  const session = await auth.api.getSession({
    headers: event.request.headers,
  });

  event.locals.session = session?.session;
  event.locals.user = session?.user;

  return resolve(event);
};
