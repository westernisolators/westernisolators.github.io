import centerBoundedMountImage from '../assets/center-bounded-mount.png';
import onePieceMountImage from '../assets/one-piece_mount.png';
import twoPieceMountImage from '../assets/two-piece_mount.png';
import threePieceMountImage from '../assets/three-piece_mount.png';
import combinationMountImage from '../assets/combination_mount.png';
import miscellaneousMountImage from '../assets/miscellaneous_mount.png';

export interface ProductSpec {
  parameter: string;
  value: string;
  unit?: string;
}

export interface SubProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  specs: ProductSpec[];
  applications: string[];
  datasheet?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  subProducts?: SubProduct[];
  specs?: ProductSpec[];
  applications?: string[];
  datasheet?: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: 'center-bonded',
    name: 'Center Bonded Rubber Mounts',
    description: 'Premium center bonded rubber mounts engineered for superior vibration isolation across diverse industrial applications. Our precision-manufactured mounts deliver optimal performance and reliability.',
    image: centerBoundedMountImage,
    subProducts: [
      {
        id: 'one-piece',
        name: 'One Piece Mounts (WI Series)',
        description: 'The WI Series represents our premier line of one-piece center bonded rubber mounts, featuring precision-bonded rubber to metal construction for superior vibration isolation.',
        image: onePieceMountImage,
        specs: [
          { parameter: 'Load Range', value: '11-198', unit: 'lbs' },
          { parameter: 'Load Range (Metric)', value: '5-90', unit: 'kg' },
          { parameter: 'Stiffness Range', value: '121-1454', unit: 'lbs/in' },
          { parameter: 'Stiffness Range (Metric)', value: '5.4-64.7', unit: 'kN/m' },
          { parameter: 'Hardness', value: '45', unit: 'Shore A' },
          { parameter: 'Height Range', value: '12-40', unit: 'mm' },
          { parameter: 'Diameter Range', value: '19-45', unit: 'mm' },
          { parameter: 'Thread Range', value: 'M6-M12', unit: '' },
          { parameter: 'Model Count', value: '12', unit: 'variants' }
        ],
        applications: [
          'HVAC Equipment',
          'Compressors and Pumps',
          'Generators and Motors',
          'Industrial Machinery',
          'Marine Equipment',
          'Automotive Applications',
          'Electronic Equipment',
          'Laboratory Instruments'
        ]
      },
      {
        id: 'two-piece',
        name: 'Two Piece Mounts',
        description: 'Advanced dual-component design offering enhanced flexibility and superior performance characteristics for demanding applications.',
        image: twoPieceMountImage,
        specs: [
          { parameter: 'Load Range', value: '50-2500', unit: 'lbs' },
          { parameter: 'Stiffness', value: '2000-20000', unit: 'lbs/in' },
          { parameter: 'Type', value: '1-2' },
          { parameter: 'Height', value: '1.25-3.50', unit: 'in' },
          { parameter: 'Diameter', value: '1.00-2.50', unit: 'in' }
        ],
        applications: [
          'Marine Equipment',
          'Automotive Applications',
          'Heavy Machinery',
          'Power Generation'
        ]
      },
      {
        id: 'three-piece',
        name: 'Three Piece Mounts',
        description: 'Premium three-component isolation system designed for complex vibration control requirements in precision equipment.',
        image: threePieceMountImage,
        specs: [
          { parameter: 'Load Range', value: '100-5000', unit: 'lbs' },
          { parameter: 'Stiffness', value: '3000-30000', unit: 'lbs/in' },
          { parameter: 'Type', value: '1-3' },
          { parameter: 'Height', value: '1.50-4.00', unit: 'in' },
          { parameter: 'Diameter', value: '1.25-3.00', unit: 'in' }
        ],
        applications: [
          'Precision Equipment',
          'Laboratory Instruments',
          'Sensitive Electronics',
          'Optical Systems'
        ]
      },
      {
        id: 'combination',
        name: 'Combination Mounts',
        description: 'Innovative hybrid design combining multiple isolation technologies for exceptional performance in the most demanding environments.',
        image: combinationMountImage,
        specs: [
          { parameter: 'Load Range', value: '200-8000', unit: 'lbs' },
          { parameter: 'Stiffness', value: '5000-40000', unit: 'lbs/in' },
          { parameter: 'Type', value: '1-3' },
          { parameter: 'Height', value: '2.00-5.00', unit: 'in' },
          { parameter: 'Diameter', value: '1.50-4.00', unit: 'in' }
        ],
        applications: [
          'High-Performance Machinery',
          'Aerospace Applications',
          'Critical Infrastructure',
          'Research Equipment'
        ]
      },
      {
        id: 'miscellaneous',
        name: 'Miscellaneous',
        description: 'Use miscellaneous vibration dampeners when the other types of mounts previously mentioned won\'t work for you. Isolate your vibration applications by using one of our other customized center-bonded mounts. If you do not find what you need, let our R & D team design a custom solution to solve your problem.',
        image: miscellaneousMountImage,
        specs: [
          { parameter: 'Load Range', value: 'Custom', unit: '' },
          { parameter: 'Stiffness', value: 'Custom', unit: '' },
          { parameter: 'Type', value: 'Custom' },
          { parameter: 'Height', value: 'Custom', unit: '' },
          { parameter: 'Diameter', value: 'Custom', unit: '' }
        ],
        applications: [
          'Custom Applications',
          'Specialized Equipment',
          'Unique Requirements',
          'R&D Projects'
        ]
      }
    ]
  }
];

export const getProductCategory = (id: string): ProductCategory | undefined => {
  return productCategories.find(category => category.id === id);
};

export const getSubProduct = (categoryId: string, subProductId: string): SubProduct | undefined => {
  const category = getProductCategory(categoryId);
  if (!category || !category.subProducts) return undefined;
  return category.subProducts.find(sub => sub.id === subProductId);
};
