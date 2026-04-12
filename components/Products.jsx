'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, FlaskConical } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const PRODUCTS = [
  {
    id: 'fmpe',
    series: 'FMPE Series',
    name: 'Filler Masterbatch (PE)',
    desc: 'CaCO₃-based filler in PE carrier for blown film, extrusion, and injection moulding. Reduces material costs while maintaining mechanical properties.',
    specs: ['70% · 75% · 80% CaCO₃', 'LDPE · LLDPE · HDPE', 'Blown Film · Cast Film'],
    badge: 'MANUFACTURED',
    image: '/images/heroes/filler.png',
    href: '/fmpe',
    sampleProduct: 'FMPE Series — PE Filler Masterbatch',
  },
  {
    id: 'fmpp',
    series: 'FMPP Series',
    name: 'Filler Masterbatch (PP)',
    desc: 'CaCO₃-based filler in PP carrier for injection moulding, thermoforming, and raffia. Cost-effective with consistent dispersion.',
    specs: ['70% · 75% · 80% CaCO₃', 'Homo PP · Co-PP', 'Injection · Thermoforming'],
    badge: 'MANUFACTURED',
    image: '/images/heroes/filler.png',
    href: '/fmpp',
    sampleProduct: 'FMPP Series — PP Filler Masterbatch',
  },
  {
    id: 'white',
    series: 'WMB Series',
    name: 'White Masterbatch',
    desc: 'TiO₂-based white concentrates. High opacity, multiple grades including food-contact compliant options.',
    specs: ['PE & PP carriers', 'Food-contact grades', 'High-whiteness'],
    badge: 'DISTRIBUTED',
    image: '/images/heroes/white.png',
    href: '/white-masterbatch',
    sampleProduct: 'White Masterbatch',
  },
  {
    id: 'black',
    series: 'BMB Series',
    name: 'Black Masterbatch',
    desc: 'Carbon black concentrates with UV-stable grades for pipes, agricultural film, and cable jacketing.',
    specs: ['UV-stable grades', 'Pipe · Cable · Film', 'PE & PP carriers'],
    badge: 'DISTRIBUTED',
    image: '/images/heroes/black.png',
    href: '/black-masterbatch',
    sampleProduct: 'Black Masterbatch',
  },
  {
    id: 'colour',
    series: 'CMB Series',
    name: 'Colour Masterbatch',
    desc: 'Full-spectrum colour matching — RAL, Pantone, and custom development in PE and PP carriers.',
    specs: ['RAL · Pantone matching', 'Custom development', 'Food-contact grades'],
    badge: 'DISTRIBUTED',
    image: '/images/heroes/colour.png',
    href: '/color-masterbatch',
    sampleProduct: 'Colour Masterbatch',
  },
  {
    id: 'additive',
    series: 'AMB Series',
    name: 'Additive Masterbatch',
    desc: 'Functional additive concentrates — UV stabilisers, slip agents, antiblock, antistatic, and processing aids.',
    specs: ['UV · Slip · Antiblock', 'Anti-static · Processing aids', 'PE & PP carriers'],
    badge: 'DISTRIBUTED',
    image: '/images/heroes/additive.png',
    href: '/additive-masterbatch',
    sampleProduct: 'Additive Masterbatch',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

function ProductCard({ p, i }) {
  const isManufactured = p.badge === 'MANUFACTURED'

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      custom={i}
      style={{
        background: '#fff',
        border: '1px solid rgba(20,27,62,0.08)',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 2px 12px rgba(20,27,62,0.04)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      whileHover={{
        y: -6,
        boxShadow: '0 16px 48px rgba(20,27,62,0.1)',
      }}
    >
      {/* Card Image */}
      <div style={{
        position: 'relative',
        height: 200,
        overflow: 'hidden',
        flexShrink: 0,
      }}>
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        />
        {/* Overlay gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 40%, rgba(20,27,62,0.5))',
          pointerEvents: 'none',
        }} />
        {/* Badge */}
        <span style={{
          position: 'absolute', top: 14, right: 14,
          fontFamily: 'Inter, sans-serif', fontSize: 9, fontWeight: 800,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '4px 10px', borderRadius: 20, lineHeight: 1,
          color: isManufactured ? '#D4840A' : '#2B8DD0',
          border: `1px solid ${isManufactured ? '#D4840A' : '#2B8DD0'}`,
          background: isManufactured ? 'rgba(212,132,10,0.12)' : 'rgba(43,141,208,0.12)',
        }}>{p.badge}</span>
      </div>

      {/* Card Body */}
      <div style={{
        padding: '22px 22px 24px',
        display: 'flex', flexDirection: 'column', gap: 10, flex: 1,
      }}>
        <span style={{
          fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700,
          letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0',
        }}>{p.series}</span>

        <h3 style={{
          fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 800,
          color: '#141B3E', letterSpacing: '-0.02em', lineHeight: 1.2,
        }}>{p.name}</h3>

        <p style={{
          fontSize: 15, color: 'rgba(20,27,62,0.65)', lineHeight: 1.65, flex: 1,
        }}>{p.desc}</p>

        {/* Specs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
          {p.specs.map(spec => (
            <span key={spec} style={{
              fontSize: 11, fontWeight: 600, color: 'rgba(20,27,62,0.55)',
              padding: '4px 10px', border: '1px solid rgba(20,27,62,0.1)',
              borderRadius: 20,
            }}>{spec}</span>
          ))}
        </div>

        {/* Actions */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14,
          marginTop: 8, paddingTop: 14,
          borderTop: '1px solid rgba(20,27,62,0.07)',
        }}>
          <Link href={p.href} style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700,
            color: '#2B8DD0', transition: 'gap 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.gap = '10px'}
          onMouseLeave={e => e.currentTarget.style.gap = '6px'}
          >
            Learn More <ArrowRight size={14} />
          </Link>
          <Link href={`/contact?product=${encodeURIComponent(p.sampleProduct)}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600,
            color: 'rgba(20,27,62,0.45)', transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#141B3E'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(20,27,62,0.45)'}
          >
            <FlaskConical size={14} />
            Request Sample
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function Products() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section id="products" style={{ background: '#F7F8FC', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div ref={headRef} style={{ marginBottom: 56 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 10,
              fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0',
              border: '1px solid rgba(43,141,208,0.3)', borderRadius: 4, padding: '4px 12px', marginBottom: 16,
            }}
          >Product Portfolio</motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.07 }}
            style={{
              fontFamily: 'Inter, sans-serif', fontSize: 'clamp(26px, 3vw, 40px)',
              fontWeight: 900, letterSpacing: '-0.025em', marginBottom: 14, lineHeight: 1.1, color: '#141B3E',
            }}
          >Complete Masterbatch Portfolio</motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.14 }}
            style={{ fontSize: 15, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, maxWidth: 560 }}
          >
            One supplier relationship covers your complete masterbatch requirement — from in-house manufactured Filler to the full Coraplast distributed range.
          </motion.p>
        </div>

        {/* 3-col grid */}
        <div id="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {PRODUCTS.map((p, i) => <ProductCard key={p.id} p={p} i={i} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { #products-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) {
          #products { padding: 64px 20px !important; }
          #products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
