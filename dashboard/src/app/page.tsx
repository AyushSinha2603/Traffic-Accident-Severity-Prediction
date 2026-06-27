export default function OverviewPage() {
  return (
    <>
      {/* Hero & KPI Section */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Traffic Accident <span className="text-gradient">Severity Prediction</span>
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl">
          Real-time monitoring and analysis of road incidents powered by an optimized XGBoost model to tackle severe class imbalances.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-md">
        <div className="glass-card interactive-hover p-xl rounded-xl flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl text-primary">database</span>
          </div>
          <span className="font-label-caps text-label-caps text-on-surface-variant mb-xs z-10 tracking-widest">TOTAL RECORDS</span>
          <div className="font-data-mono text-display-lg text-primary z-10 drop-shadow-[0_0_15px_rgba(255,0,127,0.5)]">1.2M</div>
          <div className="flex items-center gap-xs mt-xs text-secondary font-body-sm z-10">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            +12% vs last batch
          </div>
        </div>

        <div className="glass-card interactive-hover p-xl rounded-xl flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl text-secondary">verified</span>
          </div>
          <span className="font-label-caps text-label-caps text-on-surface-variant mb-xs z-10 tracking-widest">BASELINE ACCURACY</span>
          <div className="font-data-mono text-display-lg text-secondary z-10 drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">87%</div>
          <div className="flex items-center gap-xs mt-xs text-on-surface-variant font-body-sm z-10">
            <span className="material-symbols-outlined text-sm">analytics</span>
            Validated on 240k samples
          </div>
        </div>

        <div className="glass-card interactive-hover p-xl rounded-xl flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl text-tertiary">balance</span>
          </div>
          <span className="font-label-caps text-label-caps text-on-surface-variant mb-xs z-10 tracking-widest">BALANCED F1-SCORE</span>
          <div className="font-data-mono text-display-lg text-tertiary z-10 drop-shadow-[0_0_15px_rgba(204,255,0,0.5)]">0.92</div>
          <div className="flex items-center gap-xs mt-xs text-tertiary font-body-sm z-10">
            <span className="material-symbols-outlined text-sm">auto_graph</span>
            After SMOTE optimization
          </div>
        </div>
      </section>

      {/* Insights Panel */}
      <section className="glass-card rounded-xl p-lg border-l-4 border-l-secondary mt-8 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary opacity-10 rounded-full blur-[80px]"></div>
        <h3 className="font-headline-md text-headline-md text-secondary mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined">lightbulb</span>
          Model Resilience Analysis
        </h3>
        <p className="text-body-md text-on-surface-variant leading-relaxed text-lg">
          Raw accuracy is deceptive in imbalanced sets. By utilizing <span className="text-primary font-bold">SMOTE</span> and class-weighted XGBoost, we shifted the model focus from majority-class frequency to minority-class patterns, successfully identifying <span className="text-secondary font-bold px-2 py-1 rounded bg-secondary/10 border border-secondary/20">94% of severe accidents (Severity 4)</span>. This trade-off significantly improves emergency response readiness while maintaining an overall F1-score of <span className="text-tertiary font-bold">0.92</span>.
        </p>
      </section>
    </>
  )
}
