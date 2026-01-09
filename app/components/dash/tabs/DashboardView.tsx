"use client";
import React, { useState } from "react";
import {  
  Send,
  Globe,
  Smartphone,
  Copy,
} from "lucide-react";
import Transaction from "../helper/Transaction";

interface DashboardViewProps {
  copyId: () => void;
  balance: String;
  mobile: string;
  setTab: (tab: string) => void;
}

const MalawiFlag: React.FC = () => (
  <svg width="24" height="16" viewBox="0 0 300 200" className="rounded-sm inline-block mr-2 shadow-sm">
    <rect width="300" height="66.6" fill="#000000" />
    <rect y="66.6" width="300" height="66.6" fill="#CE1126" />
    <rect y="133.2" width="300" height="66.6" fill="#006733" />
    <circle cx="150" cy="66.6" r="40" fill="#CE1126" clipPath="inset(0 0 40 0)" />
  </svg>
);


export default function DashboardView({ copyId, balance, mobile, setTab }: DashboardViewProps) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <section className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Globe size={300} />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <MalawiFlag />
            <span className="text-slate-400 text-xs font-black uppercase tracking-[0.2em]">Live Balance</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter">
            {balance} <span className="text-xl text-emerald-500 font-bold">MWK</span>
          </h1>
          <p className="text-slate-500 font-medium">Linked to <span className="text-white font-bold">{mobile}</span></p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900/40 border border-slate-800 rounded-[2rem] p-8 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-white flex items-center gap-2"><Send size={18} className="text-emerald-500"/> Instant Transfer</h3>
            <span className="text-[10px] text-emerald-500 font-bold border border-emerald-500/30 px-2 py-1 rounded-full">Across Africa</span>
          </div>
          
          <button onClick={() => setTab('transfers')} className="w-full bg-emerald-500 text-slate-950 py-5 rounded-2xl font-black transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-emerald-500/20">
            Proceed to Transfer
          </button>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 rounded-[2rem] p-8 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-emerald-500">
              <Smartphone size={24} />
            </div>
            <h4 className="text-white font-bold mb-1">Your Account ID</h4>
            <p className="text-2xl font-black text-emerald-500 tracking-tight">{mobile}</p>
          </div>
          <button onClick={copyId} className="mt-8 flex items-center justify-center gap-2 py-3 bg-slate-800/50 hover:bg-slate-800 text-xs font-bold text-white rounded-xl transition-all border border-slate-700/50">
            <Copy size={14} /> Copy ID to receive
          </button>
        </div>
      </div>

      <section className="bg-slate-900/40 border border-slate-800 rounded-[2rem] p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-white">Latest History</h3>
          <button onClick={() => setTab('activity')} className="text-xs font-bold text-emerald-500 hover:underline">View all</button>
        </div>
        <div className="divide-y divide-slate-800/50">
          <Transaction title="TNM Cash Transfer" sub="Received from +26599..." amount="+45,000" positive />
          <Transaction title="Airtime Purchase" sub="Personal usage" amount="-2,500" />
          <Transaction title="Airtel Cash-out" sub="Withdrawal to Agent" amount="-12,000" />
        </div>
      </section>
    </div>
  );
}