import { ID_LENGTH, MAX_VARCHAR_LENGTH } from '@/server/db/constants';
import { z } from 'zod';

export const getByIdSchema = z.object({
	id: z.string().max(ID_LENGTH)
});

export const getBySlugSchema = z.object({
	slug: z.string().max(MAX_VARCHAR_LENGTH)
});

export const paginationSchema = z.object({
	page: z.number().int().positive().default(1),
	limit: z.number().positive().optional()
});
