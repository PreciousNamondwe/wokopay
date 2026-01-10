import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-slate-950 pt-24 pb-20 lg:pt-32 lg:pb-40">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-600 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              Now Live
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
            Cross-Border Payments <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
              Without the Borders.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Instant payments and transfers between local currencies across Africa. 
            All value stays local, fast, simple, and transparent.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="/onboarding/kyc">
              <button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/20">
              Get Started Now
            </button>
            </a>
            <button className="w-full sm:w-auto bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all backdrop-blur-sm">
              View Live Rates
            </button>
          </div>

          {/* Social Proof / Stats */}
          <div className="mt-20 pt-10 border-t border-slate-800/50 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="text-2xl font-bold text-white">&lt;50s</p>
              <p className="text-slate-500 text-sm">Settlement Time</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">0%</p>
              <p className="text-slate-500 text-sm">USD FX Premium</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-2xl font-bold text-white">24/7</p>
              <p className="text-slate-500 text-sm">Airtel & MTN Support</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual representation of a "Card" or App Preview could go here */}
      <div className="mt-16 flex justify-center px-6">
        <div className="relative max-w-5xl w-full aspect-video bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="p-8 flex flex-col h-full justify-center items-center text-slate-500">
               <div className="w-20 h-20 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
               </div>
               <p className="font-medium">Watch how WokoPay works</p>
            </div>
        </div>
      </div>
    </section>
  );
}