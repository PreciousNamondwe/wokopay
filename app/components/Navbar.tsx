"use client";

import React, { useState, useEffect } from "react";
import LoginModal from "./auth/LoginModal";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 h-15">
          
          {/* LOGO SECTION */}
          <div className="flex items-center">
            <a href="#hero" className="flex items-center">
              {!logoError ? (
                /* REPLACE 'logo.png' WITH YOUR ACTUAL LOGO PATH */
                <img 
                  src="/wokopay-logo.png" 
                  alt="WokoPay Logo" 
                  className="h-10 w-auto object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                /* FALLBACK TEXT LOGO */
                <div className="text-2xl font-black text-slate-900 tracking-tighter">
                  WOKO<span className="text-emerald-500">PAY</span>
                </div>
              )}
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-slate-900 font-medium">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-emerald-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="/onboarding/kyc">
              <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl shadow hover:opacity-90 transition font-bold text-sm">
                Get Started
              </button>
            </a>

            <button
              onClick={() => setShowLogin(true)}
              className="border-2 border-emerald-500 text-emerald-500 px-5 py-2 rounded-xl shadow hover:bg-emerald-50 transition font-bold text-sm"
            >
              Login
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-slate-700 hover:text-emerald-600 focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden absolute w-full bg-white border-b shadow-2xl transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}>
          <div className="flex flex-col p-6 space-y-4 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold text-slate-900 hover:text-emerald-500 py-3 border-b border-gray-50 last:border-0"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex flex-col gap-3 pt-4">
              <a href="/onboarding/kyc" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-slate-900 text-white px-5 py-4 rounded-2xl font-bold shadow-lg">
                  Get Started
                </button>
              </a>
              <button
                onClick={() => {
                  setShowLogin(true);
                  setIsMenuOpen(false);
                }}
                className="w-full border-2 border-emerald-500 text-emerald-500 px-5 py-4 rounded-2xl font-bold"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
      />
    </>
  );
}
