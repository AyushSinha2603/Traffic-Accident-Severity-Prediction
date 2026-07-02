'use client'

export default function TopNav() {
  return (
    <header className="fixed top-0 left-[260px] right-0 h-[72px] z-50 bg-[#0d0f14] border-b border-[#1e222b]">
      <div className="flex justify-between items-center h-full px-8">
        <div className="flex items-center gap-2 text-[#8b909a] text-[13px]">
          <span className="material-symbols-outlined text-[18px]">emergency</span>
          <span className="font-medium text-white">Traffic Accident Severity Prediction</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1e222b] border border-[#2a2e39]">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
            <span className="text-[#22c55e] text-[11px] font-bold tracking-wider">MODEL ACTIVE</span>
          </div>
          
          <a 
            href="/Traffic_Accident_Report.pdf" 
            download="Traffic_Accident_Report.pdf"
            className="pill-btn bg-[#1e1136] text-[#8b5cf6] border border-[rgba(139,92,246,0.2)] hover:bg-[#2a1744] h-[36px] flex items-center gap-2 px-4 rounded-full text-[13px] font-semibold transition-colors"
          >
            Export Report <span className="material-symbols-outlined text-[16px]">download</span>
          </a>
        </div>
      </div>
    </header>
  )
}
