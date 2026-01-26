import onePieceMountImage from '../assets/one-piece_mount.webp';
import twoPieceMountImage from '../assets/two-piece_mount.webp';
import threePieceMountImage from '../assets/three-piece_mount.webp';
import combinationMountImage from '../assets/combination_mount.webp';
import miscellaneousMountImage from '../assets/miscellaneous_mount.webp';

export interface SimpleProduct {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const products: SimpleProduct[] = [
  {
    id: 'one-piece',
    name: 'One Piece Mounts (WI Series)',
    description: 'One-piece anti-vibration mounts are engineered to handle high loads while offering multi-directional flexibility.',
    image: onePieceMountImage,
  },
  {
    id: 'two-piece',
    name: 'Two Piece Mounts',
    description: 'Advanced dual-component design offering enhanced flexibility and superior performance characteristics for demanding applications.',
    image: twoPieceMountImage,
  },
  {
    id: 'three-piece',
    name: 'Three Piece Mounts',
    description: 'Premium three-component isolation system designed for complex vibration control requirements in precision equipment.',
    image: threePieceMountImage,
  },
  {
    id: 'combination',
    name: 'Combination Mounts',
    description: 'Innovative hybrid design combining multiple isolation technologies for exceptional performance in the most demanding environments.',
    image: combinationMountImage,
  },
  {
    id: 'miscellaneous',
    name: 'Miscellaneous Mounts',
    description: 'Customized mounting solutions designed to accommodate a wide range of applications and custom requirements.',
    image: miscellaneousMountImage,
  }
];
