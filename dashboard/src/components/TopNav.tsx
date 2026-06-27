import Link from 'next/link'

export default function TopNav() {
  return (
    <header className="bg-surface-container flex justify-between items-center px-gutter w-full h-16 fixed top-0 border-b border-outline-variant z-50">
      <div className="font-headline-md text-headline-md font-bold text-primary">Traffic Accident Severity Prediction</div>
      <nav className="hidden md:flex gap-md">
        <Link href="#" className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors">Models</Link>
        <Link href="#" className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors">Datasets</Link>
        <Link href="#" className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors">Training</Link>
        <Link href="#" className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors">Inference</Link>
      </nav>
      <div className="flex items-center gap-sm">
        <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors" data-icon="notifications">notifications</span>
        <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors" data-icon="settings">settings</span>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
          <img className="w-full h-full object-cover" alt="User Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt4vofidUHL4Kz_1_noUq_EU1bUrmvZbttYIa7dShYAjqcTIDbaFlDLdH5kJ8cz4ZvI0fsihnwUjKShhXGXTJp5v7vDGrAB1C7055E4LO3iJDSdp-5zs5Iq064Ddcke0BhpNiDQom1TNhECaqJJLzU4icHjQIcgg-hhvFbWV_ph2Czr_nhQtAmfH9xJ8eSg2VuAcrt45bZMXTJR7rQoXkeaRYtbCtAnenb2qUSxcgymM2ioNaWj7oCqAAbnBx9waaH4WGJ2cGtLuc" />
        </div>
      </div>
    </header>
  )
}
