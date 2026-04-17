'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import { ARTICLES } from '@/lib/blog-articles'

export default function BlogIndex() {
  return (
    <>
      <PageHero
        breadcrumb={{ current: 'Blog', parent: 'Resources' }}
        badge="KNOWLEDGE HUB"
        badgeColor="#2B8DD0"
        title="Masterbatch Insights &"
        titleAccent="Industry Knowledge"
        sub="Technical articles on filler masterbatch, sustainability in plastics, and manufacturing best practices from the Blau Batch team."
        split
        bgImage="/images/heroes/technical_blog.webp"
        cta={{
          primary: { label: 'Request a Quote', href: '/contact#quote-form' },
          secondary: { label: 'Technical Resources', href: '/resources' },
        }}
      />

      <section style={{ background: 'var(--bg)', padding: '72px 48px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {ARTICLES.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                  <div style={{
                    padding: '32px 36px',
                    background: '#fff',
                    border: '1px solid var(--line)',
                    borderRadius: 20,
                    transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                    boxShadow: '0 10px 30px rgba(20, 27, 62, 0.02)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${post.tagColor}44`; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(20, 27, 62, 0.06)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(20, 27, 62, 0.02)' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap', marginBottom: 16 }}>
                      <span style={{
                        fontFamily: 'Inter, sans-serif', fontSize: 9, fontWeight: 800,
                        letterSpacing: '0.12em', textTransform: 'uppercase',
                        color: post.tagColor, border: `1px solid ${post.tagColor}33`,
                        borderRadius: 4, padding: '3px 10px', background: `${post.tagColor}08`,
                      }}>{post.tag}</span>
                      <span style={{ fontSize: 12, color: 'rgba(20, 27, 62, 0.4)', fontFamily: 'Inter, sans-serif' }}>{post.date} · {post.readTime}</span>
                    </div>

                    <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--navy)', letterSpacing: '-0.025em', lineHeight: 1.25, marginBottom: 12 }}>
                      {post.title}
                    </h2>

                    <p style={{ fontSize: 14, color: 'rgba(20, 27, 62, 0.6)', lineHeight: 1.7, marginBottom: 20 }}>
                      {post.desc}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: post.tagColor, fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800 }}>
                      Read article <ArrowRight size={13} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`@media(max-width:700px){
        section { padding-left: 20px !important; padding-right: 20px !important; }
      }`}</style>
    </>
  )
}
