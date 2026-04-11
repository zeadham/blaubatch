'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

const CYCLE = [
  { name: 'Filler', color: '#D4840A' },
  { name: 'White', color: '#23447A' },
  { name: 'Black', color: '#141B3E' },
  { name: 'Colour', color: '#2B8DD0' },
  { name: 'Additive', color: '#2B8DD0' },
]

const STATS = [
  { n: '6', label: 'Product Lines' },
  { n: 'MENA', label: '& Europe' },
  { n: 'ISO', label: '9001 Aligned' },
  { n: '100%', label: 'Quality Assured' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % CYCLE.length), 3200)
    return () => clearInterval(t)
  }, [])

  const p = CYCLE[active]

  return (
    <section style={{
      minHeight: '100vh',
      position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'flex-end',
    }}>
      {/* Full-bleed background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url("/images/heroes/home.png")',
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />

      {/* White fade — left to transparent right */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.92) 18%, rgba(255,255,255,0.55) 36%, transparent 52%)',
      }} />

      {/* Subtle bottom lift */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(255,255,255,0.30) 0%, transparent 30%)',
      }} />

      {/* Large B mark — right side watermark */}
      <div style={{
        position: 'absolute', right: '-4%', top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 0, pointerEvents: 'none',
        opacity: 0.10,
      }}>
        <img src="/logo-mark.png" alt="" style={{ height: '85vh', objectFit: 'contain', display: 'block' }} />
      </div>

      {/* Content — bottom-left */}
      <div style={{
        position: 'relative', zIndex: 1,
        padding: '0 96px 72px',
      }}>

        {/* Wordmark + region tag */}
        <motion.div {...fadeUp(0.05)} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28, flexWrap: 'wrap' }}>
          <img src="/wordmark-white-on-navy.svg" alt="Blau Batch" style={{ height: 36, borderRadius: 6 }} />
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            border: '1px solid rgba(43,141,208,0.35)', borderRadius: 20,
            padding: '5px 14px',
            fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800,
            letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0',
            background: 'rgba(43,141,208,0.08)',
          }}>
            <span style={{ width: 6, height: 6, background: '#2B8DD0', borderRadius: '50%', display: 'inline-block', animation: 'heroPulse 2s ease-in-out infinite' }} />
            Egypt · MENA · Europe
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1 {...fadeUp(0.12)} style={{
          fontFamily: 'Inter, sans-serif', fontWeight: 900,
          fontSize: 'clamp(36px, 5vw, 68px)', lineHeight: 1.03,
          letterSpacing: '-0.03em', margin: '0 0 22px',
          maxWidth: 680, color: '#141B3E',
        }}>
          Egypt&apos;s{' '}
          <AnimatePresence mode="wait">
            <motion.span
              key={active}
              initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(8px)' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ color: p.color, display: 'inline-block' }}
            >
              {p.name}
            </motion.span>
          </AnimatePresence>
          <br />Masterbatch Partner
        </motion.h1>

        {/* Sub */}
        <motion.p {...fadeUp(0.2)} style={{
          fontFamily: 'Open Sans, sans-serif',
          fontSize: 19, color: 'rgba(20,27,62,0.65)', lineHeight: 1.75,
          maxWidth: 520, marginBottom: 40, fontWeight: 400,
        }}>
          One supplier. Full spectrum. Blau Batch manufactures Filler Masterbatch and distributes the complete Coraplast range across MENA and Europe.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.28)} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 56 }}>
          <a href="/contact#quote-form" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 30px', background: '#2B8DD0', color: '#fff',
            borderRadius: 10, fontFamily: 'Inter, sans-serif', fontSize: 13,
            fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(43,141,208,0.4)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
          >
            Request a Quote <ArrowRight size={14} />
          </a>
          <a href="https://wa.me/201022227723" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 30px', background: 'rgba(37,211,102,0.1)', color: '#16A34A',
            borderRadius: 10, fontFamily: 'Inter, sans-serif', fontSize: 13,
            fontWeight: 700, letterSpacing: '0.06em',
            border: '1px solid rgba(37,211,102,0.35)', transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.18)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.1)'; e.currentTarget.style.transform = 'none' }}
          >
            <MessageCircle size={14} /> WhatsApp Us
          </a>
          <a href="#products" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 28px', background: 'rgba(20,27,62,0.06)', color: '#141B3E',
            borderRadius: 10, fontFamily: 'Inter, sans-serif', fontSize: 13,
            fontWeight: 700, letterSpacing: '0.04em',
            border: '1px solid rgba(20,27,62,0.18)', transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(20,27,62,0.12)'; e.currentTarget.style.borderColor = 'rgba(20,27,62,0.3)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(20,27,62,0.06)'; e.currentTarget.style.borderColor = 'rgba(20,27,62,0.18)' }}
          >
            View Products
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div {...fadeUp(0.36)} style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1px', maxWidth: 520,
          background: 'rgba(20,27,62,0.08)',
          borderRadius: 14, overflow: 'hidden',
          border: '1px solid rgba(20,27,62,0.1)',
        }}>
          {STATS.map(s => (
            <div key={s.label} style={{
              padding: '18px 10px', textAlign: 'center',
              background: 'rgba(255,255,255,0.85)',
            }}>
              <div style={{
                fontFamily: 'Inter, sans-serif', fontSize: 20, fontWeight: 900,
                color: '#141B3E', lineHeight: 1, letterSpacing: '-0.02em',
              }}>{s.n}</div>
              <div style={{
                fontSize: 9, color: 'rgba(20,27,62,0.5)',
                textTransform: 'uppercase', letterSpacing: '0.08em',
                fontFamily: 'Inter, sans-serif', marginTop: 5, fontWeight: 700,
              }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @media (max-width: 768px) {
          section > div:last-child { padding: 0 20px 56px !important; }
          section > div:last-child > div:last-child { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  )
}
