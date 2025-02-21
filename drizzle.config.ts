import { defineConfig } from 'drizzle-kit';

if (!process.env.DATABASE_URL) {
	throw new Error('DATABASE_URL is not set');
}

export default defineConfig({
	schema: './src/server/db/schemas/index.ts',
	out: './src/server/db/migrations',
	verbose: true,
	strict: true,
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.DATABASE_URL
	},
	migrations: {
		prefix: 'index'
	}
});
