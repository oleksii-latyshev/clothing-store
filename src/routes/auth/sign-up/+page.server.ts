import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { auth } from '@/lib/auth.js';
import { HTTP_STATUSES } from '@/lib/constants/index.js';
import { ROLES } from '@/modules/auth/constants/index.js';
import { signUpFormSchema } from '@/modules/auth/schemas/index.js';

import type { Actions, PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(signUpFormSchema)),
  };
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(signUpFormSchema));

    if (!form.valid) {
      return fail(HTTP_STATUSES.badRequest, {
        form,
      });
    }

    await auth.api.signUpEmail({
      body: {
        email: form.data.email,
        password: form.data.password,
        name: form.data.name,
        role: [ROLES.user],
      },
    });

    redirect(303, '/');
  },
};
