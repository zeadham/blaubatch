// The visitor's cookie choice, shared by the cookie banner, the footer link and Google Analytics.
// v2: the banner now asks about Google Analytics, so choices made on the old banner don't count.
const STORAGE_KEY = 'bb_cookie_consent_v2'

// Fired with { detail: 'accepted' | 'declined' } whenever the visitor makes a choice.
export const CONSENT_EVENT = 'bb:consent'
// Fired by the footer's "Cookie settings" link to show the banner again.
export const OPEN_COOKIE_SETTINGS_EVENT = 'bb:cookie-settings'

export function getConsent() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

export function setConsent(choice) {
  try { localStorage.setItem(STORAGE_KEY, choice) } catch {}
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: choice }))
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))
}
