export default function AnalyticsPage() {
  return (
    <>
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold mb-4">
          <span className="material-symbols-outlined text-sm">analytics</span>
          MODEL PERFORMANCE
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight text-on-surface">
          Model <span className="text-gradient-alt">Analytics & Insights</span>
        </h1>
        <p className="text-on-surface-variant text-base md:text-lg max-w-2xl leading-relaxed">
          Deep dive into feature importance, prediction alignment, and the impact of class balancing techniques.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Feature Importance */}
        <div className="glass-card p-6 interactive-hover flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary text-lg">bar_chart</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">Feature Importance</h4>
                <p className="text-body-sm text-on-surface-variant">XGBoost Gain Weights</p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-end gap-5">
            {/* Temperature */}
            <div>
              <div className="flex justify-between font-label-caps text-[11px] text-on-surface-variant mb-2">
                <span>TEMPERATURE</span>
                <span className="text-primary font-data-mono">0.68</span>
              </div>
              <div className="h-9 w-full bg-surface-variant/50 rounded-lg overflow-hidden relative">
                <div className="h-full w-[68%] accent-bar-primary rounded-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10"></div>
                </div>
              </div>
            </div>
            {/* Visibility */}
            <div>
              <div className="flex justify-between font-label-caps text-[11px] text-on-surface-variant mb-2">
                <span>VISIBILITY</span>
                <span className="text-secondary font-data-mono">0.42</span>
              </div>
              <div className="h-9 w-full bg-surface-variant/50 rounded-lg overflow-hidden relative">
                <div className="h-full w-[42%] accent-bar-secondary rounded-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10"></div>
                </div>
              </div>
            </div>
            {/* Wind Chill */}
            <div>
              <div className="flex justify-between font-label-caps text-[11px] text-on-surface-variant mb-2">
                <span>WIND CHILL</span>
                <span className="text-tertiary font-data-mono">0.31</span>
              </div>
              <div className="h-9 w-full bg-surface-variant/50 rounded-lg overflow-hidden relative">
                <div className="h-full w-[31%] accent-bar-tertiary rounded-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actual vs Predicted */}
        <div className="glass-card p-6 interactive-hover flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                <span className="material-symbols-outlined text-secondary text-lg">show_chart</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">Actual vs Predicted</h4>
                <p className="text-body-sm text-on-surface-variant">Alignment Confidence</p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative ml-12 mb-8">
            {/* Chart area */}
            <div className="absolute inset-0 border-l-2 border-b-2 border-outline-variant/60 rounded-bl-lg">
              {/* Grid lines */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 right-0 h-px bg-outline-variant/20"></div>
                <div className="absolute top-1/4 left-0 right-0 h-px bg-outline-variant/20"></div>
                <div className="absolute top-1/2 left-0 right-0 h-px bg-outline-variant/20"></div>
                <div className="absolute top-3/4 left-0 right-0 h-px bg-outline-variant/20"></div>
              </div>
              <div className="absolute inset-0 p-2">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  {/* Diagonal reference */}
                  <line stroke="#334155" strokeDasharray="4" strokeWidth="0.8" x1="0" x2="100" y1="100" y2="0"></line>
                  {/* Prediction curve */}
                  <path d="M0,98 Q15,85 30,70 T60,35 T100,2" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round"></path>
                  {/* Area fill */}
                  <path d="M0,98 Q15,85 30,70 T60,35 T100,2 L100,100 L0,100 Z" fill="url(#areaGrad)" opacity="0.15"></path>
                  {/* Data points */}
                  <circle cx="10" cy="90" fill="#818cf8" r="3"><animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite"/></circle>
                  <circle cx="25" cy="78" fill="#818cf8" r="3"><animate attributeName="opacity" values="0.4;1;0.4" dur="3s" begin="0.5s" repeatCount="indefinite"/></circle>
                  <circle cx="42" cy="58" fill="#2dd4bf" r="3"><animate attributeName="opacity" values="0.4;1;0.4" dur="3s" begin="1s" repeatCount="indefinite"/></circle>
                  <circle cx="62" cy="35" fill="#2dd4bf" r="3"><animate attributeName="opacity" values="0.4;1;0.4" dur="3s" begin="1.5s" repeatCount="indefinite"/></circle>
                  <circle cx="82" cy="15" fill="#2dd4bf" r="3"><animate attributeName="opacity" values="0.4;1;0.4" dur="3s" begin="2s" repeatCount="indefinite"/></circle>
                  <circle cx="95" cy="5" fill="#f59e0b" r="3"><animate attributeName="opacity" values="0.4;1;0.4" dur="3s" begin="2.5s" repeatCount="indefinite"/></circle>
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#818cf8"/>
                      <stop offset="100%" stopColor="#2dd4bf"/>
                    </linearGradient>
                    <linearGradient id="areaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#818cf8"/>
                      <stop offset="100%" stopColor="#2dd4bf"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            {/* Y-axis labels */}
            <div className="absolute -left-10 top-0 bottom-0 flex flex-col justify-between text-[10px] text-on-surface-variant font-data-mono">
              <span>4.0</span>
              <span>2.0</span>
              <span>0.0</span>
            </div>
            {/* X-axis labels */}
            <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[10px] text-on-surface-variant font-data-mono">
              <span>0.0</span>
              <span>Actual</span>
              <span>4.0</span>
            </div>
          </div>
        </div>

        {/* Class Imbalance Resolution - Full Width */}
        <div className="md:col-span-2 glass-card p-6 interactive-hover">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-tertiary/10 flex items-center justify-center border border-tertiary/20">
                <span className="material-symbols-outlined text-tertiary text-lg">compare_arrows</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">Class Imbalance Resolution</h4>
                <p className="text-body-sm text-on-surface-variant">Training Distribution: Original vs SMOTE-Balanced</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-xs font-medium">
                <span className="w-3 h-3 rounded accent-bar-tertiary opacity-60"></span>
                <span className="text-on-surface-variant">Minor (1-2)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium">
                <span className="w-3 h-3 rounded accent-bar-primary opacity-80"></span>
                <span className="text-on-surface-variant">Severe (3-4)</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Original */}
            <div className="bg-surface-variant/20 rounded-xl p-6 border border-outline-variant/30">
              <div className="text-center font-label-caps text-label-caps text-on-surface-variant mb-4 tracking-widest">ORIGINAL (IMBALANCED)</div>
              <div className="flex h-40 items-end gap-6 justify-center">
                <div className="flex flex-col items-center gap-2">
                  <span className="font-data-mono text-sm text-tertiary font-bold">92%</span>
                  <div className="w-20 accent-bar-tertiary rounded-t-xl h-40 relative opacity-70 group hover:opacity-90 transition-opacity">
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 rounded-t-xl"></div>
                  </div>
                  <span className="text-[10px] text-on-surface-variant font-medium">Minor</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="font-data-mono text-sm text-primary font-bold">8%</span>
                  <div className="w-20 accent-bar-primary rounded-t-xl h-[13%] relative opacity-80 group hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 rounded-t-xl"></div>
                  </div>
                  <span className="text-[10px] text-on-surface-variant font-medium">Severe</span>
                </div>
              </div>
            </div>

            {/* SMOTE-Balanced */}
            <div className="bg-surface-variant/20 rounded-xl p-6 border border-outline-variant/30">
              <div className="text-center font-label-caps text-label-caps text-secondary mb-4 tracking-widest">SMOTE-BALANCED ✓</div>
              <div className="flex h-40 items-end gap-6 justify-center">
                <div className="flex flex-col items-center gap-2">
                  <span className="font-data-mono text-sm text-tertiary font-bold">50%</span>
                  <div className="w-20 accent-bar-tertiary rounded-t-xl h-[50%] relative opacity-70 group hover:opacity-90 transition-opacity">
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 rounded-t-xl"></div>
                  </div>
                  <span className="text-[10px] text-on-surface-variant font-medium">Minor</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="font-data-mono text-sm text-primary font-bold">50%</span>
                  <div className="w-20 accent-bar-primary rounded-t-xl h-[50%] relative opacity-80 group hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 rounded-t-xl"></div>
                  </div>
                  <span className="text-[10px] text-on-surface-variant font-medium">Severe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
