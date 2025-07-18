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
    // 2405 Series
    { series: '2405', partNumber: '', load: '125 - 125', stiffness: '2500 - 2500', type: '-', dimensions: { A: '1.33', B: '0.4', C: '0.73', D: '0.52', E: '0.7', F: '2.13', plateID: '0.75', plateThickness: '1.25' } },
    { series: '2405', partNumber: '2405-X3-B', load: '125', stiffness: '2500', type: '-', dimensions: { A: '1.33', B: '0.4', C: '0.73', D: '0.52', E: '0.7', F: '2.13', plateID: '0.75', plateThickness: '1.25' } },
    { series: '2405', partNumber: '2405-X3', load: '125', stiffness: '2500', type: '-', dimensions: { A: '1.33', B: '0.4', C: '0.73', D: '0.52', E: '0.7', F: '1.25', plateID: '0.75', plateThickness: '0.38' } },
    // 2420 Series
    { series: '2420', partNumber: '', load: '195 - 740', stiffness: '1950 - 7400', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.23', D: '0.78', E: '1.03', F: '1.94', plateID: '1.25', plateThickness: '0.56' } },
    { series: '2420', partNumber: '2420-X0', load: '195', stiffness: '1950', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.23', D: '0.78', E: '1.03', F: '1.94', plateID: '1.25', plateThickness: '0.56' } },
    { series: '2420', partNumber: '2420-X1', load: '230', stiffness: '2300', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.23', D: '0.78', E: '1.03', F: '1.94', plateID: '1.25', plateThickness: '0.56' } },
    { series: '2420', partNumber: '2420-X2', load: '300', stiffness: '3000', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.23', D: '0.78', E: '1.03', F: '1.94', plateID: '1.25', plateThickness: '0.56' } },
    { series: '2420', partNumber: '2420-X3', load: '360', stiffness: '3600', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.23', D: '0.78', E: '1.03', F: '1.94', plateID: '1.25', plateThickness: '0.56' } },
    { series: '2420', partNumber: '2420-X5', load: '515', stiffness: '5150', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.23', D: '0.78', E: '1.03', F: '1.94', plateID: '1.25', plateThickness: '0.56' } },
    { series: '2420', partNumber: '2420-X6', load: '640', stiffness: '6400', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.23', D: '0.78', E: '1.03', F: '1.94', plateID: '1.25', plateThickness: '0.56' } },
    { series: '2420', partNumber: '2420-X7', load: '740', stiffness: '7400', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.23', D: '0.78', E: '1.03', F: '1.94', plateID: '1.25', plateThickness: '0.56' } },
    // 2425 Series
    { series: '2425', partNumber: '', load: '200 - 550', stiffness: '2000 - 5500', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.25', D: '0.78', E: '0.89', F: '1.63', plateID: '1.25', plateThickness: '0.25' } },
    { series: '2425', partNumber: '2425-X0', load: '200', stiffness: '2000', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.25', D: '0.78', E: '0.89', F: '1.63', plateID: '1.25', plateThickness: '0.25' } },
    { series: '2425', partNumber: '2425-X1', load: '230', stiffness: '2300', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.25', D: '0.78', E: '0.89', F: '1.63', plateID: '1.25', plateThickness: '0.25' } },
    { series: '2425', partNumber: '2425-X3', load: '350', stiffness: '3500', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.25', D: '0.78', E: '0.89', F: '1.63', plateID: '1.25', plateThickness: '0.25' } },
    { series: '2425', partNumber: '2425-X4', load: '450', stiffness: '4500', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.25', D: '0.78', E: '0.89', F: '1.63', plateID: '1.25', plateThickness: '0.25' } },
    { series: '2425', partNumber: '2425-X5', load: '550', stiffness: '5500', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.25', D: '0.78', E: '0.89', F: '1.63', plateID: '1.25', plateThickness: '0.25' } },
    // 2425B Series
    { series: '2425B', partNumber: '', load: '170 - 550', stiffness: '1700 - 5500', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.25', D: '0.78', E: '0.89', F: '1.77', plateID: '1.25', plateThickness: '0.39' } },
    { series: '2425B', partNumber: '2425-X3-B', load: '350', stiffness: '3500', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.25', D: '0.78', E: '0.89', F: '1.77', plateID: '1.25', plateThickness: '0.39' } },
    { series: '2425B', partNumber: '2425-X4-B', load: '450', stiffness: '4500', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.25', D: '0.78', E: '0.89', F: '1.77', plateID: '1.25', plateThickness: '0.39' } },
    { series: '2425B', partNumber: '2425-X5-B', load: '550', stiffness: '5500', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.25', D: '0.78', E: '0.89', F: '1.77', plateID: '1.25', plateThickness: '0.39' } },
    { series: '2425B', partNumber: '2425-X00-B', load: '170', stiffness: '1700', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.25', D: '0.78', E: '0.89', F: '1.77', plateID: '1.25', plateThickness: '0.39' } },
    { series: '2425B', partNumber: '2425-X1-B', load: '230', stiffness: '2300', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.25', D: '0.78', E: '0.89', F: '1.77', plateID: '1.25', plateThickness: '0.39' } },
    // 2427 Series
    { series: '2427', partNumber: '', load: '225 - 550', stiffness: '2250 - 5500', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.25', D: '0.78', E: '0.94', F: '1.75', plateID: '1.25', plateThickness: '0.37' } },
    { series: '2427', partNumber: '2427-X1', load: '225', stiffness: '2250', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.25', D: '0.78', E: '0.94', F: '1.75', plateID: '1.25', plateThickness: '0.37' } },
    { series: '2427', partNumber: '2427-X3', load: '350', stiffness: '3500', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.25', D: '0.78', E: '0.94', F: '1.75', plateID: '1.25', plateThickness: '0.37' } },
    { series: '2427', partNumber: '2427-X5', load: '550', stiffness: '5500', type: '1', dimensions: { A: '1.88', B: '0.53', C: '1.25', D: '0.78', E: '0.94', F: '1.75', plateID: '1.25', plateThickness: '0.37' } },
    // 2440 Series
    { series: '2440', partNumber: '', load: '350 - 1300', stiffness: '3889 - 14444', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.63' } },
    { series: '2440', partNumber: '2440-X3', load: '350', stiffness: '3889', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.63' } },
    { series: '2440', partNumber: '2440-X4', load: '450', stiffness: '5000', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.63' } },
    { series: '2440', partNumber: '2440-X5', load: '550', stiffness: '6111', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.63' } },
    { series: '2440', partNumber: '2440-X6', load: '675', stiffness: '7500', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.63' } },
    { series: '2440', partNumber: '2440-X7', load: '850', stiffness: '9444', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.63' } },
    { series: '2440', partNumber: '2440-X8', load: '1050', stiffness: '11667', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.63' } },
    { series: '2440', partNumber: '2440-X9', load: '1300', stiffness: '14444', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.63' } },
    // 2441 Series
    { series: '2441', partNumber: '', load: '375 - 1400', stiffness: '3750 - 14000', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2441', partNumber: '2441-X2', load: '450', stiffness: '4500', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2441', partNumber: '2441-X5', load: '700', stiffness: '7000', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2441', partNumber: '2441-X6', load: '950', stiffness: '9500', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.43', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2441', partNumber: '2441-X8', load: '1400', stiffness: '14000', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.43', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2441', partNumber: '2441-X1', load: '375', stiffness: '3750', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.88' } },
    // 2443 Series
    { series: '2443', partNumber: '', load: '350 - 400', stiffness: '3000 - 4000', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2443', partNumber: '2443-X0', load: '350', stiffness: '3000', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2443', partNumber: '2443-X1', load: '400', stiffness: '4000', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.88' } },
    // 2444 Series
    { series: '2444', partNumber: '', load: '1500 - 1500', stiffness: '16667 - 16667', type: '2', dimensions: { A: '2.55', B: '0.5', C: '1.63', D: '0.9', E: '1.21', F: '1.85', plateID: '1.63', plateThickness: '0.31' } },
    { series: '2444', partNumber: '2444-X7', load: '1500', stiffness: '16667', type: '2', dimensions: { A: '2.55', B: '0.5', C: '1.63', D: '0.9', E: '1.21', F: '1.85', plateID: '1.63', plateThickness: '0.31' } },
    // 2445 Series
    { series: '2445', partNumber: '', load: '275 - 950', stiffness: '3056 - 10556', type: '2', dimensions: { A: '2.55', B: '0.5', C: '1.63', D: '0.9', E: '1.21', F: '2.11', plateID: '1.64', plateThickness: '0.5' } },
    { series: '2445', partNumber: '2445-X7', load: '950', stiffness: '10556', type: '2', dimensions: { A: '2.55', B: '0.5', C: '1.63', D: '0.9', E: '1.21', F: '2.11', plateID: '1.64', plateThickness: '0.5' } },
    { series: '2445', partNumber: '2445-X2', load: '275', stiffness: '3056', type: '2', dimensions: { A: '2.55', B: '0.5', C: '1.63', D: '0.9', E: '1.21', F: '2.11', plateID: '1.64', plateThickness: '0.5' } },
    { series: '2445', partNumber: '2445-X3', load: '350', stiffness: '3889', type: '2', dimensions: { A: '2.55', B: '0.5', C: '1.63', D: '0.9', E: '1.21', F: '2.11', plateID: '1.64', plateThickness: '0.5' } },
    { series: '2445', partNumber: '2445-X5', load: '575', stiffness: '6389', type: '2', dimensions: { A: '2.55', B: '0.5', C: '1.63', D: '0.9', E: '1.21', F: '2.11', plateID: '1.64', plateThickness: '0.5' } },
    // 2446 Series
    { series: '2446', partNumber: '', load: '350 - 950', stiffness: '3889 - 10556', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.63', D: '0.9', E: '1.14', F: '1.85', plateID: '1.63', plateThickness: '0.24' } },
    { series: '2446', partNumber: '2446-X3', load: '350', stiffness: '3889', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.63', D: '0.9', E: '1.14', F: '1.85', plateID: '1.63', plateThickness: '0.24' } },
    { series: '2446', partNumber: '2446-X5', load: '575', stiffness: '6389', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.63', D: '0.9', E: '1.14', F: '1.85', plateID: '1.63', plateThickness: '0.24' } },
    { series: '2446', partNumber: '2446-X7', load: '950', stiffness: '10556', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.63', D: '0.9', E: '1.14', F: '1.85', plateID: '1.63', plateThickness: '0.24' } },
    // 2447 Series
    { series: '2447', partNumber: '', load: '275 - 950', stiffness: '3056 - 10556', type: '2', dimensions: { A: '2.55', B: '0.5', C: '1.63', D: '0.9', E: '1.14', F: '1.85', plateID: '1.63', plateThickness: '0.24' } },
    { series: '2447', partNumber: '2447-X2', load: '275', stiffness: '3056', type: '2', dimensions: { A: '2.55', B: '0.5', C: '1.63', D: '0.9', E: '1.14', F: '1.85', plateID: '1.63', plateThickness: '0.24' } },
    { series: '2447', partNumber: '2447-X3', load: '350', stiffness: '3889', type: '2', dimensions: { A: '2.55', B: '0.5', C: '1.63', D: '0.9', E: '1.14', F: '1.85', plateID: '1.63', plateThickness: '0.24' } },
    { series: '2447', partNumber: '2447-X5', load: '575', stiffness: '6389', type: '2', dimensions: { A: '2.55', B: '0.5', C: '1.63', D: '0.9', E: '1.14', F: '1.85', plateID: '1.63', plateThickness: '0.24' } },
    { series: '2447', partNumber: '2447-X7', load: '950', stiffness: '10556', type: '2', dimensions: { A: '2.55', B: '0.5', C: '1.63', D: '0.9', E: '1.14', F: '1.85', plateID: '1.63', plateThickness: '0.24' } },
    // 2448 Series
    { series: '2448', partNumber: '', load: '250 - 1200', stiffness: '2500 - 12000', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '1.85', plateID: '1.5', plateThickness: '0.31' } },
    { series: '2448', partNumber: '2448-X0', load: '250', stiffness: '2500', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '1.85', plateID: '1.5', plateThickness: '0.31' } },
    { series: '2448', partNumber: '2448-X8', load: '1200', stiffness: '12000', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '1.85', plateID: '1.5', plateThickness: '0.31' } },
    { series: '2448', partNumber: '2448-X1', load: '350', stiffness: '3500', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '1.85', plateID: '1.5', plateThickness: '0.31' } },
    { series: '2448', partNumber: '2448-X2', load: '425', stiffness: '4250', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '1.85', plateID: '1.5', plateThickness: '0.31' } },
    { series: '2448', partNumber: '2448-X3', load: '500', stiffness: '5000', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '1.85', plateID: '1.5', plateThickness: '0.31' } },
    { series: '2448', partNumber: '2448-X4', load: '650', stiffness: '6500', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '1.85', plateID: '1.5', plateThickness: '0.31' } },
    { series: '2448', partNumber: '2448-X5', load: '750', stiffness: '7500', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '1.85', plateID: '1.5', plateThickness: '0.31' } },
    { series: '2448', partNumber: '2448-X6', load: '925', stiffness: '9250', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '1.85', plateID: '1.5', plateThickness: '0.31' } },
    { series: '2448', partNumber: '2448-X7', load: '1050', stiffness: '10500', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '1.85', plateID: '1.5', plateThickness: '0.31' } },
    // 2448B Series
    { series: '2448B', partNumber: '', load: '250 - 1200', stiffness: '2500 - 12000', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '1.92', plateID: '1.5', plateThickness: '0.38' } },
    { series: '2448B', partNumber: '2448-X5-B', load: '750', stiffness: '7500', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '1.92', plateID: '1.5', plateThickness: '0.38' } },
    { series: '2448B', partNumber: '2448-X6-B', load: '925', stiffness: '9250', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '1.92', plateID: '1.5', plateThickness: '0.38' } },
    { series: '2448B', partNumber: '2448-X7-B', load: '1050', stiffness: '10500', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '1.92', plateID: '1.5', plateThickness: '0.38' } },
    { series: '2448B', partNumber: '2448-X8-B', load: '1200', stiffness: '12000', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '1.92', plateID: '1.5', plateThickness: '0.38' } },
    { series: '2448B', partNumber: '2448-X0-B', load: '250', stiffness: '2500', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '1.92', plateID: '1.5', plateThickness: '0.38' } },
    { series: '2448B', partNumber: '2448-X1-B', load: '350', stiffness: '3500', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '1.92', plateID: '1.5', plateThickness: '0.38' } },
    { series: '2448B', partNumber: '2448-X2-B', load: '425', stiffness: '4250', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '1.92', plateID: '1.5', plateThickness: '0.38' } },
    { series: '2448B', partNumber: '2448-X3-B', load: '500', stiffness: '5000', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '1.92', plateID: '1.5', plateThickness: '0.38' } },
    { series: '2448B', partNumber: '2448-X4-B', load: '650', stiffness: '6500', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '1.92', plateID: '1.5', plateThickness: '0.38' } },
    // 2448C Series
    { series: '2448C', partNumber: '', load: '250 - 1200', stiffness: '2500 - 12000', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.43', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2448C', partNumber: '2448-X4-C', load: '650', stiffness: '6500', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.43', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2448C', partNumber: '2448-X5-C', load: '750', stiffness: '7500', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.43', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2448C', partNumber: '2448-X6-C', load: '925', stiffness: '9250', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.43', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2448C', partNumber: '2448-X7-C', load: '1050', stiffness: '10500', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.43', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2448C', partNumber: '2448-X0-C', load: '250', stiffness: '2500', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.43', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2448C', partNumber: '2448-X8-C', load: '1200', stiffness: '12000', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.43', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2448C', partNumber: '2448-X1-C', load: '350', stiffness: '3500', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.43', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2448C', partNumber: '2448-X2-C', load: '425', stiffness: '4250', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.43', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2448C', partNumber: '2448-X3-C', load: '500', stiffness: '5000', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.43', plateID: '1.5', plateThickness: '0.88' } },
    // 2448D Series
    { series: '2448D', partNumber: '', load: '250 - 1200', stiffness: '2500 - 12000', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.05', plateID: '1.5', plateThickness: '0.5' } },
    { series: '2448D', partNumber: '2448-X3-D', load: '500', stiffness: '5000', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.05', plateID: '1.5', plateThickness: '0.5' } },
    { series: '2448D', partNumber: '2448-X4-D', load: '650', stiffness: '6500', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.05', plateID: '1.5', plateThickness: '0.5' } },
    { series: '2448D', partNumber: '2448-X5-D', load: '750', stiffness: '7500', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.05', plateID: '1.5', plateThickness: '0.5' } },
    { series: '2448D', partNumber: '2448-X6-D', load: '925', stiffness: '9250', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.05', plateID: '1.5', plateThickness: '0.5' } },
    { series: '2448D', partNumber: '2448-X7-D', load: '1050', stiffness: '10500', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.05', plateID: '1.5', plateThickness: '0.5' } },
    { series: '2448D', partNumber: '2448-X0-D', load: '250', stiffness: '2500', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.05', plateID: '1.5', plateThickness: '0.5' } },
    { series: '2448D', partNumber: '2448-X8-D', load: '1200', stiffness: '12000', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.05', plateID: '1.5', plateThickness: '0.5' } },
    { series: '2448D', partNumber: '2448-X1-D', load: '350', stiffness: '3500', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.05', plateID: '1.5', plateThickness: '0.5' } },
    { series: '2448D', partNumber: '2448-X2-D', load: '425', stiffness: '4250', type: '2', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.05', plateID: '1.5', plateThickness: '0.5' } },
    // 2449 Series
    { series: '2449', partNumber: '', load: '310 - 450', stiffness: '3100 - 4500', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2449', partNumber: '2449-X0', load: '310', stiffness: '3100', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2449', partNumber: '2449-X1', load: '375', stiffness: '3750', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2449', partNumber: '2449-X2', load: '450', stiffness: '4500', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.88' } },
    // 2450 Series
    { series: '2450', partNumber: '', load: '555 - 1200', stiffness: '5550 - 26667', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2450', partNumber: '2449-X3', load: '555', stiffness: '5550', type: '1', dimensions: { A: '2.55', B: '0.65', C: '1.48', D: '0.9', E: '1.15', F: '2.23', plateID: '1.5', plateThickness: '0.88' } },
    { series: '2450', partNumber: '2450-X4', load: '750', stiffness: '16667', type: '1', dimensions: { A: '3.28', B: '0.76', C: '1.83', D: '0.8', E: '1.11', F: '1.82', plateID: '1.84', plateThickness: '0.63' } },
    { series: '2450', partNumber: '2450-X5', load: '1050', stiffness: '23333', type: '1', dimensions: { A: '3.28', B: '0.76', C: '1.83', D: '0.8', E: '1.11', F: '1.82', plateID: '1.84', plateThickness: '0.63' } },
    { series: '2450', partNumber: '2450-X6', load: '1200', stiffness: '26667', type: '1', dimensions: { A: '3.28', B: '0.76', C: '1.83', D: '0.8', E: '1.11', F: '1.82', plateID: '1.84', plateThickness: '0.63' } },
    // 2451 Series
    { series: '2451', partNumber: '', load: '850 - 1100', stiffness: '28333 - 36667', type: '1', dimensions: { A: '3.21', B: '0.76', C: '1.84', D: '0.81', E: '1.1', F: '1.81', plateID: '1.84', plateThickness: '0.63' } },
    { series: '2451', partNumber: '2451-X5', load: '850', stiffness: '28333', type: '1', dimensions: { A: '3.21', B: '0.76', C: '1.84', D: '0.81', E: '1.1', F: '1.81', plateID: '1.84', plateThickness: '0.63' } },
    { series: '2451', partNumber: '2451-X7', load: '1100', stiffness: '36667', type: '1', dimensions: { A: '3.21', B: '0.76', C: '1.84', D: '0.81', E: '1.1', F: '1.81', plateID: '1.84', plateThickness: '0.63' } },
    // 2452 Series
    { series: '2452', partNumber: '', load: '500 - 775', stiffness: '12500 - 19375', type: '1', dimensions: { A: '2.65', B: '0.51', C: '1.38', D: '0.81', E: '1.11', F: '1.81', plateID: '1.4', plateThickness: '0.63' } },
    { series: '2452', partNumber: '2452-X3', load: '500', stiffness: '12500', type: '1', dimensions: { A: '2.65', B: '0.51', C: '1.38', D: '0.81', E: '1.11', F: '1.81', plateID: '1.4', plateThickness: '0.63' } },
    { series: '2452', partNumber: '2452-X4', load: '650', stiffness: '16250', type: '1', dimensions: { A: '2.65', B: '0.51', C: '1.38', D: '0.81', E: '1.11', F: '1.81', plateID: '1.4', plateThickness: '0.63' } },
    { series: '2452', partNumber: '2452-X5', load: '775', stiffness: '19375', type: '1', dimensions: { A: '2.65', B: '0.51', C: '1.38', D: '0.81', E: '1.11', F: '1.81', plateID: '1.4', plateThickness: '0.63' } },
    // 2453 Series
    { series: '2453', partNumber: '', load: '475 - 475', stiffness: '15833 - 15833', type: '1', dimensions: { A: '3.21', B: '0.65', C: '1.84', D: '0.81', E: '1.1', F: '1.81', plateID: '1.84', plateThickness: '0.63' } },
    { series: '2453', partNumber: '2453-X2', load: '475', stiffness: '15833', type: '1', dimensions: { A: '3.21', B: '0.65', C: '1.84', D: '0.81', E: '1.1', F: '1.81', plateID: '1.84', plateThickness: '0.63' } },
    // 2454 Series
    { series: '2454', partNumber: '', load: '170 - 280', stiffness: '4857 - 8000', type: '1', dimensions: { A: '2.22', B: '0.52', C: '1.38', D: '0.72', E: '1.03', F: '1.81', plateID: '1.4', plateThickness: '0.63' } },
    { series: '2454', partNumber: '2454-X5', load: '280', stiffness: '8000', type: '1', dimensions: { A: '2.22', B: '0.52', C: '1.38', D: '0.72', E: '1.03', F: '1.81', plateID: '1.4', plateThickness: '0.63' } },
    { series: '2454', partNumber: '2454-X3', load: '170', stiffness: '4857', type: '1', dimensions: { A: '2.22', B: '0.52', C: '1.38', D: '0.72', E: '1.03', F: '1.81', plateID: '1.4', plateThickness: '0.63' } },
    { series: '2454', partNumber: '2454-X4', load: '220', stiffness: '6286', type: '1', dimensions: { A: '2.22', B: '0.52', C: '1.38', D: '0.72', E: '1.03', F: '1.81', plateID: '1.4', plateThickness: '0.63' } },
    // 2455 Series
    { series: '2455', partNumber: '', load: '700 - 1500', stiffness: '15555 - 33335', type: '1', dimensions: { A: '3.28', B: '0.81', C: '1.83', D: '0.8', E: '1.11', F: '3.31', plateID: '1.84', plateThickness: '2.13' } },
    { series: '2455', partNumber: '2455-X3', load: '700', stiffness: '15555', type: '1', dimensions: { A: '3.28', B: '0.81', C: '1.83', D: '0.8', E: '1.11', F: '3.31', plateID: '1.84', plateThickness: '2.13' } },
    { series: '2455', partNumber: '2455-X4', load: '900', stiffness: '20000', type: '1', dimensions: { A: '3.28', B: '0.81', C: '1.83', D: '0.8', E: '1.11', F: '3.31', plateID: '1.84', plateThickness: '2.13' } },
    { series: '2455', partNumber: '2455-X5', load: '1200', stiffness: '26670', type: '1', dimensions: { A: '3.28', B: '0.81', C: '1.83', D: '0.8', E: '1.11', F: '3.31', plateID: '1.84', plateThickness: '2.13' } },
    { series: '2455', partNumber: '2455-X6', load: '1500', stiffness: '33335', type: '1', dimensions: { A: '3.28', B: '0.81', C: '1.83', D: '0.8', E: '1.11', F: '3.31', plateID: '1.84', plateThickness: '2.13' } },
    // 2460 Series
    { series: '2460', partNumber: '', load: '1800 - 2900', stiffness: '18000 - 29000', type: '1', dimensions: { A: '3.5', B: '0.94', C: '2.22', D: '1', E: '1.4', F: '2.89', plateID: '2.25', plateThickness: '1.13' } },
    { series: '2460', partNumber: '2460-X5', load: '1800', stiffness: '18000', type: '1', dimensions: { A: '3.5', B: '0.94', C: '2.22', D: '1', E: '1.4', F: '2.89', plateID: '2.25', plateThickness: '1.13' } },
    { series: '2460', partNumber: '2460-X6', load: '2300', stiffness: '23000', type: '1', dimensions: { A: '3.5', B: '0.94', C: '2.22', D: '1', E: '1.4', F: '2.89', plateID: '2.25', plateThickness: '1.13' } },
    { series: '2460', partNumber: '2460-X7', load: '2900', stiffness: '29000', type: '1', dimensions: { A: '3.5', B: '0.94', C: '2.22', D: '1', E: '1.4', F: '2.89', plateID: '2.25', plateThickness: '1.13' } },
    // 2475 Series
    { series: '2475', partNumber: '', load: '110 - 225', stiffness: '1222 - 2500', type: '1', dimensions: { A: '2', B: '0.51', C: '1.36', D: '1.75', E: '1.86', F: '3.5', plateID: '1.38', plateThickness: '0.25' } },
    { series: '2475', partNumber: '2475-X4', load: '110', stiffness: '1222', type: '1', dimensions: { A: '2', B: '0.51', C: '1.36', D: '1.75', E: '1.86', F: '3.5', plateID: '1.38', plateThickness: '0.25' } },
    { series: '2475', partNumber: '2475-X5', load: '125', stiffness: '1389', type: '1', dimensions: { A: '2', B: '0.51', C: '1.36', D: '1.75', E: '1.86', F: '3.5', plateID: '1.38', plateThickness: '0.25' } },
    { series: '2475', partNumber: '2475-X7', load: '225', stiffness: '2500', type: '1', dimensions: { A: '2', B: '0.51', C: '1.36', D: '1.75', E: '1.86', F: '3.5', plateID: '1.38', plateThickness: '0.25' } },
    // 2480 Series
    { series: '2480', partNumber: '', load: '400 - 400', stiffness: '5714 - 5714', type: '2', dimensions: { A: '2.55', B: '0.66', C: '1.48', D: '0.74', E: '1.44', F: '2.63', plateID: '1.5', plateThickness: '0.5' } },
    { series: '2480', partNumber: '2480-X3', load: '400', stiffness: '5714', type: '2', dimensions: { A: '2.55', B: '0.66', C: '1.48', D: '0.74', E: '1.44', F: '2.63', plateID: '1.5', plateThickness: '0.5' } },
    { series: '2480', partNumber: '2480-X4', load: '650', stiffness: '8000', type: '2', dimensions: { A: '2.55', B: '0.66', C: '1.48', D: '0.74', E: '1.44', F: '2.63', plateID: '1.5', plateThickness: '0.5' } },
    { series: '2480', partNumber: '2480-X5', load: '750', stiffness: '8500', type: '2', dimensions: { A: '2.55', B: '0.66', C: '1.48', D: '0.74', E: '1.44', F: '2.63', plateID: '1.5', plateThickness: '0.5' } },
    { series: '2480', partNumber: '2480-X6', load: '925', stiffness: '10500', type: '2', dimensions: { A: '2.55', B: '0.66', C: '1.48', D: '0.74', E: '1.44', F: '2.63', plateID: '1.5', plateThickness: '0.5' } },
    { series: '2480', partNumber: '2480-X7', load: '1050', stiffness: '11500', type: '2', dimensions: { A: '2.55', B: '0.66', C: '1.48', D: '0.74', E: '1.44', F: '2.63', plateID: '1.5', plateThickness: '0.5' } },
    { series: '2480', partNumber: '2480-X8', load: '1200', stiffness: '12000', type: '2', dimensions: { A: '2.55', B: '0.66', C: '1.48', D: '0.74', E: '1.44', F: '2.63', plateID: '1.5', plateThickness: '0.5' } },
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
              Three Piece Mounts
            </h1>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Three-piece mounts are used for both light and heavy equipment such as highway vehicles, construction, and agriculture. These have an easy installation and have a lower radial stiffness than the one and two-piece mounts.
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