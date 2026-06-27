export default function AnalyticsPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Model <span className="text-gradient-alt">Analytics & Insights</span>
        </h1>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-md">
      {/* Feature Importance */}
      <div className="glass-card rounded-xl p-md interactive-hover flex flex-col h-[400px]">
        <div className="flex justify-between items-start mb-lg">
          <div>
            <h4 className="font-headline-sm text-headline-sm">Feature Importance</h4>
            <p className="text-body-sm text-on-surface-variant">XGBoost Gain Weights</p>
          </div>
          <span className="material-symbols-outlined text-on-surface-variant">bar_chart</span>
        </div>
        <div className="flex-1 flex flex-col justify-end gap-sm">
          <div className="space-y-xs">
            <div className="flex justify-between font-label-caps text-[10px] text-on-surface-variant">
              <span>TEMPERATURE</span>
              <span>0.68</span>
            </div>
            <div className="h-8 w-full bg-surface-variant rounded-lg overflow-hidden">
              <div className="h-full bg-primary w-[68%] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-20"></div>
              </div>
            </div>
          </div>
          <div className="space-y-xs">
            <div className="flex justify-between font-label-caps text-[10px] text-on-surface-variant">
              <span>VISIBILITY</span>
              <span>0.42</span>
            </div>
            <div className="h-8 w-full bg-surface-variant rounded-lg overflow-hidden">
              <div className="h-full bg-secondary w-[42%] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-20"></div>
              </div>
            </div>
          </div>
          <div className="space-y-xs">
            <div className="flex justify-between font-label-caps text-[10px] text-on-surface-variant">
              <span>WIND CHILL</span>
              <span>0.31</span>
            </div>
            <div className="h-8 w-full bg-surface-variant rounded-lg overflow-hidden">
              <div className="h-full bg-outline-variant w-[31%]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Actual vs Predicted */}
      <div className="glass-card rounded-xl p-md interactive-hover flex flex-col h-[400px]">
        <div className="flex justify-between items-start mb-lg">
          <div>
            <h4 className="font-headline-sm text-headline-sm">Actual vs Predicted</h4>
            <p className="text-body-sm text-on-surface-variant">Alignment Confidence Scatter</p>
          </div>
          <span className="material-symbols-outlined text-on-surface-variant">show_chart</span>
        </div>
        <div className="flex-1 relative border-l border-b border-outline-variant m-md">
          {/* Simulated Scatter/Line Hybrid */}
          <div className="absolute inset-0 p-md flex items-end">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <line stroke="#464554" strokeDasharray="4" strokeWidth="0.5" x1="0" x2="100" y1="100" y2="0"></line>
              <path d="M0,100 Q20,80 40,65 T80,20 L100,0" fill="none" stroke="#c0c1ff" strokeWidth="1.5"></path>
              <circle cx="10" cy="92" fill="#44e2cd" opacity="0.6" r="1.5"></circle>
              <circle cx="25" cy="78" fill="#44e2cd" opacity="0.6" r="1.5"></circle>
              <circle cx="45" cy="55" fill="#44e2cd" opacity="0.6" r="1.5"></circle>
              <circle cx="65" cy="35" fill="#44e2cd" opacity="0.6" r="1.5"></circle>
              <circle cx="85" cy="18" fill="#44e2cd" opacity="0.6" r="1.5"></circle>
            </svg>
          </div>
          <div className="absolute bottom-[-24px] w-full flex justify-between text-[10px] text-on-surface-variant font-data-mono">
            <span>0.0</span>
            <span>Actual Severity</span>
            <span>4.0</span>
          </div>
          <div className="absolute left-[-48px] h-full flex flex-col justify-between text-[10px] text-on-surface-variant font-data-mono transform rotate-[-90deg] translate-x-[-50%]">
            <span>4.0</span>
            <span>Predicted</span>
            <span>0.0</span>
          </div>
        </div>
      </div>

      {/* Full Width Comparison */}
      <div className="md:col-span-2 glass-card rounded-xl p-md interactive-hover flex flex-col">
        <div className="flex justify-between items-start mb-xl">
          <div>
            <h4 className="font-headline-sm text-headline-sm">Class Imbalance Resolution</h4>
            <p className="text-body-sm text-on-surface-variant">Training Distribution: Original vs SMOTE-Balanced</p>
          </div>
          <div className="flex gap-md">
            <div className="flex items-center gap-xs font-label-caps text-[10px]">
              <span className="w-2 h-2 rounded-full bg-outline-variant"></span> MINOR (1-2)
            </div>
            <div className="flex items-center gap-xs font-label-caps text-[10px]">
              <span className="w-2 h-2 rounded-full bg-primary"></span> SEVERE (3-4)
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl px-xl pb-md">
          <div className="space-y-md">
            <div className="text-center font-label-caps text-label-caps text-on-surface-variant mb-xs">ORIGINAL (IMBALANCED)</div>
            <div className="flex h-32 items-end gap-md justify-center">
              <div className="w-16 bg-outline-variant rounded-t-lg h-full relative group">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-data-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">92%</span>
              </div>
              <div className="w-16 bg-primary rounded-t-lg h-[12%] relative group">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-data-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">8%</span>
              </div>
            </div>
          </div>
          <div className="space-y-md">
            <div className="text-center font-label-caps text-label-caps text-on-surface-variant mb-xs">SMOTE-BALANCED</div>
            <div className="flex h-32 items-end gap-md justify-center">
              <div className="w-16 bg-outline-variant rounded-t-lg h-[50%] relative group">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-data-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">50%</span>
              </div>
              <div className="w-16 bg-primary rounded-t-lg h-[50%] relative group">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-data-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">50%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
