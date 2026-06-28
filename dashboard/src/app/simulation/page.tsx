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

  const severityConfig: Record<number, { label: string; color: string; bg: string; border: string; bar: string; w: string; desc: string }> = {
    1: { label: 'LOW', color: 'text-secondary', bg: 'bg-secondary/10', border: 'border-secondary/30', bar: 'accent-bar-secondary', w: '25%', desc: 'Minor fender-bender conditions' },
    2: { label: 'MODERATE', color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/30', bar: 'accent-bar-primary', w: '50%', desc: 'Elevated risk — exercise caution' },
    3: { label: 'HIGH', color: 'text-tertiary', bg: 'bg-tertiary/10', border: 'border-tertiary/30', bar: 'accent-bar-tertiary', w: '75%', desc: 'Dangerous conditions detected' },
    4: { label: 'CRITICAL', color: 'text-error', bg: 'bg-error/10', border: 'border-error/30', bar: 'accent-bar-error', w: '100%', desc: 'Severe accident risk — high alert' },
  }

  const config = severityConfig[rank]

  return (
    <>
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
          <span className="material-symbols-outlined text-sm">science</span>
          LIVE INFERENCE
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight text-on-surface">
          Inference <span className="text-gradient">Playground</span>
        </h1>
        <p className="text-on-surface-variant text-base md:text-lg max-w-2xl leading-relaxed">
          Simulate weather and atmospheric conditions to observe real-time severity predictions from the XGBoost core.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Controls Panel */}
        <div className="glass-card p-6 lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <span className="material-symbols-outlined text-primary text-lg">tune</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Input Controls</h3>
              <p className="text-on-surface-variant text-xs">Adjust atmospheric variables</p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Temperature */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="font-label-caps text-label-caps text-on-surface-variant tracking-widest text-[11px]">TEMPERATURE</label>
                <div className="flex items-center gap-1 bg-primary/10 px-2.5 py-1 rounded-lg border border-primary/20">
                  <span className="font-data-mono text-primary font-bold text-sm">{temperature}</span>
                  <span className="text-primary/60 text-xs">°F</span>
                </div>
              </div>
              <input
                className="w-full"
                type="range"
                min="-40"
                max="120"
                value={temperature}
                onChange={(e) => setTemperature(parseInt(e.target.value))}
              />
              <div className="flex justify-between text-[10px] text-on-surface-variant/60 mt-1.5 font-data-mono">
                <span>-40°F</span>
                <span>120°F</span>
              </div>
            </div>

            {/* Visibility */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="font-label-caps text-label-caps text-on-surface-variant tracking-widest text-[11px]">VISIBILITY</label>
                <div className="flex items-center gap-1 bg-secondary/10 px-2.5 py-1 rounded-lg border border-secondary/20">
                  <span className="font-data-mono text-secondary font-bold text-sm">{visibility}</span>
                  <span className="text-secondary/60 text-xs">mi</span>
                </div>
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
              <div className="flex justify-between text-[10px] text-on-surface-variant/60 mt-1.5 font-data-mono">
                <span>0 mi</span>
                <span>10 mi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Output Panel */}
        <div className="glass-card p-6 lg:col-span-2 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/8 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-secondary/8 rounded-full blur-[60px] pointer-events-none"></div>

          <div className="flex items-center gap-3 mb-8 relative z-10">
            <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
              <span className="material-symbols-outlined text-secondary text-lg">monitoring</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Inference Output</h3>
              <p className="text-on-surface-variant text-xs">Real-time prediction result</p>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center py-6">
            {/* Severity Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${config.bg} border ${config.border} mb-6`}>
              <span className="material-symbols-outlined text-lg">{rank >= 3 ? 'warning' : 'check_circle'}</span>
              <span className={`font-label-caps text-label-caps tracking-widest ${config.color}`}>{config.label} SEVERITY</span>
            </div>

            {/* Big Number */}
            <div className="mb-2">
              <span className="text-on-surface-variant text-sm font-medium">Predicted Level</span>
            </div>
            <div className={`font-data-mono text-7xl font-bold ${config.color} transition-colors duration-300 mb-3`}>
              {rank}
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-md mb-4">
              <div className="h-3 w-full bg-surface-variant/50 rounded-full overflow-hidden border border-outline-variant/30">
                <div
                  className={`h-full transition-all duration-500 rounded-full ${config.bar}`}
                  style={{ width: config.w }}
                ></div>
              </div>
              <div className="flex justify-between mt-1.5 text-[10px] text-on-surface-variant/60 font-data-mono">
                <span>1 — Low</span>
                <span>2</span>
                <span>3</span>
                <span>4 — Critical</span>
              </div>
            </div>

            <p className={`text-sm ${config.color} font-medium`}>{config.desc}</p>
            <p className="text-xs text-on-surface-variant mt-2 max-w-sm">Based on current atmospheric conditions and historical collision patterns.</p>
          </div>
        </div>
      </div>
    </>
  )
}
