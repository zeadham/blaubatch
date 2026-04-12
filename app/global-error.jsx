'use client'

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#F7F8FC' }}>
        <div style={{
          minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '48px 24px', textAlign: 'center',
        }}>
          <div style={{ maxWidth: 480 }}>
            <div style={{ fontSize: 48, marginBottom: 24 }}>⚠️</div>

            <div style={{
              fontSize: 10, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#EF4444', marginBottom: 16,
            }}>Critical Error</div>

            <h1 style={{
              fontSize: 32, fontWeight: 900, color: '#141B3E',
              letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 16,
            }}>
              Something went wrong
            </h1>

            <p style={{ fontSize: 15, color: 'rgba(20,27,62,0.55)', lineHeight: 1.75, marginBottom: 32 }}>
              An unexpected error occurred. Please refresh the page or contact us at{' '}
              <a href="mailto:info@blaubatch.com" style={{ color: '#2B8DD0' }}>info@blaubatch.com</a>.
            </p>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={reset}
                style={{
                  padding: '13px 28px', background: '#2B8DD0', color: '#fff',
                  border: 'none', borderRadius: 9, fontSize: 13, fontWeight: 800,
                  letterSpacing: '0.07em', textTransform: 'uppercase', cursor: 'pointer',
                }}
              >
                Try Again
              </button>
              <a
                href="/"
                style={{
                  padding: '13px 28px', background: 'transparent', color: '#141B3E',
                  border: '1px solid rgba(20,27,62,0.18)', borderRadius: 9,
                  fontSize: 13, fontWeight: 700, textDecoration: 'none',
                }}
              >
                Go Home
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
