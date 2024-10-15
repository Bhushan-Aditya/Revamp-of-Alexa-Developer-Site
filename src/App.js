import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Domain from './components/Domain';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
      <div className="app">
        <Header />
        <Hero />
        <About />
        <Events />
        <Domain />
        <Contact />
        <Footer />
      </div>
  );
};

export default App;