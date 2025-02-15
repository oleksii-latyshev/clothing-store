import type { ReferenceConfig } from 'drizzle-orm/pg-core';

export const MAX_VARCHAR_LENGTH = 255;

export const MAX_TEXT_LENGTH = 65535;

export const COMMON_TEXT_LENGTH = 512;

export const ID_LENGTH = 36;

export const CASCADE_RELATION_ACTIONS: ReferenceConfig['actions'] = {
	onDelete: 'cascade',
	onUpdate: 'cascade'
};
