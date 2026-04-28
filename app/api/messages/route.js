import { cookies } from 'next/headers'

export async function POST(request) {
  // Auth check
  const cookieStore = await cookies()
  const session = cookieStore.get('bb_session')
  if (!session || session.value !== process.env.BB_PASSWORD) {
    return Response.json({ error: { message: 'Unauthorized' } }, { status: 401 })
  }

  const apiKey = (process.env.ANTHROPIC_API_KEY || '').trim()
  if (!apiKey) {
    return Response.json({ error: { message: 'Server misconfiguration: ANTHROPIC_API_KEY is not set. Add it in Vercel → Settings → Environment Variables.' } }, { status: 500 })
  }

  try {
    const body = await request.text()
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body,
    })
    const text = await upstream.text()
    return new Response(text, {
      status: upstream.status,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return Response.json({ error: { message: err.message } }, { status: 502 })
  }
}
