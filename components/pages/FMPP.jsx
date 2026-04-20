'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle2, ChevronDown } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import QuoteForm from '@/components/shared/QuoteForm'


const FMPP_PRODUCTS = [
  { name: 'FMPP-1070', sub: '70% CaCO₃ · Dosage 10–40%', value: 'FMPP-1070 — 70% CaCO₃ PP Filler Masterbatch' },
  { name: 'FMPP-1075 ★', sub: '75% CaCO₃ · Dosage 10–35%', value: 'FMPP-1075 — 75% CaCO₃ PP Filler Masterbatch' },
  { name: 'FMPP-1080', sub: '80% CaCO₃ · Dosage 5–25%', value: 'FMPP-1080 — 80% CaCO₃ PP Filler Masterbatch' },
  { name: 'Not sure yet', sub: "We'll recommend the right grade", value: 'Not sure — need recommendation' },
]

const FMPP_APPLICATIONS = [
  'Raffia / Woven Bags', 'BOPP Film', 'Non-woven', 'Thermoforming',
  'Injection Molding', 'Pipe & Profile Extrusion', 'Other',
]

const GRADES = [
  { code: 'FMPP-1070', loading: '70%', dosage: '10–40%', mfi: '8–12 g/10min', apps: 'PP blown film, cast film, raffia' },
  { code: 'FMPP-1075', loading: '75%', dosage: '10–35%', mfi: '8–12 g/10min', apps: 'Raffia, non-woven, BOPP film' },
  { code: 'FMPP-1080', loading: '80%', dosage: '5–25%',  mfi: '8–12 g/10min', apps: 'High-loading raffia, woven bags, injection' },
]

const FEATURES = [
  'PP-compatible carrier resin — no cross-contamination with PE streams',
  'Consistent CaCO₃ dispersion — in-house milling and compounding',
  'Batch-level QC — MFI, ash content, colour and dispersion tested before dispatch',
  'Full traceability from raw material intake to finished goods',
  'Compatible with raffia, non-woven, BOPP, and injection moulding lines',
  'Available in 25 kg PP bags and 500–1000 kg FIBC big bags',
]

const DOSAGE_GUIDE = [
  { app: 'Raffia / Tape Extrusion',  range: '10–30%' },
  { app: 'Non-Woven (spunbond)',      range: '10–25%' },
  { app: 'BOPP Film',                 range: '5–20%' },
  { app: 'Injection Moulding',        range: '5–20%' },
  { app: 'Blow Moulding (PP)',         range: '5–15%' },
]

const KEY_SPECS = ['Calcium Carbonate (CaCO₃)', 'PP Homopolymer Carrier', '70–80% Loading', '8–12 g/10min MFI', 'Made in Egypt']

const FMPP_INDUSTRIES = [
  { image: '/images/industries cards/textiles.png',      name: 'Raffia & Woven Bags',  href: '/industries/textiles',   desc: 'PP tapes, raffia yarns, and woven sacks for cement, fertiliser, and agricultural products. FMPP improves tape stiffness and reduces resin consumption.',                                     tags: ['PP Tapes', 'Raffia Yarn', 'Woven Sacks'] },
  { image: '/images/industries cards/textiles.png',      name: 'Non-Woven Fabrics',    href: '/industries/textiles',   desc: 'Spunbond and meltblown non-wovens for hygiene, agriculture, and geotextile applications. FMPP grades with controlled MFI suit a wide range of non-woven line speeds.',               tags: ['Spunbond', 'Geotextile', 'Hygiene'] },
  { image: '/images/industries cards/packaging.png',     href: '/industries/packaging', name: 'BOPP & Cast Film',                                     desc: 'Biaxially oriented and cast PP film for packaging and lamination. FMPP improves film stiffness and reduces cost in high-output cast film lines.',                                       tags: ['BOPP Film', 'Cast Film', 'Lamination'] },
  { image: '/images/industries cards/consumer_good.png',href: '/industries/consumer-goods', name: 'Injection Moulding',                                   desc: 'PP household articles, caps, closures, and industrial components. FMPP at lower dosage rates reduces material cost while maintaining surface quality.',                                   tags: ['Caps & Closures', 'Household Items', 'Industrial Parts'] },
]

export default function FMPPPage() {
  const introRef = useRef(null)
  const introInView = useInView(introRef, { once: true, margin: '-60px' })
  const specsRef = useRef(null)
  const specsInView = useInView(specsRef, { once: true, margin: '-60px' })
  const [gradesOpen, setGradesOpen] = useState(false)
  const indRef = useRef(null)
  const indInView = useInView(indRef, { once: true, margin: '-60px' })
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: '-60px' })

  return (
    <>
      <PageHero
        breadcrumb={{ current: 'FMPP Series', parent: 'Products', parentHref: '/#products' }}
        badge="IN-HOUSE MANUFACTURED"
        badgeColor="#D4840A"
        title="PP Filler Masterbatch"
        titleAccent="FMPP Series"
        sub="CaCO₃-based filler masterbatch on polypropylene carrier — produced at our 6th of October facility. Three grades for raffia, non-woven, BOPP film, and injection moulding."
        split
        bgImage="/images/heroes/FMPP.webp"
        cta={{
          primary: { label: 'Request a Quote', href: '#quote-form' },
          secondary: { label: 'View Grades', href: '#grades' },
        }}
      />

      {/* Intro */}
      <section style={{ background: '#fff', borderBottom: '1px solid rgba(20,27,62,0.07)', padding: '80px 48px' }}>
        <div ref={introRef} style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} id="fmpp-intro-grid">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={introInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#D4840A', border: '1px solid rgba(212,132,10,0.3)', borderRadius: 4, padding: '5px 14px', display: 'inline-block', marginBottom: 16 }}>
                What Is PP Filler Masterbatch?
              </div>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 20, color: '#141B3E' }}>
                CaCO₃ Concentrate on PP Carrier
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(20,27,62,0.65)', lineHeight: 1.85, marginBottom: 18 }}>
                PP filler masterbatch is a high-loading calcium carbonate concentrate produced on a polypropylene carrier resin. It is used in raffia extrusion, non-woven production, BOPP film, and injection moulding to replace a portion of virgin PP and reduce raw material expenditure.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                {KEY_SPECS.map(s => (
                  <span key={s} style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 700, padding: '5px 12px', borderRadius: 5, background: 'rgba(212,132,10,0.07)', border: '1px solid rgba(212,132,10,0.2)', color: '#A86508' }}>{s}</span>
                ))}
              </div>
              <p style={{ fontSize: 16, color: 'rgba(20,27,62,0.65)', lineHeight: 1.85 }}>
                With CaCO₃ loadings of 70–80%, FMPP grades improve surface finish and dimensional stability while maintaining the processability required for high-speed PP lines. All grades are manufactured at our in-house facility in Egypt.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={introInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
            >
              <div style={{ background: '#F7F8FC', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 14, padding: '28px 28px 24px' }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#D4840A', marginBottom: 10 }}>In-House Production</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 900, color: '#141B3E', letterSpacing: '-0.01em', lineHeight: 1.3, marginBottom: 12 }}>Optimised for PP Processing</h3>
                <p style={{ fontSize: 15, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8 }}>
                  PP homopolymer carrier ensures full compatibility with PP raffia, non-woven, and film lines — no cross-contamination with PE streams. Each batch tested for MFI, ash content, and dispersion before dispatch.
                </p>
              </div>
              <div style={{ background: '#F7F8FC', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 14, padding: '28px 28px 24px' }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', marginBottom: 10 }}>Dosage Guidance</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 900, color: '#141B3E', letterSpacing: '-0.01em', lineHeight: 1.3, marginBottom: 12 }}>Let-Down Ratios by Application</h3>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {DOSAGE_GUIDE.map((d, i) => (
                    <div key={d.app} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: i < DOSAGE_GUIDE.length - 1 ? '1px solid rgba(20,27,62,0.08)' : 'none' }}>
                      <span style={{ fontSize: 13, color: 'rgba(20,27,62,0.6)' }}>{d.app}</span>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 800, color: '#D4840A' }}>{d.range}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:900px){ #fmpp-intro-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Grades table */}
      <section id="grades" style={{ background: '#F7F8FC', padding: '80px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div
            ref={specsRef}
            initial={{ opacity: 0, y: 24 }}
            animate={specsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              onClick={() => setGradesOpen(o => !o)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', padding: '18px 24px', background: '#FFFFFF', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 12, marginBottom: 4, transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(20,27,62,0.02)'}
              onMouseLeave={e => e.currentTarget.style.background = '#FFFFFF'}
            >
              <div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#D4840A', border: '1px solid rgba(212,132,10,0.35)', borderRadius: 4, padding: '4px 12px', display: 'inline-block', marginBottom: 8 }}>Grade Reference</div>
                <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(18px, 2vw, 26px)', fontWeight: 900, letterSpacing: '-0.02em', margin: 0, color: '#141B3E' }}>A Selection of Available Grades</h2>
              </div>
              <motion.div animate={{ rotate: gradesOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown size={22} color="#141B3E" />
              </motion.div>
            </div>

            <AnimatePresence initial={false}>
              {gradesOpen && (
                <motion.div
                  key="grades-body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ paddingTop: 24 }}>
                    <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, maxWidth: 620, marginBottom: 32 }}>The grades below represent our standard PP filler masterbatch range. Additional CaCO₃ loadings, custom carrier systems, and application-specific formulations are available on request. All grades supplied with TDS and CoA. <strong style={{ color: '#141B3E' }}>Contact us to discuss your specific requirement.</strong></p>

            <div style={{ background: '#FFFFFF', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 14, overflow: 'hidden', marginBottom: 40 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '130px 110px 120px 150px 1fr', background: 'rgba(20,27,62,0.03)', borderBottom: '1px solid rgba(20,27,62,0.08)', padding: '12px 20px' }}>
                {['Grade Code', 'CaCO₃ Loading', 'Dosage Range', 'MFI', 'Applications'].map(h => (
                  <div key={h} style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(20,27,62,0.35)' }}>{h}</div>
                ))}
              </div>
              {GRADES.map((g, i) => (
                <div key={g.code} style={{ display: 'grid', gridTemplateColumns: '130px 110px 120px 150px 1fr', padding: '14px 20px', borderBottom: i < GRADES.length - 1 ? '1px solid rgba(20,27,62,0.06)' : 'none', transition: 'background 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(20,27,62,0.03)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, color: '#141B3E' }}>{g.code}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 800, color: '#D4840A' }}>{g.loading}</div>
                  <div style={{ fontSize: 12, color: 'rgba(20,27,62,0.6)' }}>{g.dosage}</div>
                  <div style={{ fontSize: 12, color: 'rgba(20,27,62,0.6)' }}>{g.mfi}</div>
                  <div style={{ fontSize: 12, color: 'rgba(20,27,62,0.6)' }}>{g.apps}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {FEATURES.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '12px 16px', background: '#FFFFFF', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 10 }}>
                  <CheckCircle2 size={15} color="#D4840A" style={{ flexShrink: 0, marginTop: 1 }} />
                  <span style={{ fontSize: 13, color: 'rgba(20,27,62,0.6)', lineHeight: 1.5 }}>{f}</span>
                </div>
              ))}
            </div>

            {/* More grades note */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px', background: 'rgba(212,132,10,0.05)', border: '1px solid rgba(212,132,10,0.2)', borderRadius: 10, marginBottom: 32 }}>
              <span style={{ fontSize: 18 }}>ℹ️</span>
              <p style={{ fontSize: 13, color: 'rgba(20,27,62,0.65)', lineHeight: 1.6 }}>
                Custom CaCO₃ loadings, MFI profiles, and carrier blends are available for specific PP processing lines. <strong style={{ color: '#D4840A' }}>Contact us to discuss your application.</strong>
              </p>
            </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section style={{ background: '#F7F8FC', padding: '72px 48px 0', borderTop: '1px solid rgba(20,27,62,0.08)' }}>
        <div ref={indRef} style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={indInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            style={{ marginBottom: 40 }}
          >
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', border: '1px solid rgba(43,141,208,0.3)', borderRadius: 4, padding: '5px 14px', display: 'inline-block', marginBottom: 14 }}>Industries</div>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 10, color: '#141B3E' }}>Where FMPP Filler Masterbatch Is Used</h2>
            <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, maxWidth: 520 }}>FMPP grades suit the full spectrum of PP processing — from high-speed raffia lines to cast film, injection moulding, and non-woven production.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
            {FMPP_INDUSTRIES.map((ind, i) => {
              const Tag = ind.href ? Link : 'div'
              return (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={indInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.08 }}
                >
                <Tag href={ind.href} style={{ background: '#FFFFFF', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 12, overflow: 'hidden', textDecoration: 'none', display: 'block', cursor: ind.href ? 'pointer' : 'default', transition: 'all 0.3s ease', boxShadow: '0 2px 8px rgba(20,27,62,0.04)' }}
                  className={ind.href ? 'ind-link' : undefined}
                >
                  <div style={{ height: 160, overflow: 'hidden' }}>
                    <img src={ind.image} alt={ind.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                  </div>
                  <div style={{ padding: '18px 18px 20px' }}>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 800, marginBottom: 8, color: '#141B3E' }}>{ind.name}</div>
                    <div style={{ fontSize: 13, color: 'rgba(20,27,62,0.55)', lineHeight: 1.7 }}>{ind.desc}</div>
                    <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                      {ind.tags.map(t => <span key={t} style={{ fontSize: 10, padding: '2px 8px', background: 'rgba(43,141,208,0.12)', borderRadius: 4, color: '#2B8DD0', fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>{t}</span>)}
                    </div>
                  </div>
                </Tag>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote-form" ref={formRef} style={{ background: '#F7F8FC', padding: '0 48px 96px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            style={{ marginBottom: 36, paddingTop: 72 }}
          >
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#D4840A', border: '1px solid rgba(212,132,10,0.3)', borderRadius: 4, padding: '5px 14px', display: 'inline-block', marginBottom: 14 }}>Request a Quote</div>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 8, color: '#141B3E' }}>Get FMPP Series Pricing</h2>
            <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, maxWidth: 520 }}>Tell us your grade, quantity, and application — we'll respond within 24 hours with pricing and samples if needed.</p>
          </motion.div>
          <QuoteForm
            products={FMPP_PRODUCTS}
            defaultProduct={FMPP_PRODUCTS[0].value}
            applications={FMPP_APPLICATIONS}
            step1Title="Which FMPP grade do you need?"
            step1Sub="Select a grade or tell us your application and we'll recommend one."
          />
        </div>
        <style>{`@media(max-width:900px){ section { padding-left: 20px !important; padding-right: 20px !important; } } .ind-link:hover { border-color: rgba(43,141,208,0.4) !important; } .ind-link:hover img { transform: scale(1.06); }`}</style>
      </section>
    </>
  )
}
