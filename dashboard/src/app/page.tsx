export default function OverviewPage() {
  return (
    <>
      {/* Hero */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          REAL-TIME DASHBOARD
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight text-on-surface">
          Traffic Accident{' '}
          <span className="text-gradient">Severity Prediction</span>
        </h1>
        <p className="text-on-surface-variant text-base md:text-lg max-w-2xl leading-relaxed">
          Real-time monitoring and analysis of road incidents powered by an optimized XGBoost model to tackle severe class imbalances.
        </p>
      </div>

      {/* KPI Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Total Records */}
        <div className="glass-card interactive-hover p-6 flex flex-col justify-between relative overflow-hidden group min-h-[160px]">
          <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-primary/8 blur-2xl group-hover:bg-primary/15 transition-all duration-500"></div>
          <div className="flex items-center justify-between mb-4 relative z-10">
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest">TOTAL RECORDS</span>
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <span className="material-symbols-outlined text-primary text-lg">database</span>
            </div>
          </div>
          <div className="relative z-10">
            <div className="font-data-mono text-4xl font-bold text-on-surface mb-1">1.2<span className="text-primary">M</span></div>
            <div className="flex items-center gap-1.5 text-secondary text-xs font-medium">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              +12% vs last batch
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 accent-bar-primary opacity-60"></div>
        </div>

        {/* Baseline Accuracy */}
        <div className="glass-card interactive-hover p-6 flex flex-col justify-between relative overflow-hidden group min-h-[160px]">
          <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-secondary/8 blur-2xl group-hover:bg-secondary/15 transition-all duration-500"></div>
          <div className="flex items-center justify-between mb-4 relative z-10">
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest">BASELINE ACCURACY</span>
            <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
              <span className="material-symbols-outlined text-secondary text-lg">verified</span>
            </div>
          </div>
          <div className="relative z-10">
            <div className="font-data-mono text-4xl font-bold text-on-surface mb-1">87<span className="text-secondary">%</span></div>
            <div className="flex items-center gap-1.5 text-on-surface-variant text-xs font-medium">
              <span className="material-symbols-outlined text-sm">analytics</span>
              Validated on 240k samples
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 accent-bar-secondary opacity-60"></div>
        </div>

        {/* Balanced F1 */}
        <div className="glass-card interactive-hover p-6 flex flex-col justify-between relative overflow-hidden group min-h-[160px]">
          <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-tertiary/8 blur-2xl group-hover:bg-tertiary/15 transition-all duration-500"></div>
          <div className="flex items-center justify-between mb-4 relative z-10">
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest">BALANCED F1-SCORE</span>
            <div className="w-9 h-9 rounded-xl bg-tertiary/10 flex items-center justify-center border border-tertiary/20">
              <span className="material-symbols-outlined text-tertiary text-lg">auto_graph</span>
            </div>
          </div>
          <div className="relative z-10">
            <div className="font-data-mono text-4xl font-bold text-on-surface mb-1">0.<span className="text-tertiary">92</span></div>
            <div className="flex items-center gap-1.5 text-tertiary text-xs font-medium">
              <span className="material-symbols-outlined text-sm">balance</span>
              After SMOTE optimization
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 accent-bar-tertiary opacity-60"></div>
        </div>
      </section>

      {/* Insights Panel */}
      <section className="glass-card p-6 relative overflow-hidden mt-2">
        <div className="absolute -right-16 -top-16 w-48 h-48 bg-secondary/10 rounded-full blur-[60px] pointer-events-none"></div>
        <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-primary/10 rounded-full blur-[60px] pointer-events-none"></div>

        <div className="flex items-center gap-3 mb-4 relative z-10">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
            <span className="material-symbols-outlined text-secondary">lightbulb</span>
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Model Resilience Analysis</h3>
            <p className="text-on-surface-variant text-xs">Key findings from the optimization pipeline</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
          <div className="bg-surface-variant/30 rounded-xl p-4 border border-outline-variant/50">
            <div className="text-on-surface-variant text-xs font-medium mb-2">THE PROBLEM</div>
            <p className="text-on-surface text-sm leading-relaxed">
              Raw accuracy is <span className="text-tertiary font-semibold">deceptive</span> in imbalanced sets — the baseline model completely fails on minority classes.
            </p>
          </div>
          <div className="bg-surface-variant/30 rounded-xl p-4 border border-outline-variant/50">
            <div className="text-on-surface-variant text-xs font-medium mb-2">THE SOLUTION</div>
            <p className="text-on-surface text-sm leading-relaxed">
              <span className="text-primary font-semibold">SMOTE</span> + class-weighted XGBoost shifted focus from majority-class frequency to minority-class patterns.
            </p>
          </div>
          <div className="bg-surface-variant/30 rounded-xl p-4 border border-outline-variant/50">
            <div className="text-on-surface-variant text-xs font-medium mb-2">THE RESULT</div>
            <p className="text-on-surface text-sm leading-relaxed">
              Successfully identifying <span className="text-secondary font-semibold">94% of severe accidents</span> while maintaining an F1-score of <span className="text-tertiary font-semibold">0.92</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
