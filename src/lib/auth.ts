import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { admin } from 'better-auth/plugins';

import { db } from '@/server/db';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    usePlural: true,
  }),
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user }) => {
      console.log('sendResetPassword', user);
    },
  },
  // socialProviders: {
  //   github: {
  //     clientId: import.meta.env.VITE_GITHUB_CLIENT_ID,
  //     clientSecret: import.meta.env.VITE_GITHUB_CLIENT_SECRET,
  //   },
  // },
  plugins: [admin()],
  user: {
    changeEmail: {
      enabled: true,
    },
    additionalFields: {
      role: {
        type: 'string[]',
        values: ['user', 'admin'],
        default: 'user',
      },
    },
  },
});
