import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProcessFramework from './components/ProcessFramework';
import CaseStudies from './components/CaseStudies';
import Partnership from './components/Partnership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-inter">
      <ScrollProgress />
      <Header />
      <Hero />
      <ProcessFramework />
      <CaseStudies />
      <Partnership />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;