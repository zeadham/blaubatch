// Sends a Google Analytics 4 event. Does nothing when GA hasn't loaded (server render, ad blockers).
export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', name, {
    page_path: window.location.pathname,
    language: /^\/ar(\/|$)/.test(window.location.pathname) ? 'ar' : 'en',
    ...params,
  })
}

// Google Ads conversion action "Submit lead form" listens for this event name.
const ADS_LEAD_CONVERSION = 'conversion_event_submit_lead_form'

// Call only after a form has actually been sent. Reports the lead to GA4 (its recommended
// generate_lead event) and to Google Ads as a conversion.
export function trackLead(formName, params = {}) {
  trackEvent('generate_lead', { form_name: formName, ...params })
  trackEvent(ADS_LEAD_CONVERSION, { form_name: formName })
}
