'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Factory, Globe, Award, Users } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'


const STATS = [
  { val: '2023', label: 'Founded', sub: '6th of October City, Egypt' },
  { val: '8,000+', label: 'Annual Capacity', sub: 'Tonnes manufactured' },
  { val: '1', label: 'Supplier', sub: 'Full masterbatch spectrum' },
  { val: '24h', label: 'Turnaround', sub: 'Quote to confirmation' },
  { val: 'Custom', label: 'Colour Matching & Formulation', sub: 'RAL · Pantone · Bespoke' },
  { val: '∞', label: 'Support', sub: 'Pre & post-sales' },
]

const PILLARS = [
  { icon: Factory, title: 'In-House Manufacturing', desc: 'Our 6th of October City facility produces FMPE and FMPP Series masterbatch — giving us direct control over raw material selection, compounding, and QC. Every batch is tested for MFI, ash content, colour, and dispersibility before dispatch.' },
  { icon: Globe, title: 'Exclusive Distribution', desc: 'For the full product spectrum — white, black, colour, and additive masterbatch — we are the exclusive regional distributor for Coraplast, a globally certified manufacturer operating to ISO 9001 and ISO 14001 standards.' },
  { icon: Award, title: 'Technical Competence', desc: 'Our team brings deep processing knowledge across blown film, raffia, pipe, injection moulding, and extrusion coating lines. We don\'t just ship pellets — we recommend the right grade and dosage for your specific machine and application.' },
  { icon: Users, title: 'Responsive Partnership', desc: 'We operate as a hands-on partner, not a catalogue supplier. Quick sampling, technical data on request, and direct access to our compounding engineers — without the overhead of a multinational sales structure.' },
]

const TIMELINE = [
  { year: 'Founded · 2023', event: 'Blau Batch established in 6th of October City, Egypt — focusing on PE filler masterbatch production for the regional film and packaging sector.' },
  { year: 'Manufacturing', event: 'In-house compounding line commissioned. FMPE and FMPP Series (70–80% CaCO₃) both launched from day one — covering PE and PP carrier systems for film, raffia, and injection moulding applications.' },
  { year: 'Distribution', event: 'Partnership established with Coraplast for regional distribution of white, black, colour, and additive masterbatch product lines across MENA.' },
  { year: 'Expansion', event: 'Customer base extended into Gulf Cooperation Council markets and the Levant. Export logistics established to serve clients across Egypt, Saudi Arabia, UAE, and Jordan.' },
  { year: 'Today', event: 'Serving plastic manufacturers across Egypt, Gulf Cooperation Council markets, and the Levant — with ambitions to expand into European distribution channels.' },
]

export default function AboutPage() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const inView1 = useInView(ref1, { once: true, margin: '-60px' })
  const inView2 = useInView(ref2, { once: true, margin: '-60px' })
  const inView3 = useInView(ref3, { once: true, margin: '-60px' })

  return (
    <>
      <PageHero
        split
        breadcrumb={{ current: 'About' }}
        tag="Our Story"
        title="Masterbatch, Made"
        titleAccent="to a Higher Standard"
        badgeColor="#2B8DD0"
        sub="Egyptian masterbatch manufacturer and regional distributor. We produce filler masterbatch in-house and bring the full Coraplast range to plastics producers across MENA and Europe."
        bgImage="/images/heroes/about.webp"
        cta={{
          primary: { label: 'View Our Products', href: '/#products' },
          secondary: { label: 'Contact Us', href: '/contact' },
        }}
      />

      {/* Stats bar */}
      <section style={{ background: '#FFFFFF', borderBottom: '1px solid rgba(20,27,62,0.08)', padding: '48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 0 }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{ textAlign: 'center', padding: '16px 24px', borderRight: i < STATS.length - 1 ? '1px solid rgba(20,27,62,0.08)' : 'none' }}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 900, color: '#2B8DD0', lineHeight: 1, marginBottom: 6 }}>{s.val}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 800, color: '#141B3E', letterSpacing: '0.04em', marginBottom: 3 }}>{s.label}</div>
              <div style={{ fontSize: 11, color: 'rgba(20,27,62,0.4)' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Four pillars */}
      <section style={{ background: '#F7F8FC', padding: '88px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div ref={ref1}>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
              style={{ display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', border: '1px solid rgba(46,127,208,0.3)', borderRadius: 4, padding: '5px 14px', marginBottom: 16 }}
            >How We Operate</motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.07 }}
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 40, lineHeight: 1.1, color: '#141B3E' }}
            >Our Four Pillars</motion.h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
            {PILLARS.map((p, i) => (
              <motion.div key={p.title}
                initial={{ opacity: 0, y: 24 }} animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                style={{ background: '#FFFFFF', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 14, padding: '28px', display: 'flex', gap: 18 }}
              >
                <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 10, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                  <p.icon size={22} color="#2B8DD0" strokeWidth={1.5} />
                </div>
                <div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 900, color: '#141B3E', marginBottom: 8 }}>{p.title}</div>
                  <p style={{ fontSize: 13, color: 'rgba(20,27,62,0.6)', lineHeight: 1.75 }}>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: '#FFFFFF', padding: '88px 48px', borderTop: '1px solid rgba(20,27,62,0.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 72, alignItems: 'start' }}>
          <div ref={ref2}>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
              style={{ display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#D4840A', border: '1px solid rgba(212,132,10,0.35)', borderRadius: 4, padding: '5px 14px', marginBottom: 16 }}
            >Our Journey</motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.07 }}
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 18, lineHeight: 1.1, color: '#141B3E' }}
            >Built to Last</motion.h2>
            <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8 }}>From a focused PE filler masterbatch producer to a full-spectrum masterbatch partner for the MENA region — our growth has been deliberate and technically grounded.</p>
          </div>
          <div>
            {TIMELINE.map((t, i) => (
              <motion.div key={t.year}
                initial={{ opacity: 0, x: 20 }} animate={inView2 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                style={{ display: 'flex', gap: 20, paddingBottom: i < TIMELINE.length - 1 ? 28 : 0, position: 'relative' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#2B8DD0', border: '2px solid #2B8DD0', marginTop: 4, flexShrink: 0 }} />
                  {i < TIMELINE.length - 1 && <div style={{ width: 1, flex: 1, background: 'rgba(46,127,208,0.25)', marginTop: 6 }} />}
                </div>
                <div style={{ paddingBottom: i < TIMELINE.length - 1 ? 12 : 0 }}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 800, color: '#2B8DD0', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>{t.year}</div>
                  <p style={{ fontSize: 13, color: 'rgba(20,27,62,0.7)', lineHeight: 1.75 }}>{t.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ background: '#ffffff', padding: '88px 48px', borderTop: '1px solid rgba(20,27,62,0.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', border: '1px solid rgba(43,141,208,0.3)', borderRadius: 4, padding: '5px 14px', marginBottom: 16 }}>Purpose</div>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#141B3E' }}>Mission & Vision</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>

            {/* Mission */}
            <div style={{ background: '#F3F8FE', border: '1px solid rgba(43,141,208,0.15)', borderRadius: 20, padding: '40px 36px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(43,141,208,0.06)' }} />
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: 12, background: '#2B8DD0', marginBottom: 24 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2B8DD0', marginBottom: 10 }}>Our Mission</div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 22, fontWeight: 900, color: '#141B3E', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16 }}>
                One Partner for Every Grade Your Production Needs
              </h3>
              <p style={{ fontSize: 15, color: 'rgba(20,27,62,0.65)', lineHeight: 1.85 }}>
                To be the most reliable masterbatch partner for plastics processors across MENA and Europe — delivering consistent quality, technical expertise, and the full product spectrum through a single, accountable relationship.
              </p>
            </div>

            {/* Vision */}
            <div style={{ background: '#FEF9F5', border: '1px solid rgba(212,132,10,0.15)', borderRadius: 20, padding: '40px 36px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(212,132,10,0.06)' }} />
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: 12, background: '#D4840A', marginBottom: 24 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D4840A', marginBottom: 10 }}>Our Vision</div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 22, fontWeight: 900, color: '#141B3E', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16 }}>
                The Reference Masterbatch Supplier in the MENA Region
              </h3>
              <p style={{ fontSize: 15, color: 'rgba(20,27,62,0.65)', lineHeight: 1.85 }}>
                To grow into the region's reference manufacturer and distributor — recognised not just for product range, but for technical depth, supply reliability, and the long-term partnerships we build with processors at every scale.
              </p>
            </div>

          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            #mv-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Values */}
      <section style={{ background: '#F7F8FC', padding: '88px 48px', borderTop: '1px solid rgba(20,27,62,0.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div ref={ref3} style={{ textAlign: 'center', marginBottom: 56 }}>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
              style={{ display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', border: '1px solid rgba(46,127,208,0.3)', borderRadius: 4, padding: '5px 14px', marginBottom: 16 }}
            >What We Stand For</motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.07 }}
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#141B3E' }}
            >Our Commitments</motion.h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {[
              { title: 'Consistency', desc: 'Every batch meets the same specification. Our QC process exists so your process doesn\'t have to compensate for ours.' },
              { title: 'Transparency', desc: 'Full traceability from raw material intake to dispatch. TDS and CoA available on request for every shipment.' },
              { title: 'Technical Depth', desc: 'We understand your machine, not just our product. Grade selection and dosage advice are part of the service.' },
            ].map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 24 }} animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                style={{ background: '#FFFFFF', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 14, padding: '28px' }}
              >
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 900, color: '#141B3E', marginBottom: 12 }}>{v.title}</div>
                <p style={{ fontSize: 13, color: 'rgba(20,27,62,0.6)', lineHeight: 1.75 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F7F8FC', padding: '80px 48px', borderTop: '1px solid rgba(20,27,62,0.08)', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#D4840A', marginBottom: 16 }}>Work With Us</div>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 16, lineHeight: 1.1, color: '#141B3E' }}>Ready to discuss your requirements?</h2>
          <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, marginBottom: 32 }}>Tell us about your process, your polymer, and your target application. We'll respond within 24 hours.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:info@blaubatch.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', background: '#2B8DD0', color: '#fff', borderRadius: 8, fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#2B8DD0'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#2B8DD0'; e.currentTarget.style.transform = 'none' }}
            >Contact Us <ArrowRight size={14} /></a>
            <Link href="/distributors" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', background: 'transparent', color: '#141B3E', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 8, fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(20,27,62,0.4)'; e.currentTarget.style.background = 'rgba(0,0,0,0.02)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(20,27,62,0.08)'; e.currentTarget.style.background = 'transparent' }}
            >Find a Distributor</Link>
          </div>
        </div>
      </section>


      <style>{`@media(max-width:900px){ section > div { grid-template-columns: 1fr !important; } section { padding: 56px 20px !important; } }`}</style>
    </>
  )
}
