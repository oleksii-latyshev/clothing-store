<script lang="ts">
  import { CarIcon } from 'lucide-svelte';

  import Button from '@/lib/components/ui/button/button.svelte';
  import { Icons } from '@/lib/icons';
  import ProductColors from '@/modules/product/components/product-colors/product-colors.svelte';
  import ProductSizes from '@/modules/product/components/product-sizes/product-sizes.svelte';
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

<svelte:head>
  <title>{product.name}</title>
  <meta name="description" content={product.description} />
</svelte:head>

<div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="grid grid-cols-2 col-span-2 gap-1">
      <img src={product.image} alt={product.image} class="w-full" />
      <img src={product.image} alt={product.image} class="w-full" />
    </div>

    <div class="flex gap-3 flex-col p-5">
      <h1 class="text-2xl font-semibold leading-relaxed">{product.name}</h1>
      <p class="text-lg text-gray-600">${product.price}</p>

      <ProductColors />

      <p class="text-gray-500 text-sm">Brown • Ref: 1572/073/700</p>

      <ProductSizes />

      <Button class="h-fit p-4 font-semibold">
        ADD TO BAG <Icons.chevronDown />
      </Button>

      <p class="text-sm text-gray-500 mt-3">
        Pay in 4 interest-free installments with <strong>PayPal</strong>
      </p>

      <div class="mt-4 border-t pt-4">
        <p class="text-gray-700 font-semibold">Materials, care and source</p>
        <p class="text-gray-700 font-semibold mt-2">Deliveries and returns</p>
      </div>

      <div class="mt-4 p-4 bg-gray-100 rounded-md flex gap-3 items-center">
        <Icons.car class="size-8" />
        <div>
          <p class="text-gray-700">
            <strong>Standard home delivery</strong> <span class="text-green-600">FREE</span>
          </p>
          <p class="text-gray-500 text-sm">You need $57.10 more to be eligible</p>
        </div>
      </div>
    </div>
  </div>
</div>
