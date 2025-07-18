import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MountData {
  series: string;
  partNumber: string;
  load: string;
  stiffness: string;
  dimensions: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
    F: string;
    G: string;
    plateID: string;
    plateThickness: string;
  };
  threadType?: string;
}

const TwoPieceMounts = () => {
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
    // 2300 Series
    {
      series: '2300',
      partNumber: '2300-X2',
      load: '18',
      stiffness: '3600',
      dimensions: { A: '0.88', B: '0.33', C: '0.52', D: '0.52', E: '0.6', F: '0.35', G: '0.28', plateID: '0.53', plateThickness: '0.11' },
      threadType: ''
    },
    // 2305 Series
    {
      series: '2305',
      partNumber: '2305',
      load: '',
      stiffness: '',
      dimensions: { A: '1.29', B: '0.33', C: '0.66', D: '0.52', E: '0.88', F: '0.22', G: '0.22', plateID: '0.63', plateThickness: '0.25' },
      threadType: ''
    },
    // 2306 Series
    {
      series: '2306',
      partNumber: '2306',
      load: '',
      stiffness: '',
      dimensions: { A: '1.29', B: '0.33', C: '0.66', D: '0.54', E: '1.04', F: '0.22', G: '0.22', plateID: '0.63', plateThickness: '0.39' },
      threadType: ''
    },
    // 2310 Series
    {
      series: '2310',
      partNumber: '2310-X0',
      load: '60',
      stiffness: '1200',
      dimensions: { A: '1.25', B: '0.41', C: '0.76', D: '0.55', E: '0.98', F: '0.5', G: '0.5', plateID: '0.74', plateThickness: '0.13' },
      threadType: ''
    },
    {
      series: '2310',
      partNumber: '2310-X1',
      load: '70',
      stiffness: '1400',
      dimensions: { A: '1.25', B: '0.41', C: '0.76', D: '0.55', E: '0.98', F: '0.5', G: '0.5', plateID: '0.74', plateThickness: '0.13' },
      threadType: ''
    },
    {
      series: '2310',
      partNumber: '2310-X3',
      load: '110',
      stiffness: '2200',
      dimensions: { A: '1.25', B: '0.41', C: '0.76', D: '0.55', E: '0.98', F: '0.5', G: '0.5', plateID: '0.74', plateThickness: '0.13' },
      threadType: ''
    },
    {
      series: '2310',
      partNumber: '2310-X5',
      load: '175',
      stiffness: '3500',
      dimensions: { A: '1.25', B: '0.41', C: '0.76', D: '0.55', E: '0.98', F: '0.5', G: '0.5', plateID: '0.74', plateThickness: '0.13' },
      threadType: ''
    },
    // 2311 Series
    {
      series: '2311',
      partNumber: '2311-X00',
      load: '50',
      stiffness: '1000',
      dimensions: { A: '1.25', B: '0.39', C: '0.78', D: '0.55', E: '1.06', F: '0.5', G: '0.5', plateID: '0.75', plateThickness: '0.19' },
      threadType: ''
    },
    {
      series: '2311',
      partNumber: '2311-X0',
      load: '60',
      stiffness: '1200',
      dimensions: { A: '1.25', B: '0.39', C: '0.78', D: '0.55', E: '1.06', F: '0.5', G: '0.5', plateID: '0.75', plateThickness: '0.19' },
      threadType: ''
    },
    {
      series: '2311',
      partNumber: '2311-X1',
      load: '80',
      stiffness: '1600',
      dimensions: { A: '1.25', B: '0.39', C: '0.78', D: '0.55', E: '1.06', F: '0.5', G: '0.5', plateID: '0.75', plateThickness: '0.19' },
      threadType: ''
    },
    // 2312 Series
    {
      series: '2312',
      partNumber: '2312-X00',
      load: '50',
      stiffness: '1000',
      dimensions: { A: '1.25', B: '0.39', C: '0.78', D: '0.55', E: '1.03', F: '0.5', G: '0.5', plateID: '0.75', plateThickness: '0.16' },
      threadType: ''
    },
    {
      series: '2312',
      partNumber: '2312-X0',
      load: '60',
      stiffness: '1200',
      dimensions: { A: '1.25', B: '0.39', C: '0.78', D: '0.55', E: '1.03', F: '0.5', G: '0.5', plateID: '0.75', plateThickness: '0.16' },
      threadType: ''
    },
    // 2315 Series
    {
      series: '2315',
      partNumber: '2315-X00',
      load: '40',
      stiffness: '1333',
      dimensions: { A: '1.25', B: '0.39', C: '0.76', D: '0.55', E: '0.98', F: '0.38', G: '0.38', plateID: '0.73', plateThickness: '0.31' },
      threadType: ''
    },
    {
      series: '2315',
      partNumber: '2315-X1',
      load: '60',
      stiffness: '2000',
      dimensions: { A: '1.25', B: '0.39', C: '0.76', D: '0.55', E: '0.98', F: '0.38', G: '0.38', plateID: '0.73', plateThickness: '0.31' },
      threadType: ''
    },
    {
      series: '2315',
      partNumber: '2315-X3',
      load: '95',
      stiffness: '3167',
      dimensions: { A: '1.25', B: '0.39', C: '0.76', D: '0.55', E: '0.98', F: '0.38', G: '0.38', plateID: '0.73', plateThickness: '0.31' },
      threadType: ''
    },
    {
      series: '2315',
      partNumber: '2315-X5',
      load: '140',
      stiffness: '4667',
      dimensions: { A: '1.25', B: '0.39', C: '0.76', D: '0.55', E: '0.98', F: '0.38', G: '0.38', plateID: '0.73', plateThickness: '0.31' },
      threadType: ''
    },
    {
      series: '2315',
      partNumber: '2315-X6',
      load: '170',
      stiffness: '5667',
      dimensions: { A: '1.25', B: '0.39', C: '0.76', D: '0.55', E: '0.98', F: '0.38', G: '0.38', plateID: '0.73', plateThickness: '0.31' },
      threadType: ''
    },
    // 2317A Series
    {
      series: '2317A',
      partNumber: '2317A-X4',
      load: '460',
      stiffness: '11500',
      dimensions: { A: '1.75', B: '0.39', C: '0.98', D: '0.64', E: '0.91', F: '0.38', G: '0.38', plateID: '1', plateThickness: '0.25' },
      threadType: ''
    },
    {
      series: '2317A',
      partNumber: '2317A-X5',
      load: '520',
      stiffness: '13000',
      dimensions: { A: '1.75', B: '0.39', C: '0.98', D: '0.64', E: '0.91', F: '0.38', G: '0.38', plateID: '1', plateThickness: '0.25' },
      threadType: ''
    },
    // 2320 Series
    {
      series: '2320',
      partNumber: '2320-X00',
      load: '45',
      stiffness: '900',
      dimensions: { A: '1.31', B: '0.4', C: '0.79', D: '0.58', E: '1.25', F: '0.48', G: '0.48', plateID: '0.75', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2320',
      partNumber: '2320-X0',
      load: '60',
      stiffness: '1200',
      dimensions: { A: '1.31', B: '0.4', C: '0.79', D: '0.58', E: '1.25', F: '0.48', G: '0.48', plateID: '0.75', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2320',
      partNumber: '2320-X1',
      load: '75',
      stiffness: '1500',
      dimensions: { A: '1.31', B: '0.4', C: '0.79', D: '0.58', E: '1.25', F: '0.48', G: '0.48', plateID: '0.75', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2320',
      partNumber: '2320-X2',
      load: '90',
      stiffness: '1800',
      dimensions: { A: '1.31', B: '0.4', C: '0.79', D: '0.58', E: '1.25', F: '0.48', G: '0.48', plateID: '0.75', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2320',
      partNumber: '2320-X3',
      load: '120',
      stiffness: '2400',
      dimensions: { A: '1.31', B: '0.4', C: '0.79', D: '0.58', E: '1.25', F: '0.48', G: '0.48', plateID: '0.75', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2320',
      partNumber: '2320-X4',
      load: '150',
      stiffness: '3000',
      dimensions: { A: '1.31', B: '0.4', C: '0.79', D: '0.58', E: '1.25', F: '0.48', G: '0.48', plateID: '0.75', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2320',
      partNumber: '2320-X5',
      load: '190',
      stiffness: '3800',
      dimensions: { A: '1.31', B: '0.4', C: '0.79', D: '0.58', E: '1.25', F: '0.48', G: '0.48', plateID: '0.75', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2320',
      partNumber: '2320-X6',
      load: '250',
      stiffness: '5000',
      dimensions: { A: '1.31', B: '0.4', C: '0.79', D: '0.58', E: '1.25', F: '0.48', G: '0.48', plateID: '0.75', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2320',
      partNumber: '2320-X7',
      load: '310',
      stiffness: '6200',
      dimensions: { A: '1.31', B: '0.4', C: '0.79', D: '0.58', E: '1.25', F: '0.48', G: '0.48', plateID: '0.75', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2320',
      partNumber: '2320-X8',
      load: '400',
      stiffness: '8000',
      dimensions: { A: '1.31', B: '0.4', C: '0.79', D: '0.58', E: '1.25', F: '0.48', G: '0.48', plateID: '0.75', plateThickness: '0.38' },
      threadType: ''
    },
    // 2325A Series
    {
      series: '2325A',
      partNumber: '2325A-X5',
      load: '260',
      stiffness: '4333',
      dimensions: { A: '1.64', B: '', C: '1.03', D: '0.68', E: '1.33', F: '0.63', G: '0.63', plateID: '1.06', plateThickness: '0.24' },
      threadType: 'M10 X 1.5'
    },
    {
      series: '2325A',
      partNumber: '2325A-X6',
      load: '325',
      stiffness: '5417',
      dimensions: { A: '1.64', B: '', C: '1.03', D: '0.68', E: '1.33', F: '0.63', G: '0.63', plateID: '1.06', plateThickness: '0.24' },
      threadType: 'M10 X 1.6'
    },
    {
      series: '2325A',
      partNumber: '2325A-X7',
      load: '410',
      stiffness: '6833',
      dimensions: { A: '1.64', B: '', C: '1.03', D: '0.68', E: '1.33', F: '0.63', G: '0.63', plateID: '1.06', plateThickness: '0.24' },
      threadType: 'M10 X 1.7'
    },
    // 2330 Series
    {
      series: '2330',
      partNumber: '2330-X0',
      load: '100',
      stiffness: '1430',
      dimensions: { A: '1.88', B: '0.53', C: '1.3', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    {
      series: '2330',
      partNumber: '2330-X1',
      load: '130',
      stiffness: '1860',
      dimensions: { A: '1.88', B: '0.53', C: '1.3', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    {
      series: '2330',
      partNumber: '2330-X2',
      load: '160',
      stiffness: '2285',
      dimensions: { A: '1.88', B: '0.53', C: '1.3', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    {
      series: '2330',
      partNumber: '2330-X3',
      load: '190',
      stiffness: '2715',
      dimensions: { A: '1.88', B: '0.53', C: '1.3', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    {
      series: '2330',
      partNumber: '2330-X4',
      load: '220',
      stiffness: '3140',
      dimensions: { A: '1.88', B: '0.53', C: '1.3', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    {
      series: '2330',
      partNumber: '2330-X5',
      load: '260',
      stiffness: '3715',
      dimensions: { A: '1.88', B: '0.53', C: '1.3', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    {
      series: '2330',
      partNumber: '2330-X6',
      load: '340',
      stiffness: '4860',
      dimensions: { A: '1.88', B: '0.53', C: '1.3', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    {
      series: '2330',
      partNumber: '2330-X7',
      load: '500',
      stiffness: '7145',
      dimensions: { A: '1.88', B: '0.53', C: '1.3', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    {
      series: '2330',
      partNumber: '2330-X8',
      load: '630',
      stiffness: '9000',
      dimensions: { A: '1.88', B: '0.53', C: '1.3', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    {
      series: '2330',
      partNumber: '2330-X9',
      load: '800',
      stiffness: '11430',
      dimensions: { A: '1.88', B: '0.53', C: '1.3', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    // 2330A Series
    {
      series: '2330A',
      partNumber: '2330A-X0',
      load: '130',
      stiffness: '1857',
      dimensions: { A: '1.88', B: '0.53', C: '1.23', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    {
      series: '2330A',
      partNumber: '2330A-X1',
      load: '165',
      stiffness: '2357',
      dimensions: { A: '1.88', B: '0.53', C: '1.23', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    {
      series: '2330A',
      partNumber: '2330A-X4',
      load: '300',
      stiffness: '4286',
      dimensions: { A: '1.88', B: '0.53', C: '1.23', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    {
      series: '2330A',
      partNumber: '2330A-X8',
      load: '700',
      stiffness: '10000',
      dimensions: { A: '1.88', B: '0.53', C: '1.23', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    // 2330AS Series
    {
      series: '2330AS',
      partNumber: '2330AS-X0',
      load: '140',
      stiffness: '2000',
      dimensions: { A: '1.88', B: '0.53', C: '1.23', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    {
      series: '2330AS',
      partNumber: '2330AS-X1',
      load: '180',
      stiffness: '2571',
      dimensions: { A: '1.88', B: '0.53', C: '1.23', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    // 2331 Series
    {
      series: '2331',
      partNumber: '2331-X0',
      load: '80',
      stiffness: '1140',
      dimensions: { A: '1.88', B: '0.4', C: '1.3', D: '0.83', E: '1.82', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2331',
      partNumber: '2331-X1',
      load: '100',
      stiffness: '1430',
      dimensions: { A: '1.88', B: '0.4', C: '1.3', D: '0.83', E: '1.82', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2331',
      partNumber: '2331-X3',
      load: '140',
      stiffness: '2000',
      dimensions: { A: '1.88', B: '0.4', C: '1.3', D: '0.83', E: '1.82', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2331',
      partNumber: '2331-X4',
      load: '170',
      stiffness: '2430',
      dimensions: { A: '1.88', B: '0.4', C: '1.3', D: '0.83', E: '1.82', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2331',
      partNumber: '2331-X5',
      load: '210',
      stiffness: '3000',
      dimensions: { A: '1.88', B: '0.4', C: '1.3', D: '0.83', E: '1.82', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2331',
      partNumber: '2331-X6',
      load: '260',
      stiffness: '3720',
      dimensions: { A: '1.88', B: '0.4', C: '1.3', D: '0.83', E: '1.82', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2331',
      partNumber: '2331-X7',
      load: '350',
      stiffness: '5000',
      dimensions: { A: '1.88', B: '0.4', C: '1.3', D: '0.83', E: '1.82', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.38' },
      threadType: ''
    },
    // 2331A Series
    {
      series: '2331A',
      partNumber: '2331A-X1',
      load: '120',
      stiffness: '1714',
      dimensions: { A: '1.88', B: '0.4', C: '1.3', D: '0.83', E: '1.82', F: '0.78', G: '0.78', plateID: '1.34', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2331A',
      partNumber: '2331A-X2',
      load: '170',
      stiffness: '2428',
      dimensions: { A: '1.88', B: '0.4', C: '1.3', D: '0.83', E: '1.82', F: '0.78', G: '0.78', plateID: '1.34', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2331A',
      partNumber: '2331A-X3',
      load: '200',
      stiffness: '2857',
      dimensions: { A: '1.88', B: '0.4', C: '1.3', D: '0.83', E: '1.82', F: '0.78', G: '0.78', plateID: '1.34', plateThickness: '0.38' },
      threadType: ''
    },
    // 2332 Series
    {
      series: '2332',
      partNumber: '2332-X9',
      load: '800',
      stiffness: '11429',
      dimensions: { A: '1.88', B: '0.53', C: '1.3', D: '0.83', E: '2.08', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.71' },
      threadType: ''
    },
    // 2333A Series
    {
      series: '2333A',
      partNumber: '2333A-X0',
      load: '160',
      stiffness: '2290',
      dimensions: { A: '1.88', B: '0.53', C: '1.23', D: '0.83', E: '1.74', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2333A',
      partNumber: '2333A-X1',
      load: '190',
      stiffness: '2710',
      dimensions: { A: '1.88', B: '0.53', C: '1.23', D: '0.83', E: '1.74', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2333A',
      partNumber: '2333A-X3',
      load: '260',
      stiffness: '3710',
      dimensions: { A: '1.88', B: '0.53', C: '1.23', D: '0.83', E: '1.74', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2333A',
      partNumber: '2333A-X7',
      load: '600',
      stiffness: '8571',
      dimensions: { A: '1.88', B: '0.53', C: '1.23', D: '0.83', E: '1.74', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.38' },
      threadType: ''
    },
    // 2334A Series
    {
      series: '2334A',
      partNumber: '2334A-X8',
      load: '650',
      stiffness: '9286',
      dimensions: { A: '1.88', B: '', C: '1.23', D: '0.83', E: '1.69', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.32' },
      threadType: 'M12 X 1.75'
    },
    // 2335 Series
    {
      series: '2335',
      partNumber: '2335-X1',
      load: '80',
      stiffness: '1140',
      dimensions: { A: '1.97', B: '0.4', C: '1.25', D: '0.64', E: '1.75', F: '0.78', G: '0.78', plateID: '1.3', plateThickness: '0.25' },
      threadType: ''
    },
    {
      series: '2335',
      partNumber: '2335-X2',
      load: '100',
      stiffness: '1430',
      dimensions: { A: '1.97', B: '0.4', C: '1.25', D: '0.64', E: '1.75', F: '0.78', G: '0.78', plateID: '1.3', plateThickness: '0.25' },
      threadType: ''
    },
    {
      series: '2335',
      partNumber: '2335-X3',
      load: '130',
      stiffness: '1860',
      dimensions: { A: '1.97', B: '0.4', C: '1.25', D: '0.64', E: '1.75', F: '0.78', G: '0.78', plateID: '1.3', plateThickness: '0.25' },
      threadType: ''
    },
    {
      series: '2335',
      partNumber: '2335-X4',
      load: '170',
      stiffness: '2430',
      dimensions: { A: '1.97', B: '0.4', C: '1.25', D: '0.64', E: '1.75', F: '0.78', G: '0.78', plateID: '1.3', plateThickness: '0.25' },
      threadType: ''
    },
    {
      series: '2335',
      partNumber: '2335-X5',
      load: '210',
      stiffness: '3000',
      dimensions: { A: '1.97', B: '0.4', C: '1.25', D: '0.64', E: '1.75', F: '0.78', G: '0.78', plateID: '1.3', plateThickness: '0.25' },
      threadType: ''
    },
    {
      series: '2335',
      partNumber: '2335-X6',
      load: '250',
      stiffness: '3570',
      dimensions: { A: '1.97', B: '0.4', C: '1.25', D: '0.64', E: '1.75', F: '0.78', G: '0.78', plateID: '1.3', plateThickness: '0.25' },
      threadType: ''
    },
    {
      series: '2335',
      partNumber: '2335-X7',
      load: '350',
      stiffness: '5000',
      dimensions: { A: '1.97', B: '0.4', C: '1.25', D: '0.64', E: '1.75', F: '0.78', G: '0.78', plateID: '1.3', plateThickness: '0.25' },
      threadType: ''
    },
    {
      series: '2335',
      partNumber: '2335-X10',
      load: '850',
      stiffness: '12140',
      dimensions: { A: '1.97', B: '0.4', C: '1.25', D: '0.64', E: '1.75', F: '0.78', G: '0.78', plateID: '1.3', plateThickness: '0.25' },
      threadType: ''
    },
    // 2336 Series
    {
      series: '2336',
      partNumber: '2336-X0',
      load: '100',
      stiffness: '1430',
      dimensions: { A: '1.88', B: '0.41', C: '1.3', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    {
      series: '2336',
      partNumber: '2336-X1',
      load: '130',
      stiffness: '1860',
      dimensions: { A: '1.88', B: '0.41', C: '1.3', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    {
      series: '2336',
      partNumber: '2336-X3',
      load: '190',
      stiffness: '2715',
      dimensions: { A: '1.88', B: '0.41', C: '1.3', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    {
      series: '2336',
      partNumber: '2336-X4',
      load: '220',
      stiffness: '3140',
      dimensions: { A: '1.88', B: '0.41', C: '1.3', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    {
      series: '2336',
      partNumber: '2336-X5',
      load: '260',
      stiffness: '3715',
      dimensions: { A: '1.88', B: '0.41', C: '1.3', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    {
      series: '2336',
      partNumber: '2336-X6',
      load: '340',
      stiffness: '4860',
      dimensions: { A: '1.88', B: '0.41', C: '1.3', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    {
      series: '2336',
      partNumber: '2336-X7',
      load: '500',
      stiffness: '7145',
      dimensions: { A: '1.88', B: '0.41', C: '1.3', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    {
      series: '2336',
      partNumber: '2336-X8',
      load: '630',
      stiffness: '9000',
      dimensions: { A: '1.88', B: '0.41', C: '1.3', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    {
      series: '2336',
      partNumber: '2336-X9',
      load: '800',
      stiffness: '11430',
      dimensions: { A: '1.88', B: '0.41', C: '1.3', D: '0.83', E: '1.94', F: '0.78', G: '0.78', plateID: '1.25', plateThickness: '0.56' },
      threadType: ''
    },
    // 2338 Series
    {
      series: '2338',
      partNumber: '2338-X5',
      load: '600',
      stiffness: '8571',
      dimensions: { A: '2.68', B: '0.59', C: '1.39', D: '0.99', E: '1.91', F: '0.75', G: '0.75', plateID: '1.38', plateThickness: '0.61' },
      threadType: ''
    },
    {
      series: '2338',
      partNumber: '2338-X6',
      load: '750',
      stiffness: '10714',
      dimensions: { A: '2.68', B: '0.59', C: '1.39', D: '0.99', E: '1.91', F: '0.75', G: '0.75', plateID: '1.38', plateThickness: '0.61' },
      threadType: ''
    },
    {
      series: '2338',
      partNumber: '2338-X7',
      load: '925',
      stiffness: '13210',
      dimensions: { A: '2.68', B: '0.59', C: '1.39', D: '0.99', E: '1.91', F: '0.75', G: '0.75', plateID: '1.38', plateThickness: '0.61' },
      threadType: ''
    },
    // 2340 Series
    {
      series: '2340',
      partNumber: '2340-X1',
      load: '250',
      stiffness: '2778',
      dimensions: { A: '2.55', B: '0.65', C: '1.58', D: '0.97', E: '2.43', F: '0.9', G: '0.9', plateID: '1.5', plateThickness: '0.88' },
      threadType: ''
    },
    {
      series: '2340',
      partNumber: '2340-X2',
      load: '300',
      stiffness: '3330',
      dimensions: { A: '2.55', B: '0.65', C: '1.58', D: '0.97', E: '2.43', F: '0.9', G: '0.9', plateID: '1.5', plateThickness: '0.88' },
      threadType: ''
    },
    {
      series: '2340',
      partNumber: '2340-X3',
      load: '400',
      stiffness: '4440',
      dimensions: { A: '2.55', B: '0.65', C: '1.58', D: '0.97', E: '2.43', F: '0.9', G: '0.9', plateID: '1.5', plateThickness: '0.88' },
      threadType: ''
    },
    {
      series: '2340',
      partNumber: '2340-X4',
      load: '500',
      stiffness: '5550',
      dimensions: { A: '2.55', B: '0.65', C: '1.58', D: '0.97', E: '2.43', F: '0.9', G: '0.9', plateID: '1.5', plateThickness: '0.88' },
      threadType: ''
    },
    {
      series: '2340',
      partNumber: '2340-X5',
      load: '600',
      stiffness: '6660',
      dimensions: { A: '2.55', B: '0.65', C: '1.58', D: '0.97', E: '2.43', F: '0.9', G: '0.9', plateID: '1.5', plateThickness: '0.88' },
      threadType: ''
    },
    {
      series: '2340',
      partNumber: '2340-X6',
      load: '750',
      stiffness: '8330',
      dimensions: { A: '2.55', B: '0.65', C: '1.58', D: '0.97', E: '2.43', F: '0.9', G: '0.9', plateID: '1.5', plateThickness: '0.88' },
      threadType: ''
    },
    {
      series: '2340',
      partNumber: '2340-X7',
      load: '900',
      stiffness: '10000',
      dimensions: { A: '2.55', B: '0.65', C: '1.58', D: '0.97', E: '2.43', F: '0.9', G: '0.9', plateID: '1.5', plateThickness: '0.88' },
      threadType: ''
    },
    {
      series: '2340',
      partNumber: '2340-X8',
      load: '1300',
      stiffness: '14400',
      dimensions: { A: '2.55', B: '0.65', C: '1.58', D: '0.97', E: '2.43', F: '0.9', G: '0.9', plateID: '1.5', plateThickness: '0.88' },
      threadType: ''
    },
    {
      series: '2340',
      partNumber: '2340-X9',
      load: '1600',
      stiffness: '17778',
      dimensions: { A: '2.55', B: '0.65', C: '1.58', D: '0.97', E: '2.43', F: '0.9', G: '0.9', plateID: '1.5', plateThickness: '0.88' },
      threadType: ''
    },
    // 2340A Series
    {
      series: '2340A',
      partNumber: '2340A-X1',
      load: '350',
      stiffness: '3890',
      dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.97', E: '2.43', F: '0.9', G: '0.9', plateID: '1.5', plateThickness: '0.88' },
      threadType: ''
    },
    {
      series: '2340A',
      partNumber: '2340A-X2',
      load: '450',
      stiffness: '5000',
      dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.97', E: '2.43', F: '0.9', G: '0.9', plateID: '1.5', plateThickness: '0.88' },
      threadType: ''
    },
    {
      series: '2340A',
      partNumber: '2340A-X3',
      load: '600',
      stiffness: '6700',
      dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.97', E: '2.43', F: '0.9', G: '0.9', plateID: '1.5', plateThickness: '0.88' },
      threadType: ''
    },
    {
      series: '2340A',
      partNumber: '2340A-X4',
      load: '710',
      stiffness: '7900',
      dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.97', E: '2.43', F: '0.9', G: '0.9', plateID: '1.5', plateThickness: '0.88' },
      threadType: ''
    },
    {
      series: '2340A',
      partNumber: '2340A-X5',
      load: '825',
      stiffness: '9200',
      dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.97', E: '2.43', F: '0.9', G: '0.9', plateID: '1.5', plateThickness: '0.88' },
      threadType: ''
    },
    {
      series: '2340A',
      partNumber: '2340A-X7',
      load: '1400',
      stiffness: '15600',
      dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.97', E: '2.43', F: '0.9', G: '0.9', plateID: '1.5', plateThickness: '0.88' },
      threadType: ''
    },
    // 2341 Series
    {
      series: '2341',
      partNumber: '2341-X00',
      load: '210',
      stiffness: '2333',
      dimensions: { A: '2.5', B: '0.65', C: '1.63', D: '1', E: '2.06', F: '1', G: '1', plateID: '1.6', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2341',
      partNumber: '2341-X1',
      load: '315',
      stiffness: '3500',
      dimensions: { A: '2.5', B: '0.65', C: '1.63', D: '1', E: '2.06', F: '1', G: '1', plateID: '1.6', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2341',
      partNumber: '2341-X5',
      load: '715',
      stiffness: '7944',
      dimensions: { A: '2.5', B: '0.65', C: '1.63', D: '1', E: '2.06', F: '1', G: '1', plateID: '1.6', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2341',
      partNumber: '2341-X6',
      load: '875',
      stiffness: '9722',
      dimensions: { A: '2.5', B: '0.65', C: '1.63', D: '1', E: '2.06', F: '1', G: '1', plateID: '1.6', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2341',
      partNumber: '2341-X7',
      load: '1070',
      stiffness: '11889',
      dimensions: { A: '2.5', B: '0.65', C: '1.63', D: '1', E: '2.06', F: '1', G: '1', plateID: '1.6', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2341',
      partNumber: '2341-X8',
      load: '1310',
      stiffness: '14556',
      dimensions: { A: '2.5', B: '0.65', C: '1.63', D: '1', E: '2.06', F: '1', G: '1', plateID: '1.6', plateThickness: '0.38' },
      threadType: ''
    },
    {
      series: '2341',
      partNumber: '2341-X9',
      load: '1605',
      stiffness: '17833',
      dimensions: { A: '2.5', B: '0.65', C: '1.63', D: '1', E: '2.06', F: '1', G: '1', plateID: '1.6', plateThickness: '0.38' },
      threadType: ''
    },
    // 2342A Series
    {
      series: '2342A',
      partNumber: '2342A-X1',
      load: '350',
      stiffness: '3890',
      dimensions: { A: '2.55', B: '0.65', C: '1.63', D: '0.97', E: '2.43', F: '0.9', G: '0.9', plateID: '1.65', plateThickness: '0.88' },
      threadType: ''
    },
    {
      series: '2342A',
      partNumber: '2342A-X2',
      load: '450',
      stiffness: '5000',
      dimensions: { A: '2.55', B: '0.65', C: '1.63', D: '0.97', E: '2.43', F: '0.9', G: '0.9', plateID: '1.65', plateThickness: '0.88' },
      threadType: ''
    },
    {
      series: '2342A',
      partNumber: '2342A-X3',
      load: '600',
      stiffness: '6700',
      dimensions: { A: '2.55', B: '0.65', C: '1.63', D: '0.97', E: '2.43', F: '0.9', G: '0.9', plateID: '1.65', plateThickness: '0.88' },
      threadType: ''
    },
    {
      series: '2342A',
      partNumber: '2342A-X4',
      load: '710',
      stiffness: '7900',
      dimensions: { A: '2.55', B: '0.65', C: '1.63', D: '0.97', E: '2.43', F: '0.9', G: '0.9', plateID: '1.65', plateThickness: '0.88' },
      threadType: ''
    },
    {
      series: '2342A',
      partNumber: '2342A-X5',
      load: '825',
      stiffness: '9200',
      dimensions: { A: '2.55', B: '0.65', C: '1.63', D: '0.97', E: '2.43', F: '0.9', G: '0.9', plateID: '1.65', plateThickness: '0.88' },
      threadType: ''
    },
    {
      series: '2342A',
      partNumber: '2342A-X7',
      load: '1400',
      stiffness: '15600',
      dimensions: { A: '2.55', B: '0.65', C: '1.63', D: '0.97', E: '2.43', F: '0.9', G: '0.9', plateID: '1.65', plateThickness: '0.88' },
      threadType: ''
    },
    // 2343A Series
    {
      series: '2343A',
      partNumber: '2343A-X3',
      load: '600',
      stiffness: '6700',
      dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.97', E: '2.31', F: '0.9', G: '0.9', plateID: '1.5', plateThickness: '0.88' },
      threadType: ''
    },
    // 2344A Series
    {
      series: '2344A',
      partNumber: '2344A-X0',
      load: '290',
      stiffness: '3222',
      dimensions: { A: '2.53', B: '0.64', C: '1.56', D: '0.97', E: '1.83', F: '0.9', G: '1.6', plateID: '1.6', plateThickness: '0.25' },
      threadType: ''
    },
    {
      series: '2344A',
      partNumber: '2344A-X1',
      load: '355',
      stiffness: '3944',
      dimensions: { A: '2.53', B: '0.64', C: '1.56', D: '0.97', E: '1.83', F: '0.9', G: '1.6', plateID: '1.6', plateThickness: '0.25' },
      threadType: ''
    },
    {
      series: '2344A',
      partNumber: '2344A-X2',
      load: '440',
      stiffness: '4889',
      dimensions: { A: '2.53', B: '0.64', C: '1.56', D: '0.97', E: '1.83', F: '0.9', G: '0.9', plateID: '1.6', plateThickness: '0.25' },
      threadType: ''
    },
    {
      series: '2344A',
      partNumber: '2344A-X3',
      load: '520',
      stiffness: '5778',
      dimensions: { A: '2.53', B: '0.64', C: '1.56', D: '0.97', E: '1.83', F: '0.9', G: '0.9', plateID: '1.6', plateThickness: '0.25' },
      threadType: ''
    },
    {
      series: '2344A',
      partNumber: '2344A-X4',
      load: '615',
      stiffness: '6833',
      dimensions: { A: '2.53', B: '0.64', C: '1.56', D: '0.97', E: '1.83', F: '0.9', G: '0.9', plateID: '1.6', plateThickness: '0.25' },
      threadType: ''
    },
    {
      series: '2344A',
      partNumber: '2344A-X5',
      load: '730',
      stiffness: '8111',
      dimensions: { A: '2.53', B: '0.64', C: '1.56', D: '0.97', E: '1.83', F: '0.9', G: '0.9', plateID: '1.6', plateThickness: '0.25' },
      threadType: ''
    },
    {
      series: '2344A',
      partNumber: '2344A-X6',
      load: '870',
      stiffness: '9667',
      dimensions: { A: '2.53', B: '0.64', C: '1.56', D: '0.97', E: '1.83', F: '0.9', G: '0.9', plateID: '1.6', plateThickness: '0.25' },
      threadType: ''
    },
    // 2345 Series
    {
      series: '2345',
      partNumber: '2345-X1',
      load: '375',
      stiffness: '3750',
      dimensions: { A: '3.19', B: '0.78', C: '1.34', D: '1.02', E: '2.47', F: '1.25', G: '1.5', plateID: '1.38', plateThickness: '0.25' },
      threadType: ''
    },
    {
      series: '2345',
      partNumber: '2345-X3',
      load: '650',
      stiffness: '6500',
      dimensions: { A: '3.19', B: '0.78', C: '1.34', D: '1.02', E: '2.47', F: '1.25', G: '1.5', plateID: '1.38', plateThickness: '0.25' },
      threadType: ''
    },
    {
      series: '2345',
      partNumber: '2345-X5',
      load: '975',
      stiffness: '9750',
      dimensions: { A: '3.19', B: '0.78', C: '1.34', D: '1.02', E: '2.47', F: '1.25', G: '1.5', plateID: '1.38', plateThickness: '0.25' },
      threadType: ''
    },
    {
      series: '2345',
      partNumber: '2345-X7',
      load: '1400',
      stiffness: '14000',
      dimensions: { A: '3.19', B: '0.78', C: '1.34', D: '1.02', E: '2.47', F: '1.25', G: '1.5', plateID: '1.38', plateThickness: '0.25' },
      threadType: ''
    },
    // 2346 Series
    {
      series: '2346',
      partNumber: '2346-X0',
      load: '200',
      stiffness: '2222',
      dimensions: { A: '2.55', B: '0.65', C: '1.56', D: '0.97', E: '1.88', F: '0.9', G: '0.9', plateID: '1.5', plateThickness: '0.31' },
      threadType: ''
    },
    {
      series: '2346',
      partNumber: '2346-X1',
      load: '250',
      stiffness: '2777',
      dimensions: { A: '2.55', B: '0.65', C: '1.56', D: '0.97', E: '1.88', F: '0.9', G: '0.9', plateID: '1.5', plateThickness: '0.31' },
      threadType: ''
    },
    {
      series: '2346',
      partNumber: '2346-X2',
      load: '300',
      stiffness: '3333',
      dimensions: { A: '2.55', B: '0.65', C: '1.56', D: '0.97', E: '1.88', F: '0.9', G: '0.9', plateID: '1.5', plateThickness: '0.31' },
      threadType: ''
    },
    // 2350 Series
    {
      series: '2350',
      partNumber: '2350-X1',
      load: '425',
      stiffness: '4250',
      dimensions: { A: '3.47', B: '0.94', C: '2.28', D: '1.47', E: '2.89', F: '1', G: '1', plateID: '2.25', plateThickness: '1.13' },
      threadType: ''
    },
    {
      series: '2350',
      partNumber: '2350-X2',
      load: '550',
      stiffness: '5500',
      dimensions: { A: '3.47', B: '0.94', C: '2.28', D: '1.47', E: '2.89', F: '1', G: '1', plateID: '2.25', plateThickness: '1.13' },
      threadType: ''
    },
    {
      series: '2350',
      partNumber: '2350-X3',
      load: '700',
      stiffness: '7000',
      dimensions: { A: '3.47', B: '0.94', C: '2.28', D: '1.47', E: '2.89', F: '1', G: '1', plateID: '2.25', plateThickness: '1.13' },
      threadType: ''
    },
    {
      series: '2350',
      partNumber: '2350-X4',
      load: '850',
      stiffness: '8500',
      dimensions: { A: '3.47', B: '0.94', C: '2.28', D: '1.47', E: '2.89', F: '1', G: '1', plateID: '2.25', plateThickness: '1.13' },
      threadType: ''
    },
    {
      series: '2350',
      partNumber: '2350-X5',
      load: '1000',
      stiffness: '10000',
      dimensions: { A: '3.47', B: '0.94', C: '2.28', D: '1.47', E: '2.89', F: '1', G: '1', plateID: '2.25', plateThickness: '1.13' },
      threadType: ''
    },
    {
      series: '2350',
      partNumber: '2350-X6',
      load: '1300',
      stiffness: '13000',
      dimensions: { A: '3.47', B: '0.94', C: '2.28', D: '1.47', E: '2.89', F: '1', G: '1', plateID: '2.25', plateThickness: '1.13' },
      threadType: ''
    },
    {
      series: '2350',
      partNumber: '2350-X7',
      load: '1600',
      stiffness: '16000',
      dimensions: { A: '3.47', B: '0.94', C: '2.28', D: '1.47', E: '2.89', F: '1', G: '1', plateID: '2.25', plateThickness: '1.13' },
      threadType: ''
    },
    {
      series: '2350',
      partNumber: '2350-X8',
      load: '2000',
      stiffness: '20000',
      dimensions: { A: '3.47', B: '0.94', C: '2.28', D: '1.47', E: '2.89', F: '1', G: '1', plateID: '2.25', plateThickness: '1.13' },
      threadType: ''
    },
    // 2351 Series
    {
      series: '2351',
      partNumber: '2351-X8',
      load: '2000',
      stiffness: '20000',
      dimensions: { A: '3.5', B: '0.94', C: '2.3', D: '1.37', E: '2.9', F: '1', G: '1', plateID: '2.25', plateThickness: '1.13' },
      threadType: ''
    },
    // 2352 Series
    {
      series: '2352',
      partNumber: '2352-X8',
      load: '4000',
      stiffness: '40000',
      dimensions: { A: '3.5', B: '0.94', C: '2.28', D: '1.47', E: '2.77', F: '1', G: '1', plateID: '2.25', plateThickness: '1.13' },
      threadType: ''
    },
    // 2360 Series
    {
      series: '2360',
      partNumber: '2360-X0',
      load: '1200',
      stiffness: '10000',
      dimensions: { A: '4.88', B: '1.06', C: '2.55', D: '1.44', E: '3.38', F: '1.25', G: '1.25', plateID: '2.5', plateThickness: '1.25' },
      threadType: ''
    },
    {
      series: '2360',
      partNumber: '2360-X1',
      load: '1700',
      stiffness: '14167',
      dimensions: { A: '4.88', B: '1.06', C: '2.55', D: '1.44', E: '3.38', F: '1.25', G: '1.25', plateID: '2.5', plateThickness: '1.25' },
      threadType: ''
    },
    {
      series: '2360',
      partNumber: '2360-X2',
      load: '2000',
      stiffness: '16667',
      dimensions: { A: '4.88', B: '1.06', C: '2.55', D: '1.44', E: '3.38', F: '1.25', G: '1.25', plateID: '2.5', plateThickness: '1.25' },
      threadType: ''
    },
    {
      series: '2360',
      partNumber: '2360-X3',
      load: '2250',
      stiffness: '18750',
      dimensions: { A: '4.88', B: '1.06', C: '2.55', D: '1.44', E: '3.38', F: '1.25', G: '1.25', plateID: '2.5', plateThickness: '1.25' },
      threadType: ''
    },
    {
      series: '2360',
      partNumber: '2360-X4',
      load: '2650',
      stiffness: '22083',
      dimensions: { A: '4.88', B: '1.06', C: '2.55', D: '1.44', E: '3.38', F: '1.25', G: '1.25', plateID: '2.5', plateThickness: '1.25' },
      threadType: ''
    },
    {
      series: '2360',
      partNumber: '2360-X5',
      load: '3200',
      stiffness: '26667',
      dimensions: { A: '4.88', B: '1.06', C: '2.55', D: '1.44', E: '3.38', F: '1.25', G: '1.25', plateID: '2.5', plateThickness: '1.25' },
      threadType: ''
    },
    {
      series: '2360',
      partNumber: '2360-X6',
      load: '3700',
      stiffness: '30833',
      dimensions: { A: '4.88', B: '1.06', C: '2.55', D: '1.44', E: '3.38', F: '1.25', G: '1.25', plateID: '2.5', plateThickness: '1.25' },
      threadType: ''
    },
    {
      series: '2360',
      partNumber: '2360-X7',
      load: '4600',
      stiffness: '38333',
      dimensions: { A: '4.88', B: '1.06', C: '2.55', D: '1.44', E: '3.38', F: '1.25', G: '1.25', plateID: '2.5', plateThickness: '1.25' },
      threadType: ''
    },
    {
      series: '2360',
      partNumber: '2360-X8',
      load: '5000',
      stiffness: '41667',
      dimensions: { A: '4.88', B: '1.06', C: '2.55', D: '1.44', E: '3.38', F: '1.25', G: '1.25', plateID: '2.5', plateThickness: '1.25' },
      threadType: ''
    },
    {
      series: '2360',
      partNumber: '2360-X9',
      load: '5700',
      stiffness: '47500',
      dimensions: { A: '4.88', B: '1.06', C: '2.55', D: '1.44', E: '3.38', F: '1.25', G: '1.25', plateID: '2.5', plateThickness: '1.25' },
      threadType: ''
    },
    // 2361 Series
    {
      series: '2361',
      partNumber: '2361-X0',
      load: '1200',
      stiffness: '10000',
      dimensions: { A: '4.88', B: '0.89', C: '2.55', D: '1.44', E: '3.38', F: '1.25', G: '1.25', plateID: '2.5', plateThickness: '1.25' },
      threadType: ''
    },
    {
      series: '2361',
      partNumber: '2361-X1',
      load: '1700',
      stiffness: '14200',
      dimensions: { A: '4.88', B: '0.89', C: '2.55', D: '1.44', E: '3.38', F: '1.25', G: '1.25', plateID: '2.5', plateThickness: '1.25' },
      threadType: ''
    },
    {
      series: '2361',
      partNumber: '2361-X2',
      load: '2000',
      stiffness: '16700',
      dimensions: { A: '4.88', B: '0.89', C: '2.55', D: '1.44', E: '3.38', F: '1.25', G: '1.25', plateID: '2.5', plateThickness: '1.25' },
      threadType: ''
    },
    {
      series: '2361',
      partNumber: '2361-X3',
      load: '2250',
      stiffness: '18800',
      dimensions: { A: '4.88', B: '0.89', C: '2.55', D: '1.44', E: '3.38', F: '1.25', G: '1.25', plateID: '2.5', plateThickness: '1.25' },
      threadType: ''
    },
    {
      series: '2361',
      partNumber: '2361-X4',
      load: '2650',
      stiffness: '22100',
      dimensions: { A: '4.88', B: '0.89', C: '2.55', D: '1.44', E: '3.38', F: '1.25', G: '1.25', plateID: '2.5', plateThickness: '1.25' },
      threadType: ''
    },
    {
      series: '2361',
      partNumber: '2361-X5',
      load: '3200',
      stiffness: '26700',
      dimensions: { A: '4.88', B: '0.89', C: '2.55', D: '1.44', E: '3.38', F: '1.25', G: '1.25', plateID: '2.5', plateThickness: '1.25' },
      threadType: ''
    },
    {
      series: '2361',
      partNumber: '2361-X6',
      load: '3700',
      stiffness: '30800',
      dimensions: { A: '4.88', B: '0.89', C: '2.55', D: '1.44', E: '3.38', F: '1.25', G: '1.25', plateID: '2.5', plateThickness: '1.25' },
      threadType: ''
    },
    {
      series: '2361',
      partNumber: '2361-X7',
      load: '4600',
      stiffness: '38300',
      dimensions: { A: '4.88', B: '0.89', C: '2.55', D: '1.44', E: '3.38', F: '1.25', G: '1.25', plateID: '2.5', plateThickness: '1.25' },
      threadType: ''
    },
    {
      series: '2361',
      partNumber: '2361-X8',
      load: '5000',
      stiffness: '41700',
      dimensions: { A: '4.88', B: '0.89', C: '2.55', D: '1.44', E: '3.38', F: '1.25', G: '1.25', plateID: '2.5', plateThickness: '1.25' },
      threadType: ''
    },
    // 2362 Series
    {
      series: '2362',
      partNumber: '2362-X0',
      load: '900',
      stiffness: '7500',
      dimensions: { A: '4.88', B: '1.16', C: '2.55', D: '1.79', E: '3.38', F: '1.25', G: '1.25', plateID: '2.5', plateThickness: '1.25' },
      threadType: ''
    },
    {
      series: '2362',
      partNumber: '2362-X1',
      load: '1150',
      stiffness: '9583',
      dimensions: { A: '4.88', B: '1.16', C: '2.55', D: '1.79', E: '3.38', F: '1.25', G: '1.25', plateID: '2.5', plateThickness: '1.25' },
      threadType: ''
    },
    {
      series: '2362',
      partNumber: '2362-X2',
      load: '1500',
      stiffness: '12500',
      dimensions: { A: '4.88', B: '1.16', C: '2.55', D: '1.79', E: '3.38', F: '1.25', G: '1.25', plateID: '2.5', plateThickness: '1.25' },
      threadType: ''
    },
    // 2363 Series
    {
      series: '2363',
      partNumber: '2363-X9',
      load: '10500',
      stiffness: '87500',
      dimensions: { A: '5.2', B: '1.32', C: '2.55', D: '1.88', E: '3.38', F: '1.25', G: '1.25', plateID: '2.5', plateThickness: '1.25' },
      threadType: ''
    },
    // 2364 Series
    {
      series: '2364',
      partNumber: '2364-X9',
      load: '10500',
      stiffness: '87500',
      dimensions: { A: '5.2', B: '1.06', C: '2.55', D: '1.88', E: '3.38', F: '1.25', G: '1.25', plateID: '2.5', plateThickness: '1.25' },
      threadType: ''
    },
    // 2369 Series
    {
      series: '2369',
      partNumber: '2369-X2',
      load: '3200',
      stiffness: '80000',
      dimensions: { A: '6.38', B: '1.26', C: '3.15', D: '2.28', E: '2.85', F: '0.79', G: '0.91', plateID: '3.2', plateThickness: '1.5' },
      threadType: ''
    },
    {
      series: '2369',
      partNumber: '2369-X6',
      load: '5200',
      stiffness: '130000',
      dimensions: { A: '6.38', B: '1.26', C: '3.15', D: '2.28', E: '2.85', F: '0.79', G: '0.91', plateID: '3.2', plateThickness: '1.5' },
      threadType: ''
    }
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
              Two Piece Mounts
            </h1>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Two-piece mounts are used for more heavy-duty applications such as commercial vehicles, trucks, generators, compressors, and HVAC equipment. These mounts are easy to install and have dedicated rebound support. Just like the one-piece styles, the elastomer of two-piece mounts is bonded to the inner steel tube. This improves the overall lifespan compared to non-bonded designs. Two-piece mounts provide a fail-safe when installed with appropriate washers.
            </p>
          </motion.div>

          {/* Product Images */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex justify-center"
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
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Load (lbs)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Stiffness (lbs/in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">A (in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">B (in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">C (in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">D (in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">E (in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">F (in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">G (in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Plate ID (in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Plate Thickness (in)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Thread Type</th>
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
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.G}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.plateID}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.dimensions.plateThickness || '-'}</td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">{mount.threadType || '-'}</td>
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

export default TwoPieceMounts;
