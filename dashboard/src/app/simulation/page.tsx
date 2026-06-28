'use client'

import { useState } from 'react'

export default function SimulationPage() {
  const [temperature, setTemperature] = useState(72)
  const [visibility, setVisibility] = useState(10.0)

  let rank = 1
  if (temperature < 32 || temperature > 100 || visibility < 2) rank = 4
  else if (temperature < 45 || visibility < 5) rank = 3
  else if (temperature < 60 || visibility < 8) rank = 2

  const config: Record<number, { label: string; color: string; bg: string; border: string; bar: string; w: string; desc: string; icon: string }> = {
    1: { label: 'LOW', color: 'text-secondary', bg: 'bg-secondary/10', border: 'border-secondary/20', bar: 'accent-bar-secondary', w: '25%', desc: 'Minor fender-bender conditions', icon: 'check_circle' },
    2: { label: 'MODERATE', color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20', bar: 'accent-bar-primary', w: '50%', desc: 'Elevated risk — exercise caution', icon: 'info' },
    3: { label: 'HIGH', color: 'text-tertiary', bg: 'bg-tertiary/10', border: 'border-tertiary/20', bar: 'accent-bar-tertiary', w: '75%', desc: 'Dangerous conditions detected', icon: 'warning' },
    4: { label: 'CRITICAL', color: 'text-error', bg: 'bg-error/10', border: 'border-error/20', bar: 'accent-bar-error', w: '100%', desc: 'Severe accident risk — high alert', icon: 'dangerous' },
  }

  const c = config[rank]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-on-surface mb-1">Simulation</h1>
        <p className="text-on-surface-variant text-sm">Adjust atmospheric variables to observe real-time severity predictions.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Controls */}
        <div className="lg:col-span-2 glass-card p-5">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-base">tune</span>
            </div>
            <div>
              <h3 className="text-on-surface font-semibold text-sm">Input Controls</h3>
              <p className="text-on-surface-variant text-xs">Atmospheric variables</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Temperature */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-on-surface-variant text-[11px] font-semibold uppercase tracking-wider">Temperature</label>
                <span className="font-data-mono text-primary text-sm font-bold bg-primary/10 px-2 py-0.5 rounded border border-primary/20">{temperature}°F</span>
              </div>
              <input className="w-full" type="range" min="-40" max="120" value={temperature} onChange={(e) => setTemperature(parseInt(e.target.value))} />
              <div className="flex justify-between text-[10px] text-on-surface-variant/50 mt-1 font-data-mono">
                <span>-40°F</span><span>120°F</span>
              </div>
            </div>

            {/* Visibility */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-on-surface-variant text-[11px] font-semibold uppercase tracking-wider">Visibility</label>
                <span className="font-data-mono text-secondary text-sm font-bold bg-secondary/10 px-2 py-0.5 rounded border border-secondary/20">{visibility} mi</span>
              </div>
              <input className="w-full" type="range" min="0" max="10" step="0.1" value={visibility} onChange={(e) => setVisibility(parseFloat(e.target.value))} />
              <div className="flex justify-between text-[10px] text-on-surface-variant/50 mt-1 font-data-mono">
                <span>0 mi</span><span>10 mi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Output */}
        <div className="lg:col-span-3 glass-card p-5 relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-48 h-48 bg-primary/5 rounded-full blur-[60px] pointer-events-none"></div>

          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-base">monitoring</span>
            </div>
            <div>
              <h3 className="text-on-surface font-semibold text-sm">Inference Output</h3>
              <p className="text-on-surface-variant text-xs">Real-time prediction</p>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center py-4">
            {/* Badge */}
            <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${c.bg} border ${c.border} ${c.color} mb-4`}>
              <span className="material-symbols-outlined text-sm">{c.icon}</span>
              {c.label}
            </div>

            {/* Big Number */}
            <div className={`font-data-mono text-6xl font-bold ${c.color} transition-colors duration-300 mb-1`}>{rank}</div>
            <div className="text-on-surface-variant text-xs mb-4">Predicted Severity Level</div>

            {/* Bar */}
            <div className="w-full max-w-sm">
              <div className="h-2.5 w-full bg-white/[0.04] rounded-full overflow-hidden border border-white/[0.06]">
                <div className={`h-full transition-all duration-500 rounded-full ${c.bar}`} style={{ width: c.w }}></div>
              </div>
              <div className="flex justify-between mt-1 text-[10px] text-on-surface-variant/50 font-data-mono">
                <span>1</span><span>2</span><span>3</span><span>4</span>
              </div>
            </div>

            <p className={`text-xs font-medium mt-3 ${c.color}`}>{c.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
