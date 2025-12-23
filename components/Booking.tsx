
import React from 'react';

export const Booking: React.FC = () => {
  return (
    <section id="book" className="py-32 relative overflow-hidden bg-black">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Scale Your <span className="text-sky-400">Agency</span>.</h2>
        <p className="text-xl text-white/40 mb-16 max-w-2xl mx-auto font-medium">
          Limited availability for Q3 2024. Let's find the 20+ hours your team is losing every week.
        </p>
        
        <div className="glass p-1 md:p-1.5 rounded-[3.5rem] border border-white/5 glow-sky">
          <div className="bg-white/5 p-12 md:p-20 rounded-[3rem] border border-white/10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-sky-500 flex items-center justify-center text-3xl text-black mb-10 shadow-2xl shadow-sky-500/20">
              <i className="fa-solid fa-bolt"></i>
            </div>
            
            <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">The Strategy Session</h3>
            <p className="text-white/50 mb-12 max-w-md">A deep dive into your current pipeline. No fluff, just technical roadmapping.</p>
            
            <div className="flex flex-col sm:flex-row gap-5 w-full max-w-md">
              <button className="flex-1 bg-white text-black px-8 py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-sky-400 transition-all transform hover:-translate-y-1">
                Pick a Time
              </button>
              <button className="flex-1 glass border border-white/10 text-white px-8 py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-white/5 transition-all">
                Direct Inquiry
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-10 text-white/30 text-xs font-black uppercase tracking-[0.2em]">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            Workflow Review
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            Tech Audit
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            Scalability Map
          </div>
        </div>
      </div>
    </section>
  );
};
