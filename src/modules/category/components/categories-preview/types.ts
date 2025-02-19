import type { Image, Name, Slug } from '@/lib/types/keys';
import type { HTMLAttributes } from 'svelte/elements';

export type CategoryPreview = Name & Slug & Image;

export type CategoriesPreviewProps = {
	categories: CategoryPreview[];
} & HTMLAttributes<HTMLUListElement>;
