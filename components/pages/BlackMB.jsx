'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import PageHero from '@/components/shared/PageHero'
import QuoteForm from '@/components/shared/QuoteForm'
import IsoBadges from '@/components/shared/IsoBadges'


const GRADES = [
  { code: 'BLACK 03 FF',  carrier: 'PE',  cb: '40% CB',              app: 'Inj. moulding, Extrusion, Blow moulding',         note: 'Standard' },
  { code: 'BLACK 08 FF',  carrier: 'PE',  cb: '65% ash',             app: 'Inj. moulding, Extrusion, Blow moulding',         note: 'High Loading' },
  { code: 'BLACK 10 FF',  carrier: 'PE',  cb: '40% CB',              app: 'Inj./Roto moulding, Extrusion, Blow moulding',    note: 'Standard' },
  { code: 'BLACK 10 FS',  carrier: 'PE',  cb: '40% CB',              app: 'Inj. moulding, Extrusion, Blow moulding',         note: 'Standard' },
  { code: 'BLACK 15 FF',  carrier: 'PE',  cb: '50% ash',             app: 'Inj. moulding, Extrusion, Blow moulding',         note: 'Standard' },
  { code: 'BLACK 31 FF',  carrier: 'PE',  cb: '60% CB',              app: 'Inj. moulding, Extrusion, Blow moulding',         note: 'High CB' },
  { code: 'BLACK 51 FF',  carrier: 'PE',  cb: '45% CB',              app: 'Inj. moulding, Extrusion, Blow moulding',         note: 'Standard' },
  { code: 'BLACK 58 FS',  carrier: 'PE',  cb: '35% CB + 25% ash',    app: 'Inj. moulding, Extrusion, Blow moulding',         note: 'Filled' },
  { code: 'BLACK 101 FF', carrier: 'PE',  cb: '40% CB',              app: 'Inj. moulding, Extrusion, Blow moulding',         note: 'Food Grade' },
  { code: 'BLACK 141 FF', carrier: 'PE',  cb: '19% CB + 60% filler', app: 'Inj. moulding, Extrusion, Blow moulding',         note: 'Filled' },
  { code: 'BLACK 179 FF', carrier: 'PE',  cb: '40% CB',              app: 'Inj. moulding, Extrusion, Blow moulding',         note: 'Food Grade' },
  { code: 'BLACK 93 FF',  carrier: 'PP',  cb: '40% CB',              app: 'Fibres, filament, Inj. moulding, Extrusion',      note: 'PP Food Grade' },
  { code: 'BLACK 210 FF', carrier: 'PP',  cb: '35% CB',              app: 'Fibres, filament, Inj. moulding, Extrusion',      note: 'PP Grade' },
  { code: 'BLACK 207 FY', carrier: 'PET', cb: '30% CB',              app: 'Polyester filament & fibre, high-speed spinning', note: 'PET Fibre' },
  { code: 'BLACK 284 FY', carrier: 'PET', cb: '30% CB',              app: 'Polyester filament & fibre, high-speed spinning', note: 'PET Fibre' },
]

const FEATURES = [
  'High-structure carbon black for superior UV protection',
  'PE and PP carrier systems — broad process compatibility',
  'UV-stable grades rated for 10+ year outdoor performance',
  'Pipe-grade concentrate meeting PE100 colour requirements',
  'Cable-grade with excellent dispersion and volume resistivity',
  'Tight batch-to-batch colour consistency — jet black, no grey tone',
]

const BMB_PRODUCTS = [
  { name: 'BMB-PE Series', sub: 'PE carrier · Film & general applications', value: 'Black MB PE Series' },
  { name: 'BMB-PP Series', sub: 'PP carrier · Raffia, woven, non-woven', value: 'Black MB PP Series' },
  { name: 'Pipe Grade (BMB-PIPE)', sub: 'HDPE carrier · PE100 pipe systems', value: 'Black MB Pipe Grade' },
  { name: 'Cable Grade (BMB-CAB)', sub: 'LDPE carrier · Cable jacketing', value: 'Black MB Cable Grade' },
  { name: 'Not sure yet', sub: "We'll recommend the right grade", value: 'Not sure — need recommendation' },
]

const BMB_APPLICATIONS = ['Blown Film', 'Agricultural Film', 'Pipe & Fittings', 'Cable Jacketing', 'Conduit', 'Raffia / Woven', 'Non-woven', 'Injection Moulding']

const BMB_INDUSTRIES = [
  { image: '/images/industries cards/agriculture.png', name: 'Agriculture', href: '/industries/agriculture', desc: 'Black mulch film for weed suppression and soil moisture retention, silage stretch film, and UV-stable irrigation pipe. BMB-PE40 is rated for extended outdoor exposure.', tags: ['Mulch Film', 'Silage Film', 'Irrigation Pipe'] },
  { image: '/images/industries cards/pipes.png', name: 'Pipes & Infrastructure', href: '/industries/pipes', desc: 'PE100 water mains, gas distribution pipes, and sewage systems. BMB-PIPE meets the specific carbon black dispersion and loading requirements for pressure pipe systems.', tags: ['PE100 Pipe', 'Gas Pipe', 'Water Mains'] },
  { image: '/images/industries cards/wire_cable.png', name: 'Cable & Wire', href: '/industries/wire-cable', desc: 'Cable jacketing, conduit, and insulation for power and telecommunications. BMB-CAB provides the volume resistivity and UV stability required for outdoor cable systems.', tags: ['Cable Jacketing', 'Conduit', 'Insulation'] },
  { image: '/images/industries cards/packaging.png', name: 'Packaging & Film', href: '/industries/packaging', desc: 'Black packaging film, barrier bags, and agricultural packaging. Black MB delivers deep jet-black colour with no grey tone across blown and cast film lines.', tags: ['Black Film', 'Barrier Bags', 'Cast Film'] },
]

export default function BlackMBPage() {
  const specsRef = useRef(null)
  const specsInView = useInView(specsRef, { once: true, margin: '-60px' })
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: '-60px' })

  return (
    <>
      <PageHero
        breadcrumb={{ current: 'Black Masterbatch', parent: 'Products', parentHref: '/#products' }}
        badge="CORAPLAST DISTRIBUTED"
        badgeColor="#2B8DD0"
        title="Black Masterbatch"
        titleAccent="BMB Series"
        sub="High-structure carbon black concentrates engineered for jet-black depth and 10+ year UV protection — for pipes, agricultural film, cable jacketing, and outdoor applications."
        visual={{
          bg: 'linear-gradient(145deg, #000000 0%, #080808 35%, #101010 70%, #060606 100%)',
          dots: 'rgba(255,255,255,0.04)',
          symbol: 'CB',
          accent: '#64748B',
          chip: 'BMB SERIES',
          stat: { n: '10+ yrs', label: 'UV Protection' },
        }}
        cta={{
          primary: { label: 'Request a Quote', href: '#quote-form' },
          secondary: { label: 'View Grades', href: '#grades' },
        }}
      />

      {/* Intro */}
      <section style={{ background: '#fff', borderBottom: '1px solid rgba(20,27,62,0.07)', padding: '80px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} id="bmb-intro-grid">
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', border: '1px solid rgba(43,141,208,0.3)', borderRadius: 4, padding: '4px 12px', display: 'inline-block', marginBottom: 16 }}>
                What Is Black Masterbatch?
              </div>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 20, color: '#141B3E' }}>
                Carbon Black Concentrates for UV Protection and Depth
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(20,27,62,0.65)', lineHeight: 1.85, marginBottom: 18 }}>
                Black masterbatch is a concentrated dispersion of high-structure carbon black in a polymer carrier resin. Carbon black delivers deep, uniform black colouration and, critically, functions as a UV absorber — protecting the polymer matrix from photodegradation under prolonged outdoor exposure.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                {['Carbon Black', 'LDPE / LLDPE Carrier', 'PP Carrier', 'HDPE Carrier', '25–40% CB Loading'].map(s => (
                  <span key={s} style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 700, padding: '5px 12px', borderRadius: 5, background: 'rgba(43,141,208,0.07)', border: '1px solid rgba(43,141,208,0.18)', color: '#23447A' }}>{s}</span>
                ))}
              </div>
              <p style={{ fontSize: 16, color: 'rgba(20,27,62,0.65)', lineHeight: 1.85 }}>
                Black MB is used across PE, PP, and HDPE applications wherever consistent black depth, UV stability, and long service life are required — from agricultural film and pipe systems to cable jacketing.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ background: '#F7F8FC', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 14, padding: '28px 28px 24px' }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', marginBottom: 10 }}>UV Protection</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 900, color: '#141B3E', letterSpacing: '-0.01em', lineHeight: 1.3, marginBottom: 12 }}>10+ Year Outdoor Performance</h3>
                <p style={{ fontSize: 15, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8 }}>
                  High-structure carbon black absorbs UV radiation and converts it to heat, preventing chain scission in the polymer matrix. Multiple PE-carrier grades are rated for extended outdoor service life in agricultural, cable, and pipe applications.
                </p>
              </div>
              <div style={{ background: '#F7F8FC', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 14, padding: '28px 28px 24px' }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#64748B', marginBottom: 10 }}>Grade Range</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 900, color: '#141B3E', letterSpacing: '-0.01em', lineHeight: 1.3, marginBottom: 12 }}>PE, PP & PET Systems</h3>
                <p style={{ fontSize: 15, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8 }}>
                  15 grades across PE, PP, and PET carriers — covering standard film, food-contact, filled, and fibre/filament applications. CB loadings from 30% to 60%. Custom grades available on request.
                </p>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){ #bmb-intro-grid { grid-template-columns: 1fr !important; } }`}</style>
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
            <div style={{ marginBottom: 36 }}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', border: '1px solid rgba(46,127,208,0.3)', borderRadius: 4, padding: '4px 12px', display: 'inline-block', marginBottom: 14 }}>Grade Reference</div>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 8, color: '#141B3E' }}>A Selection of Available Grades</h2>
              <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, maxWidth: 620 }}>The grades below represent a sample of our black masterbatch portfolio — we carry a broader range across CB loadings, carrier resins, and food-contact standards. All grades supplied with TDS and CoA. <strong style={{ color: '#141B3E' }}>Contact us for the full product list or to discuss a specific requirement.</strong></p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 14, overflow: 'hidden', marginBottom: 40 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '150px 60px 1fr 1fr 120px', background: 'rgba(20,27,62,0.03)', borderBottom: '1px solid rgba(20,27,62,0.08)', padding: '12px 20px' }}>
                {['Grade Code', 'Carrier', 'CB / Content', 'Application', 'Type'].map(h => (
                  <div key={h} style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(20,27,62,0.35)' }}>{h}</div>
                ))}
              </div>
              {GRADES.map((g, i) => (
                <div key={g.code} style={{ display: 'grid', gridTemplateColumns: '150px 60px 1fr 1fr 120px', padding: '13px 20px', borderBottom: i < GRADES.length - 1 ? '1px solid rgba(20,27,62,0.07)' : 'none', transition: 'background 0.15s', alignItems: 'center' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(20,27,62,0.03)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, color: '#141B3E' }}>{g.code}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, color: g.carrier === 'PET' ? '#D4840A' : g.carrier === 'PP' ? '#2B8DD0' : 'rgba(20,27,62,0.5)' }}>{g.carrier}</div>
                  <div style={{ fontSize: 12, color: 'rgba(20,27,62,0.65)' }}>{g.cb}</div>
                  <div style={{ fontSize: 12, color: 'rgba(20,27,62,0.55)' }}>{g.app}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, color: g.note === 'Food Grade' || g.note === 'PP Food Grade' ? '#16A34A' : g.note === 'High Loading' || g.note === 'High CB' ? '#2B8DD0' : g.note === 'Filled' || g.note === 'PP Grade' || g.note === 'PET Fibre' ? '#D4840A' : 'rgba(20,27,62,0.35)' }}>{g.note}</div>
                </div>
              ))}
            </div>

            {/* More grades note */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px', background: 'rgba(43,141,208,0.05)', border: '1px solid rgba(43,141,208,0.15)', borderRadius: 10, marginBottom: 32 }}>
              <span style={{ fontSize: 18 }}>ℹ️</span>
              <p style={{ fontSize: 13, color: 'rgba(20,27,62,0.65)', lineHeight: 1.6 }}>
                This is a selection from our full black masterbatch range. Additional grades — including speciality CB loadings, UV-stable agricultural grades, and pipe-certified concentrates — are available on request. <strong style={{ color: '#2B8DD0' }}>Contact us to discuss your specific requirement.</strong>
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
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section style={{ background: '#F7F8FC', padding: '72px 48px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', border: '1px solid rgba(43,141,208,0.3)', borderRadius: 4, padding: '4px 12px', display: 'inline-block', marginBottom: 14 }}>Industries</div>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 10, color: '#141B3E' }}>Where Black Masterbatch Is Used</h2>
            <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, maxWidth: 520 }}>Black masterbatch serves critical UV protection and aesthetic roles across agriculture, infrastructure, cable, and packaging — wherever deep, consistent black is required.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
            {BMB_INDUSTRIES.map(ind => {
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
            style={{ marginBottom: 36, paddingTop: 72 }}
          >
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#D4840A', border: '1px solid rgba(212,132,10,0.3)', borderRadius: 4, padding: '4px 12px', display: 'inline-block', marginBottom: 14 }}>Request a Quote</div>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 8 }}>Get Black Masterbatch Pricing</h2>
            <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, maxWidth: 520 }}>Tell us your grade, quantity, and application — we'll respond within 24 hours with pricing and samples if needed.</p>
          </motion.div>
          <QuoteForm
            products={BMB_PRODUCTS}
            defaultProduct="Black MB PE Series"
            applications={BMB_APPLICATIONS}
            step1Title="Select Black MB Grade"
            step1Sub="Choose a series or tell us your application"
          />
        </div>
        <style>{`@media(max-width:900px){ section { padding-left: 20px !important; padding-right: 20px !important; } } .ind-link:hover { border-color: rgba(43,141,208,0.4) !important; }`}</style>
      </section>


    </>
  )
}
