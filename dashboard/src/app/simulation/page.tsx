'use client'

import { useState } from 'react'

export default function SimulationPage() {
  const [temperature, setTemperature] = useState(72)
  const [visibility, setVisibility] = useState(10.0)

  let rank = 1
  if (temperature < 32 || temperature > 100 || visibility < 2) rank = 4
  else if (temperature < 45 || visibility < 5) rank = 3
  else if (temperature < 60 || visibility < 8) rank = 2

  const config: Record<number, { label: string; color: string; bg: string; border: string; bar: string; w: string; desc: string; icon: string; glow: string }> = {
    1: { label: 'LOW', color: 'text-secondary', bg: 'bg-secondary/12', border: 'border-secondary/25', bar: 'accent-bar-secondary', w: '25%', desc: 'Minor fender-bender conditions', icon: 'check_circle', glow: 'shadow-[0_0_30px_rgba(45,212,191,0.25)]' },
    2: { label: 'MODERATE', color: 'text-primary', bg: 'bg-primary/12', border: 'border-primary/25', bar: 'accent-bar-primary', w: '50%', desc: 'Elevated risk — exercise caution', icon: 'info', glow: 'shadow-[0_0_30px_rgba(129,140,248,0.25)]' },
    3: { label: 'HIGH', color: 'text-tertiary', bg: 'bg-tertiary/12', border: 'border-tertiary/25', bar: 'accent-bar-tertiary', w: '75%', desc: 'Dangerous conditions detected', icon: 'warning', glow: 'shadow-[0_0_30px_rgba(251,191,36,0.25)]' },
    4: { label: 'CRITICAL', color: 'text-error', bg: 'bg-error/12', border: 'border-error/25', bar: 'accent-bar-error', w: '100%', desc: 'Severe accident risk — high alert', icon: 'dangerous', glow: 'shadow-[0_0_30px_rgba(248,113,113,0.30)]' },
  }

  const c = config[rank]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="pb-2 border-b border-white/[0.06]">
        <h1 className="text-3xl font-bold text-on-surface tracking-tight mb-1">Simulation</h1>
        <p className="text-on-surface-variant text-sm">Adjust atmospheric variables to observe real-time severity predictions.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Controls */}
        <div className="lg:col-span-2 glass-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-lg">tune</span>
            </div>
            <div>
              <h3 className="text-on-surface font-bold text-base">Input Controls</h3>
              <p className="text-on-surface-variant text-xs">Atmospheric variables</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">Temperature</label>
                <span className="font-data-mono text-sm font-bold text-primary bg-primary/12 border border-primary/20 px-2.5 py-1 rounded-lg">{temperature}°F</span>
              </div>
              <input className="w-full" type="range" min="-40" max="120" value={temperature} onChange={(e) => setTemperature(parseInt(e.target.value))} />
              <div className="flex justify-between text-[10px] text-on-surface-variant/50 mt-1.5 font-data-mono">
                <span>-40°F</span><span>Freezing 32°F</span><span>120°F</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">Visibility</label>
                <span className="font-data-mono text-sm font-bold text-secondary bg-secondary/12 border border-secondary/20 px-2.5 py-1 rounded-lg">{visibility} mi</span>
              </div>
              <input className="w-full" type="range" min="0" max="10" step="0.1" value={visibility} onChange={(e) => setVisibility(parseFloat(e.target.value))} />
              <div className="flex justify-between text-[10px] text-on-surface-variant/50 mt-1.5 font-data-mono">
                <span>0 mi</span><span>5 mi</span><span>10 mi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Output */}
        <div className={`lg:col-span-3 glass-card p-6 relative overflow-hidden transition-shadow duration-500 ${c.glow}`}>
          <div className="absolute -right-20 -top-20 w-60 h-60 bg-primary/6 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-secondary/6 rounded-full blur-[60px] pointer-events-none"></div>

          <div className="flex items-center gap-3 mb-8 relative z-10">
            <div className="w-9 h-9 rounded-xl bg-secondary/15 border border-secondary/25 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-lg">monitoring</span>
            </div>
            <div>
              <h3 className="text-on-surface font-bold text-base">Inference Output</h3>
              <p className="text-on-surface-variant text-xs">Real-time XGBoost prediction</p>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center py-4">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-5 ${c.bg} border ${c.border} ${c.color}`}>
              <span className="material-symbols-outlined text-sm">{c.icon}</span>
              {c.label}
            </div>

            <div className={`font-data-mono text-7xl font-bold transition-colors duration-300 mb-1 ${c.color}`}>{rank}</div>
            <div className="text-on-surface-variant text-xs mb-5">Predicted Severity Level</div>

            <div className="w-full max-w-xs">
              <div className="h-2.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
                <div className={`h-full transition-all duration-500 rounded-full ${c.bar}`} style={{ width: c.w }}></div>
              </div>
              <div className="flex justify-between mt-1.5 text-[10px] text-on-surface-variant/50 font-data-mono">
                <span>1</span><span>2</span><span>3</span><span>4</span>
              </div>
            </div>

            <p className={`text-sm font-semibold mt-4 ${c.color}`}>{c.desc}</p>
            <p className="text-xs text-on-surface-variant/60 mt-1.5 max-w-xs">Based on atmospheric conditions and historical collision patterns.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
