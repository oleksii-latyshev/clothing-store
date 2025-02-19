import type { FullscreenSlide } from '@/lib/components/fullscreen-slider/types';
import type { CategoryPreview } from '@/modules/category/components/categories-preview/types';
import { CATEGORIES, CATEGORY_SLUGS } from '@/modules/category/constants';

export const MAIN_PAGE_FULLSCREEN_SLIDES: FullscreenSlide[] = [
	{
		name: 'new',
		image: 'https://i.pinimg.com/736x/80/b9/64/80b9643b86441341618a2261fb0e1fc2.jpg',
		slug: '/clothes/new'
	},
	{
		name: 'basics',
		image: 'https://i.pinimg.com/736x/80/b9/64/80b9643b86441341618a2261fb0e1fc2.jpg',
		slug: '/clothes'
	}
];

// TODO: Not the best way to do this, but I will return to this later (I hope =))
export const CATEGORIES_TO_PREVIEW: CategoryPreview[] = [
	{
		name: CATEGORIES.outwear,
		slug: CATEGORY_SLUGS[CATEGORIES.outwear],
		image:
			'https://static.bershka.net/assets/public/25e0/4aa4/db7f49428963/844fa6a0ed42/slide_man_jackets_-1/slide_man_jackets_-1.jpg?ts=1738851749871&w=375&ts=20250216020703'
	},
	{
		name: CATEGORIES.jeans,
		slug: CATEGORY_SLUGS[CATEGORIES.jeans],
		image:
			'https://static.bershka.net/assets/public/df61/de8c/69b240e39edd/9cd9f2e24bc9/slide_man_jeans_-1/slide_man_jeans_-1.jpg?ts=1738851750572&w=375&ts=20250216020703'
	},
	{
		name: CATEGORIES.sweatshirtsAndHoodies,
		slug: CATEGORY_SLUGS[CATEGORIES.sweatshirtsAndHoodies],
		image:
			'https://static.bershka.net/assets/public/6946/f190/489643a5855e/352c4e11e4bf/slide_man_jersey_-1/slide_man_jersey_-1.jpg?ts=1738851751195&w=375&ts=20250216020703'
	},
	{
		name: CATEGORIES.tShirts,
		slug: CATEGORY_SLUGS[CATEGORIES.tShirts],
		image:
			'https://static.bershka.net/assets/public/081b/b165/393c4d0bb28f/5c01eeb95b85/slide_man_tshirts_-1/slide_man_tshirts_-1.jpg?ts=1738851753276&w=375&ts=20250216020703'
	},
	{
		name: CATEGORIES.pants,
		slug: CATEGORY_SLUGS[CATEGORIES.pants],
		image:
			'https://static.bershka.net/assets/public/0872/610c/26c5486fa900/88b4cae8c939/slide_man_chandal_-1/slide_man_chandal_-1.jpg?ts=1738851748356&w=375&ts=20250216020703'
	},
	{
		name: CATEGORIES.capsAndHats,
		slug: CATEGORY_SLUGS[CATEGORIES.capsAndHats],
		image:
			'https://static.bershka.net/assets/public/9948/7287/22924a2b97fa/b494b1801622/slide_man_accs_-1/slide_man_accs_-1.jpg?ts=1738851746006&w=375&ts=20250216020703'
	}
];
