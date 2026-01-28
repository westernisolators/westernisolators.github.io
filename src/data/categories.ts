import isolatorImage from '../assets/one-piece_mount.webp';
import brushesImage from '../assets/brushes_hero.webp';
import rubberImage from '../assets/rubber_hero.webp';
import stripBrush from '../assets/brushes_strip.webp';
import rollerBrush from '../assets/brushes_roller.webp';
import spiralBrush from '../assets/brushes_spiral.webp';
import discBrush from '../assets/brushes_disc.webp';
import cupBrush from '../assets/brushes_cup.webp';
import forkliftBrush from '../assets/brushes_forklift_sweeper.webp';

// Isolator Images
// Isolator Images (Slideshow)
import twoPieceMount from '../assets/two-piece_mount.webp';
import threePieceMount from '../assets/three-piece_mount.webp';

// Rubber Extrusion Images
import rubberDProfile from '../assets/rubber_extrusion_d_profile.webp';
import rubberUChannel from '../assets/rubber_extrusion_u_channel.webp';
import rubberGlazing from '../assets/rubber_extrusion_glazing.webp';

// Vibration Pads & Industrial Gaskets
import vibrationPadsHero from '../assets/vibration_pads_hero.webp';
import industrialGasketsHero from '../assets/industrial_gaskets_hero.webp';

export interface Category {
    id: string;
    name: string;
    description: string;
    image: string;
    link: string;
    slideshowImages?: string[];
}

export const categories: Category[] = [
    {
        id: 'isolators',
        name: 'Isolators / Acoustic Mounts',
        description: 'High-performance vibration isolation mounts designed to handle high loads and offer multi-directional flexibility.',
        image: isolatorImage,
        link: '/products/isolators',
        slideshowImages: [
            isolatorImage,
            twoPieceMount,
            threePieceMount
        ]
    },
    {
        id: 'brushes',
        name: 'Brushes',
        description: 'Industrial brushes for shielding, cleaning, sealing, and static dissipation. Custom designed to your specifications.',
        image: brushesImage,
        link: '/products/brushes',
        slideshowImages: [
            stripBrush,
            rollerBrush,
            spiralBrush,
            discBrush,
            cupBrush,
            forkliftBrush
        ]
    },
    {
        id: 'rubber-extrusion',
        name: 'Rubber Extrusion Parts',
        description: 'Custom rubber extrusion parts, seals, and profiles tailored to meet specific application requirements in various materials.',
        image: rubberImage,
        link: '/products/rubber-extrusion',
        slideshowImages: [
            rubberDProfile,
            rubberUChannel,
            rubberGlazing
        ]
    },
    {
        id: 'vibration-pads',
        name: 'Vibration Pads & Anti-Vibration Products',
        description: 'Engineered to absorb and isolate vibrations, protect machinery from shock, and reduce operational noise in industrial environments.',
        image: vibrationPadsHero,
        link: '/products/vibration-pads'
    },
    {
        id: 'industrial-gaskets',
        name: 'Industrial Gaskets & Seals',
        description: 'Reliable sealing solutions for joints, flanges, machinery interfaces, and fluid or air systems in demanding environments.',
        image: industrialGasketsHero,
        link: '/products/industrial-gaskets'
    }
];
