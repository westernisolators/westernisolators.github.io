import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import OnePieceMounts from './pages/OnePieceMounts';
import TwoPieceMounts from './pages/TwoPieceMounts';
import ThreePieceMounts from './pages/ThreePieceMounts';
import CombinationMounts from './pages/CombinationMounts';
import MiscellaneousMounts from './pages/MiscellaneousMounts';
import Isolators from './pages/Isolators';
import Brushes from './pages/Brushes';
import RubberExtrusion from './pages/RubberExtrusion';


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
            <Route path="/products/one-piece" element={<OnePieceMounts />} />
            <Route path="/products/two-piece" element={<TwoPieceMounts />} />
            <Route path="/products/three-piece" element={<ThreePieceMounts />} />
            <Route path="/products/combination" element={<CombinationMounts />} />
            <Route path="/products/miscellaneous" element={<MiscellaneousMounts />} />
            <Route path="/products/isolators" element={<Isolators />} />
            <Route path="/products/brushes" element={<Brushes />} />

            <Route path="/products/rubber-extrusion" element={<RubberExtrusion />} />

          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
