import React from 'react';
import { PORTFOLIO } from '../constants';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-xl">
                <h2 className="text-4xl font-extrabold mb-4">The Proof is in the <span className="text-sky-500">Pipeline</span></h2>
                <p className="text-slate-400">Case studies highlighting workflow transformations and team output boosts.</p>
            </div>
            <a href="#" className="text-sky-400 font-bold hover:underline flex items-center gap-2">
                Browse Full Case Library <i className="fa-solid fa-arrow-right"></i>
            </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PORTFOLIO.map((item) => (
            <div key={item.id} className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-2">{item.category}</p>
                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-sm font-bold text-white">
                    Read Case Study <i className="fa-solid fa-chevron-right text-xs"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};