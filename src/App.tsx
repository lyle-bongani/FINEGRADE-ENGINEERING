import React from 'react';
import './App.css';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Scope from './pages/Scope';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import FloatingHelpButton from './components/FloatingHelpButton';
import BackToTopButton from './components/BackToTopButton';
import ElectricalControlInstrumentation from './pages/ElectricalControlInstrumentation';
import MediumHighVoltage from './pages/MediumHighVoltage';
import StructuralMechanicalPipingPlatework from './pages/StructuralMechanicalPipingPlatework';
import EnergyWasteManagement from './pages/EnergyWasteManagement';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/scope" element={<Scope />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/electrical-control-instrumentation" element={<ElectricalControlInstrumentation />} />
        <Route path="/services/medium-high-voltage" element={<MediumHighVoltage />} />
        <Route path="/services/structural-mechanical-piping-platework" element={<StructuralMechanicalPipingPlatework />} />
        <Route path="/services/energy-waste-management" element={<EnergyWasteManagement />} />
      </Routes>
      <FloatingHelpButton />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default App;
