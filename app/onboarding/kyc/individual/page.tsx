"use client";

import { useState, useEffect } from "react";
import { Check, ShieldCheck, Phone, Mail, Lock, Globe, FileText, ArrowRight, Upload } from "lucide-react";

export default function IndividualKYCPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "Malawi",
    idFile: null as File | null,
  });

  const totalSteps = 4;

  return (
    <section className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />

      <div className="w-full max-w-2xl relative z-10">
        {/* Logo/Brand Header */}
        <div className="flex justify-center mb-8">
          <div className="text-3xl font-black text-white tracking-tighter">
            WOKO<span className="text-emerald-500">PAY</span>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-slate-800">
            <div 
              className="h-full bg-emerald-500 transition-all duration-500 ease-out" 
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>

          {/* Header Content */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-white mb-2">
              {step === 1 && "Identity Details"}
              {step === 2 && "Verification"}
              {step === 3 && "Secure Your Account"}
              {step === 4 && "KYC Compliance"}
            </h1>
            <p className="text-slate-400 text-sm">
              {step === 1 && "Start your journey. Provide your primary contact details."}
              {step === 2 && "We've sent a 6-digit code to your mobile device."}
              {step === 3 && "Create a strong password for your WokoPay dashboard."}
              {step === 4 && "Final step: Upload your national ID to enable cross-border transfers."}
            </p>
          </div>

          {/* Step Indicator Bubbles */}
          <div className="flex items-center justify-between mb-12 relative">
             <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
             {[1, 2, 3, 4].map((s) => (
               <div 
                 key={s} 
                 className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                   step >= s ? "bg-emerald-500 text-slate-950 scale-110" : "bg-slate-800 text-slate-500"
                 }`}
               >
                 {step > s ? <Check size={20} strokeWidth={3} /> : <span className="font-bold">{s}</span>}
               </div>
             ))}
          </div>

          {/* Step Content with simple fade-in effect */}
          <div className="min-h-[320px]">
            {step === 1 && <IdentityStep onNext={() => setStep(2)} />}
            {step === 2 && <OTPStep onNext={() => setStep(3)} onBack={() => setStep(1)} />}
            {step === 3 && <SecurityStep onNext={() => setStep(4)} onBack={() => setStep(2)} />}
            {step === 4 && <KYCStep />}
          </div>
        </div>

        {/* Support Footer */}
        <p className="text-center mt-8 text-slate-500 text-sm">
          Having trouble? <button className="text-emerald-500 hover:underline">Contact WokoPay Support</button>
        </p>
      </div>
    </section>
  );
}

/* ------------------- SHARED UI COMPONENTS ------------------- */

function InputField({ label, icon: Icon, type = "text", placeholder, ...props }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-1">{label}</label>
      <div className="relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-emerald-500 transition-colors">
          <Icon size={18} />
        </div>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-12 pr-5 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
          {...props}
        />
      </div>
    </div>
  );
}

/* ------------------- STEPS ------------------- */

function IdentityStep({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <InputField label="Phone Number" icon={Phone} placeholder="+265 / +260 ..." />
      <InputField label="Email Address (Optional)" icon={Mail} placeholder="name@domain.com" />
      
      <button
        onClick={onNext}
        className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-95 shadow-xl shadow-emerald-500/10"
      >
        Send Verification Code <ArrowRight size={20} />
      </button>
    </div>
  );
}

function OTPStep({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex justify-center gap-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            className="w-12 h-16 bg-slate-950 border border-slate-800 rounded-xl text-center text-2xl font-bold text-emerald-500 focus:outline-none focus:border-emerald-500 transition-all"
          />
        ))}
      </div>

      <div className="space-y-4">
        <button
          onClick={onNext}
          className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-emerald-500/10"
        >
          Verify OTP
        </button>
        <div className="flex justify-between items-center px-2">
          <button onClick={onBack} className="text-slate-500 text-sm hover:text-white transition-colors">Change Number</button>
          <button className="text-emerald-500 text-sm font-bold hover:text-emerald-400 transition-colors">Resend Code</button>
        </div>
      </div>
    </div>
  );
}

function SecurityStep({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <InputField label="Create Password" icon={Lock} type="password" placeholder="Min. 8 characters" />
      <InputField label="Confirm Password" icon={ShieldCheck} type="password" placeholder="Repeat password" />
      
      <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
        <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Requirements:</p>
        <div className="flex items-center gap-2 text-xs text-emerald-500"><Check size={12}/> At least 8 characters</div>
        <div className="flex items-center gap-2 text-xs text-slate-500"><Check size={12}/> One symbol or number</div>
      </div>

      <button
        onClick={onNext}
        className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-emerald-500/10"
      >
        Set Password & Continue
      </button>
    </div>
  );
}

function KYCStep() {
  const [fileName, setFileName] = useState("");

  const handleComplete = () => {
    // Redirecting to the main dashboard / landing area
    window.location.href = "/wokopay/";
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="space-y-2">
        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-1">Issuing Country</label>
        <div className="relative">
          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
          <select className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-12 pr-5 py-4 text-white appearance-none focus:outline-none focus:border-emerald-500/50 transition-all">
            <option>Malawi</option>
            <option>Zambia</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-1">National ID / Passport</label>
        <label className="flex flex-col items-center justify-center w-full h-40 bg-slate-950 border-2 border-dashed border-slate-800 rounded-3xl cursor-pointer hover:border-emerald-500/50 transition-all group">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="text-slate-600 group-hover:text-emerald-500 mb-2 transition-colors" size={32} />
            <p className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors">
              {fileName ? fileName : "Click to upload ID photo"}
            </p>
            <p className="text-xs text-slate-700 mt-1">PNG, JPG or PDF (Max 5MB)</p>
          </div>
          <input type="file" className="hidden" onChange={(e) => setFileName(e.target.files?.[0]?.name || "")} />
        </label>
      </div>

      <button 
        onClick={handleComplete}
        className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-emerald-500/10"
      >
        Complete Verification
      </button>

      <div className="flex items-center justify-center gap-2 text-[10px] text-slate-600 uppercase tracking-widest font-bold">
        <ShieldCheck size={14} className="text-emerald-500" /> Secure AES-256 Encryption
      </div>
    </div>
  );
}