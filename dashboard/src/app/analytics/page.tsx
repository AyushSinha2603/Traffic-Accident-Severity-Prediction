export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-on-surface mb-1">Analytics</h1>
        <p className="text-on-surface-variant text-sm">Feature importance, prediction alignment, and class balancing impact.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Feature Importance */}
        <div className="glass-card p-5 interactive-hover">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-base">bar_chart</span>
            </div>
            <div>
              <h4 className="text-on-surface font-semibold text-sm">Feature Importance</h4>
              <p className="text-on-surface-variant text-xs">XGBoost Gain Weights</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-[11px] text-on-surface-variant mb-1.5 font-medium">
                <span>Temperature</span>
                <span className="text-primary font-data-mono font-semibold">0.68</span>
              </div>
              <div className="h-7 w-full bg-white/[0.04] rounded-md overflow-hidden">
                <div className="h-full w-[68%] accent-bar-primary rounded-md"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[11px] text-on-surface-variant mb-1.5 font-medium">
                <span>Visibility</span>
                <span className="text-secondary font-data-mono font-semibold">0.42</span>
              </div>
              <div className="h-7 w-full bg-white/[0.04] rounded-md overflow-hidden">
                <div className="h-full w-[42%] accent-bar-secondary rounded-md"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[11px] text-on-surface-variant mb-1.5 font-medium">
                <span>Wind Chill</span>
                <span className="text-tertiary font-data-mono font-semibold">0.31</span>
              </div>
              <div className="h-7 w-full bg-white/[0.04] rounded-md overflow-hidden">
                <div className="h-full w-[31%] accent-bar-tertiary rounded-md"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[11px] text-on-surface-variant mb-1.5 font-medium">
                <span>Precipitation</span>
                <span className="text-on-surface-variant font-data-mono font-semibold">0.22</span>
              </div>
              <div className="h-7 w-full bg-white/[0.04] rounded-md overflow-hidden">
                <div className="h-full w-[22%] bg-outline-variant/80 rounded-md"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[11px] text-on-surface-variant mb-1.5 font-medium">
                <span>Humidity</span>
                <span className="text-on-surface-variant font-data-mono font-semibold">0.18</span>
              </div>
              <div className="h-7 w-full bg-white/[0.04] rounded-md overflow-hidden">
                <div className="h-full w-[18%] bg-outline-variant/60 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Actual vs Predicted */}
        <div className="glass-card p-5 interactive-hover">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-base">show_chart</span>
            </div>
            <div>
              <h4 className="text-on-surface font-semibold text-sm">Actual vs Predicted</h4>
              <p className="text-on-surface-variant text-xs">Alignment Confidence</p>
            </div>
          </div>

          <div className="relative h-[260px] ml-8 mb-6">
            <div className="absolute inset-0 border-l-2 border-b-2 border-outline-variant/40 rounded-bl">
              {/* Grid */}
              <div className="absolute top-1/4 left-0 right-0 h-px bg-white/[0.03]"></div>
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/[0.03]"></div>
              <div className="absolute top-3/4 left-0 right-0 h-px bg-white/[0.03]"></div>
              <div className="absolute inset-0 p-2">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <line stroke="#334155" strokeDasharray="4 4" strokeWidth="0.6" x1="0" x2="100" y1="100" y2="0"></line>
                  <path d="M0,98 Q15,85 30,70 T60,35 T100,2" fill="none" stroke="url(#lineGrad2)" strokeWidth="2" strokeLinecap="round"></path>
                  <path d="M0,98 Q15,85 30,70 T60,35 T100,2 L100,100 L0,100 Z" fill="url(#areaGrad2)" opacity="0.1"></path>
                  <circle cx="8" cy="92" fill="#818cf8" r="3.5" opacity="0.8"></circle>
                  <circle cx="22" cy="80" fill="#818cf8" r="3.5" opacity="0.8"></circle>
                  <circle cx="38" cy="62" fill="#818cf8" r="3.5" opacity="0.8"></circle>
                  <circle cx="55" cy="42" fill="#2dd4bf" r="3.5" opacity="0.8"></circle>
                  <circle cx="72" cy="26" fill="#2dd4bf" r="3.5" opacity="0.8"></circle>
                  <circle cx="88" cy="12" fill="#2dd4bf" r="3.5" opacity="0.8"></circle>
                  <defs>
                    <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#818cf8"/>
                      <stop offset="100%" stopColor="#2dd4bf"/>
                    </linearGradient>
                    <linearGradient id="areaGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#818cf8" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#818cf8" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="absolute -left-7 top-0 bottom-0 flex flex-col justify-between text-[10px] text-on-surface-variant/60 font-data-mono">
              <span>4.0</span>
              <span>2.0</span>
              <span>0.0</span>
            </div>
            <div className="absolute -bottom-5 left-0 right-0 flex justify-between text-[10px] text-on-surface-variant/60 font-data-mono">
              <span>0.0</span>
              <span>Actual Severity</span>
              <span>4.0</span>
            </div>
          </div>
        </div>

        {/* Class Imbalance — Full Width */}
        <div className="lg:col-span-2 glass-card p-5 interactive-hover">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-tertiary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary text-base">compare_arrows</span>
              </div>
              <div>
                <h4 className="text-on-surface font-semibold text-sm">Class Imbalance Resolution</h4>
                <p className="text-on-surface-variant text-xs">Original vs SMOTE-Balanced distribution</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                <span className="w-2.5 h-2.5 rounded accent-bar-tertiary opacity-60"></span> Minor (1-2)
              </div>
              <div className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                <span className="w-2.5 h-2.5 rounded accent-bar-primary"></span> Severe (3-4)
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/[0.02] rounded-lg p-5 border border-white/[0.04]">
              <div className="text-center text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">Original (Imbalanced)</div>
              <div className="flex h-36 items-end gap-5 justify-center">
                <div className="flex flex-col items-center gap-1.5">
                  <span className="font-data-mono text-xs text-tertiary font-bold">92%</span>
                  <div className="w-16 accent-bar-tertiary rounded-t-lg h-36 opacity-60"></div>
                  <span className="text-[10px] text-on-surface-variant">Minor</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <span className="font-data-mono text-xs text-primary font-bold">8%</span>
                  <div className="w-16 accent-bar-primary rounded-t-lg h-[13%]"></div>
                  <span className="text-[10px] text-on-surface-variant">Severe</span>
                </div>
              </div>
            </div>
            <div className="bg-white/[0.02] rounded-lg p-5 border border-white/[0.04]">
              <div className="text-center text-[10px] font-bold text-secondary uppercase tracking-widest mb-4">SMOTE-Balanced ✓</div>
              <div className="flex h-36 items-end gap-5 justify-center">
                <div className="flex flex-col items-center gap-1.5">
                  <span className="font-data-mono text-xs text-tertiary font-bold">50%</span>
                  <div className="w-16 accent-bar-tertiary rounded-t-lg h-[50%] opacity-60"></div>
                  <span className="text-[10px] text-on-surface-variant">Minor</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <span className="font-data-mono text-xs text-primary font-bold">50%</span>
                  <div className="w-16 accent-bar-primary rounded-t-lg h-[50%]"></div>
                  <span className="text-[10px] text-on-surface-variant">Severe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
