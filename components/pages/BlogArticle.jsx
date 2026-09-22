'use client'

import Link from '@/components/LocalizedLink'
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react'
import { ARTICLES } from '@/lib/blog-articles'
import ShareButtons from '@/components/shared/ShareButtons'
import { T } from '@/components/LocaleProvider'

function renderBlock(block, i) {
  switch (block.type) {
    case 'intro':
      return (
        <p key={i} style={{
          fontSize: 17, color: 'rgba(20,27,62,0.7)', lineHeight: 1.9,
          marginBottom: 32, borderInlineStart: '3px solid #2B8DD0', paddingInlineStart: 20,
          fontStyle: 'italic',
        }}><T>{block.text}</T></p>
      )
    case 'h2':
      return (
        <h2 key={i} style={{
          fontFamily: 'Inter, sans-serif', fontSize: 'clamp(18px, 2.5vw, 24px)',
          fontWeight: 800, color: '#141B3E', letterSpacing: '-0.02em',
          marginTop: 44, marginBottom: 16, lineHeight: 1.2,
        }}><T>{block.text}</T></h2>
      )
    case 'p':
      return (
        <p key={i} style={{
          fontSize: 15, color: 'rgba(20,27,62,0.65)', lineHeight: 1.85,
          marginBottom: 20,
        }}><T>{block.text}</T></p>
      )
    case 'formula':
      return (
        <div key={i} style={{
          background: 'rgba(43,141,208,0.06)', border: '1px solid rgba(43,141,208,0.2)',
          borderRadius: 8, padding: '16px 20px', margin: '20px 0',
          fontFamily: 'monospace', fontSize: 14, color: '#141B3E', fontWeight: 600,
        }}><T>{block.text}</T></div>
      )
    case 'table':
      return (
        <div key={i} style={{ overflowX: 'auto', margin: '24px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr>
                {block.headers.map(h => (
                  <th key={h} style={{
                    padding: '10px 14px', background: '#141B3E', color: '#fff',
                    fontFamily: 'Inter, sans-serif', fontWeight: 700, textAlign: 'start',
                    fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}><T>{h}</T></th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} style={{ background: ri % 2 === 0 ? '#fff' : '#F7F8FC' }}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{
                      padding: '10px 14px', color: ci === 0 ? '#141B3E' : 'rgba(20,27,62,0.65)',
                      fontWeight: ci === 0 ? 600 : 400,
                      borderBottom: '1px solid rgba(20,27,62,0.07)',
                    }}><T>{cell}</T></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    default:
      return null
  }
}

export default function BlogArticle({ article }) {
  const otherArticles = ARTICLES.filter(a => a.slug !== article.slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(160deg, #0E1530 0%, #141B3E 60%, #1a2550 100%)',
        padding: '80px 48px 64px',
      }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Link href="/resources" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 700,
            color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
            letterSpacing: '0.04em', marginBottom: 32, transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
          >
            <ArrowLeft size={14} className="flip-rtl" /><T> Back to Resources</T>
          </Link>

          <div style={{
            display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 9,
            fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: article.tagColor, border: `1px solid ${article.tagBorder}`,
            borderRadius: 4, padding: '4px 10px', marginBottom: 20,
          }}><T>{article.tag}</T></div>

          <h1 style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 900,
            fontSize: 'clamp(24px, 3.5vw, 44px)', lineHeight: 1.1,
            letterSpacing: '-0.03em', color: '#FFFFFF', marginBottom: 24,
          }}><T>{article.title}</T></h1>

          <p style={{
            fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7,
            marginBottom: 32, maxWidth: 640,
          }}><T>{article.desc}</T></p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
                <Calendar size={13} />
                <T>{article.date}</T>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
                <Clock size={13} />
                <T>{article.readTime}</T>
              </div>
            </div>
            <ShareButtons title={article.title} dark />
          </div>
        </div>
      </section>

      {/* Article body */}
      <section style={{ background: '#FFFFFF', padding: '64px 48px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          {article.content.map((block, i) => renderBlock(block, i))}

          {/* Share */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 12,
            marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(20,27,62,0.08)',
          }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600, color: 'rgba(20,27,62,0.5)' }}>
              <T>Found this useful? Share it with your team.</T>
            </span>
            <ShareButtons title={article.title} />
          </div>

          {/* CTA */}
          <div style={{
            marginTop: 56, padding: '32px', background: 'rgba(43,141,208,0.06)',
            border: '1px solid rgba(43,141,208,0.2)', borderRadius: 12,
          }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 800, color: '#141B3E', marginBottom: 8 }}>
              <T>Have questions about your application?</T>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.6)', lineHeight: 1.7, marginBottom: 20 }}>
              <T>Our technical team can recommend the right grade and dosage for your specific production requirements — usually within 24 hours.</T>
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/contact#quote-form" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 24px', background: '#2B8DD0', color: '#fff',
                borderRadius: 8, fontFamily: 'Inter, sans-serif', fontSize: 12,
                fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase',
                textDecoration: 'none', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#2477b3'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#2B8DD0'; e.currentTarget.style.transform = 'none' }}
              >
                <T>Request a Quote </T><ArrowRight size={13} className="flip-rtl" />
              </Link>
              <a href="mailto:info@blaubatch.com?subject=Technical Enquiry" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 24px', background: 'transparent', color: '#2B8DD0',
                borderRadius: 8, fontFamily: 'Inter, sans-serif', fontSize: 12,
                fontWeight: 700, border: '1px solid rgba(43,141,208,0.3)',
                textDecoration: 'none', transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(43,141,208,0.06)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <T>Email our Technical Team</T>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {otherArticles.length > 0 && (
        <section style={{ background: '#F7F8FC', padding: '64px 48px', borderTop: '1px solid rgba(20,27,62,0.08)' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#D4840A', marginBottom: 8 }}><T>More Articles</T></div>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 24, fontWeight: 900, color: '#141B3E', marginBottom: 32, letterSpacing: '-0.02em' }}><T>Continue Reading</T></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {otherArticles.map(a => (
                <Link key={a.slug} href={`/blog/${a.slug}`} style={{
                  background: '#fff', border: '1px solid rgba(20,27,62,0.08)',
                  borderRadius: 12, padding: '20px', display: 'flex',
                  flexDirection: 'column', gap: 10, textDecoration: 'none',
                  transition: 'all 0.2s', borderTop: `3px solid ${a.tagBorder}`,
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(20,27,62,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
                >
                  <div style={{
                    fontFamily: 'Inter, sans-serif', fontSize: 9, fontWeight: 800,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: a.tagColor,
                  }}><T>{a.tag}</T></div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700, color: '#141B3E', lineHeight: 1.4 }}><T>{a.title}</T></div>
                  <div style={{ fontSize: 11, color: '#2B8DD0', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4, marginTop: 'auto' }}>
                    <T>Read article </T><ArrowRight size={11} className="flip-rtl" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`@media(max-width:768px){ section { padding-left: 20px !important; padding-right: 20px !important; } section:last-of-type > div > div:last-child { grid-template-columns: 1fr !important; } }`}</style>
    </>
  )
}
