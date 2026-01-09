"use client";
import React, { useState } from "react";
import { 
  LucideIcon
} from "lucide-react";

interface MobileTabProps{
    icon: LucideIcon;
    label:String;
    active:boolean;
    onClick: ()=>void;
}

export default function MobileTab({ icon: Icon, label, active, onClick }: MobileTabProps) {
  return (
    <button onClick={onClick} className="flex flex-col items-center gap-1 flex-1 transition-all active:scale-90">
      <div className={`p-2 rounded-xl transition-all ${active ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20' : 'text-slate-500'}`}>
        <Icon size={22} />
      </div>
      <span className={`text-[10px] font-black uppercase tracking-tighter ${active ? 'text-emerald-500' : 'text-slate-500'}`}>{label}</span>
    </button>
  );
}