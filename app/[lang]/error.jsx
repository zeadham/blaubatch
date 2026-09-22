'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#F7F8FC', padding: '48px 24px', textAlign: 'center',
    }}>
      <div style={{ maxWidth: 480 }}>
        <div style={{
          width: 64, height: 64, borderRadius: '50%',
          background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 24px', fontSize: 28,
        }}>⚠️</div>

        <div style={{
          fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: '#EF4444', marginBottom: 16,
        }}>Something went wrong</div>

        <h1 style={{
          fontFamily: 'Inter, sans-serif', fontSize: 'clamp(24px, 4vw, 36px)',
          fontWeight: 900, color: '#141B3E', letterSpacing: '-0.02em',
          lineHeight: 1.1, marginBottom: 16,
        }}>
          Unexpected Error
        </h1>

        <p style={{
          fontSize: 15, color: 'rgba(20,27,62,0.55)', lineHeight: 1.75,
          marginBottom: 36,
        }}>
          We encountered an unexpected error. Try refreshing the page, or contact us directly if the problem persists.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={reset}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 28px', background: '#2B8DD0', color: '#fff',
              borderRadius: 9, fontFamily: 'Inter, sans-serif', fontSize: 13,
              fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase',
              border: 'none', cursor: 'pointer', transition: 'all 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#2477b3'}
            onMouseLeave={e => e.currentTarget.style.background = '#2B8DD0'}
          >
            Try Again
          </button>
          <Link href="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '13px 28px', background: 'transparent', color: '#141B3E',
            borderRadius: 9, fontFamily: 'Inter, sans-serif', fontSize: 13,
            fontWeight: 700, border: '1px solid rgba(20,27,62,0.18)',
            textDecoration: 'none', transition: 'all 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(20,27,62,0.04)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            Go Home
          </Link>
        </div>

        <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(20,27,62,0.08)' }}>
          <p style={{ fontSize: 13, color: 'rgba(20,27,62,0.4)' }}>
            Need help?{' '}
            <a href="mailto:info@blaubatch.com" style={{ color: '#2B8DD0', fontWeight: 600 }}>
              info@blaubatch.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
