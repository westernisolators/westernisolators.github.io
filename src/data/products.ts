import centerBondedMountImage from '../assets/center-bounded-mount.png';
import platformMountImage from '../assets/platform-mount.png';
import shearMountImage from '../assets/shear-mount.png';
import antiVibrationBushingImage from '../assets/anti-vibration-bushings.png';
import bumperVibrationImage from '../assets/bumper-vibration-dampener.png';

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
    image: centerBondedMountImage,
    subProducts: [
      {
        id: 'one-piece',
        name: 'One Piece Mounts (WI Series)',
        description: 'The WI Series represents our premier line of one-piece center bonded rubber mounts, featuring precision-bonded rubber to metal construction for superior vibration isolation.',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop',
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
      }
    ]
  },
  {
    id: 'platform-anti-vibration',
    name: 'Platform Anti-Vibration Mounts',
    description: 'Heavy-duty platform mounts designed for large equipment requiring stable, level mounting surfaces with superior vibration control.',
    image: platformMountImage,
    specs: [
      { parameter: 'Load Range', value: '500-10000', unit: 'lbs' },
      { parameter: 'Platform Size', value: '6x6-24x24', unit: 'in' },
      { parameter: 'Height', value: '3-8', unit: 'in' },
      { parameter: 'Deflection', value: '0.25-1.5', unit: 'in' }
    ],
    applications: [
      'Large HVAC Units',
      'Industrial Compressors',
      'Generator Sets',
      'Heavy Equipment Platforms',
      'Machinery Foundations'
    ]
  },
  {
    id: 'shear-rubber',
    name: 'Shear Rubber Mounts',
    description: 'High-performance shear mounts providing exceptional horizontal and vertical vibration control for critical infrastructure applications.',
    image: shearMountImage,
    specs: [
      { parameter: 'Load Range', value: '100-5000', unit: 'lbs' },
      { parameter: 'Shear Stiffness', value: '500-8000', unit: 'lbs/in' },
      { parameter: 'Diameter', value: '2-12', unit: 'in' },
      { parameter: 'Height', value: '1-6', unit: 'in' }
    ],
    applications: [
      'Bridge Bearings',
      'Building Isolation',
      'Seismic Protection',
      'Heavy Machinery',
      'Transportation Equipment'
    ]
  },
  {
    id: 'anti-vibration-bushings',
    name: 'Anti-Vibration Bushings',
    description: 'Precision-engineered bushings for superior rotational and linear motion isolation in advanced mechanical systems.',
    image: antiVibrationBushingImage,
    specs: [
      { parameter: 'Bore Range', value: '0.25-6', unit: 'in' },
      { parameter: 'OD Range', value: '0.5-12', unit: 'in' },
      { parameter: 'Length', value: '0.5-8', unit: 'in' },
      { parameter: 'Durometer', value: '40-90', unit: 'Shore A' }
    ],
    applications: [
      'Automotive Suspension',
      'Control Arms',
      'Engine Mounts',
      'Cab Isolation',
      'Linkage Systems'
    ]
  },
  {
    id: 'bumper-vibration',
    name: 'Bumper Vibration Dampeners',
    description: 'Specialized dampening solutions for impact absorption and vibration control in mobile applications.',
    image: bumperVibrationImage,
    specs: [
      { parameter: 'Load Range', value: '50-2000', unit: 'lbs' },
      { parameter: 'Travel', value: '0.5-4', unit: 'in' },
      { parameter: 'Compression', value: '25-75', unit: '%' },
      { parameter: 'Recovery Time', value: '0.1-2', unit: 'sec' }
    ],
    applications: [
      'Dock Equipment',
      'Material Handling',
      'Conveyor Systems',
      'Impact Protection',
      'Safety Barriers'
    ]
  },
  {
    id: 'cylindrical-vibration',
    name: 'Cylindrical Vibration Isolators',
    description: 'Cylindrical design isolators providing uniform radial stiffness for omnidirectional vibration control.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
    specs: [
      { parameter: 'Load Range', value: '25-1500', unit: 'lbs' },
      { parameter: 'Diameter', value: '1-8', unit: 'in' },
      { parameter: 'Length', value: '1-12', unit: 'in' },
      { parameter: 'Natural Frequency', value: '8-25', unit: 'Hz' }
    ],
    applications: [
      'Electronic Equipment',
      'Small Machinery',
      'Instrument Isolation',
      'Panel Mounting',
      'Aerospace Components'
    ]
  },
  {
    id: 'torsional-vibration',
    name: 'Torsional Vibration Isolators',
    description: 'Specialized isolators designed to control torsional vibrations in rotating machinery and drive systems.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
    specs: [
      { parameter: 'Torque Range', value: '10-5000', unit: 'lb-ft' },
      { parameter: 'Torsional Stiffness', value: '100-10000', unit: 'lb-ft/rad' },
      { parameter: 'Angular Displacement', value: '5-45', unit: 'degrees' },
      { parameter: 'Speed Range', value: '100-3600', unit: 'RPM' }
    ],
    applications: [
      'Engine Coupling',
      'Drive Shafts',
      'Rotating Equipment',
      'Power Transmission',
      'Marine Propulsion'
    ]
  },
  {
    id: 'compressor-plug',
    name: 'Compressor Plug Isolator',
    description: 'Specialized plug-style isolators designed specifically for compressor applications and similar equipment.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
    specs: [
      { parameter: 'Thread Size', value: 'M8-M20', unit: '' },
      { parameter: 'Load Range', value: '20-800', unit: 'lbs' },
      { parameter: 'Stiffness', value: '200-5000', unit: 'lbs/in' },
      { parameter: 'Temperature Range', value: '-40 to 120', unit: '°C' }
    ],
    applications: [
      'Air Compressors',
      'Refrigeration Units',
      'Pumps',
      'Small Engines',
      'Portable Equipment'
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
