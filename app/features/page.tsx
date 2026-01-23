"use client";

import React, { useState, useEffect } from 'react';
import {
  Shield,
  Cpu,
  Zap,
  Globe,
  Lock,
  ArrowRight,
  Database,
  RefreshCw,
  Layers,
  ChevronRight,
  Activity,
  Terminal,
  Unlink,
  Binary
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ArchitecturePage = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-cycle the "Protocol Flow" for visual engagement
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const flowSteps = [
    {
      title: "Localized Absorption",
      desc: "Capital is collected within domestic perimeters, satisfying regional regulatory compliance instantly.",
      icon: <Database className="w-6 h-6" />,
      tag: "INGRESS"
    },
    {
      title: "Instructional Mirroring",
      desc: "The protocol transmits a verified 'Settlement Instruction' rather than moving physical principal.",
      icon: <Binary className="w-6 h-6" />,
      tag: "LEDGER"
    },
    {
      title: "Materialized Egress",
      desc: "Liquidity is released via existing local rails, providing the end-user with immediate utility.",
      icon: <Zap className="w-6 h-6" />,
      tag: "SETTLEMENT"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-emerald font-sans overflow-x-hidden">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>


      <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">

        {/* Hero Section */}
        <section className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono uppercase tracking-[0.2em] mb-8">
            <Activity size={12} /> WokoPay Architecture v1.4.0
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 max-w-4xl mx-auto leading-[1.1]">
            Decoupling Value from <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">Distance.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Our Distributed Settlement Protocol replaces traditional cross-border transit with instantaneous instructional mirroring.
          </p>
        </section>

        {/* Interactive Protocol Visualizer */}
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Terminal className="text-emerald-500" />
              The Mirroring Logic
            </h2>
            <div className="space-y-4">
              {flowSteps.map((step, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${activeStep === idx
                    ? 'bg-emerald-500/10 border-emerald-500/30 translate-x-4'
                    : 'bg-white/[0.02] border-white/5 opacity-50'
                    }`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`p-2 rounded-lg ${activeStep === idx ? 'bg-emerald-500 text-black' : 'bg-white/10 text-white'}`}>
                      {step.icon}
                    </div>
                    <span className="text-[10px] font-mono text-emerald-500 tracking-widest">{step.tag}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square bg-[transparent] rounded-[3rem] border border-white/5 flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />

            {/* Visual Representation of the "Handshake" */}
            <div className="relative w-64 h-64">
              <div className={`absolute inset-0 border-2 border-emerald-500/20 rounded-full animate-[spin_10s_linear_infinite] ${activeStep === 1 ? 'border-emerald-500 border-dashed' : ''}`} />
              <div className="absolute inset-4 border border-white/5 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Cpu className={`w-16 h-16 mx-auto mb-4 transition-all duration-500 ${activeStep === 1 ? 'text-emerald-500 scale-110' : 'text-slate-700'}`} />
                  <div className="font-mono text-[10px] text-emerald-500/50">ENCRYPTED_CORE</div>
                </div>
              </div>

              {/* Floating Data Points */}
              <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black border border-white/10 rounded text-[10px] font-mono transition-all duration-700 ${activeStep === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                VALUE_INGESTED
              </div>
              <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black border border-white/10 rounded text-[10px] font-mono transition-all duration-700 ${activeStep === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                LOCAL_RELEASE
              </div>
            </div>
          </div>
        </section>

        {/* Feature Matrix */}
        <section className="grid md:grid-cols-3 gap-6 mb-32">
          <div className="group p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-emerald-500/20 transition-all">
            <Unlink className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform" size={28} />
            <h4 className="text-xl font-bold text-white mb-4">Decoupled Rails</h4>
            <p className="text-sm leading-relaxed text-slate-500">
              By separating the instructional layer from the capital layer, we bypass the 3-5 day latency inherent in the SWIFT network.
            </p>
          </div>

          <div className="group p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-emerald-500/20 transition-all">
            <Lock className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform" size={28} />
            <h4 className="text-xl font-bold text-white mb-4">Immutable Verification</h4>
            <p className="text-sm leading-relaxed text-slate-500">
              Each settlement is anchored by a cryptographic proof, ensuring that value cannot be materialized without confirmed domestic collateral.
            </p>
          </div>

          <div className="group p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-emerald-500/20 transition-all">
            <Globe className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform" size={28} />
            <h4 className="text-xl font-bold text-white mb-4">Regulatory Fluidity</h4>
            <p className="text-sm leading-relaxed text-slate-500">
              The architecture adapts to local jurisdictions by maintaining value locally, drastically reducing complex cross-border compliance overhead.
            </p>
          </div>
        </section>

        {/* Technical Callout */}
        <section className="relative rounded-[3rem] bg-[transparent] p-1px overflow-hidden">
          <div className="absolute inset-0 bg-emerald-400 animate-pulse opacity-20" />
          <div className="relative bg-[transparent] rounded-[3rem] p-12 md:p-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Ready for the New <br /> Standard of Settlement?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-10 py-4 bg-emerald-500 text-black font-bold rounded-full hover:bg-emerald-400 transition-all flex items-center gap-2">
                Get Whitepaper <ChevronRight size={18} />
              </button>
              <button className="px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all">
                Contact Architect
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ArchitecturePage;