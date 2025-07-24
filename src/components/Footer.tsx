import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
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
    <footer className="bg-neutral-900 text-white relative overflow-hidden">
      {/* Clean Background */}
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
              <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="text-2xl font-bold">Western Isolators</span>
            </motion.div>
            
            <motion.p 
              className="text-neutral-300 mb-8 max-w-md text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Leading manufacturer of precision vibration isolation systems, delivering innovative solutions for industrial excellence.
            </motion.p>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {[
                { icon: Phone, text: "+1 (555) 123-4567", color: "bg-blue-600" },
                { icon: Mail, text: "info@westernisolators.com", color: "bg-emerald-600" },
                { icon: MapPin, text: "178 Shaded Creek Dr, Kitchener ON N2P0K7", color: "bg-purple-600" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 group cursor-pointer">
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-neutral-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-8 text-primary-400">Quick Links</h3>
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
                    className="text-neutral-300 hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center group font-medium"
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
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
            <h3 className="text-xl font-bold mb-8 text-primary-400">Products</h3>
            <ul className="space-y-4">
              {[
                { name: 'One-Piece Mounts', path: '/products/one-piece' },
                { name: 'Two-Piece Mounts', path: '/products/two-piece' },
                { name: 'Three-Piece Mounts', path: '/products/three-piece' },
                { name: 'Combination Mounts', path: '/products/combination' },
                { name: 'Miscellaneous Mounts', path: '/products/miscellaneous' }
              ].map((product) => (
                <li key={product.name}>
                  <button 
                    onClick={() => navigate(product.path)}
                    className="text-neutral-300 hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center group font-medium"
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {product.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-neutral-700 mt-16 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm font-medium">
              © 2025 Western Isolators. All rights reserved.
            </p>
            <div className="flex items-center space-x-8 mt-6 md:mt-0">
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors duration-300 font-medium">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors duration-300 font-medium">
                Terms of Service
              </a>
              <button 
                onClick={scrollToTop}
                className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
