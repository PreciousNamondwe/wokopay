"use client";
import React, { useState } from "react";
import { 
  LayoutDashboard, 
  Send, 
  History, 
  User,  
  Bell,  
  ShieldCheck,
} from "lucide-react";
import MobileTab from "../components/dash/helper/MobileTab";
import SidebarItem from "../components/dash/helper/SidebarItem";
import ProfileView from "../components/dash/tabs/ProfileView";
import ActivityView from "../components/dash/tabs/ActivityView";
import TransfersView from "../components/dash/tabs/TransfersView";
import DashboardView from "../components/dash/tabs/DashboardView";


export default function App() {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [showNotification, setShowNotification] = useState<boolean>(false);
  
  const mobileNumber: string = "+265 88 000 0000";
  const currentBalance: string = "245,000";

  const copyId = (): void => {
    const el = document.createElement('textarea');
    el.value = mobileNumber;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans flex flex-col md:flex-row overflow-hidden">
      
      {showNotification && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] bg-emerald-500 text-slate-950 px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 animate-bounce">
          <ShieldCheck size={18} /> ID Copied
        </div>
      )}

      <aside className="hidden md:flex flex-col w-64 border-r border-slate-800/60 bg-[#0b0f1a] p-6 sticky top-0 h-screen shrink-0">
        <div className="flex items-center gap-3 mb-10 px-2">
          <span className="text-xl font-black text-white tracking-tighter uppercase">Woko<span className="text-emerald-500">Pay</span></span>
        </div>

        <nav className="space-y-2 flex-1">
          <SidebarItem icon={LayoutDashboard} label="Home" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
          <SidebarItem icon={Send} label="Transfer" active={activeTab === 'transfers'} onClick={() => setActiveTab('transfers')} />
          <SidebarItem icon={History} label="Activity" active={activeTab === 'activity'} onClick={() => setActiveTab('activity')} />
          <SidebarItem icon={User} label="My Account" active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
        </nav>

        <div className="mt-auto">
          <div className="bg-slate-900/40 p-4 rounded-2xl border border-slate-800">
            <p className="text-[10px] font-bold text-slate-500 uppercase mb-2">Network Status</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-white">Live Connection</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 h-screen overflow-y-auto pb-24 md:pb-0">
        <header className="h-20 border-b border-slate-800/40 bg-[#020617]/80 backdrop-blur-md sticky top-0 z-30 px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-black text-white uppercase tracking-tight md:hidden">
              Woko<span className="text-emerald-500">Pay</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-white transition-colors">
              <Bell size={20} />
            </button>
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-500 font-bold">
              FC
            </div>
          </div>
        </header>

        <div className="p-6 md:p-10 max-w-5xl mx-auto w-full">
          {activeTab === 'dashboard' && <DashboardView copyId={copyId} balance={currentBalance} mobile={mobileNumber} setTab={setActiveTab} />}
          {activeTab === 'transfers' && <TransfersView balance={currentBalance} />}
          {activeTab === 'activity' && <ActivityView />}
          {activeTab === 'profile' && <ProfileView mobile={mobileNumber} />}
        </div>
      </main>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0b1120]/95 backdrop-blur-lg border-t border-slate-800/60 flex items-center justify-around py-4 px-2 z-50">
        <MobileTab icon={LayoutDashboard} label="Home" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
        <MobileTab icon={Send} label="Transfer" active={activeTab === 'transfers'} onClick={() => setActiveTab('transfers')} />
        <MobileTab icon={History} label="Activity" active={activeTab === 'activity'} onClick={() => setActiveTab('activity')} />
        <MobileTab icon={User} label="Profile" active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
      </nav>
    </div>
  );
}
