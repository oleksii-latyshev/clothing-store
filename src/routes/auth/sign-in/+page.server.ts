import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { auth } from '@/lib/auth.js';
import { signInFormSchema } from '@/modules/auth/schemas/index.js';

import type { Actions, PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(signInFormSchema)),
  };
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(signInFormSchema));

    if (!form.valid) {
      return fail(400, {
        form,
      });
    }

    await auth.api.signInEmail({
      body: {
        email: form.data.email,
        password: form.data.password,
      },
    });

    redirect(303, '/');
  },
};
