import type { HTMLAttributes } from 'svelte/elements';
import type { SuperValidated } from 'sveltekit-superforms';

import type { SignUpFormSchema } from '@/modules/auth/schemas';

export type SignUpFormProps = {
  form: SuperValidated<SignUpFormSchema>;
} & HTMLAttributes<HTMLFormElement>;
