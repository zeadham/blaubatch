'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'bb_cookie_consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) setVisible(true)
    } catch {
      // localStorage not available
    }
  }, [])

  const accept = () => {
    try { localStorage.setItem(STORAGE_KEY, 'accepted') } catch {}
    setVisible(false)
  }

  const decline = () => {
    try { localStorage.setItem(STORAGE_KEY, 'declined') } catch {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div role="dialog" aria-label="Cookie consent" style={{
      position: 'fixed', bottom: 24, left: 24, right: 24,
      zIndex: 9999, maxWidth: 520, margin: '0 auto',
      background: '#141B3E',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 14,
      padding: '20px 24px',
      boxShadow: '0 8px 48px rgba(0,0,0,0.35)',
      display: 'flex', flexDirection: 'column', gap: 16,
    }}>
      <div>
        <div style={{
          fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 800,
          color: '#FFFFFF', marginBottom: 6,
        }}>
          🍪 We use cookies
        </div>
        <p style={{
          fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0,
        }}>
          We use essential cookies to keep the site working. We do not use advertising or tracking cookies.
          See our{' '}
          <a href="/privacy" style={{ color: '#2B8DD0', fontWeight: 600 }}>Privacy Policy</a>
          {' '}for details.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 10 }}>
        <button
          onClick={accept}
          style={{
            flex: 1, padding: '10px 16px', background: '#2B8DD0', color: '#fff',
            border: 'none', borderRadius: 8, fontFamily: 'Inter, sans-serif',
            fontSize: 12, fontWeight: 800, letterSpacing: '0.06em',
            textTransform: 'uppercase', cursor: 'pointer', transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#2477b3'}
          onMouseLeave={e => e.currentTarget.style.background = '#2B8DD0'}
        >
          Accept
        </button>
        <button
          onClick={decline}
          style={{
            padding: '10px 16px', background: 'transparent', color: 'rgba(255,255,255,0.5)',
            border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8,
            fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 700,
            cursor: 'pointer', transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}
        >
          Decline
        </button>
      </div>
    </div>
  )
}
