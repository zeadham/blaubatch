import { createHash, timingSafeEqual } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

// Hidden, password-protected page for the Afro Plast booth visualiser.
// Only the SHA-256 of the password lives in source so the repo never holds it in plain text.
// Set BOOTH_PASSWORD_HASH in the host's env to change the password without a code edit.
const PASSWORD_HASH =
  process.env.BOOTH_PASSWORD_HASH ||
  'b3c5c6a0748f6b8226a83ace777b43dfc45cdaddbf6b3f62103e96484582eaed'

const COOKIE = 'bb_booth'
const MAX_AGE = 60 * 60 * 24 * 7 // 7 days
const VISUALISER_FILE = path.join(process.cwd(), 'private', 'booth-visualizer.html')

const sha256 = (value) => createHash('sha256').update(value).digest('hex')
const sessionToken = () => sha256(`${PASSWORD_HASH}:booth-session`)

function safeEqual(a, b) {
  const left = Buffer.from(a)
  const right = Buffer.from(b)
  return left.length === right.length && timingSafeEqual(left, right)
}

const privateHeaders = {
  'Content-Type': 'text/html; charset=utf-8',
  'Cache-Control': 'private, no-store',
  'X-Robots-Tag': 'noindex, nofollow',
}

function loginPage(hasError) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title>Booth Studio | BlauBatch</title>
  <link rel="icon" href="/favicon.svg">
  <style>
    :root {
      --navy: #0b1f3a;
      --blue: #1d4ed8;
      --ink: #0f172a;
      --muted: #64748b;
      --line: #e2e8f0;
      --danger: #b91c1c;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      padding: 16px;
      background: var(--navy);
      font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      color: var(--ink);
    }
    .card {
      width: 100%;
      max-width: 380px;
      background: #fff;
      border-radius: 16px;
      padding: 32px 28px;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
    }
    .logo { height: 28px; display: block; margin-bottom: 24px; }
    h1 { font-size: 20px; margin: 0 0 4px; }
    p { margin: 0 0 24px; color: var(--muted); font-size: 14px; }
    label { display: block; font-size: 13px; font-weight: 600; margin-bottom: 6px; }
    input {
      width: 100%;
      padding: 12px 14px;
      font: inherit;
      border: 1px solid var(--line);
      border-radius: 10px;
      outline: none;
    }
    input:focus { border-color: var(--blue); box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.15); }
    .error { color: var(--danger); font-size: 13px; margin: 8px 0 0; }
    button {
      width: 100%;
      margin-top: 20px;
      padding: 12px;
      font: inherit;
      font-weight: 600;
      color: #fff;
      background: var(--blue);
      border: 0;
      border-radius: 10px;
      cursor: pointer;
    }
    button:hover { background: #1e40af; }
  </style>
</head>
<body>
  <main class="card">
    <img class="logo" src="/logo-horizontal-navy.svg" alt="BlauBatch">
    <h1>Booth Studio</h1>
    <p>This page is private. Enter the password to continue.</p>
    <form id="booth-login-form" method="post" action="/booth">
      <label for="booth-password">Password</label>
      <input id="booth-password" name="password" type="password" autocomplete="current-password" required autofocus>
      ${hasError ? '<p class="error" id="booth-login-error" role="alert">Incorrect password. Try again.</p>' : ''}
      <button id="booth-login-submit" type="submit">Open visualiser</button>
    </form>
  </main>
</body>
</html>`
}

export async function GET(request) {
  const cookie = request.cookies.get(COOKIE)?.value || ''

  if (!safeEqual(cookie, sessionToken())) {
    const hasError = request.nextUrl.searchParams.has('error')
    return new Response(loginPage(hasError), { status: 401, headers: privateHeaders })
  }

  const html = await readFile(VISUALISER_FILE, 'utf8')
  return new Response(html, { headers: privateHeaders })
}

export async function POST(request) {
  const form = await request.formData()
  const password = String(form.get('password') || '')
  const isValid = safeEqual(sha256(password), PASSWORD_HASH)

  const target = new URL(isValid ? '/booth' : '/booth?error=1', request.url)
  const response = Response.redirect(target, 303)

  if (!isValid) return response

  const headers = new Headers(response.headers)
  headers.append(
    'Set-Cookie',
    `${COOKIE}=${sessionToken()}; Path=/booth; Max-Age=${MAX_AGE}; HttpOnly; Secure; SameSite=Lax`,
  )
  return new Response(null, { status: 303, headers })
}
