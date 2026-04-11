'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, ArrowRight } from 'lucide-react'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function PageHero({
  breadcrumb, badge, badgeColor = '#D4840A', tag,
  title, titleAccent, sub, cta,
  bgImage = '/images/heroes/home.png',
}) {
  return (
    <section data-pagehero="" style={{
      position: 'relative', overflow: 'hidden',
      minHeight: '65vh',
      marginTop: 68,
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Full-bleed background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("${bgImage}")`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />

      {/* White fade — left side */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.92) 18%, rgba(255,255,255,0.55) 36%, transparent 52%)',
      }} />

      {/* Subtle bottom fade so content area is always readable */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(255,255,255,0.35) 0%, transparent 30%)',
      }} />

      {/* Breadcrumb — top-left, below navbar */}
      {breadcrumb && (
        <motion.div
          {...fade(0.04)}
          style={{
            position: 'relative', zIndex: 1,
            marginTop: 80, padding: '0 96px',
            display: 'flex', alignItems: 'center', gap: 6,
            fontSize: 11, color: 'rgba(20,27,62,0.45)',
            fontFamily: 'Inter, sans-serif', fontWeight: 600,
            letterSpacing: '0.04em', textTransform: 'uppercase',
          }}
        >
          <Link href="/" style={{ color: 'rgba(20,27,62,0.45)', transition: 'color 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#141B3E'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(20,27,62,0.45)'}
          >Home</Link>
          <ChevronRight size={11} />
          {breadcrumb.parent && (
            <><Link href={breadcrumb.parentHref || '#'} style={{ color: 'rgba(20,27,62,0.45)', transition: 'color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#141B3E'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(20,27,62,0.45)'}
            >{breadcrumb.parent}</Link><ChevronRight size={11} /></>
          )}
          <span style={{ color: '#141B3E' }}>{breadcrumb.current}</span>
        </motion.div>
      )}

      {/* Spacer — pushes content to bottom */}
      <div style={{ flex: 1 }} />

      {/* Content — pinned to bottom-left */}
      <div style={{
        position: 'relative', zIndex: 1,
        padding: '0 96px 52px',
        maxWidth: 760,
      }}>
        {/* Badge */}
        {badge && (
          <motion.div {...fade(0.06)} style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: badgeColor, border: `1px solid ${badgeColor}50`,
            borderRadius: 20, padding: '5px 14px', marginBottom: 22,
            background: `${badgeColor}12`,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: badgeColor, display: 'inline-block' }} />
            {badge}
          </motion.div>
        )}

        {/* Tag */}
        {tag && (
          <motion.div {...fade(0.06)} style={{
            display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 10,
            fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase',
            color: '#2B8DD0', border: '1px solid rgba(43,141,208,0.3)',
            borderRadius: 6, padding: '4px 14px', marginBottom: 22,
            background: 'rgba(43,141,208,0.08)',
          }}>{tag}</motion.div>
        )}

        {/* Title */}
        <motion.h1 {...fade(0.10)} style={{
          fontFamily: 'Inter, sans-serif', fontWeight: 900,
          fontSize: 'clamp(34px, 4.5vw, 60px)', lineHeight: 1.05,
          letterSpacing: '-0.03em', marginBottom: 18, color: '#141B3E',
        }}>
          {title}
          {titleAccent && (
            <><br /><span style={{ color: badgeColor }}>{titleAccent}</span></>
          )}
        </motion.h1>

        {/* Sub */}
        {sub && (
          <motion.p {...fade(0.17)} style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: 18, color: 'rgba(20,27,62,0.65)', lineHeight: 1.8,
            maxWidth: 580, fontWeight: 400,
          }}>{sub}</motion.p>
        )}

        {/* CTA buttons */}
        {cta && (
          <motion.div {...fade(0.24)} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 36 }}>
            <a href={cta.primary.href} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 28px', background: '#2B8DD0', color: '#fff',
              borderRadius: 10, fontFamily: 'Inter, sans-serif', fontSize: 12,
              fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(43,141,208,0.35)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
            >
              {cta.primary.label} <ArrowRight size={14} />
            </a>
            {cta.secondary && (
              <a href={cta.secondary.href} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 26px', background: 'rgba(20,27,62,0.06)', color: '#141B3E',
                borderRadius: 10, fontFamily: 'Inter, sans-serif', fontSize: 12,
                fontWeight: 700, letterSpacing: '0.04em',
                border: '1px solid rgba(20,27,62,0.18)', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(20,27,62,0.12)'; e.currentTarget.style.borderColor = 'rgba(20,27,62,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(20,27,62,0.06)'; e.currentTarget.style.borderColor = 'rgba(20,27,62,0.18)' }}
              >
                {cta.secondary.label}
              </a>
            )}
          </motion.div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          section[data-pagehero] { min-height: 60svh !important; margin-top: 60px !important; }
          section[data-pagehero] > div:nth-child(4) { padding: 0 20px 40px !important; }
          section[data-pagehero] > div:nth-child(3) { margin-top: 16px !important; padding: 0 20px !important; }
        }
      `}</style>
    </section>
  )
}
