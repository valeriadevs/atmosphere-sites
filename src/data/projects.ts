export interface Project {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  style: string;
  restaurantType: string;
  designGoal: string;
  image: string;
  menuImage: string;
  atmosphereImage: string;
  liveUrl: string;
  features: string[];
  placeholderGradient?: string;
  menuGradient?: string;
  atmosphereGradient?: string;
}

export const projects: Project[] = [
  {
    slug: 'echelon',
    title: 'Echelon',
    category: 'Ultra-Premium Fine Dining',
    tagline: 'The pinnacle of dining — dark, commanding, and absolutely exclusive.',
    description: 'A digital masterpiece for an ultra-premium fine dining destination where every detail whispers exclusivity. Echelon is where culinary art meets architectural darkness — a restaurant for those who expect nothing less than perfection.',
    style: 'Dark Luxury',
    restaurantType: 'Ultra-Premium Fine Dining',
    designGoal: 'Evoke absolute exclusivity through dark, commanding aesthetics',
    image: '/project/hero-echelon.jpg',
    menuImage: '/project/menu-echelon.jpg',
    atmosphereImage: '/project/atm-echelon.jpg',
    liveUrl: 'https://www.echelon-dining.shop/',
    // placeholderGradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 40%, #16213e 70%, #0f3460 100%)',
    // menuGradient: 'linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #2d1b3d 100%)',
    // atmosphereGradient: 'linear-gradient(135deg, #0a0a0a 0%, #1c1c2e 60%, #0f3460 100%)',
    features: [
      'Dark, immersive visual identity',
      'Exclusive reservation-only booking system',
      'Tasting menu showcase with wine pairings',
      'Private dining and event inquiry system',
    ],
  },
  {
    slug: 'maison-verre',
    title: 'Maison Verre',
    category: 'Elegant Dining',
    tagline: 'Classy, light-filled fine dining website designed to feel calm and refined.',
    description: 'A sophisticated digital presence for an upscale French restaurant, where every element speaks to understated luxury and culinary artistry.',
    style: 'Elegant',
    restaurantType: 'Fine Dining',
    designGoal: 'Create a sense of calm refinement that mirrors the restaurant\'s atmosphere',
    image: '/projects/hero-maison.jpg',
    menuImage: '/projects/menu-maison.jpg',
    atmosphereImage: '/projects/atmosphere-maison.jpg',
    liveUrl: 'https://www.maison-verre.shop/',
    features: [
      'Visual identity with custom typography',
      'Intuitive reservation system',
      'Menu-focused layout with seasonal updates',
      'Mobile-first responsive design',
    ],
  },
  {
    slug: 'iron-ember',
    title: 'Iron Ember',
    category: 'Grill & Barbecue',
    tagline: 'Bold, smoky, and unapologetically confident. A grill house with personality.',
    description: 'A striking website for a modern barbecue restaurant that celebrates fire, smoke, and the primal joy of grilled cuisine.',
    style: 'Bold',
    restaurantType: 'Grill & Barbecue',
    designGoal: 'Capture the warmth of fire and the boldness of the menu',
    image: '/projects/hero-ironember.jpg',
    menuImage: '/projects/menu-ironember.jpg',
    atmosphereImage: '/projects/atm-ironember.jpg',
    liveUrl: 'https://www.ironemberflame.shop/',
    features: [
      'Dark, atmospheric visual design',
      'Dynamic menu presentation',
      'Story-driven content sections',
      'Integrated online ordering',
    ],
  },
  {
    slug: 'saffron-street',
    title: 'Saffron Street',
    category: 'Family Dining Konoba',
    tagline: 'Fun, vibrant, and welcoming — a modern family konoba bursting with flavor.',
    description: 'A lively digital home for a modern family dining konoba that celebrates togetherness, great food, and the joy of sharing a table. Saffron Street is where comfort meets contemporary style.',
    style: 'Vibrant',
    restaurantType: 'Family Dining Konoba',
    designGoal: 'Radiate warmth, fun, and modern family-friendly energy',
    image: '/project/hero-saffron.jpg',
    menuImage: '/project/menu-saffron.jpg',
    atmosphereImage: '/project/atm-saffron.jpg',
    liveUrl: 'https://www.saffronstreet.online/',
    // placeholderGradient: 'linear-gradient(135deg, #f2994a 0%, #f2c94c 40%, #eb5757 70%, #f2994a 100%)',
    // menuGradient: 'linear-gradient(135deg, #e8a838 0%, #f2c94c 50%, #f09819 100%)',
    // atmosphereGradient: 'linear-gradient(135deg, #f2994a 0%, #eb5757 50%, #f2c94c 100%)',
    features: [
      'Warm, colorful visual identity',
      'Family-friendly menu presentation',
      'Event and celebration booking',
      'Interactive daily specials board',
    ],
  },
  {
    slug: 'obsidian-ivory',
    title: 'Obsidian & Ivory',
    category: 'Modern Luxury Dining',
    tagline: 'Ultra-modern luxury dining. Minimal. Refined. Unforgettable.',
    description: 'A contemporary fine dining experience translated into digital form, where negative space and precision create an atmosphere of exclusivity.',
    style: 'Luxury',
    restaurantType: 'Contemporary Fine Dining',
    designGoal: 'Embody modern luxury through restraint and precision',
    image: '/projects/hero-obsivo.jpg',
    menuImage: '/projects/menu-obsivo.jpg',
    atmosphereImage: '/projects/atm-obsivo.jpg',
    liveUrl: 'https://www.obsidian-ivory.online/',
    features: [
      'Monochromatic design system',
      'Cinematic visual storytelling',
      'Private dining inquiry system',
      'Chef\'s table experience showcase',
    ],
  },
  {
    slug: 'willow-crumb',
    title: 'Willow & Crumb',
    category: 'Warm Neighborhood Café',
    tagline: 'Warm, homely, and inviting. A neighborhood café that feels like home.',
    description: 'A welcoming digital space for a beloved local café, designed to evoke the warmth of freshly baked goods and friendly conversation.',
    style: 'Warm',
    restaurantType: 'Café & Bakery',
    designGoal: 'Create a sense of warmth and belonging',
    image: '/projects/hero-wilcu.jpg',
    menuImage: '/projects/menu-wilcu.jpg',
    atmosphereImage: '/projects/atm-wilcu.jpg',
    liveUrl: 'https://www.willowcrumb.online/',
    features: [
      'Warm, inviting color palette',
      'Daily specials integration',
      'Local community highlights',
      'Easy-to-browse menu design',
    ],
  },
  {
    slug: 'noire-cellar',
    title: 'Noire Cellar',
    category: 'Premium Winery',
    tagline: 'Deep, sophisticated, and steeped in tradition — a winery of distinction.',
    description: 'An elegant digital experience for a premium winery, designed to evoke the depth of aged wine and the richness of vineyard traditions. Noire Cellar speaks to connoisseurs who appreciate craft and heritage.',
    style: 'Sophisticated',
    restaurantType: 'Premium Winery',
    designGoal: 'Convey depth, heritage, and the art of fine winemaking',
    image: '/projects/hero-noire.jpg',
    menuImage: '/projects/menu-noire.jpg',
    atmosphereImage: '/projects/atm-noire.jpg',
    liveUrl: 'https://www.noirecellar.shop/',
    // placeholderGradient: 'linear-gradient(135deg, #1a0a0a 0%, #3d0c02 40%, #722f37 70%, #2c1a1a 100%)',
    // menuGradient: 'linear-gradient(135deg, #1a0a0a 0%, #4a1a2e 50%, #3d0c02 100%)',
    // atmosphereGradient: 'linear-gradient(135deg, #2c1a1a 0%, #722f37 50%, #1a0a0a 100%)',
    features: [
      'Rich, wine-inspired color palette',
      'Virtual vineyard tour experience',
      'Wine collection showcase with tasting notes',
      'Private tasting reservation system',
    ],
  },
];

// Projects to show on homepage "Recent Projects" section
export const featuredSlugs = ['echelon', 'maison-verre', 'iron-ember', 'saffron-street'];
export const featuredProjects = projects.filter(p => featuredSlugs.includes(p.slug));
