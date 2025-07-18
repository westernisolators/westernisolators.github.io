import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MountData {
  series: string;
  partNumber: string;
  load: string;
  stiffness: string;
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
    // 2600 Series
    { series: '2600', partNumber: '', load: '200 - 350', stiffness: '2000 - 3500', type: '1', dimensions: { A: '2.34', B: '0.66', C: '1.81', D: '1.1', E: '1.4', F: '1.83', plateID: '1.83', plateThickness: '1' } },
    { series: '2600', partNumber: '2600-X0', load: '200', stiffness: '2000', type: '1', dimensions: { A: '2.34', B: '0.66', C: '1.81', D: '1.1', E: '1.4', F: '1.83', plateID: '1.83', plateThickness: '1' } },
    { series: '2600', partNumber: '2600-X1', load: '250', stiffness: '2500', type: '1', dimensions: { A: '2.34', B: '0.66', C: '1.81', D: '1.1', E: '1.4', F: '1.83', plateID: '1.83', plateThickness: '1' } },
    { series: '2600', partNumber: '2600-X2', load: '300', stiffness: '3000', type: '1', dimensions: { A: '2.34', B: '0.66', C: '1.81', D: '1.1', E: '1.4', F: '1.83', plateID: '1.83', plateThickness: '1' } },
    { series: '2600', partNumber: '2600-X3', load: '350', stiffness: '3500', type: '1', dimensions: { A: '2.34', B: '0.66', C: '1.81', D: '1.1', E: '1.4', F: '1.83', plateID: '1.83', plateThickness: '1' } },
    // 2610 Series
    { series: '2610', partNumber: '', load: '550 - 1000', stiffness: '5500 - 10000', type: '3', dimensions: { A: '4', B: '0.63', C: '1.61', D: '1.1', E: '1.01', F: '1.61', plateID: '1.61', plateThickness: '1.31' } },
    { series: '2610', partNumber: '2610-X3', load: '550', stiffness: '5500', type: '3', dimensions: { A: '4', B: '0.63', C: '1.61', D: '1.1', E: '1.01', F: '1.61', plateID: '1.61', plateThickness: '1.31' } },
    { series: '2610', partNumber: '2610-X5', load: '1000', stiffness: '10000', type: '3', dimensions: { A: '4', B: '0.63', C: '1.61', D: '1.1', E: '1.01', F: '1.61', plateID: '1.61', plateThickness: '1.31' } },
    // 2620 Series
    { series: '2620', partNumber: '', load: '550 - 1000', stiffness: '5500 - 10000', type: '3', dimensions: { A: '4', B: '0.63', C: '1.61', D: '1.54', E: '2.04', F: '1.61', plateID: '1.61', plateThickness: '1.31' } },
    { series: '2620', partNumber: '2620-X3', load: '550', stiffness: '5500', type: '3', dimensions: { A: '4', B: '0.63', C: '1.61', D: '1.54', E: '2.04', F: '1.61', plateID: '1.61', plateThickness: '1.31' } },
    { series: '2620', partNumber: '2620-X5', load: '1000', stiffness: '10000', type: '3', dimensions: { A: '4', B: '0.63', C: '1.61', D: '1.54', E: '2.04', F: '1.61', plateID: '1.61', plateThickness: '1.31' } },
    // 2625 Series
    { series: '2625', partNumber: '', load: '105 - 105', stiffness: '2625 - 2625', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.24', D: '0.78', E: '0.97', F: '1.25', plateID: '1.25', plateThickness: '0.62' } },
    { series: '2625', partNumber: '2625-X2', load: '105', stiffness: '2625', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.24', D: '0.78', E: '0.97', F: '1.25', plateID: '1.25', plateThickness: '0.62' } },
    // 2630 Series
    { series: '2630', partNumber: '', load: '550 - 1760', stiffness: '6875 - 22000', type: '1', dimensions: { A: '3.5', B: '0.94', C: '2.24', D: '1.04', E: '1.44', F: '2.24', plateID: '2.24', plateThickness: '1' } },
    { series: '2630', partNumber: '2630-X1', load: '550', stiffness: '6875', type: '1', dimensions: { A: '3.5', B: '0.94', C: '2.24', D: '1.04', E: '1.44', F: '2.24', plateID: '2.24', plateThickness: '1' } },
    { series: '2630', partNumber: '2630-X2', load: '670', stiffness: '8375', type: '1', dimensions: { A: '3.5', B: '0.94', C: '2.24', D: '1.04', E: '1.44', F: '2.24', plateID: '2.24', plateThickness: '1' } },
    { series: '2630', partNumber: '2630-X4', load: '980', stiffness: '12250', type: '1', dimensions: { A: '3.5', B: '0.94', C: '2.24', D: '1.04', E: '1.44', F: '2.24', plateID: '2.24', plateThickness: '1' } },
    { series: '2630', partNumber: '2630-X5', load: '1120', stiffness: '14000', type: '1', dimensions: { A: '3.5', B: '0.94', C: '2.24', D: '1.04', E: '1.44', F: '2.24', plateID: '2.24', plateThickness: '1' } },
    { series: '2630', partNumber: '2630-X7', load: '1760', stiffness: '22000', type: '1', dimensions: { A: '3.5', B: '0.94', C: '2.24', D: '1.04', E: '1.44', F: '2.24', plateID: '2.24', plateThickness: '1' } },
    // 2640 Series
    { series: '2640', partNumber: '', load: '700 - 1650', stiffness: '2333 - 5500', type: '1', dimensions: { A: '3.54', B: '0.59', C: '2.61', D: '1.57', E: '1.89', F: '2.65', plateID: '2.65', plateThickness: '0.75' } },
    { series: '2640', partNumber: '2640-X4', load: '1000', stiffness: '3333', type: '1', dimensions: { A: '3.54', B: '0.59', C: '2.61', D: '1.57', E: '1.89', F: '2.65', plateID: '2.65', plateThickness: '0.75' } },
    { series: '2640', partNumber: '2640-X5', load: '1250', stiffness: '4167', type: '1', dimensions: { A: '3.54', B: '0.59', C: '2.61', D: '1.57', E: '1.89', F: '2.65', plateID: '2.65', plateThickness: '0.75' } },
    { series: '2640', partNumber: '2640-X6', load: '1650', stiffness: '5500', type: '1', dimensions: { A: '3.54', B: '0.59', C: '2.61', D: '1.57', E: '1.89', F: '2.65', plateID: '2.65', plateThickness: '0.75' } },
    { series: '2640', partNumber: '2640-X3', load: '700', stiffness: '2333', type: '1', dimensions: { A: '3.54', B: '0.59', C: '2.61', D: '1.57', E: '1.89', F: '2.65', plateID: '2.65', plateThickness: '0.75' } },
    // 2645 Series
    { series: '2645', partNumber: '', load: '110 - 340', stiffness: '1222 - 3778', type: '1', dimensions: { A: '3.64', B: '0.64', C: '2.62', D: '1.19', E: '1.18', F: '2.65', plateID: '2.65', plateThickness: '0.75' } },
    { series: '2645', partNumber: '2645-X5', load: '340', stiffness: '3778', type: '1', dimensions: { A: '3.64', B: '0.64', C: '2.62', D: '1.19', E: '1.18', F: '2.65', plateID: '2.65', plateThickness: '0.75' } },
    { series: '2645', partNumber: '2645-X0', load: '110', stiffness: '1222', type: '1', dimensions: { A: '3.64', B: '0.64', C: '2.62', D: '1.19', E: '1.18', F: '2.65', plateID: '2.65', plateThickness: '0.75' } },
    { series: '2645', partNumber: '2645-X1', load: '135', stiffness: '1500', type: '1', dimensions: { A: '3.64', B: '0.64', C: '2.62', D: '1.19', E: '1.18', F: '2.65', plateID: '2.65', plateThickness: '0.75' } },
    { series: '2645', partNumber: '2645-X2', load: '170', stiffness: '1889', type: '1', dimensions: { A: '3.64', B: '0.64', C: '2.62', D: '1.19', E: '1.18', F: '2.65', plateID: '2.65', plateThickness: '0.75' } },
    { series: '2645', partNumber: '2645-X3', load: '220', stiffness: '2444', type: '1', dimensions: { A: '3.64', B: '0.64', C: '2.62', D: '1.19', E: '1.18', F: '2.65', plateID: '2.65', plateThickness: '0.75' } },
    { series: '2645', partNumber: '2645-X4', load: '270', stiffness: '3000', type: '1', dimensions: { A: '3.64', B: '0.64', C: '2.62', D: '1.19', E: '1.18', F: '2.65', plateID: '2.65', plateThickness: '0.75' } },
    // 2650 Series
    { series: '2650', partNumber: '', load: '250 - 250', stiffness: '5000 - 5000', type: '2', dimensions: { A: '2', B: '0.53', C: '1.25', D: '0.52', E: '0.58', F: '1.25', plateID: '1.25', plateThickness: '0.25' } },
    { series: '2650', partNumber: '2650-X3', load: '250', stiffness: '5000', type: '2', dimensions: { A: '2', B: '0.53', C: '1.25', D: '0.52', E: '0.58', F: '1.25', plateID: '1.25', plateThickness: '0.25' } },
    // 2662 Series
    { series: '2662', partNumber: '', load: '465 - 650', stiffness: '11625 - 16250', type: '2', dimensions: { A: '2.5', B: '0.64', C: '1.63', D: '0.62', E: '0.56', F: '1.65', plateID: '1.65', plateThickness: '0.18' } },
    { series: '2662', partNumber: '2662-X3', load: '465', stiffness: '11625', type: '2', dimensions: { A: '2.5', B: '0.64', C: '1.63', D: '0.62', E: '0.56', F: '1.65', plateID: '1.65', plateThickness: '0.18' } },
    { series: '2662', partNumber: '2662-X5', load: '650', stiffness: '16250', type: '2', dimensions: { A: '2.5', B: '0.64', C: '1.63', D: '0.62', E: '0.56', F: '1.65', plateID: '1.65', plateThickness: '0.18' } },
    // 2663 Series
    { series: '2663', partNumber: '', load: '525 - 1200', stiffness: '13125 - 30000', type: '2', dimensions: { A: '2.5', B: '0.64', C: '1.5', D: '0.62', E: '0.94', F: '1.53', plateID: '1.53', plateThickness: '0.88' } },
    { series: '2663', partNumber: '2663-X3', load: '525', stiffness: '13125', type: '2', dimensions: { A: '2.5', B: '0.64', C: '1.5', D: '0.62', E: '0.94', F: '1.53', plateID: '1.53', plateThickness: '0.88' } },
    { series: '2663', partNumber: '2663-X5', load: '850', stiffness: '21250', type: '2', dimensions: { A: '2.5', B: '0.64', C: '1.5', D: '0.62', E: '0.94', F: '1.53', plateID: '1.53', plateThickness: '0.88' } },
    { series: '2663', partNumber: '2663-X7', load: '1200', stiffness: '30000', type: '2', dimensions: { A: '2.5', B: '0.64', C: '1.5', D: '0.62', E: '0.94', F: '1.53', plateID: '1.53', plateThickness: '0.88' } },
    // 2665 Series
    { series: '2665', partNumber: '', load: '500 - 1100', stiffness: '12500 - 27500', type: '2', dimensions: { A: '2.98', B: '0.64', C: '1.8', D: '0.81', E: '1.12', F: '1.8', plateID: '1.8', plateThickness: '0.93' } },
    { series: '2665', partNumber: '2665-X6', load: '1100', stiffness: '27500', type: '2', dimensions: { A: '2.98', B: '0.64', C: '1.8', D: '0.81', E: '1.12', F: '1.8', plateID: '1.8', plateThickness: '0.93' } },
    { series: '2665', partNumber: '2665-X3', load: '500', stiffness: '12500', type: '2', dimensions: { A: '2.98', B: '0.64', C: '1.8', D: '0.81', E: '1.12', F: '1.8', plateID: '1.8', plateThickness: '0.93' } },
    // 2680 Series
    { series: '2680', partNumber: '', load: '500 - 1100', stiffness: '10000 - 22000', type: '2', dimensions: { A: '3.5', B: '0.94', C: '2.23', D: '1.04', E: '1.44', F: '2.26', plateID: '2.26', plateThickness: '1' } },
    { series: '2680', partNumber: '2680-X3', load: '500', stiffness: '10000', type: '2', dimensions: { A: '3.5', B: '0.94', C: '2.23', D: '1.04', E: '1.44', F: '2.26', plateID: '2.26', plateThickness: '1' } },
    { series: '2680', partNumber: '2680-X6', load: '900', stiffness: '18000', type: '2', dimensions: { A: '3.5', B: '0.94', C: '2.23', D: '1.04', E: '1.44', F: '2.26', plateID: '2.26', plateThickness: '1' } },
    { series: '2680', partNumber: '2680-X7', load: '1100', stiffness: '22000', type: '2', dimensions: { A: '3.5', B: '0.94', C: '2.23', D: '1.04', E: '1.44', F: '2.26', plateID: '2.26', plateThickness: '1' } },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-neutral-200">
        <div className="container-max">
          <div className="flex items-center justify-between py-6">
            <Link 
              to="/products/center-bonded" 
              className="inline-flex items-center text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Center Bonded Mounts
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
            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-neutral-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-neutral-600 text-2xl font-bold">WI</span>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-700">Type 1 Mount</h3>
                  <p className="text-neutral-600 text-sm">Standard Configuration</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-neutral-900 mb-2">Type 1</h4>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-neutral-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-neutral-600 text-2xl font-bold">WI</span>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-700">Type 2 Mount</h3>
                  <p className="text-neutral-600 text-sm">Enhanced Configuration</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-neutral-900 mb-2">Type 2 Mount</h4>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-neutral-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-neutral-600 text-2xl font-bold">WI</span>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-700">Type 3 Mount</h3>
                  <p className="text-neutral-600 text-sm">Enhanced Configuration</p>
                </div>
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
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider sticky left-0 bg-neutral-50">Series</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Part Number</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Type</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Load (lbs)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Stiffness (lbs/in)</th>
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
                      <tr key={mount.partNumber} className={index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                        <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-accent-600 sticky left-0 bg-inherit">
                          {mount.series}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-primary-600">
                          {mount.partNumber}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">
                          {mount.type}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-900 font-medium">
                          {mount.load}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-900 font-medium">
                          {mount.stiffness}
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