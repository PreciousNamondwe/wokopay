"use client";
import React, { useState } from "react";
import { 
  ArrowRight,
  LucideIcon
} from "lucide-react";

interface ProfileButtonProps {
  icon: LucideIcon;
  label: string;
}

export default function ProfileButton({ icon: Icon, label }: ProfileButtonProps) {
  return (
    <button className="flex items-center justify-between p-5 bg-slate-900/60 border border-slate-800 rounded-2xl text-left hover:bg-slate-800 transition-all group">
      <span className="font-bold flex items-center gap-4 text-white">
        <div className="p-2 bg-slate-800 rounded-lg group-hover:text-emerald-500 transition-colors">
          <Icon size={18} />
        </div>
        {label}
      </span>
      <ArrowRight size={16} className="text-slate-600" />
    </button>
  );
}