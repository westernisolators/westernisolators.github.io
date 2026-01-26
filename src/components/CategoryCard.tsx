import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Category } from '../data/categories';

interface CategoryCardProps {
    category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (!category.slideshowImages || category.slideshowImages.length === 0) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % category.slideshowImages!.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, [category.slideshowImages]);

    return (
        <Link to={category.link} className="block h-full">
            <div className="card hover-lift group-hover:shadow-2xl h-full flex flex-col">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-white rounded-t-2xl">
                    <AnimatePresence mode="wait">
                        {category.slideshowImages && category.slideshowImages.length > 0 ? (
                            <motion.img
                                key={currentImageIndex}
                                src={category.slideshowImages[currentImageIndex]}
                                alt={`${category.name} ${currentImageIndex + 1}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                            />
                        ) : (
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                            />
                        )}
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col items-center text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors">
                        {category.name}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed mb-6 flex-1">
                        {category.description}
                    </p>
                    <div className="flex items-center text-primary-600 font-bold group-hover:text-primary-700 transition-colors mt-auto">
                        Explore Category
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;
