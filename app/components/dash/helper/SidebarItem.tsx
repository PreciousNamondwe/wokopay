"use client";
import React from "react";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps{
    icon:LucideIcon;
    label:string;
    active:boolean;
    onClick: () => void;
}

export default function SidebarItem({ icon: Icon, label, active, onClick }: SidebarItemProps) {
  return (
    <button onClick={onClick} className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all ${active ? "bg-emerald-500 text-slate-950" : "text-slate-500 hover:bg-slate-900 hover:text-white"}`}>
      <Icon size={20} />
      {label}
    </button>
  );
}