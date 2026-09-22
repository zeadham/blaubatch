'use client'

import { useLocale } from '@/components/LocaleProvider'

const PILLS = [
  ['✓  ISO 9001 Aligned Production', '✓  إنتاج متوافق مع ISO 9001'],
  ['✓  In-House Lab Testing', '✓  اختبارات معملية داخلية'],
  ['✓  TDS & CoA Per Shipment', '✓  TDS وCoA مع كل شحنة'],
  ['✓  Coraplast Authorised Distributor', '✓  موزّع معتمد لشركة Coraplast'],
  ['✓  MENA · Europe · Global', '✓  الشرق الأوسط وشمال أفريقيا · أوروبا · عالمياً'],
  ['✓  25 kg Bags & FIBC Big Bags', '✓  أكياس 25 كجم وأكياس FIBC'],
  ['✓  Custom Formulation Service', '✓  خدمة تركيبات مخصصة'],
  ['✓  Full Batch Traceability', '✓  تتبّع كامل لكل دفعة'],
  ['✓  PE & PP Carrier Systems', '✓  أنظمة حاملة PE وPP'],
  ['✓  Fast Enquiry-to-Quote', '✓  من الاستفسار إلى عرض السعر بسرعة'],
]

export default function TrustBar() {
  const { isAr } = useLocale()
  const ALL = [...PILLS, ...PILLS].map(([en, ar]) => (isAr ? ar : en))
  return (
    <div style={{
      background: '#EEF4FA',
      borderTop: '1px solid rgba(20,27,62,0.1)',
      borderBottom: '1px solid rgba(20,27,62,0.1)',
      padding: '18px 0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Fade edges */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right, #EEF4FA, transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left, #EEF4FA, transparent)', zIndex: 2, pointerEvents: 'none' }} />

      <div className="scroll-x" dir="ltr" style={{ display: 'flex', gap: 0, whiteSpace: 'nowrap', width: 'max-content' }}>
        {ALL.map((pill, i) => (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '0 24px',
            fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700,
            letterSpacing: '0.05em', color: 'rgba(20,27,62,0.65)',
            borderRight: '1px solid rgba(20,27,62,0.08)',
            direction: isAr ? 'rtl' : 'ltr',
          }}>
            {pill}
          </span>
        ))}
      </div>
    </div>
  )
}
