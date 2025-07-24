import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import combinationType1 from '../assets/combination_type1.png';
import combinationType2 from '../assets/combination_type2.png';
import combinationType3 from '../assets/combination_type3.png';

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

const CombinationMounts = () => {
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
    // 2600 item
    { item: 'WI-2600', type: '1', dimensions: { A: '2.34', B: '0.66', C: '1.81', D: '1.1', E: '1.4', F: '1.83', plateID: '1.83', plateThickness: '1' } },
    // 2610 item
    { item: 'WI-2610', type: '3', dimensions: { A: '4', B: '0.63', C: '1.61', D: '1.1', E: '1.01', F: '1.61', plateID: '1.61', plateThickness: '1.31' } },
    // 2620 item
    { item: 'WI-2620', type: '3', dimensions: { A: '4', B: '0.63', C: '1.61', D: '1.54', E: '2.04', F: '1.61', plateID: '1.61', plateThickness: '1.31' } },
    // 2625 item
    { item: 'WI-2625', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.24', D: '0.78', E: '0.97', F: '1.25', plateID: '1.25', plateThickness: '0.62' } },
    // 2630 item
    { item: 'WI-2630', type: '1', dimensions: { A: '3.5', B: '0.94', C: '2.24', D: '1.04', E: '1.44', F: '2.24', plateID: '2.24', plateThickness: '1' } },
    // 2640 item
    { item: 'WI-2640', type: '1', dimensions: { A: '3.54', B: '0.59', C: '2.61', D: '1.57', E: '1.89', F: '2.65', plateID: '2.65', plateThickness: '0.75' } },
    // 2645 item
    { item: 'WI-2645', type: '1', dimensions: { A: '3.64', B: '0.64', C: '2.62', D: '1.19', E: '1.18', F: '2.65', plateID: '2.65', plateThickness: '0.75' } },
    // 2650 item
    { item: 'WI-2650', type: '2', dimensions: { A: '2', B: '0.53', C: '1.25', D: '0.52', E: '0.58', F: '1.25', plateID: '1.25', plateThickness: '0.25' } },
    // 2662 item
    { item: 'WI-2662', type: '2', dimensions: { A: '2.5', B: '0.64', C: '1.63', D: '0.62', E: '0.56', F: '1.65', plateID: '1.65', plateThickness: '0.18' } },
    // 2663 item
    { item: 'WI-2663', type: '2', dimensions: { A: '2.5', B: '0.64', C: '1.5', D: '0.62', E: '0.94', F: '1.53', plateID: '1.53', plateThickness: '0.88' } },
    // 2665 item
    { item: 'WI-2665', type: '2', dimensions: { A: '2.98', B: '0.64', C: '1.8', D: '0.81', E: '1.12', F: '1.8', plateID: '1.8', plateThickness: '0.93' } },
    // 2680 item
    { item: 'WI-2680', type: '2', dimensions: { A: '3.5', B: '0.94', C: '2.23', D: '1.04', E: '1.44', F: '2.26', plateID: '2.26', plateThickness: '1' } },
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
              Combination Mounts
            </h1>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Combination mounts are used when you cannot find the performance you need in one of the above types of vibration isolators. We customize our two-piece or three-piece mounts to optimize the vibration, providing our customers with a superior performing system. 
            </p>
          </motion.div>

          {/* Product Images */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <motion.div variants={fadeInUp} className="bg-neutral-50 rounded-lg shadow-lg overflow-hidden">
              <div className="h-80 flex items-center justify-center bg-white">
                <img 
                  src={combinationType1} 
                  alt="Type 1 Combination Mount"
                  className="max-h-full max-w-full object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-neutral-900 mb-2">Type 1 Mount</h4>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-neutral-50 rounded-lg shadow-lg overflow-hidden">
              <div className="h-80 flex items-center justify-center bg-white">
                <img 
                  src={combinationType2} 
                  alt="Type 2 Combination Mount"
                  className="max-h-full max-w-full object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-neutral-900 mb-2">Type 2 Mount</h4>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-neutral-50 rounded-lg shadow-lg overflow-hidden">
              <div className="h-80 flex items-center justify-center bg-white">
                <img 
                  src={combinationType3} 
                  alt="Type 3 Combination Mount"
                  className="max-h-full max-w-full object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-neutral-900 mb-2">Type 3 Mount</h4>
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
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider sticky left-0 bg-neutral-50">item</th>
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

export default CombinationMounts;