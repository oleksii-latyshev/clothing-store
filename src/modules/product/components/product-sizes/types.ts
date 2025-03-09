import type { HTMLAttributes } from 'svelte/elements';

import type { DEFAULT_PRODUCT_SIZES } from '@/modules/product/components/product-sizes/constants';

export type ProductSizesProps = {
  sizes?: typeof DEFAULT_PRODUCT_SIZES;
} & HTMLAttributes<HTMLUListElement>;
