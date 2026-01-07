import React from 'react';
export default function Features() {
  const features = [
    {
      title: "Real-Time Settlement",
      description: "Funds move at the speed of a text message. Our local liquidity matching engine clears transfers in seconds, not days.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Bank-Grade Security",
      description: "End-to-end encryption and multi-factor authentication protect every Kwacha. We prioritize safety above all else.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "SME & Merchant Ready",
      description: "Bulk payments, vendor settlements, and trade financing tools designed to help regional businesses scale instantly.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="bg-slate-950 py-24 px-6 relative overflow-hidden border-t border-slate-900">
      {/* Subtle Background Glow for context */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="text-emerald-500 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
              Platform Core
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Engineered for African Trade
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            WokoPay solves the liquidity gap between Malawi and Zambia with 
            technology built for local market realities.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800/60 hover:border-emerald-500/40 transition-all hover:-translate-y-2 duration-500 backdrop-blur-sm shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-8 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                {feature.icon}
              </div>
              
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                {feature.title}
              </h4>
              
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {feature.description}
              </p>

              {/* Decorative line inside card */}
              <div className="mt-8 w-12 h-1 bg-slate-800 rounded-full group-hover:w-24 group-hover:bg-emerald-500/50 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}