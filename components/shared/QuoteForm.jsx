'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocale } from '@/components/LocaleProvider'

const DEFAULT_PRODUCTS = [
  { name: 'FMPE Series', sub: 'PE Carrier · 70–80% CaCO₃', value: 'FMPE Series — PE Filler Masterbatch' },
  { name: 'FMPP Series', sub: 'PP Carrier · 70–80% CaCO₃', value: 'FMPP Series — PP Filler Masterbatch' },
  { name: 'White Masterbatch', sub: 'TiO₂-based · PE & PP', value: 'White Masterbatch' },
  { name: 'Black Masterbatch', sub: 'Carbon black · UV-stable', value: 'Black Masterbatch' },
  { name: 'Colour Masterbatch', sub: 'Full colour range · PE & PP', value: 'Colour Masterbatch' },
  { name: 'Additive Masterbatch', sub: 'UV · Slip · Antiblock', value: 'Additive Masterbatch' },
  { name: 'Custom Formulation', sub: 'Tailored to your spec', value: 'Custom Formulation' },
]

const DEFAULT_APPLICATIONS = [
  'Blown Film', 'Cast Film', 'Injection Molding', 'Blow Molding',
  'Raffia / Woven Bags', 'Non-woven', 'Thermoforming', 'Pipe & Profile Extrusion', 'Other',
]

const QUANTITIES = [
  '500 kg – 1 MT (trial)', '1 MT – 5 MT', '5 MT – 20 MT', '20 MT – 50 MT', '50 MT+',
]

const REGIONS = [
  'Egypt', 'Saudi Arabia', 'UAE', 'Kuwait', 'Jordan', 'Turkey', 'Poland / Europe',
  "Other — I'll specify in the message",
]

const inputStyle = {
  width: '100%', padding: '13px 16px',
  background: 'rgba(20,27,62,0.04)', border: '1px solid rgba(20,27,62,0.14)',
  borderRadius: 8, color: '#141B3E', fontFamily: 'Open Sans, sans-serif', fontSize: 15,
  outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box',
}

const labelStyle = {
  display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800,
  letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(20,27,62,0.45)', marginBottom: 7,
}

const sectionLabel = {
  fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 800,
  letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0',
  marginBottom: 14,
}

function FocusInput({ error, onBlur: onBlurProp, ...props }) {
  const [focused, setFocused] = useState(false)
  const { isAr } = useLocale()
  const borderColor = error ? '#EF4444' : focused ? '#2B8DD0' : 'rgba(20,27,62,0.14)'
  const bgColor = focused ? '#fff' : 'rgba(20,27,62,0.04)'
  const style = { ...inputStyle, borderColor, background: bgColor }
  const isTextarea = props.as === 'textarea'
  const isSelect = props.as === 'select'
  const commonProps = {
    style: isTextarea
      ? { ...style, resize: 'vertical', minHeight: 110, lineHeight: 1.6 }
      : isSelect
      ? {
          ...style, appearance: 'none', cursor: 'pointer',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='rgba(20,27,62,0.4)' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat', backgroundPosition: isAr ? 'left 14px center' : 'right 14px center',
          background: bgColor, borderColor,
        }
      : style,
    onFocus: () => setFocused(true),
    onBlur: (e) => { setFocused(false); onBlurProp?.(e) },
    ...props,
    as: undefined,
  }
  return (
    <>
      {isTextarea ? <textarea {...commonProps} />
       : isSelect ? <select {...commonProps}>{props.children}</select>
       : <input {...commonProps} />}
      {error && <div role="alert" style={{ fontSize: 12, color: '#EF4444', marginTop: 4 }}>{error}</div>}
    </>
  )
}

export default function QuoteForm({
  products = DEFAULT_PRODUCTS,
  defaultProduct,
  applications = DEFAULT_APPLICATIONS,
  step1Title,
  step1Sub,
  collapsible = true,
  defaultOpen = false,
}) {
  const { t, tr, isAr } = useLocale()
  const title = step1Title ? tr(step1Title) : t('Request a Quote', 'اطلب عرض سعر')
  const subtitle = step1Sub ? tr(step1Sub) : t("Fill in the form below and we'll respond within 24 hours.", 'املأ النموذج أدناه وسنرد عليك خلال 24 ساعة.')
  const [open, setOpen] = useState(defaultOpen)
  const [done, setDone] = useState(false)

  // Auto-open when navigated to via #quote-form hash
  useEffect(() => {
    if (!collapsible) return
    const check = () => {
      if (window.location.hash === '#quote-form') {
        setOpen(true)
      }
    }
    check()
    window.addEventListener('hashchange', check)
    return () => window.removeEventListener('hashchange', check)
  }, [collapsible])
  const [product, setProduct] = useState(defaultProduct || products[0]?.value || '')
  const [form, setForm] = useState({
    grade: '', application: '',
    qty: '', frequency: '', region: '', details: '',
    name: '', company: '', email: '', phone: '', contactMethod: 'Email',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [errors, setErrors] = useState({})
  const formRef = useRef(null)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const validateField = (field, value) => {
    let msg = ''
    if (field === 'name' && !value.trim()) msg = t('Full name is required.', 'الاسم الكامل مطلوب.')
    if (field === 'company' && !value.trim()) msg = t('Company name is required.', 'اسم الشركة مطلوب.')
    if (field === 'email') {
      if (!value.trim()) msg = t('Email address is required.', 'البريد الإلكتروني مطلوب.')
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) msg = t('Enter a valid email.', 'أدخل بريداً إلكترونياً صحيحاً.')
    }
    if (field === 'phone' && !value.trim()) msg = t('Phone number is required.', 'رقم الهاتف مطلوب.')
    setErrors(prev => ({ ...prev, [field]: msg }))
  }

  const submit = async () => {
    const msgs = {
      name: !form.name.trim() ? t('Full name is required.', 'الاسم الكامل مطلوب.') : '',
      company: !form.company.trim() ? t('Company name is required.', 'اسم الشركة مطلوب.') : '',
      email: !form.email.trim() ? t('Email address is required.', 'البريد الإلكتروني مطلوب.')
           : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? t('Enter a valid email.', 'أدخل بريداً إلكترونياً صحيحاً.') : '',
      phone: !form.phone.trim() ? t('Phone number is required.', 'رقم الهاتف مطلوب.') : '',
    }
    if (Object.values(msgs).some(Boolean)) {
      setErrors(msgs)
      formRef.current?.querySelector('[data-contact]')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    setSubmitting(true)
    setSubmitError(false)
    try {
      const res = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product, ...form, lang: isAr ? 'ar' : 'en' }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setSubmitError(isAr ? 'حدث خطأ ما. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة.' : (data.error || 'Something went wrong. Please try again or email us directly.'))
        setSubmitting(false)
        return
      }
    } catch (e) {
      setSubmitError(t('Could not send your request. Please email info@blaubatch.com directly.', 'تعذّر إرسال طلبك. يرجى مراسلتنا مباشرة على info@blaubatch.com.'))
      setSubmitting(false)
      return
    }
    setSubmitting(false)
    setDone(true)
  }

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          background: '#fff', border: '1px solid rgba(20,27,62,0.1)',
          borderRadius: 16, padding: '64px 36px', textAlign: 'center',
          boxShadow: '0 4px 32px rgba(20,27,62,0.08)',
        }}
      >
        <div style={{
          width: 64, height: 64, borderRadius: '50%',
          background: 'rgba(43,141,208,0.1)', border: '1px solid rgba(43,141,208,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px', fontSize: 28,
        }}>✅</div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 22, fontWeight: 900, marginBottom: 10, color: '#141B3E' }}>
          {t('Quote request received.', 'تم استلام طلب عرض السعر.')}
        </div>
        <p style={{ fontSize: 16, color: 'rgba(20,27,62,0.55)', lineHeight: 1.75, maxWidth: 400, margin: '0 auto 28px' }}>
          {t("Thank you. We'll review your requirements and get back to you within 24 hours — usually much sooner during business hours.", 'شكراً لك. سنراجع متطلباتك ونعاود التواصل معك خلال 24 ساعة — وغالباً أسرع بكثير خلال ساعات العمل.')}
        </p>
        <a href="https://wa.me/201022227723" target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.25)',
          color: '#1a9e4a', padding: '13px 22px', borderRadius: 8,
          fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 700,
        }}>
          {t('💬 Follow up on WhatsApp', '💬 تابع معنا عبر واتساب')}
        </a>
      </motion.div>
    )
  }

  return (
    <div id="quote-form" ref={formRef} style={{
      background: '#fff',
      border: '1px solid rgba(20,27,62,0.1)',
      borderRadius: 16, overflow: 'hidden',
      boxShadow: '0 4px 32px rgba(20,27,62,0.08)',
    }}>
      {/* Header — always visible, acts as toggle when collapsible */}
      <div
        onClick={() => collapsible && setOpen(o => !o)}
        style={{
          padding: '28px 36px',
          borderBottom: (collapsible && !open) ? 'none' : '1px solid rgba(20,27,62,0.07)',
          background: '#FAFAFC',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          cursor: collapsible ? 'pointer' : 'default',
          userSelect: 'none',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => collapsible && (e.currentTarget.style.background = '#F3F4F8')}
        onMouseLeave={e => collapsible && (e.currentTarget.style.background = '#FAFAFC')}
      >
        <div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 20, fontWeight: 900, color: '#141B3E', marginBottom: 4 }}>{title}</div>
          <p style={{ fontSize: 15, color: 'rgba(20,27,62,0.5)', margin: 0 }}>
            {collapsible && !open ? t('Click to open the quote form · 24h response', 'اضغط لفتح نموذج عرض السعر · الرد خلال 24 ساعة') : subtitle}
          </p>
        </div>
        {collapsible && (
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
              background: open ? '#2B8DD0' : 'rgba(43,141,208,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginInlineStart: 16,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 5L7 9L11 5" stroke={open ? '#fff' : '#2B8DD0'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        )}
      </div>

      <AnimatePresence initial={false}>
        {(!collapsible || open) && (
          <motion.div
            key="form-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
      <div style={{ padding: '32px 36px', display: 'flex', flexDirection: 'column', gap: 32 }}>

        {/* Product selection */}
        <div>
          <div style={sectionLabel}>{t('Product', 'المنتج')}</div>
          <div style={{ display: 'flex', flexWrap: 'nowrap', gap: 8, overflowX: 'auto', paddingBottom: 2 }}>
            {products.map(p => (
              <div key={p.value} onClick={() => setProduct(p.value)} style={{
                padding: '8px 14px', borderRadius: 6, cursor: 'pointer', transition: 'all 0.2s', flexShrink: 0,
                border: product === p.value ? '2px solid #2B8DD0' : '1px solid rgba(20,27,62,0.12)',
                background: product === p.value ? 'rgba(43,141,208,0.07)' : '#FAFAFC',
              }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700, color: product === p.value ? '#2B8DD0' : '#141B3E' }}>{tr(p.name)}</div>
                <div style={{ fontSize: 11, color: 'rgba(20,27,62,0.4)', marginTop: 2 }}>{tr(p.sub)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Order details */}
        <div>
          <div style={sectionLabel}>{t('Order Details', 'تفاصيل الطلب')}</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={labelStyle}>{t('Grade / Specification', 'الدرجة / المواصفات')} <span style={{ color: 'rgba(20,27,62,0.3)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>{t('(optional)', '(اختياري)')}</span></label>
              <FocusInput placeholder={t('e.g. FMPE-1080, or describe your need', 'مثال: FMPE-1080، أو صف احتياجك')} value={form.grade} onChange={e => set('grade', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>{t('Application', 'التطبيق')}</label>
              <FocusInput as="select" value={form.application} onChange={e => set('application', e.target.value)}>
                <option value="">{t('Select your application', 'اختر التطبيق')}</option>
                {applications.map(a => <option key={a} value={a}>{tr(a)}</option>)}
              </FocusInput>
            </div>
          </div>
        </div>

        {/* Contact details */}
        <div data-contact="">
          <div style={sectionLabel}>{t('Your Contact Details', 'بيانات التواصل')}</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={labelStyle}>{t('Full Name', 'الاسم الكامل')} <span style={{ color: '#2B8DD0' }}>*</span></label>
              <FocusInput placeholder={t('Your name', 'اسمك')} value={form.name} onChange={e => set('name', e.target.value)} onBlur={e => validateField('name', e.target.value)} error={errors.name} />
            </div>
            <div>
              <label style={labelStyle}>{t('Company', 'الشركة')} <span style={{ color: '#2B8DD0' }}>*</span></label>
              <FocusInput placeholder={t('Company name', 'اسم الشركة')} value={form.company} onChange={e => set('company', e.target.value)} onBlur={e => validateField('company', e.target.value)} error={errors.company} />
            </div>
            <div>
              <label style={labelStyle}>{t('Email Address', 'البريد الإلكتروني')} <span style={{ color: '#2B8DD0' }}>*</span></label>
              <FocusInput dir="ltr" type="email" placeholder="your@company.com" value={form.email} onChange={e => set('email', e.target.value)} onBlur={e => validateField('email', e.target.value)} error={errors.email} />
            </div>
            <div>
              <label style={labelStyle}>{t('Phone / WhatsApp', 'الهاتف / واتساب')} <span style={{ color: '#2B8DD0' }}>*</span></label>
              <FocusInput dir="ltr" type="tel" placeholder="+20 or +966 ..." value={form.phone} onChange={e => set('phone', e.target.value)} onBlur={e => validateField('phone', e.target.value)} error={errors.phone} />
            </div>
          </div>
        </div>

        {/* Additional details — bottom */}
        <div>
          <label style={labelStyle}>{t('Additional Details', 'تفاصيل إضافية')} <span style={{ color: 'rgba(20,27,62,0.3)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>{t('(optional)', '(اختياري)')}</span></label>
          <FocusInput as="textarea" placeholder={t('Polymer type, processing parameters, current supplier info, or any technical requirements...', 'نوع البوليمر، وظروف التشغيل، ومعلومات المورّد الحالي، أو أي متطلبات فنية...')} value={form.details} onChange={e => set('details', e.target.value)} />
          <div style={{ fontSize: 12, color: 'rgba(20,27,62,0.4)', marginTop: 6 }}>{t('The more detail you provide, the more precise our quote.', 'كلما زادت التفاصيل، كان عرض السعر أدق.')}</div>
        </div>

        {/* Submit */}
        <div style={{ paddingTop: 8, borderTop: '1px solid rgba(20,27,62,0.08)' }}>
          <button onClick={submit} disabled={submitting} style={{
            width: '100%', padding: '16px',
            background: submitting ? 'rgba(43,141,208,0.5)' : '#2B8DD0',
            color: '#fff', border: 'none', borderRadius: 10,
            fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 900,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            cursor: submitting ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s', opacity: submitting ? 0.75 : 1,
          }}
          onMouseEnter={e => !submitting && (e.currentTarget.style.background = '#2477b3')}
          onMouseLeave={e => !submitting && (e.currentTarget.style.background = '#2B8DD0')}
          >{submitting ? t('Sending…', 'جارٍ الإرسال…') : t('Submit Quote Request ↗', 'إرسال طلب عرض السعر ↖')}</button>

          {submitError && (
            <div role="alert" style={{
              marginTop: 12, padding: '12px 16px',
              background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.25)',
              borderRadius: 8, fontSize: 13, color: '#DC2626', lineHeight: 1.5,
            }}>
              ⚠️ {submitError}
            </div>
          )}

          <p style={{ fontSize: 12, color: 'rgba(20,27,62,0.35)', textAlign: 'center', marginTop: 12 }}>
            {t('We respond within 24 hours · No commitment required', 'نرد خلال 24 ساعة · دون أي التزام')}
          </p>
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
