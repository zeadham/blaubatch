'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const PRODUCTS = [
  { name: 'Filler Masterbatch (PE)', sub: 'FMPE Series · 70–80% CaCO₃', href: '/fmpe', badge: 'MANUFACTURED' },
  { name: 'Filler Masterbatch (PP)', sub: 'FMPP Series · 70–80% CaCO₃', href: '/fmpp', badge: 'MANUFACTURED' },
  { name: 'White Masterbatch', sub: 'TiO₂-based, food-contact grades', href: '/white-masterbatch' },
  { name: 'Black Masterbatch', sub: 'UV-stable, pipe & cable grades', href: '/black-masterbatch' },
  { name: 'Additive Masterbatch', sub: 'UV, slip, antiblock, anti-static', href: '/additive-masterbatch' },
  { name: 'Colour Masterbatch', sub: 'RAL/Pantone, custom matching', href: '/color-masterbatch' },
]

const INDUSTRIES = [
  { name: 'Packaging & Flexible Film', href: '/industries/packaging' },
  { name: 'Pipes, Fittings & Profiles', href: '/industries/pipes' },
  { name: 'Agriculture', href: '/industries/agriculture' },
  { name: 'Textiles & Fibre', href: '/industries/textiles' },
  { name: 'Wire & Cable', href: '/industries/wire-cable' },
  { name: 'Automotive & Technical', href: '/industries/automotive' },
  { name: 'Construction', href: '/industries/construction' },
  { name: 'Consumer Goods', href: '/industries/consumer-goods' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const dropdownTimeout = useRef(null)

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
        height: 68,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 96px',
        background: navBg,
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: navBorder,
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <img src="/logo-mark-navy.png" alt="Blau Batch" style={{ height: 40, width: 'auto' }} />
          <span style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 800,
            fontSize: 14, color: '#141B3E',
            letterSpacing: '0.05em', textTransform: 'uppercase', lineHeight: 1,
          }}>BLAU BATCH</span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="nav-desktop">

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
                fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600,
                letterSpacing: '0.02em', textTransform: 'uppercase',
                color: linkColor, borderRadius: 6, transition: 'all 0.2s',
              }}
            >
              Products
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
                    left: '50%', transform: 'translateX(-50%)',
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
                        href={p.href}
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
                          }}>{p.name}</span>
                          {p.badge && (
                            <span style={{
                              fontSize: 9, fontWeight: 800, letterSpacing: '0.08em',
                              textTransform: 'uppercase', color: '#D4840A',
                              border: '1px solid rgba(212,132,10,0.4)',
                              borderRadius: 4, padding: '2px 7px', lineHeight: 1,
                            }}>{p.badge}</span>
                          )}
                        </div>
                        <span style={{ fontSize: 12, color: 'rgba(20,27,62,0.5)', lineHeight: 1.4 }}>{p.sub}</span>
                      </Link>
                    ))}
                  </div>
                  {/* Footer link */}
                  <div style={{
                    paddingTop: 14, borderTop: '1px solid rgba(20,27,62,0.08)',
                  }}>
                    <Link
                      href="/compare"
                      onClick={() => setActiveDropdown(null)}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        fontSize: 13, fontWeight: 600, color: '#2B8DD0',
                        transition: 'gap 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.gap = '10px'}
                      onMouseLeave={e => e.currentTarget.style.gap = '6px'}
                    >
                      Compare All Products <ArrowRight size={14} />
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
                fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600,
                letterSpacing: '0.02em', textTransform: 'uppercase',
                color: linkColor, borderRadius: 6, transition: 'all 0.2s',
              }}
            >
              Industries
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
                    position: 'absolute', top: 'calc(100% + 8px)', left: 0,
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
                      href={ind.href}
                      onClick={() => setActiveDropdown(null)}
                      style={{
                        display: 'block', padding: '10px 14px', borderRadius: 8,
                        fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 500,
                        color: 'rgba(20,27,62,0.8)', transition: 'all 0.15s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(20,27,62,0.04)'; e.currentTarget.style.color = '#2B8DD0' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(20,27,62,0.8)' }}
                    >{ind.name}</Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Plain links */}
          {[['About', '/about'], ['Sustainability', '/sustainability'], ['Distributors', '/distributors'], ['Resources', '/resources'], ['Contact', '/contact']].map(([label, href]) => (
            <Link key={label} href={href} style={{
              padding: '8px 14px', fontFamily: 'Inter, sans-serif', fontSize: 12,
              fontWeight: 600, letterSpacing: '0.02em', textTransform: 'uppercase',
              color: linkColor, borderRadius: 6, transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#141B3E'; e.currentTarget.style.background = 'rgba(20,27,62,0.05)' }}
            onMouseLeave={e => { e.currentTarget.style.color = linkColor; e.currentTarget.style.background = 'transparent' }}
            >{label}</Link>
          ))}
        </div>

        {/* Right: CTA + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <a href="/contact#quote-form" style={{
            padding: '8px 20px', background: '#2B8DD0', color: '#fff',
            borderRadius: 20, fontFamily: 'Inter, sans-serif', fontSize: 11,
            fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase',
            transition: 'all 0.2s', whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(43,141,208,0.35)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
          >Request Quote</a>

          <button
            onClick={() => setMobileOpen(o => !o)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#141B3E', padding: 4, display: 'none' }}
            className="nav-hamburger"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
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
              position: 'fixed', top: 68, left: 0, right: 0, bottom: 0, zIndex: 499,
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
                  Products
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
                        <Link key={p.name} href={p.href} onClick={() => setMobileOpen(false)}
                          style={{
                            display: 'flex', alignItems: 'center', gap: 8,
                            padding: '10px 16px', borderRadius: 8,
                            fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 600,
                            color: 'rgba(20,27,62,0.8)', transition: 'background 0.15s',
                          }}
                          onMouseEnter={e => e.currentTarget.style.background = 'rgba(20,27,62,0.04)'}
                          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        >
                          {p.name}
                          {p.badge && (
                            <span style={{
                              fontSize: 8, fontWeight: 800, padding: '2px 6px', borderRadius: 3,
                              background: '#D4840A', color: '#fff', letterSpacing: '0.06em',
                            }}>{p.badge}</span>
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
                  Industries
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
                        <Link key={ind.name} href={ind.href} onClick={() => setMobileOpen(false)}
                          style={{
                            display: 'block', padding: '10px 16px', borderRadius: 8,
                            fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 600,
                            color: 'rgba(20,27,62,0.8)', transition: 'background 0.15s',
                          }}
                          onMouseEnter={e => e.currentTarget.style.background = 'rgba(20,27,62,0.04)'}
                          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        >{ind.name}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Plain links */}
              {[['About', '/about'], ['Sustainability', '/sustainability'], ['Distributors', '/distributors'], ['Resources', '/resources'], ['Contact', '/contact']].map(([label, href]) => (
                <div key={label} style={{ borderBottom: '1px solid rgba(20,27,62,0.07)' }}>
                  <Link href={href} onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'block', padding: '16px 0',
                      fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 700,
                      color: '#141B3E', transition: 'color 0.15s',
                    }}
                  >{label}</Link>
                </div>
              ))}

              <div style={{ marginTop: 24 }}>
                <a href="/contact#quote-form" onClick={() => setMobileOpen(false)} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '14px', background: '#2B8DD0', color: '#fff',
                  borderRadius: 12, fontFamily: 'Inter, sans-serif', fontSize: 15,
                  fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase',
                }}>Request Quote</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
          nav { padding: 0 20px !important; }
        }
      `}</style>
    </>
  )
}
