import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CenterBondedMounts = () => {
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

  const productTypes = [
    {
      id: 'one-piece',
      name: 'One Piece',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop',
      description: 'One-piece mount designed for high load carrying capacity with multi-directional resiliency.'
    },
    {
      id: 'two-piece',
      name: 'Two Piece', 
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
      description: 'Two-piece mounts are used for heavy-duty applications such as compressors, pumps, and HVAC equipment.'
    },
    {
      id: 'three-piece',
      name: 'Three Piece',
      image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=300&h=200&fit=crop',
      description: 'Three-piece design provides enhanced support and better dampening characteristics.'
    },
    {
      id: 'combination',
      name: 'Combination',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=300&h=200&fit=crop',
      description: 'Combination mounts are used when you cannot find the performance you need in one of the above.'
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
              Back to Products
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
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Center Bonded Rubber Mounts
            </h1>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Western Isolators' center bonded rubber mounts represent cutting-edge vibration isolation technology. Engineered with precision and manufactured using premium materials, our mounts deliver exceptional performance across diverse industrial applications. From HVAC systems to heavy machinery, our innovative isolation solutions provide superior vibration control, extended equipment life, and improved operational efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Types Grid */}
      <section className="py-16">
        <div className="container-max">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {productTypes.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
              >
                <Link
                  to={`/products/center-bonded/${product.id}`}
                  className="flex flex-col h-full focus:outline-none"
                  tabIndex={0}
                  aria-label={`Learn more about ${product.name}`}
                >
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {product.name}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-2">
                      {product.description}
                    </p>
                    <div className="mt-auto pt-4">
                      <span className="text-primary-600 text-xs font-medium inline-flex items-center hover:underline">
                        Learn more <span aria-hidden="true" className="ml-1">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CenterBondedMounts;
