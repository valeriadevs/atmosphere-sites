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
  liveUrl: string; // Add your live site URL here
  features: string[];
}

export const projects: Project[] = [
  {
    slug: 'maison-verre',
    title: 'Maison Verre',
    category: 'Elegant Dining',
    tagline: 'Classy, light-filled fine dining website designed to feel calm and refined.',
    description: 'A sophisticated digital presence for an upscale French restaurant, where every element speaks to understated luxury and culinary artistry.',
    style: 'Elegant',
    restaurantType: 'Fine Dining',
    designGoal: 'Create a sense of calm refinement that mirrors the restaurant\'s atmosphere',
    image: '/projects/maison-verre.jpg',
    menuImage: '/projects/maison-verre-menu.jpg',
    atmosphereImage: '/projects/maison-verre-atmosphere.jpg',
    liveUrl: '#https://www.maison-verre.shop/', 
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
    image: '/projects/iron-ember.jpg',
    menuImage: '/projects/iron-ember-menu.jpg',
    atmosphereImage: '/projects/iron-ember-atmosphere.jpg',
    liveUrl: '#https://www.ironemberflame.shop/',
    features: [
      'Dark, atmospheric visual design',
      'Dynamic menu presentation',
      'Story-driven content sections',
      'Integrated online ordering',
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
    image: '/projects/obsidian-ivory.jpg',
    menuImage: '/projects/obsidian-ivory-menu.jpg',
    atmosphereImage: '/projects/obsidian-ivory-atmosphere.jpg',
    liveUrl: '#https://www.obsidian-ivory.online/',
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
    image: '/projects/willow-crumb.jpg',
    menuImage: '/projects/willow-crumb-menu.jpg',
    atmosphereImage: '/projects/willow-crumb-atmosphere.jpg',
    liveUrl: '#https://www.willowcrumb.online/',
    features: [
      'Warm, inviting color palette',
      'Daily specials integration',
      'Local community highlights',
      'Easy-to-browse menu design',
    ],
  },
];
