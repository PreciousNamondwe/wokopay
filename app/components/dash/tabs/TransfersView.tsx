interface TransfersViewProps{
    balance:String;
}

export default function TransfersView({ balance }: TransfersViewProps) {
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