import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import threepieceType1 from '../assets/three-piece_type1.webp';
import threepieceType2 from '../assets/three-piece_type2.webp';

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

const ThreePieceMounts = () => {
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
    // 2405 Series
    { item: 'WI-2405', type: '-', dimensions: { A: '1.33', B: '0.4', C: '0.73', D: '0.52', E: '0.7', F: '2.13', plateID: '0.75', plateThickness: '1.25' } },
    // 2420 Series
    { item: 'WI-2420', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.23', D: '0.78', E: '1.03', F: '1.94', plateID: '1.25', plateThickness: '0.56' } },
    // 2425 Series
    { item: 'WI-2425', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.25', D: '0.78', E: '0.89', F: '1.63', plateID: '1.25', plateThickness: '0.25' } },
    // 2425B Series
    { item: 'WI-2425B', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.25', D: '0.78', E: '0.89', F: '1.77', plateID: '1.25', plateThickness: '0.39' } },
    // 2427 Series
    { item: 'WI-2427', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.25', D: '0.78', E: '0.94', F: '1.75', plateID: '1.25', plateThickness: '0.37' } },
    // 2440 Series
    { item: 'WI-2440', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.63' } },
    // 2441 Series
    { item: 'WI-2441', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.88' } },
    // 2443 Series
    { item: 'WI-2443', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.88' } },
    // 2444 Series
    { item: 'WI-2444', type: '2', dimensions: { A: '2.55', B: '0.5', C: '1.63', D: '0.9', E: '1.21', F: '1.85', plateID: '1.63', plateThickness: '0.31' } },
    // 2445 Series
    { item: 'WI-2445', type: '2', dimensions: { A: '2.55', B: '0.5', C: '1.63', D: '0.9', E: '1.21', F: '2.11', plateID: '1.64', plateThickness: '0.5' } },
    // 2446 Series
    { item: 'WI-2446', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.63', D: '0.9', E: '1.14', F: '1.85', plateID: '1.63', plateThickness: '0.24' } },
    // 2447 Series
    { item: 'WI-2447', type: '2', dimensions: { A: '2.55', B: '0.5', C: '1.63', D: '0.9', E: '1.14', F: '1.85', plateID: '1.63', plateThickness: '0.24' } },
    // 2448 Series
    { item: 'WI-2448', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '1.85', plateID: '1.5', plateThickness: '0.31' } },
    // 2448B Series
    { item: 'WI-2448B', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '1.92', plateID: '1.5', plateThickness: '0.38' } },
    // 2448C Series
    { item: 'WI-2448C', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.43', plateID: '1.5', plateThickness: '0.88' } },
    // 2448D Series
    { item: 'WI-2448D', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.05', plateID: '1.5', plateThickness: '0.5' } },
    // 2449 Series
    { item: 'WI-2449', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.88' } },
    // 2450 Series
    { item: 'WI-2450', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.88' } },
    // 2451 Series
    { item: 'WI-2451', type: '1', dimensions: { A: '3.21', B: '0.76', C: '1.84', D: '0.81', E: '1.1', F: '1.81', plateID: '1.84', plateThickness: '0.63' } },
    // 2452 Series
    { item: 'WI-2452', type: '1', dimensions: { A: '2.65', B: '0.51', C: '1.38', D: '0.81', E: '1.11', F: '1.81', plateID: '1.4', plateThickness: '0.63' } },
    // 2453 Series
    { item: 'WI-2453', type: '1', dimensions: { A: '3.21', B: '0.65', C: '1.84', D: '0.81', E: '1.1', F: '1.81', plateID: '1.84', plateThickness: '0.63' } },
    // 2454 Series
    { item: 'WI-2454', type: '1', dimensions: { A: '2.22', B: '0.52', C: '1.38', D: '0.72', E: '1.03', F: '1.81', plateID: '1.4', plateThickness: '0.63' } },
    // 2455 Series
    { item: 'WI-2455', type: '1', dimensions: { A: '3.28', B: '0.81', C: '1.83', D: '0.8', E: '1.11', F: '3.31', plateID: '1.84', plateThickness: '2.13' } },
    // 2460 Series
    { item: 'WI-2460', type: '1', dimensions: { A: '3.5', B: '0.94', C: '2.22', D: '1', E: '1.4', F: '2.89', plateID: '2.25', plateThickness: '1.13' } },
    // 2475 Series
    { item: 'WI-2475', type: '1', dimensions: { A: '2', B: '0.51', C: '1.36', D: '1.75', E: '1.86', F: '3.5', plateID: '1.38', plateThickness: '0.25' } },
    // 2480 Series
    { item: 'WI-2480', type: '2', dimensions: { A: '2.55', B: '0.66', C: '1.48', D: '0.74', E: '1.44', F: '2.63', plateID: '1.5', plateThickness: '0.5' } },
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
              Three Piece Mounts
            </h1>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Three-piece mounts are used for both light and heavy equipment such as highway vehicles, construction, and agriculture. These have an easy installation and have a lower radial stiffness than the one and two-piece mounts.
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
                  src={threepieceType1}
                  alt="Type 1 Three Piece Mount"
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
                  src={threepieceType2}
                  alt="Type 2 Three Piece Mount"
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

export default ThreePieceMounts;