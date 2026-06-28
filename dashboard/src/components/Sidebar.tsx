'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { name: 'Overview', path: '/', icon: 'dashboard' },
    { name: 'Analytics', path: '/analytics', icon: 'analytics' },
    { name: 'Simulation', path: '/simulation', icon: 'science' },
  ]

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-[260px] bg-[rgba(2,6,23,0.95)] backdrop-blur-xl flex flex-col border-r border-[rgba(148,163,184,0.08)] z-40">
      {/* Header */}
      <div className="p-5 pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-white text-lg">model_training</span>
          </div>
          <div>
            <div className="text-on-surface font-semibold text-sm">ML Core v2.1</div>
            <div className="text-on-surface-variant text-xs">XGBoost Pipeline</div>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/10 border border-secondary/20">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
          <span className="text-secondary text-xs font-medium">Model Active</span>
          <span className="text-on-surface-variant text-xs ml-auto">v4.2</span>
        </div>
      </div>

      <div className="px-4 mb-2">
        <div className="h-px bg-gradient-to-r from-transparent via-outline-variant to-transparent"></div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => {
          const isActive = item.path === '/' ? pathname === '/' : pathname.startsWith(item.path)
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 group ${
                isActive
                  ? 'bg-primary/15 text-primary border border-primary/20 shadow-sm shadow-primary/10'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 border border-transparent'
              }`}
            >
              <span className={`material-symbols-outlined text-xl transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                {item.icon}
              </span>
              <span className="font-medium text-sm">{item.name}</span>
              {isActive && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shadow-sm shadow-primary/50"></span>
              )}
            </Link>
          )
        })}
      </nav>

      <div className="px-4 mb-2">
        <div className="h-px bg-gradient-to-r from-transparent via-outline-variant to-transparent"></div>
      </div>

      {/* Footer */}
      <div className="p-4 space-y-3">
        <a
          href="/Traffic_Accident_Report.md"
          download="Traffic_Accident_Report.md"
          className="group flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 bg-gradient-to-r from-primary to-primary-container text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-[0.98] active:scale-[0.96]"
        >
          <span className="material-symbols-outlined text-lg">download</span>
          Export Report
        </a>
        <div className="flex gap-2">
          <Link href="#" className="flex-1 flex items-center justify-center gap-1.5 text-on-surface-variant text-xs py-2 rounded-lg hover:bg-surface-variant/50 transition-colors">
            <span className="material-symbols-outlined text-sm">help</span>
            Docs
          </Link>
          <Link href="#" className="flex-1 flex items-center justify-center gap-1.5 text-on-surface-variant text-xs py-2 rounded-lg hover:bg-surface-variant/50 transition-colors">
            <span className="material-symbols-outlined text-sm">contact_support</span>
            Support
          </Link>
        </div>
      </div>
    </aside>
  )
}
