<script>
  import FullscreenSlider from '@/lib/components/fullscreen-slider/fullscreen-slider.svelte';
  import CategoriesPreview from '@/modules/category/components/categories-preview/categories-preview.svelte';

  import { CATEGORIES_TO_PREVIEW, MAIN_PAGE_FULLSCREEN_SLIDES } from './constants';
</script>

<svelte:head>
  <title>Home • Store</title>
  <meta name="description" content="Welcome to our store" />
</svelte:head>

<main class="space-y-1">
  <FullscreenSlider slides={MAIN_PAGE_FULLSCREEN_SLIDES} />
  <CategoriesPreview categories={CATEGORIES_TO_PREVIEW} />
</main>
