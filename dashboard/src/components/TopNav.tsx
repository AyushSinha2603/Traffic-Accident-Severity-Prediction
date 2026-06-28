'use client'

export default function TopNav() {
  return (
    <header className="fixed top-0 left-[260px] right-0 h-14 z-50 bg-[rgba(2,6,23,0.85)] backdrop-blur-xl border-b border-[rgba(148,163,184,0.08)]">
      <div className="flex justify-between items-center h-full px-8">
        <div className="flex items-center gap-2 text-on-surface-variant text-sm">
          <span className="material-symbols-outlined text-lg">emergency</span>
          <span className="font-medium text-on-surface">Traffic Accident Severity Prediction</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(45,212,191,0.08)] border border-[rgba(45,212,191,0.15)]">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          <span className="text-secondary text-xs font-medium">Model Active</span>
        </div>
      </div>
    </header>
  )
}
