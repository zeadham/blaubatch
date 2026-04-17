'use client'

import { motion } from 'framer-motion'
import { Factory, Truck, ShieldCheck, Zap, Lightbulb, Timer } from 'lucide-react'

const VALUE_PROPS = [
  {
    icon: ShieldCheck,
    title: 'Quality',
    description: 'ISO 9001-aligned production with in-house lab testing, full batch traceability, and TDS & CoA per shipment.',
  },
  {
    icon: Zap,
    title: 'Efficiency',
    description: '70–80% CaCO₃ loading with consistent dispersion. Reduce material costs without compromising output.',
  },
  {
    icon: Timer,
    title: 'Reliability',
    description: '48-hour sample dispatch, dependable lead times, and a supply chain built for MENA and European logistics.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Custom formulations, RAL/Pantone matching, and functional additive concentrates for every application.',
  },
]

const STATS = [
  { value: '8,000+ MT', label: 'Annual Manufacturing Capacity' },
  { value: '6', label: 'Product Lines' },
  { value: '8', label: 'Industries Served' },
  { value: 'MENA + Europe', label: 'Market Coverage' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function WhyUs() {
  return (
    <section id="why" style={{ background: '#fff', paddingTop: 96, paddingBottom: 0 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>

        {/* Split layout */}
        <div id="why-split" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 80, alignItems: 'start',
          marginBottom: 80,
        }}>
          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{
              display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 10,
              fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0',
              border: '1px solid rgba(43,141,208,0.3)', borderRadius: 4, padding: '4px 12px', marginBottom: 16,
            }}>Why Blau Batch</div>

            <h2 style={{
              fontFamily: 'Inter, sans-serif', fontSize: 'clamp(26px, 3.5vw, 42px)',
              fontWeight: 900, color: '#141B3E', lineHeight: 1.1,
              letterSpacing: '-0.025em', marginBottom: 40,
            }}>
              One Supplier.<br />Complete Coverage.
            </h2>

            {/* Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {/* Manufacture pillar */}
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, width: 48, height: 48, borderRadius: 12,
                  background: 'rgba(212,132,10,0.08)', color: '#D4840A',
                }}>
                  <Factory size={22} />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 800,
                    color: '#141B3E', marginBottom: 6,
                  }}>We Manufacture</h3>
                  <p style={{ fontSize: 16, color: 'rgba(20,27,62,0.65)', lineHeight: 1.7 }}>
                    In-house production of Filler Masterbatch (PE &amp; PP) at our 6th of October facility — full control over quality, formulation, and lead times.
                  </p>
                </div>
              </div>

              {/* Distribute pillar */}
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, width: 48, height: 48, borderRadius: 12,
                  background: 'rgba(43,141,208,0.08)', color: '#2B8DD0',
                }}>
                  <Truck size={22} />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 800,
                    color: '#141B3E', marginBottom: 6,
                  }}>We Distribute</h3>
                  <p style={{ fontSize: 16, color: 'rgba(20,27,62,0.65)', lineHeight: 1.7 }}>
                    Authorised Coraplast distributor for White, Black, Colour, and Additive masterbatch — European engineering, local availability.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Value Props 2×2 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
            {VALUE_PROPS.map((prop, i) => {
              const Icon = prop.icon
              return (
                <motion.div
                  key={prop.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  custom={i}
                  style={{
                    padding: 24, background: '#fff',
                    border: '1px solid rgba(20,27,62,0.08)',
                    borderRadius: 16,
                    boxShadow: '0 2px 12px rgba(20,27,62,0.04)',
                    display: 'flex', flexDirection: 'column', gap: 8,
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                  }}
                  whileHover={{
                    borderColor: 'rgba(43,141,208,0.3)',
                    boxShadow: '0 8px 32px rgba(20,27,62,0.08)',
                  }}
                >
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 44, height: 44, borderRadius: 12,
                    background: 'rgba(43,141,208,0.08)', color: '#2B8DD0',
                    marginBottom: 4,
                  }}>
                    <Icon size={20} />
                  </div>
                  <h4 style={{
                    fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 800,
                    color: '#141B3E',
                  }}>{prop.title}</h4>
                  <p style={{ fontSize: 15, color: 'rgba(20,27,62,0.6)', lineHeight: 1.7 }}>{prop.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          background: 'linear-gradient(135deg, #D4840A, #e8960f)',
          padding: '40px 48px',
        }}
      >
        <div id="stats-inner" style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          {STATS.map(stat => (
            <div key={stat.label} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: 4, textAlign: 'center',
            }}>
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: 900, color: '#fff', letterSpacing: '-0.02em',
              }}>{stat.value}</span>
              <span style={{
                fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.75)',
                textTransform: 'uppercase', letterSpacing: '0.06em',
              }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 1024px) {
          #why-split { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 768px) {
          #stats-inner { flex-wrap: wrap !important; gap: 28px !important; justify-content: center !important; }
        }
        @media (max-width: 640px) {
          #why .values-grid { grid-template-columns: 1fr !important; }
          #why { padding-top: 64px !important; padding-left: 0 !important; padding-right: 0 !important; }
          #why > div { padding: 0 20px !important; }
        }
      `}</style>
    </section>
  )
}
