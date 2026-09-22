'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, FlaskConical, Package, Truck, HeadphonesIcon } from 'lucide-react'
import { useLocale } from '@/components/LocaleProvider'

const STEPS = [
  { icon: MessageSquare, n: '01', title: 'Enquiry & Specification', body: 'Send your polymer type, application, and volume. Quote within 24 hours.', titleAr: 'الاستفسار والمواصفات', bodyAr: 'أرسل نوع البوليمر والتطبيق والكمية. نوافيك بعرض السعر خلال 24 ساعة.', color: '#2B8DD0' },
  { icon: FlaskConical, n: '02', title: 'Formulation & Sample', body: 'Standard grades from stock, or custom formulation developed to your spec.', titleAr: 'التركيب والعيّنة', bodyAr: 'درجات قياسية من المخزون، أو تركيبة مخصصة تُطوَّر وفق مواصفاتك.', color: '#2B8DD0' },
  { icon: Package, n: '03', title: 'Production & QC', body: 'In-house lab testing on every batch. TDS and CoA issued before dispatch.', titleAr: 'الإنتاج ومراقبة الجودة', bodyAr: 'اختبارات معملية داخلية لكل دفعة. تُصدر TDS وCoA قبل الشحن.', color: '#D4840A' },
  { icon: Truck, n: '04', title: 'Packaging & Dispatch', body: '25 kg bags or FIBC. Full export documentation for international orders.', titleAr: 'التغليف والشحن', bodyAr: 'أكياس 25 كجم أو FIBC. مستندات تصدير كاملة للطلبات الدولية.', color: '#2B8DD0' },
  { icon: HeadphonesIcon, n: '05', title: 'Ongoing Technical Support', body: 'Process troubleshooting and grade optimisation after delivery.', titleAr: 'الدعم الفني المستمر', bodyAr: 'معالجة مشكلات التشغيل وتحسين الدرجات بعد التسليم.', color: '#2B8DD0' },
]

export default function Process() {
  const { t } = useLocale()
  const headRef = useRef(null)
  const inView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section id="process" style={{
      background: '#F7F8FC',
      padding: '96px 48px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div ref={headRef} style={{ marginBottom: 56, textAlign: 'center', perspective: '1000px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16, rotateX: 10 }} animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 10,
              fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0',
              border: '1px solid rgba(74,170,224,0.3)', borderRadius: 4, padding: '4px 12px', marginBottom: 16,
            }}
          >{t('How We Work', 'كيف نعمل')}</motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20, rotateX: 10 }} animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.07 }}
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 900, letterSpacing: '-0.025em', marginBottom: 12, lineHeight: 1.1, color: '#141B3E' }}
          >{t('From Enquiry to Delivery', 'من الاستفسار إلى التسليم')}</motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20, rotateX: 8 }} animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.14 }}
            style={{ fontSize: 15, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, maxWidth: 520, margin: '0 auto' }}
          >
            {t('From first contact to ongoing technical partnership — structured and transparent.', 'من أول تواصل إلى شراكة فنية مستمرة — بوضوح وتنظيم.')}
          </motion.p>
        </div>

        <div style={{ display: 'flex', gap: 0, position: 'relative', perspective: '1200px' }}>
          <div style={{
            position: 'absolute', top: 28, left: '10%', right: '10%', height: 1,
            background: 'linear-gradient(to right, transparent, rgba(46,127,208,0.25) 20%, rgba(46,127,208,0.25) 80%, transparent)',
            zIndex: 0,
          }} />

          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 28, rotateX: 14 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
                  textAlign: 'center', padding: '0 16px', position: 'relative', zIndex: 1,
                }}
              >
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: `${step.color}15`, border: `2px solid ${step.color}35`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20, flexShrink: 0,
                }}>
                  <Icon size={20} color={step.color} strokeWidth={1.8} />
                </div>

                <div style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 9, fontWeight: 900,
                  letterSpacing: '0.12em', color: step.color, marginBottom: 8,
                }}>{t('STEP', 'الخطوة')} {step.n}</div>

                <h3 style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 800,
                  marginBottom: 10, lineHeight: 1.35, letterSpacing: '-0.01em', color: '#141B3E',
                }}>{t(step.title, step.titleAr)}</h3>

                <p style={{ fontSize: 12, color: 'rgba(20,27,62,0.70)', lineHeight: 1.7 }}>{t(step.body, step.bodyAr)}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
          style={{ textAlign: 'center', marginTop: 56 }}
        >
          <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.70)', marginBottom: 16 }}>
            {t('Not sure which grade fits your process? Our technical team will review your specification.', 'لست متأكداً أي درجة تناسب عمليتك؟ سيراجع فريقنا الفني مواصفاتك.')}
          </p>
          <a href="mailto:info@blaubatch.com" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '12px 28px', background: '#2B8DD0',
            color: '#fff',
            borderRadius: 8, fontFamily: 'Inter, sans-serif', fontSize: 12,
            fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#2B8DD0'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#2B8DD0'; e.currentTarget.style.transform = 'none' }}
          >
            {t('Contact Technical Team', 'تواصل مع الفريق الفني')}
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #process { padding: 64px 20px !important; }
          #process > div > div:nth-child(2) { flex-direction: column !important; gap: 32px !important; }
          #process > div > div:nth-child(2) > div[style*="absolute"] { display: none !important; }
        }
      `}</style>
    </section>
  )
}
