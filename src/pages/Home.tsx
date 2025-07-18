import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Users, Shield, Zap, BarChart3, Globe, Star } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { productCategories } from '../data/products';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Home = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  
  const onSubmit = (data: ContactFormData) => {
    console.log('Contact form submitted:', data);
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-neutral-50 opacity-60"></div>
        
        {/* Main Content */}
        <div className="container-max w-full relative z-10">
          <div className="flex items-center justify-center min-h-screen py-20">
            {/* Main Content */}
            <motion.div 
              className="max-w-4xl mx-auto text-center space-y-8 lg:space-y-12"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-semibold shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Next-Generation Vibration Control
              </motion.div>

              {/* Headline */}
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 leading-[1.1] tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Western Isolators:{' '}
                <span className="text-primary-700">
                  Precision Engineered
                </span>{' '}
                Vibration Solutions
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed font-medium"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Western Isolators specializes in manufacturing premium rubber isolation mounts, spring isolators, and custom vibration control systems. We engineer advanced solutions to protect critical equipment and ensure optimal performance in demanding industrial environments.
              </motion.p>

              {/* Key Points */}
              <motion.div
                className="max-w-2xl mx-auto space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                {[
                  "Advanced engineering for innovative applications",
                  "State-of-the-art manufacturing technology",
                  "Rigorous testing and quality assurance protocols"
                ].map((point, index) => (
                  <div key={index} className="flex items-center justify-center space-x-3">
                    <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-neutral-700 font-medium text-center">{point}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <button
                  onClick={() => scrollToSection('products')}
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 inline-flex items-center justify-center group shadow-lg hover:shadow-xl"
                >
                  View Our Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-0.5 transition-transform duration-300 ease-out" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-white border-2 border-primary-600 text-primary-700 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg transition-all duration-200"
                >
                  Get Custom Quote
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-neutral-200 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="text-center">
                  <p className="text-2xl font-bold text-neutral-900">24/7</p>
                  <p className="text-neutral-600 text-sm font-medium">Technical Support</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-neutral-900">100%</p>
                  <p className="text-neutral-600 text-sm font-medium">Quality Focus</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-neutral-900">99.9%</p>
                  <p className="text-neutral-600 text-sm font-medium">Precision Rating</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="dashboard" className="py-24 lg:py-32 bg-white">
        <div className="container-max">
          <motion.div 
            className="text-center mb-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-semibold shadow-sm mb-6"
              variants={fadeInUp}
            >
              Advanced Engineering Solutions
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              Why Choose Western Isolators?
            </h2>
            <p className="text-xl text-neutral-700 max-w-2xl mx-auto leading-relaxed font-medium">
              Cutting-edge engineering excellence, innovation, and superior performance in vibration isolation technology.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Shield,
                title: "Premium Quality Standards",
                description: "Rigorous quality management systems ensuring consistent excellence in every product we manufacture",
                color: "bg-primary-600 text-white",
                bgColor: "bg-primary-50",
                borderColor: "border-primary-200"
              },
              {
                icon: Zap,
                title: "Superior Performance",
                description: "Advanced isolation technology delivering up to 99% vibration reduction for critical equipment protection",
                color: "bg-accent-600 text-white",
                bgColor: "bg-accent-50",
                borderColor: "border-accent-200"
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Comprehensive worldwide service capabilities with local engineering expertise, efficient shipping, and dedicated technical support",
                color: "bg-neutral-700 text-white",
                bgColor: "bg-neutral-50",
                borderColor: "border-neutral-200"
              },
              {
                icon: BarChart3,
                title: "Custom Engineering",
                description: "In-house design team creates tailored solutions for unique applications with precise specifications",
                color: "bg-primary-700 text-white",
                bgColor: "bg-primary-50",
                borderColor: "border-primary-200"
              },
              {
                icon: Users,
                title: "Expert Technical Support",
                description: "Dedicated engineering team providing consultation, installation guidance, and ongoing maintenance support",
                color: "bg-accent-700 text-white",
                bgColor: "bg-accent-50",
                borderColor: "border-accent-200"
              },
              {
                icon: Star,
                title: "Premium Materials",
                description: "High-grade rubber compounds and precision steel components for maximum durability and performance",
                color: "bg-neutral-800 text-white",
                bgColor: "bg-neutral-50",
                borderColor: "border-neutral-200"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`${feature.bgColor} ${feature.borderColor} border rounded-2xl p-8 transition-shadow duration-300 hover:shadow-md`}
              >
                <div className={`inline-flex p-4 rounded-xl ${feature.color} mb-6`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 lg:py-32 bg-neutral-50">
        <div className="container-max">
          <motion.div 
            className="text-center mb-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-semibold shadow-sm mb-6"
              variants={fadeInUp}
            >
              Innovative Isolation Technology
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              Our Product Range
            </h2>
            <p className="text-xl text-neutral-700 max-w-2xl mx-auto leading-relaxed font-medium">
              Comprehensive vibration isolation solutions engineered for maximum performance across diverse industrial applications.
            </p>
          </motion.div>

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
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm border border-neutral-200 transition-shadow duration-300 hover:shadow-md"
              >
                <Link to={`/products/${product.id}`} className="block">
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-neutral-900 mb-3 transition-colors duration-300 group-hover:text-primary-700">
                      {product.name}
                    </h3>
                    <p className="text-neutral-700 mb-6 text-sm leading-relaxed line-clamp-3 font-medium">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center text-primary-700 font-bold text-sm">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 text-primary-700" />
                      </span>
                      {product.subProducts && (
                        <span className="text-xs text-neutral-600 bg-primary-100 px-3 py-1 rounded-full border border-primary-200 font-semibold">
                          {product.subProducts.length} variants
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 bg-neutral-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container-max relative z-10">
          <motion.div 
            className="text-center mb-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-semibold shadow-sm mb-6"
              variants={fadeInUp}
            >
              Connect With Us
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to solve your vibration challenges?
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed font-medium">
              Connect with our engineering experts to design the perfect vibration isolation solution for your specific requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-neutral-800 rounded-xl p-8 border-2 border-neutral-700 shadow-2xl"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      placeholder="Your full name"
                      className="w-full px-4 py-4 bg-neutral-700 border-2 border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-white placeholder-neutral-300 hover:border-neutral-500 font-medium"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-400 font-semibold">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      placeholder="your.email@company.com"
                      className="w-full px-4 py-4 bg-neutral-700 border-2 border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-white placeholder-neutral-300 hover:border-neutral-500 font-medium"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-400 font-semibold">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <textarea
                      rows={6}
                      {...register('message', { required: 'Message is required' })}
                      placeholder="Tell us about your vibration isolation requirements..."
                      className="w-full px-4 py-4 bg-neutral-700 border-2 border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-white placeholder-neutral-300 hover:border-neutral-500 resize-none font-medium"
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-400 font-semibold">{errors.message.message}</p>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Request Consultation
                </button>
              </form>
            </motion.div>

            <motion.div
              className="space-y-8"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {[
                    { icon: Phone, title: "Phone", detail: "+1 (555) 123-4567", color: "bg-primary-600" },
                    { icon: Mail, title: "Email", detail: "info@westernisolators.com", color: "bg-primary-600" },
                    { icon: MapPin, title: "Address", detail: "1234 Industrial Avenue\nManufacturing City, MC 12345", color: "bg-primary-600" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-neutral-800 rounded-lg border-2 border-neutral-700 hover:border-neutral-600 transition-colors duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`${item.color} p-3 rounded-lg`}>
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">{item.title}</p>
                        <p className="text-neutral-200 text-sm whitespace-pre-line font-medium">{item.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div 
                className="bg-neutral-800 p-6 rounded-lg border-2 border-neutral-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-white mb-3 text-sm">Business Hours</h4>
                <div className="space-y-2 text-sm text-neutral-200">
                  {[
                    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
                    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
                    { day: "Sunday", hours: "Closed" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between font-medium">
                      <span>{item.day}</span>
                      <span>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;