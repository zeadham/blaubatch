'use client'

import { motion } from 'framer-motion'
import PageHero from '@/components/shared/PageHero'
import ShareButtons from '@/components/shared/ShareButtons'
import useSEO from '@/hooks/useSEO'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function BlogPostLayout({
  title, titleAccent, sub, badge, badgeColor, date, readTime,
  heroImage, seo, children
}) {
  useSEO(seo)

  return (
    <>
      <PageHero
        breadcrumb={{ current: title, parent: 'Blog', parentHref: '/blog' }}
        badge={badge}
        badgeColor={badgeColor}
        title={title}
        titleAccent={titleAccent}
        sub={sub}
        bgImage={heroImage}
        bgOverlay={false}
      />

      <article style={{ background: 'var(--bg)', padding: '100px 48px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          {/* Metadata Bar */}
          <motion.div {...fadeUp(0.05)} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 12,
            marginBottom: 48, paddingBottom: 24,
            borderBottom: '1px solid var(--line)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 13, color: 'var(--navy)', fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>{date}</span>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--line)' }} />
              <span style={{ fontSize: 13, color: 'rgba(20,27,62,0.45)', fontWeight: 500, fontFamily: 'Open Sans, sans-serif' }}>{readTime}</span>
            </div>
            <ShareButtons title={title} />
          </motion.div>

          {/* Content Body */}
          <motion.div {...fadeUp(0.12)} className="blog-content">
            {children}
          </motion.div>

          {/* Bottom share bar */}
          <div style={{
            marginTop: 64, paddingTop: 32, borderTop: '1px solid var(--line)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
          }}>
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 800, color: '#141B3E', marginBottom: 4 }}>Found this useful?</div>
              <div style={{ fontSize: 14, color: 'rgba(20,27,62,0.5)' }}>Share it with your team or network.</div>
            </div>
            <ShareButtons title={title} />
          </div>
        </div>
      </article>



      <style>{`
        .blog-content h2 { 
          font-size: 28px; font-weight: 800; color: var(--navy); 
          margin: 60px 0 24px; letter-spacing: -0.02em; line-height: 1.25;
        }
        .blog-content h4 { 
          font-size: 18px; font-weight: 700; color: var(--navy); 
          margin: 40px 0 16px; 
        }
        .blog-content p { 
          font-size: 16px; color: var(--text); line-height: 1.85; 
          margin-bottom: 28px; 
        }
        .blog-content ul { 
          margin: 24px 0 40px; padding-left: 20px; 
        }
        .blog-content li { 
          font-size: 16px; color: var(--text); line-height: 1.85; 
          margin-bottom: 12px; 
        }
        .blog-content strong { color: var(--navy); font-weight: 700; }
        
        @media(max-width:700px){
          article { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </>
  )
}
