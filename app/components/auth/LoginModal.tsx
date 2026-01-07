"use client";

import { useEffect, useState } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [activeTab, setActiveTab] = useState<"individual" | "sme" | "enterprise">("individual");
  const [step, setStep] = useState<1 | 2>(1);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

    const handleComplete = () => {
    // Redirecting to the main dashboard / landing area
    window.location.href = "/wokopay/";
  };


  // Reset steps when switching tabs or closing modal
  useEffect(() => {
    setStep(1);
  }, [activeTab, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay with Backdrop Blur */}
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 md:p-10 shadow-2xl z-10 overflow-hidden">
        {/* Subtle top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-emerald-500 rounded-full blur-sm opacity-50" />

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="text-2xl font-black text-white mb-2 tracking-tighter">
            WOKO<span className="text-emerald-500">PAY</span>
          </div>
          <h2 className="text-xl font-bold text-white">
            {step === 1 ? "Welcome back" : "Verify Identity"}
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            {step === 1 ? "Select your account type to continue" : "Check your SMS for the code"}
          </p>
        </div>

        {/* Account Type Segmented Control - Only visible in Step 1 */}
        {step === 1 && (
          <div className="flex p-1 bg-slate-950 border border-slate-800 rounded-2xl mb-8">
            {(['individual', 'sme', 'enterprise'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setActiveTab(type)}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 ${
                  activeTab === type 
                  ? "bg-slate-800 text-emerald-400 shadow-lg" 
                  : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        )}

        {/* Form Fields */}
        <div className="space-y-4">
          {step === 1 ? (
            <>
              {/* Login Credentials Step */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">
                  {activeTab === 'individual' ? 'Phone Number' : 'Email Address'}
                </label>
                <input
                  type="text"
                  placeholder={activeTab === 'individual' ? "+265 / +260..." : "name@company.com"}
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                />
              </div>

              <div className="flex justify-end pt-1">
                <button className="text-xs font-medium text-slate-500 hover:text-emerald-500 transition-colors">
                  Forgot details?
                </button>
              </div>

              {/* Action Button */}
              <button 
                onClick={() => activeTab === 'individual' ? setStep(2) : undefined}
                className="w-full mt-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-emerald-500/20"
              >
                {activeTab === 'individual' 
                  ? 'Continue' 
                  : activeTab === 'enterprise' ? 'Enterprise SSO' : 'Login to Dashboard'}
              </button>
            </>
          ) : (
            <>
              {/* OTP Step - Individual Only */}
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">
                  Enter 6-Digit OTP
                </label>
                <input
                  type="text"
                  maxLength={6}
                  placeholder="000000"
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 text-white text-center text-2xl tracking-[0.5em] focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                />
                
                <button 
                  onClick={handleComplete}
                  className="w-full mt-8 bg-emerald-500 hover:bg-emerald-400 text-slate-950 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-emerald-500/20"
                >
                  Verify & Login
                </button>

                <button 
                  onClick={() => setStep(1)}
                  className="w-full mt-4 text-xs font-bold text-slate-500 hover:text-emerald-500 uppercase tracking-widest transition-colors"
                >
                  Back to credentials
                </button>
              </div>
            </>
          )}
        </div>

        {/* Footer Link */}
        <div className="mt-8 text-center text-sm text-slate-500">
          New to WokoPay?{" "}
          <button className="text-emerald-500 font-bold hover:text-emerald-400 transition-colors">
            Create Account
          </button>
        </div>

        {/* Close button icon */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-600 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}