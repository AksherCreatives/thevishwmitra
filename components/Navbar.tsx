import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] glass bg-white/80 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-extrabold tracking-tighter flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white text-xs font-black">V</span>
          <span className="gradient-text uppercase">thevishwmitra</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-bold uppercase tracking-widest text-black/60 hover:text-sky-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://calendly.com/thevishwmitra"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-sky-600 text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-tighter transition-all transform hover:scale-105"
          >
            Book Session
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass bg-white p-8 flex flex-col space-y-6 animate-in slide-in-from-top duration-300">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black text-black hover:text-sky-600"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};