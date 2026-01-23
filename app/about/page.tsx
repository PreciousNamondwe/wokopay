"use client";

import React, { useState, useEffect } from 'react';
import {
  Shield,
  Target,
  Globe,
  Cpu,
  Award,
  BarChart3,
  ChevronRight,
  Activity,
  Server,
  Scale,
  Building2,
  Users2,
  Linkedin,
  Twitter,
  Instagram,
  Mail
} from 'lucide-react';
import Footer from '../components/Footer';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { label: "Regional Corridors", value: "14+", detail: "Across SADC" },
    { label: "Settlement Speed", value: "< 30s", detail: "Average Latency" },
    { label: "Monthly Volume", value: "$450M+", detail: "Enterprise Assets" },
    { label: "Uptime", value: "99.99%", detail: "SLA Guaranteed" },
  ];

  const coreValues = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Regulatory First",
      desc: "We operate at the intersection of innovation and strict adherence to regional central bank frameworks."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-time Liquidity",
      desc: "Our proprietary 'Green Engine' ensures that value moves as fast as data, bypassing legacy batching."
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Resilient Tech",
      desc: "Architected on distributed ledger principles to ensure zero single points of failure in the settlement chain."
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin size={18} />, href: '#' },
    { name: 'X', icon: <Twitter size={18} />, href: '#' },
    { name: 'Instagram', icon: <Instagram size={18} />, href: '#' },
    { name: 'Email', icon: <Mail size={18} />, href: 'mailto:contact@wokopay.com' }
  ];

  return (

    <div className="min-h-screen bg-slate-950 text-emerald font-sans overflow-x-hidden">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-emerald-500/50" />
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-emerald-400 font-bold">The Institutional Standard</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-[0.95] mb-12 max-w-5xl">
            Redefining the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">liquidity rails</span> of Africa.
          </h1>

          <div className="grid md:grid-cols-2 gap-16 items-end">
            <p className="text-xl md:text-2xl leading-relaxed font-light text-slate-400">
              WokoPay builds the liquidity rails for a borderless Africa. Our infrastructure enables instant local-currency settlement, bypassing legacy correspondent banking to curb FX stress
              and remove the geographic tax on regional trade.
            </p>
            <div className="flex flex-wrap gap-8 md:justify-end">
              <div className="text-right">
                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1">Headquarters</p>
                <p className="text-white font-medium">Regional Hub, SADC</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1">Founded</p>
                <p className="text-white font-medium">Est. 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bento Grid */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-emerald border border-white/5 rounded-3xl overflow-hidden">
          {stats.map((stat, i) => (
            <div key={i} className="bg-slate-900 p-10 hover:bg-white/[0.02] transition-colors">
              <p className="text-[10px] font-mono uppercase tracking-widest text-emerald-500/70 mb-4">{stat.label}</p>
              <h3 className="text-4xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-xs text-slate-600">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 sticky top-12">
            <h2 className="text-xs font-mono uppercase tracking-[0.4em] text-slate-500 mb-6">Our Perspective</h2>
            <h3 className="text-4xl font-bold text-white leading-tight">Solving the Friction of Borders.</h3>
          </div>
          <div className="lg:col-span-8 space-y-12">
            <div className="text-2xl text-slate-400 font-light leading-relaxed">
              We believe that <span className="text-white font-normal">geography should not be a tax on commerce.</span> For too long, intra-African trade has been throttled by a reliance on overseas correspondent banks. WokoPay was founded to decouple regional trade from global friction.
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-slate-900 border border-white/[0.03]">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-emerald-500" /> The Mission
                </h4>
                <p className="text-slate-500  leading-relaxed">To build the most reliable, transparent, and fastest value-transfer network in the Southern African region, empowering the next generation of digital commerce.</p>
              </div>
              <div className="p-8 rounded-2xl bg-slate-900 border border-white/[0.03]">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-500" /> The Vision
                </h4>
                <p className="text-slate-500  leading-relaxed">A unified financial landscape where local currencies move across borders with the same ease as a domestic instant payment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-slate border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {coreValues.map((value, i) => (
              <div key={i} className="group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-8 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Compliance */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="rounded-[3rem] p-8 md:p-20 bg-gradient-to-br from-slate to-slate border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 opacity-10">
            <Shield size={300} className="text-emerald-500" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">Built on Trust. Operated with Precision.</h2>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Compliance isn't a feature; it's our foundation. WokoPay integrates real-time AML/CTF screening and regional regulatory reporting directly into the protocol layer.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "KYB Verification", icon: <Building2 className="w-4 h-4" /> },
                { label: "Sanction Screening", icon: <Shield className="w-4 h-4" /> },
                { label: "SADC Oversight", icon: <Globe className="w-4 h-4" /> },
                { label: "Data Encryption", icon: <Cpu className="w-4 h-4" /> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    {item.icon}
                  </div>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto text-center border-b border-white/5">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono tracking-widest text-slate-400 mb-8">
          <Users2 size={14} /> JOIN OUR ECOSYSTEM
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Partner with the future of <br />regional liquidity.</h2>
        <p className="text-slate-500 max-w-xl mx-auto mb-12">
          We are currently expanding our network of banking partners and enterprise clients across the continent.
        </p>
        <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-black font-bold rounded-full transition-all flex items-center gap-3 mx-auto group">
          Institutional Inquiry <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;