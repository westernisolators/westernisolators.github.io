import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { productCategories, getProductCategory } from '../data/products';

const Products = () => {
  const { category } = useParams();
  const selectedCategory = category ? getProductCategory(category) : null;

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

  if (selectedCategory) {
    // Show specific category and its sub-products
    return (
      <div className="min-h-screen bg-white pt-20">
        {/* Category Header */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white section-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <nav className="text-sm mb-6">
                <Link to="/products" className="text-primary-400 hover:text-primary-300">
                  Products
                </Link>
                <span className="mx-2 text-neutral-400">/</span>
                <span className="text-white">{selectedCategory.name}</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{selectedCategory.name}</h1>
              <p className="text-xl text-neutral-300 max-w-3xl">{selectedCategory.description}</p>
            </motion.div>
          </div>
        </section>

        {/* Sub-products or Specifications */}
        <section className="section-padding">
          <div className="container-max">
            {selectedCategory.subProducts ? (
              // Show sub-products
              <>
                <motion.h2 
                  className="text-3xl font-bold text-neutral-900 mb-12 text-center"
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                >
                  Product Variations
                </motion.h2>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  {selectedCategory.subProducts.map((subProduct) => (
                    <motion.div
                      key={subProduct.id}
                      variants={fadeInUp}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="aspect-w-16 aspect-h-12 bg-neutral-100">
                        <img 
                          src={subProduct.image} 
                          alt={subProduct.name}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                          {subProduct.name}
                        </h3>
                        <p className="text-neutral-600 mb-4 text-sm">
                          {subProduct.description}
                        </p>
                        <Link
                          to={`/products/${category}/${subProduct.id}`}
                          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                        >
                          View Details
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </>
            ) : (
              // Show single product specifications
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                >
                  <img 
                    src={selectedCategory.image} 
                    alt={selectedCategory.name}
                    className="w-full h-96 object-cover rounded-xl shadow-lg"
                  />
                </motion.div>
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6">Specifications</h2>
                  {selectedCategory.specs && (
                    <div className="bg-neutral-50 rounded-lg p-6 mb-6">
                      <table className="w-full">
                        <tbody className="space-y-2">
                          {selectedCategory.specs.map((spec, index) => (
                            <tr key={index} className="border-b border-neutral-200 last:border-b-0">
                              <td className="py-2 font-medium text-neutral-700">{spec.parameter}</td>
                              <td className="py-2 text-neutral-900">
                                {spec.value} {spec.unit && <span className="text-neutral-600">{spec.unit}</span>}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  
                  {selectedCategory.applications && (
                    <>
                      <h3 className="text-xl font-bold text-neutral-900 mb-4">Applications</h3>
                      <ul className="space-y-2 mb-6">
                        {selectedCategory.applications.map((app, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                            <span className="text-neutral-700">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  <button className="btn-primary inline-flex items-center">
                    <Download className="mr-2 h-5 w-5" />
                    Download Datasheet
                  </button>
                </motion.div>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }

  // Show all product categories
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive range of vibration isolation solutions engineered for 
              industrial applications across various sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {productCategories.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/products/${product.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                    {product.subProducts && (
                      <span className="text-xs text-neutral-500 bg-neutral-100 px-2 py-1 rounded-full">
                        {product.subProducts.length} variants
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white section-padding">
        <div className="container-max text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Our engineering team can design and manufacture custom vibration isolators 
              to meet your specific requirements.
            </p>
            <a href="/#contact" className="btn-secondary">
              Contact Our Engineers
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
