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
    <aside className="fixed left-0 top-16 bottom-0 w-[260px] bg-surface-dim flex flex-col border-r border-outline-variant z-40">
      <div className="p-md flex flex-col gap-xs">
        <div className="text-primary font-headline-sm text-headline-sm">ML Core v2.1</div>
        <div className="text-on-surface-variant text-body-sm">Running: XGBoost_v4</div>
      </div>
      <nav className="flex-1 px-sm py-md space-y-base overflow-y-auto custom-scrollbar">
        {navItems.map((item) => {
          const isActive = pathname === item.path
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center gap-xs rounded-xl p-sm transition-all duration-200 ${
                isActive
                  ? 'bg-primary-container text-on-primary-container translate-x-1'
                  : 'text-on-surface-variant hover:bg-surface-variant'
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-label-caps text-label-caps">{item.name}</span>
            </Link>
          )
        })}
      </nav>
      <div className="p-md space-y-sm">
        <button className="w-full bg-primary text-on-primary font-bold py-sm px-md rounded-xl hover:scale-95 transition-all">Export Report</button>
        <div className="flex flex-col gap-xs">
          <Link href="#" className="flex items-center gap-xs text-on-surface-variant text-body-sm hover:text-secondary-fixed transition-colors">
            <span className="material-symbols-outlined">help</span>
            Documentation
          </Link>
          <Link href="#" className="flex items-center gap-xs text-on-surface-variant text-body-sm hover:text-secondary-fixed transition-colors">
            <span className="material-symbols-outlined">contact_support</span>
            Support
          </Link>
        </div>
      </div>
    </aside>
  )
}
