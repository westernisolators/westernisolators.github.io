import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Products from './pages/Products';
import CenterBondedMounts from './pages/CenterBondedMounts';
import OnePieceMounts from './pages/OnePieceMounts';
import TwoPieceMounts from './pages/TwoPieceMounts';
import ThreePieceMounts from './pages/ThreePieceMounts';
import CombinationMounts from './pages/CombinationMounts';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/products/center-bonded" element={<CenterBondedMounts />} />
            <Route path="/products/center-bonded/one-piece" element={<OnePieceMounts />} />
            <Route path="/products/center-bonded/two-piece" element={<TwoPieceMounts />} />
            <Route path="/products/center-bonded/three-piece" element={<ThreePieceMounts />} />
            <Route path="/products/center-bonded/combination" element={<CombinationMounts />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
