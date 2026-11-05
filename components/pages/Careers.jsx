'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Clock, Briefcase, ArrowUpRight, CheckCircle2, Factory, Layers, FlaskConical, TrendingUp, Mail } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import { T, useLocale } from '@/components/LocaleProvider'
import { trackEvent } from '@/lib/analytics'
import { JOBS, ODOO_JOBS_URL } from '@/lib/careers'

const GENERAL_APPLICATION_MAILTO = 'mailto:info@blaubatch.com?subject=Careers%20%E2%80%93%20General%20application'

const REASONS = [
  { icon: Factory, title: 'We make what we sell', desc: 'Filler Masterbatch is produced at our own plant in 6th of October, so engineering and sales work close to the line.' },
  { icon: Layers, title: 'The full masterbatch range', desc: 'Filler, white, black, colour and additive masterbatch, including the Coraplast range we distribute.' },
  { icon: FlaskConical, title: 'Real technical work', desc: 'Formulations, extrusion trials and customer problems: the work is hands-on from the first week.' },
  { icon: TrendingUp, title: 'Room to grow', desc: 'A growing team serving converters across Egypt, MENA and Europe, with responsibility that grows with you.' },
]

const STEPS = [
  { n: '01', title: 'Apply online', desc: 'Pick a role and submit your CV through our careers portal.' },
  { n: '02', title: 'We review', desc: 'Our team reads every application against the role requirements.' },
  { n: '03', title: 'Interview', desc: 'Shortlisted candidates meet the hiring manager for a technical conversation.' },
  { n: '04', title: 'Offer', desc: 'If it is a match on both sides, we make you an offer.' },
]

const sectionTag = {
  display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 800,
  letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2B8DD0',
  border: '1px solid rgba(43,141,208,0.3)', borderRadius: 4, padding: '5px 14px', marginBottom: 16,
}

const sectionTitle = {
  fontFamily: 'Inter, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 900,
  letterSpacing: '-0.02em', lineHeight: 1.1, color: '#141B3E',
}

function JobMeta({ icon: Icon, children }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(20,27,62,0.6)' }}>
      <Icon size={14} color="#2B8DD0" aria-hidden="true" />
      {children}
    </span>
  )
}

function JobCard({ job, index, inView }) {
  const { tr } = useLocale()
  return (
    <motion.article
      id={`job-${job.id}`}
      initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
      className="careers-job"
      style={{
        background: '#FFFFFF', border: '1px solid rgba(20,27,62,0.08)', borderInlineStart: '4px solid #2B8DD0',
        borderRadius: 14, padding: '32px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40,
      }}
    >
      <div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', background: '#23447A', padding: '4px 9px', borderRadius: 3 }}>
            <T>{job.department}</T>
          </span>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#2B8DD0', background: 'rgba(43,141,208,0.1)', padding: '4px 9px', borderRadius: 3 }}>
            <T>{job.experience}</T>
          </span>
        </div>
        <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 22, fontWeight: 800, letterSpacing: '-0.01em', lineHeight: 1.25, color: '#141B3E', marginBottom: 12 }}>
          <T>{job.title}</T>
        </h3>
        <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', marginBottom: 16 }}>
          <JobMeta icon={MapPin}><T>{job.location}</T></JobMeta>
          <JobMeta icon={Clock}><T>{job.type}</T></JobMeta>
        </div>
        <p style={{ fontSize: 15, color: 'rgba(20,27,62,0.7)', lineHeight: 1.75, marginBottom: 24 }}><T>{job.summary}</T></p>
        <a
          id={`apply-${job.id}`}
          href={job.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('job_apply_click', { job: job.id })}
          aria-label={`${tr('Apply now')}: ${tr(job.title)}`}
          className="careers-apply"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 22px',
            background: '#2B8DD0', color: '#fff', borderRadius: 8,
            fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 800, letterSpacing: '0.04em',
          }}
        >
          <T>Apply now</T> <ArrowUpRight size={15} className="flip-rtl" aria-hidden="true" />
        </a>
      </div>
      <div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(20,27,62,0.45)', marginBottom: 14 }}>
          <T>What you bring</T>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {job.requirements.map(req => (
            <li key={req} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: 'rgba(20,27,62,0.7)', lineHeight: 1.55 }}>
              <CheckCircle2 size={15} color="#2B8DD0" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
              <span><T>{req}</T></span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

export default function CareersPage() {
  const rolesRef = useRef(null)
  const whyRef = useRef(null)
  const rolesInView = useInView(rolesRef, { once: true, margin: '-60px' })
  const whyInView = useInView(whyRef, { once: true, margin: '-60px' })

  return (
    <>
      <PageHero
        split
        bgImage="/images/heroes/careers.webp"
        badgeColor="#23447A"
        breadcrumb={{ current: 'Careers' }}
        tag="Join Our Team"
        title="Build the future of"
        titleAccent="masterbatch with us"
        sub="We manufacture Filler Masterbatch in Egypt and distribute the full Coraplast range. We're looking for engineers and sales people who like solving real production problems."
        cta={{
          primary: { label: 'See open roles', href: '#open-roles' },
          secondary: { label: 'Send a general application', href: GENERAL_APPLICATION_MAILTO },
        }}
      />

      {/* Open roles */}
      <section id="open-roles" style={{ background: '#F7F8FC', padding: '88px 48px', scrollMarginTop: 88 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }} ref={rolesRef}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap', marginBottom: 40 }}>
            <div>
              <div style={sectionTag}><T>Open Roles</T></div>
              <h2 style={sectionTitle}><T>Current openings</T></h2>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700, color: '#23447A' }}>
              <Briefcase size={15} aria-hidden="true" />
              {JOBS.length} <T>positions</T>
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {JOBS.map((job, i) => <JobCard key={job.id} job={job} index={i} inView={rolesInView} />)}
          </div>

          <p style={{ marginTop: 24, fontSize: 13, color: 'rgba(20,27,62,0.55)' }}>
            <T>Applications are handled through our careers portal:</T>{' '}
            <a id="careers-portal-link" href={ODOO_JOBS_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#2B8DD0', fontWeight: 600 }}>blaubatch.odoo.com/jobs</a>
          </p>
        </div>
      </section>

      {/* Why join */}
      <section style={{ background: '#FFFFFF', padding: '88px 48px', borderTop: '1px solid rgba(20,27,62,0.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }} ref={whyRef}>
          <div style={sectionTag}><T>Why Blau Batch</T></div>
          <h2 style={{ ...sectionTitle, marginBottom: 40 }}><T>Why work with us</T></h2>
          <div className="careers-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {REASONS.map((r, i) => (
              <motion.div key={r.title}
                initial={{ opacity: 0, y: 20 }} animate={whyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.07 }}
                style={{ background: '#F7F8FC', border: '1px solid rgba(20,27,62,0.07)', borderRadius: 14, padding: 26 }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(43,141,208,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <r.icon size={20} color="#2B8DD0" aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 800, color: '#141B3E', marginBottom: 8 }}><T>{r.title}</T></h3>
                <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.62)', lineHeight: 1.7 }}><T>{r.desc}</T></p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring process */}
      <section style={{ background: '#F7F8FC', padding: '88px 48px', borderTop: '1px solid rgba(20,27,62,0.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={sectionTag}><T>How It Works</T></div>
          <h2 style={{ ...sectionTitle, marginBottom: 40 }}><T>Our hiring process</T></h2>
          <ol className="careers-grid-4" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {STEPS.map(s => (
              <li key={s.n} style={{ background: '#FFFFFF', border: '1px solid rgba(20,27,62,0.08)', borderTop: '3px solid #2B8DD0', borderRadius: 12, padding: 24 }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 800, color: '#2B8DD0', marginBottom: 10 }}>{s.n}</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 800, color: '#141B3E', marginBottom: 6 }}><T>{s.title}</T></h3>
                <p style={{ fontSize: 14, color: 'rgba(20,27,62,0.62)', lineHeight: 1.65 }}><T>{s.desc}</T></p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* General application */}
      <section style={{ background: '#FFFFFF', padding: '72px 48px', borderTop: '1px solid rgba(20,27,62,0.08)' }}>
        <div className="careers-cta" style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32, flexWrap: 'wrap', background: '#F7F8FC', border: '1px solid rgba(20,27,62,0.08)', borderInlineStart: '6px solid #2B8DD0', borderRadius: 14, padding: '36px 40px' }}>
          <div style={{ maxWidth: 640 }}>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 24, fontWeight: 800, color: '#141B3E', marginBottom: 8 }}><T>{"Don't see your role?"}</T></h2>
            <p style={{ fontSize: 15, color: 'rgba(20,27,62,0.65)', lineHeight: 1.7 }}><T>If you work in plastics, polymers or masterbatch and want to join us, send your CV and tell us what you do best. We keep strong profiles on file for future openings.</T></p>
          </div>
          <a id="careers-general-application" href={GENERAL_APPLICATION_MAILTO}
            onClick={() => trackEvent('email_click', { location: 'careers_general_application' })}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 24px', background: '#2B8DD0', color: '#fff', borderRadius: 8, fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 800, letterSpacing: '0.04em' }}>
            <Mail size={15} aria-hidden="true" /> <T>Email your CV</T>
          </a>
        </div>
      </section>

      <style>{`
        .careers-apply { transition: background 0.2s ease, transform 0.2s ease; }
        .careers-apply:hover { background: #23447A !important; transform: translateY(-1px); }
        .careers-apply:focus-visible, #careers-general-application:focus-visible { outline: 2px solid #2B8DD0; outline-offset: 2px; border-radius: 4px; }
        @media (max-width: 1000px) { .careers-grid-4 { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 760px) {
          .careers-job { grid-template-columns: 1fr !important; gap: 24px !important; padding: 24px !important; }
          .careers-grid-4 { grid-template-columns: 1fr !important; }
          .careers-cta { padding: 28px 24px !important; }
          #open-roles, section { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
    </>
  )
}
