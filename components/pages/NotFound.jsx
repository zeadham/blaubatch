'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Home } from 'lucide-react'


export default function NotFound() {
  return (
    <>
      <section style={{
        minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: `radial-gradient(ellipse 60% 80% at 70% 50%, rgba(43,141,208,0.08) 0%, transparent 60%), #F7F8FC`,
        padding: '120px 48px 80px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 520 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(80px, 15vw, 140px)', fontWeight: 900, lineHeight: 1, background: 'linear-gradient(135deg, rgba(43,141,208,0.35), rgba(43,141,208,0.15))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 8 }}
          >404</motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#D4840A', border: '1px solid rgba(212,132,10,0.35)', borderRadius: 4, padding: '4px 12px', display: 'inline-block', marginBottom: 20 }}>Page Not Found</div>
            <h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 14, lineHeight: 1.15, color: '#141B3E' }}>This page doesn't exist</h1>
            <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.55)', lineHeight: 1.8, marginBottom: 32 }}>The page you're looking for may have been moved, renamed, or never existed. Try one of the links below.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 22px', background: '#2B8DD0', color: '#fff', borderRadius: 8, fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase', transition: 'all 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(43,141,208,0.3)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
              ><Home size={13} /> Go Home</Link>
              <Link href="/fmpe" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 22px', background: 'rgba(20,27,62,0.05)', color: '#141B3E', border: '1px solid rgba(20,27,62,0.12)', borderRadius: 8, fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', transition: 'all 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(20,27,62,0.25)'; e.currentTarget.style.background = 'rgba(20,27,62,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(20,27,62,0.12)'; e.currentTarget.style.background = 'rgba(20,27,62,0.05)' }}
              >FMPE Series <ArrowRight size={13} /></Link>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 22px', background: 'rgba(20,27,62,0.05)', color: '#141B3E', border: '1px solid rgba(20,27,62,0.12)', borderRadius: 8, fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', transition: 'all 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(20,27,62,0.25)'; e.currentTarget.style.background = 'rgba(20,27,62,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(20,27,62,0.12)'; e.currentTarget.style.background = 'rgba(20,27,62,0.05)' }}
              >Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  )
}
