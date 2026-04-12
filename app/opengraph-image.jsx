import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import path from 'path'

export const runtime = 'nodejs'
export const alt = 'Blau Batch — Full-Spectrum Masterbatch Solutions'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const logoData = await readFile(
    path.join(process.cwd(), 'public', 'logo-mark-navy.png')
  )
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(160deg, #0E1530 0%, #141B3E 60%, #1a2550 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Top accent line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 4,
          background: '#2B8DD0', display: 'flex',
        }} />

        {/* Left: text content */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '72px 64px',
          flex: 1,
        }}>
          {/* Tag */}
          <div style={{
            fontSize: 11, fontWeight: 800, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#2B8DD0',
            border: '1px solid rgba(43,141,208,0.4)',
            borderRadius: 4, padding: '5px 14px',
            display: 'flex', marginBottom: 28, alignSelf: 'flex-start',
          }}>
            Egypt · MENA · Europe
          </div>

          {/* Headline */}
          <div style={{
            fontSize: 58, fontWeight: 900, color: '#FFFFFF',
            lineHeight: 1.05, letterSpacing: '-0.03em',
            marginBottom: 20, display: 'flex', flexDirection: 'column',
          }}>
            <span>Full-Spectrum</span>
            <span style={{ color: '#2B8DD0' }}>Masterbatch</span>
          </div>

          {/* Sub */}
          <div style={{
            fontSize: 17, color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.6, marginBottom: 48, display: 'flex',
          }}>
            Manufacturer · Coraplast Distributor
          </div>

          {/* Bottom row */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 16,
            borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24,
          }}>
            <div style={{
              fontSize: 18, fontWeight: 800, color: '#FFFFFF',
              letterSpacing: '0.06em', textTransform: 'uppercase', display: 'flex',
            }}>
              BLAU BATCH
            </div>
            <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.2)', display: 'flex' }} />
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', display: 'flex' }}>
              blaubatch.com
            </div>
          </div>
        </div>

        {/* Right: logo mark */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 380, height: '100%', flexShrink: 0,
          position: 'relative',
        }}>
          {/* Glow behind logo */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(circle at center, rgba(43,141,208,0.2) 0%, transparent 70%)',
            display: 'flex',
          }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            width={260}
            height={280}
            style={{ objectFit: 'contain', position: 'relative' }}
            alt=""
          />
        </div>
      </div>
    ),
    { ...size }
  )
}
