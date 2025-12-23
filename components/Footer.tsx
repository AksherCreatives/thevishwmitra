import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <div className="text-2xl font-black text-black mb-2 uppercase tracking-tighter">thevishwmitra</div>
            <p className="text-black/30 text-xs font-bold uppercase tracking-widest">Efficiency through technical precision.</p>
          </div>

          <div className="flex gap-10">
            <a href="#" className="text-black/40 hover:text-sky-600 text-xl transition-colors"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#" className="text-black/40 hover:text-sky-600 text-xl transition-colors"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="text-black/40 hover:text-sky-600 text-xl transition-colors"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#" className="text-black/40 hover:text-sky-600 text-xl transition-colors"><i className="fa-brands fa-youtube"></i></a>
          </div>

          <p className="text-black/20 text-[10px] font-bold uppercase tracking-[0.3em]">
            &copy; 2024 VISHWMITRA SHRIVASTAVA
          </p>
        </div>
      </div>
    </footer>
  );
};