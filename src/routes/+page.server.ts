import { trpcServer } from '@/server/trpc/server.js';

export const load = async (event) => {
	return {
		hello: await trpcServer.hello.ssr({ name: 'Oleksii' }, event)
	};
};
