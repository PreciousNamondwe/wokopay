"use client";

import { useEffect, useState } from "react";

export default function KYCPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-600 rounded-full blur-[100px] animate-bounce" style={{ animationDuration: '8s' }} />
      </div>

      <div className={`max-w-6xl w-full relative z-10 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest">
              Identity Verification
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Complete your <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
              WokoPay Profile
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            To ensure secure cross-border liquidity between Malawi and Zambia, 
            we need to verify your identity. Select the account type that best fits your needs.
          </p>
        </div>

        {/* KYC Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className={`transition-all duration-700 delay-100 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <KycCard
              title="Individual"
              desc="Perfect for sending money to family or paying for personal services across the border."
              features={["Instant Mobile Money Payouts", "Basic National ID KYC", "MWK & ZMW Wallets"]}
              icon={(
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              )}
              action="/onboarding/kyc/individual"
            />
          </div>

          <div className={`transition-all duration-700 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <KycCard
              title="SME / Trader"
              desc="For importers and exporters who need to settle trade in MWK or ZMW without USD intermediaries."
              features={["Local Money Value Settlement", "Preferential Trade Rates", "Business Registration KYB"]}
              highlight={true}
              icon={(
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )}
              action="/onboarding/kyc/sme"
            />
          </div>

          <div className={`transition-all duration-700 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <KycCard
              title="Enterprise"
              desc="Integrated solutions for large firms requiring bulk payouts, full APIs, and custom compliance."
              features={["Full API Access", "Maker-Checker Controls", "Dedicated Account Manager"]}
              icon={(
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              )}
              action="/onboarding/kyc/enterprise"
            />
          </div>
        </div>

        {/* Animated Cartoon Illustration Section - Now at Bottom */}
        <div className="flex flex-col items-center justify-center pt-10 border-t border-slate-900">
          <div className="relative w-40 h-40 md:w-56 md:h-56 flex items-center justify-center">
            {/* Custom SVG Cartoon Illustration */}
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              {/* Device/Phone Base */}
              <rect x="65" y="40" width="70" height="120" rx="12" fill="#1e293b" stroke="#334155" strokeWidth="4" className="animate-pulse" />
              <rect x="75" y="55" width="50" height="90" rx="4" fill="#0f172a" />
              
              {/* Floating Coin - "The Transaction" */}
              <g className="animate-bounce" style={{ animationDuration: '3s' }}>
                <circle cx="100" cy="85" r="18" fill="#fbbf24" />
                <circle cx="100" cy="85" r="14" fill="#f59e0b" />
                <path d="M100 77v16M92 85h16" stroke="white" strokeWidth="3" strokeLinecap="round" />
              </g>

              {/* Data/Success Particles */}
              <circle cx="50" cy="100" r="4" fill="#10b981" className="animate-ping" />
              <circle cx="150" cy="60" r="3" fill="#3b82f6" className="animate-ping" style={{ animationDelay: '1s' }} />
              <circle cx="160" cy="130" r="5" fill="#10b981" className="animate-ping" style={{ animationDelay: '0.5s' }} />
              
              {/* Bottom Support Platform */}
              <ellipse cx="100" cy="170" rx="60" ry="10" fill="rgba(16,185,129,0.1)" />
            </svg>
          </div>
          <p className="text-slate-500 text-xs mt-4 text-center">
             Moving MWK & ZMW value across the region securely.
          </p>
        </div>

        {/* Help Footer */}
        <div className={`mt-10 text-center transition-all duration-1000 delay-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-slate-500 text-sm">
            Need help deciding? <a href="#" className="text-emerald-500 font-bold hover:underline">Chat with a specialist</a> or call 0880 860 809.
          </p>
        </div>
      </div>
    </section>
  );
}

function KycCard({
  title,
  desc,
  features,
  icon,
  action,
  highlight = false,
}: {
  title: string;
  desc: string;
  features: string[];
  icon: React.ReactNode;
  action: string;
  highlight?: boolean;
}) {
  return (
    <a
      href={action}
      className={`group relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-4 overflow-hidden h-full ${
        highlight 
        ? "bg-slate-900 border-emerald-500/50 shadow-2xl shadow-emerald-500/10" 
        : "bg-slate-900/50 border-slate-800 hover:border-slate-700 shadow-xl"
      }`}
    >
      <div className="absolute -inset-x-20 -top-20 h-40 w-full bg-emerald-500/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {highlight && (
        <div className="absolute top-0 right-0 px-4 py-1 bg-emerald-500 text-slate-950 text-[10px] font-bold uppercase tracking-widest rounded-bl-2xl z-20">
          Recommended for Traders
        </div>
      )}

      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 relative z-10 ${
        highlight ? "bg-emerald-500 text-slate-950" : "bg-slate-800 text-emerald-500 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950"
      }`}>
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
        {title}
      </h3>
      
      <p className="text-slate-400 text-sm mb-8 leading-relaxed relative z-10">
        {desc}
      </p>

      <ul className="space-y-3 mb-10 mt-auto relative z-10">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-xs text-slate-300 font-medium group-hover:text-white transition-colors">
            <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 transition-transform group-hover:scale-125" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <div className={`flex items-center gap-2 font-bold text-sm tracking-wide group-hover:gap-4 transition-all relative z-10 ${
        highlight ? "text-emerald-400" : "text-slate-400 group-hover:text-emerald-400"
      }`}>
        {highlight ? "Verify Trade Business" : "Get Started"}
        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-500 group-hover:w-full transition-all duration-700" />
    </a>
  );
}