'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, ShieldCheck, Clock, Truck } from 'lucide-react'
import QuoteForm from '@/components/shared/QuoteForm'

const TRUST_POINTS = [
  { icon: Clock,        text: 'Quote within 24 hours' },
  { icon: ShieldCheck,  text: 'ISO 9001-aligned, TDS & CoA with every order' },
  { icon: Truck,        text: '25 kg bags & FIBC big bags, MENA + Europe' },
]

export default function LandingCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="quote" style={{
      background: 'linear-gradient(160deg, #0E1530 0%, #141B3E 60%, #1a2550 100%)',
      padding: '100px 48px',
    }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Two-column layout */}
        <div id="landing-cta-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 10,
                fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
                color: '#2B8DD0', border: '1px solid rgba(43,141,208,0.4)',
                borderRadius: 4, padding: '4px 12px', marginBottom: 20,
              }}
            >Get Started</motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 }}
              style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 900,
                fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.07,
                letterSpacing: '-0.03em', marginBottom: 20, color: '#FFFFFF',
              }}
            >
              Ready to optimise your<br />
              <span style={{ color: '#2B8DD0' }}>masterbatch supply?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.16 }}
              style={{
                fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8,
                marginBottom: 40, maxWidth: 440,
              }}
            >
              Send your specification and our technical team will respond with a grade recommendation and competitive quote — typically within the same business day.
            </motion.p>

            {/* Trust points */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.24 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 48 }}
            >
              {TRUST_POINTS.map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: 8, flexShrink: 0,
                    background: 'rgba(43,141,208,0.15)', border: '1px solid rgba(43,141,208,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={15} color="#2B8DD0" />
                  </div>
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.70)', fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </motion.div>

            {/* Contact cards */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.32 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
            >
              {[
                { icon: Mail,   label: 'Email',  val: 'info@blaubatch.com',                 href: 'mailto:info@blaubatch.com' },
                { icon: Phone,  label: 'Phone',  val: '+2 0102 222 7723',                    href: 'tel:+201022227723' },
                { icon: MapPin, label: 'Office', val: 'Arkan Plaza, Sheikh Zayed City, Giza', href: '#' },
              ].map(({ icon: Icon, label, val, href }) => (
                <a key={label} href={href} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 16px',
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 10, transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(43,141,208,0.1)'; e.currentTarget.style.borderColor = 'rgba(43,141,208,0.3)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
                >
                  <div style={{
                    width: 34, height: 34, borderRadius: 8, flexShrink: 0,
                    background: 'rgba(43,141,208,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={14} color="#2B8DD0" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 2 }}>{label}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>{val}</div>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — embedded form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <QuoteForm
              step1Title="Request a Quote"
              step1Sub="We respond within 24 hours — usually the same business day."
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #landing-cta-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 640px) {
          #quote { padding: 64px 20px !important; }
        }
      `}</style>
    </section>
  )
}
