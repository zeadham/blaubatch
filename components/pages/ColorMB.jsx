'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle2, Palette, FlaskConical, Leaf, Sun, Film, Settings } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import ColorQuoteForm from '@/components/shared/ColorQuoteForm'
import IsoBadges from '@/components/shared/IsoBadges'


const FAMILIES = [
  { name: 'Standard Colours',          sub: 'RAL & Pantone library',       desc: 'Over 2,000 stocked references across RAL Classic, RAL Design, and Pantone TPX systems — ready for immediate sampling.', icon: Palette },
  { name: 'Custom Matching',           sub: 'Colour lab service',          desc: 'Submit a physical sample, brand reference, or colour code. We return matched pellets and a ΔE report within 5 business days.', icon: FlaskConical },
  { name: 'Food-Contact Grades',       sub: 'EU 10/2011 & FDA',            desc: 'White, black, and colour masterbatch grades compliant with EU 10/2011 Regulation and FDA 21 CFR for food packaging applications.', icon: Leaf },
  { name: 'UV-Stable Colours',         sub: 'Lightfastness 7–8',           desc: 'Outdoor-grade colours with ISO 105-B02 lightfastness ratings ≥7. Suitable for agricultural film, pipe, and construction profiles.', icon: Sun },
  { name: 'Masterbatch for Film',      sub: 'Blown & cast film grades',    desc: 'Low MFI concentrates designed for thin film lines — excellent dispersibility, no gels, optimised let-down ratios.', icon: Film },
  { name: 'Engineering Polymer Grades',sub: 'ABS · PA · PC · PET',        desc: 'High-temperature stable pigment systems for ABS, polyamide, polycarbonate, and PET resins.', icon: Settings },
]

const FEATURES = [
  'Coraplast-sourced — ISO 9001 and ISO 14001 certified manufacturing',
  'Consistent batch-to-batch ΔE ≤ 0.5 across production runs',
  'Wide carrier compatibility — PE, PP, PS, ABS, PA, PC, PET',
  'Typical let-down ratio 1–3% for standard applications',
  'Food-contact grades available with full regulatory documentation',
  'Custom development from physical sample or digital colour reference',
]

const CMB_INDUSTRIES = [
  { image: '/images/industries cards/consumer_good.png', name: 'Consumer Goods',      desc: 'Coloured packaging, household products, toys, and personal care containers. Colour MB enables brand-consistent RAL/Pantone shades across PE and PP substrates.',                              tags: ['Household', 'Personal Care', 'Toys'] },
  { image: '/images/industries cards/packaging.png',      name: 'Packaging & Retail',  href: '/industries/packaging', desc: 'Branded retail packaging, coloured film, and decorative bags. Custom colour development from reference samples or RAL/Pantone codes with ΔE ≤ 0.5 consistency.',     tags: ['Retail Packaging', 'Coloured Film', 'Bags'] },
  { image: '/images/industries cards/automotive.png',     name: 'Automotive',          href: '/industries/automotive', desc: 'Interior trim components, technical parts, and under-bonnet applications in PP and PA compounds. Colour matched to OEM specifications with heat-stable pigment systems.', tags: ['Interior Trim', 'Technical Parts', 'PP Compounds'] },
  { image: '/images/industries cards/textiles.png',       name: 'Textiles & Non-Woven',href: '/industries/textiles',  desc: 'Coloured fibres, carpet backing yarns, and coloured non-wovens. Colour MB in PP carrier for fibre and non-woven applications with controlled MFI.',                    tags: ['Coloured Fibre', 'Carpet Yarn', 'NW Fabric'] },
]

export default function ColorMBPage() {
  const familiesRef = useRef(null)
  const familiesInView = useInView(familiesRef, { once: true, margin: '-60px' })
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: '-60px' })

  return (
    <>
      <PageHero
        breadcrumb={{ current: 'Colour Masterbatch', parent: 'Products', parentHref: '/#products' }}
        badge="CORAPLAST DISTRIBUTED"
        badgeColor="#2B8DD0"
        title="Colour Masterbatch"
        titleAccent="Full Spectrum Solutions"
        sub="Exact colour matching across RAL and Pantone systems, custom colour development, and food-contact compliant grades — for PE, PP, PS, ABS, PA, PC, and PET."
        split
        bgImage="/images/heroes/Color_masterbatch.webp"
        cta={{
          primary: { label: 'Request Colour Sample', href: '#quote-form' },
          secondary: { label: 'View Colour Families', href: '#families' },
        }}
      />

      {/* Intro */}
      <section style={{ background: '#fff', borderBottom: '1px solid rgba(20,27,62,0.07)', padding: '80px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} id="cmb-intro-grid">
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', border: '1px solid rgba(43,141,208,0.3)', borderRadius: 4, padding: '5px 14px', display: 'inline-block', marginBottom: 16 }}>
                What Is Colour Masterbatch?
              </div>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 20, color: '#141B3E' }}>
                Pigment Concentrates Across Every Major Polymer
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(20,27,62,0.65)', lineHeight: 1.85, marginBottom: 18 }}>
                Colour masterbatch is a highly concentrated blend of pigments and dyes dispersed in a compatible carrier resin. It is added to natural polymer at the processing stage to introduce precise, reproducible colour — without the handling hazards or batch inconsistencies of raw pigment powder.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                {['LDPE / LLDPE', 'HDPE', 'PP', 'PS / HIPS', 'ABS', 'PA · PC · PET'].map(s => (
                  <span key={s} style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 700, padding: '5px 12px', borderRadius: 5, background: 'rgba(43,141,208,0.07)', border: '1px solid rgba(43,141,208,0.18)', color: '#23447A' }}>{s}</span>
                ))}
              </div>
              <p style={{ fontSize: 16, color: 'rgba(20,27,62,0.65)', lineHeight: 1.85 }}>
                Carrier systems cover PE, PP, PS, ABS, PA, PC, and PET — with typical let-down ratios of 1–3% for standard applications. Over 2,000 stocked colour references, plus full custom matching capability from any reference.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ background: '#F7F8FC', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 14, padding: '28px 28px 24px' }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', marginBottom: 10 }}>Colour Development</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 900, color: '#141B3E', letterSpacing: '-0.01em', lineHeight: 1.3, marginBottom: 12 }}>RAL, Pantone & Custom Matching</h3>
                <p style={{ fontSize: 15, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8 }}>
                  Submit a physical sample, RAL code, Pantone reference, or hex value. Matched pellets and a full ΔE measurement report are returned within 5 business days. Batch-to-batch ΔE ≤ 0.5 guaranteed in production.
                </p>
              </div>
              <div style={{ background: '#F7F8FC', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 14, padding: '28px 28px 24px' }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#D4840A', marginBottom: 10 }}>Food-Contact & Regulatory</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 900, color: '#141B3E', letterSpacing: '-0.01em', lineHeight: 1.3, marginBottom: 12 }}>EU 10/2011 & FDA Compliant</h3>
                <p style={{ fontSize: 15, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8 }}>
                  Food-contact grades available for PE, PP, and PET substrates. Full regulatory documentation supplied — EU Regulation 10/2011 and FDA 21 CFR declarations provided on request.
                </p>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){ #cmb-intro-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Colour Families */}
      <section id="families" style={{ background: '#F7F8FC', padding: '80px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div
            ref={familiesRef}
            initial={{ opacity: 0, y: 24 }}
            animate={familiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ marginBottom: 36 }}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', border: '1px solid rgba(46,127,208,0.35)', borderRadius: 4, padding: '5px 14px', display: 'inline-block', marginBottom: 14 }}>Product Range</div>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 8, color: '#141B3E' }}>Colour Product Families</h2>
              <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, maxWidth: 620 }}>The families below represent a sample of our colour masterbatch range — we carry over 2,000 stocked references plus full custom development capability. All grades supplied with TDS and CoA. <strong style={{ color: '#141B3E' }}>Contact us with your colour target and we'll match it.</strong></p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 40 }}>
              {FAMILIES.map((f, i) => (
                <motion.div key={f.name}
                  initial={{ opacity: 0, y: 24 }} animate={familiesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  style={{ background: '#FFFFFF', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 14, padding: '24px', transition: 'all 0.3s ease' }}
                  whileHover={{ borderColor: 'rgba(46,127,208,0.35)', y: -3 }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(43,141,208,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <f.icon size={20} strokeWidth={1.5} color="#2B8DD0" />
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 900, color: '#141B3E', marginBottom: 4 }}>{f.name}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 700, color: '#2B8DD0', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>{f.sub}</div>
                  <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.7 }}>{f.desc}</p>
                </motion.div>
              ))}
            </div>

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
                This is a sample of our colour capabilities. We match any RAL, Pantone, or physical reference across all major carrier resins — with ΔE ≤ 0.5 batch consistency. <strong style={{ color: '#2B8DD0' }}>Contact us to request a sample or start a colour development project.</strong>
              </p>
            </div>

            <IsoBadges />
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section style={{ background: '#F7F8FC', padding: '72px 48px 0', borderTop: '1px solid rgba(20,27,62,0.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', border: '1px solid rgba(43,141,208,0.3)', borderRadius: 4, padding: '5px 14px', display: 'inline-block', marginBottom: 14 }}>Industries</div>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 10, color: '#141B3E' }}>Where Colour Masterbatch Is Used</h2>
            <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, maxWidth: 520 }}>Colour masterbatch is used wherever colour consistency, brand matching, and substrate compatibility are critical — from consumer packaging to technical automotive parts.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
            {CMB_INDUSTRIES.map(ind => {
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
            style={{ marginBottom: 36, paddingTop: 72, maxWidth: 900, margin: '0 auto', paddingBottom: 0 }}
          >
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#D4840A', border: '1px solid rgba(212,132,10,0.3)', borderRadius: 4, padding: '5px 14px', display: 'inline-block', marginBottom: 14 }}>Request a Sample or Quote</div>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 8, color: '#141B3E' }}>Get a Colour Masterbatch Quote</h2>
            <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, maxWidth: 520, marginBottom: 36 }}>Share your colour target, carrier resin, and required volume — we'll respond within 24 hours with pricing and a matched sample.</p>
          </motion.div>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <ColorQuoteForm />
          </div>
        </div>
        <style>{`@media(max-width:900px){ section { padding-left: 20px !important; padding-right: 20px !important; } } .ind-link:hover { border-color: rgba(43,141,208,0.4) !important; } .ind-link:hover img { transform: scale(1.06); }`}</style>
      </section>
    </>
  )
}
