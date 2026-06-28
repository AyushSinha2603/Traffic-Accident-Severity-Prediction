export default function OverviewPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-on-surface mb-1">Overview</h1>
        <p className="text-on-surface-variant text-sm">Real-time model performance and key metrics at a glance.</p>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Records */}
        <div className="glass-card interactive-hover p-5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">Total Records</span>
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-base">database</span>
            </div>
          </div>
          <div className="font-data-mono text-3xl font-bold text-on-surface">1.2M</div>
          <div className="flex items-center gap-1.5 mt-2 text-secondary text-xs font-medium">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            +12% vs last batch
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[3px] accent-bar-primary opacity-50 rounded-b-2xl"></div>
        </div>

        {/* Baseline Accuracy */}
        <div className="glass-card interactive-hover p-5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">Baseline Accuracy</span>
            <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-base">verified</span>
            </div>
          </div>
          <div className="font-data-mono text-3xl font-bold text-on-surface">87%</div>
          <div className="flex items-center gap-1.5 mt-2 text-on-surface-variant text-xs font-medium">
            <span className="material-symbols-outlined text-sm">analytics</span>
            Validated on 240k samples
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[3px] accent-bar-secondary opacity-50 rounded-b-2xl"></div>
        </div>

        {/* Balanced F1 */}
        <div className="glass-card interactive-hover p-5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">Balanced F1-Score</span>
            <div className="w-8 h-8 rounded-lg bg-tertiary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary text-base">auto_graph</span>
            </div>
          </div>
          <div className="font-data-mono text-3xl font-bold text-on-surface">0.92</div>
          <div className="flex items-center gap-1.5 mt-2 text-tertiary text-xs font-medium">
            <span className="material-symbols-outlined text-sm">balance</span>
            After SMOTE optimization
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[3px] accent-bar-tertiary opacity-50 rounded-b-2xl"></div>
        </div>
      </div>

      {/* Insights */}
      <div className="glass-card p-5 relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-56 h-56 bg-secondary/6 rounded-full blur-[60px] pointer-events-none"></div>
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary text-base">lightbulb</span>
          </div>
          <h3 className="text-on-surface font-semibold text-sm">Model Resilience Analysis</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 relative z-10">
          <div className="bg-white/[0.03] rounded-lg p-4 border border-white/[0.05]">
            <div className="text-on-surface-variant text-[10px] font-bold uppercase tracking-wider mb-2">The Problem</div>
            <p className="text-on-surface/80 text-sm leading-relaxed">
              Raw accuracy is <span className="text-tertiary font-semibold">deceptive</span> in imbalanced sets — the baseline completely fails on minority classes.
            </p>
          </div>
          <div className="bg-white/[0.03] rounded-lg p-4 border border-white/[0.05]">
            <div className="text-on-surface-variant text-[10px] font-bold uppercase tracking-wider mb-2">The Solution</div>
            <p className="text-on-surface/80 text-sm leading-relaxed">
              <span className="text-primary font-semibold">SMOTE</span> + class-weighted XGBoost shifted focus from majority-class frequency to minority-class patterns.
            </p>
          </div>
          <div className="bg-white/[0.03] rounded-lg p-4 border border-white/[0.05]">
            <div className="text-on-surface-variant text-[10px] font-bold uppercase tracking-wider mb-2">The Result</div>
            <p className="text-on-surface/80 text-sm leading-relaxed">
              Identifying <span className="text-secondary font-semibold">94% of severe accidents</span> while maintaining F1 of <span className="text-tertiary font-semibold">0.92</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
