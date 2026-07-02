'use client'

import { useState } from 'react'

export default function SimulationPage() {
  const [temperature, setTemperature] = useState(72)
  const [visibility, setVisibility] = useState(10.0)

  let rank = 1
  if (temperature < 32 || temperature > 100 || visibility < 2) rank = 4
  else if (temperature < 45 || visibility < 5) rank = 3
  else if (temperature < 60 || visibility < 8) rank = 2

  const config: Record<number, { label: string; color: string; border: string; bg: string; bar: string; w: string; desc: string; icon: string }> = {
    1: { label: 'LOW', color: 'text-[#3b82f6]', border: 'border-[#3b82f6]/20', bg: 'bg-[#3b82f6]/10', bar: 'bg-[#3b82f6]', w: '25%', desc: 'Minor fender-bender conditions', icon: 'check_circle' },
    2: { label: 'MODERATE', color: 'text-[#8b5cf6]', border: 'border-[#8b5cf6]/20', bg: 'bg-[#8b5cf6]/10', bar: 'bg-[#8b5cf6]', w: '50%', desc: 'Elevated risk — exercise caution', icon: 'info' },
    3: { label: 'HIGH', color: 'text-[#f59e0b]', border: 'border-[#f59e0b]/20', bg: 'bg-[#f59e0b]/10', bar: 'bg-[#f59e0b]', w: '75%', desc: 'Dangerous conditions detected', icon: 'warning' },
    4: { label: 'CRITICAL', color: 'text-[#ef4444]', border: 'border-[#ef4444]/20', bg: 'bg-[#ef4444]/10', bar: 'bg-[#ef4444]', w: '100%', desc: 'Severe accident risk — high alert', icon: 'dangerous' },
  }

  const c = config[rank]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-end mb-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#8b909a] text-[13px] font-medium">Interactive modeling playground</span>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Live Simulation
          </h1>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => { setTemperature(72); setVisibility(10.0); }}
            className="pill-btn !py-1.5 !px-3 !bg-[#161920]"
          >
            <span className="material-symbols-outlined text-[16px]">restart_alt</span> Reset
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {/* Controls */}
        <div className="lg:col-span-2 glass-card p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-white font-semibold text-[15px] mb-1">Atmospheric Variables</h3>
              <p className="text-[#8b909a] text-[12px]">Adjust inputs to see predictions</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#1e222b] flex items-center justify-center cursor-pointer hover:bg-[#2a2e39] transition-colors">
              <span className="material-symbols-outlined text-[#8b909a] text-[16px]">tune</span>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-[#8b909a] text-[12px] font-semibold uppercase tracking-wider">Temperature</label>
                <span className="font-data-mono text-[13px] font-bold text-white bg-[#1e222b] border border-[#2a2e39] px-3 py-1 rounded-full shadow-sm">{temperature}°F</span>
              </div>
              <input className="w-full" type="range" min="-40" max="120" value={temperature} onChange={(e) => setTemperature(parseInt(e.target.value))} />
              <div className="flex justify-between text-[10px] text-[#8b909a] mt-2 font-data-mono">
                <span>-40°F</span><span>Freezing 32°F</span><span>120°F</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-[#8b909a] text-[12px] font-semibold uppercase tracking-wider">Visibility</label>
                <span className="font-data-mono text-[13px] font-bold text-white bg-[#1e222b] border border-[#2a2e39] px-3 py-1 rounded-full shadow-sm">{visibility} mi</span>
              </div>
              <input className="w-full" type="range" min="0" max="10" step="0.1" value={visibility} onChange={(e) => setVisibility(parseFloat(e.target.value))} />
              <div className="flex justify-between text-[10px] text-[#8b909a] mt-2 font-data-mono">
                <span>0 mi</span><span>5 mi</span><span>10 mi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Output */}
        <div className="lg:col-span-3 glass-card p-6 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500 min-h-[380px]">
          {/* Subtle background highlight based on rank */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-10 transition-colors duration-500" style={{ backgroundColor: c.color.replace('text-[', '').replace(']', '') }}></div>

          <div className="absolute top-6 left-6">
            <h3 className="text-white font-semibold text-[15px] mb-1">Inference Output</h3>
            <p className="text-[#8b909a] text-[12px]">Real-time XGBoost result</p>
          </div>

          <div className="flex flex-col items-center text-center mt-12 z-10 w-full max-w-sm">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold mb-6 border ${c.border} ${c.bg} ${c.color} uppercase tracking-widest`}>
              <span className="material-symbols-outlined text-[14px]">{c.icon}</span>
              {c.label} RISK
            </div>

            <div className={`font-data-mono text-[80px] leading-none font-bold transition-colors duration-300 mb-2 ${c.color}`}>
              {rank}
            </div>
            
            <div className="text-[#8b909a] text-[13px] font-medium mb-8">Predicted Severity Level</div>

            <div className="w-full">
              <div className="h-2 w-full bg-[#1e222b] rounded-full overflow-hidden">
                <div className={`h-full transition-all duration-500 rounded-full ${c.bar}`} style={{ width: c.w }}></div>
              </div>
              <div className="flex justify-between mt-2 text-[11px] text-[#8b909a] font-data-mono">
                <span>1</span><span>2</span><span>3</span><span>4</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#2a2e39] w-full">
              <p className={`text-[14px] font-medium ${c.color}`}>{c.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
