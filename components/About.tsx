import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="sticky top-32">
            <h2 className="text-sky-600 font-black uppercase tracking-[0.3em] text-xs mb-6">The Methodology</h2>
            <h3 className="text-5xl md:text-7xl font-black mb-10 leading-[0.95] tracking-tighter text-black">
              Stop fighting <br/>
              the <span className="text-sky-600">Software</span>. <br/>
              Start telling <br/>
              the <span className="gradient-text">Story</span>.
            </h3>
            <p className="text-lg text-black/40 max-w-md leading-relaxed">
              I've spent years in the high-stakes world of agency production. I've seen the same problems everywhere: slow renders, chaotic files, and burnt-out editors. I'm here to fix that.
            </p>
          </div>

          <div className="space-y-16">
            <div className="group relative">
              <div className="text-8xl font-black text-black/[0.03] absolute -mt-10 -ml-8 group-hover:text-sky-500/5 transition-colors">01</div>
              <div className="relative">
                <h4 className="text-2xl font-bold text-black mb-4 uppercase tracking-tighter">Who I am</h4>
                <p className="text-black/50 leading-relaxed text-lg">
                  I'm Vishwmitra Shrivastava, but most call me <span className="text-black font-bold italic">Vishi</span>. I'm a video architect who specializes in turning disorganized creative teams into highly-tuned production machines.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="text-8xl font-black text-black/[0.03] absolute -mt-10 -ml-8 group-hover:text-sky-500/5 transition-colors">02</div>
              <div className="relative">
                <h4 className="text-2xl font-bold text-black mb-4 uppercase tracking-tighter">What I do</h4>
                <p className="text-black/50 leading-relaxed text-lg">
                  I offer video editing consultations for media agencies. I streamline workflows, optimize technical setups, and provide masterclasses for editing teams. If it makes an edit faster or better, I build it.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="text-8xl font-black text-black/[0.03] absolute -mt-10 -ml-8 group-hover:text-sky-500/5 transition-colors">03</div>
              <div className="relative">
                <h4 className="text-2xl font-bold text-black mb-4 uppercase tracking-tighter">Why I do it</h4>
                <p className="text-black/50 leading-relaxed text-lg">
                  Media agencies are losing millions in billable hours to inefficient post-production. My mission is to reclaim those hours, allowing your editors to focus on the high-level creativity that wins clients and grows businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};