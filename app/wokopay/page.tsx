"use client";
import React, { useState } from "react";
import { 
  LayoutDashboard, 
  Send, 
  History, 
  User, 
  MessageSquare, 
  Bell, 
  ArrowUpRight, 
  ArrowDownLeft, 
  ShieldCheck,
  Globe,
  Smartphone,
  Copy,
  ArrowRight,
  Settings,
  CreditCard,
  LucideIcon
} from "lucide-react";

// --- TYPES & INTERFACES ---

interface DashboardViewProps {
  copyId: () => void;
  balance: string;
  mobile: string;
  setTab: (tab: string) => void;
}

interface TransfersViewProps {
  balance: string;
}

interface ProfileViewProps {
  mobile: string;
}

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  active: boolean;
  onClick: () => void;
}

interface MobileTabProps {
  icon: LucideIcon;
  label: string;
  active: boolean;
  onClick: () => void;
}

interface ProfileButtonProps {
  icon: LucideIcon;
  label: string;
}

interface TransactionProps {
  title: string;
  sub: string;
  amount: string;
  positive?: boolean;
}

// --- COMPONENTS ---

const MalawiFlag: React.FC = () => (
  <svg width="24" height="16" viewBox="0 0 300 200" className="rounded-sm inline-block mr-2 shadow-sm">
    <rect width="300" height="66.6" fill="#000000" />
    <rect y="66.6" width="300" height="66.6" fill="#CE1126" />
    <rect y="133.2" width="300" height="66.6" fill="#006733" />
    <circle cx="150" cy="66.6" r="40" fill="#CE1126" clipPath="inset(0 0 40 0)" />
  </svg>
);

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

function DashboardView({ copyId, balance, mobile, setTab }: DashboardViewProps) {
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

function TransfersView({ balance }: TransfersViewProps) {
  return (
    <div className="max-w-xl mx-auto space-y-8 py-4 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 md:p-10 space-y-8 shadow-2xl relative overflow-hidden">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">
            Destination Country
          </label>
          <select className="w-full bg-[#020617] border border-slate-800 rounded-2xl p-5 text-sm font-bold outline-none focus:border-emerald-500 transition-all text-slate-200">
            <option value="ZM">🇿🇲 Zambia (ZMW)</option>
            <option value="MW">🇲🇼 Malawi (MWK)</option>
          </select>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">
              Recipient Number
            </label>
            <input
              className="w-full bg-[#020617] border border-slate-800 rounded-2xl p-5 text-lg font-bold outline-none focus:border-emerald-500 transition-all text-white"
              placeholder="+260 / +265"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">
              Amount to Send
            </label>
            <div className="relative">
              <input
                className="w-full bg-[#020617] border border-slate-800 rounded-2xl p-5 text-4xl font-black outline-none focus:border-emerald-500 transition-all pr-24 text-white"
                placeholder="0"
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 font-black text-sm">
                MWK → ZMW
              </span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 text-[10px] text-emerald-500/80 leading-relaxed uppercase font-bold text-center">
          FX conversion + transaction fee: 0.5% (shown before confirmation)
        </div>

        <button className="w-full bg-emerald-500 text-slate-950 font-black py-5 rounded-2xl shadow-xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 transition-all">
          Authorize Transfer
        </button>
      </div>
    </div>
  );
}

function ActivityView() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h2 className="text-2xl font-black text-white">Activity History</h2>
      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden divide-y divide-slate-800/50">
        {[...Array(8)].map((_, i) => (
          <Transaction key={i} title="Wallet Transfer" sub={`Oct ${20-i}, 2023`} amount={i % 3 === 0 ? "-5,000" : "+12,500"} positive={i % 3 !== 0} />
        ))}
      </div>
    </div>
  );
}

function ProfileView({ mobile }: ProfileViewProps) {
  return (
    <div className="max-w-lg mx-auto text-center space-y-8 animate-in zoom-in-95 duration-500">
      <div className="relative inline-block">
        <div className="w-32 h-32 rounded-[2.5rem] border-2 border-emerald-500 p-1 mx-auto rotate-3">
          <div className="w-full h-full rounded-[2.2rem] bg-slate-800 flex items-center justify-center -rotate-3 text-4xl font-black text-white">
            FC
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-black text-white">Felix Chimwala</h2>
        <div className="flex items-center justify-center gap-2 mt-1">
          <MalawiFlag />
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">{mobile}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <ProfileButton icon={Settings} label="Security & PIN" />
        <ProfileButton icon={CreditCard} label="Bank Links" />
        <ProfileButton icon={MessageSquare} label="Woko Support" />
      </div>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function SidebarItem({ icon: Icon, label, active, onClick }: SidebarItemProps) {
  return (
    <button onClick={onClick} className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all ${active ? "bg-emerald-500 text-slate-950" : "text-slate-500 hover:bg-slate-900 hover:text-white"}`}>
      <Icon size={20} />
      {label}
    </button>
  );
}

function MobileTab({ icon: Icon, label, active, onClick }: MobileTabProps) {
  return (
    <button onClick={onClick} className="flex flex-col items-center gap-1 flex-1 transition-all active:scale-90">
      <div className={`p-2 rounded-xl transition-all ${active ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20' : 'text-slate-500'}`}>
        <Icon size={22} />
      </div>
      <span className={`text-[10px] font-black uppercase tracking-tighter ${active ? 'text-emerald-500' : 'text-slate-500'}`}>{label}</span>
    </button>
  );
}

function ProfileButton({ icon: Icon, label }: ProfileButtonProps) {
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

function Transaction({ title, sub, amount, positive }: TransactionProps) {
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