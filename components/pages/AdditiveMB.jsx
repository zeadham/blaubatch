'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ChevronDown } from 'lucide-react'
import Link from '@/components/LocalizedLink'
import PageHero from '@/components/shared/PageHero'
import QuoteForm from '@/components/shared/QuoteForm'
import IsoBadges from '@/components/shared/IsoBadges'
import { T } from '@/components/LocaleProvider'


const GRADES = [
  { code: 'UVS 168',  carrier: 'PE',  type: '10% HALS',              app: 'Greenhouse film, mulch, irrigation pipe', note: 'UV Stabiliser' },
  { code: 'UVS 404',  carrier: 'PE',  type: '20% HALS',              app: 'Greenhouse film, mulch, irrigation pipe', note: 'UV Stabiliser' },
  { code: 'UVS 426',  carrier: 'PE',  type: '15% HALS',              app: 'Greenhouse film, mulch, irrigation pipe', note: 'UV Stabiliser' },
  { code: 'UVS 406',  carrier: 'PP',  type: '20% HALS',              app: 'Raffia, woven sacks, outdoor fibre',       note: 'UV Stabiliser' },
  { code: 'UVS 439',  carrier: 'PP',  type: '20% HALS + CaCO₃',      app: 'Raffia, woven sacks, outdoor fibre',       note: 'UV Stabiliser' },
  { code: 'SLIP 130',    carrier: 'PE', type: '10% Oleamide',         app: 'Blown film, bags, flexible packaging',    note: 'Slip Agent' },
  { code: 'SLIP SO 105', carrier: 'PE', type: '5% Oleamide',          app: 'Blown film, bags, flexible packaging',    note: 'Slip Agent' },
  { code: 'SLIP CE 105', carrier: 'PE', type: '5% Erucamide',         app: 'Blown film, bags, flexible packaging',    note: 'Slip Agent' },
  { code: 'AB 222',      carrier: 'PE', type: '20% Natural Silica',   app: 'Film, packaging, food-contact bags',      note: 'Antiblock' },
  { code: 'SAB 1907',    carrier: 'PE', type: '20% Silica + 5% Oleamide', app: 'Blown film — combined slip/antiblock', note: 'Slip + Antiblock' },
  { code: 'AST 349', carrier: 'PE', type: '15% Antistatic',        app: 'Electronic packaging, technical film', note: 'Anti-static' },
  { code: 'AST 335', carrier: 'PS', type: '7.5% Antistatic + Talc', app: 'Foam & rigid packaging, electronics trays', note: 'Anti-static' },
  { code: 'AST 347', carrier: 'PS', type: '5% Antistatic + CaCO₃', app: 'Foam & rigid packaging, electronics trays', note: 'Anti-static' },
  { code: 'AFG 8012', carrier: 'LLDPE', type: '12% Anti-fog', app: 'Fresh produce film, greenhouse film', note: 'Anti-fog' },
  { code: 'PROCESSING AID 190', carrier: 'PE', type: '3% PPA',            app: 'Blown film, extrusion — reduces die buildup & melt fracture', note: 'Processing Aid' },
  { code: 'PROCESSING AID 701', carrier: 'PE', type: '1% PPA',            app: 'Blown film, extrusion — reduces die buildup & melt fracture', note: 'Processing Aid' },
  { code: 'PROCESSING AID 702', carrier: 'PE', type: '2% PPA',            app: 'Blown film, extrusion — reduces die buildup & melt fracture', note: 'Processing Aid' },
  { code: 'PROCESSING AID 707', carrier: 'PE', type: '1% PPA + 1% AO',    app: 'Blown film, extrusion — PPA with antioxidant package',        note: 'Processing Aid' },
  { code: 'PROCESSING AID 709', carrier: 'PE', type: '0.5% PPA + 0.5% AO', app: 'Blown film, extrusion — PPA with antioxidant package',       note: 'Processing Aid' },
  { code: 'PPA 249', carrier: 'PE', type: '5% PFAS-Free PPA',      app: 'Blown film, extrusion — PFAS-free processing aid', note: 'Processing Aid' },
  { code: 'DESICCANT 1204', carrier: 'PE', type: '75% Desiccant', app: 'Moisture scavenging for hygroscopic & recycled resin', note: 'Desiccant' },
  { code: 'BRIGHTNER 1602', carrier: 'PE', type: 'Optical Brightener', app: 'Film, fibre, injection moulding — enhances whiteness', note: 'Optical Brightener' },
]

const FEATURES = [
  'HALS-based UV stabilisers rated for 10+ year outdoor performance',
  'Slip and antiblock agents for film-to-film release and anti-stick',
  'Anti-static grades for PE and PS — electronic and technical packaging',
  'Processing aids reduce die buildup, melt fracture, and downtime — PFAS-free option available',
  'Anti-fog grades for fresh produce and greenhouse film clarity',
  'All grades supplied with TDS, CoA, and technical dosage guidance',
]

const AMB_PRODUCTS = [
  { name: 'UV Stabiliser (UVS)', sub: 'HALS-based · Outdoor & agricultural', value: 'Additive MB UV Stabiliser' },
  { name: 'Slip / Antiblock (SLIP/AB)', sub: 'Oleamide/Erucamide slip · Silica antiblock', value: 'Additive MB Slip/Antiblock' },
  { name: 'Anti-static (AST)', sub: 'PE & PS grades · Film & packaging', value: 'Additive MB Anti-static' },
  { name: 'Anti-fog (AFG)', sub: 'Fresh produce & greenhouse film', value: 'Additive MB Anti-fog' },
  { name: 'Processing Aid (PPA)', sub: 'Standard & PFAS-free options', value: 'Additive MB Processing Aid' },
  { name: 'Desiccant / Optical Brightener', sub: 'Moisture control · Whiteness enhancement', value: 'Additive MB Desiccant/Brightener' },
  { name: 'Not sure yet', sub: "We'll recommend the right additive", value: 'Not sure — need recommendation' },
]

const AMB_APPLICATIONS = ['Blown Film', 'Agricultural Film', 'Greenhouse Film', 'Raffia / Woven Sacks', 'Electronic Packaging', 'Fibre & Yarn', 'Injection Moulding', 'Non-woven']

const AMB_INDUSTRIES = [
  { image: '/images/industries cards/agriculture.png', name: 'Agriculture', href: '/industries/agriculture', desc: 'UV stabilisers (HALS-based) for greenhouse film, mulch, and irrigation pipe, plus anti-fog grades for greenhouse film clarity. Blended with filler or white MB for complete performance packages.', tags: ['UV Stabiliser', 'Anti-fog', 'Greenhouse'] },
  { image: '/images/industries cards/pipes.png', name: 'Pipes & Infrastructure', href: '/industries/pipes', desc: 'Processing aids with antioxidant packages for long-service-life PE and PP pipe systems. Reduces die buildup and ensures polymer stability through processing.', tags: ['Processing Aid', 'Antioxidants', 'PE/PP Pipe'] },
  { image: '/images/industries cards/textiles.png', name: 'Textiles & Raffia', href: '/industries/textiles', desc: 'UV-stable PP grades for raffia and woven sack applications exposed to outdoor conditions. Consistent HALS loading for extended service life.', tags: ['UV Stabiliser', 'PP Raffia', 'Woven Sacks'] },
  { image: '/images/industries cards/packaging.png', name: 'Packaging & Film', href: '/industries/packaging', desc: 'Slip and antiblock additives for blown film to control COF and prevent blocking. Antistatic MB for packaging of electronics and sensitive goods.', tags: ['Slip/Antiblock', 'Antistatic', 'Blown Film'] },
]

export default function AdditiveMBPage() {
  const specsRef = useRef(null)
  const specsInView = useInView(specsRef, { once: true, margin: '-60px' })
  const [gradesOpen, setGradesOpen] = useState(false)
  useEffect(() => {
    const check = () => { if (window.location.hash === '#grades') setGradesOpen(true) }
    check()
    window.addEventListener('hashchange', check)
    return () => window.removeEventListener('hashchange', check)
  }, [])
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: '-60px' })

  return (
    <>
      <PageHero
        breadcrumb={{ current: 'Additive Masterbatch', parent: 'Products', parentHref: '/#products' }}
        badge="CORAPLAST DISTRIBUTED"
        badgeColor="#2B8DD0"
        title="Additive Masterbatch"
        titleAccent="AMB Series"
        sub="Precision performance additives that extend product life, improve processing, and meet compliance requirements — UV stabilisers, slip, antiblock, anti-static, anti-fog, processing aids, and optical brighteners."
        split
        bgImage="/images/heroes/additives1.webp"
        cta={{
          primary: { label: 'Request a Quote', href: '#quote-form' },
          secondary: { label: 'View Grades', href: '#grades' },
        }}
      />

      {/* Intro */}
      <section style={{ background: '#fff', borderBottom: '1px solid rgba(20,27,62,0.07)', padding: '80px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} id="amb-intro-grid">
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', border: '1px solid rgba(43,141,208,0.3)', borderRadius: 4, padding: '5px 14px', display: 'inline-block', marginBottom: 16 }}>
                <T>What Is Additive Masterbatch?</T>
              </div>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 20, color: '#141B3E' }}>
                <T>Functional Performance Additives in Carrier Systems</T>
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(20,27,62,0.65)', lineHeight: 1.85, marginBottom: 18 }}>
                <T>Additive masterbatch is a concentrated carrier system for functional performance additives. Rather than handling and dosing raw additives directly, processors blend additive MB into their base resin at a controlled let-down ratio to achieve precise, uniform additive distribution throughout the finished part.</T>
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                {['UV Stabiliser', 'Slip Agent', 'Antiblock', 'Anti-static', 'Anti-fog', 'Processing Aid', 'Optical Brightener'].map(s => (
                  <span key={s} style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 700, padding: '5px 12px', borderRadius: 5, background: 'rgba(43,141,208,0.07)', border: '1px solid rgba(43,141,208,0.18)', color: '#23447A' }}><T>{s}</T></span>
                ))}
              </div>
              <p style={{ fontSize: 16, color: 'rgba(20,27,62,0.65)', lineHeight: 1.85 }}>
                <T>It is used wherever polymer performance beyond colour or opacity is required — extending product life, improving processing, and meeting regulatory compliance requirements.</T>
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ background: '#F7F8FC', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 14, padding: '28px 28px 24px' }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', marginBottom: 10 }}><T>Technical Documentation</T></div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 900, color: '#141B3E', letterSpacing: '-0.01em', lineHeight: 1.3, marginBottom: 12 }}><T>TDS, CoA & Dosage Support</T></h3>
                <p style={{ fontSize: 15, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8 }}>
                  <T>Every grade is supplied with a Technical Data Sheet, Certificate of Analysis, and recommended dosage guidance. Technical support is available throughout the trial and conversion period.</T>
                </p>
              </div>
              <div style={{ background: '#F7F8FC', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 14, padding: '28px 28px 24px' }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#D4840A', marginBottom: 10 }}><T>Custom Formulation</T></div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 900, color: '#141B3E', letterSpacing: '-0.01em', lineHeight: 1.3, marginBottom: 12 }}><T>Carrier & Combination on Request</T></h3>
                <p style={{ fontSize: 15, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8 }}>
                  <T>Additive MB can be produced in LDPE, PP, or HDPE carrier systems with tailored additive concentrations. Combined formulations — such as UV stabiliser + anti-static — are available on request.</T>
                </p>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){ #amb-intro-grid { grid-template-columns: 1fr !important; } }`}</style>
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
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', border: '1px solid rgba(46,127,208,0.3)', borderRadius: 4, padding: '4px 12px', display: 'inline-block', marginBottom: 8 }}><T>Grade Reference</T></div>
                <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(18px, 2vw, 26px)', fontWeight: 900, letterSpacing: '-0.02em', margin: '0 0 6px', color: '#141B3E' }}><T>A Selection of Available Grades</T></h2>
                <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 14, color: 'rgba(20,27,62,0.55)', margin: 0, fontWeight: 400 }}><T>Full standard range shown — custom concentrations, carrier systems, and multi-function combinations available on request.</T></p>
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
                    <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, maxWidth: 620, marginBottom: 32 }}><T>Our full additive masterbatch portfolio across UV, slip, antiblock, anti-static, anti-fog, processing aid, desiccant, and optical brightener categories. All grades supplied with TDS and CoA. </T><strong style={{ color: '#141B3E' }}><T>Contact us to discuss a specific requirement or custom formulation.</T></strong></p>

            <div style={{ background: '#FFFFFF', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 14, overflow: 'hidden', marginBottom: 40 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr 1fr 1fr 130px', background: 'rgba(20,27,62,0.03)', borderBottom: '1px solid rgba(20,27,62,0.08)', padding: '12px 20px' }}>
                {['Grade Code', 'Carrier', 'Active', 'Application', 'Type'].map(h => (
                  <div key={h} style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(20,27,62,0.35)' }}><T>{h}</T></div>
                ))}
              </div>
              {GRADES.map((g, i) => (
                <div key={g.code} style={{ display: 'grid', gridTemplateColumns: '140px 1fr 1fr 1fr 130px', padding: '14px 20px', borderBottom: i < GRADES.length - 1 ? '1px solid rgba(20,27,62,0.06)' : 'none', transition: 'background 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(20,27,62,0.03)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, color: '#141B3E' }}><T>{g.code}</T></div>
                  <div style={{ fontSize: 12, color: 'rgba(20,27,62,0.6)' }}><T>{g.carrier}</T></div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 700, color: '#2B8DD0' }}><T>{g.type}</T></div>
                  <div style={{ fontSize: 12, color: 'rgba(20,27,62,0.6)' }}><T>{g.app}</T></div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, color: g.note === 'UV Stabiliser' ? '#2B8DD0' : g.note === 'Processing Aid' ? '#D4840A' : 'rgba(20,27,62,0.35)' }}><T>{g.note}</T></div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {FEATURES.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '12px 16px', background: '#FFFFFF', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 10 }}>
                  <CheckCircle2 size={15} color="#2B8DD0" style={{ flexShrink: 0, marginTop: 1 }} />
                  <span style={{ fontSize: 13, color: 'rgba(20,27,62,0.6)', lineHeight: 1.5 }}><T>{f}</T></span>
                </div>
              ))}
            </div>

            {/* More grades note */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px', background: 'rgba(43,141,208,0.05)', border: '1px solid rgba(43,141,208,0.15)', borderRadius: 10, marginBottom: 32 }}>
              <span style={{ fontSize: 18 }}>ℹ️</span>
              <p style={{ fontSize: 13, color: 'rgba(20,27,62,0.65)', lineHeight: 1.6 }}>
<T>This is our full additive masterbatch range across UV, slip, antiblock, anti-static, anti-fog, processing aid, desiccant, and optical brightener categories. Custom concentrations, carrier systems, and combination formulations are available on request. </T><strong style={{ color: '#2B8DD0' }}><T>Contact us to discuss your specific requirement.</T></strong>
              </p>
            </div>

            <IsoBadges />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section style={{ background: '#F7F8FC', padding: '72px 48px 0', borderTop: '1px solid rgba(20,27,62,0.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', border: '1px solid rgba(43,141,208,0.3)', borderRadius: 4, padding: '5px 14px', display: 'inline-block', marginBottom: 14 }}><T>Industries</T></div>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 10, color: '#141B3E' }}><T>Where Additive Masterbatch Is Used</T></h2>
            <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, maxWidth: 520 }}><T>Additive masterbatch is used across every processing application — wherever performance enhancement beyond colour or filler is needed.</T></p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
            {AMB_INDUSTRIES.map(ind => {
              const Tag = ind.href ? Link : 'div'
              return (
                <Tag key={ind.name} href={ind.href} style={{ background: '#FFFFFF', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 12, overflow: 'hidden', textDecoration: 'none', display: 'block', cursor: ind.href ? 'pointer' : 'default', transition: 'all 0.3s ease', boxShadow: '0 2px 8px rgba(20,27,62,0.04)' }}
                  className={ind.href ? 'ind-link' : undefined}
                >
                  <div style={{ height: 160, overflow: 'hidden' }}>
                    <img src={ind.image} alt={ind.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                  </div>
                  <div style={{ padding: '18px 18px 20px' }}>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 800, marginBottom: 8, color: '#141B3E' }}><T>{ind.name}</T></div>
                    <div style={{ fontSize: 13, color: 'rgba(20,27,62,0.55)', lineHeight: 1.7 }}><T>{ind.desc}</T></div>
                    <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                      {ind.tags.map(t => <span key={t} style={{ fontSize: 10, padding: '2px 8px', background: 'rgba(43,141,208,0.12)', borderRadius: 4, color: '#2B8DD0', fontFamily: 'Inter, sans-serif', fontWeight: 700 }}><T>{t}</T></span>)}
                    </div>
                  </div>
                </Tag>
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
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#D4840A', border: '1px solid rgba(212,132,10,0.3)', borderRadius: 4, padding: '5px 14px', display: 'inline-block', marginBottom: 14 }}><T>Request a Quote</T></div>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 8, color: '#141B3E' }}><T>Get Additive Masterbatch Pricing</T></h2>
            <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, maxWidth: 520 }}><T>Tell us your additive type, quantity, and application — we'll respond within 24 hours with pricing and samples if needed.</T></p>
          </motion.div>
          <QuoteForm
            products={AMB_PRODUCTS}
            defaultProduct="Additive MB UV Stabiliser"
            applications={AMB_APPLICATIONS}
            step1Title="Select Additive Type"
            step1Sub="Choose an additive grade or tell us your requirement"
          />
        </div>
        <style>{`@media(max-width:900px){ section { padding-left: 20px !important; padding-right: 20px !important; } } .ind-link:hover { border-color: rgba(43,141,208,0.4) !important; }`}</style>
      </section>


    </>
  )
}
