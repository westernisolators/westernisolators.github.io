import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import twoPieceImage from '../assets/two-piece.png';

interface MountData {
  item: string;
  dimensions: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
    F: string;
    G: string;
  };
  supportingMember: string;
  holeSize: string;
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
      dimensions: { A: '25', B: '8.5', C: '14.2', D: '21', E: '14.2', F: '8', G: '14.2' },
      supportingMember: '7',
      holeSize: '13'
    },
    {
      item: 'WI-30',
      dimensions: { A: '30', B: '8.5', C: '14', D: '26.5', E: '18', F: '10.5', G: '14' },
      supportingMember: '8',
      holeSize: '17'
    },
    {
      item: 'WI-33',
      dimensions: { A: '33', B: '10', C: '14.5', D: '32', E: '20', F: '12.4', G: '14.7' },
      supportingMember: '10',
      holeSize: '19'
    },
    {
      item: 'WI-48',
      dimensions: { A: '48', B: '13', C: '21.5', D: '48.5', E: '33', F: '20', G: '22' },
      supportingMember: '12',
      holeSize: '31.7'
    },
    {
      item: 'WI-50',
      dimensions: { A: '50', B: '13', C: '18.5', D: '50', E: '32.5', F: '20', G: '20' },
      supportingMember: '15',
      holeSize: '31'
    },
    {
      item: 'WI-65',
      dimensions: { A: '65', B: '16.7', C: '24.6', D: '61.7', E: '40.1', F: '22.9', G: '24.4' },
      supportingMember: '19',
      holeSize: '38.1'
    },
    {
      item: 'WI-70',
      dimensions: { A: '70', B: '18', C: '26', D: '64', E: '45', F: '24', G: '26' },
      supportingMember: '19',
      holeSize: '43'
    },
    {
      item: 'WI-90',
      dimensions: { A: '89', B: '23.5', C: '34.5', D: '73', E: '58.5', F: '25.4', G: '35' },
      supportingMember: '25.4',
      holeSize: '57.1'
    },
    {
      item: 'WI-124',
      dimensions: { A: '124', B: '32', C: '45', D: '86', E: '68', F: '32', G: '46' },
      supportingMember: '25.4',
      holeSize: '63.5'
    }
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
              Two Piece Mounts
            </h1>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Two-piece center-bounded rubber mounts consist of a rubber element permanently bonded between an inner and outer metal component, forming a single, robust unit. This design effectively isolates vibration and dampens shock in multiple directions, particularly under radial and axial loads. They are commonly used for resiliently supporting engines, generators, and industrial machinery.
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
                  src={twoPieceImage} 
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
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">F (mm)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">G (mm)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Supporting Member | T (mm)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Hole Size | O (mm)</th>
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
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.F}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.G}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.supportingMember}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.holeSize}</td>
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
