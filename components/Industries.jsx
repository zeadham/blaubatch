'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const INDUSTRIES = [
  {
    id: 'packaging',
    name: 'Packaging & Flexible Film',
    desc: 'High-clarity filler and additive solutions for blown and cast film applications.',
    image: '/images/industries cards/packaging.png',
    href: '/industries/packaging',
  },
  {
    id: 'pipes',
    name: 'Pipes, Fittings & Profiles',
    desc: 'Carbon black and CaCO₃ concentrates for HDPE, PPR, and PVC extrusion.',
    image: '/images/industries cards/pipes.png',
    href: '/industries/pipes',
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    desc: 'UV-stabilized masterbatch for greenhouse film, mulch, and irrigation tubing.',
    image: '/images/industries cards/agriculture.png',
    href: '/industries/agriculture',
  },
  {
    id: 'textiles',
    name: 'Textiles & Fibre',
    desc: 'Color and filler grades optimized for PP non-woven and filament spinning.',
    image: '/images/industries cards/textiles.png',
    href: '/industries/textiles',
  },
  {
    id: 'construction',
    name: 'Construction',
    desc: 'Functional compounds for geomembranes and waterproofing sheet systems.',
    image: '/images/industries cards/construction.png',
    href: '/industries/construction',
  },
  {
    id: 'wire-cable',
    name: 'Wire & Cable',
    desc: 'Technical carbon black and flame retardant masterbatch for cable jacketing.',
    image: '/images/industries cards/wire_cable.png',
    href: '/industries/wire-cable',
  },
  {
    id: 'automotive',
    name: 'Automotive & Technical',
    desc: 'Engineered concentrates for interior/exterior components and under-hood parts.',
    image: '/images/industries cards/automotive.png',
    href: '/industries/automotive',
  },
  {
    id: 'consumer-goods',
    name: 'Consumer Goods',
    desc: 'Food-contact compliant color masterbatch for caps, closures, and housewares.',
    image: '/images/industries cards/consumer_goods.png',
    href: '/industries/consumer-goods',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Industries() {
  const headRef = useRef(null)
  const inView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section id="industries" style={{ background: '#F7F8FC', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div ref={headRef} style={{ marginBottom: 52 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 10,
              fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0',
              border: '1px solid rgba(43,141,208,0.3)', borderRadius: 4, padding: '4px 12px', marginBottom: 16,
            }}
          >Industries Served</motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.07 }}
            style={{
              fontFamily: 'Inter, sans-serif', fontSize: 'clamp(26px, 3vw, 40px)',
              fontWeight: 900, letterSpacing: '-0.025em', marginBottom: 14, lineHeight: 1.1, color: '#141B3E',
            }}
          >Built for Plastics Processing</motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.14 }}
            style={{ fontSize: 15, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, maxWidth: 560 }}
          >
            Grades formulated for PE, PP, PVC, PET, and ABS across film, injection, pipe extrusion, and fibre spinning.
          </motion.p>
        </div>

        {/* 4-col card grid */}
        <div id="industries-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={i}
              style={{
                background: '#fff',
                border: '1px solid rgba(20,27,62,0.08)',
                borderRadius: 16, overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(20,27,62,0.04)',
                cursor: ind.href ? 'pointer' : 'default',
              }}
              whileHover={{
                y: -4,
                boxShadow: '0 12px 40px rgba(20,27,62,0.1)',
              }}
            >
              <Link href={ind.href} style={{ display: 'flex', flexDirection: 'column', height: '100%', textDecoration: 'none' }}>
                {/* Image */}
                <div style={{ position: 'relative', height: 200, overflow: 'hidden', flexShrink: 0 }}>
                  <img
                    src={ind.image}
                    alt={ind.name}
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                </div>

                {/* Body */}
                <div style={{
                  padding: '18px 18px 20px',
                  display: 'flex', flexDirection: 'column', gap: 8, flex: 1,
                }}>
                  <h3 style={{
                    fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 800,
                    color: '#141B3E', letterSpacing: '-0.01em', lineHeight: 1.3,
                  }}>{ind.name}</h3>

                  <p style={{
                    fontSize: 15, color: 'rgba(20,27,62,0.6)', lineHeight: 1.6, flex: 1,
                  }}>{ind.desc}</p>

                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700,
                    color: '#2B8DD0', marginTop: 4,
                    transition: 'gap 0.2s',
                  }}>
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { #industries-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) {
          #industries { padding: 64px 20px !important; }
          #industries-grid { grid-template-columns: 1fr !important; }
        }
        #industries .card-link-wrap:hover img { transform: scale(1.06); }
      `}</style>
    </section>
  )
}
