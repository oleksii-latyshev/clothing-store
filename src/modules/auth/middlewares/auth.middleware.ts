import type { Handle } from '@sveltejs/kit';
import { svelteKitHandler } from 'better-auth/svelte-kit';

import { auth } from '@/lib/auth';

export const authMiddleware: Handle = async ({ event, resolve }) => {
  return svelteKitHandler({ event, resolve, auth });
};
