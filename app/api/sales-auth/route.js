import { cookies } from 'next/headers'

const COOKIE = 'bb_session'
const MAX_AGE = 60 * 60 * 24 * 7 // 7 days

export async function POST(request) {
  const form = await request.formData()
  const password = form.get('password') || ''

  if (password === process.env.BB_PASSWORD) {
    const cookieStore = await cookies()
    cookieStore.set(COOKIE, process.env.BB_PASSWORD, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: MAX_AGE,
      path: '/',
    })
    return Response.redirect(new URL('/tools/sales', request.url), 302)
  }

  return Response.redirect(new URL('/tools/login?error=1', request.url), 302)
}

export async function DELETE(request) {
  const cookieStore = await cookies()
  cookieStore.delete(COOKIE)
  return Response.redirect(new URL('/tools/login', request.url), 302)
}
