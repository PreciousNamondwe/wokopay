"use client";
import React, { useState } from "react";
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
} from "lucide-react";

interface TransactionProps {
  title: string;
  sub: string;
  amount: string;
  positive?: boolean;
}

export default function Transaction({ title, sub, amount, positive }: TransactionProps) {
  return (
    <div className="flex items-center justify-between p-6 group hover:bg-slate-800/30 transition-colors">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${positive ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-800/50 text-slate-400'}`}>
          {positive ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
        </div>
        <div>
          <p className="text-sm font-black text-white">{title}</p>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">{sub}</p>
        </div>
      </div>
      <p className={`font-black text-lg ${positive ? 'text-emerald-500' : 'text-white'}`}>
        {amount} <span className="text-[10px] opacity-40 font-bold">MWK</span>
      </p>
    </div>
  );
}