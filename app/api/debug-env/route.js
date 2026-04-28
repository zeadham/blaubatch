// Temporary debug route — DELETE after fixing
export async function GET() {
  const key = process.env.ANTHROPIC_API_KEY || ''
  const pw  = process.env.BB_PASSWORD || ''
  return Response.json({
    ANTHROPIC_API_KEY: {
      set: key.length > 0,
      length: key.length,
      starts_with: key.slice(0, 10) || '(empty)',
      ends_with: key.slice(-4) || '(empty)',
    },
    BB_PASSWORD: {
      set: pw.length > 0,
      length: pw.length,
    },
  })
}
