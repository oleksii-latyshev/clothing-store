<script module>
	import Button from '@/stories/Button.svelte';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import CategoriesPreview from './categories-preview.svelte';
	import { fn } from '@storybook/test';
	import { CATEGORIES_TO_PREVIEW } from './constants';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		component: CategoriesPreview,
		tags: ['autodocs']
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Default" args={{ categories: CATEGORIES_TO_PREVIEW }} />
