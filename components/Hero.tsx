
import React, { useState, useRef } from 'react';

export const Hero: React.FC = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Limits tilt to 10 degrees
    setTilt({ x: x * 20, y: y * -20 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            Multifaceted Creator & Consultant
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter text-black">
            Vishwmitra <br/>
            <span className="gradient-text">Shrivastava</span>.
          </h1>
          <p className="text-xl text-black/50 mb-12 max-w-lg leading-relaxed font-medium">
            Workflow Architect. Agency Founder. Educator. <br/>
            I help people edit faster, scale bigger, and live better. 
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#hub"
              className="bg-black text-white px-10 py-5 rounded-2xl font-black text-center transition-all shadow-xl shadow-black/10 uppercase tracking-tighter hover:bg-sky-600"
            >
              Choose Your Path
            </a>
            <a
              href="https://calendly.com/thevishwmitra"
              target="_blank"
              rel="noopener noreferrer"
              className="glass border border-black/10 text-black px-10 py-5 rounded-2xl font-black text-center transition-all uppercase tracking-tighter hover:bg-black/5"
            >
              Direct Consultation
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative flex justify-center items-center">
          {/* Animated Background Pulse */}
          <div 
            className="absolute -inset-10 bg-sky-400/20 blur-[80px] rounded-full opacity-30 animate-pulse"
            style={{
              transform: `translate(${tilt.x * 0.5}px, ${tilt.y * -0.5}px)`
            }}
          ></div>

          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-md perspective-1000 transition-transform duration-200 ease-out"
            style={{
              perspective: '1000px'
            }}
          >
            <div 
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-black/5 glow-sky shadow-2xl transition-all duration-300 ease-out"
              style={{
                transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Parallax Image Effect */}
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800" 
                alt="Vishwmitra Shrivastava" 
                className="w-full h-full object-cover scale-110 transition-transform duration-300 ease-out"
                style={{
                  transform: `translate(${tilt.x * -0.8}px, ${tilt.y * 0.8}px)`
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent pointer-events-none"></div>
              
              <div 
                className="absolute bottom-10 left-10 right-10 transform-gpu transition-transform duration-300 ease-out"
                style={{
                   transform: `translateZ(50px)`
                }}
              >
                <div className="glass bg-white/80 p-5 rounded-2xl border border-black/5 backdrop-blur-2xl shadow-xl">
                  <p className="text-xs font-black uppercase tracking-widest text-sky-600 mb-1">Founder @ thevishwmitra</p>
                  <p className="text-sm font-bold text-black/80">Streamlining high-volume video pipelines.</p>
                </div>
              </div>
            </div>

            {/* Float Element: Floating tag */}
            <div 
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full glass border border-sky-200 flex flex-col items-center justify-center shadow-lg animate-bounce duration-[3000ms]"
              style={{
                transform: `translateZ(100px)`
              }}
            >
              <i className="fa-solid fa-bolt text-sky-500 text-xl mb-1"></i>
              <span className="text-[8px] font-black uppercase tracking-tighter text-black/60">Speed Expert</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
