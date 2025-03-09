<script lang="ts">
  import { getDiscountPercentage } from '@/lib/helpers/getDiscountPercentage';
  import { cn } from '@/lib/utils';
  import type { ProductCardProps } from '@/modules/product/components/product-card/types';

  const {
    id,
    name,
    image,
    price,
    discountPrice,
    class: className,
    ...props
  }: ProductCardProps = $props();

  const discount = discountPrice
    ? getDiscountPercentage(Number(price), Number(discountPrice))
    : null;
</script>

<li>
  <a
    class={cn('flex flex-col w-full group h-full transition-colors hover:bg-muted', className)}
    href="/{id}"
    {...props}
  >
    <div class="w-full overflow-hidden h-[600px] lg:h-[800px]">
      <img
        src={image}
        alt={name}
        class="w-full h-full object-cover group-hover:scale-110 transition-transform"
      />
    </div>

    <div class="px-2 py-1 text-start flex-grow flex flex-col justify-start">
      <h3 class="text-xs">{name}</h3>
      <p class={cn('text-xs', discountPrice && 'text-red-500')}>
        <span class="font-semibold">${price}</span>
        {#if discount}
          -{discount}%
        {/if}
      </p>
      {#if discountPrice}
        <p class="line-through text-xs">${discountPrice}</p>
      {/if}
      <p class="text-gray-500 text-[0.65rem]">+ 5 Colours</p>
    </div>
  </a>
</li>
