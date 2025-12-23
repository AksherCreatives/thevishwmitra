import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Built for <span className="gradient-text">Scalability</span></h2>
            <p className="text-slate-400 text-lg">Solutions designed to grow your agency's output without ballooning your overhead.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx}
              className="group glass p-10 rounded-[2.5rem] border border-white/5 hover:border-sky-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-sky-600/10 flex items-center justify-center text-3xl text-sky-500 mb-8 group-hover:scale-110 group-hover:bg-sky-600/20 transition-all">
                <i className={`fa-solid ${service.icon}`}></i>
              </div>
              <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-slate-800 text-[10px] font-bold text-slate-300 uppercase tracking-widest border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};