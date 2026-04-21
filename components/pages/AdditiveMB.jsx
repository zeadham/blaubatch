'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import PageHero from '@/components/shared/PageHero'
import QuoteForm from '@/components/shared/QuoteForm'
import IsoBadges from '@/components/shared/IsoBadges'


const GRADES = [
  { code: 'AMB-UV10', carrier: 'LDPE / LLDPE', type: 'UV Stabiliser', app: 'Mulch film, greenhouse film, outdoor packaging', note: 'UV Stabiliser' },
  { code: 'AMB-SA03', carrier: 'LDPE / PP', type: 'Erucamide', app: 'Blown film, bags, flexible packaging', note: 'Slip Agent' },
  { code: 'AMB-AB05', carrier: 'LDPE', type: 'Silica-based', app: 'Film, packaging, food contact bags', note: 'Antiblock' },
  { code: 'AMB-AS10', carrier: 'LDPE / PP', type: 'Permanent', app: 'Electronic packaging, technical film', note: 'Anti-static' },
  { code: 'AMB-OB05', carrier: 'LDPE / PP', type: 'OB-1 / OB-2', app: 'Film, fibre, injection moulding', note: 'Optical Brightener' },
  { code: 'AMB-FR20', carrier: 'LDPE', type: 'Halogen-free', app: 'Cable jacketing, insulation, conduit', note: 'Flame Retardant' },
]

const FEATURES = [
  'HALS-based UV stabilisers rated for 10+ year outdoor performance',
  'Slip and antiblock agents for film-to-film release and anti-stick',
  'Permanent anti-static grades — does not wash off or migrate',
  'Optical brighteners for high-whiteness and fluorescence in film & fibre',
  'Halogen-free flame retardant grades for cable and technical applications',
  'All grades supplied with TDS, CoA, and technical dosage guidance',
]

const AMB_PRODUCTS = [
  { name: 'UV Stabiliser (AMB-UV)', sub: 'HALS-based · Outdoor & agricultural', value: 'Additive MB UV Stabiliser' },
  { name: 'Slip / Antiblock (AMB-SA/AB)', sub: 'Erucamide slip · Silica antiblock', value: 'Additive MB Slip/Antiblock' },
  { name: 'Anti-static (AMB-AS)', sub: 'Permanent grade · Film & packaging', value: 'Additive MB Anti-static' },
  { name: 'Optical Brightener (AMB-OB)', sub: 'OB-1/OB-2 · Film, fibre, moulding', value: 'Additive MB Optical Brightener' },
  { name: 'Flame Retardant (AMB-FR)', sub: 'Halogen-free · Cable & insulation', value: 'Additive MB Flame Retardant' },
  { name: 'Not sure yet', sub: "We'll recommend the right additive", value: 'Not sure — need recommendation' },
]

const AMB_APPLICATIONS = ['Blown Film', 'Agricultural Film', 'Greenhouse Film', 'Cable Jacketing', 'Electronic Packaging', 'Fibre & Yarn', 'Injection Moulding', 'Non-woven']

const AMB_INDUSTRIES = [
  { image: '/images/industries cards/agriculture.png', name: 'Agriculture', href: '/industries/agriculture', desc: 'UV stabilisers (HALS-based) for greenhouse film, mulch, silage, and irrigation pipe. Blended with filler or white MB for complete performance packages.', tags: ['UV Stabiliser', 'Greenhouse', 'Mulch Film'] },
  { image: '/images/industries cards/pipes.png', name: 'Pipes & Infrastructure', href: '/industries/pipes', desc: 'Antioxidants and thermal stabilisers for long-service-life PE and PP pipe systems. Ensures polymer stability through processing and service conditions.', tags: ['Antioxidants', 'Thermal Stab.', 'PE/PP Pipe'] },
  { image: '/images/industries cards/wire_cable.png', name: 'Cable & Wire', href: '/industries/wire-cable', desc: 'Flame retardant and UV-stable additive MB for cable jacketing, conduit, and insulation. Halogen-free flame retardant options available.', tags: ['Flame Retardant', 'UV Stable', 'Cable'] },
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
        sub="Precision performance additives that extend product life, improve processing, and meet compliance requirements — UV stabilisers, slip, antiblock, anti-static, OB, and flame retardants."
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
                What Is Additive Masterbatch?
              </div>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 20, color: '#141B3E' }}>
                Functional Performance Additives in Carrier Systems
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(20,27,62,0.65)', lineHeight: 1.85, marginBottom: 18 }}>
                Additive masterbatch is a concentrated carrier system for functional performance additives. Rather than handling and dosing raw additives directly, processors blend additive MB into their base resin at a controlled let-down ratio to achieve precise, uniform additive distribution throughout the finished part.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                {['UV Stabiliser', 'Slip Agent', 'Antiblock', 'Anti-static', 'Optical Brightener', 'Flame Retardant'].map(s => (
                  <span key={s} style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 700, padding: '5px 12px', borderRadius: 5, background: 'rgba(43,141,208,0.07)', border: '1px solid rgba(43,141,208,0.18)', color: '#23447A' }}>{s}</span>
                ))}
              </div>
              <p style={{ fontSize: 16, color: 'rgba(20,27,62,0.65)', lineHeight: 1.85 }}>
                It is used wherever polymer performance beyond colour or opacity is required — extending product life, improving processing, and meeting regulatory compliance requirements.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ background: '#F7F8FC', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 14, padding: '28px 28px 24px' }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', marginBottom: 10 }}>Technical Documentation</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 900, color: '#141B3E', letterSpacing: '-0.01em', lineHeight: 1.3, marginBottom: 12 }}>TDS, CoA & Dosage Support</h3>
                <p style={{ fontSize: 15, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8 }}>
                  Every grade is supplied with a Technical Data Sheet, Certificate of Analysis, and recommended dosage guidance. Technical support is available throughout the trial and conversion period.
                </p>
              </div>
              <div style={{ background: '#F7F8FC', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 14, padding: '28px 28px 24px' }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#D4840A', marginBottom: 10 }}>Custom Formulation</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 900, color: '#141B3E', letterSpacing: '-0.01em', lineHeight: 1.3, marginBottom: 12 }}>Carrier & Combination on Request</h3>
                <p style={{ fontSize: 15, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8 }}>
                  Additive MB can be produced in LDPE, PP, or HDPE carrier systems with tailored additive concentrations. Combined formulations — such as UV stabiliser + anti-static — are available on request.
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
                    <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, maxWidth: 620, marginBottom: 32 }}>The grades below represent a sample of our additive masterbatch portfolio — we carry a broader range of additive types, concentrations, and carrier systems. All grades supplied with TDS and CoA. <strong style={{ color: '#141B3E' }}>Contact us for the full product list or to discuss a specific requirement.</strong></p>

            <div style={{ background: '#FFFFFF', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 14, overflow: 'hidden', marginBottom: 40 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr 1fr 1fr 130px', background: 'rgba(20,27,62,0.03)', borderBottom: '1px solid rgba(20,27,62,0.08)', padding: '12px 20px' }}>
                {['Grade Code', 'Carrier', 'Active', 'Application', 'Type'].map(h => (
                  <div key={h} style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(20,27,62,0.35)' }}>{h}</div>
                ))}
              </div>
              {GRADES.map((g, i) => (
                <div key={g.code} style={{ display: 'grid', gridTemplateColumns: '140px 1fr 1fr 1fr 130px', padding: '14px 20px', borderBottom: i < GRADES.length - 1 ? '1px solid rgba(20,27,62,0.06)' : 'none', transition: 'background 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(20,27,62,0.03)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, color: '#141B3E' }}>{g.code}</div>
                  <div style={{ fontSize: 12, color: 'rgba(20,27,62,0.6)' }}>{g.carrier}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 700, color: '#2B8DD0' }}>{g.type}</div>
                  <div style={{ fontSize: 12, color: 'rgba(20,27,62,0.6)' }}>{g.app}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, color: g.note === 'UV Stabiliser' ? '#2B8DD0' : g.note === 'Flame Retardant' ? '#D4840A' : 'rgba(20,27,62,0.35)' }}>{g.note}</div>
                </div>
              ))}
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

            {/* More grades note */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px', background: 'rgba(43,141,208,0.05)', border: '1px solid rgba(43,141,208,0.15)', borderRadius: 10, marginBottom: 32 }}>
              <span style={{ fontSize: 18 }}>ℹ️</span>
              <p style={{ fontSize: 13, color: 'rgba(20,27,62,0.65)', lineHeight: 1.6 }}>
                This is a selection from our full additive masterbatch range. Additional grades — including processing aids, desiccants, anti-fog, and combination formulations — are available on request. <strong style={{ color: '#2B8DD0' }}>Contact us to discuss your specific requirement.</strong>
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
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', border: '1px solid rgba(43,141,208,0.3)', borderRadius: 4, padding: '5px 14px', display: 'inline-block', marginBottom: 14 }}>Industries</div>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 10, color: '#141B3E' }}>Where Additive Masterbatch Is Used</h2>
            <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, maxWidth: 520 }}>Additive masterbatch is used across every processing application — wherever performance enhancement beyond colour or filler is needed.</p>
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
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#D4840A', border: '1px solid rgba(212,132,10,0.3)', borderRadius: 4, padding: '5px 14px', display: 'inline-block', marginBottom: 14 }}>Request a Quote</div>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 8, color: '#141B3E' }}>Get Additive Masterbatch Pricing</h2>
            <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, maxWidth: 520 }}>Tell us your additive type, quantity, and application — we'll respond within 24 hours with pricing and samples if needed.</p>
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
