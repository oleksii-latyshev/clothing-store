import { z } from 'zod';

import { MAX_VARCHAR_LENGTH } from '@/server/db/constants';

export const userSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name is too short' })
    .max(MAX_VARCHAR_LENGTH, { message: 'Name is too long' }),
});
