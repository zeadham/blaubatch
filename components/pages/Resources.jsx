'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FileText, HelpCircle, BookOpen, Download, ArrowRight, ChevronDown, Check } from 'lucide-react'
import Link from 'next/link'
import PageHero from '@/components/shared/PageHero'


const DOCS = [
  { title: 'FMPE Series — Technical Data Sheet', type: 'TDS', desc: 'MFI, ash content, moisture, carrier, packaging, and processing guidelines for FMPE-1070, 1075, 1080.' },
  { title: 'FMPP Series — Technical Data Sheet', type: 'TDS', desc: 'MFI, ash content, moisture, carrier, packaging, and processing guidelines for FMPP-1070, 1075, 1080.' },
  { title: 'Colour Masterbatch — Product Overview', type: 'Overview', desc: 'Carrier compatibility, colour systems, let-down ratios, ΔE tolerance, and food-contact grade availability.' },
  { title: 'White Masterbatch — Product Overview', type: 'Overview', desc: 'TiO₂-based grades for blown film, injection moulding, and food-contact applications.' },
  { title: 'Black Masterbatch — Product Overview', type: 'Overview', desc: 'Carbon black grades for PE, PP, and PET — covering UV protection, food contact, and high-loading variants.' },
  { title: 'Additive Masterbatch — Product Overview', type: 'Overview', desc: 'UV stabilisers, antioxidants, anti-block, slip, anti-static, and combination additive grades.' },
  { title: 'Filler MB Dosage & Processing Guide', type: 'Guide', desc: 'Recommended dosage ranges by application type, temperature profiles, and troubleshooting tips for filler masterbatch.' },
  { title: 'Full Product Catalogue', type: 'Catalogue', desc: 'Complete portfolio overview across all Blau Batch product lines — suitable for procurement and product selection.' },
  { title: 'Certificate of Analysis (sample)', type: 'CoA', desc: 'Typical CoA format issued with each batch — available for specific batch numbers on request.' },
]

const TYPE_COLOR = {
  TDS: '#2B8DD0',
  Overview: '#16A34A',
  Guide: '#D4840A',
  Catalogue: '#7C3AED',
  CoA: 'rgba(20,27,62,0.5)',
}
const TYPE_BG = {
  TDS: 'rgba(43,141,208,0.12)',
  Overview: 'rgba(22,163,74,0.12)',
  Guide: 'rgba(212,132,10,0.12)',
  Catalogue: 'rgba(124,58,237,0.12)',
  CoA: 'rgba(20,27,62,0.08)',
}

const FAQS = [
  {
    q: 'What is filler masterbatch and how does it reduce my costs?',
    a: 'Filler masterbatch is a concentrated blend of CaCO₃ (calcium carbonate) dispersed in a polymer carrier (PE or PP). By replacing a portion of your virgin polymer with filler masterbatch, you reduce raw material cost while maintaining acceptable mechanical properties. Typical cost savings depend on the price differential between virgin polymer and masterbatch, and the dosage rate used — generally 10–30% substitution in film applications.'
  },
  {
    q: 'What is the difference between FMPE and FMPP Series?',
    a: 'FMPE uses a polyethylene (LDPE/LLDPE/HDPE) carrier and is designed for PE applications: blown film, cast film, extrusion coating, and injection moulding. FMPP uses a polypropylene (PP homopolymer) carrier and is designed for PP applications: raffia tape, non-woven, BOPP film, and PP injection moulding. Using PE carrier in a PP process (or vice versa) can cause processing issues and is not recommended.'
  },
  {
    q: 'What dosage rate should I start with?',
    a: 'We recommend starting at 15% for most blown film applications and adjusting in 5% increments while monitoring mechanical properties (tear, tensile) and optical properties (haze). For raffia and non-woven, start at 10–15% and monitor fibre tenacity. The maximum recommended rate depends on your target properties, line speed, and equipment — contact our technical team for application-specific guidance.'
  },
  {
    q: 'How is the masterbatch packaged and what is the shelf life?',
    a: 'Our masterbatch is available in 25 kg PP woven bags (standard) and 500–1000 kg FIBC big bags (for high-volume orders). Shelf life is 24 months from production date when stored in original sealed packaging in a cool, dry environment (below 30°C, away from direct sunlight). Reseal partially used bags immediately to prevent moisture absorption.'
  },
  {
    q: 'Can I get a sample before placing a full order?',
    a: 'Yes. We offer pre-production samples upon request — typically 5–25 kg quantities for processing trials. Contact us with your polymer type, application, and processing parameters, and we\'ll advise on which grade to sample and arrange delivery.'
  },
  {
    q: 'Do you provide food-contact grade masterbatch?',
    a: 'Yes. Through our Coraplast partnership, we offer white, black, and colour masterbatch grades compliant with EU 10/2011 Regulation and FDA 21 CFR requirements for food contact applications. Request the specific grade and regulatory documentation when enquiring.'
  },
  {
    q: 'What quality control tests do you run on each batch?',
    a: 'Each production batch is tested for: Melt Flow Index (ISO 1133), ash content (ISO 3451), moisture content, colour consistency, and visual dispersibility. A Certificate of Analysis (CoA) is issued for every batch and can be provided alongside each shipment. Full traceability from raw material intake to finished goods is maintained.'
  },
  {
    q: 'What is your lead time and minimum order quantity?',
    a: 'Lead times depend on product type and stock availability — typically 3–7 business days for stocked items. Minimum order quantities vary by product. Contact us with your volume requirements and we\'ll provide a specific commercial offer. For large or recurring orders, we can discuss supply agreements with fixed pricing and reserved capacity.'
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(20,27,62,0.08)' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', background: 'none', border: 'none', cursor: 'pointer', gap: 16, textAlign: 'left' }}
      >
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700, color: '#141B3E', lineHeight: 1.5 }}>{q}</span>
        <ChevronDown size={16} color="rgba(20,27,62,0.4)" style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s' }} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ overflow: 'hidden' }}
      >
        <p style={{ fontSize: 13, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, paddingBottom: 18 }}>{a}</p>
      </motion.div>
    </div>
  )
}

const GLOSSARY = [
  { term: 'CaCO₃', def: 'Calcium Carbonate — the inorganic mineral used as filler. Typically sourced from limestone and surface-treated for improved polymer compatibility.' },
  { term: 'MFI / MFR', def: 'Melt Flow Index / Melt Flow Rate — measures how easily a polymer flows when melted (g/10min). Higher MFI = easier flow. FMPE tested at 190°C/2.16kg, FMPP at 230°C/2.16kg.' },
  { term: 'Let-Down Ratio (LDR)', def: 'The proportion of masterbatch blended into the base resin. A 2% LDR means 2 kg masterbatch per 98 kg of base polymer.' },
  { term: 'Carrier Resin', def: 'The polymer matrix in which pigment or filler is dispersed. Must be compatible with the end-use resin to avoid processing problems.' },
  { term: 'ΔE', def: 'Delta-E — a numerical measure of colour difference. ΔE ≤ 1.0 is generally considered imperceptible to the human eye; Blau Batch colour MB targets ΔE ≤ 0.5 batch-to-batch.' },
  { term: 'TDS', def: 'Technical Data Sheet — document listing all key product specifications, test methods, processing recommendations, and packaging details.' },
  { term: 'CoA', def: 'Certificate of Analysis — batch-specific document confirming that tested properties meet the product specification.' },
  { term: 'BOPP', def: 'Biaxially Oriented Polypropylene — PP film stretched in both machine and transverse directions for improved stiffness and barrier properties.' },
  { term: 'Raffia', def: 'Flat or fibrillated PP tape produced by slitting and stretching extruded film — used for woven bags, sacks, and geotextiles.' },
]

const inputStyle = {
  width: '100%', padding: '11px 14px',
  background: 'rgba(20,27,62,0.04)', border: '1px solid rgba(20,27,62,0.14)',
  borderRadius: 8, color: '#141B3E', fontFamily: 'Open Sans, sans-serif', fontSize: 14,
  outline: 'none', boxSizing: 'border-box',
}
const labelStyle = {
  display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800,
  letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(20,27,62,0.45)', marginBottom: 7,
}

function DocRequestForm({ selected, onDeselect }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '' })
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const submit = async () => {
    const errs = {
      docs: selected.length === 0 ? 'Select at least one document above.' : '',
      name: !form.name.trim() ? 'Required.' : '',
      email: !form.email.trim() ? 'Required.' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? 'Enter a valid email.' : '',
    }
    if (Object.values(errs).some(Boolean)) { setErrors(errs); return }
    setSubmitError(false)
    try {
      const res = await fetch('/api/send-document-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ documents: selected, ...form }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setSubmitError(data.error || 'Something went wrong. Please email info@blaubatch.com directly.')
        return
      }
    } catch (e) {
      setSubmitError('Could not send your request. Please email info@blaubatch.com directly.')
      return
    }
    setDone(true)
  }

  if (done) return (
    <div style={{ background: '#fff', border: '1px solid rgba(20,27,62,0.1)', borderRadius: 16, padding: '48px 36px', textAlign: 'center', boxShadow: '0 4px 32px rgba(20,27,62,0.06)' }}>
      <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(43,141,208,0.1)', border: '1px solid rgba(43,141,208,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px', fontSize: 24 }}>✅</div>
      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 20, fontWeight: 900, marginBottom: 10, color: '#141B3E' }}>Request received.</div>
      <p style={{ fontSize: 13, color: 'rgba(20,27,62,0.55)', lineHeight: 1.75, maxWidth: 360, margin: '0 auto' }}>We'll send your requested documents to <strong>{form.email}</strong> within 1 business day.</p>
    </div>
  )

  return (
    <div style={{ background: '#fff', border: '1px solid rgba(20,27,62,0.1)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 32px rgba(20,27,62,0.06)' }}>
      <div style={{ padding: '28px 32px', borderBottom: '1px solid rgba(20,27,62,0.07)' }}>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', marginBottom: 8 }}>Selected Documents</div>
        {selected.length === 0 ? (
          <p style={{ fontSize: 13, color: 'rgba(20,27,62,0.4)', fontStyle: 'italic' }}>No documents selected — tick the cards above to add them here.</p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {selected.map(title => (
              <div key={title} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 10px', background: 'rgba(43,141,208,0.07)', border: '1px solid rgba(43,141,208,0.2)', borderRadius: 6 }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, color: '#141B3E' }}>{title}</span>
                <button onClick={() => onDeselect(title)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, lineHeight: 1, color: 'rgba(20,27,62,0.4)', fontSize: 14, fontWeight: 700 }}>×</button>
              </div>
            ))}
          </div>
        )}
        {errors.docs && <div style={{ fontSize: 11, color: '#EF4444', marginTop: 8 }}>{errors.docs}</div>}
      </div>

      <div style={{ padding: '28px 32px' }}>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', marginBottom: 16 }}>Your Details</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
          <div>
            <label style={labelStyle}>Full Name <span style={{ color: '#2B8DD0' }}>*</span></label>
            <input style={{ ...inputStyle, borderColor: errors.name ? '#EF4444' : 'rgba(20,27,62,0.14)' }} placeholder="Your name" value={form.name} onChange={e => set('name', e.target.value)} />
            {errors.name && <div style={{ fontSize: 11, color: '#EF4444', marginTop: 4 }}>{errors.name}</div>}
          </div>
          <div>
            <label style={labelStyle}>Company</label>
            <input style={inputStyle} placeholder="Company name" value={form.company} onChange={e => set('company', e.target.value)} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
          <div>
            <label style={labelStyle}>Email <span style={{ color: '#2B8DD0' }}>*</span></label>
            <input type="email" style={{ ...inputStyle, borderColor: errors.email ? '#EF4444' : 'rgba(20,27,62,0.14)' }} placeholder="you@company.com" value={form.email} onChange={e => set('email', e.target.value)} />
            {errors.email && <div style={{ fontSize: 11, color: '#EF4444', marginTop: 4 }}>{errors.email}</div>}
          </div>
          <div>
            <label style={labelStyle}>Phone / WhatsApp</label>
            <input type="tel" style={inputStyle} placeholder="+20 xxx xxx xxxx" value={form.phone} onChange={e => set('phone', e.target.value)} />
          </div>
        </div>

        <button onClick={submit} style={{
          width: '100%', padding: '13px', background: '#2B8DD0', color: '#fff', border: 'none',
          borderRadius: 7, fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 800,
          letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}
          onMouseEnter={e => e.currentTarget.style.background = '#2477b3'}
          onMouseLeave={e => e.currentTarget.style.background = '#2B8DD0'}
        ><Download size={14} /> Send Me These Documents</button>

        {submitError && (
          <div role="alert" style={{
            marginTop: 12, padding: '12px 16px',
            background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.25)',
            borderRadius: 8, fontSize: 13, color: '#DC2626', lineHeight: 1.5,
          }}>
            ⚠️ {submitError}
          </div>
        )}

        <div style={{ fontSize: 11, color: 'rgba(20,27,62,0.4)', textAlign: 'center', marginTop: 10 }}>
          Sent within 1 business day · Saturday–Thursday 9AM–5PM Cairo
        </div>
      </div>
    </div>
  )
}

export default function ResourcesPage() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const inView1 = useInView(ref1, { once: true, margin: '-60px' })
  const inView2 = useInView(ref2, { once: true, margin: '-60px' })
  const [selectedDocs, setSelectedDocs] = useState([])

  const toggleDoc = (title) => setSelectedDocs(prev =>
    prev.includes(title) ? prev.filter(d => d !== title) : [...prev, title]
  )

  return (
    <>
      <PageHero
        split
        bgImage="/images/heroes/resources.webp"
        breadcrumb={{ current: 'Resources' }}
        tag="Technical Library"
        title="Product Documents,"
        titleAccent="Guides & FAQs"
        sub="Technical data sheets, processing guides, certificates of analysis, and an FAQ covering filler masterbatch selection, dosage, processing, and quality control."
        cta={{
          primary: { label: 'Request a TDS', href: 'mailto:info@blaubatch.com?subject=TDS Request' },
          secondary: { label: 'View FAQs', href: '#faqs' },
        }}
      />

      {/* Documents */}
      <section style={{ background: '#F7F8FC', padding: '88px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div ref={ref1}>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}
            >
              <FileText size={14} color="#2B8DD0" />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0' }}>Technical Documents</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.07 }}
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 8, lineHeight: 1.1, color: '#141B3E' }}
            >Download Library</motion.h2>
            <motion.p initial={{ opacity: 0 }} animate={inView1 ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.15 }}
              style={{ fontSize: 13, color: 'rgba(20,27,62,0.5)', marginBottom: 40 }}
            >Select the documents you need, then fill in your details below — we'll email everything within 1 business day.</motion.p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 40 }}>
            {DOCS.map((d, i) => {
              const selected = selectedDocs.includes(d.title)
              return (
                <motion.div key={d.title}
                  initial={{ opacity: 0, y: 24 }} animate={inView1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                  onClick={() => toggleDoc(d.title)}
                  style={{
                    background: selected ? 'rgba(43,141,208,0.04)' : '#FFFFFF',
                    border: selected ? '2px solid #2B8DD0' : '1px solid rgba(20,27,62,0.08)',
                    borderRadius: 14, padding: selected ? '21px' : '22px',
                    display: 'flex', flexDirection: 'column', cursor: 'pointer',
                    transition: 'all 0.18s',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                    <span style={{
                      fontFamily: 'Inter, sans-serif', fontSize: 9, fontWeight: 800, letterSpacing: '0.08em',
                      textTransform: 'uppercase', padding: '3px 8px', borderRadius: 3,
                      background: TYPE_BG[d.type] || 'rgba(20,27,62,0.08)',
                      color: TYPE_COLOR[d.type] || 'rgba(20,27,62,0.5)',
                    }}>{d.type}</span>
                    <div style={{
                      width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                      border: selected ? '2px solid #2B8DD0' : '1.5px solid rgba(20,27,62,0.18)',
                      background: selected ? '#2B8DD0' : 'transparent',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.18s',
                    }}>
                      {selected && <Check size={13} color="#fff" strokeWidth={3} />}
                    </div>
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 800, color: '#141B3E', marginBottom: 8, lineHeight: 1.4 }}>{d.title}</div>
                  <p style={{ fontSize: 12, color: 'rgba(20,27,62,0.5)', lineHeight: 1.65, flex: 1 }}>{d.desc}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Request form */}
          <DocRequestForm selected={selectedDocs} onDeselect={(title) => toggleDoc(title)} />
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#FFFFFF', padding: '88px 48px', borderTop: '1px solid rgba(20,27,62,0.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 72, alignItems: 'start' }}>
          <div ref={ref2} style={{ position: 'sticky', top: 88 }}>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}
            >
              <HelpCircle size={14} color="#D4840A" />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#D4840A' }}>FAQ</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.07 }}
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 16, lineHeight: 1.1, color: '#141B3E' }}
            >Frequently Asked Questions</motion.h2>
            <p style={{ fontSize: 13, color: 'rgba(20,27,62,0.5)', lineHeight: 1.75, marginBottom: 24 }}>Can't find your answer? Contact us directly.</p>
            <a href="mailto:info@blaubatch.com?subject=Technical Question" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 18px', background: '#2B8DD0', color: '#fff', borderRadius: 7, fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'background 0.3s ease' }}
              onMouseEnter={e => e.currentTarget.style.background = '#2B8DD0'}
              onMouseLeave={e => e.currentTarget.style.background = '#2B8DD0'}
            >Ask a Question <ArrowRight size={12} /></a>
          </div>
          <div>
            {FAQS.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section style={{ background: '#F7F8FC', padding: '88px 48px', borderTop: '1px solid rgba(20,27,62,0.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <BookOpen size={14} color="#2B8DD0" />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0' }}>Terminology</span>
          </div>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 40, lineHeight: 1.1, color: '#141B3E' }}>Masterbatch Glossary</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 0 }}>
            {GLOSSARY.map((g, i) => (
              <div key={g.term} style={{ padding: '20px 0', borderBottom: '1px solid rgba(20,27,62,0.07)', paddingRight: i % 2 === 0 ? 40 : 0, paddingLeft: i % 2 === 1 ? 40 : 0, borderRight: i % 2 === 0 ? '1px solid rgba(20,27,62,0.07)' : 'none' }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 900, color: '#2B8DD0', marginBottom: 6 }}>{g.term}</div>
                <p style={{ fontSize: 12, color: 'rgba(20,27,62,0.55)', lineHeight: 1.75 }}>{g.def}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Articles */}
      <section style={{ background: '#F7F8FC', padding: '88px 48px', borderTop: '1px solid rgba(20,27,62,0.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#D4840A', border: '1px solid rgba(212,132,10,0.3)', borderRadius: 4, padding: '5px 14px', marginBottom: 16 }}>Technical Blog</div>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 12, lineHeight: 1.1, color: '#141B3E' }}>Technical Articles</h2>
            <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, maxWidth: 560 }}>In-depth guides on masterbatch selection, processing, and applications — written by our compounding team for plastics engineers and procurement professionals.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {[
              { tag: 'Filler MB', slug: 'what-is-filler-masterbatch', title: 'What is Filler Masterbatch and How Does it Reduce Material Costs?', desc: 'A complete guide to CaCO₃-based filler masterbatch — how it works, how it\'s made, and how to calculate cost savings for your specific application.', color: '#D4840A', borderColor: 'rgba(212,132,10,0.25)' },
              { tag: 'Grade Selection', slug: 'caco3-loading-comparison', title: 'CaCO₃ Loading: 70% vs 75% vs 80% — Which Grade Is Right for Your Application?', desc: 'A technical comparison of high-loading filler grades — covering mechanical property trade-offs, processing considerations, and application fit.', color: '#2B8DD0', borderColor: 'rgba(46,127,208,0.25)' },
              { tag: 'Processing', slug: 'pe-vs-pp-carrier-systems', title: 'PE vs PP Carrier Systems: Why Matching Carrier to Base Resin Matters', desc: 'Why using the wrong carrier polymer causes processing problems — and how to select the right filler masterbatch carrier for your production line.', color: '#2B8DD0', borderColor: 'rgba(46,127,208,0.25)' },
              { tag: 'White MB', slug: 'tio2-masterbatch-opacity', title: 'TiO₂ Masterbatch: Understanding Opacity, Whiteness, and Food-Contact Compliance', desc: 'How TiO₂ loading affects opacity and CIE whiteness index — and what food-contact compliance (EU 10/2011, FDA) means in practice.', color: '#2B8DD0', borderColor: 'rgba(74,170,224,0.25)' },
              { tag: 'UV Protection', slug: 'uv-stabilisation-agricultural-film', title: 'UV Stabilisation in Agricultural Film: What Makes a Masterbatch Last 10+ Years?', desc: 'How HALS-based UV stabilisers in black and additive masterbatch protect agricultural films from photodegradation in MENA and Mediterranean climates.', color: '#22C55E', borderColor: 'rgba(34,197,94,0.2)' },
              { tag: 'Quality', slug: 'reading-masterbatch-coa', title: 'Reading a Masterbatch CoA: The 7 Properties Every Buyer Should Check', desc: 'MFI, ash content, moisture, colour delta-E, and dispersibility — a practical guide to reading a Certificate of Analysis before accepting a shipment.', color: '#D4840A', borderColor: 'rgba(212,132,10,0.25)' },
            ].map((a, i) => (
              <Link key={i} href={`/blog/${a.slug}`} style={{
                background: '#FFFFFF', border: '1px solid rgba(20,27,62,0.08)', borderRadius: 14,
                padding: '24px', display: 'flex', flexDirection: 'column', gap: 12,
                borderTop: `3px solid ${a.borderColor}`, textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(20,27,62,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
              >
                <div style={{
                  display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 9, fontWeight: 800,
                  letterSpacing: '0.1em', textTransform: 'uppercase', color: a.color,
                  border: `1px solid ${a.borderColor}`, borderRadius: 4, padding: '3px 8px',
                  alignSelf: 'flex-start',
                }}>{a.tag}</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 800, color: '#141B3E', lineHeight: 1.4, flex: 1 }}>{a.title}</h3>
                <p style={{ fontSize: 12, color: 'rgba(20,27,62,0.5)', lineHeight: 1.7 }}>{a.desc}</p>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800,
                  letterSpacing: '0.06em', textTransform: 'uppercase', color: '#2B8DD0',
                  paddingTop: 12, borderTop: '1px solid rgba(20,27,62,0.08)',
                }}>
                  Read article <ArrowRight size={11} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <style>{`@media(max-width:900px){ section > div { grid-template-columns: 1fr !important; } section { padding: 56px 20px !important; } }`}</style>
    </>
  )
}
