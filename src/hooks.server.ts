import type { Handle } from '@sveltejs/kit';
import { i18n } from '@/lib/i18n';
import { sequence } from '@sveltejs/kit/hooks';
import { trpcServer } from '@/server/trpc/server';

const handleParaglide: Handle = i18n.handle();

const injectTrpc: Handle = async ({ event, resolve }) => {
	event.locals.trpc = trpcServer;

	return resolve(event);
};

export const handle: Handle = sequence(handleParaglide, injectTrpc);
