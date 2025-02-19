<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import CategoriesPreview from './categories-preview.svelte';
	import { CATEGORIES_TO_PREVIEW } from './constants';

	const { Story } = defineMeta({
		component: CategoriesPreview,
		tags: ['autodocs']
	});
</script>

<Story name="Default" args={{ categories: CATEGORIES_TO_PREVIEW }} />
