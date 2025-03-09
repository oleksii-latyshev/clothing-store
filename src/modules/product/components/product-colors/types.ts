import type { HTMLAttributes } from 'svelte/elements';

export type ProductColorsProps = {
  colors?: string[];
} & HTMLAttributes<HTMLUListElement>;
