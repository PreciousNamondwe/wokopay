export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 pt-20 pb-10 px-6 border-t border-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="text-2xl font-black text-white mb-6 tracking-tighter">
              WOKO<span className="text-emerald-500">PAY</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-8">
              Revolutionizing cross-border liquidity across African countries. 
              Simple, local, and built for the future of African commerce.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Facebook'].map((social) => (
                <div key={social} className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-emerald-500 transition-colors cursor-pointer">
                  <div className="w-1 h-1 bg-slate-700 rounded-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h5 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Product</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="hover:text-emerald-500 transition-colors cursor-pointer">Send Money</li>
              <li className="hover:text-emerald-500 transition-colors cursor-pointer">Merchant API</li>
              <li className="hover:text-emerald-500 transition-colors cursor-pointer">FX Rates</li>
              <li className="hover:text-emerald-500 transition-colors cursor-pointer">Business App</li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h5 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Company</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="hover:text-emerald-500 transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-emerald-500 transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-emerald-500 transition-colors cursor-pointer">Legal</li>
              <li className="hover:text-emerald-500 transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h5 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Legal</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="hover:text-emerald-500 transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-emerald-500 transition-colors cursor-pointer">Terms of Service</li>
              <li className="hover:text-emerald-500 transition-colors cursor-pointer">KYC/AML</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-xs">
            © {currentYear} WokoPay. Licensed as a PSP in relevant jurisdictions.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-600">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Systems Operational
            </span>
            <span>wokopay v1.4.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}