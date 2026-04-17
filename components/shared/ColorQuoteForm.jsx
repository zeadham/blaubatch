'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CARRIERS = [
  'CMB-PE (Polyethylene carrier)',
  'CMB-PP (Polypropylene carrier)',
  'Both PE and PP',
  'Not sure — need guidance',
]

const APPLICATIONS = [
  'Packaging film / bags',
  'Injection molding',
  'Blow molding / bottles',
  'Raffia / woven bags',
  'Non-woven',
  'Thermoforming',
  'Other',
]

const VOLUMES = [
  'Under 100 kg / month',
  '100–500 kg / month',
  '500 kg – 1 MT / month',
  '1–5 MT / month',
  '5+ MT / month',
]

const COUNTRIES = ['Egypt', 'Saudi Arabia', 'UAE', 'Jordan', 'Libya', 'Other']

const inputStyle = {
  width: '100%', padding: '12px 14px',
  background: 'rgba(20,27,62,0.04)', border: '1px solid rgba(20,27,62,0.14)',
  borderRadius: 8, color: '#141B3E', fontFamily: 'Open Sans, sans-serif', fontSize: 14,
  outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box',
}

const labelStyle = {
  display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800,
  letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(20,27,62,0.45)', marginBottom: 7,
}

function FocusInput({ error, onBlur: onBlurProp, ...props }) {
  const [focused, setFocused] = useState(false)
  const borderColor = error ? '#EF4444' : focused ? '#2B8DD0' : 'rgba(20,27,62,0.14)'
  const bgColor = focused ? '#fff' : 'rgba(20,27,62,0.04)'
  const style = { ...inputStyle, borderColor, background: bgColor }
  const isTextarea = props.as === 'textarea'
  const isSelect = props.as === 'select'
  const commonProps = {
    style: isTextarea ? { ...style, resize: 'vertical', minHeight: 90, lineHeight: 1.6 }
           : isSelect ? { ...style, appearance: 'none', cursor: 'pointer',
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='rgba(20,27,62,0.4)' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
               backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center',
               background: bgColor,
             }
           : style,
    onFocus: () => setFocused(true),
    onBlur: (e) => { setFocused(false); onBlurProp?.(e) },
    ...props,
    as: undefined,
  }
  const el = isTextarea ? <textarea {...commonProps} />
           : isSelect ? <select {...commonProps}>{props.children}</select>
           : <input {...commonProps} />
  return (
    <>
      {el}
      {error && <div role="alert" style={{ fontSize: 11, color: '#EF4444', marginTop: 4 }}>{error}</div>}
    </>
  )
}

export default function ColorQuoteForm() {
  const [open, setOpen] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const check = () => { if (window.location.hash === '#quote-form') setOpen(true) }
    check()
    window.addEventListener('hashchange', check)
    return () => window.removeEventListener('hashchange', check)
  }, [])
  const [submitError, setSubmitError] = useState(false)
  const [form, setForm] = useState({
    carrier: '', colorRef: '', application: '',
    volume: '', country: '', sample: '',
    name: '', company: '', email: '', phone: '', notes: '',
  })
  const [errors, setErrors] = useState({})
  const formRef = useRef(null)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const validateField = (field, value) => {
    let msg = ''
    if (field === 'name' && !value.trim()) msg = 'Full name is required.'
    if (field === 'company' && !value.trim()) msg = 'Company name is required.'
    if (field === 'email') {
      if (!value.trim()) msg = 'Email address is required.'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) msg = 'Enter a valid email.'
    }
    if (field === 'phone' && !value.trim()) msg = 'Phone number is required.'
    setErrors(prev => ({ ...prev, [field]: msg }))
  }

  const submit = async () => {
    const msgs = {
      name: !form.name.trim() ? 'Full name is required.' : '',
      company: !form.company.trim() ? 'Company name is required.' : '',
      email: !form.email.trim() ? 'Email address is required.'
           : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? 'Enter a valid email.'
           : '',
      phone: !form.phone.trim() ? 'Phone number is required.' : '',
    }
    if (Object.values(msgs).some(Boolean)) { setErrors(msgs); return }
    setSubmitError(false)
    try {
      const res = await fetch('/api/send-colour-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setSubmitError(data.error || 'Something went wrong. Please try again or email us directly.')
        return
      }
    } catch (e) {
      setSubmitError('Could not send your request. Please email info@blaubatch.com directly.')
      return
    }
    setDone(true)
  }

  if (done) {
    return (
      <div style={{ background: '#fff', border: '1px solid rgba(20,27,62,0.1)', borderRadius: 16, padding: '56px 36px', textAlign: 'center', boxShadow: '0 4px 32px rgba(20,27,62,0.08)' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(43,141,208,0.1)', border: '1px solid rgba(43,141,208,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 28 }}>✅</div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 22, fontWeight: 900, marginBottom: 10, color: '#141B3E' }}>Quote request received.</div>
        <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.55)', lineHeight: 1.75, maxWidth: 360, margin: '0 auto 28px' }}>We'll review your colour requirements and get back to you within 24 hours.</p>
        <a href="https://wa.me/201022227723" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.25)', color: '#1a9e4a', padding: '12px 20px', borderRadius: 8, fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700 }}>
          💬 Follow up on WhatsApp
        </a>
      </div>
    )
  }

  return (
    <div id="quote-form" ref={formRef} style={{ background: '#fff', border: '1px solid rgba(20,27,62,0.1)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 32px rgba(20,27,62,0.08)' }}>

      {/* Collapsible header */}
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          padding: '28px 32px',
          borderBottom: open ? '1px solid rgba(20,27,62,0.07)' : 'none',
          background: '#FAFAFC', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', cursor: 'pointer', userSelect: 'none',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#F3F4F8'}
        onMouseLeave={e => e.currentTarget.style.background = '#FAFAFC'}
      >
        <div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 20, fontWeight: 900, color: '#141B3E', marginBottom: 4 }}>Request a Colour Quote</div>
          <p style={{ fontSize: 15, color: 'rgba(20,27,62,0.5)', margin: 0 }}>
            {open ? "Fill in the form below and we'll respond within 24 hours." : 'Click to open the quote form · 24h response'}
          </p>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
            background: open ? '#2B8DD0' : 'rgba(43,141,208,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 16,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 5L7 9L11 5" stroke={open ? '#fff' : '#2B8DD0'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="color-form-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
      <div style={{ padding: '32px' }}>

        {/* Colour needs */}
        <div style={{ marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid rgba(20,27,62,0.07)' }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', marginBottom: 16 }}>Colour Needs</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
            <div>
              <label style={labelStyle}>Carrier Resin</label>
              <FocusInput as="select" value={form.carrier} onChange={e => set('carrier', e.target.value)}>
                <option value="">Select carrier...</option>
                {CARRIERS.map(c => <option key={c} value={c}>{c}</option>)}
              </FocusInput>
            </div>
            <div>
              <label style={labelStyle}>Application</label>
              <FocusInput as="select" value={form.application} onChange={e => set('application', e.target.value)}>
                <option value="">Select application...</option>
                {APPLICATIONS.map(a => <option key={a} value={a}>{a}</option>)}
              </FocusInput>
            </div>
          </div>
          <div>
            <label style={labelStyle}>Colour Reference</label>
            <FocusInput placeholder="e.g. RAL 3020, Pantone 186 C, or describe: 'traffic red'" value={form.colorRef} onChange={e => set('colorRef', e.target.value)} />
            <div style={{ fontSize: 11, color: 'rgba(20,27,62,0.4)', marginTop: 6 }}>You can also send us a physical sample for matching.</div>
          </div>
        </div>

        {/* Volume & requirements */}
        <div style={{ marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid rgba(20,27,62,0.07)' }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', marginBottom: 16 }}>Volume & Requirements</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
            <div>
              <label style={labelStyle}>Estimated Monthly Volume</label>
              <FocusInput as="select" value={form.volume} onChange={e => set('volume', e.target.value)}>
                <option value="">Select quantity...</option>
                {VOLUMES.map(v => <option key={v} value={v}>{v}</option>)}
              </FocusInput>
            </div>
            <div>
              <label style={labelStyle}>Country / Region</label>
              <FocusInput as="select" value={form.country} onChange={e => set('country', e.target.value)}>
                <option value="">Select country...</option>
                {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
              </FocusInput>
            </div>
          </div>
          <div>
            <label style={labelStyle}>Sample Required?</label>
            <FocusInput as="select" value={form.sample} onChange={e => set('sample', e.target.value)}>
              <option value="">Select...</option>
              <option>Yes — send a colour sample first</option>
              <option>No — go directly to commercial quote</option>
            </FocusInput>
          </div>
        </div>

        {/* Contact details */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0', marginBottom: 16 }}>Contact Details</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
            <div>
              <label style={labelStyle}>Full Name <span style={{ color: '#2B8DD0' }}>*</span></label>
              <FocusInput placeholder="Your name" value={form.name} onChange={e => set('name', e.target.value)} onBlur={e => validateField('name', e.target.value)} error={errors.name} />
            </div>
            <div>
              <label style={labelStyle}>Company <span style={{ color: '#2B8DD0' }}>*</span></label>
              <FocusInput placeholder="Company name" value={form.company} onChange={e => set('company', e.target.value)} onBlur={e => validateField('company', e.target.value)} error={errors.company} />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
            <div>
              <label style={labelStyle}>Email <span style={{ color: '#2B8DD0' }}>*</span></label>
              <FocusInput type="email" placeholder="you@company.com" value={form.email} onChange={e => set('email', e.target.value)} onBlur={e => validateField('email', e.target.value)} error={errors.email} />
            </div>
            <div>
              <label style={labelStyle}>WhatsApp / Phone <span style={{ color: '#2B8DD0' }}>*</span></label>
              <FocusInput type="tel" placeholder="+20 ..." value={form.phone} onChange={e => set('phone', e.target.value)} onBlur={e => validateField('phone', e.target.value)} error={errors.phone} />
            </div>
          </div>
          <div>
            <label style={labelStyle}>Additional Notes</label>
            <FocusInput as="textarea" placeholder="Any additional colour requirements, certifications needed, or processing notes..." value={form.notes} onChange={e => set('notes', e.target.value)} />
          </div>
        </div>

        <button onClick={submit} style={{
          width: '100%', padding: '14px', background: '#2B8DD0', color: '#fff', border: 'none',
          borderRadius: 7, fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 800,
          letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'all 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#2477b3'}
        onMouseLeave={e => e.currentTarget.style.background = '#2B8DD0'}
        >Submit Quote Request ↗</button>

        {submitError && (
          <div role="alert" style={{
            marginTop: 12, padding: '12px 16px',
            background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.25)',
            borderRadius: 8, fontSize: 13, color: '#DC2626', lineHeight: 1.5,
          }}>
            ⚠️ {submitError}
          </div>
        )}

        <div style={{ fontSize: 11, color: 'rgba(20,27,62,0.4)', textAlign: 'center', marginTop: 12 }}>
          We respond within 24 hours · Saturday–Thursday 9AM–5PM Cairo
        </div>
      </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        input::placeholder, textarea::placeholder { color: rgba(20,27,62,0.3); }
        select option { background: #fff; color: #141B3E; }
      `}</style>
    </div>
  )
}
