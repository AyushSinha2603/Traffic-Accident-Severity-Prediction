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
    <aside className="fixed left-0 top-0 bottom-0 w-[260px] flex flex-col border-r border-white/[0.06] z-50"
      style={{ background: 'linear-gradient(180deg, #0a0f1e 0%, #060c1a 100%)' }}>
      {/* Brand */}
      <div className="h-14 flex items-center gap-3 px-5 border-b border-white/[0.06]">
        <div className="w-8 h-8 rounded-lg accent-bar-primary flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(129,140,248,0.4)]">
          <span className="material-symbols-outlined text-white text-base">emergency</span>
        </div>
        <div className="min-w-0">
          <div className="text-on-surface font-bold text-sm">Severity AI</div>
          <div className="text-on-surface-variant text-[10px]">XGBoost v4.2</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto custom-scrollbar">
        <div className="px-3 mb-3 text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest">Dashboard</div>
        {navItems.map((item) => {
          const isActive = item.path === '/' ? pathname === '/' : pathname.startsWith(item.path)
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-150 text-[13px] font-semibold ${
                isActive
                  ? 'bg-primary/15 text-primary border border-primary/20 shadow-[0_0_16px_rgba(129,140,248,0.15)]'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-white/[0.05] border border-transparent'
              }`}
            >
              <span className={`material-symbols-outlined text-xl ${isActive ? 'text-primary' : ''}`}>{item.icon}</span>
              {item.name}
              {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(129,140,248,0.8)]"></span>}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-white/[0.06]">
        <a
          href="/Traffic_Accident_Report.pdf"
          download="Traffic_Accident_Report.pdf"
          className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl font-semibold text-xs accent-bar-primary text-white hover:opacity-90 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(129,140,248,0.3)]"
        >
          <span className="material-symbols-outlined text-base">download</span>
          Export Report
        </a>
      </div>
    </aside>
  )
}
