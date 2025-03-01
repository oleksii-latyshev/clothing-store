<script lang="ts">
  import Button from '@/lib/components/ui/button/button.svelte';
  import { cn } from '@/lib/utils';
  import { DEFAULT_PRODUCT_COLORS } from '@/modules/products/components/product-colors/constants';
  import type { ProductColorsProps } from '@/modules/products/components/product-colors/types';

  let {
    colors = DEFAULT_PRODUCT_COLORS,
    class: className,
    ...props
  }: ProductColorsProps = $props();

  let selectedColor = colors[1];
</script>

<ul class={cn('flex gap-2', className)} {...props}>
  {#each colors as color}
    <Button
      size="icon"
      variant="outline"
      class={cn(
        'cursor-pointer rounded-full p-1 h-fit w-fit',
        selectedColor === color && 'border-black',
      )}
    >
      <div style="background-color: {color};" class="p-3 rounded-full"></div>
    </Button>
  {/each}
</ul>
