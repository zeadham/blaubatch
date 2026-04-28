// Temporary debug route — DELETE after fixing
export async function GET() {
  const key     = process.env.ANTHROPIC_API_KEY || ''
  const trimmed = key.trim()
  const pw      = process.env.BB_PASSWORD || ''

  // Test the key live against Anthropic
  let anthropic_response = null
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': trimmed,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 5,
        messages: [{ role: 'user', content: 'hi' }],
      }),
    })
    const data = await r.json()
    anthropic_response = { status: r.status, error: data?.error?.message || null }
  } catch (e) {
    anthropic_response = { status: 'fetch_failed', error: e.message }
  }

  return Response.json({
    ANTHROPIC_API_KEY: {
      raw_length: key.length,
      trimmed_length: trimmed.length,
      has_newline: key.includes('\n'),
      has_carriage_return: key.includes('\r'),
      starts_with: trimmed.slice(0, 14),
      ends_with: trimmed.slice(-6),
    },
    BB_PASSWORD: { set: pw.length > 0, length: pw.length },
    anthropic_live_test: anthropic_response,
  })
}
