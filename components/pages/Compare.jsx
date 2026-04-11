'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Minus, ArrowRight, FlaskConical } from 'lucide-react'


const PRODUCTS = [
  {
    id: 'fmpe',
    name: 'Filler MB (PE)',
    fullName: 'Filler Masterbatch (PE)',
    series: 'FMPE Series',
    href: '/fmpe',
    badge: 'MANUFACTURED',
    carrier: 'PE (LDPE / LLDPE / HDPE)',
    caco3: '70% · 75% · 80%',
    color: '#D4840A',
    image: '/images/heroes/filler.png',
    processes: ['Blown Film', 'Cast Film', 'Injection Moulding', 'Extrusion'],
    grades: ['FMPE-70', 'FMPE-75', 'FMPE-80'],
    moq: '1 tonne',
    packaging: '25 kg bags / FIBC',
    foodContact: false,
    uvStable: false,
    customFormulation: true,
    tdsCoA: true,
    iso: true,
    sampleAvail: true,
    applications: ['Packaging', 'Agriculture', 'Construction'],
  },
  {
    id: 'fmpp',
    name: 'Filler MB (PP)',
    fullName: 'Filler Masterbatch (PP)',
    series: 'FMPP Series',
    href: '/fmpp',
    badge: 'MANUFACTURED',
    carrier: 'PP (Homo PP / Co-PP)',
    caco3: '70% · 75% · 80%',
    color: '#D4840A',
    image: '/images/heroes/filler.png',
    processes: ['Injection Moulding', 'Thermoforming', 'Raffia / BOPP', 'Extrusion'],
    grades: ['FMPP-70', 'FMPP-75', 'FMPP-80'],
    moq: '1 tonne',
    packaging: '25 kg bags / FIBC',
    foodContact: false,
    uvStable: false,
    customFormulation: true,
    tdsCoA: true,
    iso: true,
    sampleAvail: true,
    applications: ['Packaging', 'Textiles', 'Construction'],
  },
  {
    id: 'white',
    name: 'White MB',
    fullName: 'White Masterbatch',
    series: 'WMB Series',
    href: '/white-masterbatch',
    badge: 'DISTRIBUTED',
    carrier: 'PE / PP',
    caco3: '—',
    color: '#2B8DD0',
    image: '/images/heroes/white.png',
    processes: ['Blown Film', 'Injection Moulding', 'Pipe Extrusion', 'Fibre Spinning'],
    grades: ['WMB Standard', 'WMB Food', 'WMB High-Opacity'],
    moq: 'On request',
    packaging: '25 kg bags',
    foodContact: true,
    uvStable: false,
    customFormulation: false,
    tdsCoA: true,
    iso: true,
    sampleAvail: true,
    applications: ['Packaging', 'Consumer Goods', 'Agriculture'],
  },
  {
    id: 'black',
    name: 'Black MB',
    fullName: 'Black Masterbatch',
    series: 'BMB Series',
    href: '/black-masterbatch',
    badge: 'DISTRIBUTED',
    carrier: 'PE / PP',
    caco3: '—',
    color: '#2B8DD0',
    image: '/images/heroes/black.png',
    processes: ['Pipe Extrusion', 'Agricultural Film', 'Cable Jacketing', 'Blown Film'],
    grades: ['BMB Standard', 'BMB UV-Pipe', 'BMB Cable'],
    moq: 'On request',
    packaging: '25 kg bags',
    foodContact: false,
    uvStable: true,
    customFormulation: false,
    tdsCoA: true,
    iso: true,
    sampleAvail: true,
    applications: ['Pipes', 'Agriculture', 'Wire & Cable'],
  },
  {
    id: 'colour',
    name: 'Colour MB',
    fullName: 'Colour Masterbatch',
    series: 'CMB Series',
    href: '/color-masterbatch',
    badge: 'DISTRIBUTED',
    carrier: 'PE / PP',
    caco3: '—',
    color: '#2B8DD0',
    image: '/images/heroes/colour.png',
    processes: ['Injection Moulding', 'Blown Film', 'Pipe Extrusion', 'Fibre Spinning'],
    grades: ['RAL Standard', 'Pantone Match', 'Custom Development'],
    moq: 'On request',
    packaging: '25 kg bags',
    foodContact: true,
    uvStable: false,
    customFormulation: true,
    tdsCoA: true,
    iso: true,
    sampleAvail: true,
    applications: ['Packaging', 'Consumer Goods', 'Automotive'],
  },
  {
    id: 'additive',
    name: 'Additive MB',
    fullName: 'Additive Masterbatch',
    series: 'AMB Series',
    href: '/additive-masterbatch',
    badge: 'DISTRIBUTED',
    carrier: 'PE / PP',
    caco3: '—',
    color: '#2B8DD0',
    image: '/images/heroes/additive.png',
    processes: ['All Processes', 'Film', 'Injection', 'Fibre'],
    grades: ['UV Stabiliser', 'Slip / Antiblock', 'Anti-static', 'Processing Aid'],
    moq: 'On request',
    packaging: '25 kg bags',
    foodContact: false,
    uvStable: true,
    customFormulation: false,
    tdsCoA: true,
    iso: true,
    sampleAvail: true,
    applications: ['Packaging', 'Agriculture', 'Textiles'],
  },
]

const ROWS = [
  { key: 'series', label: 'Series' },
  { key: 'badge', label: 'Supply Type' },
  { key: 'carrier', label: 'Carrier Resin' },
  { key: 'caco3', label: 'CaCO₃ Loading' },
  { key: 'processes', label: 'Key Processes' },
  { key: 'grades', label: 'Available Grades' },
  { key: 'moq', label: 'Min. Order Qty' },
  { key: 'packaging', label: 'Packaging' },
  { key: 'foodContact', label: 'Food-Contact Grade' },
  { key: 'uvStable', label: 'UV-Stable Grade' },
  { key: 'customFormulation', label: 'Custom Formulation' },
  { key: 'tdsCoA', label: 'TDS & CoA Provided' },
  { key: 'iso', label: 'ISO 9001-Aligned' },
  { key: 'sampleAvail', label: 'Sample Available' },
]

function Cell({ value }) {
  if (value === true) return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{
        width: 24, height: 24, borderRadius: '50%',
        background: 'rgba(43,141,208,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Check size={14} color="#2B8DD0" strokeWidth={2.5} />
      </div>
    </div>
  )
  if (value === false) return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Minus size={16} color="rgba(20,27,62,0.25)" />
    </div>
  )
  if (Array.isArray(value)) return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {value.map(v => (
        <span key={v} style={{
          fontSize: 11, fontWeight: 600, color: 'rgba(20,27,62,0.7)',
          padding: '3px 8px', background: 'rgba(20,27,62,0.05)',
          border: '1px solid rgba(20,27,62,0.07)', borderRadius: 20,
          whiteSpace: 'nowrap', display: 'inline-block',
        }}>{v}</span>
      ))}
    </div>
  )
  if (value === '—') return <span style={{ color: 'rgba(20,27,62,0.25)', fontSize: 14 }}>—</span>
  return <span style={{ fontSize: 13, color: 'rgba(20,27,62,0.75)', fontWeight: 500, lineHeight: 1.5 }}>{value}</span>
}

export default function ComparePage() {
  const [highlighted, setHighlighted] = useState(null)

  const colWidth = 155

  return (
    <>
      <div style={{ minHeight: '100vh', background: '#F7F8FC', paddingTop: 68 }}>

        {/* Page Header */}
        <div style={{ background: '#fff', borderBottom: '1px solid rgba(20,27,62,0.07)', padding: '52px 48px 44px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 10,
                fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0',
                border: '1px solid rgba(43,141,208,0.3)', borderRadius: 4, padding: '4px 12px', marginBottom: 16,
              }}
            >Product Comparison</motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.06 }}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 900, color: '#141B3E', letterSpacing: '-0.025em',
                lineHeight: 1.1, marginBottom: 14,
              }}
            >Compare All Products</motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              style={{ fontSize: 15, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, maxWidth: 560 }}
            >
              Side-by-side spec comparison across the full Blau Batch portfolio — manufactured Filler grades and the complete Coraplast distributed range.
            </motion.p>
          </div>
        </div>

        {/* Table */}
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '48px 24px 80px' }}>
          <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(20,27,62,0.08)', background: '#fff', boxShadow: '0 4px 24px rgba(20,27,62,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 960 }}>
              <thead>
                <tr>
                  {/* Label col */}
                  <th style={{
                    width: 180, minWidth: 180,
                    padding: '0 0 0 24px',
                    textAlign: 'left', verticalAlign: 'bottom',
                    borderBottom: '1px solid rgba(20,27,62,0.08)',
                    position: 'sticky', left: 0, background: '#fff', zIndex: 2,
                  }}>
                    <div style={{ padding: '20px 0 16px' }}>
                      <span style={{
                        fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700,
                        color: 'rgba(20,27,62,0.35)', textTransform: 'uppercase', letterSpacing: '0.06em',
                      }}>Specification</span>
                    </div>
                  </th>

                  {/* Product cols */}
                  {PRODUCTS.map(p => (
                    <th
                      key={p.id}
                      style={{
                        width: colWidth, minWidth: colWidth,
                        padding: '16px 12px',
                        textAlign: 'center', verticalAlign: 'top',
                        borderBottom: '1px solid rgba(20,27,62,0.08)',
                        borderLeft: '1px solid rgba(20,27,62,0.05)',
                        background: highlighted === p.id ? 'rgba(43,141,208,0.03)' : '#fff',
                        transition: 'background 0.2s',
                        cursor: 'default',
                      }}
                      onMouseEnter={() => setHighlighted(p.id)}
                      onMouseLeave={() => setHighlighted(null)}
                    >
                      {/* Product image */}
                      <div style={{
                        width: 64, height: 64, borderRadius: 12, overflow: 'hidden',
                        margin: '0 auto 12px', border: '1px solid rgba(20,27,62,0.08)',
                      }}>
                        <img src={p.image} alt={p.fullName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>

                      {/* Badge */}
                      <div style={{ marginBottom: 8 }}>
                        <span style={{
                          fontSize: 8, fontWeight: 800, letterSpacing: '0.08em',
                          textTransform: 'uppercase', color: p.color,
                          border: `1px solid ${p.color}`,
                          borderRadius: 20, padding: '2px 8px', lineHeight: 1,
                          background: p.badge === 'MANUFACTURED' ? 'rgba(212,132,10,0.08)' : 'rgba(43,141,208,0.08)',
                        }}>{p.badge}</span>
                      </div>

                      <div style={{
                        fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 800,
                        color: '#141B3E', lineHeight: 1.3, marginBottom: 10,
                      }}>{p.name}</div>

                      <Link href={p.href} style={{
                        display: 'inline-flex', alignItems: 'center', gap: 4,
                        fontSize: 11, fontWeight: 700, color: '#2B8DD0',
                        transition: 'gap 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.gap = '8px'}
                      onMouseLeave={e => e.currentTarget.style.gap = '4px'}
                      >
                        Details <ArrowRight size={12} />
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {ROWS.map((row, ri) => (
                  <tr key={row.key} style={{ background: ri % 2 === 0 ? '#fff' : 'rgba(20,27,62,0.015)' }}>
                    {/* Row label */}
                    <td style={{
                      padding: '14px 16px 14px 24px',
                      borderBottom: '1px solid rgba(20,27,62,0.05)',
                      position: 'sticky', left: 0,
                      background: ri % 2 === 0 ? '#fff' : 'rgba(247,248,252,0.9)',
                      zIndex: 1,
                    }}>
                      <span style={{
                        fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600,
                        color: '#141B3E',
                      }}>{row.label}</span>
                    </td>

                    {/* Data cells */}
                    {PRODUCTS.map(p => (
                      <td key={p.id} style={{
                        padding: '14px 12px',
                        textAlign: 'center', verticalAlign: 'middle',
                        borderBottom: '1px solid rgba(20,27,62,0.05)',
                        borderLeft: '1px solid rgba(20,27,62,0.04)',
                        background: highlighted === p.id ? 'rgba(43,141,208,0.025)' : 'transparent',
                        transition: 'background 0.2s',
                      }}
                      onMouseEnter={() => setHighlighted(p.id)}
                      onMouseLeave={() => setHighlighted(null)}
                      >
                        <Cell value={p[row.key]} />
                      </td>
                    ))}
                  </tr>
                ))}

                {/* CTA row */}
                <tr>
                  <td style={{
                    padding: '20px 16px 20px 24px',
                    position: 'sticky', left: 0, background: '#fff', zIndex: 1,
                  }}>
                    <span style={{
                      fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600,
                      color: '#141B3E',
                    }}>Request Sample</span>
                  </td>
                  {PRODUCTS.map(p => (
                    <td key={p.id} style={{
                      padding: '20px 12px',
                      textAlign: 'center',
                      borderLeft: '1px solid rgba(20,27,62,0.04)',
                      borderTop: '1px solid rgba(20,27,62,0.08)',
                      background: highlighted === p.id ? 'rgba(43,141,208,0.025)' : 'transparent',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={() => setHighlighted(p.id)}
                    onMouseLeave={() => setHighlighted(null)}
                    >
                      <Link href="/contact" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        padding: '8px 14px', background: '#2B8DD0', color: '#fff',
                        borderRadius: 8, fontFamily: 'Inter, sans-serif', fontSize: 11,
                        fontWeight: 700, transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(43,141,208,0.3)' }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
                      >
                        <FlaskConical size={12} /> Sample
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note */}
          <p style={{
            marginTop: 20, textAlign: 'center',
            fontSize: 13, color: 'rgba(20,27,62,0.4)', lineHeight: 1.6,
          }}>
            All specs subject to grade. Contact our technical team for detailed TDS or custom formulation enquiries.{' '}
            <a href="mailto:info@blaubatch.com" style={{ color: '#2B8DD0', fontWeight: 600 }}>info@blaubatch.com</a>
          </p>
        </div>
      </div>

    </>
  )
}
