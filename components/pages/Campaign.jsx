'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle2, Mail, Phone, MessageCircle,
  Factory, Package, Leaf, Wrench, Cable, Car, Building2,
  ShoppingBag, Zap, Shield, Globe, Users, ChevronRight,
} from 'lucide-react'

/* ── animation helpers ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] },
})
const inFade = (inView, delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: inView ? { opacity: 1, y: 0 } : {},
  transition: { duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] },
})

/* ── data ── */
const CYCLE = ['Filler', 'White', 'Black', 'Colour', 'Additive']
const CYCLE_COLORS = { Filler: '#D4840A', White: '#23447A', Black: '#141B3E', Colour: '#2B8DD0', Additive: '#2B8DD0' }

const PRODUCTS = [
  {
    code: 'FMPE', name: 'PE Filler Masterbatch', badge: 'MANUFACTURED', badgeColor: '#D4840A',
    image: '/images/product_cards/filler masterbatch PE.png',
    desc: 'CaCO₃-based filler in LDPE/LLDPE carrier. 60–80% loading. Blown film, bags, and general extrusion.',
    href: '/fmpe', specs: ['60–80% CaCO₃', 'LDPE/LLDPE Carrier', 'Blown Film & Extrusion'],
  },
  {
    code: 'FMPP', name: 'PP Filler Masterbatch', badge: 'MANUFACTURED', badgeColor: '#D4840A',
    image: '/images/product_cards/FMPP.png',
    desc: 'CaCO₃-based filler in PP homopolymer carrier. BOPP, raffia, woven sacks, and PPR pipe.',
    href: '/fmpp', specs: ['60–75% CaCO₃', 'PP Carrier', 'BOPP / Raffia / Pipe'],
  },
  {
    code: 'WHITE', name: 'White Masterbatch', badge: 'CORAPLAST', badgeColor: '#2B8DD0',
    image: '/images/product_cards/wmb.png',
    desc: 'TiO₂-based white in PE and PET carriers. High opacity, food-contact compliant grades available.',
    href: '/white-masterbatch', specs: ['TiO₂ Pigment', 'PE / PET Carrier', 'Food-Contact Grades'],
  },
  {
    code: 'BLACK', name: 'Black Masterbatch', badge: 'CORAPLAST', badgeColor: '#2B8DD0',
    image: '/images/product_cards/blackmasterbatch.png',
    desc: 'Carbon black concentrates for pipe, film, cable, and technical moulding. UV-protective grades.',
    href: '/black-masterbatch', specs: ['Carbon Black', 'UV Protective', 'Pipe / Cable / Film'],
  },
  {
    code: 'COLOUR', name: 'Colour Masterbatch', badge: 'CORAPLAST', badgeColor: '#2B8DD0',
    image: '/images/product_cards/cmb.png',
    desc: 'Full Pantone/RAL spectrum. Custom colour match and standard catalogue grades for all polymers.',
    href: '/color-masterbatch', specs: ['Full Colour Range', 'Custom Match', 'PE / PP / PET / ABS'],
  },
  {
    code: 'ADDITIVE', name: 'Additive Masterbatch', badge: 'CORAPLAST', badgeColor: '#2B8DD0',
    image: '/images/product_cards/Additives.png',
    desc: 'UV stabilisers, slip/antiblock, anti-static, optical brighteners, and flame retardant grades.',
    href: '/additive-masterbatch', specs: ['UV / Slip / OB / FR', 'PE / PP Carrier', 'Agricultural & Technical'],
  },
]

const INDUSTRIES = [
  { icon: Package,     label: 'Packaging & Film',  image: '/images/industries cards/packaging.png',      href: '/industries/packaging',      desc: 'Filler, colour, white & slip for blown film, bags, closures' },
  { icon: Wrench,      label: 'Pipes & Fittings',  image: '/images/industries cards/pipes2.png',          href: '/industries/pipes',          desc: 'Carbon black & CaCO₃ for HDPE, PPR, and PVC extrusion' },
  { icon: Leaf,        label: 'Agriculture',        image: '/images/industries cards/agriculture.png',     href: '/industries/agriculture',    desc: 'UV-stabilised grades for mulch, greenhouse & irrigation film' },
  { icon: Factory,     label: 'Textiles & Fibre',   image: '/images/industries cards/textiles2.png',       href: '/industries/textiles',       desc: 'Colour & filler for PP non-woven and filament spinning' },
  { icon: Building2,   label: 'Construction',       image: '/images/industries cards/construction.png',    href: '/industries/construction',   desc: 'Geomembrane and waterproofing sheet compounds' },
  { icon: Cable,       label: 'Wire & Cable',       image: '/images/industries cards/wire_cable.png',      href: '/industries/wire-cable',     desc: 'Carbon black & flame retardant for cable jacketing' },
  { icon: Car,         label: 'Automotive',         image: '/images/industries cards/automotive.png',      href: '/industries/automotive',     desc: 'Engineered concentrates for interior & exterior parts' },
  { icon: ShoppingBag, label: 'Consumer Goods',     image: '/images/industries cards/consumer_good.png',  href: '/industries/consumer-goods', desc: 'Food-contact colour for caps, closures & housewares' },
]

const ADVANTAGES = [
  { icon: Factory, color: '#D4840A', title: 'In-House Manufacturer',            desc: 'Own production in 6th of October — full process control, QC, and batch traceability on every run.' },
  { icon: Globe,   color: '#2B8DD0', title: 'Authorised Coraplast Distributor', desc: 'Direct distribution partnership — colour, white, black, additive and specialty grades shipped across MENA & Europe.' },
  { icon: Users,   color: '#2B8DD0', title: 'Technical Partnership',            desc: 'Custom formulation support, application engineering, and real production problem-solving with your team.' },
  { icon: Shield,  color: '#2B8DD0', title: 'Certified Quality per Batch',      desc: 'TDS and Certificate of Analysis issued per shipment. MFI, ash, colour, and dispersion tested every run.' },
  { icon: Zap,     color: '#D4840A', title: 'Fast Lead Times',                  desc: 'Core filler grades in stock. Specialty grades on established trade lanes — no surprises, no delays.' },
  { icon: Package, color: '#2B8DD0', title: 'Flexible MOQs',                    desc: 'Trial quantities available. Scale from sample to full production volumes with consistent pricing.' },
]

const PRODUCT_OPTIONS = [
  'Filler Masterbatch (PE)', 'Filler Masterbatch (PP)',
  'White Masterbatch',       'Black Masterbatch',
  'Colour Masterbatch',      'Additive Masterbatch',
  'Multiple Products',       'Not Sure — Need Advice',
]

/* ═══════════════════════════════════════════
   PAGE
═══════════════════════════════════════════ */
export default function CampaignPage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <PainSection />
      <ProductsSection />
      <IndustriesSection />
      <AdvantagesSection />
      <HowItWorksSection />
      <LeadFormSection />
    </>
  )
}

/* ═══════════════════════════════════════════
   1. HERO — split layout matching site style
═══════════════════════════════════════════ */
function HeroSection() {
  const [active, setActive] = useState(0)

  return <HeroCycler active={active} setActive={setActive} />
}

function HeroCycler({ active, setActive }) {
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % CYCLE.length), 3200)
    return () => clearInterval(t)
  }, [])

  const word = CYCLE[active]

  return (
    <section data-campaign-hero="" style={{
      marginTop: 88,
      minHeight: 'calc(100vh - 88px)',
      display: 'flex',
      flexDirection: 'row',
    }}>
      {/* LEFT — white text panel 40% */}
      <div style={{
        flex: '0 0 40%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px 56px 80px 80px',
        background: '#ffffff',
        zIndex: 1,
      }}>
        {/* Badge */}
        <motion.div {...fadeUp(0.04)} style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          border: '1px solid rgba(43,141,208,0.35)', borderRadius: 20,
          padding: '5px 14px', marginBottom: 28, alignSelf: 'flex-start',
          fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800,
          letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0',
          background: 'rgba(43,141,208,0.07)',
        }}>
          <span style={{ width: 6, height: 6, background: '#2B8DD0', borderRadius: '50%', animation: 'heroPulse 2s ease-in-out infinite' }} />
          One Source · Full Spectrum
        </motion.div>

        {/* H1 */}
        <motion.h1 {...fadeUp(0.1)} style={{
          fontFamily: 'Inter, sans-serif', fontWeight: 900,
          fontSize: 'clamp(34px, 3.8vw, 58px)', lineHeight: 1.04,
          letterSpacing: '-0.03em', marginBottom: 22, color: '#141B3E',
        }}>
          Every{' '}
          <AnimatePresence mode="wait">
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{ color: CYCLE_COLORS[word], display: 'inline-block' }}
            >{word}</motion.span>
          </AnimatePresence>
          {' '}Grade.<br />One Trusted<br />Supplier.
        </motion.h1>

        {/* Sub */}
        <motion.p {...fadeUp(0.18)} style={{
          fontFamily: 'Open Sans, sans-serif', fontSize: 16,
          color: 'rgba(20,27,62,0.6)', lineHeight: 1.8,
          marginBottom: 36, maxWidth: 440,
        }}>
          Blau Batch manufactures Filler Masterbatch in-house and distributes the complete Coraplast range — colour, white, black, and additive — across MENA and Europe. One supplier for every grade your production needs.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.25)} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
          <a href="#get-quote" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 30px', background: '#2B8DD0', color: '#fff',
            borderRadius: 10, fontFamily: 'Inter, sans-serif', fontSize: 13,
            fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase',
            transition: 'all 0.2s', textDecoration: 'none',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(43,141,208,0.4)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
          >
            Get a Free Quote <ArrowRight size={14} />
          </a>
          <a href="https://wa.me/201022227723" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 28px', background: '#25D366', color: '#fff',
            borderRadius: 10, fontFamily: 'Inter, sans-serif', fontSize: 13,
            fontWeight: 700, letterSpacing: '0.06em',
            border: '1px solid #25D366', transition: 'all 0.2s',
            boxShadow: '0 4px 14px rgba(37,211,102,0.3)', textDecoration: 'none',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#20bb5a'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.transform = 'none' }}
          >
            <MessageCircle size={14} /> WhatsApp Us
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div {...fadeUp(0.32)} style={{
          display: 'flex', gap: 0,
          borderTop: '1px solid rgba(20,27,62,0.08)', paddingTop: 28,
        }}>
          {[
            { n: '6',   label: 'Product Lines' },
            { n: '50+', label: 'Grades Available' },
            { n: '8',   label: 'Industries Served' },
            { n: '24h', label: 'Quote Response' },
          ].map((s, i) => (
            <div key={s.label} style={{
              flex: 1,
              paddingRight: i < 3 ? 20 : 0,
              borderRight: i < 3 ? '1px solid rgba(20,27,62,0.08)' : 'none',
              marginRight: i < 3 ? 20 : 0,
            }}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 24, fontWeight: 900, color: '#2B8DD0', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: 10, color: 'rgba(20,27,62,0.45)', fontFamily: 'Inter, sans-serif', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 5 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* RIGHT — image panel 60% */}
      <div style={{ flex: '0 0 60%', position: 'relative', overflow: 'hidden' }}>
        <Image
          src="/images/heroes/campaign_hero.webp"
          alt="Blau Batch masterbatch products"
          fill priority sizes="60vw"
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
        />
        {/* Fade to white on left edge — blends into text panel */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.35) 18%, transparent 42%)',
          pointerEvents: 'none',
        }} />
        {/* Floating badge */}
        <div style={{
          position: 'absolute', top: 28, right: 28,
          background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(16px)',
          border: '1px solid rgba(20,27,62,0.1)', borderRadius: 10,
          padding: '10px 18px', fontFamily: 'Inter, sans-serif',
          fontSize: 10, fontWeight: 800, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: '#141B3E',
          boxShadow: '0 4px 20px rgba(20,27,62,0.08)',
        }}>Full-Spectrum Supplier</div>
      </div>

      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
        @media (max-width: 800px) {
          section[data-campaign-hero] { flex-direction: column !important; min-height: auto !important; }
          section[data-campaign-hero] > div:first-child { flex: none !important; padding: 56px 24px !important; }
          section[data-campaign-hero] > div:last-child { flex: none !important; height: 300px !important; }
        }
      `}</style>
    </section>
  )
}

/* ═══════════════════════════════════════════
   2. TRUST STRIP
═══════════════════════════════════════════ */
function TrustStrip() {
  return (
    <div style={{
      background: '#F7F8FC',
      borderTop: '1px solid rgba(20,27,62,0.07)',
      borderBottom: '1px solid rgba(20,27,62,0.07)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '16px 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 36, flexWrap: 'wrap',
      }}>
        {[
          'In-House Manufacturer',
          'Authorised Coraplast Distributor',
          'MENA & Europe Supply',
          'TDS + CoA Every Batch',
          '24h Quote Response',
        ].map(item => (
          <div key={item} style={{
            display: 'flex', alignItems: 'center', gap: 7,
            fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800,
            letterSpacing: '0.09em', textTransform: 'uppercase',
            color: 'rgba(20,27,62,0.55)',
          }}>
            <CheckCircle2 size={13} color="#2B8DD0" strokeWidth={2.5} />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   3. PAIN SECTION
═══════════════════════════════════════════ */
function PainSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="pain" style={{ background: '#fff', padding: '100px 48px' }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <motion.div {...inFade(inView)} style={{
            display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 10,
            fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#D4840A', border: '1px solid rgba(212,132,10,0.3)',
            borderRadius: 4, padding: '5px 14px', marginBottom: 18,
          }}>The Problem</motion.div>
          <motion.h2 {...inFade(inView, 0.08)} style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 900,
            fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.08,
            letterSpacing: '-0.03em', color: '#141B3E', marginBottom: 16,
          }}>Still Juggling Multiple<br />Masterbatch Suppliers?</motion.h2>
          <motion.p {...inFade(inView, 0.14)} style={{
            fontSize: 16, color: 'rgba(20,27,62,0.55)', lineHeight: 1.8,
            maxWidth: 580, margin: '0 auto',
          }}>
            Every additional vendor adds complexity, inconsistency, and hidden cost to your production line. There's a better way.
          </motion.p>
        </div>

        {/* Before / After */}
        <motion.div {...inFade(inView, 0.2)} style={{
          display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 0, alignItems: 'stretch',
        }}>
          {/* Before */}
          <div style={{
            background: '#FEF9F5', border: '1px solid rgba(212,132,10,0.15)',
            borderRadius: '16px 0 0 16px', padding: '32px 30px',
          }}>
            <div style={{
              fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#D4840A', marginBottom: 24,
            }}>Before — Multiple Suppliers</div>
            {[
              'Multiple accounts, invoices, and contacts to manage',
              'Inconsistent quality standards between vendors',
              '2–4 week delays on specialty or imported grades',
              "Separate QC checks for every supplier's material",
              'Price negotiations spread across 3–5 companies',
              'No single point of technical accountability',
            ].map(item => (
              <div key={item} style={{ display: 'flex', gap: 10, marginBottom: 13, alignItems: 'flex-start' }}>
                <span style={{ color: '#D4840A', fontSize: 15, flexShrink: 0, marginTop: 1, fontWeight: 700 }}>—</span>
                <span style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)', lineHeight: 1.65 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: '#F7F8FC', padding: '0 4px',
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: '#141B3E', display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(20,27,62,0.18)',
            }}>
              <ArrowRight size={15} color="#fff" />
            </div>
          </div>

          {/* After */}
          <div style={{
            background: '#F3F8FE', border: '1px solid rgba(43,141,208,0.15)',
            borderRadius: '0 16px 16px 0', padding: '32px 30px',
          }}>
            <div style={{
              fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#2B8DD0', marginBottom: 24,
            }}>With Blau Batch — One Supplier</div>
            {[
              'One account, one invoice, one relationship',
              'Consistent quality standards across all grades',
              'Stock held locally — fast delivery on core grades',
              'TDS + CoA provided on every shipment, every time',
              'Volume pricing across your full masterbatch spend',
              'One technical team accountable for your production',
            ].map(item => (
              <div key={item} style={{ display: 'flex', gap: 10, marginBottom: 13, alignItems: 'flex-start' }}>
                <CheckCircle2 size={15} color="#2B8DD0" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)', lineHeight: 1.65 }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          #pain > div > div:last-child { grid-template-columns: 1fr !important; }
          #pain > div > div:last-child > div:nth-child(2) { display: none !important; }
          #pain > div > div:last-child > div:first-child { border-radius: 16px !important; border: 1px solid rgba(212,132,10,0.15) !important; }
          #pain > div > div:last-child > div:last-child { border-radius: 16px !important; }
          #pain { padding: 64px 20px !important; }
        }
      `}</style>
    </section>
  )
}

/* ═══════════════════════════════════════════
   4. PRODUCTS
═══════════════════════════════════════════ */
function ProductsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="products" style={{ background: '#F7F8FC', padding: '100px 48px', borderTop: '1px solid rgba(20,27,62,0.07)' }}>
      <div ref={ref} style={{ maxWidth: 1240, margin: '0 auto' }}>

        <div style={{ marginBottom: 56 }}>
          <motion.div {...inFade(inView)} style={{
            display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 10,
            fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#2B8DD0', border: '1px solid rgba(43,141,208,0.3)',
            borderRadius: 4, padding: '5px 14px', marginBottom: 18,
          }}>Full Product Range</motion.div>
          <motion.h2 {...inFade(inView, 0.07)} style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 900,
            fontSize: 'clamp(28px, 3vw, 44px)', letterSpacing: '-0.03em',
            lineHeight: 1.08, color: '#141B3E', marginBottom: 14, maxWidth: 680,
          }}>Six Product Lines. Every Grade<br />Your Production Needs.</motion.h2>
          <motion.p {...inFade(inView, 0.13)} style={{
            fontSize: 16, color: 'rgba(20,27,62,0.55)', lineHeight: 1.8, maxWidth: 560,
          }}>
            Two in-house manufactured filler grades plus four internationally sourced Coraplast lines — all from one supplier, one contact, one invoice.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {PRODUCTS.map((p, i) => (
            <motion.div key={p.code} {...inFade(inView, 0.05 + i * 0.06)}>
              <Link href={p.href} style={{
                display: 'flex', flexDirection: 'column', height: '100%',
                background: '#fff', border: '1px solid rgba(20,27,62,0.08)',
                borderRadius: 16, overflow: 'hidden', textDecoration: 'none',
                transition: 'all 0.28s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(43,141,208,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(20,27,62,0.1)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(20,27,62,0.08)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: 175, flexShrink: 0, background: '#F7F8FC', overflow: 'hidden' }}>
                  <Image src={p.image} alt={p.name} fill sizes="(max-width:900px) 50vw, 33vw"
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  />
                  <div style={{
                    position: 'absolute', top: 12, left: 12,
                    background: p.badgeColor === '#D4840A' ? '#D4840A' : '#2B8DD0',
                    borderRadius: 5, padding: '4px 10px',
                    fontFamily: 'Inter, sans-serif', fontSize: 8, fontWeight: 800,
                    letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff',
                  }}>{p.badge}</div>
                </div>

                {/* Body */}
                <div style={{ padding: '20px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800, letterSpacing: '0.1em', color: p.badgeColor, marginBottom: 6, textTransform: 'uppercase' }}>{p.code}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 800, color: '#141B3E', letterSpacing: '-0.01em', marginBottom: 9, lineHeight: 1.3 }}>{p.name}</div>
                  <p style={{ fontSize: 13, color: 'rgba(20,27,62,0.55)', lineHeight: 1.65, marginBottom: 14, flex: 1 }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 16 }}>
                    {p.specs.map(s => (
                      <span key={s} style={{
                        fontSize: 10, fontFamily: 'Inter, sans-serif', fontWeight: 700,
                        padding: '3px 8px', borderRadius: 4,
                        background: 'rgba(20,27,62,0.05)', color: 'rgba(20,27,62,0.5)',
                      }}>{s}</span>
                    ))}
                  </div>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    fontSize: 11, fontFamily: 'Inter, sans-serif', fontWeight: 800,
                    color: '#2B8DD0', letterSpacing: '0.05em', textTransform: 'uppercase',
                  }}>View Product <ChevronRight size={13} /></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div {...inFade(inView, 0.5)} style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="#get-quote" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 32px',
            background: '#141B3E', color: '#fff', borderRadius: 10,
            fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800,
            letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none',
            transition: 'all 0.25s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#2B8DD0'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(43,141,208,0.35)' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#141B3E'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
          >
            Request Pricing for Any Grade <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 960px) { #products > div > div:nth-child(3) { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { #products > div > div:nth-child(3) { grid-template-columns: 1fr !important; } #products { padding: 64px 20px !important; } }
      `}</style>
    </section>
  )
}

/* ═══════════════════════════════════════════
   5. INDUSTRIES — all 8
═══════════════════════════════════════════ */
function IndustriesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="industries" style={{ background: '#fff', padding: '100px 48px', borderTop: '1px solid rgba(20,27,62,0.07)' }}>
      <div ref={ref} style={{ maxWidth: 1240, margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 52 }}>
          <div>
            <motion.div {...inFade(inView)} style={{
              display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 10,
              fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#2B8DD0', border: '1px solid rgba(43,141,208,0.3)',
              borderRadius: 4, padding: '5px 14px', marginBottom: 18,
            }}>Industries Served</motion.div>
            <motion.h2 {...inFade(inView, 0.07)} style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 900,
              fontSize: 'clamp(28px, 3vw, 44px)', letterSpacing: '-0.03em',
              lineHeight: 1.08, color: '#141B3E', marginBottom: 12,
            }}>Built for Plastics<br />Processors Everywhere.</motion.h2>
            <motion.p {...inFade(inView, 0.13)} style={{
              fontSize: 16, color: 'rgba(20,27,62,0.55)', lineHeight: 1.8, maxWidth: 480,
            }}>
              From blown film to pipe extrusion — we supply the right grades across 8 major industries.
            </motion.p>
          </div>
          <motion.a {...inFade(inView, 0.18)} href="#get-quote" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 22px',
            border: '1px solid rgba(20,27,62,0.15)', borderRadius: 8,
            fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 800,
            letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(20,27,62,0.6)',
            textDecoration: 'none', transition: 'all 0.25s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#2B8DD0'; e.currentTarget.style.color = '#2B8DD0' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(20,27,62,0.15)'; e.currentTarget.style.color = 'rgba(20,27,62,0.6)' }}
          >
            Request a Quote <ArrowRight size={13} />
          </motion.a>
        </div>

        {/* 4-col grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {INDUSTRIES.map((ind, i) => (
            <motion.div key={ind.label} {...inFade(inView, 0.04 + i * 0.05)}>
              <Link href={ind.href} style={{
                display: 'block', borderRadius: 14, overflow: 'hidden',
                border: '1px solid rgba(20,27,62,0.08)',
                textDecoration: 'none', transition: 'all 0.28s ease', background: '#fff',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(43,141,208,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(20,27,62,0.1)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(20,27,62,0.08)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ position: 'relative', height: 170, overflow: 'hidden', background: '#F7F8FC' }}>
                  <Image src={ind.image} alt={ind.label} fill sizes="25vw"
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,27,62,0.55) 0%, transparent 55%)' }} />
                </div>
                <div style={{ padding: '14px 16px 16px' }}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 800, color: '#141B3E', marginBottom: 5 }}>{ind.label}</div>
                  <div style={{ fontSize: 12, color: 'rgba(20,27,62,0.5)', lineHeight: 1.55 }}>{ind.desc}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { #industries > div > div:last-child { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { #industries > div > div:last-child { grid-template-columns: 1fr !important; } #industries { padding: 64px 20px !important; } }
      `}</style>
    </section>
  )
}

/* ═══════════════════════════════════════════
   6. ADVANTAGES
═══════════════════════════════════════════ */
function AdvantagesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="advantages" style={{ background: '#F7F8FC', padding: '100px 48px', borderTop: '1px solid rgba(20,27,62,0.07)' }}>
      <div ref={ref} style={{ maxWidth: 1240, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <motion.div {...inFade(inView)} style={{
            display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 10,
            fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#2B8DD0', border: '1px solid rgba(43,141,208,0.3)',
            borderRadius: 4, padding: '5px 14px', marginBottom: 18,
          }}>Why Blau Batch</motion.div>
          <motion.h2 {...inFade(inView, 0.07)} style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 900,
            fontSize: 'clamp(28px, 3vw, 44px)', letterSpacing: '-0.03em',
            lineHeight: 1.08, color: '#141B3E',
          }}>The Single-Source Advantage</motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {ADVANTAGES.map((a, i) => (
            <motion.div key={a.title} {...inFade(inView, 0.05 + i * 0.07)} style={{
              background: '#fff', border: '1px solid rgba(20,27,62,0.08)',
              borderRadius: 16, padding: '30px 26px', transition: 'all 0.28s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(43,141,208,0.25)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(20,27,62,0.08)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(20,27,62,0.08)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{
                width: 46, height: 46, borderRadius: 11, marginBottom: 18,
                background: `${a.color}15`, border: `1px solid ${a.color}28`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <a.icon size={21} color={a.color} strokeWidth={1.5} />
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 800, color: '#141B3E', marginBottom: 9, lineHeight: 1.3 }}>{a.title}</div>
              <div style={{ fontSize: 13, color: 'rgba(20,27,62,0.55)', lineHeight: 1.75 }}>{a.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { #advantages > div > div:last-child { grid-template-columns: 1fr 1fr !important; } #advantages { padding: 64px 20px !important; } }
        @media (max-width: 560px) { #advantages > div > div:last-child { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

/* ═══════════════════════════════════════════
   7. HOW IT WORKS
═══════════════════════════════════════════ */
function HowItWorksSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const STEPS = [
    { num: '01', title: 'Send Your Requirement', desc: 'Tell us your polymer, application, and monthly volume. Takes 2 minutes via form or WhatsApp.' },
    { num: '02', title: 'Grade Recommendation', desc: 'Our technical team responds within 24 hours with the right grade, TDS, and competitive pricing.' },
    { num: '03', title: 'Sample or Full Order', desc: 'Start with a trial quantity at no minimum. Scale to full production with no disruption.' },
  ]

  return (
    <section id="how" style={{ background: '#fff', padding: '100px 48px', borderTop: '1px solid rgba(20,27,62,0.07)' }}>
      <div ref={ref} style={{ maxWidth: 1000, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.div {...inFade(inView)} style={{
            display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 10,
            fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#D4840A', border: '1px solid rgba(212,132,10,0.3)',
            borderRadius: 4, padding: '5px 14px', marginBottom: 18,
          }}>How It Works</motion.div>
          <motion.h2 {...inFade(inView, 0.07)} style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 900,
            fontSize: 'clamp(28px, 3vw, 44px)', letterSpacing: '-0.03em',
            lineHeight: 1.08, color: '#141B3E',
          }}>From Enquiry to Delivery<br />in 3 Simple Steps</motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, position: 'relative' }}>
          {/* Connector */}
          <div style={{
            position: 'absolute', top: 34, left: '17%', right: '17%', height: 2,
            background: 'linear-gradient(to right, rgba(43,141,208,0.25), rgba(43,141,208,0.5), rgba(43,141,208,0.25))',
          }} />
          {STEPS.map((s, i) => (
            <motion.div key={s.num} {...inFade(inView, 0.08 + i * 0.1)} style={{ textAlign: 'center', padding: '0 32px', position: 'relative', zIndex: 1 }}>
              <div style={{
                width: 68, height: 68, borderRadius: '50%', margin: '0 auto 28px',
                background: '#fff', border: '2px solid #2B8DD0',
                boxShadow: '0 0 0 6px rgba(43,141,208,0.1), 0 8px 24px rgba(43,141,208,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 900, color: '#2B8DD0',
              }}>{s.num}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 800, color: '#141B3E', marginBottom: 10, letterSpacing: '-0.01em' }}>{s.title}</div>
              <div style={{ fontSize: 14, color: 'rgba(20,27,62,0.55)', lineHeight: 1.75 }}>{s.desc}</div>
            </motion.div>
          ))}
        </div>

        <motion.div {...inFade(inView, 0.4)} style={{ textAlign: 'center', marginTop: 56 }}>
          <a href="#get-quote" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 38px',
            background: '#2B8DD0', color: '#fff', borderRadius: 10,
            fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 800,
            letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none',
            transition: 'all 0.25s', boxShadow: '0 6px 24px rgba(43,141,208,0.3)',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 36px rgba(43,141,208,0.45)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(43,141,208,0.3)' }}
          >
            Start Your Enquiry Now <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #how > div > div:nth-child(2) { grid-template-columns: 1fr !important; }
          #how > div > div:nth-child(2) > div[style*="position: absolute"] { display: none !important; }
          #how { padding: 64px 20px !important; }
        }
      `}</style>
    </section>
  )
}

/* ═══════════════════════════════════════════
   8. LEAD FORM
═══════════════════════════════════════════ */
function LeadFormSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [form, setForm] = useState({ product: '', name: '', company: '', email: '', phone: '', country: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async () => {
    if (!form.name || !form.company || !form.email) return
    setLoading(true)
    try {
      await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'Campaign Landing Page' }),
      })
    } catch (_) {}
    setLoading(false)
    setSubmitted(true)
  }

  const inp = {
    width: '100%', padding: '13px 16px',
    background: '#F7F8FC', border: '1px solid rgba(20,27,62,0.12)',
    borderRadius: 9, color: '#141B3E',
    fontFamily: 'Open Sans, sans-serif', fontSize: 14,
    outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s',
  }
  const lbl = {
    fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800,
    letterSpacing: '0.1em', textTransform: 'uppercase',
    color: 'rgba(20,27,62,0.5)', marginBottom: 7, display: 'block',
  }
  const canSubmit = !!(form.name && form.company && form.email && form.phone)

  return (
    <section id="get-quote" style={{
      background: '#F7F8FC', padding: '100px 48px 120px',
      borderTop: '1px solid rgba(20,27,62,0.07)',
    }}>
      <div ref={ref} style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.35fr', gap: 72, alignItems: 'start' }}>

        {/* LEFT */}
        <div>
          <motion.div {...inFade(inView)} style={{
            display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 10,
            fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#D4840A', border: '1px solid rgba(212,132,10,0.3)',
            borderRadius: 4, padding: '5px 14px', marginBottom: 18,
          }}>Request a Free Quote</motion.div>

          <motion.h2 {...inFade(inView, 0.07)} style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 900,
            fontSize: 'clamp(28px, 3vw, 44px)', letterSpacing: '-0.03em',
            lineHeight: 1.08, color: '#141B3E', marginBottom: 18,
          }}>
            Let&apos;s Talk<br />
            <span style={{ color: '#2B8DD0' }}>Production.</span>
          </motion.h2>

          <motion.p {...inFade(inView, 0.13)} style={{
            fontSize: 15, color: 'rgba(20,27,62,0.55)', lineHeight: 1.85, marginBottom: 36, maxWidth: 400,
          }}>
            Tell us your polymer, application, and volume. Our team responds within 24 hours with a grade recommendation and competitive pricing.
          </motion.p>

          <motion.div {...inFade(inView, 0.18)} style={{ marginBottom: 36 }}>
            {[
              'Grade recommendation tailored to your process',
              'Competitive pricing with flexible MOQs',
              'Technical data sheets for every grade',
              'Sample availability for trial runs',
              'Dedicated account manager from day one',
            ].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0', borderBottom: '1px solid rgba(20,27,62,0.05)' }}>
                <CheckCircle2 size={14} color="#2B8DD0" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                <span style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)' }}>{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div {...inFade(inView, 0.24)} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { icon: Mail,          label: 'Email',     val: 'info@blaubatch.com',     href: 'mailto:info@blaubatch.com',        color: '#2B8DD0' },
              { icon: Phone,         label: 'Phone',     val: '+2 0102 222 7723',       href: 'tel:+201022227723',               color: '#2B8DD0' },
              { icon: MessageCircle, label: 'WhatsApp',  val: 'Message us directly',    href: 'https://wa.me/201022227723',      color: '#25D366' },
            ].map(c => (
              <a key={c.label} href={c.href}
                target={c.color === '#25D366' ? '_blank' : undefined}
                rel={c.color === '#25D366' ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '13px 16px',
                  border: '1px solid rgba(20,27,62,0.08)', borderRadius: 10, background: '#fff',
                  transition: 'all 0.22s', textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${c.color}50`; e.currentTarget.style.boxShadow = '0 4px 16px rgba(20,27,62,0.07)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(20,27,62,0.08)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{
                  width: 38, height: 38, borderRadius: 9, flexShrink: 0,
                  background: `${c.color}14`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <c.icon size={16} color={c.color} strokeWidth={1.5} />
                </div>
                <div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, fontWeight: 800, color: 'rgba(20,27,62,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 2 }}>{c.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: c.color === '#25D366' ? '#25D366' : '#141B3E' }}>{c.val}</div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — form card */}
        <motion.div {...inFade(inView, 0.18)} style={{
          background: '#fff', borderRadius: 20, padding: '40px 36px',
          boxShadow: '0 24px 64px rgba(20,27,62,0.09), 0 0 0 1px rgba(20,27,62,0.06)',
          position: 'sticky', top: 110,
        }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <div style={{
                width: 64, height: 64, borderRadius: '50%', margin: '0 auto 22px',
                background: 'rgba(43,141,208,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <CheckCircle2 size={30} color="#2B8DD0" />
              </div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900, fontSize: 22, color: '#141B3E', marginBottom: 12, letterSpacing: '-0.02em' }}>Quote Request Sent</h3>
              <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.55)', lineHeight: 1.75, maxWidth: 320, margin: '0 auto 28px' }}>
                Our technical team will respond within 24 hours with grade recommendations and competitive pricing.
              </p>
              <a href="https://wa.me/201022227723" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px',
                background: '#25D366', color: '#fff', borderRadius: 9,
                fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800,
                letterSpacing: '0.07em', textTransform: 'uppercase', textDecoration: 'none',
              }}>
                <MessageCircle size={14} /> Also WhatsApp Us
              </a>
            </div>
          ) : (
            <div>
              {/* Form header */}
              <h3 style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 900, fontSize: 18,
                color: '#141B3E', letterSpacing: '-0.02em', marginBottom: 6,
              }}>Get Your Quote</h3>
              <p style={{ fontSize: 13, color: 'rgba(20,27,62,0.45)', marginBottom: 24, lineHeight: 1.6 }}>
                Fill in your details and we&apos;ll respond within 24 hours.
              </p>

              {/* Product selection */}
              <div style={{ marginBottom: 18 }}>
                <label style={{ ...lbl, marginBottom: 10 }}>What are you looking for?</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>
                  {PRODUCT_OPTIONS.map(p => (
                    <button key={p} onClick={() => update('product', p)} style={{
                      padding: '11px 10px', borderRadius: 8, textAlign: 'left', cursor: 'pointer',
                      border: form.product === p ? '2px solid #2B8DD0' : '1px solid rgba(20,27,62,0.1)',
                      background: form.product === p ? 'rgba(43,141,208,0.06)' : '#F7F8FC',
                      fontFamily: 'Open Sans, sans-serif', fontSize: 12,
                      color: form.product === p ? '#2B8DD0' : 'rgba(20,27,62,0.65)',
                      fontWeight: form.product === p ? 700 : 400, transition: 'all 0.15s',
                    }}>{p}</button>
                  ))}
                </div>
              </div>

              {/* Contact fields */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={lbl}>Full Name *</label>
                  <input type="text" value={form.name} onChange={e => update('name', e.target.value)}
                    placeholder="Your name" style={inp}
                    onFocus={e => e.target.style.borderColor = '#2B8DD0'}
                    onBlur={e => e.target.style.borderColor = 'rgba(20,27,62,0.12)'}
                  />
                </div>
                <div>
                  <label style={lbl}>Company *</label>
                  <input type="text" value={form.company} onChange={e => update('company', e.target.value)}
                    placeholder="Company name" style={inp}
                    onFocus={e => e.target.style.borderColor = '#2B8DD0'}
                    onBlur={e => e.target.style.borderColor = 'rgba(20,27,62,0.12)'}
                  />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={lbl}>Email *</label>
                  <input type="email" value={form.email} onChange={e => update('email', e.target.value)}
                    placeholder="you@company.com" style={inp}
                    onFocus={e => e.target.style.borderColor = '#2B8DD0'}
                    onBlur={e => e.target.style.borderColor = 'rgba(20,27,62,0.12)'}
                  />
                </div>
                <div>
                  <label style={lbl}>Phone / WhatsApp *</label>
                  <input type="tel" value={form.phone} onChange={e => update('phone', e.target.value)}
                    placeholder="+20 xxx xxx xxxx" style={inp}
                    onFocus={e => e.target.style.borderColor = '#2B8DD0'}
                    onBlur={e => e.target.style.borderColor = 'rgba(20,27,62,0.12)'}
                  />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={lbl}>Country</label>
                  <input type="text" value={form.country} onChange={e => update('country', e.target.value)}
                    placeholder="Egypt, UAE, KSA..." style={inp}
                    onFocus={e => e.target.style.borderColor = '#2B8DD0'}
                    onBlur={e => e.target.style.borderColor = 'rgba(20,27,62,0.12)'}
                  />
                </div>
                <div>
                  <label style={lbl}>Application note</label>
                  <input type="text" value={form.message} onChange={e => update('message', e.target.value)}
                    placeholder="E.g. blown film, 30% filler..." style={inp}
                    onFocus={e => e.target.style.borderColor = '#2B8DD0'}
                    onBlur={e => e.target.style.borderColor = 'rgba(20,27,62,0.12)'}
                  />
                </div>
              </div>

              {/* Submit */}
              <button onClick={handleSubmit} disabled={!canSubmit || loading} style={{
                width: '100%', padding: '15px',
                background: canSubmit ? '#2B8DD0' : 'rgba(20,27,62,0.08)',
                color: canSubmit ? '#fff' : 'rgba(20,27,62,0.3)',
                border: 'none', borderRadius: 10, cursor: canSubmit ? 'pointer' : 'not-allowed',
                fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 800,
                letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'all 0.25s',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                marginTop: 6,
              }}
              onMouseEnter={e => canSubmit && (e.currentTarget.style.boxShadow = '0 8px 24px rgba(43,141,208,0.35)')}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <Mail size={14} />
                {loading ? 'Sending…' : 'Submit Quote Request'}
              </button>
            </div>
          )}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          #get-quote > div { grid-template-columns: 1fr !important; gap: 48px !important; }
          #get-quote { padding: 64px 20px 80px !important; }
        }
        @media (max-width: 560px) {
          #get-quote div[style*="1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
