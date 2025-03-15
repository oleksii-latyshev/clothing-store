import type { Handle } from '@sveltejs/kit';

import { i18n } from '@/lib/i18n';

export const i18nMiddleware: Handle = i18n.handle();

export const i18nRerouteMiddleware = i18n.reroute();
