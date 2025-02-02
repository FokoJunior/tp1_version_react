import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Topics from './components/Topics';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Topics />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;