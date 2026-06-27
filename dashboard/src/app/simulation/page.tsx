'use client'

import { useState } from 'react'

export default function SimulationPage() {
  const [temperature, setTemperature] = useState(72)
  const [visibility, setVisibility] = useState(10.0)

  // Simple mock logic for severity change
  let rank = 1
  if (temperature < 32 || temperature > 100 || visibility < 2) rank = 4
  else if (temperature < 45 || visibility < 5) rank = 3
  else if (temperature < 60 || visibility < 8) rank = 2

  // Update UI colors based on rank
  const colors: Record<number, { text: string; bg: string; w: string }> = {
    1: { text: 'text-secondary', bg: 'bg-secondary', w: '25%' },
    2: { text: 'text-primary', bg: 'bg-primary', w: '50%' },
    3: { text: 'text-tertiary', bg: 'bg-tertiary-container', w: '75%' },
    4: { text: 'text-error', bg: 'bg-error-container', w: '100%' }
  }

  return (
    <section className="glass-card rounded-xl overflow-hidden border border-outline-variant">
      <div className="bg-surface-container px-md py-sm border-b border-outline-variant flex items-center justify-between">
        <h3 className="font-headline-sm text-headline-sm text-on-surface">Prediction Playground</h3>
        <span className="material-symbols-outlined text-on-surface-variant cursor-help">info</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Sliders Side */}
        <div className="p-xl border-r border-outline-variant space-y-lg">
          <div className="space-y-md">
            <div className="flex justify-between items-center">
              <label className="font-label-caps text-label-caps text-on-surface-variant">TEMPERATURE (°F)</label>
              <span className="font-data-mono text-primary">{temperature}</span>
            </div>
            <input 
              className="w-full" 
              type="range" 
              min="-40" 
              max="120" 
              value={temperature}
              onChange={(e) => setTemperature(parseInt(e.target.value))}
            />
            <div className="flex justify-between text-[10px] text-on-surface-variant opacity-50">
              <span>-40°F</span>
              <span>120°F</span>
            </div>
          </div>
          <div className="space-y-md">
            <div className="flex justify-between items-center">
              <label className="font-label-caps text-label-caps text-on-surface-variant">VISIBILITY (MI)</label>
              <span className="font-data-mono text-secondary">{visibility}</span>
            </div>
            <input 
              className="w-full" 
              type="range" 
              min="0" 
              max="10" 
              step="0.1" 
              value={visibility}
              onChange={(e) => setVisibility(parseFloat(e.target.value))}
            />
            <div className="flex justify-between text-[10px] text-on-surface-variant opacity-50">
              <span>0 MI</span>
              <span>10 MI</span>
            </div>
          </div>
        </div>

        {/* Output Side */}
        <div className="relative bg-surface-container-low p-xl flex flex-col items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 space-y-sm">
            <span className="font-label-caps text-label-caps text-on-surface-variant">INFERENCE OUTPUT</span>
            <h2 className="font-display-lg text-display-lg">Predicted Severity: <span className={`transition-colors duration-300 ${colors[rank].text}`}>{rank}</span></h2>
            <div className="h-4 w-64 bg-surface-variant rounded-full overflow-hidden mx-auto border border-outline-variant mt-md">
              <div 
                className={`h-full transition-all duration-500 ${colors[rank].bg}`} 
                style={{ width: colors[rank].w }}
              ></div>
            </div>
            <p className="text-body-sm text-on-surface-variant max-w-xs mx-auto pt-sm">Based on current atmospheric conditions and historical collision patterns.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
