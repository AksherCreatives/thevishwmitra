import React from 'react';
import { HUB_ITEMS } from '../constants';

export const Hub: React.FC = () => {
  return (
    <section id="hub" className="py-32 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-xs font-black text-sky-600 uppercase tracking-[0.4em] mb-4">Choose Your Path</h2>
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-black">The <span className="gradient-text">Ecosystem</span>.</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HUB_ITEMS.map((item) => (
            <a 
              key={item.id} 
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className={`group bg-zinc-50/50 p-10 rounded-[2.5rem] border border-black/5 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between hover:shadow-2xl hover:shadow-sky-500/10 ${item.color}`}
            >
              <div>
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-black/5 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all text-black">
                    <i className={`fa-brands ${item.icon.startsWith('fa-i') || item.icon.startsWith('fa-y') || item.icon.startsWith('fa-d') ? item.icon : 'fa-solid ' + item.icon}`}></i>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-black/30 group-hover:text-sky-600">
                    {item.category}
                  </span>
                </div>
                
                <h4 className="text-3xl font-black mb-4 tracking-tighter uppercase text-black">{item.title}</h4>
                <p className="text-black/40 leading-relaxed mb-8 group-hover:text-black/60 transition-colors">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm font-black uppercase tracking-tighter group-hover:gap-4 transition-all text-black">
                {item.label} <i className="fa-solid fa-arrow-right-long text-sky-500"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};