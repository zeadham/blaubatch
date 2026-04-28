export const metadata = { title: 'Blau Batch — Sales Tool Access', robots: 'noindex' }

export default function LoginPage({ searchParams }) {
  const error = searchParams?.error === '1'

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
        <style>{`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: 'Inter', sans-serif;
            background: #0d1526;
            display: flex; align-items: center; justify-content: center;
            min-height: 100vh;
            background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
            background-size: 28px 28px;
          }
          .card {
            background: #141B3E;
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 16px;
            padding: 44px 40px;
            width: 340px;
          }
          .wordmark { font-size: 18px; font-weight: 900; color: #D4840A; letter-spacing: 3px; margin-bottom: 6px; }
          .sub { font-size: 11px; color: rgba(255,255,255,0.35); letter-spacing: .5px; margin-bottom: 28px; }
          .shimmer { height: 2px; background: linear-gradient(90deg, transparent, #D4840A, transparent); margin-bottom: 28px; border-radius: 2px; }
          label { display: block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .8px; color: rgba(255,255,255,0.4); margin-bottom: 8px; }
          input {
            width: 100%; background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.12); border-radius: 8px;
            padding: 12px 14px; color: #fff; font-size: 14px;
            font-family: 'Inter', sans-serif; outline: none;
          }
          input:focus { border-color: rgba(212,132,10,0.5); }
          button {
            width: 100%; margin-top: 14px; padding: 13px;
            background: #D4840A; color: #fff; border: none; border-radius: 8px;
            font-size: 14px; font-weight: 700; font-family: 'Inter', sans-serif;
            cursor: pointer;
          }
          button:hover { background: #b8700a; }
          .err { margin-top: 12px; font-size: 12px; color: #f87171; text-align: center; }
        `}</style>
      </head>
      <body>
        <div className="card">
          <div className="wordmark">BLAU BATCH</div>
          <div className="sub">Sales Intelligence Tool</div>
          <div className="shimmer" />
          <form method="POST" action="/api/sales-auth">
            <label>Access Password</label>
            <input type="password" name="password" placeholder="Enter password" autoFocus />
            <button type="submit">Enter</button>
            {error && <p className="err">Incorrect password — try again</p>}
          </form>
        </div>
      </body>
    </html>
  )
}
