'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, ArrowRight } from 'lucide-react'
import { useLocale } from '@/components/LocaleProvider'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

function TextContent({ breadcrumb, badge, badgeColor, tag, title, titleAccent, sub, cta, split }) {
  const { t, l, tr } = useLocale()
  return (
    <>
      {/* Breadcrumb */}
      {breadcrumb && (
        <motion.div {...fade(0.04)} style={{
          display: 'flex', alignItems: 'center', gap: 6,
          fontSize: 12, fontFamily: 'Inter, sans-serif', fontWeight: 600,
          letterSpacing: '0.04em', textTransform: 'uppercase',
          marginBottom: 32,
          ...(split
            ? { color: 'rgba(20,27,62,0.4)' }
            : { color: 'rgba(255,255,255,0.75)', textShadow: '0 1px 4px rgba(0,0,0,0.4)' }
          ),
        }}>
          <Link href={l('/')} style={{ color: 'inherit', transition: 'color 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.color = split ? '#141B3E' : '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'inherit'}
          >{t('Home', 'الرئيسية')}</Link>
          <ChevronRight size={11} className="flip-rtl" />
          {breadcrumb.parent && (
            <><Link href={l(breadcrumb.parentHref || '#')} style={{ color: 'inherit', transition: 'color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.color = split ? '#141B3E' : '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'inherit'}
            >{tr(breadcrumb.parent)}</Link><ChevronRight size={11} className="flip-rtl" /></>
          )}
          <span style={{ color: split ? '#141B3E' : '#fff' }}>{tr(breadcrumb.current)}</span>
        </motion.div>
      )}

      {/* Badge */}
      {badge && (
        <motion.div {...fade(0.06)} style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: badgeColor, border: `1px solid ${badgeColor}50`,
          borderRadius: 20, padding: '5px 14px', marginBottom: 22,
          background: `${badgeColor}12`, alignSelf: 'flex-start',
        }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: badgeColor, display: 'inline-block' }} />
          {tr(badge)}
        </motion.div>
      )}

      {/* Tag */}
      {tag && (
        <motion.div {...fade(0.06)} style={{
          display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 10,
          fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase',
          color: '#2B8DD0', border: '1px solid rgba(43,141,208,0.4)',
          borderRadius: 6, padding: '4px 14px', marginBottom: 22,
          background: 'rgba(43,141,208,0.12)', alignSelf: 'flex-start',
        }}>{tr(tag)}</motion.div>
      )}

      {/* Title */}
      <motion.h1 {...fade(0.10)} style={{
        fontFamily: 'Inter, sans-serif', fontWeight: 900,
        fontSize: 'clamp(36px, 4.5vw, 64px)', lineHeight: 1.05,
        letterSpacing: '-0.03em', marginBottom: 18,
        color: '#141B3E',
      }}>
        {tr(title)}
        {titleAccent && (
          <><br /><span style={{ color: badgeColor }}>{tr(titleAccent)}</span></>
        )}
      </motion.h1>

      {/* Sub */}
      {sub && (
        <motion.p {...fade(0.17)} style={{
          fontFamily: 'Open Sans, sans-serif',
          fontSize: 18, color: 'rgba(20,27,62,0.65)', lineHeight: 1.8,
          maxWidth: 520, fontWeight: 400,
        }}>{tr(sub)}</motion.p>
      )}

      {/* CTA buttons */}
      {cta && (
        <motion.div {...fade(0.24)} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 36 }}>
          <a href={l(cta.primary.href)} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '13px 28px', background: '#2B8DD0', color: '#fff',
            borderRadius: 10, fontFamily: 'Inter, sans-serif', fontSize: 13,
            fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(43,141,208,0.35)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
          >
            {tr(cta.primary.label)} <ArrowRight size={14} className="flip-rtl" />
          </a>
          {cta.secondary && (
            <a href={l(cta.secondary.href)} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 26px', color: '#141B3E',
              borderRadius: 10, fontFamily: 'Inter, sans-serif', fontSize: 13,
              fontWeight: 700, letterSpacing: '0.04em', transition: 'all 0.2s',
              background: split ? 'rgba(20,27,62,0.06)' : 'rgba(255,255,255,0.18)',
              border: split ? '1px solid rgba(20,27,62,0.18)' : '1px solid rgba(255,255,255,0.5)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = split ? 'rgba(20,27,62,0.12)' : 'rgba(255,255,255,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.background = split ? 'rgba(20,27,62,0.06)' : 'rgba(255,255,255,0.18)' }}
            >
              {tr(cta.secondary.label)}
            </a>
          )}
        </motion.div>
      )}
    </>
  )
}

export default function PageHero({
  breadcrumb, badge, badgeColor = '#D4840A', tag,
  title, titleAccent, sub, cta,
  bgImage = '/images/heroes/home.webp',
  split = false,
  textPercent = 40,
  mirrorInRtl = true,
}) {
  const imagePercent = 100 - textPercent
  const { isAr } = useLocale()
  /* ── SPLIT layout ── */
  if (split) {
    return (
      <section data-pagehero="" style={{
        minHeight: '65vh',
        marginTop: 88,
        display: 'flex',
        flexDirection: 'row',
      }}>
        {/* LEFT — white text panel */}
        <div style={{
          flex: `0 0 ${textPercent}%`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingBlock: 64, paddingInlineStart: 72, paddingInlineEnd: 48,
          background: '#ffffff',
          zIndex: 1,
        }}>
          <TextContent {...{ breadcrumb, badge, badgeColor, tag, title, titleAccent, sub, cta, split }} />
        </div>

        {/* RIGHT — image panel */}
        <div style={{ flex: `0 0 ${imagePercent}%`, position: 'relative', overflow: 'hidden' }}>
          <Image
            src={bgImage}
            alt=""
            fill
            priority
            sizes={`${imagePercent}vw`}
            style={{ objectFit: 'cover', objectPosition: 'center center', transform: isAr && mirrorInRtl ? 'scaleX(-1)' : undefined }}
          />
          {/* Fade to white on left edge */}
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(to ${isAr ? 'left' : 'right'}, #ffffff 0%, rgba(255,255,255,0.4) 20%, transparent 45%)`,
            pointerEvents: 'none',
          }} />
        </div>

        <style>{`
          @media (max-width: 768px) {
            section[data-pagehero] { flex-direction: column !important; margin-top: 78px !important; }
            section[data-pagehero] > div:first-child { flex: none !important; padding: 40px 24px !important; }
            section[data-pagehero] > div:last-child { flex: none !important; height: 260px !important; }
          }
        `}</style>
      </section>
    )
  }

  /* ── OVERLAY layout (default) ── */
  return (
    <section data-pagehero="" style={{
      position: 'relative', overflow: 'hidden',
      minHeight: '65vh',
      marginTop: 68,
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Full-bleed background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("${bgImage}")`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        transform: isAr && mirrorInRtl ? 'scaleX(-1)' : undefined,
      }} />

      {/* Spacer — pushes content to bottom */}
      <div style={{ flex: 1 }} />

      {/* Content — pinned to bottom start */}
      <div style={{
        position: 'relative', zIndex: 1,
        paddingInline: 96, paddingBottom: 52,
        maxWidth: 760,
      }}>
        <TextContent {...{ breadcrumb, badge, badgeColor, tag, title, titleAccent, sub, cta, split }} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          section[data-pagehero] { min-height: 60svh !important; margin-top: 78px !important; }
          section[data-pagehero] > div:nth-child(3) { padding: 0 20px 40px !important; }
        }
      `}</style>
    </section>
  )
}
