import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Droplet, Wrench, Wind, Scissors, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import industrialGasketsHero from '../assets/industrial_gaskets_hero.webp';

interface ProductType {
    name: string;
    description: string;
    icon: React.ReactNode;
}

const IndustrialGaskets = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const keyFeatures = [
        'Excellent sealing and leak prevention',
        'Materials tailored to specific chemical, temperature, and pressure environments',
        'Custom sizes and profiles available upon request'
    ];

    const productTypes: ProductType[] = [
        {
            name: 'Rubber Gaskets',
            description: 'Used for general sealing applications across various industries.',
            icon: <Shield className="h-8 w-8" />
        },
        {
            name: 'Neoprene, EPDM & Nitrile Gaskets',
            description: 'Suitable for oil, water, and chemical resistance in demanding environments.',
            icon: <Droplet className="h-8 w-8" />
        },
        {
            name: 'Cork & Rubber Gaskets',
            description: 'Used for vibration damping and sealing in combined applications.',
            icon: <Shield className="h-8 w-8" />
        },
        {
            name: 'Foam Gaskets',
            description: 'Ideal for enclosure sealing and dust protection in sensitive equipment.',
            icon: <Wind className="h-8 w-8" />
        },
        {
            name: 'Flat Cut Gaskets',
            description: 'CNC or die-cut to custom shapes and sizes for precise fitment.',
            icon: <Scissors className="h-8 w-8" />
        },
        {
            name: 'Custom Molded Seals',
            description: 'Designed based on customer drawings or samples for unique applications.',
            icon: <Settings className="h-8 w-8" />
        },
        {
            name: 'Weather Seals & Edge Seals',
            description: 'Used for panels, doors, and industrial enclosures to prevent ingress.',
            icon: <Wrench className="h-8 w-8" />
        }
    ];

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
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                            Industrial Gaskets & Seals
                        </h1>
                        <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed mb-6">
                            Our industrial gaskets and seals are designed to provide reliable sealing solutions for machinery, piping systems, flanges, enclosures, and industrial equipment. These products help prevent leakage of liquids, gases, and dust while ensuring operational safety and efficiency.
                        </p>
                        <p className="text-lg text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                            We supply gaskets and seals in a wide range of materials to suit different pressure, temperature, and chemical environments.
                        </p>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="flex justify-center mb-16"
                    >
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl">
                            <div className="h-80 flex items-center justify-center overflow-hidden">
                                <img
                                    src={industrialGasketsHero}
                                    alt="Industrial Gaskets & Seals"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-12 bg-neutral-100">
                <div className="container-max">
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                            Key Features
                        </h2>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {keyFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="flex items-start bg-white rounded-lg p-6 shadow-md"
                            >
                                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-primary-600 font-bold">✓</span>
                                </div>
                                <p className="text-neutral-700 text-lg">{feature}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Product Types Section */}
            <section className="py-16">
                <div className="container-max">
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                            Types of Gaskets & Seals We Supply
                        </h2>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {productTypes.map((product, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white mb-5">
                                    {product.icon}
                                </div>
                                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                                    {product.name}
                                </h3>
                                <p className="text-neutral-600 leading-relaxed text-sm">
                                    {product.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Note Section */}
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="mt-12 bg-primary-50 rounded-xl p-8 text-center"
                    >
                        <p className="text-lg text-neutral-700">
                            <strong>Custom Solutions:</strong> All gaskets and seals can be customized based on material, thickness, profile, and application requirements.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default IndustrialGaskets;
