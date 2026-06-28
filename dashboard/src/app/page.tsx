export default function OverviewPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="pb-2 border-b border-white/[0.06]">
        <h1 className="text-3xl font-bold text-on-surface tracking-tight mb-1">
          Overview
        </h1>
        <p className="text-on-surface-variant text-sm">Real-time model performance and key metrics at a glance.</p>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Records */}
        <div className="glass-card interactive-hover p-6 relative overflow-hidden group">
          {/* ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/15 rounded-full blur-2xl group-hover:bg-primary/25 transition-all duration-500 pointer-events-none"></div>

          <div className="flex items-center justify-between mb-4 relative z-10">
            <span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">Total Records</span>
            <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center glow-primary">
              <span className="material-symbols-outlined text-primary text-lg">database</span>
            </div>
          </div>
          <div className="font-data-mono text-4xl font-bold text-on-surface mb-2 relative z-10">1.2<span className="text-primary">M</span></div>
          <div className="flex items-center gap-1.5 text-secondary text-xs font-semibold relative z-10">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            +12% vs last batch
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[3px] accent-bar-primary rounded-b-2xl"></div>
        </div>

        {/* Baseline Accuracy */}
        <div className="glass-card interactive-hover p-6 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/15 rounded-full blur-2xl group-hover:bg-secondary/25 transition-all duration-500 pointer-events-none"></div>

          <div className="flex items-center justify-between mb-4 relative z-10">
            <span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">Baseline Accuracy</span>
            <div className="w-9 h-9 rounded-xl bg-secondary/15 border border-secondary/25 flex items-center justify-center glow-secondary">
              <span className="material-symbols-outlined text-secondary text-lg">verified</span>
            </div>
          </div>
          <div className="font-data-mono text-4xl font-bold text-on-surface mb-2 relative z-10">87<span className="text-secondary">%</span></div>
          <div className="flex items-center gap-1.5 text-on-surface-variant text-xs font-semibold relative z-10">
            <span className="material-symbols-outlined text-sm">analytics</span>
            Validated on 240k samples
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[3px] accent-bar-secondary rounded-b-2xl"></div>
        </div>

        {/* Balanced F1 */}
        <div className="glass-card interactive-hover p-6 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-tertiary/15 rounded-full blur-2xl group-hover:bg-tertiary/25 transition-all duration-500 pointer-events-none"></div>

          <div className="flex items-center justify-between mb-4 relative z-10">
            <span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">Balanced F1-Score</span>
            <div className="w-9 h-9 rounded-xl bg-tertiary/15 border border-tertiary/25 flex items-center justify-center glow-tertiary">
              <span className="material-symbols-outlined text-tertiary text-lg">auto_graph</span>
            </div>
          </div>
          <div className="font-data-mono text-4xl font-bold text-on-surface mb-2 relative z-10">0.<span className="text-tertiary">92</span></div>
          <div className="flex items-center gap-1.5 text-tertiary text-xs font-semibold relative z-10">
            <span className="material-symbols-outlined text-sm">balance</span>
            After SMOTE optimization
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[3px] accent-bar-tertiary rounded-b-2xl"></div>
        </div>
      </div>

      {/* Insights */}
      <div className="glass-card p-6 relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-52 h-52 bg-secondary/12 rounded-full blur-[70px] pointer-events-none"></div>
        <div className="absolute -left-16 -bottom-16 w-52 h-52 bg-primary/10 rounded-full blur-[70px] pointer-events-none"></div>

        <div className="flex items-center gap-3 mb-5 relative z-10">
          <div className="w-9 h-9 rounded-xl bg-secondary/15 border border-secondary/25 flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary text-lg">lightbulb</span>
          </div>
          <div>
            <h3 className="text-on-surface font-bold text-base">Model Resilience Analysis</h3>
            <p className="text-on-surface-variant text-xs">Key findings from the optimization pipeline</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 relative z-10">
          <div className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.08] hover:border-tertiary/30 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
              <span className="text-tertiary text-[10px] font-bold uppercase tracking-wider">The Problem</span>
            </div>
            <p className="text-on-surface/85 text-sm leading-relaxed">
              Raw accuracy is <span className="text-tertiary font-semibold">deceptive</span> in imbalanced sets — the baseline completely fails on minority classes.
            </p>
          </div>
          <div className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.08] hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span className="text-primary text-[10px] font-bold uppercase tracking-wider">The Solution</span>
            </div>
            <p className="text-on-surface/85 text-sm leading-relaxed">
              <span className="text-primary font-semibold">SMOTE</span> + class-weighted XGBoost shifted focus from majority-class to minority-class patterns.
            </p>
          </div>
          <div className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.08] hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span className="text-secondary text-[10px] font-bold uppercase tracking-wider">The Result</span>
            </div>
            <p className="text-on-surface/85 text-sm leading-relaxed">
              Identifying <span className="text-secondary font-semibold">94% of severe accidents</span> while maintaining F1 of <span className="text-tertiary font-semibold">0.92</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
