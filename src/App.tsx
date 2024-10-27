import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedItems from './components/FeaturedItems';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <FeaturedItems />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;