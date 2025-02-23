<script lang="ts">
  import ProductCard from '@/modules/products/components/product-card/product-card.svelte';

  import type { PageProps } from './$types';

  let { data }: PageProps = $props();

  const { category, data: products = [] } = data;
</script>

<h1 class="text-xl font-semibold">{category.name}</h1>

<ul class="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-1">
  {#each products as product (product.id)}
    <ProductCard {...product} />
  {/each}
</ul>
