export const CATEGORIES = {
  outwear: 'Outwear',
  jeans: 'Jeans',
  sweatshirtsAndHoodies: 'Sweatshirts & Hoodies',
  tShirts: 'T-Shirts',
  pants: 'Pants',
  capsAndHats: 'Caps & Hats',
  shoes: 'Shoes',
} as const;

export const CATEGORY_SLUGS = {
  [CATEGORIES.outwear]: 'outwear',
  [CATEGORIES.jeans]: 'jeans',
  [CATEGORIES.sweatshirtsAndHoodies]: 'sweatshirts-and-hoodies',
  [CATEGORIES.tShirts]: 't-shirts',
  [CATEGORIES.pants]: 'pants',
  [CATEGORIES.capsAndHats]: 'caps-and-hats',
  [CATEGORIES.shoes]: 'shoes',
} as const;
