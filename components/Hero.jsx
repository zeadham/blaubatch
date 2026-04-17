'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const CYCLE = [
  { name: 'Filler', color: '#D4840A' },
  { name: 'White', color: '#23447A' },
  { name: 'Black', color: '#141B3E' },
  { name: 'Colour', color: '#2B8DD0' },
  { name: 'Additive', color: '#2B8DD0' },
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
    <section data-hero="" style={{
      height: 'calc(100vh - 88px)',
      marginTop: 88,
      display: 'flex',
      flexDirection: 'row',
    }}>

      {/* LEFT — text panel */}
      <div style={{
        flex: '0 0 40%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px 64px 80px 96px',
        background: '#ffffff',
        zIndex: 1,
      }}>

        {/* Tag */}
        <motion.div {...fadeUp(0.05)} style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          border: '1px solid rgba(43,141,208,0.35)', borderRadius: 20,
          padding: '5px 14px', marginBottom: 28,
          fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800,
          letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0',
          background: 'rgba(43,141,208,0.08)', alignSelf: 'flex-start',
        }}>
          <span style={{ width: 6, height: 6, background: '#2B8DD0', borderRadius: '50%', display: 'inline-block', animation: 'heroPulse 2s ease-in-out infinite' }} />
          Egypt · MENA · Europe
        </motion.div>

        {/* H1 */}
        <motion.h1 {...fadeUp(0.12)} style={{
          fontFamily: 'Inter, sans-serif', fontWeight: 900,
          fontSize: 'clamp(36px, 4vw, 64px)', lineHeight: 1.03,
          letterSpacing: '-0.03em', margin: '0 0 22px',
          color: '#141B3E',
        }}>
          Full-Range{' '}
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
          fontSize: 18, color: 'rgba(20,27,62,0.65)', lineHeight: 1.75,
          marginBottom: 40, fontWeight: 400, maxWidth: 480,
        }}>
          One supplier. Full spectrum. Blau Batch manufactures Filler Masterbatch and distributes the complete Coraplast range across MENA and Europe.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.28)} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="/contact#quote-form" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 30px', background: '#2B8DD0', color: '#fff',
            borderRadius: 10, fontFamily: 'Inter, sans-serif', fontSize: 14,
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
            padding: '14px 30px', background: '#25D366', color: '#fff',
            borderRadius: 10, fontFamily: 'Inter, sans-serif', fontSize: 14,
            fontWeight: 700, letterSpacing: '0.06em',
            border: '1px solid #25D366', transition: 'all 0.2s',
            boxShadow: '0 4px 14px rgba(37,211,102,0.35)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#20bb5a'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,211,102,0.5)' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(37,211,102,0.35)' }}
          >
            <MessageCircle size={14} /> WhatsApp Us
          </a>
        </motion.div>
      </div>

      {/* RIGHT — image panel */}
      <div style={{
        flex: '0 0 60%',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <Image
          src="/images/heroes/home.webp"
          alt="Masterbatch pellets"
          fill
          priority
          sizes="60vw"
          style={{ objectFit: 'cover', objectPosition: '15% center' }}
        />
        {/* Fade to white on the left edge — blends into the text panel */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.4) 20%, transparent 45%)',
          pointerEvents: 'none',
        }} />
      </div>

      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @media (max-width: 768px) {
          section[data-hero] { flex-direction: column !important; min-height: auto !important; margin-top: 78px !important; }
          section[data-hero] > div:first-child { flex: none !important; padding: 48px 24px !important; }
          section[data-hero] > div:last-child { flex: none !important; height: 280px !important; }
        }
      `}</style>
    </section>
  )
}
