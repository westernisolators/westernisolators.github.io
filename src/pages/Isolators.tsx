import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Isolators = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen bg-neutral-50 pt-20">
            {/* Header */}
            <div className="bg-white shadow-sm border-b border-neutral-200">
                <div className="container-max">
                    <div className="flex items-center justify-between py-6">
                        <Link
                            to="/#products"
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
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                            Isolators / Acoustic Mounts
                        </h1>
                        <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                            Explore our range of high-performance vibration isolation mounts designed for diverse industrial applications.
                        </p>
                    </motion.div>

                    {/* Product Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {products.map((product) => (
                            <motion.div
                                key={product.id}
                                variants={fadeInUp}
                                className="group"
                            >
                                <Link to={`/products/${product.id}`} className="block h-full">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col border border-neutral-100">
                                        {/* Image Container */}
                                        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex-1 flex flex-col">
                                            <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                                                {product.name}
                                            </h3>
                                            <p className="text-neutral-600 leading-relaxed mb-6 flex-1 text-sm">
                                                {product.description}
                                            </p>
                                            <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors mt-auto">
                                                View Details
                                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
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

export default Isolators;
