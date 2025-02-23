<script lang="ts">
  import type { Product } from '@/server/db/schemas';

  const {
    data,
  }: {
    data: {
      product: Product;
    };
  } = $props();

  const { product } = data;
</script>

<h1>{product.name}</h1>
