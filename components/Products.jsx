'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowRight, FlaskConical } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from '@/components/LocaleProvider'

const PRODUCTS = [
  {
    id: 'fmpe',
    seriesAr: 'سلسلة FMPE',
    nameAr: 'ماستر باتش الحشو (PE)',
    descAr: 'ماستر باتش حشو أساسه كربونات الكالسيوم (CaCO₃) على حامل PE لأفلام النفخ والبثق والحقن. يخفّض تكلفة المواد مع الحفاظ على الخواص الميكانيكية.',
    series: 'FMPE Series',
    name: 'Filler Masterbatch (PE)',
    desc: 'CaCO₃-based filler in PE carrier for blown film, extrusion, and injection moulding. Reduces material costs while maintaining mechanical properties.',
    specs: ['70% · 75% · 80% CaCO₃', 'LDPE · LLDPE · HDPE', 'Blown Film · Cast Film'],
    badge: 'MANUFACTURED',
    image: '/images/product_cards/filler masterbatch PE.png',
    href: '/fmpe',
    sampleProduct: 'FMPE Series — PE Filler Masterbatch',
  },
  {
    id: 'fmpp',
    seriesAr: 'سلسلة FMPP',
    nameAr: 'ماستر باتش الحشو (PP)',
    descAr: 'ماستر باتش حشو أساسه CaCO₃ على حامل PP للحقن والتشكيل الحراري والرافيا. اقتصادي مع تشتّت متجانس.',
    series: 'FMPP Series',
    name: 'Filler Masterbatch (PP)',
    desc: 'CaCO₃-based filler in PP carrier for injection moulding, thermoforming, and raffia. Cost-effective with consistent dispersion.',
    specs: ['70% · 75% · 80% CaCO₃', 'Homo PP · Co-PP', 'Injection · Thermoforming'],
    badge: 'MANUFACTURED',
    image: '/images/product_cards/FMPP.png',
    href: '/fmpp',
    sampleProduct: 'FMPP Series — PP Filler Masterbatch',
  },
  {
    id: 'white',
    seriesAr: 'سلسلة WMB',
    nameAr: 'ماستر باتش أبيض',
    descAr: 'مركّزات بيضاء أساسها TiO₂. عتامة عالية ودرجات متعددة تشمل خيارات مطابقة لملامسة الأغذية.',
    series: 'WMB Series',
    name: 'White Masterbatch',
    desc: 'TiO₂-based white concentrates. High opacity, multiple grades including food-contact compliant options.',
    specs: ['PE & PP carriers', 'Food-contact grades', 'High-whiteness'],
    badge: 'DISTRIBUTED',
    image: '/images/product_cards/wmb.png',
    href: '/white-masterbatch',
    sampleProduct: 'White Masterbatch',
  },
  {
    id: 'black',
    seriesAr: 'سلسلة BMB',
    nameAr: 'ماستر باتش أسود',
    descAr: 'مركّزات أسود الكربون مع درجات مقاومة للأشعة فوق البنفسجية للمواسير والأفلام الزراعية وعزل الكابلات.',
    series: 'BMB Series',
    name: 'Black Masterbatch',
    desc: 'Carbon black concentrates with UV-stable grades for pipes, agricultural film, and cable jacketing.',
    specs: ['UV-stable grades', 'Pipe · Cable · Film', 'PE & PP carriers'],
    badge: 'DISTRIBUTED',
    image: '/images/product_cards/blackmasterbatch.png',
    href: '/black-masterbatch',
    sampleProduct: 'Black Masterbatch',
  },
  {
    id: 'colour',
    seriesAr: 'سلسلة CMB',
    nameAr: 'ماستر باتش ملوّن',
    descAr: 'مطابقة لونية شاملة — RAL وPantone وتطوير ألوان مخصصة على حوامل PE وPP.',
    series: 'CMB Series',
    name: 'Colour Masterbatch',
    desc: 'Full-spectrum colour matching — RAL, Pantone, and custom development in PE and PP carriers.',
    specs: ['RAL · Pantone matching', 'Custom development', 'Food-contact grades'],
    badge: 'DISTRIBUTED',
    image: '/images/product_cards/cmb.png',
    href: '/color-masterbatch',
    sampleProduct: 'Colour Masterbatch',
  },
  {
    id: 'additive',
    seriesAr: 'سلسلة AMB',
    nameAr: 'ماستر باتش الإضافات',
    descAr: 'مركّزات إضافات وظيفية — مثبّتات UV، ومواد منزلقة، ومانعة للالتصاق، ومضادة للكهرباء الساكنة، ومساعدات معالجة.',
    series: 'AMB Series',
    name: 'Additive Masterbatch',
    desc: 'Functional additive concentrates — UV stabilisers, slip agents, antiblock, antistatic, and processing aids.',
    specs: ['UV · Slip · Antiblock', 'Anti-static · Processing aids', 'PE & PP carriers'],
    badge: 'DISTRIBUTED',
    image: '/images/product_cards/Additives.png',
    href: '/additive-masterbatch',
    sampleProduct: 'Additive Masterbatch',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30, rotateX: 14 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

function ProductCard({ p, i }) {
  const isManufactured = p.badge === 'MANUFACTURED'
  const router = useRouter()
  const { t, l } = useLocale()
  const cardRef = useRef(null)

  function handleMouseMove(e) {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const rx = -((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * 6
    const ry = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 8
    el.style.transition = 'box-shadow 0.3s ease'
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`
    el.style.boxShadow = '0 20px 60px rgba(20,27,62,0.14)'
  }

  function handleMouseLeave() {
    const el = cardRef.current
    if (!el) return
    el.style.transition = 'transform 0.45s ease, box-shadow 0.3s ease'
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)'
    el.style.boxShadow = '0 2px 12px rgba(20,27,62,0.04)'
  }

  return (
    <Link href={l(p.href)} style={{ display: 'block', textDecoration: 'none', height: '100%' }}>
      <div style={{ perspective: '900px', height: '100%' }}>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={i}
          style={{ height: '100%' }}
        >
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              background: '#fff',
              border: '1px solid rgba(20,27,62,0.08)',
              borderRadius: 16,
              overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(20,27,62,0.04)',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
              transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)',
              transition: 'transform 0.45s ease, box-shadow 0.3s ease',
              willChange: 'transform',
              height: '100%',
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
                alt={t(p.name, p.nameAr)}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, transparent 40%, rgba(20,27,62,0.5))',
                pointerEvents: 'none',
              }} />
              <span style={{
                position: 'absolute', top: 14, insetInlineEnd: 14,
                fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 800,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '6px 12px', borderRadius: 20, lineHeight: 1,
                color: '#fff',
                border: `1px solid ${isManufactured ? '#D4840A' : '#2B8DD0'}`,
                background: isManufactured ? '#D4840A' : '#2B8DD0',
              }}>{p.badge === 'MANUFACTURED' ? t('MANUFACTURED', 'تصنيع محلي') : t('DISTRIBUTED', 'موزّع')}</span>
            </div>

            {/* Card Body */}
            <div style={{
              padding: '22px 22px 24px',
              display: 'flex', flexDirection: 'column', gap: 10, flex: 1,
            }}>
              <span style={{
                fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0',
              }}>{t(p.series, p.seriesAr)}</span>

              <h3 style={{
                fontFamily: 'Inter, sans-serif', fontSize: 20, fontWeight: 800,
                color: '#141B3E', letterSpacing: '-0.02em', lineHeight: 1.2,
              }}>{t(p.name, p.nameAr)}</h3>

              <p style={{
                fontSize: 16, color: 'rgba(20,27,62,0.65)', lineHeight: 1.65, flex: 1,
              }}>{t(p.desc, p.descAr)}</p>

              <div style={{
                display: 'flex', alignItems: 'center', gap: 14,
                marginTop: 8, paddingTop: 14,
                borderTop: '1px solid rgba(20,27,62,0.07)',
              }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 700,
                  color: '#2B8DD0',
                }}>
                  {t('Learn More', 'اعرف المزيد')} <ArrowRight size={14} className="flip-rtl" />
                </span>
                <button
                  onClick={e => { e.preventDefault(); e.stopPropagation(); router.push(`${l('/contact')}?product=${encodeURIComponent(p.sampleProduct)}`) }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600,
                    color: 'rgba(20,27,62,0.45)', transition: 'color 0.2s',
                    background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#141B3E'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(20,27,62,0.45)'}
                >
                  <FlaskConical size={14} />
                  {t('Request Sample', 'اطلب عيّنة')}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Link>
  )
}

export default function Products() {
  const { t } = useLocale()
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section id="products" style={{ background: '#F7F8FC', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div ref={headRef} style={{ marginBottom: 56, perspective: '1000px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16, rotateX: 10 }} animate={headInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.55 }}
            style={{
              display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 12,
              fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0',
              border: '1px solid rgba(43,141,208,0.3)', borderRadius: 4, padding: '5px 14px', marginBottom: 16,
            }}
          >{t('Product Portfolio', 'محفظة المنتجات')}</motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20, rotateX: 10 }} animate={headInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.07 }}
            style={{
              fontFamily: 'Inter, sans-serif', fontSize: 'clamp(28px, 3vw, 44px)',
              fontWeight: 900, letterSpacing: '-0.025em', marginBottom: 14, lineHeight: 1.1, color: '#141B3E',
            }}
          >{t('Complete Masterbatch Portfolio', 'مجموعة الماستر باتش الكاملة')}</motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20, rotateX: 8 }} animate={headInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.14 }}
            style={{ fontSize: 16, color: 'rgba(20,27,62,0.6)', lineHeight: 1.8, maxWidth: 560 }}
          >
            {t('One supplier relationship covers your complete masterbatch requirement — from in-house manufactured Filler to the full Coraplast distributed range.', 'علاقة توريد واحدة تغطي كل احتياجاتك من الماستر باتش — من ماستر باتش الحشو المصنَّع محلياً إلى مجموعة Coraplast الكاملة.')}
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
