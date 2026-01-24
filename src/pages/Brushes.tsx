import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import brushesImage from '../assets/brushes_category.png';

const Brushes = () => {
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

    const brushTypes = [
        "Strip Brushes",
        "Roller Brushes",
        "Spiral Brush / Twist Brush",
        "Disc Brush",
        "Cup Brush",
        "Conveyor Brush",
        "Complete Seal Brush",
        "Oil Brush / Applicator Brush",
        "Sanding / Abrasive Brushes",
        "Horsehair Brush / Sisal Brush",
        "Forklift Sweeper Brush"
    ];

    const applications = [
        "Deburring",
        "Cleaning and scrubbing",
        "Dusting",
        "Spreading liquids and powders",
        "Polishing",
        "Static dissipation"
    ];

    const materials = [
        { name: "Nylon", desc: "Versatile, durable, and chemical-resistant." },
        { name: "Abrasive Nylon", desc: "Contains embedded grit for cleaning and deburring applications." },
        { name: "Steel / Stainless Steel", desc: "High hardness, suitable for aggressive cleaning applications." },
        { name: "Brass / Bronze", desc: "Softer than steel, ideal for applications requiring non-sparking and surface protection." },
        { name: "Natural Fiber (Tampico / Horsehair)", desc: "Used for polishing, washing, and delicate surface work." }
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
                        <Link
                            to="/?type=brushes#contact"
                            className="btn-primary"
                        >
                            Request a Quote
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
                                Industrial Brushes
                            </h1>
                            <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                                Our industrial brushes are designed for a wide range of applications, including shielding on machine tools, guides on conveyor systems, cable management, air seals in electronic cabinets, sweeping applications in turf care, and many other industrial uses.
                            </p>
                            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                                We supply brushes in a wide variety of sizes, construction materials, filament types, and filament diameters. Our brushes and holding systems can be custom designed and manufactured to exacting specifications to meet your specific requirements.
                            </p>
                            <Link to="/?type=brushes#contact" className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors text-lg">
                                Inquire about Custom Brushes
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
                                src={brushesImage}
                                alt="Industrial Brushes Collection"
                                className="max-w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>
                    </div>

                    {/* Types Grid */}
                    <motion.div
                        className="mb-20"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Available Brush Types</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {brushTypes.map((type, index) => (
                                <motion.div key={index} variants={fadeInUp}>
                                    <Link
                                        to={`/?type=brushes&brushType=${encodeURIComponent(type)}#contact`}
                                        className="block p-4 bg-white rounded-xl shadow-sm border border-neutral-200 hover:border-primary-500 hover:shadow-md transition-all duration-200 text-center font-semibold text-neutral-700 hover:text-primary-600 h-full flex items-center justify-center"
                                    >
                                        {type}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Applications & Materials */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        {/* Applications */}
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100"
                        >
                            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Common Applications</h2>
                            <ul className="space-y-4">
                                {applications.map((app, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" />
                                        <span className="text-neutral-700 font-medium">{app}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Materials */}
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm"
                        >
                            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Common Filament Materials</h2>
                            <div className="space-y-6">
                                {materials.map((mat, index) => (
                                    <div key={index}>
                                        <h3 className="font-bold text-neutral-900 mb-1">{mat.name}</h3>
                                        <p className="text-neutral-600 text-sm">{mat.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Brushes;
