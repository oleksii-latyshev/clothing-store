<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';
	import * as Carousel from '@/lib/components/ui/carousel';
	import { TIME_IN_MILLISECONDS } from '@/lib/constants';
	import type { FullscreenSliderProps } from '@/lib/components/fullscreen-slider/types';
	import { cn } from '@/lib/utils';

	let { slides, class: className, ...props }: FullscreenSliderProps = $props();

	const autoplayPlugin = Autoplay({
		delay: TIME_IN_MILLISECONDS.second * 5,
		stopOnInteraction: true
	});
</script>

<Carousel.Root
	opts={{
		loop: true,
		align: 'center'
	}}
	plugins={[autoplayPlugin]}
	class={cn('w-full', className)}
	onmouseenter={autoplayPlugin.stop}
	onmouseleave={autoplayPlugin.reset}
	{...props}
>
	<Carousel.Content class="h-full">
		{#each slides as { name, image, slug } (slug)}
			<Carousel.Item>
				<div
					class="relative h-screen overflow-clip bg-cover bg-no-repeat p-1 text-white md:h-[80vh]"
					style:background-image="url({image})"
				>
					<div
						class="ms:px-10 absolute right-1/2 bottom-0 z-10 mb-14 translate-x-1/2 px-5 md:mb-20"
					>
						<h3 class="mb-1 text-2xl font-bold md:mb-3 md:text-6xl">{name}</h3>
					</div>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous class="absolute top-1/2 left-2 z-10 cursor-pointer" />
	<Carousel.Next class="absolute top-1/2 right-2 z-10 cursor-pointer" />
	<Carousel.Dots class="absolute right-1/2 bottom-0 translate-x-1/2 md:mb-12" />
</Carousel.Root>
