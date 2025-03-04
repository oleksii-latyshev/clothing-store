import { SQL } from 'drizzle-orm';
import { PgColumn, type PgSelect } from 'drizzle-orm/pg-core';

export const withPagination = <T extends PgSelect>(
	qb: T,
	orderByColumn: PgColumn | SQL | SQL.Aliased,
	page = 1,
	pageSize = 20
) => {
	return qb
		.orderBy(orderByColumn)
		.limit(pageSize)
		.offset((page - 1) * pageSize);
};
