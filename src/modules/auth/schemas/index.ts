import { z } from 'zod';

import { MAX_VARCHAR_LENGTH } from '@/server/db/constants';

export const authSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email' })
    .min(2, { message: 'Email is too short' })
    .max(MAX_VARCHAR_LENGTH, { message: 'Email is too long' }),
  password: z
    .string()
    .min(5, {
      message: 'Password is too short',
    })
    .max(MAX_VARCHAR_LENGTH, { message: 'Password is too long' }),
});

export type AuthSchema = z.infer<typeof authSchema>;

export const signInFormSchema = authSchema
  .extend({
    confirmPassword: authSchema.shape.password,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export type SignInFormSchema = z.infer<typeof signInFormSchema>;
