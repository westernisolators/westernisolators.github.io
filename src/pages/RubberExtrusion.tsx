import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Layers, PenTool, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import rubberImage from '../assets/rubber_extrusion_category.webp';

const RubberExtrusion = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const features = [
        {
            icon: Layers,
            title: "Wide Material Range",
            description: "Custom rubber extrusion parts in various materials including EPDM, Neoprene, Silicone, and Nitrile to meet chemical and thermal resistance needs."
        },
        {
            icon: Settings,
            title: "Custom Specifications",
            description: "Fully customized solutions tailored to your specific application needs, including material selection, hardness (durometer), dimensions, and performance requirements."
        },
        {
            icon: PenTool,
            title: "Custom Mold Development",
            description: "We offer custom rubber extrusion mold development, enabling us to design and manufacture unique profiles tailored to customer-specific products."
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                                Rubber Extrusion Parts
                            </h1>
                            <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                                We supply a wide range of custom rubber extrusion parts in various materials, profiles, and designs. Our rubber extrusion solutions can be fully customized to meet your specific application needs.
                            </p>
                            <Link to="/?type=rubber#contact" className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors text-lg">
                                Submit Your Specifications
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="rounded-2xl overflow-hidden shadow-2xl bg-neutral-100 p-8 flex items-center justify-center"
                        >
                            <img
                                src={rubberImage}
                                alt="Rubber Extrusion Parts Collection"
                                className="max-w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>
                    </div>

                    {/* Features Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="bg-white p-4 rounded-xl inline-block shadow-sm mb-6">
                                    <feature.icon className="h-8 w-8 text-primary-600" />
                                </div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-4">{feature.title}</h3>
                                <p className="text-neutral-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="bg-neutral-900 rounded-3xl p-12 text-center relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Have a Custom Profile?</h2>
                            <p className="text-neutral-300 max-w-2xl mx-auto mb-8 text-lg">
                                We specialize in developing custom rubber extrusion molds for unique products. Send us your drawings or specifications for a quote.
                            </p>
                            <Link
                                to="/?type=rubber#contact"
                                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-500 transition-colors shadow-lg hover:shadow-primary-600/30"
                            >
                                Request a Quote
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default RubberExtrusion;
