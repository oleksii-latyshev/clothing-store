<script lang="ts">
  import Button from '@/lib/components/ui/button/button.svelte';
  import { cn } from '@/lib/utils';
  import { DEFAULT_PRODUCT_SIZES } from '@/modules/product/components/product-sizes/constants';
  import type { ProductSizesProps } from '@/modules/product/components/product-sizes/types';

  let { sizes = DEFAULT_PRODUCT_SIZES, class: className, ...props }: ProductSizesProps = $props();

  let selectedSize = sizes[1];
</script>

<ul class={cn('flex gap-2 flex-wrap', className)} {...props}>
  {#each sizes as size}
    <Button
      size="icon"
      variant="outline"
      class={cn('cursor-pointer rounded-full p-5', selectedSize === size && 'border-black')}
      >{size}</Button
    >
  {/each}
</ul>
