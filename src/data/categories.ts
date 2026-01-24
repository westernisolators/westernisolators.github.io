import isolatorImage from '../assets/one-piece_mount.png';
import brushesImage from '../assets/brushes_hero.png';
import rubberImage from '../assets/rubber_hero.png';

export interface Category {
    id: string;
    name: string;
    description: string;
    image: string;
    link: string;
}

export const categories: Category[] = [
    {
        id: 'isolators',
        name: 'Isolators / Acoustic Mounts',
        description: 'High-performance vibration isolation mounts designed to handle high loads and offer multi-directional flexibility.',
        image: isolatorImage,
        link: '/products/isolators'
    },
    {
        id: 'brushes',
        name: 'Brushes',
        description: 'Industrial brushes for shielding, cleaning, sealing, and static dissipation. Custom designed to your specifications.',
        image: brushesImage,
        link: '/products/brushes'
    },
    {
        id: 'rubber-extrusion',
        name: 'Rubber Extrusion Parts',
        description: 'Custom rubber extrusion parts, seals, and profiles tailored to meet specific application requirements in various materials.',
        image: rubberImage,
        link: '/products/rubber-extrusion'
    }
];
