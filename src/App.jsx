import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Framer Motion premium loading screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main website structure */}
      <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Process />
        </main>
        <Footer />
      </div>
    </>
  );
}
