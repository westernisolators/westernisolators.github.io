import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MountData {
  series: string;
  partNumber: string;
  load: string;
  stiffness: string;
  type: string;
  dimensions: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
    F: string;
    plateID: string;
    plateThickness: string;
  };
}

const OnePieceMounts = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Parse CSV data into structured format - Complete dataset from CSV
  const mountsData: MountData[] = [
    // 2100 Series
    { series: '2100', partNumber: '2100-X1', load: '75', stiffness: '3000', type: '1', dimensions: { A: '1.09', B: '0.4', C: '0.81', D: '0.62', E: '0.22', F: '1.02', plateID: '0.75', plateThickness: '0.31' } },
    { series: '2100', partNumber: '2100-X3', load: '100', stiffness: '4000', type: '1', dimensions: { A: '1.09', B: '0.4', C: '0.81', D: '0.62', E: '0.22', F: '1.02', plateID: '0.75', plateThickness: '0.31' } },
    { series: '2100', partNumber: '2100-X4', load: '125', stiffness: '5000', type: '1', dimensions: { A: '1.09', B: '0.4', C: '0.81', D: '0.62', E: '0.22', F: '1.02', plateID: '0.75', plateThickness: '0.31' } },
    
    // 2104 Series
    { series: '2104', partNumber: '2104-X0', load: '55', stiffness: '2750', type: '1', dimensions: { A: '1', B: '0.34', C: '0.75', D: '0.32', E: '0.19', F: '0.43', plateID: '0.74', plateThickness: '0.14' } },
    
    // 2105 Series
    { series: '2105', partNumber: '2105-X3', load: '120', stiffness: '6000', type: '1', dimensions: { A: '1', B: '0.38', C: '0.75', D: '0.44', E: '0.19', F: '0.55', plateID: '0.74', plateThickness: '0.25' } },
    
    // 2110 Series
    { series: '2110', partNumber: '2110-X1', load: '90', stiffness: '4500', type: '1', dimensions: { A: '1.09', B: '0.38', C: '0.76', D: '0.69', E: '0.21', F: '0.76', plateID: '0.74', plateThickness: '0.5' } },
    { series: '2110', partNumber: '2110-X5', load: '225', stiffness: '11250', type: '1', dimensions: { A: '1.09', B: '0.38', C: '0.76', D: '0.69', E: '0.21', F: '0.76', plateID: '0.74', plateThickness: '0.5' } },
    
    // 2112 Series
    { series: '2112', partNumber: '2112-X1', load: '50', stiffness: '2000', type: '1', dimensions: { A: '1.09', B: '0.33', C: '0.81', D: '0.62', E: '0.22', F: '0.75', plateID: '0.75', plateThickness: '0.25' } },
    { series: '2112', partNumber: '2112-X3', load: '90', stiffness: '3600', type: '1', dimensions: { A: '1.09', B: '0.33', C: '0.81', D: '0.62', E: '0.22', F: '0.75', plateID: '0.75', plateThickness: '0.25' } },
    { series: '2112', partNumber: '2112-X5', load: '125', stiffness: '5000', type: '1', dimensions: { A: '1.09', B: '0.33', C: '0.81', D: '0.62', E: '0.22', F: '0.75', plateID: '0.75', plateThickness: '0.25' } },
    { series: '2112', partNumber: '2112-X6', load: '155', stiffness: '6200', type: '1', dimensions: { A: '1.09', B: '0.33', C: '0.81', D: '0.62', E: '0.22', F: '0.75', plateID: '0.75', plateThickness: '0.25' } },
    
    // 2114 Series
    { series: '2114', partNumber: '2112-X7', load: '195', stiffness: '6500', type: '1', dimensions: { A: '1.26', B: '0.39', C: '0.76', D: '1.59', E: '0.31', F: '1.71', plateID: '0.79', plateThickness: '1.25' } },
    
    // 2115 Series
    { series: '2115', partNumber: '2115', load: '-', stiffness: '-', type: '1', dimensions: { A: '1.09', B: '0.39', C: '0.76', D: '0.69', E: '0.21', F: '0.92', plateID: '0.74', plateThickness: '0.5' } },
    
    // 2116 Series
    { series: '2116', partNumber: '2116-X7', load: '215', stiffness: '7167', type: '1', dimensions: { A: '1.26', B: '0.39', C: '0.76', D: '0.98', E: '0.26', F: '0.98', plateID: '0.74', plateThickness: '' } },
    
    // 2118 Series
    { series: '2118', partNumber: '2118-X1', load: '100', stiffness: '1111', type: '1', dimensions: { A: '1.25', B: '0.41', C: '0.95', D: '1.07', E: '0.55', F: '1.44', plateID: '0.9', plateThickness: '0.38' } },
    { series: '2118', partNumber: '2118-X4', load: '150', stiffness: '1667', type: '1', dimensions: { A: '1.25', B: '0.41', C: '0.95', D: '1.07', E: '0.55', F: '1.44', plateID: '0.9', plateThickness: '0.38' } },
    { series: '2118', partNumber: '2118-X5', load: '175', stiffness: '1944', type: '1', dimensions: { A: '1.25', B: '0.41', C: '0.95', D: '1.07', E: '0.55', F: '1.44', plateID: '0.9', plateThickness: '0.38' } },
    { series: '2118', partNumber: '2118-X6', load: '210', stiffness: '2333', type: '1', dimensions: { A: '1.25', B: '0.41', C: '0.95', D: '1.07', E: '0.55', F: '1.44', plateID: '0.9', plateThickness: '0.38' } },
    { series: '2118', partNumber: '2118-X7', load: '250', stiffness: '2778', type: '1', dimensions: { A: '1.25', B: '0.41', C: '0.95', D: '1.07', E: '0.55', F: '1.44', plateID: '0.9', plateThickness: '0.38' } },
    
    // 2118A Series
    { series: '2118A', partNumber: '2118A-X1', load: '120', stiffness: '1333', type: '2', dimensions: { A: '1.25', B: '0.41', C: '1.25', D: '1.07', E: '0.61', F: '1.44', plateID: '1.38', plateThickness: '' } },
    { series: '2118A', partNumber: '2118A-X5', load: '180', stiffness: '2000', type: '2', dimensions: { A: '1.25', B: '0.41', C: '1.25', D: '1.07', E: '0.61', F: '1.44', plateID: '1.38', plateThickness: '' } },
    { series: '2118A', partNumber: '2118A-X6', load: '205', stiffness: '2278', type: '2', dimensions: { A: '1.25', B: '0.41', C: '1.25', D: '1.07', E: '0.61', F: '1.44', plateID: '1.38', plateThickness: '' } },
    
    // 2119 Series
    { series: '2119', partNumber: '2119-X7', load: '850', stiffness: '42500', type: '1', dimensions: { A: '1.27', B: '0.4', C: '0.81', D: '0.83', E: '0.35', F: '0.97', plateID: '0.78', plateThickness: '0.5' } },
    
    // 2120 Series
    { series: '2120', partNumber: '2120-X5', load: '550', stiffness: '18334', type: '1', dimensions: { A: '1.57', B: '0.51', C: '1.22', D: '1.2', E: '0.32', F: '1.32', plateID: '1.2', plateThickness: '0.88' } },
    { series: '2120', partNumber: '2120-X6', load: '650', stiffness: '21667', type: '1', dimensions: { A: '1.57', B: '0.51', C: '1.22', D: '1.2', E: '0.32', F: '1.32', plateID: '1.2', plateThickness: '0.88' } },
    { series: '2120', partNumber: '2120-X7', load: '750', stiffness: '25000', type: '1', dimensions: { A: '1.57', B: '0.51', C: '1.22', D: '1.2', E: '0.32', F: '1.32', plateID: '1.2', plateThickness: '0.88' } },
    { series: '2120', partNumber: '2120-X8', load: '850', stiffness: '28334', type: '1', dimensions: { A: '1.57', B: '0.51', C: '1.22', D: '1.2', E: '0.32', F: '1.32', plateID: '1.2', plateThickness: '0.88' } },
    
    // 2121 Series
    { series: '2121', partNumber: '2121-X7', load: '195', stiffness: '6500', type: '1', dimensions: { A: '1.26', B: '0.39', C: '0.75', D: '1.99', E: '0.31', F: '2.11', plateID: '0.79', plateThickness: '1.64' } },
    
    // 2124 Series
    { series: '2124', partNumber: '2124-X0', load: '65', stiffness: '929', type: '1', dimensions: { A: '1.25', B: '0.41', C: '0.95', D: '0.93', E: '0.5', F: '1.3', plateID: '0.9', plateThickness: '0.32' } },
    
    // 2130 Series
    { series: '2130', partNumber: '2130-X1', load: '90', stiffness: '2250', type: '1', dimensions: { A: '1.75', B: '0.52', C: '1.24', D: '1', E: '0.41', F: '1.25', plateID: '1.12', plateThickness: '0.38' } },
    { series: '2130', partNumber: '2130-X2', load: '130', stiffness: '3250', type: '1', dimensions: { A: '1.75', B: '0.52', C: '1.24', D: '1', E: '0.41', F: '1.25', plateID: '1.12', plateThickness: '0.38' } },
    { series: '2130', partNumber: '2130-X3', load: '175', stiffness: '4375', type: '1', dimensions: { A: '1.75', B: '0.52', C: '1.24', D: '1', E: '0.41', F: '1.25', plateID: '1.12', plateThickness: '0.38' } },
    { series: '2130', partNumber: '2130-X4', load: '250', stiffness: '6250', type: '1', dimensions: { A: '1.75', B: '0.52', C: '1.24', D: '1', E: '0.41', F: '1.25', plateID: '1.12', plateThickness: '0.38' } },
    { series: '2130', partNumber: '2130-X6', load: '290', stiffness: '7250', type: '1', dimensions: { A: '1.75', B: '0.52', C: '1.24', D: '1', E: '0.41', F: '1.25', plateID: '1.12', plateThickness: '0.38' } },
    
    // 2150 Series
    { series: '2150', partNumber: '2150-X2', load: '320', stiffness: '3200', type: '1', dimensions: { A: '2', B: '0.53', C: '1.38', D: '1.45', E: '0.75', F: '2', plateID: '1.25', plateThickness: '0.5' } },
    { series: '2150', partNumber: '2150-X3', load: '370', stiffness: '3700', type: '1', dimensions: { A: '2', B: '0.53', C: '1.38', D: '1.45', E: '0.75', F: '2', plateID: '1.25', plateThickness: '0.5' } },
    { series: '2150', partNumber: '2150-X4', load: '440', stiffness: '4400', type: '1', dimensions: { A: '2', B: '0.53', C: '1.38', D: '1.45', E: '0.75', F: '2', plateID: '1.25', plateThickness: '0.5' } },
    
    // 2160 Series
    { series: '2160', partNumber: '2160-X5', load: '380', stiffness: '6333', type: '1', dimensions: { A: '2', B: '0.53', C: '1.35', D: '1.31', E: '0.53', F: '1.62', plateID: '1.25', plateThickness: '0.62' } },
    { series: '2160', partNumber: '2160-X6', load: '480', stiffness: '8000', type: '1', dimensions: { A: '2', B: '0.53', C: '1.35', D: '1.31', E: '0.53', F: '1.62', plateID: '1.25', plateThickness: '0.62' } },
    { series: '2160', partNumber: '2160-X7', load: '605', stiffness: '10083', type: '1', dimensions: { A: '2', B: '0.53', C: '1.35', D: '1.31', E: '0.53', F: '1.62', plateID: '1.25', plateThickness: '0.62' } },
    
    // 2170 Series
    { series: '2170', partNumber: '2170-X1', load: '200', stiffness: '4000', type: '1', dimensions: { A: '2', B: '0.52', C: '1.27', D: '1', E: '0.52', F: '1.3', plateID: '1.2', plateThickness: '0.25' } },
    { series: '2170', partNumber: '2170-X3', load: '325', stiffness: '6500', type: '1', dimensions: { A: '2', B: '0.52', C: '1.27', D: '1', E: '0.52', F: '1.3', plateID: '1.2', plateThickness: '0.25' } },
    { series: '2170', partNumber: '2170-X6', load: '450', stiffness: '9000', type: '1', dimensions: { A: '2', B: '0.52', C: '1.27', D: '1', E: '0.52', F: '1.3', plateID: '1.2', plateThickness: '0.25' } },
    
    // 2180 Series
    { series: '2180', partNumber: '2180-X3', load: '200', stiffness: '4000', type: '1', dimensions: { A: '2', B: '0.53', C: '1.34', D: '1', E: '0.5', F: '1.24', plateID: '1.3', plateThickness: '0.25' } },
    { series: '2180', partNumber: '2180-X4', load: '300', stiffness: '6000', type: '1', dimensions: { A: '2', B: '0.53', C: '1.34', D: '1', E: '0.5', F: '1.24', plateID: '1.3', plateThickness: '0.25' } },
    { series: '2180', partNumber: '2180-X5', load: '400', stiffness: '8000', type: '1', dimensions: { A: '2', B: '0.53', C: '1.34', D: '1', E: '0.5', F: '1.24', plateID: '1.3', plateThickness: '0.25' } },
    
    // 2210 Series
    { series: '2210', partNumber: '2210-X2', load: '225', stiffness: '4090', type: '1', dimensions: { A: '2', B: '0.64', C: '1.33', D: '1.38', E: '0.53', F: '1.6', plateID: '1.25', plateThickness: '0.62' } },
    { series: '2210', partNumber: '2210-X4', load: '350', stiffness: '6365', type: '1', dimensions: { A: '2', B: '0.64', C: '1.33', D: '1.38', E: '0.53', F: '1.6', plateID: '1.25', plateThickness: '0.62' } },
    
    // 2220 Series
    { series: '2220', partNumber: '2220-X3', load: '240', stiffness: '4000', type: '1', dimensions: { A: '2', B: '0.53', C: '1.35', D: '1.38', E: '0.53', F: '1.64', plateID: '1.25', plateThickness: '0.62' } },
    { series: '2220', partNumber: '2220-X4', load: '300', stiffness: '5000', type: '1', dimensions: { A: '2', B: '0.53', C: '1.35', D: '1.38', E: '0.53', F: '1.64', plateID: '1.25', plateThickness: '0.62' } },
    { series: '2220', partNumber: '2220-X5', load: '360', stiffness: '6000', type: '1', dimensions: { A: '2', B: '0.53', C: '1.35', D: '1.38', E: '0.53', F: '1.64', plateID: '1.25', plateThickness: '0.62' } },
    
    // 2222A Series
    { series: '2222A', partNumber: '2222A-X3', load: '400', stiffness: '3333', type: '2', dimensions: { A: '2', B: '0.53', C: '1.92', D: '1.45', E: '0.85', F: '2', plateID: '2', plateThickness: '' } },
    { series: '2222A', partNumber: '2222A-X4', load: '475', stiffness: '3958', type: '2', dimensions: { A: '2', B: '0.53', C: '1.92', D: '1.45', E: '0.85', F: '2', plateID: '2', plateThickness: '' } },
    { series: '2222A', partNumber: '2222A-X5', load: '575', stiffness: '4792', type: '2', dimensions: { A: '2', B: '0.53', C: '1.92', D: '1.45', E: '0.85', F: '2', plateID: '2', plateThickness: '' } },
    
    // 2230 Series
    { series: '2230', partNumber: '2230-X1', load: '210', stiffness: '2333', type: '1', dimensions: { A: '2', B: '0.53', C: '1.38', D: '1.45', E: '0.75', F: '2', plateID: '1.25', plateThickness: '0.5' } },
    { series: '2230', partNumber: '2230-X2', load: '240', stiffness: '2667', type: '1', dimensions: { A: '2', B: '0.53', C: '1.38', D: '1.45', E: '0.75', F: '2', plateID: '1.25', plateThickness: '0.5' } },
    { series: '2230', partNumber: '2230-X3', load: '320', stiffness: '3555', type: '1', dimensions: { A: '2', B: '0.53', C: '1.38', D: '1.45', E: '0.75', F: '2', plateID: '1.25', plateThickness: '0.5' } },
    { series: '2230', partNumber: '2230-X5', load: '380', stiffness: '4222', type: '1', dimensions: { A: '2', B: '0.53', C: '1.38', D: '1.45', E: '0.75', F: '2', plateID: '1.25', plateThickness: '0.5' } },
    { series: '2230', partNumber: '2230-X6', load: '500', stiffness: '5555', type: '1', dimensions: { A: '2', B: '0.53', C: '1.38', D: '1.45', E: '0.75', F: '2', plateID: '1.25', plateThickness: '0.5' } },
    
    // 2231 Series
    { series: '2231', partNumber: '2231-X2', load: '280', stiffness: '1556', type: '1', dimensions: { A: '2', B: '0.53', C: '1.38', D: '2.2', E: '0.75', F: '2.75', plateID: '1.25', plateThickness: '0.5' } },
    { series: '2231', partNumber: '2231-X3', load: '340', stiffness: '1889', type: '1', dimensions: { A: '2', B: '0.53', C: '1.38', D: '2.2', E: '0.75', F: '2.75', plateID: '1.25', plateThickness: '0.5' } },
    { series: '2231', partNumber: '2231-X4', load: '400', stiffness: '2222', type: '1', dimensions: { A: '2', B: '0.53', C: '1.38', D: '2.2', E: '0.75', F: '2.75', plateID: '1.25', plateThickness: '0.5' } },
    
    // 2240 Series
    { series: '2240', partNumber: '2240-X3', load: '450', stiffness: '5000', type: '1', dimensions: { A: '2.35', B: '0.64', C: '1.5', D: '1.5', E: '0.7', F: '2.1', plateID: '1.38', plateThickness: '0.62' } },
    { series: '2240', partNumber: '2240-X4', load: '600', stiffness: '6667', type: '1', dimensions: { A: '2.35', B: '0.64', C: '1.5', D: '1.5', E: '0.7', F: '2.1', plateID: '1.38', plateThickness: '0.62' } },
    { series: '2240', partNumber: '2240-X5', load: '700', stiffness: '7778', type: '1', dimensions: { A: '2.35', B: '0.64', C: '1.5', D: '1.5', E: '0.7', F: '2.1', plateID: '1.38', plateThickness: '0.62' } },
    { series: '2240', partNumber: '2240-X7', load: '1200', stiffness: '13333', type: '1', dimensions: { A: '2.35', B: '0.64', C: '1.5', D: '1.5', E: '0.7', F: '2.1', plateID: '1.38', plateThickness: '0.62' } },
    
    // 2240A Series
    { series: '2240A', partNumber: '2240A-X4', load: '510', stiffness: '5417', type: '2', dimensions: { A: '2.35', B: '0.66', C: '2.19', D: '1.5', E: '0.82', F: '2.11', plateID: '2.38', plateThickness: '' } },
    { series: '2240A', partNumber: '2240A-X5', load: '655', stiffness: '6250', type: '2', dimensions: { A: '2.35', B: '0.66', C: '2.19', D: '1.5', E: '0.82', F: '2.11', plateID: '2.38', plateThickness: '' } },
    
    // 2245 Series
    { series: '2245', partNumber: '2245-X4', load: '350', stiffness: '5833', type: '1', dimensions: { A: '2.5', B: '0.65', C: '1.62', D: '1.69', E: '0.62', F: '2', plateID: '1.5', plateThickness: '0.75' } },
    { series: '2245', partNumber: '2245-X6', load: '650', stiffness: '10833', type: '1', dimensions: { A: '2.5', B: '0.65', C: '1.62', D: '1.69', E: '0.62', F: '2', plateID: '1.5', plateThickness: '0.75' } },
    { series: '2245', partNumber: '2245-X7', load: '800', stiffness: '13333', type: '1', dimensions: { A: '2.5', B: '0.65', C: '1.62', D: '1.69', E: '0.62', F: '2', plateID: '1.5', plateThickness: '0.75' } },
    { series: '2245', partNumber: '2245-X8', load: '1000', stiffness: '16667', type: '1', dimensions: { A: '2.5', B: '0.65', C: '1.62', D: '1.69', E: '0.62', F: '2', plateID: '1.5', plateThickness: '0.75' } },
    
    // 2250 Series
    { series: '2250', partNumber: '2250-X5', load: '450', stiffness: '6430', type: '1', dimensions: { A: '2.5', B: '0.64', C: '1.61', D: '1.75', E: '0.61', F: '2', plateID: '1.5', plateThickness: '0.75' } },
    { series: '2250', partNumber: '2250-X7', load: '850', stiffness: '12143', type: '1', dimensions: { A: '2.5', B: '0.64', C: '1.61', D: '1.75', E: '0.61', F: '2', plateID: '1.5', plateThickness: '0.75' } },
    { series: '2250', partNumber: '2250-X9', load: '1200', stiffness: '17143', type: '1', dimensions: { A: '2.5', B: '0.64', C: '1.61', D: '1.75', E: '0.61', F: '2', plateID: '1.5', plateThickness: '0.75' } },
    
    // 2252 Series
    { series: '2252', partNumber: '2252-X2', load: '750', stiffness: '7500', type: '1', dimensions: { A: '2.8', B: '0.81', C: '1.62', D: '1.63', E: '0.69', F: '2.38', plateID: '1.5', plateThickness: '0.75' } },
    { series: '2252', partNumber: '2252-X3', load: '850', stiffness: '8500', type: '1', dimensions: { A: '2.8', B: '0.81', C: '1.62', D: '1.63', E: '0.69', F: '2.38', plateID: '1.5', plateThickness: '0.75' } },
    { series: '2252', partNumber: '2252-X4', load: '950', stiffness: '9500', type: '1', dimensions: { A: '2.8', B: '0.81', C: '1.62', D: '1.63', E: '0.69', F: '2.38', plateID: '1.5', plateThickness: '0.75' } },
    { series: '2252', partNumber: '2252-X5', load: '1050', stiffness: '10500', type: '1', dimensions: { A: '2.8', B: '0.81', C: '1.62', D: '1.63', E: '0.69', F: '2.38', plateID: '1.5', plateThickness: '0.75' } },
    { series: '2252', partNumber: '2252-X7', load: '1500', stiffness: '15000', type: '1', dimensions: { A: '2.8', B: '0.81', C: '1.62', D: '1.63', E: '0.69', F: '2.38', plateID: '1.5', plateThickness: '0.75' } },
    
    // 2255 Series
    { series: '2255', partNumber: '2255-X1', load: '500', stiffness: '3205', type: '1', dimensions: { A: '2.5', B: '0.64', C: '1.63', D: '2.12', E: '1.01', F: '3.2', plateID: '1.5', plateThickness: '0.75' } },
    { series: '2255', partNumber: '2255-X3', load: '700', stiffness: '4487', type: '1', dimensions: { A: '2.5', B: '0.64', C: '1.63', D: '2.12', E: '1.01', F: '3.2', plateID: '1.5', plateThickness: '0.75' } },
    { series: '2255', partNumber: '2255-X4', load: '800', stiffness: '5128', type: '1', dimensions: { A: '2.5', B: '0.64', C: '1.63', D: '2.12', E: '1.01', F: '3.2', plateID: '1.5', plateThickness: '0.75' } },
    { series: '2255', partNumber: '2255-X5', load: '950', stiffness: '6090', type: '1', dimensions: { A: '2.5', B: '0.64', C: '1.63', D: '2.12', E: '1.01', F: '3.2', plateID: '1.5', plateThickness: '0.75' } },
    
    // 2260 Series
    { series: '2260', partNumber: '2260-X2', load: '450', stiffness: '5294', type: '1', dimensions: { A: '2.97', B: '0.64', C: '1.96', D: '2', E: '0.83', F: '2.25', plateID: '1.81', plateThickness: '0.93' } },
    { series: '2260', partNumber: '2260-X7', load: '1200', stiffness: '14118', type: '1', dimensions: { A: '2.97', B: '0.64', C: '1.96', D: '2', E: '0.83', F: '2.25', plateID: '1.81', plateThickness: '0.93' } },
    { series: '2260', partNumber: '2260-X8', load: '1400', stiffness: '20000', type: '1', dimensions: { A: '2.97', B: '0.64', C: '1.96', D: '2', E: '0.83', F: '2.25', plateID: '1.81', plateThickness: '0.93' } },
    { series: '2260', partNumber: '2260-X9', load: '2000', stiffness: '28571', type: '1', dimensions: { A: '2.97', B: '0.64', C: '1.96', D: '2', E: '0.83', F: '2.25', plateID: '1.81', plateThickness: '0.93' } },
    
    // 2283 Series
    { series: '2283', partNumber: '2283-X3', load: '900', stiffness: '7500', type: '1', dimensions: { A: '3.3', B: '0.81', C: '1.63', D: '1.94', E: '0.88', F: '2.5', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2283', partNumber: '2283-X4', load: '1200', stiffness: '10000', type: '1', dimensions: { A: '3.3', B: '0.81', C: '1.63', D: '1.94', E: '0.88', F: '2.5', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2283', partNumber: '2283-X5', load: '1550', stiffness: '12917', type: '1', dimensions: { A: '3.3', B: '0.81', C: '1.63', D: '1.94', E: '0.88', F: '2.5', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2283', partNumber: '2283-X6', load: '1950', stiffness: '16250', type: '1', dimensions: { A: '3.3', B: '0.81', C: '1.63', D: '1.94', E: '0.88', F: '2.5', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2283', partNumber: '2283-X7', load: '2400', stiffness: '20000', type: '1', dimensions: { A: '3.3', B: '0.81', C: '1.63', D: '1.94', E: '0.88', F: '2.5', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2283', partNumber: '2283-X8', load: '3000', stiffness: '25000', type: '1', dimensions: { A: '3.3', B: '0.81', C: '1.63', D: '1.94', E: '0.88', F: '2.5', plateID: '1.5', plateThickness: '0.88' } },
    
    // 2290 Series
    { series: '2290', partNumber: '2290-X2', load: '950', stiffness: '9500', type: '1', dimensions: { A: '3.75', B: '0.77', C: '2.25', D: '2.13', E: '1.13', F: '2.5', plateID: '2', plateThickness: '0.75' } },
    { series: '2290', partNumber: '2290-X3', load: '1100', stiffness: '11000', type: '1', dimensions: { A: '3.75', B: '0.77', C: '2.25', D: '2.13', E: '1.13', F: '2.5', plateID: '2', plateThickness: '0.75' } },
    { series: '2290', partNumber: '2290-X4', load: '1400', stiffness: '14000', type: '1', dimensions: { A: '3.75', B: '0.77', C: '2.25', D: '2.13', E: '1.13', F: '2.5', plateID: '2', plateThickness: '0.75' } },
    { series: '2290', partNumber: '2290-X5', load: '1800', stiffness: '18000', type: '1', dimensions: { A: '3.75', B: '0.77', C: '2.25', D: '2.13', E: '1.13', F: '2.5', plateID: '2', plateThickness: '0.75' } },
    { series: '2290', partNumber: '2290-X6', load: '2100', stiffness: '21000', type: '1', dimensions: { A: '3.75', B: '0.77', C: '2.25', D: '2.13', E: '1.13', F: '2.5', plateID: '2', plateThickness: '0.75' } },
    { series: '2290', partNumber: '2290-X7', load: '2500', stiffness: '25000', type: '1', dimensions: { A: '3.75', B: '0.77', C: '2.25', D: '2.13', E: '1.13', F: '2.5', plateID: '2', plateThickness: '0.75' } },
    
    // 2295 Series
    { series: '2295', partNumber: '2295-X2', load: '750', stiffness: '6250', type: '1', dimensions: { A: '3.74', B: '0.8', C: '2.23', D: '2.01', E: '1', F: '2.5', plateID: '2', plateThickness: '0.75' } },
    { series: '2295', partNumber: '2295-X3', load: '900', stiffness: '7500', type: '1', dimensions: { A: '3.74', B: '0.8', C: '2.23', D: '2.01', E: '1', F: '2.5', plateID: '2', plateThickness: '0.75' } },
    { series: '2295', partNumber: '2295-X4', load: '1200', stiffness: '10000', type: '1', dimensions: { A: '3.74', B: '0.8', C: '2.23', D: '2.01', E: '1', F: '2.5', plateID: '2', plateThickness: '0.75' } },
    { series: '2295', partNumber: '2295-X5', load: '1600', stiffness: '13333', type: '1', dimensions: { A: '3.74', B: '0.8', C: '2.23', D: '2.01', E: '1', F: '2.5', plateID: '2', plateThickness: '0.75' } },
    { series: '2295', partNumber: '2295-X6', load: '2100', stiffness: '17500', type: '1', dimensions: { A: '3.74', B: '0.8', C: '2.23', D: '2.01', E: '1', F: '2.5', plateID: '2', plateThickness: '0.75' } },
    { series: '2295', partNumber: '2295-X7', load: '2500', stiffness: '20833', type: '1', dimensions: { A: '3.74', B: '0.8', C: '2.23', D: '2.01', E: '1', F: '2.5', plateID: '2', plateThickness: '0.75' } },
    { series: '2295', partNumber: '2295-X8', load: '3100', stiffness: '25833', type: '1', dimensions: { A: '3.74', B: '0.8', C: '2.23', D: '2.01', E: '1', F: '2.5', plateID: '2', plateThickness: '0.75' } }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-neutral-200">
        <div className="container-max">
          <div className="flex items-center justify-between py-6">
            <Link 
              to="/products/center-bonded" 
              className="inline-flex items-center text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Center Bonded Mounts
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container-max">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              WI Series One Piece Mounts
            </h1>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              The WI Series represents our premier line of one-piece center bonded rubber mounts, 
              featuring precision-bonded rubber to metal construction for superior vibration isolation. 
              Designed for durability and performance across a wide range of industrial applications.
            </p>
          </motion.div>

          {/* Product Images */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-neutral-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-neutral-600 text-2xl font-bold">WI</span>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-700">Type 1 Mount</h3>
                  <p className="text-neutral-600 text-sm">Standard Configuration</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-neutral-900 mb-2">Type 1</h4>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-neutral-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-neutral-600 text-2xl font-bold">WI</span>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-700">Type 2 Mount</h3>
                  <p className="text-neutral-600 text-sm">Enhanced Configuration</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-neutral-900 mb-2">Type 2 Mount</h4>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-16">
        <div className="container-max">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral-900 text-center mb-8">
              Complete Product Specifications
            </h2>

            {/* Unified Detailed Specifications Table */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-neutral-50">
                    <tr>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider sticky left-0 bg-neutral-50">Series</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Part Number</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Type</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Load (lbs)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Stiffness (lbs/in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">A (in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">B (in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">C (in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">D (in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">E (in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">F (in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Plate ID (in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Plate Thickness (in)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    {mountsData.map((mount, index) => (
                      <tr key={mount.partNumber} className={index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                        <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-accent-600 sticky left-0 bg-inherit">
                          {mount.series}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-primary-600">
                          {mount.partNumber}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">
                          {mount.type}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-900 font-medium">
                          {mount.load}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-900 font-medium">
                          {mount.stiffness}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.A}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.B}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.C}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.D}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.E}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.F}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.plateID}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.plateThickness || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-neutral-50 px-6 py-4">
                <p className="text-sm text-neutral-600">
                  <strong>Note:</strong> All dimensions are in inches.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OnePieceMounts;
