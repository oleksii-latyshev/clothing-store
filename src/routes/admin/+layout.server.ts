import { error, redirect } from '@sveltejs/kit';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
  const session = locals.session;
  const user = locals.user;

  if (!session) {
    throw redirect(302, '/auth/sign-in');
  }

  if (user?.role !== 'admin') {
    throw error(403, 'Forbidden');
  }
};
