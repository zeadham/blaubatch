export default function sitemap() {
  const base = 'https://blaubatch.com'
  const now = new Date().toISOString()

  const routes = [
    { url: base, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${base}/contact`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/fmpe`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/fmpp`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/white-masterbatch`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/black-masterbatch`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/color-masterbatch`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/additive-masterbatch`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/industries/packaging`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/industries/pipes`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/industries/agriculture`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/industries/textiles`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/industries/wire-cable`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/industries/automotive`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/resources`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/sustainability`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/distributors`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/blog/what-is-filler-masterbatch`, priority: 0.7, changeFrequency: 'yearly' },
    { url: `${base}/blog/caco3-loading-comparison`, priority: 0.7, changeFrequency: 'yearly' },
    { url: `${base}/blog/pe-vs-pp-carrier-systems`, priority: 0.7, changeFrequency: 'yearly' },
    { url: `${base}/blog/tio2-masterbatch-opacity`, priority: 0.7, changeFrequency: 'yearly' },
    { url: `${base}/blog/uv-stabilisation-agricultural-film`, priority: 0.7, changeFrequency: 'yearly' },
    { url: `${base}/blog/reading-masterbatch-coa`, priority: 0.7, changeFrequency: 'yearly' },
    { url: `${base}/privacy`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${base}/terms`, priority: 0.3, changeFrequency: 'yearly' },
  ]

  return routes.map(r => ({
    url: r.url,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
