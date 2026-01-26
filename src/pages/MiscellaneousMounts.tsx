import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import miscellaneousImage from '../assets/miscellaneous.webp';

interface MountData {
  item: string;
  dimensions: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
}

const TwoPieceMounts = () => {
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

  // Data from the specifications table
  const mountsData: MountData[] = [
    {
      item: 'WI-25',
      dimensions: { A: '63.50', B: '16.00', C: '41.40', D: '26.90', E: '30.20' }
    },
    {
      item: 'WI-30',
      dimensions: { A: '82.60', B: '25.40', C: '43.90', D: '35.10', E: '49.10' }
    },
    {
      item: 'WI-33',
      dimensions: { A: '64.80', B: '19.00', C: '35.00', D: '22.90', E: '34.30' }
    },
    {
      item: 'WI-48',
      dimensions: { A: '69.90', B: '15.90', C: '-', D: '-', E: '31.80' }
    },
    {
      item: 'WI-50',
      dimensions: { A: '68.60', B: '19.80', C: '31.50', D: '17.80', E: '20.80' }
    },
    {
      item: 'WI-65',
      dimensions: { A: '68.60', B: '19.80', C: '33.00', D: '18.30', E: '23.60' }
    },
    {
      item: 'WI-70',
      dimensions: { A: '69.90', B: '16.80', C: '27.70', D: '28.20', E: '31.20' }
    },
    {
      item: 'WI-90',
      dimensions: { A: '82.60', B: '17.00', C: '31.80', D: '34.30', E: '42.00' }
    },
    {
      item: 'WI-124',
      dimensions: { A: '103.10', B: '16.30', C: '32.30', D: '37.10', E: '45.00' }
    },
    {
      item: 'WI-125',
      dimensions: { A: '103.10', B: '19.60', C: '31.80', D: '37.10', E: '45.00' }
    },
    {
      item: 'WI-126',
      dimensions: { A: '76.20', B: '16.80', C: '30.20', D: '25.10', E: '30.00' }
    },
    {
      item: 'WI-127',
      dimensions: { A: '63.50', B: '15.70', C: '-', D: '-', E: '25.40' }
    },
    {
      item: 'WI-128',
      dimensions: { A: '57.20', B: '15.70', C: '-', D: '-', E: '22.90' }
    }
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
              Miscellaneous Mounts
            </h1>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              If standard vibration mounts don’t meet your needs, consider our selection of miscellaneous vibration dampeners. Designed for unique applications, these customized center-bonded mounts offer effective vibration isolation.
            </p>
          </motion.div>

          {/* Product Images */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-80 flex items-center justify-center overflow-hidden">
                <img
                  src={miscellaneousImage}
                  alt="Two Piece Mount"
                  className="w-full h-full object-cover"
                />
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
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">A (mm)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">B (mm)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">C (mm)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">D (mm)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">E (mm)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    {mountsData.map((mount, index) => (
                      <tr key={mount.item} className={index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                        <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-accent-600 sticky left-0 bg-inherit">
                          {mount.item}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.A}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.B}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.C}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.D}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.E}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-neutral-50 px-6 py-4">
                <p className="text-sm text-neutral-600">
                  <strong>Note:</strong> All dimensions are in millimeters (mm).
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TwoPieceMounts;
