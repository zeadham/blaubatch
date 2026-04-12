import nodemailer from 'nodemailer'
import { rateLimit } from '@/lib/rate-limit'
import { headers } from 'next/headers'

const RECIPIENTS = 'adham.zahran@blaubatch.com, zeadham@gmail.com'

function buildHtml(d) {
  const docList = d.documents.map(doc =>
    `<li style="padding:6px 0;border-bottom:1px solid #f0f0f0;font-size:13px;color:#333;">${doc}</li>`
  ).join('')

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f6fa;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fa;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#141b3e;padding:28px 32px;border-radius:10px 10px 0 0;">
            <div style="font-size:10px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;color:#4AAAE0;margin-bottom:10px;">BLAU BATCH · WEBSITE FORM</div>
            <div style="font-size:22px;font-weight:900;color:#fff;margin-bottom:4px;">Document Request</div>
            <div style="font-size:14px;color:rgba(255,255,255,0.55);">${d.documents.length} document${d.documents.length !== 1 ? 's' : ''} requested · ${d.company || d.name || 'New Lead'}</div>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#fff;border-radius:0 0 10px 10px;padding:24px 32px;">

            <div style="font-size:11px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#2E7FD0;margin-bottom:12px;">Requested Documents</div>
            <ul style="margin:0 0 24px;padding:0;list-style:none;border-top:1px solid #f0f0f0;">
              ${docList}
            </ul>

            <div style="font-size:11px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#2E7FD0;margin-bottom:12px;">Contact Information</div>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:8px 0;color:#666;font-size:13px;width:38%;">Name</td>
                <td style="padding:8px 0;color:#111;font-size:13px;font-weight:700;">${d.name || '—'}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#666;font-size:13px;">Company</td>
                <td style="padding:8px 0;color:#111;font-size:13px;">${d.company || '—'}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#666;font-size:13px;">Email</td>
                <td style="padding:8px 0;color:#111;font-size:13px;"><a href="mailto:${d.email}" style="color:#2E7FD0;">${d.email || '—'}</a></td>
              </tr>
            </table>

            <!-- Reply CTA -->
            <div style="background:#f0f7ff;border-left:3px solid #2E7FD0;border-radius:0 6px 6px 0;padding:14px 16px;margin-top:20px;">
              <p style="margin:0;font-size:12px;color:#555;">
                Hit <strong>Reply</strong> to send the requested documents to
                <strong>${d.name || 'the customer'}</strong>
                at <a href="mailto:${d.email}" style="color:#2E7FD0;">${d.email || '—'}</a>
              </p>
            </div>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 0;text-align:center;">
            <p style="margin:0;font-size:11px;color:#aaa;">
              Submitted via <a href="https://blaubatch.com" style="color:#aaa;">blaubatch.com</a> document request form
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export async function POST(request) {
  try {
    const ip = headers().get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
    const { allowed } = rateLimit(`doc-request:${ip}`, 5, 60_000)
    if (!allowed) {
      return Response.json({ error: 'Too many requests. Please wait a minute and try again.' }, { status: 429 })
    }

    const d = await request.json()

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars')
      return Response.json({ error: 'Email configuration missing' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    const subject = `Document Request: ${d.documents.length} doc${d.documents.length !== 1 ? 's' : ''} — ${d.company || d.name || 'New Lead'}`

    await transporter.sendMail({
      from: `"Blau Batch Website" <${process.env.GMAIL_USER}>`,
      to: RECIPIENTS,
      replyTo: d.email || '',
      subject,
      html: buildHtml(d),
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error.message)
    return Response.json({ error: error.message }, { status: 500 })
  }
}
