export default function OverviewPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-end mb-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#8b909a] text-[13px] font-medium">Real-time model performance</span>
            <div className="pill-btn !py-1 !px-2.5 !text-[11px] !bg-[#161920] !text-white !border-[#2a2e39]">
              3 Metrics
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Severity Output Overview
          </h1>
        </div>
        <div className="flex gap-2">
          <button className="pill-btn !py-1.5 !px-3 !bg-[#161920]">
            <span className="material-symbols-outlined text-[16px]">filter_list</span> 24H
          </button>
          <button className="pill-btn !py-1.5 !px-3 !bg-[#161920]">
            <span className="material-symbols-outlined text-[16px]">sort</span> Desc
          </button>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Total Records */}
        <div className="glass-card p-6 flex flex-col justify-between h-[180px] interactive-hover cursor-pointer relative overflow-hidden group">
          <div className="flex justify-between items-start z-10 relative">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#8b5cf6]/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#8b5cf6] text-[14px]">database</span>
              </div>
              <span className="text-[#8b909a] text-[13px] font-medium">Total Records</span>
            </div>
            <span className="material-symbols-outlined text-[#8b909a] text-[16px] group-hover:text-white transition-colors">arrow_outward</span>
          </div>
          
          <div className="mt-4 z-10 relative">
            <div className="text-[11px] text-[#8b909a] mb-1">Total Processed</div>
            <div className="text-3xl font-bold text-white">1.2<span className="text-[#8b909a]">M</span></div>
            <div className="flex items-center gap-1.5 mt-2">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
              <span className="text-[#22c55e] text-[12px] font-semibold">+12%</span>
            </div>
          </div>

          {/* Decorative Chart Line (Mock) */}
          <svg className="absolute bottom-4 left-0 right-0 w-full h-12 opacity-50" preserveAspectRatio="none" viewBox="0 0 100 40">
            <path d="M0 30 Q 10 25, 20 28 T 40 20 T 60 15 T 80 10 T 100 5" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" />
            <circle cx="80" cy="10" r="2.5" fill="#161920" stroke="#8b5cf6" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Baseline Accuracy */}
        <div className="glass-card p-6 flex flex-col justify-between h-[180px] interactive-hover cursor-pointer relative overflow-hidden group">
          <div className="flex justify-between items-start z-10 relative">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#3b82f6]/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#3b82f6] text-[14px]">verified</span>
              </div>
              <span className="text-[#8b909a] text-[13px] font-medium">Accuracy</span>
            </div>
            <span className="material-symbols-outlined text-[#8b909a] text-[16px] group-hover:text-white transition-colors">arrow_outward</span>
          </div>
          
          <div className="mt-4 z-10 relative">
            <div className="text-[11px] text-[#8b909a] mb-1">Baseline Rate</div>
            <div className="text-3xl font-bold text-white">87.0<span className="text-[#8b909a]">%</span></div>
            <div className="flex items-center gap-1.5 mt-2">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
              <span className="text-[#22c55e] text-[12px] font-semibold">+2.4%</span>
            </div>
          </div>

          {/* Decorative Chart Line (Mock) */}
          <svg className="absolute bottom-4 left-0 right-0 w-full h-12 opacity-50" preserveAspectRatio="none" viewBox="0 0 100 40">
            <path d="M0 25 Q 15 30, 30 20 T 50 15 T 70 25 T 100 10" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
            <circle cx="70" cy="25" r="2.5" fill="#161920" stroke="#3b82f6" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Balanced F1 */}
        <div className="glass-card p-6 flex flex-col justify-between h-[180px] interactive-hover cursor-pointer relative overflow-hidden group">
          <div className="flex justify-between items-start z-10 relative">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#f59e0b]/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#f59e0b] text-[14px]">auto_graph</span>
              </div>
              <span className="text-[#8b909a] text-[13px] font-medium">F1-Score</span>
            </div>
            <span className="material-symbols-outlined text-[#8b909a] text-[16px] group-hover:text-white transition-colors">arrow_outward</span>
          </div>
          
          <div className="mt-4 z-10 relative">
            <div className="text-[11px] text-[#8b909a] mb-1">SMOTE Optimized</div>
            <div className="text-3xl font-bold text-white">0.92</div>
            <div className="flex items-center gap-1.5 mt-2">
              <span className="w-2 h-2 rounded-full bg-[#ef4444]"></span>
              <span className="text-[#ef4444] text-[12px] font-semibold">-0.01</span>
            </div>
          </div>

          {/* Decorative Chart Line (Mock) */}
          <svg className="absolute bottom-4 left-0 right-0 w-full h-12 opacity-50" preserveAspectRatio="none" viewBox="0 0 100 40">
            <path d="M0 10 Q 20 15, 40 25 T 60 30 T 80 20 T 100 35" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
            <circle cx="60" cy="30" r="2.5" fill="#161920" stroke="#ef4444" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* Featured Wide Card */}
      <div className="mt-6">
        
        {/* Insights */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-6 text-[#8b909a] text-[13px]">
            <span className="material-symbols-outlined text-[16px]">schedule</span> Last Update ~ 45 minutes ago
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                Model Resilience Analysis
                <span className="w-6 h-6 rounded bg-[#ef4444] text-white flex items-center justify-center text-[12px]">!</span>
              </h2>
              <div className="text-[#8b909a] text-[13px] mt-1">Optimization Pipeline Output</div>
            </div>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full border border-[#2a2e39] flex items-center justify-center text-[#8b909a] hover:bg-[#2a2e39] transition-colors"><span className="material-symbols-outlined text-[16px]">link</span></button>
              <button className="pill-btn !py-1 !px-3 text-[12px]">View Report <span className="material-symbols-outlined text-[14px]">arrow_outward</span></button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-6 border-t border-[#1e222b]">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[12px] text-[#8b909a] font-semibold">The Problem</span>
                <span className="material-symbols-outlined text-[14px] text-[#8b909a]">unfold_more</span>
              </div>
              <p className="text-[13px] text-white mt-2 leading-relaxed">
                Raw accuracy is <span className="text-[#ef4444] font-semibold">deceptive</span> in imbalanced sets.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[12px] text-[#8b909a] font-semibold">The Solution</span>
                <span className="material-symbols-outlined text-[14px] text-[#8b909a]">unfold_more</span>
              </div>
              <p className="text-[13px] text-white mt-2 leading-relaxed">
                <span className="text-[#8b5cf6] font-semibold">SMOTE</span> + class-weighted XGBoost applied.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[12px] text-[#8b909a] font-semibold">The Result</span>
                <span className="material-symbols-outlined text-[14px] text-[#8b909a]">unfold_more</span>
              </div>
              <p className="text-[13px] text-white mt-2 leading-relaxed">
                Identifying 94% of severe accidents (F1 0.92).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
