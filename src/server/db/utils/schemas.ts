import { uuidv7 } from 'uuidv7';
import { COMMON_TEXT_LENGTH, ID_LENGTH, MAX_VARCHAR_LENGTH } from '@/server/db/constants';
import type { CustomVarcharConfig } from '@/server/db/types';
import { sql } from 'drizzle-orm';
import { text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const maxVarchar = (name: string, config?: CustomVarcharConfig) =>
	varchar(name, {
		length: MAX_VARCHAR_LENGTH,
		...config
	});

export const commonForeignKey = (name: string) =>
	varchar(name, {
		length: ID_LENGTH
	}).notNull();

export const commonText = (name: string, config?: CustomVarcharConfig) =>
	text(name, {
		length: COMMON_TEXT_LENGTH,
		...config
	});

export const id = varchar('id', {
	length: ID_LENGTH
})
	.$defaultFn(uuidv7)
	.primaryKey()
	.notNull();

export const lifecycleDates = {
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at')
		.defaultNow()
		.notNull()
		.$onUpdate(() => sql`CURRENT_TIMESTAMP`)
};
