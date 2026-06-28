'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { name: 'Overview', path: '/', icon: 'space_dashboard' },
    { name: 'Analytics', path: '/analytics', icon: 'monitoring' },
    { name: 'Simulation', path: '/simulation', icon: 'science' },
  ]

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[260px] bg-[#060c1f] flex flex-col border-r border-[rgba(148,163,184,0.08)] z-50">
      {/* Brand */}
      <div className="h-14 flex items-center gap-3 px-5 border-b border-[rgba(148,163,184,0.08)]">
        <div className="w-8 h-8 rounded-lg accent-bar-primary flex items-center justify-center flex-shrink-0">
          <span className="material-symbols-outlined text-white text-base">emergency</span>
        </div>
        <div className="min-w-0">
          <div className="text-on-surface font-semibold text-sm truncate">Severity AI</div>
          <div className="text-on-surface-variant text-[10px]">XGBoost v4.2</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto custom-scrollbar">
        <div className="px-3 mb-2 text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest">Dashboard</div>
        {navItems.map((item) => {
          const isActive = item.path === '/' ? pathname === '/' : pathname.startsWith(item.path)
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-150 text-[13px] font-medium ${
                isActive
                  ? 'bg-primary/12 text-primary'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-white/[0.04]'
              }`}
            >
              <span className={`material-symbols-outlined text-xl ${isActive ? 'text-primary' : ''}`}>{item.icon}</span>
              {item.name}
              {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"></span>}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-3 space-y-2 border-t border-[rgba(148,163,184,0.08)]">
        <a
          href="/Traffic_Accident_Report.md"
          download="Traffic_Accident_Report.md"
          className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-lg font-semibold text-xs bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          <span className="material-symbols-outlined text-base">download</span>
          Export Report
        </a>
      </div>
    </aside>
  )
}
