'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { name: 'Dashboard', path: '/', icon: 'space_dashboard' },
    { name: 'Analytics', path: '/analytics', icon: 'monitoring' },
    { name: 'Simulation', path: '/simulation', icon: 'science' },
  ]

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[260px] bg-[#0d0f14] flex flex-col border-r border-[#1e222b] z-50">
      {/* Brand */}
      <div className="h-[72px] flex items-center gap-3 px-6 border-b border-[#1e222b]">
        <div className="w-7 h-7 rounded bg-white flex items-center justify-center flex-shrink-0 text-[#0d0f14]">
          <span className="material-symbols-outlined text-[18px] font-bold">bolt</span>
        </div>
        <div className="min-w-0">
          <div className="text-white font-semibold text-[15px] tracking-wide">Dashboard</div>
          <div className="text-[#8b909a] text-[11px] font-medium">XGBoost Engine</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => {
          const isActive = item.path === '/' ? pathname === '/' : pathname.startsWith(item.path)
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center gap-3 rounded-full px-4 py-2.5 transition-all duration-200 text-[13.5px] font-semibold ${
                isActive
                  ? 'bg-[#1e1136] text-[#8b5cf6]'
                  : 'text-[#8b909a] hover:text-white hover:bg-[#161920]'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              {item.name}
            </Link>
          )
        })}

        <div className="pt-8 pb-3 px-2 text-[10px] font-bold text-[#8b909a] uppercase tracking-wider">
          Resources
        </div>
        <a href="/Traffic_Accident_Report.pdf" download="Traffic_Accident_Report.pdf" className="flex items-center gap-3 rounded-full px-4 py-2.5 transition-all duration-200 text-[13.5px] font-semibold text-[#8b909a] hover:text-white hover:bg-[#161920]">
          <span className="material-symbols-outlined text-[20px]">description</span>
          Documentation
        </a>
      </nav>

      {/* Footer Banner */}
      <div className="p-4">
        <div className="bg-[#161920] border border-[#2a2e39] rounded-2xl p-4 flex flex-col gap-1.5 relative overflow-hidden group hover:border-[#8b5cf6]/50 transition-colors cursor-pointer">
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#8b5cf6] blur-[30px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <span className="material-symbols-outlined text-[#8b5cf6] text-[20px]">bolt</span>
          <div className="text-white font-semibold text-[13px] mt-1">Activate Super</div>
          <div className="text-[#8b909a] text-[11px] leading-relaxed">Unlock all features on the dashboard</div>
        </div>
      </div>
    </aside>
  )
}
