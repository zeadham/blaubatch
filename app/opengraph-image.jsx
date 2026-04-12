import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Blau Batch — Full-Spectrum Masterbatch Solutions'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(160deg, #0E1530 0%, #141B3E 60%, #1a2550 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top accent line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 4,
          background: '#2B8DD0', display: 'flex',
        }} />

        {/* Tag */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          marginBottom: 28,
        }}>
          <div style={{
            fontSize: 12, fontWeight: 800, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#2B8DD0',
            border: '1px solid rgba(43,141,208,0.4)',
            borderRadius: 4, padding: '5px 14px', display: 'flex',
          }}>
            Egypt · MENA · Europe
          </div>
        </div>

        {/* Headline */}
        <div style={{
          fontSize: 64, fontWeight: 900, color: '#FFFFFF',
          lineHeight: 1.05, letterSpacing: '-0.03em',
          marginBottom: 24, display: 'flex', flexDirection: 'column',
        }}>
          <span>Full-Spectrum</span>
          <span style={{ color: '#2B8DD0' }}>Masterbatch Solutions</span>
        </div>

        {/* Sub */}
        <div style={{
          fontSize: 20, color: 'rgba(255,255,255,0.55)',
          lineHeight: 1.6, maxWidth: 640, marginBottom: 48, display: 'flex',
        }}>
          Manufacturer of Filler Masterbatch · Authorised Coraplast Distributor
        </div>

        {/* Bottom row */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 28,
        }}>
          <div style={{
            fontSize: 22, fontWeight: 800, color: '#FFFFFF',
            letterSpacing: '0.04em', textTransform: 'uppercase', display: 'flex',
          }}>
            BLAU BATCH
          </div>
          <div style={{
            fontSize: 14, color: 'rgba(255,255,255,0.4)', display: 'flex',
          }}>
            blaubatch.com
          </div>
        </div>

        {/* Decorative circle */}
        <div style={{
          position: 'absolute', right: -80, top: '50%',
          width: 480, height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(43,141,208,0.15) 0%, transparent 70%)',
          display: 'flex',
          transform: 'translateY(-50%)',
        }} />
      </div>
    ),
    { ...size }
  )
}
