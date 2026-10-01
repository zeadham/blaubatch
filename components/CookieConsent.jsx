'use client'

import { useState, useEffect } from 'react'
import { useLocale } from '@/components/LocaleProvider'
import { getConsent, setConsent, OPEN_COOKIE_SETTINGS_EVENT } from '@/lib/consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const { t, l } = useLocale()

  useEffect(() => {
    if (!getConsent()) setVisible(true)
    const reopen = () => setVisible(true)
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen)
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen)
  }, [])

  const accept = () => {
    setConsent('accepted')
    setVisible(false)
  }

  const decline = () => {
    setConsent('declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div role="dialog" aria-label={t('Cookie consent', 'إشعار ملفات تعريف الارتباط')} style={{
      position: 'fixed', bottom: 24, left: 24, right: 24,
      zIndex: 9999, maxWidth: 520, margin: '0 auto',
      background: '#FFFFFF',
      border: '1px solid #DCDCDC',
      borderRadius: 14,
      padding: '20px 24px',
      boxShadow: '0 4px 32px rgba(20,27,62,0.12)',
      display: 'flex', flexDirection: 'column', gap: 16,
    }}>
      <div>
        <div style={{
          fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 800,
          color: '#141B3E', marginBottom: 6,
        }}>
          {t('🍪 We use cookies', '🍪 نستخدم ملفات تعريف الارتباط')}
        </div>
        <p style={{
          fontSize: 12, color: 'rgba(20,27,62,0.6)', lineHeight: 1.7, margin: 0,
        }}>
          {t('We use essential cookies to keep the site working. If you accept, we also use Google Analytics cookies to understand how visitors use the site. We never use advertising cookies.', 'نستخدم ملفات تعريف الارتباط الضرورية لضمان عمل الموقع. وإذا وافقت، نستخدم أيضاً ملفات Google Analytics لفهم كيفية استخدام الزوار للموقع. لا نستخدم ملفات إعلانية مطلقاً.')}
          {' '}{t('See our', 'اطّلع على')}{' '}
          <a href={l('/privacy')} style={{ color: '#2B8DD0', fontWeight: 600 }}>{t('Privacy Policy', 'سياسة الخصوصية')}</a>
          {' '}{t('for details.', 'لمزيد من التفاصيل.')}
        </p>
      </div>

      <div style={{ display: 'flex', gap: 10 }}>
        <button
          id="cookie-accept"
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
          {t('Accept', 'موافق')}
        </button>
        <button
          id="cookie-decline"
          onClick={decline}
          style={{
            padding: '10px 16px', background: 'transparent', color: 'rgba(20,27,62,0.5)',
            border: '1px solid #DCDCDC', borderRadius: 8,
            fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 700,
            cursor: 'pointer', transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#141B3E'; e.currentTarget.style.borderColor = '#141B3E' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'rgba(20,27,62,0.5)'; e.currentTarget.style.borderColor = '#DCDCDC' }}
        >
          {t('Decline', 'رفض')}
        </button>
      </div>
    </div>
  )
}
