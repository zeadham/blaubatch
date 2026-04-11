'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Download } from 'lucide-react'

const GRADES = [
  { series: 'FMPE Series', code: 'FMPE-1070', carrier: 'LDPE/LLDPE', loading: '70%', app: 'Blown film, bags, agricultural film — standard dosage 10–40%', mfi: '2–4 g/10min', badge: 'PE' },
  { series: 'FMPE Series', code: 'FMPE-1075', carrier: 'LDPE/LLDPE', loading: '75%', app: 'Blown film, cast film, injection — dosage 10–35%', mfi: '2–4 g/10min', badge: 'PE' },
  { series: 'FMPE Series', code: 'FMPE-1080', carrier: 'LDPE/LLDPE', loading: '80%', app: 'High-output blown film, extrusion — dosage 5–25%', mfi: '2–4 g/10min', badge: 'PE' },
  { series: 'FMPP Series', code: 'FMPP-1070', carrier: 'PP Homopolymer', loading: '70%', app: 'PP blown film, cast film, raffia — standard dosage 10–40%', mfi: '8–12 g/10min', badge: 'PP' },
  { series: 'FMPP Series', code: 'FMPP-1075', carrier: 'PP Homopolymer', loading: '75%', app: 'Raffia, non-woven, BOPP film — dosage 10–35%', mfi: '8–12 g/10min', badge: 'PP' },
  { series: 'FMPP Series', code: 'FMPP-1080', carrier: 'PP Homopolymer', loading: '80%', app: 'High loading raffia, woven bags, injection — dosage 5–25%', mfi: '8–12 g/10min', badge: 'PP' },
]

const QC_TESTS = [
  'Melt Flow Index (MFI)', 'Ash Content (% CaCO₃)', 'Colour & Appearance',
  'Dispersion Quality', 'Moisture Content', 'Bulk Density',
]

export default function Specs() {
  const headRef = useRef(null)
  const inView = useInView(headRef, { once: true, margin: '-80px' })
  const tableRef = useRef(null)
  const tableInView = useInView(tableRef, { once: true, margin: '-60px' })

  return (
    <section id="specs" style={{ background: '#F5F7FA', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div ref={headRef} style={{ marginBottom: 52 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 11,
              fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--amber)',
              border: '1px solid var(--line)', borderRadius: 6, padding: '4px 14px', marginBottom: 20,
              background: '#fff',
            }}
          >Technical Data</motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.07 }}
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 16, lineHeight: 1.1, color: 'var(--navy)' }}
          >Filler Masterbatch<br />Grade Reference</motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.14 }}
            style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 16, color: 'var(--text)', lineHeight: 1.8, maxWidth: 580 }}
          >
            In-house manufactured grades with full batch traceability. Technical data sheets and certificates of analysis issued with every shipment.
          </motion.p>
        </div>

        <motion.div
          ref={tableRef}
          initial={{ opacity: 0, y: 24 }}
          animate={tableInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: '#fff', border: '1px solid rgba(20,27,62,0.1)',
            borderRadius: 14, overflow: 'hidden', marginBottom: 40,
          }}
        >
          <div style={{
            display: 'grid', gridTemplateColumns: 'minmax(120px, 1fr) 1fr 100px 80px 1.2fr 80px',
            background: 'rgba(20,27,62,0.03)', borderBottom: '1px solid var(--line)',
            padding: '16px 24px',
          }}>
            {['Series', 'Grade Code', 'Carrier', 'Loading', 'Application', 'MFI'].map(h => (
              <div key={h} style={{
                fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 800,
                letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(20,27,62,0.5)',
              }}>{h}</div>
            ))}
          </div>

          {GRADES.map((g, i) => (
            <div key={g.code} style={{
              display: 'grid', gridTemplateColumns: 'minmax(120px, 1fr) 1fr 100px 80px 1.2fr 80px',
              padding: '18px 24px', borderBottom: i < GRADES.length - 1 ? '1px solid var(--line)' : 'none',
              transition: 'background 0.2s', alignItems: 'center',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(20,27,62,0.02)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 700, color: 'rgba(20,27,62,0.6)' }}>{g.series}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 800, color: 'var(--navy)' }}>{g.code}</span>
                <span style={{
                  fontSize: 10, fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase',
                  padding: '3px 8px', borderRadius: 5,
                  background: 'rgba(20,27,62,0.05)',
                  color: 'var(--navy)',
                }}>{g.badge}</span>
              </div>
              <div style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 13, color: 'var(--text)' }}>{g.carrier}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 800, color: 'var(--amber)' }}>{g.loading}</div>
              <div style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 13, color: 'var(--text)', lineHeight: 1.4 }}>{g.app}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, color: 'var(--sky)' }}>{g.mfi}</div>
            </div>
          ))}
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={tableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 16, padding: '28px' }}
          >
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sky)', marginBottom: 18 }}>In-House QC Tests</div>
            {QC_TESTS.map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: '1px solid var(--line)' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--sky)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 13, color: 'var(--text)' }}>{t}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={tableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}
            style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 16, padding: '28px' }}
          >
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: 18 }}>Packaging & Delivery</div>
            {[
              { label: 'Standard Bags', val: '25 kg PP bags' },
              { label: 'Big Bags (FIBC)', val: '500–1000 kg' },
              { label: 'Private Label', val: 'Available on request' },
              { label: 'Documentation', val: 'TDS · CoA · CoO' },
              { label: 'Lead Times', val: 'Agreed per order' },
              { label: 'Sample Quantities', val: 'Within days' },
            ].map(r => (
              <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--line)', fontSize: 13 }}>
                <span style={{ fontFamily: 'Open Sans, sans-serif', color: 'rgba(20,27,62,0.5)' }}>{r.label}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, color: 'var(--navy)', fontSize: 12 }}>{r.val}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={tableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.26 }}
            style={{
              background: 'linear-gradient(150deg, #EEF4FF, #F0F6FF)',
              border: '1px solid rgba(43,141,208,0.15)', borderRadius: 16, padding: '28px',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              boxShadow: 'inset 0 0 20px rgba(255,255,255,0.5)',
            }}
          >
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sky)', marginBottom: 18 }}>Documentation</div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.02em', color: 'var(--navy)' }}>Technical & Safety Data Sheets</h3>
              <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 14, color: 'var(--text)', lineHeight: 1.7, marginBottom: 24 }}>
                Full technical data sheets and safety data sheets available for all manufactured grades. Request documents with your enquiry.
              </p>
            </div>
            <a href="mailto:info@blaubatch.com?subject=TDS Request" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10, justifyContent: 'center',
              padding: '13px 24px', background: 'var(--sky)', color: '#fff',
              borderRadius: 10, fontFamily: 'Inter, sans-serif', fontSize: 12,
              fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 24px rgba(43,141,208,0.25)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <Download size={14} /> Request TDS
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #specs > div > div:last-child { grid-template-columns: 1fr !important; }
          #specs { padding: 64px 20px !important; }
        }
      `}</style>
    </section>
  )
}
