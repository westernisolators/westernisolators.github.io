import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Shield, Zap, Globe, Star, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const Home = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  
  const onSubmit = (_data: ContactFormData) => {
    // TODO: Implement actual form submission logic
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section - Clean & Modern */}
      <section id="home" className="relative min-h-screen flex items-center bg-white">
        <div className="absolute inset-0 gradient-bg-primary opacity-40"></div>
        
        <div className="container-max w-full relative z-10">
          <div className="flex items-center justify-center min-h-screen py-20">
            <motion.div 
              className="max-w-5xl mx-auto text-center space-y-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Modern Badge */}
              <motion.div 
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-full text-sm font-semibold shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Industry-Leading Vibration Control Solutions
              </motion.div>

              {/* Clean Headline */}
              <motion.h1 
                className="text-display text-neutral-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Precision Engineered
                <span className="text-primary-600 block">Vibration Isolation</span>
              </motion.h1>

              {/* Cleaner Description */}
              <motion.p 
                className="text-body-large text-neutral-600 max-w-3xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Western Isolators delivers cutting-edge vibration isolation solutions for industrial applications. 
                Our precision-manufactured mounts ensure optimal performance, reliability, and equipment longevity.
              </motion.p>

              {/* Feature Highlights */}
              <motion.div 
                className="flex flex-wrap justify-center gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {[
                  "99% Vibration Reduction",
                  "24/7 Expert Support",
                  "Custom Engineering"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                    <CheckCircle className="w-5 h-5 text-primary-600" />
                    <span className="text-neutral-700 font-medium">{feature}</span>
                  </div>
                ))}
              </motion.div>

              {/* Modern CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <button
                  onClick={() => scrollToSection('products')}
                  className="btn-primary group w-full sm:w-auto min-w-[180px]"
                >
                  Explore Products
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-secondary w-full sm:w-auto min-w-[180px]"
                >
                  Contact US
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Simplified and cleaner */}
      <section id="dashboard" className="section-padding bg-white">
        <div className="container-max">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-headline text-neutral-900 mb-6">
              Why Choose Western Isolators?
            </h2>
            <p className="text-body-large text-neutral-600 max-w-2xl mx-auto">
              Experience the difference with our industry-leading vibration isolation technology.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Shield,
                title: "Premium Quality",
                description: "Rigorous testing and quality assurance ensuring excellence in every product.",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: Zap,
                title: "Superior Performance",
                description: "Advanced technology delivering up to 99% vibration reduction for critical applications.",
                gradient: "from-emerald-500 to-emerald-600"
              },
              {
                icon: Globe,
                title: "Reliable Service",
                description: "Local expertise with dependable support and fast response times for all your needs.",
                gradient: "from-purple-500 to-purple-600"
              },
              {
                icon: Star,
                title: "Custom Solutions",
                description: "In-house engineering team creating tailored solutions for unique requirements.",
                gradient: "from-orange-500 to-orange-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card-minimal text-center p-8 hover-lift group"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-title text-neutral-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section - Clean Product Showcase */}
      <section id="products" className="section-padding gradient-bg-neutral">
        <div className="container-max">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-headline text-neutral-900 mb-6">
              Our Product Range
            </h2>
            <p className="text-body-large text-neutral-600 max-w-2xl mx-auto">
              Precision-engineered solutions designed for optimal performance across diverse industrial applications.
            </p>
          </motion.div>

          {/* Clean Product Grid */}
          <motion.div 
            className="product-grid"
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
                  <div className="card hover-lift group-hover:shadow-2xl h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative aspect-square overflow-hidden bg-gradient-bg-primary rounded-t-2xl">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 text-center flex-1 flex flex-col">
                      <h3 className="text-title text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {product.name.replace(' (WI Series)', '').replace(' Mounts', '')}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed mb-6 flex-1">
                        {product.description.substring(0, 120)}...
                      </p>
                      <div className="flex items-center justify-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors mt-auto">
                        Learn More
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

      {/* Contact Section - Modern & Clean */}
      <section id="contact" className="section-padding bg-neutral-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container-max relative z-10">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-headline text-white mb-6">
              Ready to Solve Your Vibration Challenges?
            </h2>
            <p className="text-body-large text-neutral-300 max-w-2xl mx-auto">
              Connect with our engineering experts to design the perfect vibration isolation solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700"
            >
              <h3 className="text-title text-white mb-8">Get In Touch</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Name *</label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-white placeholder-neutral-400 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Email *</label>
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-white placeholder-neutral-400 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Company</label>
                  <input
                    {...register('company')}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-white placeholder-neutral-400 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Message *</label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={5}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-white placeholder-neutral-400 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your vibration isolation needs..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-title text-white mb-8">Contact Information</h3>
                <div className="space-y-6">
                  {[
                    { icon: Phone, title: "Phone", detail: "+1 (555) 123-4567" },
                    { icon: Mail, title: "Email", detail: "info@westernisolators.com" },
                    { icon: MapPin, title: "Address", detail: "178 Shaded Creek Dr, Kitchener ON N2P0K7" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-neutral-800 rounded-xl border border-neutral-700">
                      <div className="bg-primary-600 p-3 rounded-lg">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">{item.title}</p>
                        <p className="text-neutral-200 whitespace-pre-line">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
                <h4 className="font-semibold text-white mb-3">Why Choose Us?</h4>
                <div className="space-y-3 text-sm text-neutral-200">
                  {[
                    "✓ Industry-leading expertise",
                    "✓ Custom engineering solutions",
                    "✓ Quick turnaround times",
                    "✓ Competitive pricing",
                    "✓ Local support & service"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
