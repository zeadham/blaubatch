// Sends a Google Analytics 4 event. Does nothing when GA hasn't loaded (server render, ad blockers).
export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', name, {
    page_path: window.location.pathname,
    language: document.documentElement.lang || 'en',
    ...params,
  })
}

// GA4's recommended event for a completed enquiry form.
export function trackLead(formName, params = {}) {
  trackEvent('generate_lead', { form_name: formName, ...params })
}
