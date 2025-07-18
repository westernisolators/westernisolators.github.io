import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', href: '#home', isRoute: false },
    { name: 'About', href: '#dashboard', isRoute: false },
    { name: 'Products', href: '/products/center-bonded', isRoute: true, section: 'products' },
  ];

  const scrollToSection = (href: string) => {
    // If we're not on the home page and trying to scroll to a section, go to home first
    if (location.pathname !== '/' && href.startsWith('#')) {
      navigate('/');
      setTimeout(() => {
        const sectionId = href.replace('#', '');
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
      const sectionId = href.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      scrollToSection('#home');
    }
  };

  const handleContactClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      scrollToSection('#contact');
    }
  };

  const isActive = (href: string, section?: string) => {
    // Only show active state on home page for section links and Products
    if (location.pathname !== '/' && (href.startsWith('#') || section === 'products')) {
      return false;
    }
    if (section === 'products') {
      return activeSection === 'products';
    }
    return activeSection === href.replace('#', '');
  };

  useEffect(() => {
    // Only track scroll sections on home page
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      const sections = ['home', 'dashboard', 'products', 'contact'];
      const scrollPosition = window.scrollY + 100;
      setScrolled(window.scrollY > 50);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-max">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={handleLogoClick}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
            </div>
            <span className={`text-xl font-medium transition-colors duration-300 ${
              scrolled ? 'text-gray-800' : 'text-neutral-900'
            }`}>
              Western Isolators
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item, index) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive(item.href, item.section)
                      ? scrolled 
                        ? 'bg-primary-600 text-white'
                        : 'bg-primary-600 text-white shadow-md'
                      : scrolled
                        ? 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
                        : 'text-neutral-700 hover:text-primary-600 hover:bg-white/80'
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? scrolled 
                        ? 'bg-primary-600 text-white'
                        : 'bg-primary-600 text-white shadow-md'
                      : scrolled
                        ? 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
                        : 'text-neutral-700 hover:text-primary-600 hover:bg-white/80'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.button>
              )
            ))}
            <motion.button 
              onClick={handleContactClick}
              className="ml-4 px-6 py-3 rounded-lg font-medium bg-primary-600 text-white hover:bg-primary-700 shadow-sm hover:shadow-md transition-all duration-200"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-full transition-colors duration-300 ${
                scrolled ? 'text-neutral-700 hover:bg-neutral-100' : 'text-neutral-700 hover:bg-white/80'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white rounded-2xl mt-4 p-4 shadow-lg border border-gray-100"
          >
            <div className="space-y-2">
              {navigation.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isActive(item.href, item.section)
                        ? 'bg-primary-600 text-white'
                        : 'text-neutral-900 hover:bg-gray-100'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? 'bg-primary-600 text-white'
                        : 'text-neutral-900 hover:bg-gray-100'
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.button>
                )
              ))}
              <motion.button 
                onClick={handleContactClick}
                className="w-full mt-4 bg-primary-600 text-white font-medium py-3 px-4 rounded-xl hover:bg-primary-700 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
