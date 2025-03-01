<script lang="ts">
  import { cn } from '@/lib/utils';
  import type { CategoriesPreviewProps } from '@/modules/category/components/categories-preview/types';

  const { categories, class: className, ...rest }: CategoriesPreviewProps = $props();
</script>

<ul
  class={cn('grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6', className)}
  {...rest}
>
  {#each categories as { name, slug, image } (slug)}
    <li class="group relative overflow-hidden bg-gray-100">
      <a href="/categories/{slug}" class="block h-full w-full">
        <img
          src={image}
          alt={name}
          class="h-auto w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-75"
        />
        <div class="bg-opacity-40 absolute inset-0 flex items-center justify-center p-2">
          <span class="text-center text-xl font-bold text-white uppercase lg:text-2xl">{name}</span>
        </div>
      </a>
    </li>
  {/each}
</ul>
