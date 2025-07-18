import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // We're on the home page, scroll normally
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden border-t border-gray-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-max py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <motion.div 
              className="flex items-center space-x-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-2xl font-bold">Western Isolators</span>
            </motion.div>
            
            <motion.p 
              className="text-white/80 mb-8 max-w-md text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Innovative manufacturer of premium vibration isolation systems. Engineering precision solutions for industrial excellence with cutting-edge technology.
            </motion.p>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-200">
                  <Phone className="h-5 w-5 text-primary-600" />
                </div>
                <span className="text-white/80 group-hover:text-white transition-colors duration-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-200">
                  <Mail className="h-5 w-5 text-primary-600" />
                </div>
                <span className="text-white/80 group-hover:text-white transition-colors duration-200">info@westernisolators.com</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-accent-500/20 rounded-xl flex items-center justify-center group-hover:bg-accent-500/30 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-accent-400" />
                </div>
                <span className="text-white/80 group-hover:text-white transition-colors duration-300">
                  1234 Industrial Ave, Manufacturing City, MC 12345
                </span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-8 text-primary-400">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', section: 'home' },
                { name: 'About Us', section: 'dashboard' },
                { name: 'Products', section: 'products' },
                { name: 'Contact', section: 'contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollToSection(link.section)}
                    className="text-white/80 hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-accent-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Product Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-8 text-primary-400">Products</h3>
            <ul className="space-y-4">
              {[
                'Center Bonded Mounts',
                'Platform Anti-Vibration',
                'Shear Rubber Mounts',
                'Anti-Vibration Bushings'
              ].map((product) => (
                <li key={product}>
                  <button 
                    onClick={() => scrollToSection('products')}
                    className="text-white/80 hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-accent-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-700 mt-16 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2025 Western Isolators. All rights reserved.
            </p>
            <div className="flex items-center space-x-8 mt-6 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <button 
                onClick={scrollToTop}
                className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
