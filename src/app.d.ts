import type { TrpcServer } from '@/server/trpc/server';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			trpc: TrpcServer;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
