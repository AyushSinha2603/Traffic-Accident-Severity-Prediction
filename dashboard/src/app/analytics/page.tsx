export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-end mb-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#8b909a] text-[13px] font-medium">Feature importance & distribution</span>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Analytics & Insights
          </h1>
        </div>
        <div className="flex gap-2">
          <button className="pill-btn !py-1.5 !px-3 !bg-[#161920]">
            <span className="material-symbols-outlined text-[16px]">sync</span> Refresh
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Feature Importance */}
        <div className="glass-card p-6 flex flex-col justify-between h-[360px] interactive-hover">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-white font-semibold text-[15px] mb-1">Feature Importance</h4>
              <p className="text-[#8b909a] text-[12px]">XGBoost Gain Weights (Relative)</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#1e222b] flex items-center justify-center cursor-pointer hover:bg-[#2a2e39] transition-colors">
              <span className="material-symbols-outlined text-[#8b909a] text-[16px]">more_horiz</span>
            </div>
          </div>

          <div className="space-y-5 flex-1">
            {[
              { label: 'Temperature', val: '0.68', pct: '68%', colorClass: 'bg-[#8b5cf6]', textColor: 'text-[#8b5cf6]' },
              { label: 'Visibility', val: '0.42', pct: '42%', colorClass: 'bg-[#3b82f6]', textColor: 'text-[#3b82f6]' },
              { label: 'Wind Chill', val: '0.31', pct: '31%', colorClass: 'bg-[#f59e0b]', textColor: 'text-[#f59e0b]' },
              { label: 'Precipitation', val: '0.22', pct: '22%', colorClass: 'bg-[#64748b]', textColor: 'text-[#94a3b8]' },
              { label: 'Humidity', val: '0.18', pct: '18%', colorClass: 'bg-[#475569]', textColor: 'text-[#64748b]' },
            ].map((row) => (
              <div key={row.label}>
                <div className="flex justify-between items-center text-[12px] mb-1.5">
                  <span className="text-[#8b909a] font-medium">{row.label}</span>
                  <span className={`font-data-mono font-bold ${row.textColor}`}>{row.val}</span>
                </div>
                <div className="h-1.5 w-full bg-[#1e222b] rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${row.colorClass} transition-all duration-500`} style={{ width: row.pct }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actual vs Predicted */}
        <div className="glass-card p-6 flex flex-col justify-between h-[360px] interactive-hover">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-white font-semibold text-[15px] mb-1">Prediction Alignment</h4>
              <p className="text-[#8b909a] text-[12px]">Actual vs Predicted Severity</p>
            </div>
            <div className="pill-btn !py-1 !px-2.5 !text-[11px] !bg-[#8b5cf6]/20 !text-[#8b5cf6] !border-none">
              Confidence: 89%
            </div>
          </div>

          <div className="relative flex-1 ml-6 mb-4 mt-2">
            <div className="absolute inset-0 border-l border-b border-[#2a2e39] rounded-bl-sm">
              <div className="absolute top-1/4 left-0 right-0 h-px bg-[#2a2e39]/50"></div>
              <div className="absolute top-1/2 left-0 right-0 h-px bg-[#2a2e39]/50"></div>
              <div className="absolute top-3/4 left-0 right-0 h-px bg-[#2a2e39]/50"></div>
              <div className="absolute inset-0 p-1">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <line stroke="#475569" strokeDasharray="2 4" strokeWidth="0.5" x1="0" x2="100" y1="100" y2="0"></line>
                  <path d="M0,98 Q15,85 30,70 T60,35 T100,2" fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round"></path>
                  <path d="M0,98 Q15,85 30,70 T60,35 T100,2 L100,100 L0,100 Z" fill="url(#areaG)" opacity="0.3"></path>
                  <circle cx="8" cy="92" fill="#fff" r="2.5" stroke="#8b5cf6" strokeWidth="1.5"/>
                  <circle cx="22" cy="80" fill="#fff" r="2.5" stroke="#8b5cf6" strokeWidth="1.5"/>
                  <circle cx="38" cy="62" fill="#fff" r="2.5" stroke="#8b5cf6" strokeWidth="1.5"/>
                  <circle cx="55" cy="42" fill="#fff" r="2.5" stroke="#8b5cf6" strokeWidth="1.5"/>
                  <circle cx="72" cy="26" fill="#fff" r="2.5" stroke="#8b5cf6" strokeWidth="1.5"/>
                  <circle cx="88" cy="12" fill="#fff" r="2.5" stroke="#8b5cf6" strokeWidth="1.5"/>
                  <defs>
                    <linearGradient id="areaG" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5"/>
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="absolute -left-6 top-0 bottom-0 flex flex-col justify-between text-[9px] text-[#8b909a] font-data-mono">
              <span>4.0</span><span>2.0</span><span>0.0</span>
            </div>
            <div className="absolute -bottom-5 left-0 right-0 flex justify-between text-[9px] text-[#8b909a] font-data-mono">
              <span>0.0</span><span>Actual Severity</span><span>4.0</span>
            </div>
          </div>
        </div>

        {/* Class Imbalance — Full Width */}
        <div className="lg:col-span-2 glass-card p-6 interactive-hover mt-2">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3">
            <div>
              <h4 className="text-white font-semibold text-[15px] mb-1">Class Imbalance Resolution</h4>
              <p className="text-[#8b909a] text-[12px]">Training Distribution: Original vs SMOTE-Balanced</p>
            </div>
            <div className="flex gap-4 bg-[#1e222b] px-3 py-1.5 rounded-full border border-[#2a2e39]">
              <div className="flex items-center gap-1.5 text-[11px] text-[#8b909a] font-medium">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#3b82f6]"></span> Minor (1-2)
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-[#8b909a] font-medium">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#8b5cf6]"></span> Severe (3-4)
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-[#0d0f14] rounded-xl p-5 border border-[#1e222b]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold text-[#8b909a] uppercase tracking-wider">Original Base</span>
                <span className="text-[10px] text-[#ef4444] bg-[#ef4444]/10 px-2 py-0.5 rounded-sm font-semibold">Imbalanced</span>
              </div>
              <div className="flex h-32 items-end gap-6 justify-center">
                <div className="flex flex-col items-center gap-1.5">
                  <span className="font-data-mono text-[13px] font-bold text-[#3b82f6]">92%</span>
                  <div className="w-12 bg-[#3b82f6] rounded-t-sm h-32 opacity-90 transition-all duration-300 hover:opacity-100"></div>
                  <span className="text-[10px] text-[#8b909a] font-medium">Minor</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <span className="font-data-mono text-[13px] font-bold text-[#8b5cf6]">8%</span>
                  <div className="w-12 bg-[#8b5cf6] rounded-t-sm h-[13%] opacity-90 transition-all duration-300 hover:opacity-100"></div>
                  <span className="text-[10px] text-[#8b909a] font-medium">Severe</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0d0f14] rounded-xl p-5 border border-[#8b5cf6]/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8b5cf6]/5 blur-3xl rounded-full"></div>
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">SMOTE Optimized</span>
                <span className="text-[10px] text-[#22c55e] bg-[#22c55e]/10 px-2 py-0.5 rounded-sm font-semibold">Balanced</span>
              </div>
              <div className="flex h-32 items-end gap-6 justify-center relative z-10">
                <div className="flex flex-col items-center gap-1.5">
                  <span className="font-data-mono text-[13px] font-bold text-[#3b82f6]">50%</span>
                  <div className="w-12 bg-[#3b82f6] rounded-t-sm h-[50%] opacity-90 transition-all duration-300 hover:opacity-100"></div>
                  <span className="text-[10px] text-[#8b909a] font-medium">Minor</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <span className="font-data-mono text-[13px] font-bold text-[#8b5cf6]">50%</span>
                  <div className="w-12 bg-[#8b5cf6] rounded-t-sm h-[50%] opacity-90 transition-all duration-300 hover:opacity-100"></div>
                  <span className="text-[10px] text-[#8b909a] font-medium">Severe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
