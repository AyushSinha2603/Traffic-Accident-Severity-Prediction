'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function TopNav() {
  const pathname = usePathname()

  const navItems = [
    { name: 'Inference', path: '/simulation' },
  ]

  return (
    <header className="bg-surface-container flex justify-between items-center px-gutter w-full h-16 fixed top-0 border-b border-outline-variant z-50 shadow-md shadow-[var(--color-surface-container-low)]">
      <div className="font-headline-md text-headline-md font-bold text-primary pl-4">Traffic Accident Severity Prediction</div>
      <nav className="hidden md:flex gap-md">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.path)
          return (
            <Link 
              key={item.name} 
              href={item.path} 
              className={`font-body-md text-body-md transition-colors border-b-2 py-5 ${
                isActive 
                  ? 'text-primary border-primary' 
                  : 'text-on-surface-variant border-transparent hover:text-primary'
              }`}
            >
              {item.name}
            </Link>
          )
        })}
      </nav>
      <div className="flex items-center gap-sm pr-4">
        <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">notifications</span>
        <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">settings</span>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant hover:border-primary transition-colors cursor-pointer">
          <img className="w-full h-full object-cover" alt="User Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt4vofidUHL4Kz_1_noUq_EU1bUrmvZbttYIa7dShYAjqcTIDbaFlDLdH5kJ8cz4ZvI0fsihnwUjKShhXGXTJp5v7vDGrAB1C7055E4LO3iJDSdp-5zs5Iq064Ddcke0BhpNiDQom1TNhECaqJJLzU4icHjQIcgg-hhvFbWV_ph2Czr_nhQtAmfH9xJ8eSg2VuAcrt45bZMXTJR7rQoXkeaRYtbCtAnenb2qUSxcgymM2ioNaWj7oCqAAbnBx9waaH4WGJ2cGtLuc" />
        </div>
      </div>
    </header>
  )
}
