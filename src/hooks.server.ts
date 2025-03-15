import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

import { i18nMiddleware } from '@/lib/middlewares/i18n.middleware';
import { injectTrpcMiddleware } from '@/lib/middlewares/inject-trpc.middleware';
import { authMiddleware } from '@/modules/auth/middlewares/auth.middleware';
import { injectSessionMiddleware } from '@/modules/auth/middlewares/inject-session.middleware';

export const handle: Handle = sequence(
  injectTrpcMiddleware,
  authMiddleware,
  i18nMiddleware,
  injectSessionMiddleware,
);
