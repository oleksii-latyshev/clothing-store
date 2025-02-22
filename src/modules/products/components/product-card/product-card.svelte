<script lang="ts">
	import type { ProductCardProps } from '@/modules/products/components/product-card/types';

	const { id, name, image }: ProductCardProps = $props();
</script>

<li class="group relative overflow-hidden bg-gray-100">
	<a href={`/products/${id}`} class="block h-full w-full">
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
