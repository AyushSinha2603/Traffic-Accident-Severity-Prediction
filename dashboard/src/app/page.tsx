export default function OverviewPage() {
  return (
    <>
      {/* Hero & KPI Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-md">
        <div className="glass-card interactive-hover p-md rounded-xl flex flex-col justify-center">
          <span className="font-label-caps text-label-caps text-on-surface-variant mb-xs">TOTAL RECORDS</span>
          <div className="font-data-mono text-display-lg text-primary">1.2M</div>
          <div className="flex items-center gap-xs mt-xs text-secondary font-body-sm">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            +12% vs last batch
          </div>
        </div>
        <div className="glass-card interactive-hover p-md rounded-xl flex flex-col justify-center">
          <span className="font-label-caps text-label-caps text-on-surface-variant mb-xs">BASELINE ACCURACY</span>
          <div className="font-data-mono text-display-lg text-secondary">87%</div>
          <div className="flex items-center gap-xs mt-xs text-on-surface-variant font-body-sm">
            <span className="material-symbols-outlined text-sm">verified</span>
            Validated on 240k samples
          </div>
        </div>
        <div className="glass-card interactive-hover p-md rounded-xl flex flex-col justify-center">
          <span className="font-label-caps text-label-caps text-on-surface-variant mb-xs">BALANCED F1-SCORE</span>
          <div className="font-data-mono text-display-lg text-tertiary">0.92</div>
          <div className="flex items-center gap-xs mt-xs text-tertiary-fixed font-body-sm">
            <span className="material-symbols-outlined text-sm">balance</span>
            After SMOTE optimization
          </div>
        </div>
      </section>

      {/* Insights Panel */}
      <section className="glass-card rounded-xl p-md border-l-4 border-l-secondary">
        <h3 className="font-headline-sm text-headline-sm text-secondary mb-xs">Model Resilience Analysis</h3>
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          Raw accuracy is deceptive in imbalanced sets. By utilizing SMOTE and class-weighted XGBoost, we shifted the model focus from majority-class frequency to minority-class patterns, successfully identifying <span className="text-secondary font-bold">94% of severe accidents (Severity 4)</span>. This trade-off significantly improves emergency response readiness while maintaining an overall F1-score of 0.92.
        </p>
      </section>
    </>
  )
}
