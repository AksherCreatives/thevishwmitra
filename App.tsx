import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Hub } from './components/Hub';
import { About } from './components/About';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative antialiased selection:bg-sky-500 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Hub />
        <About />
      </main>

      <Footer />
      
      {/* Dynamic Glows adapted for Light theme */}
      <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none overflow-hidden">
         <div className="absolute -top-[10%] -right-[10%] w-[60vw] h-[60vw] bg-sky-200/20 rounded-full blur-[120px]"></div>
         <div className="absolute top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-sky-100/30 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-[0%] right-[5%] w-[40vw] h-[40vw] bg-sky-50/40 rounded-full blur-[150px]"></div>
      </div>
    </div>
  );
};

export default App;