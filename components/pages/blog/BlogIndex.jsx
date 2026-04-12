'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'

const POSTS = [
  {
    slug: '/blog/company-story',
    category: 'Company',
    categoryColor: '#2B8DD0',
    title: 'From Gap in the Market to Factory Floor: The Blau Batch Story',
    excerpt: 'How a reliability gap in the MENA masterbatch market led to the founding of Egypt’s most consistent filler manufacturer.',
    date: 'April 2026',
    readTime: '4 min read',
  },
  {
    slug: '/blog/coraplast-partnership',
    category: 'News',
    categoryColor: '#D4840A',
    title: 'Blau Batch Becomes Authorized Coraplast Distributor in MENA & Europe',
    excerpt: 'Expanding our reach to provide a full-spectrum masterbatch solution including Black, White, Color, and Additives.',
    date: 'April 2026',
    readTime: '3 min read',
  },
  {
    slug: '/blog/fmpe-product-spotlight',
    category: 'Products',
    categoryColor: '#2B8DD0',
    title: 'PE Filler Masterbatch: What Sets the FMPE Series Apart',
    excerpt: 'Inside the engineering of our PE-based filler range, from LLDPE to LDPE carrier systems.',
    date: 'April 2026',
    readTime: '4 min read',
  },
  {
    slug: '/blog/fmpp-product-spotlight',
    category: 'Products',
    categoryColor: '#2B8DD0',
    title: 'PP Filler Masterbatch: Inside the FMPP Series',
    excerpt: 'Purpose-built filler for polypropylene applications, focusing on stiffness and high-temperature processing.',
    date: 'April 2026',
    readTime: '4 min read',
  },
  {
    slug: '/blog/masterbatch-range',
    category: 'Full Spectrum',
    categoryColor: '#2B8DD0',
    title: 'Beyond Filler: The Complete Masterbatch Range from Blau Batch',
    excerpt: 'Exploring our comprehensive portfolio of 40+ Black, White, and Color masterbatch grades.',
    date: 'April 2026',
    readTime: '5 min read',
  },
  {
    slug: '/blog/technical-guide',
    category: 'Technical',
    categoryColor: '#141B3E',
    title: 'CaCO₃ Loading: What 70%, 75%, and 80% Actually Mean for Your Process',
    excerpt: 'A deep dive into mineral loading, carrier resin selection, and its impact on your production line.',
    date: 'April 2026',
    readTime: '6 min read',
  },
  {
    slug: '/blog/cost-optimization',
    category: 'Industry',
    categoryColor: '#22C55E',
    title: 'How Filler Masterbatch Reduces Packaging Costs Without Reducing Quality',
    excerpt: 'The economics of CaCO₃ masterbatch and how to achieve 10-25% material cost reduction effortlessly.',
    date: 'April 2026',
    readTime: '5 min read',
  },
]

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
        bgGradient="linear-gradient(135deg, rgba(8,18,40,0.95) 0%, rgba(20,27,62,0.9) 60%, rgba(26,37,80,0.95) 100%)"
        cta={{
          primary: { label: 'Request a Quote', href: '/contact#quote-form' },
          secondary: { label: 'Technical Resources', href: '/resources' },
        }}
      />

      <section style={{ background: 'var(--bg)', padding: '72px 48px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {POSTS.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={post.slug} style={{ display: 'block', textDecoration: 'none' }}>
                  <div style={{
                    padding: '32px 36px',
                    background: '#fff',
                    border: `1px solid var(--line)`,
                    borderRadius: 20,
                    transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                    boxShadow: '0 10px 30px rgba(20, 27, 62, 0.02)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${post.categoryColor}44`; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(20, 27, 62, 0.06)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = `var(--line)`; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(20, 27, 62, 0.02)' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap', marginBottom: 16 }}>
                      <span style={{
                        fontFamily: 'Inter, sans-serif', fontSize: 9, fontWeight: 800,
                        letterSpacing: '0.12em', textTransform: 'uppercase',
                        color: post.categoryColor, border: `1px solid ${post.categoryColor}33`,
                        borderRadius: 4, padding: '3px 10px', background: `${post.categoryColor}08`,
                      }}>{post.category}</span>
                      <span style={{ fontSize: 12, color: 'rgba(20, 27, 62, 0.4)', fontFamily: 'Inter, sans-serif' }}>{post.date} · {post.readTime}</span>
                    </div>
 
                    <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--navy)', letterSpacing: '-0.025em', lineHeight: 1.25, marginBottom: 12 }}>
                      {post.title}
                    </h2>
 
                    <p style={{ fontSize: 14, color: 'rgba(20, 27, 62, 0.6)', lineHeight: 1.7, marginBottom: 20 }}>
                      {post.excerpt}
                    </p>
 
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: post.categoryColor, fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800 }}>
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
