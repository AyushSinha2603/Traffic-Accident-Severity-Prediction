'use client'

export default function TopNav() {
  return (
    <header className="fixed top-0 left-[260px] right-0 h-[72px] z-50 bg-[#0d0f14] border-b border-[#1e222b]">
      <div className="flex justify-between items-center h-full px-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-[#161920] rounded-full px-1.5 py-1.5 pr-4 border border-[#2a2e39] cursor-pointer hover:bg-[#1c202a] transition-colors">
            <div className="w-8 h-8 rounded-full bg-[#2a2e39] overflow-hidden">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-[#8b909a] font-medium leading-none">@ayush2603</span>
              <span className="text-[13px] text-white font-semibold leading-tight">Ayush Sinha</span>
            </div>
            <span className="material-symbols-outlined text-[16px] text-[#8b909a] ml-1">arrow_drop_down</span>
          </div>

          <button className="pill-btn bg-[#1e1136] text-[#8b5cf6] border border-[rgba(139,92,246,0.2)] hover:bg-[#2a1744] h-[36px]">
            Export Report <span className="material-symbols-outlined text-[16px]">download</span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#8b909a] hover:bg-[#161920] transition-colors relative">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-[#8b5cf6] rounded-full border border-[#0d0f14]"></span>
          </button>

          <div className="relative ml-2">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-[#8b909a]">search</span>
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-[#161920] border border-[#2a2e39] rounded-full pl-10 pr-4 py-2 text-[13px] text-white placeholder:text-[#8b909a] focus:outline-none focus:border-[#8b5cf6] w-[220px] transition-colors"
            />
          </div>

          <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#8b909a] hover:bg-[#161920] transition-colors ml-1">
            <span className="material-symbols-outlined text-[20px]">settings</span>
          </button>
        </div>
      </div>
    </header>
  )
}
