// Simple in-memory rate limiter
// For production scale, replace with Vercel KV or Redis
const store = new Map()

/**
 * @param {string} key  - unique identifier (e.g. IP address)
 * @param {number} limit - max requests per window
 * @param {number} windowMs - window size in milliseconds
 * @returns {{ allowed: boolean, remaining: number, resetAt: number }}
 */
export function rateLimit(key, limit = 5, windowMs = 60_000) {
  const now = Date.now()
  const entry = store.get(key)

  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs })
    return { allowed: true, remaining: limit - 1, resetAt: now + windowMs }
  }

  if (entry.count >= limit) {
    return { allowed: false, remaining: 0, resetAt: entry.resetAt }
  }

  entry.count++
  return { allowed: true, remaining: limit - entry.count, resetAt: entry.resetAt }
}

// Prune old entries every 5 minutes to prevent memory leak
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now()
    for (const [key, val] of store) {
      if (now > val.resetAt) store.delete(key)
    }
  }, 300_000)
}
