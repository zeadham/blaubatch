'use client'

import { useState } from 'react'
import MasterbatchDynamics from '@/components/shared/MasterbatchDynamics'
import { motion } from 'framer-motion'

const VARIANTS = [
  { id: 'white', name: 'White Tonal', description: 'Minimalist high-key aesthetic.' },
  { id: 'contrast', name: 'Classic Contrast', description: 'White pellets on deep black.' },
  { id: 'flurry', name: 'Dense Flurry', description: 'High-density pellet clusters.' },
  { id: 'black', name: 'Stealth Black', description: 'Premium black-on-black specular highlights.' },
  { id: 'pour', name: 'Macro Pour', description: 'Dynamic front-angle motion.' },
  { id: 'white3d', name: '3D Backlit White', description: 'Enhanced volume with back and side lighting.' },
]

export default function BrandVisualsPage() {
  const [activeVariant, setActiveVariant] = useState('white')

  return (
    <div className="min-h-screen bg-neutral-50 p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-navy-950 mb-4 tracking-tight">
            Brand Visual Dynamics
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Interactive, mouse-reactive components designed for the Blau Batch "Modern Premium Light" aesthetic. 
            Move your mouse over the visual to test the parallax layers.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Controls */}
          <div className="lg:col-span-1 space-y-4">
            {VARIANTS.map((v) => (
              <button
                key={v.id}
                onClick={() => setActiveVariant(v.id)}
                className={`w-full text-left p-4 rounded-xl transition-all border ${
                  activeVariant === v.id 
                    ? 'bg-white border-blue-500 shadow-lg ring-1 ring-blue-500/20' 
                    : 'bg-neutral-100 border-neutral-200 hover:bg-white hover:border-neutral-300'
                }`}
              >
                <div className={`font-bold text-sm mb-1 ${activeVariant === v.id ? 'text-blue-600' : 'text-navy-950'}`}>
                  {v.name}
                </div>
                <div className="text-xs text-neutral-500 leading-relaxed">
                  {v.description}
                </div>
              </button>
            ))}
          </div>

          {/* Visual Canvas */}
          <div className="lg:col-span-3 aspect-video relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-white">
            <MasterbatchDynamics 
              variant={activeVariant} 
              interactive={true} 
              intensity={1.2}
            />
            
            {/* Legend Overlay */}
            <div className="absolute bottom-8 left-8 z-30 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 pointer-events-none">
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest mr-3">Current Active:</span>
              <span className="text-xs font-bold text-white uppercase tracking-wider">{activeVariant} mode</span>
            </div>
          </div>
        </div>

        {/* Technical Specs */}
        <section className="mt-24 pt-12 border-t border-neutral-200">
          <h2 className="text-2xl font-bold text-navy-950 mb-8">Asset Dynamics Implementation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl border border-neutral-100 shadow-sm">
              <div className="text-blue-600 font-black mb-2 italic">01</div>
              <h3 className="font-bold mb-2">3-Layer Parallax</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Uses blurred background clusters, mid-ground drifting elements, and sharp focus foreground assets to create 3D depth.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-neutral-100 shadow-sm">
              <div className="text-blue-600 font-black mb-2 italic">02</div>
              <h3 className="font-bold mb-2">Spring-Smoothed Input</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Mouse coordinates are processed through Framer Motion springs to ensure organic, fluid movement that mimics physical momentum.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-neutral-100 shadow-sm">
              <div className="text-blue-600 font-black mb-2 italic">03</div>
              <h3 className="font-bold mb-2">High-Pass Post Processing</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Ambient gradient overlays ensure accessibility and text contrast regardless of the underlying pellet texture.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
