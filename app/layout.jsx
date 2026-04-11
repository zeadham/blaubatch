import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsApp from '@/components/WhatsApp'

export const metadata = {
  title: 'Blau Batch | Masterbatch Manufacturer & Distributor — Egypt & MENA',
  description: 'Blau Batch manufactures Filler Masterbatch and distributes the complete Coraplast range across MENA and Europe.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
        <WhatsApp />
        <Footer />
      </body>
    </html>
  )
}
