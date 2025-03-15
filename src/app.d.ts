import type { Session, User } from 'better-auth';

import type { TrpcServer } from '@/server/trpc/server';

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      trpc: TrpcServer;
      session?: Session;
      user?: User;
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
