<script lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import { getEmblaContext } from './context.js';
	import { cn } from '@/lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();

	const emblaCtx = getEmblaContext();
</script>

<!-- TODO: find best way to customize buttons (render props I guess not bad option, but I don't sure) -->

<div class={cn('flex gap-2', className)} {...restProps}>
	{#each emblaCtx.scrollSnaps as _, index (index)}
		<button
			class={cn('h-3 w-3 cursor-pointer  rounded-full bg-white/30 transition-all', {
				'w-8 rounded-lg bg-white': emblaCtx.selectedIndex === index
			})}
			onclick={() => emblaCtx.scrollTo(index)}
		>
			<span class="sr-only">{index} slide</span>
		</button>
	{/each}
</div>
