import type { CarouselProps } from '@/lib/components/ui/carousel/context';
import type { Image, Name, Slug } from '@/lib/types/keys';

export type FullscreenSlide = Name & Image & Slug;

export type FullscreenSliderProps = {
	slides: FullscreenSlide[];
} & CarouselProps;
