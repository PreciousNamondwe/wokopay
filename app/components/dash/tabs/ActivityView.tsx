import Transaction from "../helper/Transaction";

export default function ActivityView() {
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