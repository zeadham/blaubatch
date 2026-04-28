import { cookies } from 'next/headers'

export async function POST(request) {
  // Auth check
  const cookieStore = await cookies()
  const session = cookieStore.get('bb_session')
  if (!session || session.value !== process.env.BB_PASSWORD) {
    return Response.json({ error: { message: 'Unauthorized' } }, { status: 401 })
  }

  try {
    const body = await request.text()
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
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
