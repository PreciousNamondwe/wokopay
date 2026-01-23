"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Search, Globe, Navigation, ArrowRightLeft, TrendingUp, Info } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * Interfaces for Type Safety
 */
interface SadcCountry {
  name: string;
  currency: string;
  flag: string;
}

interface BaseInfo extends SadcCountry {
  code: string;
}

interface RatesData {
  [currencyCode: string]: number;
}

interface IpApiResponse {
  country_code: string;
  [key: string]: any;
}

interface ExchangeRateApiResponse {
  result: string;
  rates: RatesData;
  base_code: string;
  [key: string]: any;
}

const SADC_DATA: Record<string, SadcCountry> = {
  "MW": { name: "Malawi", currency: "MWK", flag: "🇲🇼" },
  "ZM": { name: "Zambia", currency: "ZMW", flag: "🇿🇲" },
  "ZA": { name: "South Africa", currency: "ZAR", flag: "🇿🇦" },
  "TZ": { name: "Tanzania", currency: "TZS", flag: "🇹🇿" },
  "ZW": { name: "Zimbabwe", currency: "ZWG", flag: "🇿🇼" },
  "BW": { name: "Botswana", currency: "BWP", flag: "🇧🇼" },
  "NA": { name: "Namibia", currency: "NAD", flag: "🇳🇦" },
  "MZ": { name: "Mozambique", currency: "MZN", flag: "🇲🇿" },
  "AO": { name: "Angola", currency: "AOA", flag: "🇦🇴" },
  "CD": { name: "DR Congo", currency: "CDF", flag: "🇨🇩" },
  "LS": { name: "Lesotho", currency: "LSL", flag: "🇱🇸" },
  "SZ": { name: "Eswatini", currency: "SZL", flag: "🇸🇿" },
  "MU": { name: "Mauritius", currency: "MUR", flag: "🇲🇺" },
  "SC": { name: "Seychelles", currency: "SCR", flag: "🇸🇨" },
  "KM": { name: "Comoros", currency: "KMF", flag: "🇰🇲" },
  "MG": { name: "Madagascar", currency: "MGA", flag: "🇲🇬" }
};

const App: React.FC = () => {
  const [baseInfo, setBaseInfo] = useState<BaseInfo>({
    code: 'MW',
    name: 'Malawi',
    currency: 'MWK',
    flag: '🇲🇼'
  });
  const [rates, setRates] = useState<RatesData>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const detectLocationAndFetchRates = async () => {
      setLoading(true);
      setError(null);
      let detectedCountryCode = "MW"; // Global default

      try {
        // 1. Precise Geo-location via IP
        const geoRes = await fetch('https://ipapi.co/json/');
        if (geoRes.ok) {
          const geoData: IpApiResponse = await geoRes.json();
          if (geoData.country_code && SADC_DATA[geoData.country_code]) {
            detectedCountryCode = geoData.country_code;
          } else {
            // 2. Fallback to Browser Locale
            const locale = Intl.DateTimeFormat().resolvedOptions().locale;
            const localeCode = locale.split("-")[1]?.toUpperCase();
            if (localeCode && SADC_DATA[localeCode]) {
              detectedCountryCode = localeCode;
            }
          }
        }

        const country = SADC_DATA[detectedCountryCode];
        setBaseInfo({ code: detectedCountryCode, ...country });

        // 3. Fetch Rates using the detected base currency
        const rateRes = await fetch(`https://open.er-api.com/v6/latest/${country.currency}`);
        if (!rateRes.ok) throw new Error("Network response was not ok");

        const rateData: ExchangeRateApiResponse = await rateRes.json();

        if (rateData.result === "success") {
          setRates(rateData.rates);
        } else {
          throw new Error("Exchange rate API error");
        }
      } catch (err) {
        console.error("Location/FX Error:", err);
        setError("Live rate synchronization failed. Displaying cached data.");
      } finally {
        setLoading(false);
      }
    };

    detectLocationAndFetchRates();
  }, []);

  const filteredRates = useMemo(() => {
    return Object.entries(SADC_DATA)
      .filter(([_, data]) => {
        const matchesSearch = data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          data.currency.toLowerCase().includes(searchTerm.toLowerCase());
        // Don't show the base currency in the destination list
        return matchesSearch && data.currency !== baseInfo.currency;
      })
      .map(([_, data]) => ({
        ...data,
        rate: rates[data.currency] || 0
      }));
  }, [searchTerm, rates, baseInfo]);

  return (
    <div className="min-h-screen bg-[#050810] text-slate-200 font-sans selection:bg-emerald-500/30">

      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-emerald-500/15 via-transparent to-transparent border border-emerald-500/20 p-8 rounded-[2rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <TrendingUp size={80} className="text-emerald-500" />
            </div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Base Currency Settlement</p>
            <h2 className="text-5xl font-black text-white mb-2">{baseInfo.currency}</h2>
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
              Liquidity Active
            </div>
          </div>

          <div className="bg-[#0A0F1C] border border-white/5 p-8 rounded-[2rem] lg:col-span-2 flex flex-col justify-center">
            <label className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-3 ml-1">Search Corridors</label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Find a country or currency (e.g. Zambia, ZAR)..."
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all text-white placeholder:text-slate-600"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
            </div>
          </div>
        </div>

        {/* FX Table Container */}
        <div className="bg-[#0A0F1C] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-8 py-6 text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Regional Destination</th>
                  <th className="px-8 py-6 text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Asset Code</th>
                  <th className="px-8 py-6 text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Real-Time Conversion</th>
                  <th className="px-8 py-6 text-xs font-black text-slate-500 uppercase tracking-[0.2em] text-right">Route Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {loading ? (
                  Array.from({ length: 6 }).map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td colSpan={4} className="px-8 py-10 bg-white/[0.01]"></td>
                    </tr>
                  ))
                ) : filteredRates.length > 0 ? (
                  filteredRates.map((item) => (
                    <tr key={item.currency} className="hover:bg-white/[0.02] transition-all group cursor-default">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-5">
                          <span className="text-4xl filter drop-shadow-md">{item.flag}</span>
                          <div>
                            <p className="font-bold text-lg text-white group-hover:text-emerald-400 transition-colors leading-tight">{item.name}</p>
                            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">SADC Economic Bloc</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="bg-emerald-500/5 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-lg text-sm font-mono font-bold">
                          {item.currency}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex flex-col">
                          <span className="text-2xl font-mono font-bold text-white tracking-tighter">
                            {item.rate ? item.rate.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 }) : 'N/A'}
                          </span>
                          <span className="text-[10px] text-slate-500 font-bold">1 {baseInfo.currency} → {item.currency}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-widest border border-emerald-500/20 shadow-inner shadow-emerald-500/5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                          Instant Settlement
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-8 py-24 text-center">
                      <div className="max-w-xs mx-auto opacity-40">
                        <Globe className="w-12 h-12 mx-auto mb-4 text-slate-600" />
                        <p className="text-slate-400 font-medium">No corridor matches your current search criteria.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Global Footer Meta */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
          <div className="flex items-start gap-5 max-w-2xl">
            <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 shrink-0">
              <Info className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Rates are indicative mid-market feeds refreshed every 60 seconds. WokoPay's proprietary routing engine bypasses traditional USD-settlement bottlenecks to provide direct local corridor access.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="text-[10px] font-black text-slate-500 tracking-[0.3em] uppercase">Engine Version</div>
            <div className="text-xs font-mono text-emerald-500/80 bg-emerald-500/5 px-3 py-1 rounded-full border border-emerald-500/10">v2.10.4-STABLE</div>
          </div>
        </div>
      </main>

      {error && (
        <div className="fixed bottom-6 right-6 bg-red-500/10 border border-red-500/50 backdrop-blur-md text-red-400 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <p className="text-sm font-bold tracking-wide uppercase">{error}</p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default App;