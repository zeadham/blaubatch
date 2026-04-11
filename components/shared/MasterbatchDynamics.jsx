'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'

const ASSETS = {
  contrast: '/images/brand-assets/white-black-contrast.png',
  white: '/images/brand-assets/white-tonal.png',
  flurry: '/images/brand-assets/white-flurry.png',
  black: '/images/brand-assets/black-tonal.png',
  pour: '/images/brand-assets/macro-pour.png',
  white3d: '/images/brand-assets/white-3d-backlit.png',
  sustainability: '/images/brand-assets/sustainability-leaf.png',
  resources: '/images/brand-assets/resources-insights.png',
  contact: '/images/brand-assets/contact-partnership.png',
}

export default function MasterbatchDynamics({ 
  variant = 'white', 
  intensity = 1,
  interactive = true,
  className = '' 
}) {
  const containerRef = useRef(null)
  
  // Mouse movement values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smoothing the mouse movement
  const springConfig = { damping: 25, stiffness: 120 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  // Parallax transforms for different layers
  const x1 = useTransform(smoothX, [-500, 500], [-30 * intensity, 30 * intensity])
  const y1 = useTransform(smoothY, [-500, 500], [-30 * intensity, 30 * intensity])
  
  const x2 = useTransform(smoothX, [-500, 500], [15 * intensity, -15 * intensity])
  const y2 = useTransform(smoothY, [-500, 500], [15 * intensity, -15 * intensity])

  const handleMouseMove = (e) => {
    if (!interactive || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const assetUrl = ASSETS[variant] || ASSETS.white

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden w-full h-full min-h-[400px] bg-white flex items-center justify-center ${className}`}
      style={{ perspective: 1000 }}
    >
      {/* Background layer (Ambient / Blurred) */}
      <motion.div 
        style={{ x: x1, y: y1, z: -100, filter: 'blur(12px) opacity(0.4)' }}
        className="absolute inset-0 pointer-events-none"
      >
        <div 
          className="w-full h-full bg-no-repeat bg-center bg-cover scale-125"
          style={{ backgroundImage: `url(${assetUrl})` }}
        />
      </motion.div>

      {/* Middle layer (Subtle Parallax) */}
      <motion.div 
        style={{ x: x2, y: y2, z: 50, filter: 'blur(4px) opacity(0.7)' }}
        className="absolute inset-0 pointer-events-none"
      >
        <div 
          className="w-full h-full bg-no-repeat bg-center bg-cover scale-110"
          style={{ backgroundImage: `url(${assetUrl})` }}
        />
      </motion.div>

      {/* Foreground layer (Main Asset / Sharp) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full h-full max-w-[1200px]"
      >
        <motion.img 
          src={assetUrl} 
          alt="Masterbatch Visual"
          className="w-full h-full object-cover rounded-xl"
          style={{ 
            boxShadow: '0 30px 60px -12px rgba(0,0,0,0.15), 0 18px 36px -18px rgba(0,0,0,0.2)',
          }}
        />
      </motion.div>

      {/* Ambient Overlay for text contrast */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-white/40 via-transparent to-white/20" />
    </div>
  )
}
