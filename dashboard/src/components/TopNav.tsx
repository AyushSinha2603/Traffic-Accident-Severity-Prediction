'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function TopNav() {
  const pathname = usePathname()

  const navItems = [
    { name: 'Overview', path: '/', icon: 'dashboard' },
    { name: 'Analytics', path: '/analytics', icon: 'analytics' },
    { name: 'Inference', path: '/simulation', icon: 'science' },
  ]

  return (
    <header className="fixed top-0 w-full h-16 z-50 bg-[rgba(2,6,23,0.8)] backdrop-blur-xl border-b border-[rgba(148,163,184,0.08)]">
      <div className="flex justify-between items-center h-full px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg accent-bar-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-sm">emergency</span>
          </div>
          <span className="font-headline-sm text-headline-sm font-bold text-on-surface hidden lg:block">
            Accident Severity<span className="text-primary ml-1">AI</span>
          </span>
        </div>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center bg-[rgba(15,23,42,0.6)] rounded-full px-1 py-1 border border-[rgba(148,163,184,0.08)]">
          {navItems.map((item) => {
            const isActive = item.path === '/' ? pathname === '/' : pathname.startsWith(item.path)
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-container text-white shadow-md shadow-primary/20'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(45,212,191,0.1)] border border-[rgba(45,212,191,0.2)]">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-secondary text-xs font-medium">Live</span>
          </div>
          <button className="w-9 h-9 rounded-xl bg-surface-variant/50 flex items-center justify-center hover:bg-surface-variant transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant text-xl">notifications</span>
          </button>
          <div className="w-9 h-9 rounded-xl overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-colors cursor-pointer">
            <img className="w-full h-full object-cover" alt="User Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt4vofidUHL4Kz_1_noUq_EU1bUrmvZbttYIa7dShYAjqcTIDbaFlDLdH5kJ8cz4ZvI0fsihnwUjKShhXGXTJp5v7vDGrAB1C7055E4LO3iJDSdp-5zs5Iq064Ddcke0BhpNiDQom1TNhECaqJJLzU4icHjQIcgg-hhvFbWV_ph2Czr_nhQtAmfH9xJ8eSg2VuAcrt45bZMXTJR7rQoXkeaRYtbCtAnenb2qUSxcgymM2ioNaWj7oCqAAbnBx9waaH4WGJ2cGtLuc" />
          </div>
        </div>
      </div>
    </header>
  )
}
