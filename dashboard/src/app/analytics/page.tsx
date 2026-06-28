export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="pb-2 border-b border-white/[0.06]">
        <h1 className="text-3xl font-bold text-on-surface tracking-tight mb-1">Analytics</h1>
        <p className="text-on-surface-variant text-sm">Feature importance, prediction alignment, and class balancing impact.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Feature Importance */}
        <div className="glass-card p-6 interactive-hover group">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-lg">bar_chart</span>
            </div>
            <div>
              <h4 className="text-on-surface font-bold text-base">Feature Importance</h4>
              <p className="text-on-surface-variant text-xs">XGBoost Gain Weights</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { label: 'Temperature', val: '0.68', pct: '68%', colorClass: 'accent-bar-primary', textColor: 'text-primary' },
              { label: 'Visibility', val: '0.42', pct: '42%', colorClass: 'accent-bar-secondary', textColor: 'text-secondary' },
              { label: 'Wind Chill', val: '0.31', pct: '31%', colorClass: 'accent-bar-tertiary', textColor: 'text-tertiary' },
              { label: 'Precipitation', val: '0.22', pct: '22%', colorClass: 'bg-slate-500', textColor: 'text-slate-400' },
              { label: 'Humidity', val: '0.18', pct: '18%', colorClass: 'bg-slate-600', textColor: 'text-slate-500' },
            ].map((row) => (
              <div key={row.label}>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-on-surface/80 font-semibold">{row.label}</span>
                  <span className={`font-data-mono font-bold ${row.textColor}`}>{row.val}</span>
                </div>
                <div className="h-7 w-full bg-white/[0.05] rounded-lg overflow-hidden">
                  <div className={`h-full rounded-lg ${row.colorClass} transition-all duration-500`} style={{ width: row.pct }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actual vs Predicted */}
        <div className="glass-card p-6 interactive-hover group">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-secondary/15 border border-secondary/25 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-lg">show_chart</span>
            </div>
            <div>
              <h4 className="text-on-surface font-bold text-base">Actual vs Predicted</h4>
              <p className="text-on-surface-variant text-xs">Alignment Confidence</p>
            </div>
          </div>

          <div className="relative h-[240px] ml-8 mb-6">
            <div className="absolute inset-0 border-l-2 border-b-2 border-white/[0.12] rounded-bl">
              <div className="absolute top-1/4 left-0 right-0 h-px bg-white/[0.04]"></div>
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/[0.04]"></div>
              <div className="absolute top-3/4 left-0 right-0 h-px bg-white/[0.04]"></div>
              <div className="absolute inset-0 p-2">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <line stroke="#334155" strokeDasharray="4 4" strokeWidth="0.6" x1="0" x2="100" y1="100" y2="0"></line>
                  <path d="M0,98 Q15,85 30,70 T60,35 T100,2" fill="none" stroke="url(#lineG)" strokeWidth="2.5" strokeLinecap="round"></path>
                  <path d="M0,98 Q15,85 30,70 T60,35 T100,2 L100,100 L0,100 Z" fill="url(#areaG)" opacity="0.12"></path>
                  <circle cx="8" cy="92" fill="#a5b4fc" r="4" opacity="0.9"/>
                  <circle cx="22" cy="80" fill="#818cf8" r="4" opacity="0.9"/>
                  <circle cx="38" cy="62" fill="#818cf8" r="4" opacity="0.9"/>
                  <circle cx="55" cy="42" fill="#2dd4bf" r="4" opacity="0.9"/>
                  <circle cx="72" cy="26" fill="#2dd4bf" r="4" opacity="0.9"/>
                  <circle cx="88" cy="12" fill="#14b8a6" r="4" opacity="0.9"/>
                  <defs>
                    <linearGradient id="lineG" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#818cf8"/>
                      <stop offset="100%" stopColor="#2dd4bf"/>
                    </linearGradient>
                    <linearGradient id="areaG" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#818cf8" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="absolute -left-7 top-0 bottom-0 flex flex-col justify-between text-[10px] text-on-surface-variant/60 font-data-mono">
              <span>4.0</span><span>2.0</span><span>0.0</span>
            </div>
            <div className="absolute -bottom-5 left-0 right-0 flex justify-between text-[10px] text-on-surface-variant/60 font-data-mono">
              <span>0.0</span><span>Actual Severity</span><span>4.0</span>
            </div>
          </div>
        </div>

        {/* Class Imbalance — Full Width */}
        <div className="lg:col-span-2 glass-card p-6 interactive-hover">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-tertiary/15 border border-tertiary/25 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary text-lg">compare_arrows</span>
              </div>
              <div>
                <h4 className="text-on-surface font-bold text-base">Class Imbalance Resolution</h4>
                <p className="text-on-surface-variant text-xs">Original vs SMOTE-Balanced distribution</p>
              </div>
            </div>
            <div className="flex gap-4 text-xs">
              <div className="flex items-center gap-1.5 text-on-surface-variant">
                <span className="w-3 h-3 rounded accent-bar-tertiary opacity-70"></span> Minor (1-2)
              </div>
              <div className="flex items-center gap-1.5 text-on-surface-variant">
                <span className="w-3 h-3 rounded accent-bar-primary"></span> Severe (3-4)
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/[0.03] rounded-xl p-5 border border-white/[0.06]">
              <div className="text-center text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">Original (Imbalanced)</div>
              <div className="flex h-36 items-end gap-6 justify-center">
                <div className="flex flex-col items-center gap-1.5">
                  <span className="font-data-mono text-sm font-bold text-tertiary">92%</span>
                  <div className="w-16 accent-bar-tertiary rounded-t-lg h-36 opacity-75"></div>
                  <span className="text-[10px] text-on-surface-variant font-medium">Minor</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <span className="font-data-mono text-sm font-bold text-primary">8%</span>
                  <div className="w-16 accent-bar-primary rounded-t-lg h-[13%]"></div>
                  <span className="text-[10px] text-on-surface-variant font-medium">Severe</span>
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] rounded-xl p-5 border border-secondary/20">
              <div className="text-center text-[10px] font-bold text-secondary uppercase tracking-widest mb-4">SMOTE-Balanced ✓</div>
              <div className="flex h-36 items-end gap-6 justify-center">
                <div className="flex flex-col items-center gap-1.5">
                  <span className="font-data-mono text-sm font-bold text-tertiary">50%</span>
                  <div className="w-16 accent-bar-tertiary rounded-t-lg h-[50%] opacity-75"></div>
                  <span className="text-[10px] text-on-surface-variant font-medium">Minor</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <span className="font-data-mono text-sm font-bold text-primary">50%</span>
                  <div className="w-16 accent-bar-primary rounded-t-lg h-[50%]"></div>
                  <span className="text-[10px] text-on-surface-variant font-medium">Severe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
