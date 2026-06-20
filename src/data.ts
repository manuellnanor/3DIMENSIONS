/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Service, ProcessStep, Award, MediaItem } from './types';
import heroImage from './assets/images/kaave_academy_hero_1781951900307.jpg';
import bawlyHouseImage from './assets/images/bawly_modern_house_1781951919922.jpg';
import hollisHouseImage from './assets/images/hollis_passive_house_1781951938773.jpg';
import artGalleryImage from './assets/images/gg_art_gallery_1781951957247.jpg';
import kofiTiboriImage from './assets/images/kofi-tibori.jpg';
import sketchingImage from './assets/images/architect_sketching_hand_1781951996756.jpg';
import bestBuildsBannerImage from './assets/images/best_builds_banner_1781952017146.jpg';
import sustainableFacadeImage from './assets/images/sustainable_architecture_1781952037762.jpg';

export const IMAGES = {
  hero: heroImage,
  bawlyHouse: bawlyHouseImage,
  hollisHouse: hollisHouseImage,
  artGallery: artGalleryImage,
  kofiTibori: kofiTiboriImage,
  sketching: sketchingImage,
  bestBuildsBanner: bestBuildsBannerImage,
  sustainableFacade: sustainableFacadeImage
};

export const PROJECTS: Project[] = [
  {
    id: 'kaave-academy',
    title: 'Kaave Academy',
    category: 'Institutional / Educational',
    location: 'HELSINKI, FINLAND',
    image: IMAGES.hero,
    year: 2024,
    description: 'A multi-award winning wooden-slatted campus promoting wellness and light.',
    details: 'The Kaave Academy project is designed as an ecological monument—maximizing solar capture during harsh Nordic seasons. Built primarily from sustainable CLT panels and featuring a distinctive exterior louvre screen of heat-treated pine, it stands as our flagship example of integrating micro-climate architecture into institutional contexts.',
    stats: [
      { label: 'Footprint', value: '3,200 sq m' },
      { label: 'Energy Class', value: 'A++ Passive' },
      { label: 'Solar Capture', value: '45% Grid Feed-in' }
    ],
    awards: ['Sustainia Design Gold 2024', 'Nordic Timber Architecture Prize']
  },
  {
    id: 'bawly-house',
    title: 'Bawly Modern House',
    category: 'Residential',
    location: 'ACCRA, GHANA',
    image: IMAGES.bawlyHouse,
    year: 2023,
    description: 'A structural masterpiece blending raw concrete framing with massive redwood paneling.',
    details: 'Set within Accra’s warm coastal climate, the Bawly House utilizes cantilevered structural elements to extend living spaces outward. Floor-to-ceiling glass systems slide entirely into wall cavities, dissolving the boundary between tropical breezes and the rich timber and raw concrete interior canvases.',
    stats: [
      { label: 'Land Area', value: '7,500 sq ft' },
      { label: 'Rooms', value: '5 Bed, 6 Bath' },
      { label: 'Materiality', value: 'Redwood & Board-form Concrete' }
    ],
    awards: ['Ghana Property Awards — Residential Design Nominee']
  },
  {
    id: 'hollis-house',
    title: 'Hollis Passive House',
    category: 'Residential',
    location: 'ABURI, GHANA',
    image: IMAGES.hollisHouse,
    year: 2022,
    description: 'Ultra-low emission residential concept incorporating active solar capture & geothermal loops.',
    details: 'An urban sanctuary crafted with a tight airtight thermal envelope. Hollis Passive House utilizes triple-glazed German smart ventilation, resulting in 90% reduction in heating and cooling energy needs while retaining an immaculate, sculpted, museum-like white stucco facade.',
    stats: [
      { label: 'Energy Cost', value: '$8/month' },
      { label: 'Airtightness', value: '0.45 ACH50' },
      { label: 'Water Loop', value: 'Greywater Recirculation' }
    ],
    awards: ['Sustainable Builder Top Award 2022']
  },
  {
    id: 'gg-art-gallery',
    title: 'GG Art Gallery',
    category: 'Commercial / Cultural',
    location: 'VANCOUVER, BRITISH COLUMBIA',
    image: IMAGES.artGallery,
    year: 2023,
    description: 'A striking structural clay-brick gallery playing with daylight & volumetric asymmetry.',
    details: 'GG Art Gallery combines custom-manufactured dark red ironspot brickwork with raw brushed steel details. Inside, custom ceiling skylights are structured into a north-facing light scoop system to distribute pristine, glare-free indirect sunlight over broad exhibitions.',
    stats: [
      { label: 'Gallery Rooms', value: '6 Curated Zones' },
      { label: 'Exhibition Area', value: '18,000 sq ft' },
      { label: 'Lumen Optimization', value: 'Fully Guided Daylight Scoop' }
    ],
    awards: ['Ghana Property Awards — Cultural Design Grand Prize']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'houses',
    title: 'Houses',
    description: 'To create beautiful, healthy buildings to empower families, uplift communities, and improve our living world.',
    svgPath: 'M 4 24 L 20 8 L 36 24 M 10 24 L 10 36 L 30 36 L 30 24',
    highlights: ['Single-family Custom Residences', 'Zero-Net Energy Buildings', 'Coastal & Cliffside Construction']
  },
  {
    id: 'renovation',
    title: 'Renovation',
    description: '3DIMENSIONAL strives toward a socially-just and equitable world where buildings positively contribute to the environment.',
    svgPath: 'M 4 16 L 20 4 L 36 16 M 12 16 L 12 28 M 28 16 L 28 28 M 8 36 L 32 36',
    highlights: ['Adaptive Heritage Reuse', 'Thermal Envelope Retrofitting', 'Structural Strengthening']
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    description: 'We honor the profound and nuanced ways humans and the environment interact with, use, and are shaped by our work.',
    svgPath: 'M 8 16 L 32 16 L 32 28 L 8 28 Z M 16 28 L 16 36 M 24 28 L 24 36 M 4 36 L 36 36',
    highlights: ['Bespoke Millwork & Built-ins', 'Natural Light Diffusion Systems', 'Eco-certified Finishes & Textures']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'listen-collaborate',
    title: 'Listen & Collaborate',
    description: 'The success of 3DIMENSIONAL projects is rooted in strong relationships and true collaboration. Through our process, we learn how our clients live day to day and translate those insights into a tailored vision—designing homes that reflect and support their lives.',
    points: [
      'Comprehensive client briefing workshops',
      'Site environmental assessment & solar mapping',
      'Budget alignment & core functional scoping'
    ]
  },
  {
    id: 'envision-design',
    title: 'Envision & Design',
    description: 'We translate observations into creative concepts, developing 3D visualizations, material palette mockups, and architectural drafts. Throughout this step, we run thermal simulations to ensure passive carbon neutrality is locked into the design DNA early on.',
    points: [
      'BIM-modeling & realistic immersive 3D renders',
      'Structural ventilation & daylight simulations',
      'Curated physical material board review'
    ]
  },
  {
    id: 'partner-build',
    title: 'Partner & Build',
    description: 'Translating design to physical concrete and cedar requires unwavering quality control. We coordinate directly with top-tier premium builders, structural engineers, and craftsmen to ensure execution matches our meticulous millimetric standards.',
    points: [
      'Meticulous construction detailing documentation',
      'Frequent physical site assembly inspections',
      'Detailed commissioning & post-occupancy evaluation'
    ]
  }
];

export const AWARDS: Award[] = [
  { id: '1', year: 2025, title: 'Interior studio of the year', category: 'Global Architecture League' },
  { id: '2', year: 2025, title: 'Modern Luxury Interiors studio of the year', category: 'Ghana Institute of Architects' },
  { id: '3', year: 2025, title: 'Best luxury design', category: 'International Design Circle' },
  { id: '4', year: 2026, title: 'Residential design interior design awards', category: 'AD-Architectural Digest' },
  { id: '5', year: 2026, title: 'Residential interior design of the year', category: 'Elite Homes Association' }
];

export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: 'media-1',
    category: 'Media',
    title: 'How 3DIMENSIONAL became a model for affordable, sustainable living',
    image: IMAGES.sustainableFacade,
    date: 'March 14, 2026',
    readTime: '4 min read'
  },
  {
    id: 'media-2',
    category: 'Announcements',
    title: '2025 Design Awards Recap: Three Silver Medals and One Grand Prize',
    image: IMAGES.bestBuildsBanner,
    date: 'February 28, 2025',
    readTime: '6 min read'
  },
  {
    id: 'media-3',
    category: 'Media',
    title: 'Industrial Luxury Style, explained by 3DIMENSIONAL Design Studio',
    image: IMAGES.sketching,
    date: 'January 10, 2026',
    readTime: '5 min read'
  }
];
