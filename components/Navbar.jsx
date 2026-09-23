'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale } from '@/components/LocaleProvider'
import { alternatePath, isTranslatedRoute } from '@/lib/i18n'

const PRODUCTS = [
  { name: 'Filler Masterbatch (PE)', ar: 'ماستر باتش الحشو (PE)', sub: 'FMPE Series · 70–80% CaCO₃', subAr: 'سلسلة FMPE · 70–80% كربونات الكالسيوم', href: '/fmpe', badge: 'MANUFACTURED', badgeAr: 'تصنيع محلي' },
  { name: 'Filler Masterbatch (PP)', ar: 'ماستر باتش الحشو (PP)', sub: 'FMPP Series · 70–80% CaCO₃', subAr: 'سلسلة FMPP · 70–80% كربونات الكالسيوم', href: '/fmpp', badge: 'MANUFACTURED', badgeAr: 'تصنيع محلي' },
  { name: 'White Masterbatch', ar: 'ماستر باتش أبيض', sub: 'TiO₂-based, food-contact grades', subAr: 'أساسه TiO₂، درجات ملامسة الأغذية', href: '/white-masterbatch' },
  { name: 'Black Masterbatch', ar: 'ماستر باتش أسود', sub: 'UV-stable, pipe & cable grades', subAr: 'مقاوم للأشعة فوق البنفسجية، درجات للمواسير والكابلات', href: '/black-masterbatch' },
  { name: 'Colour Masterbatch', ar: 'ماستر باتش ملوّن', sub: 'RAL/Pantone, custom matching', subAr: 'مطابقة RAL/Pantone وألوان مخصصة', href: '/color-masterbatch' },
  { name: 'Additive Masterbatch', ar: 'ماستر باتش الإضافات', sub: 'UV, slip, antiblock, anti-static', subAr: 'مثبّت UV، منزلق، مانع التصاق، مضاد للكهرباء الساكنة', href: '/additive-masterbatch' },
]

const NAV_LINKS = [['About', '/about', 'من نحن'], ['Sustainability', '/sustainability', 'الاستدامة'], ['Distributors', '/distributors', 'الموزعون'], ['Resources', '/resources', 'المصادر'], ['Contact', '/contact', 'اتصل بنا']]

const INDUSTRIES = [
  { name: 'Packaging & Flexible Film', ar: 'التغليف والأفلام المرنة', href: '/industries/packaging' },
  { name: 'Pipes, Fittings & Profiles', ar: 'المواسير والوصلات والبروفايلات', href: '/industries/pipes' },
  { name: 'Agriculture', ar: 'الزراعة', href: '/industries/agriculture' },
  { name: 'Textiles & Fibre', ar: 'المنسوجات والألياف', href: '/industries/textiles' },
  { name: 'Wire & Cable', ar: 'الأسلاك والكابلات', href: '/industries/wire-cable' },
  { name: 'Automotive & Technical', ar: 'السيارات والاستخدامات الفنية', href: '/industries/automotive' },
  { name: 'Construction', ar: 'الإنشاءات', href: '/industries/construction' },
  { name: 'Consumer Goods', ar: 'السلع الاستهلاكية', href: '/industries/consumer-goods' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const dropdownTimeout = useRef(null)
  const { lang, isAr, t, l } = useLocale()
  const pathname = usePathname()
  const switchHref = alternatePath(lang, pathname || '/')
  const canSwitch = isAr || isTranslatedRoute(pathname || '/')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  function openDropdown(key) {
    clearTimeout(dropdownTimeout.current)
    setActiveDropdown(key)
  }

  function closeDropdown() {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  const navBg = scrolled ? 'rgba(255,255,255,0.92)' : 'transparent'
  const navBorder = scrolled ? '1px solid rgba(20,27,62,0.08)' : 'none'
  const linkColor = scrolled ? '#141B3E' : 'rgba(20,27,62,0.75)'

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        height: 88,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 48px',
        background: navBg,
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: navBorder,
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'visible',
      }}>
        {/* Logo */}
        <Link href={l('/')} style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0, overflow: 'visible' }}>
          <div style={{ width: 52, height: 52, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/logo-mark-navy.svg" alt={isAr ? 'بلاو باتش' : 'Blau Batch'} style={{ height: 46, width: 46, display: 'block' }} />
          </div>
          <span style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 900,
            fontSize: isAr ? 24 : 18, color: '#141B3E',
            letterSpacing: '0.05em', textTransform: 'uppercase', lineHeight: isAr ? 1.3 : 1,
          }}>{isAr ? 'بلاو باتش' : 'BLAU BATCH'}</span>
        </Link>

        {/* Desktop Links */}
        <div style={{
          position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center', gap: 2,
        }} className="nav-desktop">

          {/* Products — Mega Menu */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => openDropdown('products')}
            onMouseLeave={closeDropdown}
          >
            <button
              aria-haspopup="true"
              aria-expanded={activeDropdown === 'products'}
              onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                padding: '8px 14px', background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600,
                letterSpacing: '0.02em', textTransform: 'uppercase',
                color: linkColor, borderRadius: 6, transition: 'all 0.2s',
              }}
            >
              {t('Products', 'المنتجات')}
              <ChevronDown size={12} style={{
                opacity: 0.6,
                transform: activeDropdown === 'products' ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s',
              }} />
            </button>

            <AnimatePresence>
              {activeDropdown === 'products' && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  onMouseEnter={() => openDropdown('products')}
                  onMouseLeave={closeDropdown}
                  style={{
                    position: 'absolute', top: 'calc(100% + 8px)',
                    ...(isAr
                      ? { right: 0 }
                      : { left: '50%', transform: 'translateX(-50%)' }),
                    width: 620,
                    background: '#fff',
                    border: '1px solid rgba(20,27,62,0.1)',
                    borderRadius: 14, padding: 20,
                    boxShadow: '0 24px 60px rgba(0,0,0,0.1)',
                  }}
                >
                  {/* 2-col grid */}
                  <div style={{
                    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6,
                    marginBottom: 16,
                  }}>
                    {PRODUCTS.map(p => (
                      <Link
                        key={p.name}
                        href={l(p.href)}
                        onClick={() => setActiveDropdown(null)}
                        style={{
                          display: 'flex', flexDirection: 'column', gap: 3,
                          padding: '12px 14px', borderRadius: 10,
                          transition: 'background 0.15s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(20,27,62,0.04)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{
                            fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700,
                            color: '#141B3E',
                          }}>{t(p.name, p.ar)}</span>
                          {p.badge && (
                            <span style={{
                              fontSize: 9, fontWeight: 800, letterSpacing: '0.08em',
                              textTransform: 'uppercase', color: '#D4840A',
                              border: '1px solid rgba(212,132,10,0.4)',
                              borderRadius: 4, padding: '2px 7px', lineHeight: 1,
                            }}>{t(p.badge, p.badgeAr)}</span>
                          )}
                        </div>
                        <span style={{ fontSize: 12, color: 'rgba(20,27,62,0.5)', lineHeight: 1.4 }}>{t(p.sub, p.subAr)}</span>
                      </Link>
                    ))}
                  </div>
                  {/* Footer link */}
                  <div style={{
                    paddingTop: 14, borderTop: '1px solid rgba(20,27,62,0.08)',
                  }}>
                    <Link
                      href={l('/compare')}
                      onClick={() => setActiveDropdown(null)}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        fontSize: 13, fontWeight: 600, color: '#2B8DD0',
                        transition: 'gap 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.gap = '10px'}
                      onMouseLeave={e => e.currentTarget.style.gap = '6px'}
                    >
                      {t('Compare All Products', 'قارن جميع المنتجات')} <ArrowRight size={14} className="flip-rtl" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries — Simple Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => openDropdown('industries')}
            onMouseLeave={closeDropdown}
          >
            <button
              aria-haspopup="true"
              aria-expanded={activeDropdown === 'industries'}
              onClick={() => setActiveDropdown(activeDropdown === 'industries' ? null : 'industries')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                padding: '8px 14px', background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600,
                letterSpacing: '0.02em', textTransform: 'uppercase',
                color: linkColor, borderRadius: 6, transition: 'all 0.2s',
              }}
            >
              {t('Industries', 'الصناعات')}
              <ChevronDown size={12} style={{
                opacity: 0.6,
                transform: activeDropdown === 'industries' ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s',
              }} />
            </button>

            <AnimatePresence>
              {activeDropdown === 'industries' && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  onMouseEnter={() => openDropdown('industries')}
                  onMouseLeave={closeDropdown}
                  style={{
                    position: 'absolute', top: 'calc(100% + 8px)', insetInlineStart: 0,
                    minWidth: 270,
                    background: '#fff',
                    border: '1px solid rgba(20,27,62,0.1)',
                    borderRadius: 14, padding: 8,
                    boxShadow: '0 24px 60px rgba(0,0,0,0.1)',
                  }}
                >
                  {INDUSTRIES.map(ind => (
                    <Link
                      key={ind.name}
                      href={l(ind.href)}
                      onClick={() => setActiveDropdown(null)}
                      style={{
                        display: 'block', padding: '10px 14px', borderRadius: 8,
                        fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 500,
                        color: 'rgba(20,27,62,0.8)', transition: 'all 0.15s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(20,27,62,0.04)'; e.currentTarget.style.color = '#2B8DD0' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(20,27,62,0.8)' }}
                    >{t(ind.name, ind.ar)}</Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Plain links */}
          {NAV_LINKS.map(([label, href, ar]) => (
            <Link key={label} href={l(href)} style={{
              padding: '8px 14px', fontFamily: 'Inter, sans-serif', fontSize: 12,
              fontWeight: 600, letterSpacing: '0.02em', textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              color: linkColor, borderRadius: 6, transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#141B3E'; e.currentTarget.style.background = 'rgba(20,27,62,0.05)' }}
            onMouseLeave={e => { e.currentTarget.style.color = linkColor; e.currentTarget.style.background = 'transparent' }}
            >{t(label, ar)}</Link>
          ))}
        </div>

        {/* Right: CTA + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <a href={l('/contact#quote-form')} className="nav-cta" style={{
            padding: '8px 20px', background: '#2B8DD0', color: '#fff',
            borderRadius: 20, fontFamily: 'Inter, sans-serif', fontSize: 12,
            fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase',
            transition: 'all 0.2s', whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(43,141,208,0.35)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
          >{t('Request Quote', 'اطلب عرض سعر')}</a>

          {canSwitch && <Link href={switchHref} hrefLang={isAr ? 'en' : 'ar'} className="nav-lang" aria-label={isAr ? 'Switch to English' : 'التبديل إلى العربية'} style={{
            padding: '7px 14px', border: '1px solid rgba(20,27,62,0.18)', borderRadius: 20,
            fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 700, color: linkColor,
            whiteSpace: 'nowrap', transition: 'all 0.2s',
          }}>{isAr ? 'English' : 'العربية'}</Link>}

          <button
            onClick={() => setMobileOpen(o => !o)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#141B3E', padding: 4, display: 'none' }}
            className="nav-hamburger"
            aria-label={mobileOpen ? t('Close navigation menu', 'إغلاق القائمة') : t('Open navigation menu', 'فتح القائمة')}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', top: 88, left: 0, right: 0, bottom: 0, zIndex: 499,
              background: '#fff', overflowY: 'auto',
            }}
          >
            <div style={{ padding: '16px 24px 40px', display: 'flex', flexDirection: 'column', gap: 2 }}>
              {/* Products group */}
              <div style={{ borderBottom: '1px solid rgba(20,27,62,0.07)' }}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === 'products' ? null : 'products')}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    width: '100%', padding: '16px 0',
                    fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 700,
                    color: '#141B3E', background: 'none', border: 'none', cursor: 'pointer',
                  }}
                >
                  {t('Products', 'المنتجات')}
                  <ChevronDown size={16} style={{
                    transform: mobileExpanded === 'products' ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s', opacity: 0.5,
                  }} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === 'products' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ overflow: 'hidden', paddingBottom: 12 }}
                    >
                      {PRODUCTS.map(p => (
                        <Link key={p.name} href={l(p.href)} onClick={() => setMobileOpen(false)}
                          style={{
                            display: 'flex', alignItems: 'center', gap: 8,
                            padding: '10px 16px', borderRadius: 8,
                            fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 600,
                            color: 'rgba(20,27,62,0.8)', transition: 'background 0.15s',
                          }}
                          onMouseEnter={e => e.currentTarget.style.background = 'rgba(20,27,62,0.04)'}
                          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        >
                          {t(p.name, p.ar)}
                          {p.badge && (
                            <span style={{
                              fontSize: 8, fontWeight: 800, padding: '2px 6px', borderRadius: 3,
                              background: '#D4840A', color: '#fff', letterSpacing: '0.06em',
                            }}>{t(p.badge, p.badgeAr)}</span>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries group */}
              <div style={{ borderBottom: '1px solid rgba(20,27,62,0.07)' }}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === 'industries' ? null : 'industries')}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    width: '100%', padding: '16px 0',
                    fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 700,
                    color: '#141B3E', background: 'none', border: 'none', cursor: 'pointer',
                  }}
                >
                  {t('Industries', 'الصناعات')}
                  <ChevronDown size={16} style={{
                    transform: mobileExpanded === 'industries' ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s', opacity: 0.5,
                  }} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === 'industries' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ overflow: 'hidden', paddingBottom: 12 }}
                    >
                      {INDUSTRIES.map(ind => (
                        <Link key={ind.name} href={l(ind.href)} onClick={() => setMobileOpen(false)}
                          style={{
                            display: 'block', padding: '10px 16px', borderRadius: 8,
                            fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 600,
                            color: 'rgba(20,27,62,0.8)', transition: 'background 0.15s',
                          }}
                          onMouseEnter={e => e.currentTarget.style.background = 'rgba(20,27,62,0.04)'}
                          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        >{t(ind.name, ind.ar)}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Plain links */}
              {NAV_LINKS.map(([label, href, ar]) => (
                <div key={label} style={{ borderBottom: '1px solid rgba(20,27,62,0.07)' }}>
                  <Link href={l(href)} onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'block', padding: '16px 0',
                      fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 700,
                      color: '#141B3E', transition: 'color 0.15s',
                    }}
                  >{t(label, ar)}</Link>
                </div>
              ))}

              <div style={{ marginTop: 24 }}>
                <a href={l('/contact#quote-form')} onClick={() => setMobileOpen(false)} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '14px', background: '#2B8DD0', color: '#fff',
                  borderRadius: 12, fontFamily: 'Inter, sans-serif', fontSize: 15,
                  fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase',
                }}>{t('Request Quote', 'اطلب عرض سعر')}</a>
                {canSwitch && <Link href={switchHref} onClick={() => setMobileOpen(false)} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 12,
                  padding: '12px', border: '1px solid rgba(20,27,62,0.15)', borderRadius: 12,
                  fontSize: 15, fontWeight: 700, color: '#141B3E',
                }}>{isAr ? 'English' : 'العربية'}</Link>}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1280px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-cta { display: none !important; }
          .nav-lang { display: none !important; }
          nav { padding: 0 20px !important; }
        }
      `}</style>
    </>
  )
}
