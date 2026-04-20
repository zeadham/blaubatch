'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import PageHero from '@/components/shared/PageHero'
import QuoteForm from '@/components/shared/QuoteForm'
import IsoBadges from '@/components/shared/IsoBadges'


const POLYMERS = ['PE', 'PP', 'PET / PBT', 'ABS', 'EVA', 'PA (Nylon)', 'PS', 'SAN', 'PC']

const GRADES = [
  { code: 'WHITE 57 FF',  carrier: 'PE',  content: '60% TiO₂',          app: 'Inj. moulding, Extrusion, Blow moulding',      note: 'Standard',     food: true },
  { code: 'WHITE 71 FF',  carrier: 'PE',  content: '70% TiO₂',          app: 'Film, Inj. moulding, Blow moulding',           note: 'High Opacity', food: true },
  { code: 'WHITE 71 FE',  carrier: 'PE',  content: '78% ash',            app: 'Film, Inj. moulding, Blow moulding',           note: 'High Loading', food: true },
  { code: 'WHITE 175 FF', carrier: 'PE',  content: '75% TiO₂',          app: 'Inj. moulding, Extrusion, Blow moulding',      note: 'FDA + EU',     food: true },
  { code: 'WHITE 220 FF', carrier: 'PE',  content: '80% ash',            app: 'Film, Inj. moulding, Blow moulding',           note: 'Ultra High',   food: true },
  { code: 'WHITE 224 FF', carrier: 'PE',  content: '40% TiO₂ + filler', app: 'Inj. moulding, Extrusion, Blow moulding',      note: 'Economy',      food: true },
  { code: 'WHITE 304 FF', carrier: 'PE',  content: '40% TiO₂ + 40% CaCO₃', app: 'Inj. moulding, Extrusion, Blow moulding', note: 'Filled',       food: true },
  { code: 'WHITE 309 FF', carrier: 'PE',  content: '75% ash',            app: 'Film, Inj. moulding, Blow moulding',           note: 'High Loading', food: true },
  { code: 'WHITE 313 FF', carrier: 'PE',  content: '40% TiO₂ + 30% filler', app: 'Inj. moulding, Extrusion, Blow moulding', note: 'Filled',       food: true },
  { code: 'WHITE 356 FF', carrier: 'PE',  content: '70% TiO₂ + 12% filler', app: 'Inj. moulding, Extrusion, Blow moulding', note: 'FDA + EU',     food: true },
  { code: 'WHITE 491 MD', carrier: 'PET', content: '70% TiO₂',          app: 'PET — Inj. moulding, Extrusion, Blow moulding', note: 'PET Grade',  food: true },
]

const FEATURES = [
  'TiO₂ rutile grade — superior opacity and brightness',
  'PE and PP carrier systems for wide compatibility',
  'Food-contact compliant grades (EU 10/2011 & FDA)',
  'Consistent blue-white tones with high CIE whiteness index',
  'Excellent dispersion — no agglomerates or streaks',
  'Available in standard 25 kg bags and 500 kg FIBC',
]

const WMB_PRODUCTS = [
  { name: 'WMB-PE Series', sub: 'LDPE/LLDPE carrier · Blown & cast film', value: 'White MB PE Series' },
  { name: 'WMB-PP Series', sub: 'PP Homopolymer carrier · Raffia & film', value: 'White MB PP Series' },
  { name: 'Food-Contact Grade', sub: 'EU 10/2011 & FDA compliant', value: 'White MB Food-Contact Grade' },
  { name: 'Not sure yet', sub: "We'll recommend the right grade", value: 'Not sure — need recommendation' },
]

const WMB_APPLICATIONS = ['Blown Film', 'Cast Film', 'Injection Moulding', 'Raffia / Woven', 'BOPP Film', 'Food Packaging', 'Thermoforming', 'Non-woven']

const WMB_INDUSTRIES = [
  { image: '/images/industries cards/packaging.png', name: 'Packaging & Flexible Film', href: '/industries/packaging', desc: 'White food packaging, lamination film, stand-up pouches, and retail bags. White MB delivers the opacity and brightness required for branded packaging.', tags: ['Food Packaging', 'Stand-Up Pouches', 'Lamination'] },
  { image: '/images/industries cards/agriculture.png', name: 'Agriculture', href: '/industries/agriculture', desc: 'White mulch film for soil temperature control, tunnel covers, and greenhouse film. Provides reflectivity and UV performance required for agricultural applications.', tags: ['Mulch Film', 'Tunnel Covers', 'Greenhouse'] },
  { image: '/images/industries cards/consumer_good.png', href: '/industries/consumer-goods', name: 'Consumer Goods', desc: 'White containers, caps, closures, and household products in PE and PP. White MB ensures batch-consistent whiteness across injection moulded and blown parts.', tags: ['Containers', 'Caps & Closures', 'Household'] },
  { image: '/images/industries cards/textiles.png', name: 'Non-Woven', href: '/industries/textiles', desc: 'White hygiene nonwovens for diapers, wipes, and medical textiles. Food-contact and medical-grade white MB available on request.', tags: ['Hygiene NW', 'Medical Textile', 'Spunbond'] },
]

export default function WhiteMBPage() {
  const specsRef = useRef(null)
  const specsInView = useInView(specsRef, { once: true, margin: '-60px' })
  const [gradesOpen, setGradesOpen] = useState(false)
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: '-60px' })

  return (
    <>
      <PageHero
        breadcrumb={{ current: 'White Masterbatch', parent: 'Products', parentHref: '/#products' }}
        badge="CORAPLAST DISTRIBUTED"
        badgeColor="#2B8DD0"
        title="White Masterbatch"
        titleAccent="WMB Series"
        sub="TiO₂-based white concentrates delivering high opacity, brilliant blue-white tone, and consistent batch-to-batch performance — in PE and PP carrier systems."
        split
        bgImage="/images/heroes/white_masterbatch.webp"
        cta={{
          primary: { label: 'Request a Quote', href: '#quote-form' },
          secondary: { label: 'View Grades', href: '#grades' },
        }}
      />

      {/* Intro */}
      <section style={{ background: '#fff', borderBottom: '1px solid rgba(20,27,62,0.07)', padding: '80px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} id="wmb-intro-grid">

            {/* Left col */}
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', border: '1px solid rgba(43,141,208,0.3)', borderRadius: 4, padding: '5px 14px', display: 'inline-block', marginBottom: 16 }}>
                What Is White Masterbatch?
              </div>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 20, color: '#141B3E' }}>
                TiO₂ Concentrates Across Every Major Polymer
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(20,27,62,0.65)', lineHeight: 1.85, marginBottom: 18 }}>
                White masterbatch is a concentrated dispersion of titanium dioxide (TiO₂) in a polymer carrier resin. TiO₂ is the primary pigment responsible for whiteness and opacity in plastics — it scatters visible light with exceptional efficiency, hiding the natural colour of the base polymer and any underlying substrate. It is added at the processing stage at typical let-down ratios of 2–5%, replacing the need to handle raw TiO₂ powder directly.
              </p>
              <p style={{ fontSize: 16, color: 'rgba(20,27,62,0.65)', lineHeight: 1.85, marginBottom: 18 }}>
                Our white masterbatch range covers every major polymer matrix — giving converters a single source for consistent opacity and whiteness regardless of their base resin or processing technology.
              </p>

              {/* Polymer grid */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                {POLYMERS.map(p => (
                  <span key={p} style={{
                    fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 700,
                    padding: '5px 12px', borderRadius: 5,
                    background: 'rgba(43,141,208,0.07)', border: '1px solid rgba(43,141,208,0.18)',
                    color: '#23447A',
                  }}>{p}</span>
                ))}
              </div>

              <p style={{ fontSize: 16, color: 'rgba(20,27,62,0.65)', lineHeight: 1.85 }}>
                Rutile-grade TiO₂ delivers superior hiding power and a clean blue-white tone with excellent UV stability. TDS and CoA are supplied with every shipment.
              </p>
            </div>

            {/* Right col */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {/* Application Simulation */}
              <div style={{ background: '#F7F8FC', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 14, padding: '28px 28px 24px' }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', marginBottom: 10 }}>Application Simulation</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 900, color: '#141B3E', letterSpacing: '-0.01em', lineHeight: 1.3, marginBottom: 12 }}>
                  Near-Plant Pilot Trials
                </h3>
                <p style={{ fontSize: 15, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8 }}>
                  Our Application Simulation Centre uses production-representative equipment to run reproducible trials — enabling new product development and current-product optimisation under real processing conditions before full-scale commitment.
                </p>
              </div>

              {/* Custom Formulation */}
              <div style={{ background: '#F7F8FC', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 14, padding: '28px 28px 24px' }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#D4840A', marginBottom: 10 }}>Custom Formulation</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 900, color: '#141B3E', letterSpacing: '-0.01em', lineHeight: 1.3, marginBottom: 12 }}>
                  Built to Your Specification
                </h3>
                <p style={{ fontSize: 15, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, marginBottom: 14 }}>
                  Fast development cycles for application-specific requirements. White masterbatch can be enhanced with functional additives including:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['Anti-block', 'Anti-static', 'Anti-fog', 'UV Stabiliser', 'Mould Release', 'Anti-bacterial'].map(a => (
                    <span key={a} style={{
                      fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700,
                      padding: '4px 10px', borderRadius: 4,
                      background: 'rgba(212,132,10,0.08)', border: '1px solid rgba(212,132,10,0.2)',
                      color: '#A86508',
                    }}>{a}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){ #wmb-intro-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Grades table */}
      <section style={{ background: '#F7F8FC', padding: '80px 48px' }}>
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
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', border: '1px solid rgba(46,127,208,0.3)', borderRadius: 4, padding: '4px 12px', display: 'inline-block', marginBottom: 8 }}>Grade Reference</div>
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
                    <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, maxWidth: 620, marginBottom: 32 }}>The grades below represent a sample of our white masterbatch portfolio — we carry a broader range across TiO₂ loadings, carrier resins, and regulatory standards. All grades supplied with TDS and CoA. <strong style={{ color: '#141B3E' }}>Contact us for the full product list or to discuss a specific requirement.</strong></p>

            <div style={{ background: '#FFFFFF', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 14, overflow: 'hidden', marginBottom: 40 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '150px 60px 1fr 1fr 110px', background: 'rgba(20,27,62,0.04)', borderBottom: '1px solid rgba(20,27,62,0.08)', padding: '12px 20px' }}>
                {['Grade Code', 'Carrier', 'TiO₂ / Content', 'Application', 'Type'].map(h => (
                  <div key={h} style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(20,27,62,0.35)' }}>{h}</div>
                ))}
              </div>
              {GRADES.map((g, i) => (
                <div key={g.code} style={{ display: 'grid', gridTemplateColumns: '150px 60px 1fr 1fr 110px', padding: '13px 20px', borderBottom: i < GRADES.length - 1 ? '1px solid rgba(20,27,62,0.07)' : 'none', transition: 'background 0.15s', alignItems: 'center' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(20,27,62,0.03)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, color: '#141B3E' }}>{g.code}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, color: g.carrier === 'PET' ? '#D4840A' : '#2B8DD0' }}>{g.carrier}</div>
                  <div style={{ fontSize: 12, color: 'rgba(20,27,62,0.65)' }}>{g.content}</div>
                  <div style={{ fontSize: 12, color: 'rgba(20,27,62,0.55)' }}>{g.app}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, color: g.carrier === 'PET' ? '#D4840A' : '#2B8DD0' }}>{g.note}</div>
                </div>
              ))}
            </div>

            {/* More grades note */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px', background: 'rgba(43,141,208,0.05)', border: '1px solid rgba(43,141,208,0.15)', borderRadius: 10, marginBottom: 32 }}>
              <span style={{ fontSize: 18 }}>ℹ️</span>
              <p style={{ fontSize: 13, color: 'rgba(20,27,62,0.65)', lineHeight: 1.6 }}>
                This is a selection from our full white masterbatch range. Additional grades — including specialty carriers, higher TiO₂ loadings, and custom formulations — are available on request. <strong style={{ color: '#2B8DD0' }}>Contact us to discuss your specific requirement.</strong>
              </p>
            </div>

            {/* Features */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {FEATURES.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '12px 16px', background: '#FFFFFF', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 10 }}>
                  <CheckCircle2 size={15} color="#2B8DD0" style={{ flexShrink: 0, marginTop: 1 }} />
                  <span style={{ fontSize: 13, color: 'rgba(20,27,62,0.6)', lineHeight: 1.5 }}>{f}</span>
                </div>
              ))}
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
      <section style={{ background: '#F7F8FC', padding: '72px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', border: '1px solid rgba(43,141,208,0.3)', borderRadius: 4, padding: '5px 14px', display: 'inline-block', marginBottom: 14 }}>Industries</div>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 10, color: '#141B3E' }}>Where White Masterbatch Is Used</h2>
            <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, maxWidth: 520 }}>White masterbatch is a core component across packaging, agriculture, and consumer goods — anywhere high opacity, whiteness, and TiO₂ performance are required.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
            {WMB_INDUSTRIES.map(ind => {
              const Tag = ind.href ? Link : 'div'
              return (
                <Tag key={ind.name} href={ind.href} style={{ background: '#FFFFFF', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 12, overflow: 'hidden', textDecoration: 'none', display: 'block', cursor: ind.href ? 'pointer' : 'default', transition: 'all 0.3s ease', boxShadow: '0 2px 8px rgba(20,27,62,0.04)' }}
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
            style={{ marginBottom: 36 }}
          >
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#D4840A', border: '1px solid rgba(212,132,10,0.3)', borderRadius: 4, padding: '5px 14px', display: 'inline-block', marginBottom: 14 }}>Request a Quote</div>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 8 }}>Get White Masterbatch Pricing</h2>
            <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, maxWidth: 520 }}>Tell us your grade, quantity, and application — we'll respond within 24 hours with pricing and samples if needed.</p>
          </motion.div>
          <QuoteForm
            products={WMB_PRODUCTS}
            defaultProduct="White MB PE Series"
            applications={WMB_APPLICATIONS}
            step1Title="Select White MB Grade"
            step1Sub="Choose a series or tell us your application"
          />
        </div>
        <style>{`@media(max-width:900px){ section { padding-left: 20px !important; padding-right: 20px !important; } } .ind-link:hover { border-color: rgba(43,141,208,0.4) !important; }`}</style>
      </section>


    </>
  )
}
