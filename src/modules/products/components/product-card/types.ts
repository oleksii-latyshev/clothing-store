import type { HTMLAttributes } from 'svelte/elements';

import type { Serialized } from '@/lib/types';
import type { Product } from '@/server/db/schemas';

export type ProductCardProps = Serialized<Product> & HTMLAttributes<HTMLAnchorElement>;
