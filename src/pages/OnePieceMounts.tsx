import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import onePieceType1 from '../assets/one-piece_type1.png';
import onePieceType2 from '../assets/one-piece_type2.png';

interface MountData {
  item: string;
  type: string;
  dimensions: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
    F: string;
    plateID: string;
    plateThickness: string;
  };
}

const OnePieceMounts = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Parse CSV data into structured format - Complete dataset from CSV
  const mountsData: MountData[] = [
    // 2100 Series
    { item: 'WI-2100', type: '1', dimensions: { A: '1.09', B: '0.4', C: '0.81', D: '0.62', E: '0.22', F: '1.02', plateID: '0.75', plateThickness: '0.31' } },
    
    // 2104 Series
    { item: 'WI-2104', type: '1', dimensions: { A: '1', B: '0.34', C: '0.75', D: '0.32', E: '0.19', F: '0.43', plateID: '0.74', plateThickness: '0.14' } },
    
    // 2105 Series
    { item: 'WI-2105', type: '1', dimensions: { A: '1', B: '0.38', C: '0.75', D: '0.44', E: '0.19', F: '0.55', plateID: '0.74', plateThickness: '0.25' } },

    // 2110 Series
    { item: 'WI-2110', type: '1', dimensions: { A: '1.09', B: '0.38', C: '0.76', D: '0.69', E: '0.21', F: '0.76', plateID: '0.74', plateThickness: '0.5' } },
    
    // 2112 Series
    { item: 'WI-2112', type: '1', dimensions: { A: '1.09', B: '0.33', C: '0.81', D: '0.62', E: '0.22', F: '0.75', plateID: '0.75', plateThickness: '0.25' } },
    
    // 2114 Series
    { item: 'WI-2112', type: '1', dimensions: { A: '1.26', B: '0.39', C: '0.76', D: '1.59', E: '0.31', F: '1.71', plateID: '0.79', plateThickness: '1.25' } },
    
    // 2115 Series
    { item: 'WI-2115', type: '1', dimensions: { A: '1.09', B: '0.39', C: '0.76', D: '0.69', E: '0.21', F: '0.92', plateID: '0.74', plateThickness: '0.5' } },
    
    // 2116 Series
    { item: 'WI-2116', type: '1', dimensions: { A: '1.26', B: '0.39', C: '0.76', D: '0.98', E: '0.26', F: '0.98', plateID: '0.74', plateThickness: '' } },
    
    // 2118 Series
    { item: 'WI-2118', type: '1', dimensions: { A: '1.25', B: '0.41', C: '0.95', D: '1.07', E: '0.55', F: '1.44', plateID: '0.9', plateThickness: '0.38' } },
    
    // 2118A Series
    { item: 'WI-2118A', type: '2', dimensions: { A: '1.25', B: '0.41', C: '1.25', D: '1.07', E: '0.61', F: '1.44', plateID: '1.38', plateThickness: '' } },
    
    // 2119 Series
    { item: 'WI-2119', type: '1', dimensions: { A: '1.27', B: '0.4', C: '0.81', D: '0.83', E: '0.35', F: '0.97', plateID: '0.78', plateThickness: '0.5' } },
    
    // 2120 Series
    { item: 'WI-2120', type: '1', dimensions: { A: '1.57', B: '0.51', C: '1.22', D: '1.2', E: '0.32', F: '1.32', plateID: '1.2', plateThickness: '0.88' } },
    
    // 2121 Series
    { item: 'WI-2121', type: '1', dimensions: { A: '1.26', B: '0.39', C: '0.75', D: '1.99', E: '0.31', F: '2.11', plateID: '0.79', plateThickness: '1.64' } },
    
    // 2124 Series
    { item: 'WI-2124', type: '1', dimensions: { A: '1.25', B: '0.41', C: '0.95', D: '0.93', E: '0.5', F: '1.3', plateID: '0.9', plateThickness: '0.32' } },
    
    // 2130 Series
    { item: 'WI-2130', type: '1', dimensions: { A: '1.75', B: '0.52', C: '1.24', D: '1', E: '0.41', F: '1.25', plateID: '1.12', plateThickness: '0.38' } },
    
    // 2150 Series
    { item: 'WI-2150', type: '1', dimensions: { A: '2', B: '0.53', C: '1.38', D: '1.45', E: '0.75', F: '2', plateID: '1.25', plateThickness: '0.5' } },
    
    // 2160 Series
    { item: 'WI-2160', type: '1', dimensions: { A: '2', B: '0.53', C: '1.35', D: '1.31', E: '0.53', F: '1.62', plateID: '1.25', plateThickness: '0.62' } },
    
    // 2170 Series
    { item: 'WI-2170', type: '1', dimensions: { A: '2', B: '0.52', C: '1.27', D: '1', E: '0.52', F: '1.3', plateID: '1.2', plateThickness: '0.25' } },
    
    // 2180 Series
    { item: 'WI-2180', type: '1', dimensions: { A: '2', B: '0.53', C: '1.34', D: '1', E: '0.5', F: '1.24', plateID: '1.3', plateThickness: '0.25' } },
    
    // 2210 Series
    { item: 'WI-2210', type: '1', dimensions: { A: '2', B: '0.64', C: '1.33', D: '1.38', E: '0.53', F: '1.6', plateID: '1.25', plateThickness: '0.62' } },
    
    // 2220 Series
    { item: 'WI-2220', type: '1', dimensions: { A: '2', B: '0.53', C: '1.35', D: '1.38', E: '0.53', F: '1.64', plateID: '1.25', plateThickness: '0.62' } },
    
    // 2222A Series
    { item: 'WI-2222A', type: '2', dimensions: { A: '2', B: '0.53', C: '1.92', D: '1.45', E: '0.85', F: '2', plateID: '2', plateThickness: '' } },

    // 2230 Series
    { item: 'WI-2230', type: '1', dimensions: { A: '2', B: '0.53', C: '1.38', D: '1.45', E: '0.75', F: '2', plateID: '1.25', plateThickness: '0.5' } },
    
    // 2231 Series
    { item: 'WI-2231', type: '1', dimensions: { A: '2', B: '0.53', C: '1.38', D: '2.2', E: '0.75', F: '2.75', plateID: '1.25', plateThickness: '0.5' } },
    
    // 2240 Series
    { item: 'WI-2240', type: '1', dimensions: { A: '2.35', B: '0.64', C: '1.5', D: '1.5', E: '0.7', F: '2.1', plateID: '1.38', plateThickness: '0.62' } },
    
    // 2240A Series
    { item: 'WI-2240A', type: '2', dimensions: { A: '2.35', B: '0.66', C: '2.19', D: '1.5', E: '0.82', F: '2.11', plateID: '2.38', plateThickness: '' } },
    
    // 2245 Series
    { item: 'WI-2245', type: '1', dimensions: { A: '2.5', B: '0.65', C: '1.62', D: '1.69', E: '0.62', F: '2', plateID: '1.5', plateThickness: '0.75' } },
    
    // 2250 Series
    { item: 'WI-2250', type: '1', dimensions: { A: '2.5', B: '0.64', C: '1.61', D: '1.75', E: '0.61', F: '2', plateID: '1.5', plateThickness: '0.75' } },
    
    // 2252 Series
    { item: 'WI-2252', type: '1', dimensions: { A: '2.8', B: '0.81', C: '1.62', D: '1.63', E: '0.69', F: '2.38', plateID: '1.5', plateThickness: '0.75' } },
    
    // 2255 Series
    { item: 'WI-2255', type: '1', dimensions: { A: '2.5', B: '0.64', C: '1.63', D: '2.12', E: '1.01', F: '3.2', plateID: '1.5', plateThickness: '0.75' } },
       
    // 2260 Series
    { item: 'WI-2260', type: '1', dimensions: { A: '2.97', B: '0.64', C: '1.96', D: '2', E: '0.83', F: '2.25', plateID: '1.81', plateThickness: '0.93' } },
      
    // 2283 Series
    { item: 'WI-2283', type: '1', dimensions: { A: '3.3', B: '0.81', C: '1.63', D: '1.94', E: '0.88', F: '2.5', plateID: '1.5', plateThickness: '0.88' } },
        
    // 2290 Series
    { item: 'WI-2290', type: '1', dimensions: { A: '3.75', B: '0.77', C: '2.25', D: '2.13', E: '1.13', F: '2.5', plateID: '2', plateThickness: '0.75' } },
        
    // 2295 Series
    { item: 'WI-2295', type: '1', dimensions: { A: '3.74', B: '0.8', C: '2.23', D: '2.01', E: '1', F: '2.5', plateID: '2', plateThickness: '0.75' } },
    ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-neutral-200">
        <div className="container-max">
          <div className="flex items-center justify-between py-6">
            <Link 
              to="/" 
              className="inline-flex items-center text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container-max">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              One Piece Mounts
            </h1>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              One-piece anti-vibration mounts are engineered to handle high loads while offering multi-directional flexibility. They strike a balance between stability and shock absorption, making them ideal for resisting heavy impact forces. In addition to being easy to install, they can also serve as a fail-safe when used with the correct washers.
            </p>
          </motion.div>

          {/* Product Images */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <motion.div variants={fadeInUp} className="bg-neutral-50 rounded-lg shadow-lg overflow-hidden">
              <div className="h-80 flex items-center justify-center bg-white">
                <img 
                  src={onePieceType1} 
                  alt="Type 1 One Piece Mount"
                  className="max-h-full max-w-full object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-neutral-900 mb-2">Type 1 Mount</h4>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-neutral-50  rounded-lg shadow-lg overflow-hidden">
              <div className="h-80 flex items-center justify-center bg-white">
                <img 
                  src={onePieceType2} 
                  alt="Type 2 One Piece Mount"
                  className="max-h-full max-w-full object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-neutral-900 mb-2">Type 2 Mount</h4>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-16">
        <div className="container-max">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral-900 text-center mb-8">
              Complete Product Specifications
            </h2>

            {/* Unified Detailed Specifications Table */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-neutral-50">
                    <tr>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider sticky left-0 bg-neutral-50">Item</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Type</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">A (in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">B (in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">C (in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">D (in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">E (in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">F (in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Plate ID (in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Plate Thickness (in)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    {mountsData.map((mount, index) => (
                      <tr key={mount.item} className={index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                        <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-accent-600 sticky left-0 bg-inherit">
                          {mount.item}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">
                          {mount.type}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.A}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.B}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.C}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.D}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.E}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.F}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.plateID}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.plateThickness || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-neutral-50 px-6 py-4">
                <p className="text-sm text-neutral-600">
                  <strong>Note:</strong> All dimensions are in inches.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OnePieceMounts;
