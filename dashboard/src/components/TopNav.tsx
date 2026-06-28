'use client'

export default function TopNav() {
  return (
    <header className="fixed top-0 left-[260px] right-0 h-14 z-50 bg-[rgba(2,6,23,0.85)] backdrop-blur-xl border-b border-[rgba(148,163,184,0.08)]">
      <div className="flex justify-between items-center h-full px-8">
        {/* Page context — filled by breadcrumb or title */}
        <div className="flex items-center gap-2 text-on-surface-variant text-sm">
          <span className="material-symbols-outlined text-lg">emergency</span>
          <span className="font-medium text-on-surface">Traffic Accident Severity Prediction</span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(45,212,191,0.08)] border border-[rgba(45,212,191,0.15)]">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-secondary text-xs font-medium">Model Active</span>
          </div>
          <button className="w-8 h-8 rounded-lg bg-surface-variant/40 flex items-center justify-center hover:bg-surface-variant transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant text-lg">notifications</span>
          </button>
          <button className="w-8 h-8 rounded-lg bg-surface-variant/40 flex items-center justify-center hover:bg-surface-variant transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant text-lg">settings</span>
          </button>
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-outline-variant/60 hover:border-primary/40 transition-colors cursor-pointer">
            <img className="w-full h-full object-cover" alt="User Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt4vofidUHL4Kz_1_noUq_EU1bUrmvZbttYIa7dShYAjqcTIDbaFlDLdH5kJ8cz4ZvI0fsihnwUjKShhXGXTJp5v7vDGrAB1C7055E4LO3iJDSdp-5zs5Iq064Ddcke0BhpNiDQom1TNhECaqJJLzU4icHjQIcgg-hhvFbWV_ph2Czr_nhQtAmfH9xJ8eSg2VuAcrt45bZMXTJR7rQoXkeaRYtbCtAnenb2qUSxcgymM2ioNaWj7oCqAAbnBx9waaH4WGJ2cGtLuc" />
          </div>
        </div>
      </div>
    </header>
  )
}
