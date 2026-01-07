import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-24 px-6 relative overflow-hidden border-t border-slate-900">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-emerald-500/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 md:p-16 rounded-[3rem] shadow-2xl overflow-hidden relative">
          {/* Decorative Mesh Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]"></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-[1.1]">
                Ready to bridge <br />
                <span className="text-emerald-500">the borders?</span>
              </h3>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Join the fastest-growing payment network in the region. 
                Whether you're a merchant or an individual, WokoPay is 
                built to move with you.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-emerald-500/20 transform hover:scale-105 active:scale-95">
                  Start Your Journey Now
                </button>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-md border border-slate-700/50 p-8 rounded-3xl">
              <h4 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Direct Support
              </h4>
              <p className="text-slate-400 mb-8 text-sm">
                Need specialized merchant help or business solutions? 
                Speak directly to our regional experts.
              </p>
              
              <div className="space-y-4">
                <a href="tel:0880860809" className="group flex items-center justify-between p-4 bg-slate-900/50 border border-slate-700 rounded-2xl hover:border-emerald-500/50 transition-all">
                  <span className="text-slate-300 font-medium group-hover:text-white">+265 880 860 809</span>
                  <span className="text-xs text-emerald-500 font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Call Now</span>
                </a>
                <a href="tel:0982348199" className="group flex items-center justify-between p-4 bg-slate-900/50 border border-slate-700 rounded-2xl hover:border-emerald-500/50 transition-all">
                  <span className="text-slate-300 font-medium group-hover:text-white">+265 982 348 199</span>
                  <span className="text-xs text-emerald-500 font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Call Now</span>
                </a>
              </div>

              <div className="mt-8 flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Online
                </span>
                <span>Average response: 5 mins</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}